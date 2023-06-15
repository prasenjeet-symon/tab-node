'use strict';

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
    static USER_ARTICLE_SUGGESTIONS_COPY = 'USER_ARTICLE_SUGGESTIONS_COPY';
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
    static ARTICLES_DISTRIBUTION_CLONE = 'ARTICLES_DISTRIBUTION_CLONE';
}
/**
 *
 * For the article likes
 *
 */
exports.MArticleLike = void 0;
(function (MArticleLike) {
    (function (ENUM_likesStatus) {
        ENUM_likesStatus["LIKED"] = "LIKED";
        ENUM_likesStatus["DISLIKED"] = "DISLIKED";
    })(MArticleLike.ENUM_likesStatus || (MArticleLike.ENUM_likesStatus = {}));
})(exports.MArticleLike || (exports.MArticleLike = {}));
/**
 *
 * For the badge challenges
 *
 */
exports.MBadgeChallenge = void 0;
(function (MBadgeChallenge) {
    (function (ENUM_badgeStatus) {
        ENUM_badgeStatus["PENDING"] = "PENDING";
        ENUM_badgeStatus["COMPLETED"] = "COMPLETED";
        ENUM_badgeStatus["FAILED"] = "FAILED";
    })(MBadgeChallenge.ENUM_badgeStatus || (MBadgeChallenge.ENUM_badgeStatus = {}));
})(exports.MBadgeChallenge || (exports.MBadgeChallenge = {}));
/**
 *
 * For the user activity
 *
 */
exports.MUserActivity = void 0;
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
})(exports.MUserActivity || (exports.MUserActivity = {}));
/**
 *
 * For the user notification
 *
 */
exports.MUserNotification = void 0;
(function (MUserNotification) {
    (function (ENUM_notificationTopic) {
        ENUM_notificationTopic["LIKE"] = "LIKE";
        ENUM_notificationTopic["COMMENT"] = "COMMENT";
        ENUM_notificationTopic["FOLLOW"] = "FOLLOW";
        ENUM_notificationTopic["MENTION"] = "MENTION";
        ENUM_notificationTopic["GENERAL"] = "GENERAL";
    })(MUserNotification.ENUM_notificationTopic || (MUserNotification.ENUM_notificationTopic = {}));
})(exports.MUserNotification || (exports.MUserNotification = {}));
/** For the articles distribution */
exports.MArticleDistribution = void 0;
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
})(exports.MArticleDistribution || (exports.MArticleDistribution = {}));

class ArticleBoostPoints {
    static like = 1;
    static dislike = -2;
    static comment = 5;
    static read = 6;
    static click = 1;
    static share = 3;
    static save = 5;
    static create = 10;
}
class UserBoostPoints {
    static read = 5;
    static click = 1;
    static like = 2;
    static dislike = 2;
    static comment = 5;
    static share = 3;
    static save = 5;
    static create = 10;
}

/** Is pure JSON Object */
function isPureJSONObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && Object.prototype.toString.call(value) === '[object Object]';
}
/** Convert the data to appwrite  */
function serializeAppwriteData(data, keyStr = '') {
    // remove $attribute from the data
    const newData = {};
    Object.keys(data).forEach((p) => {
        if (!/\$/.test(p)) {
            newData[p] = data[p];
        }
    });
    data = newData;
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
                currentObj[currentKey] = isValidDateString(value) ? new Date(value) : value;
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
/** Generate the new unique avatar*/
function generateAvatar(email) {
    return `https://robohash.org/${email}.png`;
}
/** Appwrite nodejs error reporting */
/** Central Appwrite Error Reporting */
/** Get the different threshold for different phase boost point */
function getThreshold(phase, users) {
    const mainUser = Math.floor((users * 15) / 100); // 15 percentage of user did some actions
    const boostPoint = mainUser * (ArticleBoostPoints.click + ArticleBoostPoints.comment + ArticleBoostPoints.like + ArticleBoostPoints.read + ArticleBoostPoints.share);
    return { impressionCountPercent: 70, boostPoint: Math.floor(boostPoint) };
}
/** Get total number of users for the AB testing */
function getUsersCountForArticleSuggestion(phase, totalUsers) {
    switch (phase) {
        case 1:
            return Math.floor((exports.MArticleDistribution.enum_articlePhase.PHASE_1 * totalUsers) / 100);
        case 2:
            return Math.floor((exports.MArticleDistribution.enum_articlePhase.PHASE_2 * totalUsers) / 100);
        case 3:
            return Math.floor((exports.MArticleDistribution.enum_articlePhase.PHASE_3 * totalUsers) / 100);
        default:
            return 0;
    }
}
/** Get the phase users in percentage for the AB testing  */
function getPhaseUsersPercentage(phase) {
    switch (phase) {
        case 1:
            return exports.MArticleDistribution.enum_articlePhase.PHASE_1;
        case 2:
            return exports.MArticleDistribution.enum_articlePhase.PHASE_2;
        case 3:
            return exports.MArticleDistribution.enum_articlePhase.PHASE_3;
        default:
            return 0;
    }
}
function isValidDateString(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}[+-]\d{2}:\d{2}$/;
    return dateRegex.test(dateString);
}
function getHumanReadableDate(date) {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // Get time difference in seconds
    if (diff < 60) {
        return `${diff} seconds ago`;
    }
    else if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    }
    else if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    }
    else {
        const days = Math.floor(diff / 86400);
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
}
function calculateReadingTime(content, wordsPerMinute = 200) {
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
}

exports.AppwriteCollection = AppwriteCollection;
exports.ArticleBoostPoints = ArticleBoostPoints;
exports.UserBoostPoints = UserBoostPoints;
exports.calculateReadingTime = calculateReadingTime;
exports.deserializeAppwriteData = deserializeAppwriteData;
exports.generateAvatar = generateAvatar;
exports.getHumanReadableDate = getHumanReadableDate;
exports.getPhaseUsersPercentage = getPhaseUsersPercentage;
exports.getThreshold = getThreshold;
exports.getUsersCountForArticleSuggestion = getUsersCountForArticleSuggestion;
exports.isValidDateString = isValidDateString;
exports.serializeAppwriteData = serializeAppwriteData;
//# sourceMappingURL=index.js.map
