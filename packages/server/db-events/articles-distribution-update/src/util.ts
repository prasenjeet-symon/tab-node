import { AppwriteNodeJsClient, createArticleRelationSuggestion, fetchAllUserRelatedToTopic, fetchFullTopic } from '@tabnode/node-utils';
import { AWFunction, AppwriteCollection, MArticleDistribution, MArticleRelationSuggestion, MTopic, getPhaseUsersPercentage, getThreshold, serializeAppwriteData } from '@tabnode/utils';
import { produce } from 'immer';

/** Sort the topic ids  */
function sortTopicIds(topicIDS: string[]) {
    return [...topicIDS]
        .sort((a, b) => {
            const indexA = a.split('____')[1];
            const indexB = b.split('____')[1];
            return +indexA - +indexB;
        })
        .map((p) => p.split('____')[0]);
}

/** Sort the user ids */
function sortUserIds(userIDS: string[]) {
    return [...userIDS]
        .sort((a, b) => {
            const indexA = a.split('____')[1];
            const indexB = b.split('____')[1];
            return +indexA - +indexB;
        })
        .map((p) => p.split('____')[0]);
}

/** Can generate new phase if possible */
function canGenerateNewPhase(articleDistribution: MArticleDistribution.IArticleDistribution) {
    const totalUniqueUser = +articleDistribution.doc.among.split('_')[0];
    const threshold = getThreshold(articleDistribution.doc.phase, totalUniqueUser);
    return articleDistribution.doc.boostPoint >= threshold.boostPoint;
}

/** Can mark phase stale */
function canMarkPhaseStale(articleDistribution: MArticleDistribution.IArticleDistribution) {
    const totalUniqueUser = +articleDistribution.doc.among.split('_')[0];
    const threshold = getThreshold(+articleDistribution.doc.phase, totalUniqueUser);
    const thresholdImpressionCount = Math.floor((totalUniqueUser * threshold.impressionCountPercent) / 100);
    return articleDistribution.doc.impressionCount >= thresholdImpressionCount;
}
/**
 *
 *
 *
 *
 */
/** Create new phase if possible */
export async function createPhase(req: AWFunction.Req, oldData: MArticleDistribution.IArticleDistribution, newData: MArticleDistribution.IArticleDistribution) {
    // this function should continue if number of impression or boost point changes
    if (!((oldData.doc.boostPoint !== newData.doc.boostPoint || oldData.doc.impressionCount !== newData.doc.impressionCount) && !newData.doc.isStale)) {
        return;
    }

    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    // handle the boost point
    // this may result in new phase creation
    const handleBoostPoint = async () => {
        if (canGenerateNewPhase(newData)) {
            // this is time to create a new phase
            const topicIDS = sortTopicIds(newData.doc.topicIDS);
            const userIDS = sortUserIds(newData.doc.lastUserIDS);
            const fullTopics = (await Promise.all(topicIDS.map((topicID) => fetchFullTopic(topicID, database, databaseID)))).filter((p) => p !== null) as MTopic.ITopic[];
            const allUsersOfTopic = await Promise.all(fullTopics.map((topic, i) => fetchAllUserRelatedToTopic(newData.doc.phase + 1, topic, userIDS[i], newData.doc.trackOrder, database, databaseID)));

            const newTopicIDS: string[] = topicIDS.map((p, i) => `${p}____${i + 1}`);
            const newLastUserIDS: string[] = allUsersOfTopic.map((p, i) => {
                if (p.users.length === 0) return `${p.oldLastUserID}____${i + 1}`;
                const lastUser = p.users[p.users.length - 1];
                return `${lastUser.docID}____${i}`;
            });

            const uniqueUsers = allUsersOfTopic
                .map((p) => p.users)
                .flat()
                .filter((p, i, a) => a.findIndex((t) => t.docID === p.docID) === i);
            const newPhaseUserPercentage = getPhaseUsersPercentage(newData.doc.phase + 1);
            const newAmong = `${uniqueUsers.length}_${newPhaseUserPercentage}`;

            const newArticleDistributionPhase: MArticleDistribution.IArticleDistribution = {
                id: client.uniqueID(),
                doc: {
                    among: newAmong,
                    article: {
                        docID: newData.doc.article.docID,
                        title: newData.doc.article.title,
                    },
                    boostPoint: 0,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    impressionCount: 0,
                    isStale: false,
                    lastUserIDS: newLastUserIDS,
                    phase: newData.doc.phase + 1,
                    topicIDS: newTopicIDS,
                    trackOrder: newData.doc.trackOrder,
                },
            };

            if (uniqueUsers.length !== 0) {
                await database.createDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, newArticleDistributionPhase.id, serializeAppwriteData(newArticleDistributionPhase.doc), []);
            }

            // add article to the new phase users feed
            const newArticleSuggestionFeed = uniqueUsers.map((p) => {
                const articleSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion = {
                    id: client.uniqueID(),
                    doc: {
                        article: newData.doc.article,
                        boostPoint: 3,
                        createdAt: new Date(),
                        for: p,
                        impressionCount: 0,
                        isStale: false,
                        updatedAt: new Date(),
                    },
                };

                return articleSuggestion;
            });

            await Promise.allSettled(newArticleSuggestionFeed.map((p) => createArticleRelationSuggestion(p, database, databaseID)));
            return true; // generated new phase
        } else {
            return false; // not generated new phase
        }
    };

    // handle the impression count
    const handleImpressionCount = async (isNewPhaseCreated: boolean) => {
        if (isNewPhaseCreated) {
            const updatedArticleDistribution = produce(newData, (draft) => {
                draft.doc.isStale = true;
            });

            await database.updateDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, newData.id, serializeAppwriteData(updatedArticleDistribution));
            return;
        }

        // no new phase is created
        if (canMarkPhaseStale(newData)) {
            const updatedArticleDistribution = produce(newData, (draft) => {
                draft.doc.isStale = true;
            });

            await database.updateDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, newData.id, serializeAppwriteData(updatedArticleDistribution));
        }
    };

    if (newData.doc.phase === 3) {
        // there is no need to create new phase because this the last phase
        // just check if we can mark this phase stale or not
        // if we can then just mark and return
        await handleImpressionCount(false);
        return;
    }

    const isNewPhaseCreated = await handleBoostPoint();
    await handleImpressionCount(isNewPhaseCreated);
}
