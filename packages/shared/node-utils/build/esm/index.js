import { Client, Databases, AppwriteException, Query, Permission, Role } from 'node-appwrite';

// Appwrite collections
class AppwriteCollection {
    static USERS = 'USERS';
    static BADGES = 'BADGES';
    static TOPICS = 'TOPICS';
    static ARTICLES = 'ARTICLES';
    static COMMENTS = 'COMMENTS';
    static LIKES = 'LIKES';
    static ADDRESSES = 'ADDRESSES';
    static SAVED_ARTICLES = 'SAVED_ARTICLES';
    static ARTICLE_READERS = 'ARTICLE_READERS';
    static BADGE_CHALLENGES = 'BADGE_CHALLENGES';
    static USER_RELATIONSHIPS = 'USER_RELATIONSHIPS';
    static USER_TOPIC_RELATIONSHIPS = 'USER_TOPIC_RELATIONSHIPS';
    static ARTICLE_TOPIC_RELATIONSHIPS = 'ARTICLE_TOPIC_RELATIONSHIPS';
    static USER_RELATION_SUGGESTIONS = 'USER_RELATION_SUGGESTIONS';
    static USER_ARTICLE_SUGGESTIONS = 'USER_ARTICLE_SUGGESTIONS';
    static USER_ACTIVITIES = 'USER_ACTIVITIES';
    static USER_NOTIFICATIONS = 'USER_NOTIFICATIONS';
    static SPONSORS = 'SPONSORS';
    static DRAFTED_ARTICLES = 'DRAFTED_ARTICLES';
    static TRANSACTIONS = 'TRANSACTIONS';
    static ARTICLE_STORIES = 'ARTICLE_STORIES';
    static ARTICLE_SERIES = 'ARTICLE_SERIES';
    static ARTICLE_STORIES_DISTRIBUTION = 'ARTICLE_STORIES_DISTRIBUTION';
    static USER_SOCIAL_LINKS = 'USER_SOCIAL_LINKS';
    static ARTICLES_DISTRIBUTION = 'ARTICLES_DISTRIBUTION';
}
/**
 *
 * For the article likes
 *
 */
var MArticleLike;
(function (MArticleLike) {
    (function (ENUM_likesStatus) {
        ENUM_likesStatus["LIKED"] = "LIKED";
        ENUM_likesStatus["DISLIKED"] = "DISLIKED";
    })(MArticleLike.ENUM_likesStatus || (MArticleLike.ENUM_likesStatus = {}));
})(MArticleLike || (MArticleLike = {}));
/**
 *
 * For the badge challenges
 *
 */
var MBadgeChallenge;
(function (MBadgeChallenge) {
    (function (ENUM_badgeStatus) {
        ENUM_badgeStatus["PENDING"] = "PENDING";
        ENUM_badgeStatus["COMPLETED"] = "COMPLETED";
        ENUM_badgeStatus["FAILED"] = "FAILED";
    })(MBadgeChallenge.ENUM_badgeStatus || (MBadgeChallenge.ENUM_badgeStatus = {}));
})(MBadgeChallenge || (MBadgeChallenge = {}));
/**
 *
 * For the user activity
 *
 */
var MUserActivity;
(function (MUserActivity) {
    (function (ENUM_activityAction) {
        ENUM_activityAction["LIKE"] = "LIKE";
        ENUM_activityAction["READ"] = "READ";
        ENUM_activityAction["COMMENT"] = "COMMENT";
        ENUM_activityAction["SAVE"] = "SAVE";
        ENUM_activityAction["CREATE"] = "CREATE";
        ENUM_activityAction["DISLIKE"] = "DISLIKE";
        ENUM_activityAction["JOINED"] = "JOINED";
    })(MUserActivity.ENUM_activityAction || (MUserActivity.ENUM_activityAction = {}));
})(MUserActivity || (MUserActivity = {}));
/**
 *
 * For the user notification
 *
 */
var MUserNotification;
(function (MUserNotification) {
    (function (ENUM_notificationTopic) {
        ENUM_notificationTopic["LIKE"] = "LIKE";
        ENUM_notificationTopic["COMMENT"] = "COMMENT";
        ENUM_notificationTopic["FOLLOW"] = "FOLLOW";
        ENUM_notificationTopic["MENTION"] = "MENTION";
        ENUM_notificationTopic["GENERAL"] = "GENERAL";
    })(MUserNotification.ENUM_notificationTopic || (MUserNotification.ENUM_notificationTopic = {}));
})(MUserNotification || (MUserNotification = {}));
/** For the articles distribution */
var MArticleDistribution;
(function (MArticleDistribution) {
    (function (enum_trackOrderType) {
        enum_trackOrderType["DATE_ASC"] = "DATE_ASC";
        enum_trackOrderType["DATE_DESC"] = "DATE_DESC";
    })(MArticleDistribution.enum_trackOrderType || (MArticleDistribution.enum_trackOrderType = {}));
    (function (enum_articlePhase) {
        enum_articlePhase[enum_articlePhase["PHASE_1"] = 10] = "PHASE_1";
        enum_articlePhase[enum_articlePhase["PHASE_2"] = 30] = "PHASE_2";
        enum_articlePhase[enum_articlePhase["PHASE_3"] = 60] = "PHASE_3";
    })(MArticleDistribution.enum_articlePhase || (MArticleDistribution.enum_articlePhase = {}));
})(MArticleDistribution || (MArticleDistribution = {}));

/** Is pure JSON Object */
function isPureJSONObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && Object.prototype.toString.call(value) === '[object Object]';
}
/** Convert the data to appwrite  */
function serializeAppwriteData(data, keyStr = '') {
    const result = {};
    for (const key of Object.keys(data)) {
        const value = data[key];
        if (isPureJSONObject(value)) {
            const finalResult = serializeAppwriteData(value, `${keyStr}${key}_`);
            Object.assign(result, finalResult);
        }
        else {
            result[`${keyStr}${key}`] = value;
        }
    }
    return result;
}
/** Deserialize the data from appwrite*/
function deserializeAppwriteData(serializedData) {
    const result = {};
    for (const key of Object.keys(serializedData)) {
        const value = serializedData[key];
        const keys = key.split('_');
        let currentObj = result;
        for (let i = 0; i < keys.length; i++) {
            const currentKey = keys[i];
            if (i === keys.length - 1) {
                currentObj[currentKey] = value;
            }
            else {
                if (!currentObj[currentKey] || !isPureJSONObject(currentObj[currentKey])) {
                    currentObj[currentKey] = {};
                }
                currentObj = currentObj[currentKey];
            }
        }
    }
    const finalData = { id: serializedData['$id'], doc: result };
    return finalData;
}
/** Get total number of users for the AB testing */
function getUsersCountForArticleSuggestion(phase, totalUsers) {
    switch (phase) {
        case 1:
            return Math.floor((MArticleDistribution.enum_articlePhase.PHASE_1 * totalUsers) / 100);
        case 2:
            return Math.floor((MArticleDistribution.enum_articlePhase.PHASE_2 * totalUsers) / 100);
        case 3:
            return Math.floor((MArticleDistribution.enum_articlePhase.PHASE_3 * totalUsers) / 100);
        default:
            return 0;
    }
}

/** Init the nodejs appwrite client */
class AppwriteNodeJsClient {
    client;
    databaseInstance;
    constructor() {
        this.client = new Client();
        // set the config
        this.client
            .setEndpoint(process.env.APPWRITE_ENDPOINT || '') // Your API Endpoint
            .setProject(process.env.APPWRITE_PROJECT_ID || '') // Your project ID
            .setKey(process.env.APPWRITE_API_KEY || ''); // Your secret API key
    }
    database() {
        this.databaseInstance = new Databases(this.client);
        return this.databaseInstance;
    }
    databaseID() {
        return process.env.APPWRITE_DATABASE_ID || '';
    }
}
class AppwriteErrorReporterNodeJs {
    static report(error) {
        if (error instanceof AppwriteException) {
            // Handle the error as an AppwriteException
            console.error('AppwriteExceptionReport:', error.message);
        }
        else {
            // Handle other types of errors
            console.error('Other error:', error);
        }
    }
    static isDocumentNotFound(error) {
        if (error instanceof AppwriteException) {
            return error.code === 404;
        }
        else {
            return false;
        }
    }
}
async function fetchFullTopic(topicID, database, databaseID) {
    try {
        const snap = await database.getDocument(databaseID, AppwriteCollection.TOPICS, topicID);
        return deserializeAppwriteData(snap);
    }
    catch (error) {
        AppwriteErrorReporterNodeJs.report(error);
        if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error))
            return null;
        return null;
    }
}
/** Fetch all users related to given topic */
async function fetchAllUserRelatedToTopic(phase, topic, lastUserID, sortType, database, databaseID) {
    const limit = getUsersCountForArticleSuggestion(phase, topic.doc.associatedUsersCount);
    const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [
        Query.equal('topic_docID', topic.id),
        sortType === 'DATE_ASC' ? Query.orderAsc('createdAt') : Query.orderDesc('createdAt'),
        lastUserID === 'undefined' ? '' : Query.cursorAfter(lastUserID),
        Query.limit(+limit),
    ]);
    const finalData = snap.documents.map((p) => {
        return deserializeAppwriteData(p);
    });
    return { topic: topic, users: finalData.map((p) => p.doc.user), oldLastUserID: lastUserID };
}
/** Create new article suggestion if possible  */
async function createArticleRelationSuggestion(aRSuggestion, database, databaseID) {
    await database.createDocument(databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, aRSuggestion.id, serializeAppwriteData(aRSuggestion), [
        Permission.write(Role.user(aRSuggestion.doc.for.docID)),
        Permission.delete(Role.user(aRSuggestion.doc.for.docID)),
        Permission.update(Role.user(aRSuggestion.doc.for.docID)),
        Permission.read(Role.user(aRSuggestion.doc.for.docID)),
    ]);
}

export { AppwriteErrorReporterNodeJs, AppwriteNodeJsClient, createArticleRelationSuggestion, fetchAllUserRelatedToTopic, fetchFullTopic };
