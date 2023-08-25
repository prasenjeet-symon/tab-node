import { AppwriteErrorReporterNodeJs, AppwriteNodeJsClient, createArticleRelationSuggestion, fetchFullTopic } from '@tabnode/node-utils';
import {
    AWFunction,
    AppwriteCollection,
    ArticleBoostPoints,
    MArticle,
    MArticleDistribution,
    MArticleRelationSuggestion,
    MArticleStory,
    MArticleStoryDistribution,
    MArticleTopicRelationship,
    MTopic,
    MUser,
    MUserActivity,
    MUserNotification,
    MUserRelationship,
    MUserTopicRelationship,
    UserBoostPoints,
    deserializeAppwriteData,
    getUsersCountForArticleSuggestion,
    serializeAppwriteData,
} from '@tabnode/utils';
import { produce } from 'immer';
import { Databases, Permission, Query, Role } from 'node-appwrite';

/** Fetch all topic of given article */
async function fetchAllTopicsOfArticle(articleDocID: string, database: Databases, databaseID: string) {
    try {
        const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('article_docID', articleDocID)]);
        const finalData = snap.documents.map((p) => deserializeAppwriteData(p) as MArticleTopicRelationship.IArticleTopicRelationship);
        return finalData.map((p) => p.doc.topic);
    } catch (error) {
        AppwriteErrorReporterNodeJs.report(error);
        if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return [];
        return [];
    }
}

/** Fetch latest phase one distribution */
async function fetchLatestPhaseOneDistribution(database: Databases, databaseID: string) {
    try {
        const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, [Query.equal('phase', 1), Query.orderDesc('createdAt'), Query.limit(1)]);
        if (snap.total === 0) return null;
        return deserializeAppwriteData(snap.documents[0]) as MArticleDistribution.IArticleDistribution;
    } catch (error) {
        AppwriteErrorReporterNodeJs.report(error);
        if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return null;
        return null;
    }
}

/** Fetch all the users of given topic */
async function fetchAllUsersOfTopic(topicDocID: string, order: MArticleDistribution.trackOrderType, limit: number, database: Databases, databaseID: string) {
    try {
        const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [Query.equal('topic_docID', topicDocID), order === 'DATE_ASC' ? Query.orderAsc('createdAt') : Query.orderDesc('createdAt'), Query.limit(+limit)]);
        return snap.documents.map((p) => deserializeAppwriteData(p) as MUserTopicRelationship.IUserTopicRelationship);
    } catch (error) {
        AppwriteErrorReporterNodeJs.report(error);
        if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return [];
        return [];
    }
}
/**
 *
 *
 *
 *
 *
 */

/** Create the article distribution */
export async function createArticleDistribution(req: AWFunction.Req, article: MArticle.IArticle) {
    if (!article) return;

    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const topics = await fetchAllTopicsOfArticle(article.id, database, databaseID);
    const allFullTopics = await Promise.all(topics.map((p) => fetchFullTopic(p.docID, database, databaseID)));
    const articleDistributionLatest = await fetchLatestPhaseOneDistribution(database, databaseID);
    const finalTrackOrder = articleDistributionLatest ? (articleDistributionLatest.doc.trackOrder === 'DATE_ASC' ? MArticleDistribution.enum_trackOrderType.DATE_DESC : MArticleDistribution.enum_trackOrderType.DATE_ASC) : MArticleDistribution.enum_trackOrderType.DATE_ASC;

    const targetUsersCounts = allFullTopics.map((p) => {
        if (!p) return null;
        const count = getUsersCountForArticleSuggestion(1, p.doc.associatedUsersCount);
        return { topic: p, targetUsers: count };
    });

    let targetUsers = await Promise.all(
        targetUsersCounts.map(async (p) => {
            if (!p) return null;
            const topicUsers = await fetchAllUsersOfTopic(p.topic.id, finalTrackOrder, p.targetUsers, database, databaseID);
            const lastUser = topicUsers.length > 0 ? topicUsers[topicUsers.length - 1] : null;
            return { topic: p.topic, users: topicUsers, lastCursor: lastUser ? lastUser.id : 'undefined' };
        })
    );

    const topicIDS = targetUsers.map((p, i) => (p ? `${p.topic.id}____${i + 1}` : ''));
    const lastUserIDS = targetUsers.map((p, i) => (p ? `${p.lastCursor}____${i + 1}` : ''));
    const allUsers = targetUsers
        .map((p) => p?.users)
        .flat()
        .map((p) => p?.doc.user) as MUser.SUser[];

    const uniqueUsers = allUsers.filter((v, i, a) => a.findIndex((t) => t.docID === v.docID) === i);

    // add this article to all the user feed
    await Promise.allSettled(
        uniqueUsers.map(async (user) => {
            const articleSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion = {
                id: client.uniqueID(),
                doc: {
                    for: user,
                    article: {
                        docID: article.id,
                        title: article.doc.title,
                    },
                    boostPoint: 3, // 3 impression
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    impressionCount: 0,
                    isStale: false,
                },
            };

            await createArticleRelationSuggestion(articleSuggestion, database, databaseID);
        })
    );

    // create article distribution
    const articleDistribution: MArticleDistribution.IArticleDistribution = {
        id: client.uniqueID(),
        doc: {
            among: `${uniqueUsers.length}_${MArticleDistribution.enum_articlePhase.PHASE_1}`,
            article: {
                docID: article.id,
                title: article.doc.title,
            },
            boostPoint: 0,
            createdAt: new Date(),
            impressionCount: 0,
            isStale: false,
            lastUserIDS: lastUserIDS,
            topicIDS: topicIDS,
            phase: 1,
            updatedAt: new Date(),
            trackOrder: finalTrackOrder,
        },
    };

    if (uniqueUsers.length !== 0) {
        await database.createDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, articleDistribution.id, serializeAppwriteData(articleDistribution.doc), []); // empty permissions list because no client is allowed to access this
    }
}

/** Update the boost point of the author */

export async function increaseBoostPointOfUser(req: AWFunction.Req, article: MArticle.IArticle) {
    // database connections
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const user = article.doc.writer;

    const fetchUser = async (userDocID: string) => {
        try {
            const snap = await database.getDocument(databaseID, AppwriteCollection.USERS, userDocID);
            return deserializeAppwriteData(snap) as MUser.IUser;
        } catch (error) {
            AppwriteErrorReporterNodeJs.report(error);
            if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return null;
            return null;
        }
    };

    const fullUser = await fetchUser(user.docID);
    if (!fullUser) return;

    const boostPoint = UserBoostPoints.create;
    const updatedUser = produce(fullUser, (draft) => {
        draft.doc.trend.numberOfArticles = draft.doc.trend.numberOfArticles + 1;
        draft.doc.trend.boostPoint = draft.doc.trend.boostPoint + boostPoint;
        draft.doc.updatedAt = new Date();
    });

    await database.updateDocument(databaseID, AppwriteCollection.USERS, updatedUser.id, serializeAppwriteData(updatedUser.doc));
}

/** Increase / decrease related topics boost point */
export async function increaseDecreaseRelatedTopicsBoostPoint(req: AWFunction.Req, article: MArticle.IArticle) {
    // database connection
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    // fetch all the topics of involved article
    const fetchAllTopicsOfArticle = async (articleDocID: string) => {
        const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('article_docID', articleDocID)]);
        return snap.documents.map((doc) => deserializeAppwriteData(doc) as MArticleTopicRelationship.IArticleTopicRelationship);
    };

    // fetch full topic given topic docID
    const fetchFullTopic = async (topicDocID: string) => {
        try {
            const snap = await database.getDocument(databaseID, AppwriteCollection.TOPICS, topicDocID);
            return deserializeAppwriteData(snap) as MTopic.ITopic;
        } catch (error) {
            AppwriteErrorReporterNodeJs.report(error);
            if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) null;
            return null;
        }
    };

    const allTopicsOfArticle = await fetchAllTopicsOfArticle(article.id);
    const allFullTopics = (await Promise.all(allTopicsOfArticle.map((topic) => fetchFullTopic(topic.doc.topic.docID)))).filter((p) => p !== null) as MTopic.ITopic[];

    // increase or decrease boost point of related topics
    const updatedTopics = allFullTopics.map((topic) => {
        const boostPoint = ArticleBoostPoints.create;
        const updatedTopic = produce(topic, (draft) => {
            draft.doc.updatedAt = new Date();
            draft.doc.weeklyTrend.boostPoint = draft.doc.weeklyTrend.boostPoint + boostPoint;
            draft.doc.monthlyTrend.boostPoint = draft.doc.monthlyTrend.boostPoint + boostPoint;
        });

        return updatedTopic;
    });

    await Promise.all(updatedTopics.map((topic) => database.updateDocument(databaseID, AppwriteCollection.TOPICS, topic.id, serializeAppwriteData(topic.doc))));
}

/** Add notification to the author */
export async function addNotificationForAuthor(req: AWFunction.Req, article: MArticle.IArticle) {
    // database connection
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const notification: MUserNotification.IUserNotification = {
        id: client.uniqueID(),
        doc: {
            createdAt: new Date(),
            isRead: false,
            link: '',
            title: `Article is live now!`,
            notification: `Your article ${article.doc.title} is live now and visible to potential users.`,
            originator: {
                aboutMe: '',
                docID: 'null',
                fullName: '',
                profilePic: '',
                type: 'TABNODE',
            },
            topic: 'GENERAL',
            updatedAt: new Date(),
            user: article.doc.writer,
        },
    };

    await database.createDocument(databaseID, AppwriteCollection.USER_NOTIFICATIONS, notification.id, serializeAppwriteData(notification.doc), [
        Permission.write(Role.user(notification.doc.user.docID)),
        Permission.delete(Role.user(notification.doc.user.docID)),
        Permission.update(Role.user(notification.doc.user.docID)),
        Permission.read(Role.user(notification.doc.user.docID)),
    ]);
}

/** Add new activity for the author */
export async function addNewActivityForUser(req: AWFunction.Req, article: MArticle.IArticle) {
    // database connection
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const activity: MUserActivity.IUserActivity = {
        id: client.uniqueID(),
        doc: {
            action: 'CREATE',
            article: {
                docID: article.id,
                title: article.doc.title,
            },
            createdAt: new Date(),
            updatedAt: new Date(),
            user: article.doc.writer,
        },
    };

    await database.createDocument(databaseID, AppwriteCollection.USER_ACTIVITIES, activity.id, serializeAppwriteData(activity.doc), [
        Permission.write(Role.user(activity.doc.user.docID)),
        Permission.delete(Role.user(activity.doc.user.docID)),
        Permission.update(Role.user(activity.doc.user.docID)),
        Permission.read(Role.any()),
    ]);
}

/** Make new article story if  applicable */
export async function makeArticleStory(req: AWFunction.Req, article: MArticle.IArticle) {
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const writer = article.doc.writer;
    // fetch all the followers of this writer
    const followersSnap = await database.listDocuments(databaseID, AppwriteCollection.USER_RELATIONSHIPS, [Query.equal('toUser_docID', writer.docID)]);
    const followers = followersSnap.documents.map((doc) => deserializeAppwriteData(doc) as MUserRelationship.IUserRelationship).map((p) => p.doc.fromUser);

    // fetch all the article stories distribution of every user
    const addArticleStoryDistribution = async (user: MUser.SUser, story: MArticleStory.IArticleStory) => {
        const articleDistribution: MArticleStoryDistribution.IArticleStoryDistribution = {
            id: client.uniqueID(),
            doc: {
                boostPoint: 0,
                createdAt: new Date(),
                expireAt: story.doc.expireAt,
                for: user,
                isSeen: false,
                story: { docID: story.id },
                updatedAt: new Date(),
            },
        };

        await database.createDocument(databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, articleDistribution.id, serializeAppwriteData(articleDistribution.doc), [
            Permission.write(Role.user(articleDistribution.doc.for.docID)),
            Permission.delete(Role.user(articleDistribution.doc.for.docID)),
            Permission.update(Role.user(articleDistribution.doc.for.docID)),
            Permission.read(Role.user(articleDistribution.doc.for.docID)),
        ]);
    };

    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 24);

    // create a single article story
    const story: MArticleStory.IArticleStory = {
        id: client.uniqueID(),
        doc: {
            article: { docID: article.id, title: article.doc.title },
            user: article.doc.writer,
            createdAt: new Date(),
            expireAt: currentDate,
            updatedAt: new Date(),
            story: {
                backgroundImage: article.doc.coverImage,
                summery: article.doc.subTitle, // we need to use the lama facebook model for this
            },
        },
    };

    await database.createDocument(databaseID, AppwriteCollection.ARTICLE_STORIES, story.id, serializeAppwriteData(story.doc), [
        Permission.write(Role.user(story.doc.user.docID)),
        Permission.delete(Role.user(story.doc.user.docID)),
        Permission.update(Role.user(story.doc.user.docID)),
        Permission.read(Role.any()),
    ]);

    await Promise.all(followers.map((user) => addArticleStoryDistribution(user, story)));
}
