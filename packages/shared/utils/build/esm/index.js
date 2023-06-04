import { Databases, AppwriteException, Client, Query, Permission, Role } from 'node-appwrite';

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
    AppwriteCollection.ARTICLES_DISTRIBUTION = "ARTICLES_DISTRIBUTION";
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


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

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

var ArticleBoostPoints = /** @class */ (function () {
    function ArticleBoostPoints() {
    }
    ArticleBoostPoints.like = 1;
    ArticleBoostPoints.dislike = -2;
    ArticleBoostPoints.comment = 5;
    ArticleBoostPoints.read = 6;
    ArticleBoostPoints.click = 1;
    ArticleBoostPoints.share = 3;
    ArticleBoostPoints.save = 5;
    ArticleBoostPoints.create = 10;
    return ArticleBoostPoints;
}());
var UserBoostPoints = /** @class */ (function () {
    function UserBoostPoints() {
    }
    UserBoostPoints.read = 5;
    UserBoostPoints.click = 1;
    UserBoostPoints.like = 2;
    UserBoostPoints.dislike = 2;
    UserBoostPoints.comment = 5;
    UserBoostPoints.share = 3;
    UserBoostPoints.save = 5;
    UserBoostPoints.create = 10;
    return UserBoostPoints;
}());

/** Is pure JSON Object */
function isPureJSONObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && Object.prototype.toString.call(value) === '[object Object]';
}
/** Convert the data to appwrite  */
function serializeAppwriteData(data, keyStr) {
    var e_1, _a;
    if (keyStr === void 0) { keyStr = ''; }
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
            var keys = key.split('_');
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
    var finalData = { id: serializedData['$id'], doc: result };
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
            .setEndpoint(process.env.APPWRITE_ENDPOINT || '') // Your API Endpoint
            .setProject(process.env.APPWRITE_PROJECT_ID || '') // Your project ID
            .setKey(process.env.APPWRITE_API_KEY || ''); // Your secret API key
    }
    AppwriteNodeJsClient.prototype.database = function () {
        this.databaseInstance = new Databases(this.client);
        return this.databaseInstance;
    };
    AppwriteNodeJsClient.prototype.databaseID = function () {
        return process.env.APPWRITE_DATABASE_ID || '';
    };
    return AppwriteNodeJsClient;
}());
/** Appwrite nodejs error reporting */
/** Central Appwrite Error Reporting */
var AppwriteErrorReporterNodeJs = /** @class */ (function () {
    function AppwriteErrorReporterNodeJs() {
    }
    AppwriteErrorReporterNodeJs.report = function (error) {
        if (error instanceof AppwriteException) {
            // Handle the error as an AppwriteException
            console.error('AppwriteExceptionReport:', error.message);
        }
        else {
            // Handle other types of errors
            console.error('Other error:', error);
        }
    };
    AppwriteErrorReporterNodeJs.isDocumentNotFound = function (error) {
        if (error instanceof AppwriteException) {
            return error.code === 404;
        }
        else {
            return false;
        }
    };
    return AppwriteErrorReporterNodeJs;
}());
/** Get the different threshold for different phase boost point */
function getThreshold(phase, users) {
    var mainUser = Math.floor((users * 15) / 100); // 15 percentage of user did some actions
    var boostPoint = mainUser * (ArticleBoostPoints.click + ArticleBoostPoints.comment + ArticleBoostPoints.like + ArticleBoostPoints.read + ArticleBoostPoints.share);
    return { impressionCountPercent: 70, boostPoint: Math.floor(boostPoint) };
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
/** Get the phase users in percentage for the AB testing  */
function getPhaseUsersPercentage(phase) {
    switch (phase) {
        case 1:
            return MArticleDistribution.enum_articlePhase.PHASE_1;
        case 2:
            return MArticleDistribution.enum_articlePhase.PHASE_2;
        case 3:
            return MArticleDistribution.enum_articlePhase.PHASE_3;
        default:
            return 0;
    }
}
function fetchFullTopic(topicID, database, databaseID) {
    return __awaiter(this, void 0, void 0, function () {
        var snap, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, database.getDocument(databaseID, AppwriteCollection.TOPICS, topicID)];
                case 1:
                    snap = _a.sent();
                    return [2 /*return*/, deserializeAppwriteData(snap)];
                case 2:
                    error_1 = _a.sent();
                    AppwriteErrorReporterNodeJs.report(error_1);
                    if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error_1))
                        return [2 /*return*/, null];
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/** Fetch all users related to given topic */
function fetchAllUserRelatedToTopic(phase, topic, lastUserID, sortType, database, databaseID) {
    return __awaiter(this, void 0, void 0, function () {
        var limit, snap, finalData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    limit = getUsersCountForArticleSuggestion(phase, topic.doc.associatedUsersCount);
                    return [4 /*yield*/, database.listDocuments(databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [
                            Query.equal('topic_docID', topic.id),
                            sortType === 'DATE_ASC' ? Query.orderAsc('createdAt') : Query.orderDesc('createdAt'),
                            lastUserID === 'undefined' ? '' : Query.cursorAfter(lastUserID),
                            Query.limit(+limit),
                        ])];
                case 1:
                    snap = _a.sent();
                    finalData = snap.documents.map(function (p) {
                        return deserializeAppwriteData(p);
                    });
                    return [2 /*return*/, { topic: topic, users: finalData.map(function (p) { return p.doc.user; }), oldLastUserID: lastUserID }];
            }
        });
    });
}
/** Create new article suggestion if possible  */
function createArticleRelationSuggestion(aRSuggestion, database, databaseID) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.createDocument(databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, aRSuggestion.id, serializeAppwriteData(aRSuggestion), [
                        Permission.write(Role.user(aRSuggestion.doc.for.docID)),
                        Permission.delete(Role.user(aRSuggestion.doc.for.docID)),
                        Permission.update(Role.user(aRSuggestion.doc.for.docID)),
                        Permission.read(Role.user(aRSuggestion.doc.for.docID)),
                    ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

export { AppwriteCollection, AppwriteErrorReporterNodeJs, AppwriteNodeJsClient, ArticleBoostPoints, MArticleDistribution, MArticleLike, MBadgeChallenge, MUserNotification, UserBoostPoints, createArticleRelationSuggestion, deserializeAppwriteData, fetchAllUserRelatedToTopic, fetchFullTopic, generateAvatar, getPhaseUsersPercentage, getThreshold, getUsersCountForArticleSuggestion, serializeAppwriteData };
