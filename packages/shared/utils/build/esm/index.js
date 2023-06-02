import { Databases, Client } from 'node-appwrite';

// Appwrite collections
var AppwriteCollection = /** @class */ (function () {
    function AppwriteCollection() {
    }
    AppwriteCollection.USERS = "USERS";
    AppwriteCollection.BADGES = "BADGES";
    AppwriteCollection.TOPICS = "TOPICS";
    AppwriteCollection.ARTICLES = "ARTICLES";
    AppwriteCollection.COMMENTS = "COMMENTS";
    AppwriteCollection.LIKES = "LIKES";
    AppwriteCollection.ADDRESSES = "ADDRESSES";
    AppwriteCollection.SAVED_ARTICLES = "SAVED_ARTICLES";
    AppwriteCollection.ARTICLE_READERS = "ARTICLE_READERS";
    AppwriteCollection.BADGE_CHALLENGES = "BADGE_CHALLENGES";
    AppwriteCollection.USER_RELATIONSHIPS = "USER_RELATIONSHIPS";
    AppwriteCollection.USER_TOPIC_RELATIONSHIPS = "USER_TOPIC_RELATIONSHIPS";
    AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS = "ARTICLE_TOPIC_RELATIONSHIPS";
    AppwriteCollection.USER_RELATION_SUGGESTIONS = "USER_RELATION_SUGGESTIONS";
    AppwriteCollection.USER_ARTICLE_SUGGESTIONS = "USER_ARTICLE_SUGGESTIONS";
    AppwriteCollection.USER_ACTIVITIES = "USER_ACTIVITIES";
    AppwriteCollection.USER_NOTIFICATIONS = "USER_NOTIFICATIONS";
    AppwriteCollection.SPONSORS = "SPONSORS";
    AppwriteCollection.DRAFTED_ARTICLES = "DRAFTED_ARTICLES";
    AppwriteCollection.TRANSACTIONS = "TRANSACTIONS";
    AppwriteCollection.ARTICLE_STORIES = "ARTICLE_STORIES";
    AppwriteCollection.ARTICLE_SERIES = "ARTICLE_SERIES";
    AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION = "ARTICLE_STORIES_DISTRIBUTION";
    AppwriteCollection.USER_SOCIAL_LINKS = "USER_SOCIAL_LINKS";
    return AppwriteCollection;
}());
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

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

/** Is pure JSON Object */
function isPureJSONObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value) && Object.prototype.toString.call(value) === "[object Object]";
}
/** Convert the data to appwrite  */
function serializeAppwriteData(data, keyStr) {
    var e_1, _a;
    if (keyStr === void 0) { keyStr = ""; }
    var result = {};
    try {
        for (var _b = __values(Object.keys(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = data[key];
            if (isPureJSONObject(value)) {
                var finalResult = serializeAppwriteData(value, "".concat(keyStr).concat(key, "_"));
                Object.assign(result, finalResult);
            }
            else {
                result["".concat(keyStr).concat(key)] = value;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
/** Deserialize the data from appwrite*/
function deserializeAppwriteData(serializedData) {
    var e_2, _a;
    var result = {};
    try {
        for (var _b = __values(Object.keys(serializedData)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = serializedData[key];
            var keys = key.split("_");
            var currentObj = result;
            for (var i = 0; i < keys.length; i++) {
                var currentKey = keys[i];
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
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var finalData = { id: serializedData["$id"], doc: result };
    return finalData;
}
/** Generate the new unique avatar*/
function generateAvatar(email) {
    return "https://robohash.org/".concat(email, ".png");
}
/** Init the nodejs appwrite client */
var AppwriteNodeJsClient = /** @class */ (function () {
    function AppwriteNodeJsClient() {
        this.client = new Client();
        // set the config
        this.client
            .setEndpoint(process.env.APPWRITE_ENDPOINT || "") // Your API Endpoint
            .setProject(process.env.APPWRITE_PROJECT_ID || "") // Your project ID
            .setKey(process.env.APPWRITE_API_KEY || ""); // Your secret API key
    }
    AppwriteNodeJsClient.prototype.database = function () {
        this.databaseInstance = new Databases(this.client);
        return this.databaseInstance;
    };
    AppwriteNodeJsClient.prototype.databaseID = function () {
        return process.env.APPWRITE_DATABASE_ID || "";
    };
    return AppwriteNodeJsClient;
}());

export { AppwriteCollection, AppwriteNodeJsClient, MArticleLike, MBadgeChallenge, MUserNotification, deserializeAppwriteData, generateAvatar, serializeAppwriteData };
