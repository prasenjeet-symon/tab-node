import { AppwriteErrorReporterNodeJs, AppwriteNodeJsClient } from '@tabnode/node-utils';
import { AWFunction, AppwriteCollection, ArticleBoostPoints, MArticle, MArticleComment, MArticleDistribution, MArticleTopicRelationship, MTopic, MUser, MUserActivity, MUserNotification, MUserRelationSuggestion, MUserRelationship, UserBoostPoints, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { produce } from 'immer';
import { Permission, Query, Role } from 'node-appwrite';

/**
 * Add notification for the author about the comment received on the article
 * @param req  : AWFunction.Req
 * @param aComment  : MArticleComment.IArticleComment
 *
 */
export async function addNotificationForAuthor(req: AWFunction.Req, aComment: MArticleComment.IArticleComment) {
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const notification: MUserNotification.IUserNotification = {
        id: client.uniqueID(),
        doc: {
            createdAt: new Date(),
            isRead: false,
            link: '',
            title: `${aComment.doc.commentedBy.fullName} commented on your article ${aComment.doc.article.title}`,
            notification: `${aComment.doc.body}`,
            originator: {
                aboutMe: aComment.doc.commentedBy.aboutMe,
                docID: aComment.doc.commentedBy.docID,
                fullName: aComment.doc.commentedBy.fullName,
                profilePic: aComment.doc.commentedBy.profilePic,
                type: 'USER',
            },
            topic: 'COMMENT',
            updatedAt: new Date(),
            user: aComment.doc.writer, // For whom the notification is sent
        },
    };

    await database.createDocument(databaseID, AppwriteCollection.USER_NOTIFICATIONS, notification.id, serializeAppwriteData(notification.doc), [
        Permission.write(Role.user(notification.doc.user.docID)),
        Permission.delete(Role.user(notification.doc.user.docID)),
        Permission.update(Role.user(notification.doc.user.docID)),
        Permission.read(Role.user(notification.doc.user.docID)),
    ]);
}

/**
 * Increase the boost point of the article because of the comment. Note that increasing the boost point of the article is same as increasing the boost point of related topics.
 * @param req : AWFunction.Req
 * @param aComment : MArticleComment.IArticleComment
 */
export async function incDecBoostPointOfArticle(req: AWFunction.Req, aComment: MArticleComment.IArticleComment) {
    if (!aComment) return;

    try {
        const client = new AppwriteNodeJsClient(req);
        const database = client.database();
        const databaseID = client.databaseID();

        const fetchArticleOfTopic = async (articleDocID: string) => {
            const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('article_docID', articleDocID)]);
            return snap.documents.map((doc) => deserializeAppwriteData(doc) as MArticleTopicRelationship.IArticleTopicRelationship);
        };

        let articleTopicRelations = await fetchArticleOfTopic(aComment.doc.article.docID);

        const boostPoint = ArticleBoostPoints.comment;
        // updated the boost point
        articleTopicRelations = produce(articleTopicRelations, (draft) => {
            draft.forEach((p) => {
                p.doc.trend.boostPoint = p.doc.trend.boostPoint + boostPoint;
            });
        });

        await Promise.all(articleTopicRelations.map((p) => database.updateDocument(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, p.id, serializeAppwriteData(p.doc))));
    } catch (error) {
        AppwriteErrorReporterNodeJs.report(error);
        throw error;
    }
}

/**
 * Increase or decrease the boost point of the article distribution because of the comment which decide the popularity of the article
 * @param req : AWFunction.Req
 * @param aComment : MArticleComment.IArticleComment
 * @returns : void
 */
export async function increaseDecreaseBoostPointOfArticleDistribution(req: AWFunction.Req, aComment: MArticleComment.IArticleComment) {
    if (!aComment) return;

    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    // fetch active article distribution latest of this article
    const fetchArticleDistribution = async (articleDocID: string) => {
        const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, [Query.equal('article_docID', articleDocID), Query.equal('isStale', false), Query.orderDesc('createdAt'), Query.limit(1)]);
        const allArticleDistributions = snap.documents.map((doc) => deserializeAppwriteData(doc) as MArticleDistribution.IArticleDistribution);
        if (allArticleDistributions.length === 0) return null;
        return allArticleDistributions[0];
    };

    const articleDistribution = await fetchArticleDistribution(aComment.doc.article.docID);
    if (!articleDistribution) return;
    const boostPoint = ArticleBoostPoints.comment;

    // update the boost point
    const updatedArticleDistribution = produce(articleDistribution, (draft) => {
        draft.doc.updatedAt = new Date();
        draft.doc.boostPoint = draft.doc.boostPoint + boostPoint;
    });

    await database.updateDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, updatedArticleDistribution.id, serializeAppwriteData(updatedArticleDistribution.doc));
}

/**
 * Increase boost point of the commenter because he/she commented on the article which represent the engagement on the platform.
 * @param req : AWFunction.Req
 * @param aComment : MArticleComment.IArticleComment
 * @returns : void
 */
export async function increaseBoostPointOfUser(req: AWFunction.Req, aComment: MArticleComment.IArticleComment) {
    if (!aComment) return;

    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const user = aComment.doc.commentedBy;

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
    const boostPoint = UserBoostPoints.comment;

    const updatedUser = produce(fullUser, (draft) => {
        draft.doc.trend.numberOfComments = draft.doc.trend.numberOfComments + 1;
        draft.doc.trend.boostPoint = draft.doc.trend.boostPoint + boostPoint;
        draft.doc.updatedAt = new Date();
    });

    await database.updateDocument(databaseID, AppwriteCollection.USERS, updatedUser.id, serializeAppwriteData(updatedUser.doc));
}

/**
 * Increase the relationship strength of the author and the user, because the user did some action for the author
 * @param req : AWFunction.Req
 * @param aComment : MArticleComment.IArticleComment
 * @returns : void
 */
export async function increaseDecreaseRelationshipStrengthOfAuthorAndUser(req: AWFunction.Req, aComment: MArticleComment.IArticleComment) {
    // in this case user will gift to author because user did some action for the author
    // user is interested in author he must scarifies something as gift to make relationship with author
    // ( user ) -----> ( author ) relation graph
    if (!aComment) return;

    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const fetchFullArticle = async (articleDocID: string) => {
        try {
            const snap = await database.getDocument(databaseID, AppwriteCollection.ARTICLES, articleDocID);
            return deserializeAppwriteData(snap) as MArticle.IArticle;
        } catch (error) {
            AppwriteErrorReporterNodeJs.report(error);
            if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return null;
            return null;
        }
    };

    const fullArticle = await fetchFullArticle(aComment.doc.article.docID);
    if (!fullArticle) return;
    const boostPoint = UserBoostPoints.comment;

    const fetchFollowRelation = async (fromUser: MUser.SUser, toUser: MUser.SUser) => {
        const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_RELATIONSHIPS, [Query.equal('fromUser_docID', fromUser.docID), Query.equal('toUser_docID', toUser.docID)]);
        if (snap.total === 0) return null;
        return deserializeAppwriteData(snap.documents[0]) as MUserRelationship.IUserRelationship;
    };

    const followRelation = await fetchFollowRelation(aComment.doc.commentedBy, fullArticle.doc.writer);

    if (followRelation) {
        // add boost point to the to trend ( user ) ----> ( author )
        const updatedFollowRelation = produce(followRelation, (draft) => {
            draft.doc.updatedAt = new Date();
            draft.doc.toTrend.boostPoint = draft.doc.toTrend.boostPoint + boostPoint;
        });

        await database.updateDocument(databaseID, AppwriteCollection.USER_RELATIONSHIPS, updatedFollowRelation.id, serializeAppwriteData(updatedFollowRelation.doc));
    }
}

/**
 * Suggest user author to follow ( user might be interested in author and may want to receive article notification in the form the story )
 * @param req : AWFunction.Req
 * @param aComment : MArticleComment.IArticleComment
 * @returns : void
 */
export async function suggestUserAuthorToFollow(req: AWFunction.Req, aComment: MArticleComment.IArticleComment) {
    if (!aComment) return;

    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const fetchFullArticle = async (articleDocID: string) => {
        try {
            const snap = await database.getDocument(databaseID, AppwriteCollection.ARTICLES, articleDocID);
            return deserializeAppwriteData(snap) as MArticle.IArticle;
        } catch (error) {
            AppwriteErrorReporterNodeJs.report(error);
            if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return null;
            return null;
        }
    };

    const fullArticle = await fetchFullArticle(aComment.doc.article.docID);
    if (!fullArticle) return;

    const fetchFollowRelation = async (fromUser: MUser.SUser, toUser: MUser.SUser) => {
        const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_RELATIONSHIPS, [Query.equal('fromUser_docID', fromUser.docID), Query.equal('toUser_docID', toUser.docID)]);
        if (snap.total === 0) return null;
        return deserializeAppwriteData(snap.documents[0]) as MUserRelationship.IUserRelationship;
    };

    const followRelation = await fetchFollowRelation(aComment.doc.commentedBy, fullArticle.doc.writer);
    if (followRelation) {
        // user is already following author
        // no need to suggest author to follow
        return;
    }

    const fetchFollowSuggestion = async (user: MUser.SUser, author: MUser.SUser) => {
        const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, [Query.equal('for_docID', user.docID), Query.equal('user_docID', author.docID)]);
        if (snap.total === 0) return null;
        return deserializeAppwriteData(snap.documents[0]) as MUserRelationSuggestion.IUserRelationSuggestion;
    };

    const followSuggestion = await fetchFollowSuggestion(aComment.doc.commentedBy, fullArticle.doc.writer);
    if (followSuggestion) {
        // author is already suggested to the user
        // no need to suggest author to follow
        return;
    }

    // create follow suggestion
    const newFollowSuggestion: MUserRelationSuggestion.IUserRelationSuggestion = {
        id: client.uniqueID(),
        doc: {
            boostPoint: 3, // three impression ( 3 )
            createdAt: new Date(),
            for: aComment.doc.commentedBy,
            user: fullArticle.doc.writer,
            impressionCount: 0,
            isStale: false,
            updatedAt: new Date(),
        },
    };

    await database.createDocument(databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, newFollowSuggestion.id, serializeAppwriteData(newFollowSuggestion.doc), [
        Permission.write(Role.user(newFollowSuggestion.doc.for.docID)),
        Permission.delete(Role.user(newFollowSuggestion.doc.for.docID)),
        Permission.update(Role.user(newFollowSuggestion.doc.for.docID)),
        Permission.read(Role.user(newFollowSuggestion.doc.for.docID)),
    ]);
}

/**
 * Increase the boost point of the related universal topics because the user commented on the article
 * @param req : AWFunction.Req
 * @param aComment : MArticleComment.IArticleComment
 */
export async function increaseDecreaseRelatedTopicsBoostPoint(req: AWFunction.Req, aComment: MArticleComment.IArticleComment) {
    if (!aComment) return;
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

    const allTopicsOfArticle = await fetchAllTopicsOfArticle(aComment.doc.article.docID);
    const allFullTopics = (await Promise.all(allTopicsOfArticle.map((topic) => fetchFullTopic(topic.doc.topic.docID)))).filter((p) => p !== null) as MTopic.ITopic[];

    // increase or decrease boost point of related topics
    const updatedTopics = allFullTopics.map((topic) => {
        const boostPoint = ArticleBoostPoints.comment;
        const updatedTopic = produce(topic, (draft) => {
            draft.doc.updatedAt = new Date();
            draft.doc.weeklyTrend.boostPoint = draft.doc.weeklyTrend.boostPoint + boostPoint;
            draft.doc.monthlyTrend.boostPoint = draft.doc.monthlyTrend.boostPoint + boostPoint;
        });

        return updatedTopic;
    });

    await Promise.all(updatedTopics.map((topic) => database.updateDocument(databaseID, AppwriteCollection.TOPICS, topic.id, serializeAppwriteData(topic.doc))));
}

/**
 * Add new activity for the user, because the user commented on the article and this should re recorded as an activity on the user profile
 * @param req : AWFunction.Req
 * @param aComment : MArticleComment.IArticleComment
 */
export async function addNewActivityForUser(req: AWFunction.Req, aComment: MArticleComment.IArticleComment) {
    if(!aComment) return;
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const activity: MUserActivity.IUserActivity = {
        id: client.uniqueID(),
        doc: {
            action: 'COMMENT',
            article: aComment.doc.article,
            createdAt: new Date(),
            updatedAt: new Date(),
            user: aComment.doc.commentedBy,
        },
    };

    await database.createDocument(databaseID, AppwriteCollection.USER_ACTIVITIES, activity.id, serializeAppwriteData(activity.doc), [Permission.write(Role.user(activity.doc.user.docID)), Permission.delete(Role.user(activity.doc.user.docID)), Permission.update(Role.user(activity.doc.user.docID)), Permission.read(Role.any())]);
}
