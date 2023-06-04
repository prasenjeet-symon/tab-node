export declare abstract class AppwriteCollection {
    static readonly USERS = "USERS";
    static readonly BADGES = "BADGES";
    static readonly TOPICS = "TOPICS";
    static readonly ARTICLES = "ARTICLES";
    static readonly COMMENTS = "COMMENTS";
    static readonly LIKES = "LIKES";
    static readonly ADDRESSES = "ADDRESSES";
    static readonly SAVED_ARTICLES = "SAVED_ARTICLES";
    static readonly ARTICLE_READERS = "ARTICLE_READERS";
    static readonly BADGE_CHALLENGES = "BADGE_CHALLENGES";
    static readonly USER_RELATIONSHIPS = "USER_RELATIONSHIPS";
    static readonly USER_TOPIC_RELATIONSHIPS = "USER_TOPIC_RELATIONSHIPS";
    static readonly ARTICLE_TOPIC_RELATIONSHIPS = "ARTICLE_TOPIC_RELATIONSHIPS";
    static readonly USER_RELATION_SUGGESTIONS = "USER_RELATION_SUGGESTIONS";
    static readonly USER_ARTICLE_SUGGESTIONS = "USER_ARTICLE_SUGGESTIONS";
    static readonly USER_ACTIVITIES = "USER_ACTIVITIES";
    static readonly USER_NOTIFICATIONS = "USER_NOTIFICATIONS";
    static readonly SPONSORS = "SPONSORS";
    static readonly DRAFTED_ARTICLES = "DRAFTED_ARTICLES";
    static readonly TRANSACTIONS = "TRANSACTIONS";
    static readonly ARTICLE_STORIES = "ARTICLE_STORIES";
    static readonly ARTICLE_SERIES = "ARTICLE_SERIES";
    static readonly ARTICLE_STORIES_DISTRIBUTION = "ARTICLE_STORIES_DISTRIBUTION";
    static readonly USER_SOCIAL_LINKS = "USER_SOCIAL_LINKS";
    static readonly ARTICLES_DISTRIBUTION = "ARTICLES_DISTRIBUTION";
}
/**
 *
 * For the badges
 *
 */
export declare namespace MBadge {
    interface SBadge {
        docID: string;
        name: string;
    }
    interface STrend {
        numberOfParticipants: number;
        numberOfWinner: number;
        numberOfLoser: number;
    }
    interface DBadge {
        name: string;
        description: string;
        color: string;
        logo: string;
        createdAt: Date;
        updatedAt: Date;
        trend: STrend;
    }
    interface IBadge {
        id: string;
        doc: DBadge;
    }
}
/**
 *
 * For the topics
 *
 */
export declare namespace MTopic {
    export interface STopic {
        docID: string;
        name: string;
        color: string;
        logo: string;
    }
    interface STrend {
        numberOfArticles: number;
        boostPoint: number;
        resetDate: Date;
    }
    export interface DTopic {
        name: string;
        logo: string;
        color: string;
        description: string;
        weeklyTrend: STrend;
        monthlyTrend: STrend;
        createdAt: Date;
        updatedAt: Date;
        associatedUsersCount: number;
    }
    export interface ITopic {
        id: string;
        doc: DTopic;
    }
    export {};
}
/**
 *
 * For the addresses
 *
 */
export declare namespace MAddress {
    interface SAddress {
        docID: string;
        address: string;
    }
    interface DAddress {
        street: string;
        city: string;
        landmark?: string;
        state: string;
        country: string;
        createdAt: Date;
        updatedAt: Date;
        zipCode: string;
        addressOf: MUser.SUser;
    }
    interface IAddress {
        id: string;
        doc: DAddress;
    }
}
/**
 *
 * For the USERS
 *
 */
export declare namespace MUser {
    export interface SUser {
        fullName: string;
        profilePic: string;
        aboutMe: string;
        docID: string;
    }
    interface STrend {
        numberOfTopics: number;
        numberOfArticles: number;
        numberOfComments: number;
        numberOfLikes: number;
        numberOfDislikes: number;
        numberOfRead: number;
        numberOfSaved: number;
        numberOfClick: number;
        numberOfShare: number;
        boostPoint: number;
        resetDate: Date;
    }
    export interface DUser {
        fullName: string;
        email: string;
        aboutMe: string;
        mobile: string;
        isActive: boolean;
        profilePic: string;
        address: MAddress.SAddress;
        trend: STrend;
        createdAt: Date;
        updatedAt: Date;
    }
    export interface IUser {
        id: string;
        doc: DUser;
    }
    export {};
}
/**
 *
 * For the article series
 *
 */
export declare namespace MArticleSeries {
    interface SArticleSeries {
        docID: string;
        name: string;
    }
    interface DArticleSeries {
        name: string;
        description: string;
        coverImage: string;
        numberOfArticles: number;
        createdAt: Date;
        updatedAt: Date;
    }
    interface IArticleSeries {
        id: string;
        doc: DArticleSeries;
    }
}
/**
 *
 * For the articles
 *
 */
export declare namespace MArticle {
    interface SArticle {
        docID: string;
        title: string;
    }
    interface DArticle {
        title: string;
        subTitle: string;
        body: string;
        coverImage: string;
        createdAt: Date;
        updatedAt: Date;
        writer: MUser.SUser;
        readTimeInMin: number;
        articleSeries: MArticleSeries.SArticleSeries | null;
    }
    interface IArticle {
        id: string;
        doc: DArticle;
    }
}
/**
 *
 * For the article comments
 *
 */
export declare namespace MArticleComment {
    interface SArticleComment {
        docID: string;
    }
    interface DArticleComment {
        body: string;
        createdAt: Date;
        updatedAt: Date;
        commentedBy: MUser.SUser;
        article: MArticle.SArticle;
        writer: MUser.SUser;
        parentComment: MArticleComment.SArticleComment | null;
    }
    interface IArticleComment {
        id: string;
        doc: DArticleComment;
    }
}
/**
 *
 * For the article likes
 *
 */
export declare namespace MArticleLike {
    type likesStatus = "LIKED" | "DISLIKED";
    enum ENUM_likesStatus {
        LIKED = "LIKED",
        DISLIKED = "DISLIKED"
    }
    interface DArticleLike {
        likedBy: MUser.SUser;
        article: MArticle.SArticle;
        createdAt: Date;
        updatedAt: Date;
        status: likesStatus;
    }
    interface IArticleLike {
        id: string;
        doc: DArticleLike;
    }
}
/**
 *
 * For the saved articles
 *
 */
export declare namespace MSavedArticle {
    interface DSavedArticle {
        article: MArticle.SArticle;
        savedBy: MUser.SUser;
        writer: MUser.SUser;
        createdAt: Date;
        updatedAt: Date;
    }
    interface ISavedArticle {
        id: string;
        doc: DSavedArticle;
    }
}
/**
 *
 * For the article readers
 *
 */
export declare namespace MArticleReader {
    interface DArticleReader {
        article: MArticle.SArticle;
        reader: MUser.SUser;
        writer: MUser.SUser;
        createdAt: Date;
        updatedAt: Date;
        readTimeInMin: number;
        articleTimeInMin: number;
    }
    interface IArticleReader {
        id: string;
        doc: DArticleReader;
    }
}
/**
 *
 * For the badge challenges
 *
 */
export declare namespace MBadgeChallenge {
    type badgeStatus = "PENDING" | "COMPLETED" | "FAILED";
    enum ENUM_badgeStatus {
        PENDING = "PENDING",
        COMPLETED = "COMPLETED",
        FAILED = "FAILED"
    }
    interface DBadgeChallenge {
        participant: MUser.SUser;
        badge: MBadge.SBadge;
        createdAt: Date;
        updatedAt: Date;
        status: badgeStatus;
    }
    interface IBadgeChallenge {
        id: string;
        doc: DBadgeChallenge;
    }
}
/**
 *
 * For the user relationships
 *
 */
export declare namespace MUserRelationship {
    interface STrend {
        boostPoint: number;
        resetDate: Date;
    }
    interface DUserRelationship {
        fromUser: MUser.SUser;
        toUser: MUser.SUser;
        createdAt: Date;
        updatedAt: Date;
        fromTrend: STrend;
        toTrend: STrend;
    }
    interface IUserRelationship {
        id: string;
        doc: DUserRelationship;
    }
}
/**
 *
 * For the user topic relationships
 *
 */
export declare namespace MUserTopicRelationship {
    interface STrend {
        boostPoint: number;
        resetDate: Date;
    }
    interface DUserTopicRelationship {
        user: MUser.SUser;
        topic: MTopic.STopic;
        createdAt: Date;
        updatedAt: Date;
        trend: STrend;
        isStable: boolean;
    }
    interface IUserTopicRelationship {
        id: string;
        doc: DUserTopicRelationship;
    }
}
/**
 *
 * For the article topics relationships
 *
 */
export declare namespace MArticleTopicRelationship {
    interface STrend {
        boostPoint: number;
        resetDate: Date;
    }
    interface DArticleTopicRelationship {
        article: MArticle.SArticle;
        topic: MTopic.STopic;
        createdAt: Date;
        updatedAt: Date;
        trend: STrend;
    }
    interface IArticleTopicRelationship {
        id: string;
        doc: DArticleTopicRelationship;
    }
}
/**
 *
 * For the user relation suggestion
 *
 */
export declare namespace MUserRelationSuggestion {
    interface DUserRelationSuggestion {
        for: MUser.SUser;
        user: MUser.SUser;
        createdAt: Date;
        updatedAt: Date;
        impressionCount: number;
        boostPoint: number;
        isStale: boolean;
    }
    interface IUserRelationSuggestion {
        id: string;
        doc: DUserRelationSuggestion;
    }
}
/**
 *
 * For the article relation suggestion
 */
export declare namespace MArticleRelationSuggestion {
    interface DArticleRelationSuggestion {
        for: MUser.SUser;
        article: MArticle.SArticle;
        createdAt: Date;
        updatedAt: Date;
        impressionCount: number;
        boostPoint: number;
        isStale: boolean;
    }
    interface IArticleRelationSuggestion {
        id: string;
        doc: DArticleRelationSuggestion;
    }
}
/**
 *
 * For the user activity
 *
 */
export declare namespace MUserActivity {
    type activityAction = "LIKE" | "READ" | "COMMENT" | "SAVE" | "CREATE" | "DISLIKE";
    export interface DUserActivity {
        user: MUser.SUser;
        article: MArticle.SArticle;
        action: activityAction;
        createdAt: Date;
        updatedAt: Date;
    }
    export interface IUserActivity {
        id: string;
        doc: DUserActivity;
    }
    export {};
}
/**
 *
 * For the user notification
 *
 */
export declare namespace MUserNotification {
    type notificationTopic = "LIKE" | "COMMENT" | "FOLLOW" | "MENTION" | "GENERAL";
    type notificationOriginator = "TABNODE" | "USER";
    enum ENUM_notificationTopic {
        LIKE = "LIKE",
        COMMENT = "COMMENT",
        FOLLOW = "FOLLOW",
        MENTION = "MENTION",
        GENERAL = "GENERAL"
    }
    interface SOriginator {
        fullName: string;
        type: notificationOriginator;
        profilePic: string;
        docID: string;
        aboutMe: string;
    }
    interface DUserNotification {
        user: MUser.SUser;
        title: string;
        notification: string;
        originator: SOriginator;
        link: string;
        isRead: boolean;
        createdAt: Date;
        updatedAt: Date;
        topic: notificationTopic;
    }
    interface IUserNotification {
        id: string;
        doc: DUserNotification;
    }
}
/**
 *
 * For the drafted articles
 *
 */
export declare namespace MDraftedArticle {
    interface DDraftedArticle {
        article: MArticle.DArticle;
        originalArticle: MArticle.SArticle | null;
        createdAt: Date;
        updatedAt: Date;
    }
    interface IDraftedArticle {
        id: string;
        doc: DDraftedArticle;
    }
}
/**
 *
 * For the article stories
 *
 */
export declare namespace MArticleStory {
    interface SArticleStory {
        docID: string;
    }
    interface DArticleStory {
        article: MArticle.SArticle;
        story: {
            backgroundImage: string;
            summery: string;
        };
        createdAt: Date;
        updatedAt: Date;
        expireAt: Date;
        user: MUser.SUser;
    }
    interface IArticleStory {
        id: string;
        doc: DArticleStory;
    }
}
/**
 *
 * For the article distribution
 *
 */
export declare namespace MArticleStoryDistribution {
    interface DArticleStoryDistribution {
        for: MUser.SUser;
        story: MArticleStory.SArticleStory;
        boostPoint: number;
        createdAt: Date;
        updatedAt: Date;
        expireAt: Date;
        isSeen: boolean;
    }
    interface IArticleStoryDistribution {
        id: string;
        doc: DArticleStoryDistribution;
        story?: MArticleStory.IArticleStory;
    }
}
/** For the user social links */
export declare namespace MUserSocialLink {
    interface DUserSocialLink {
        user: MUser.SUser;
        socialLink: string;
        type: "WEB" | "TWITTER" | "INSTAGRAM" | "LINKEDIN" | "GITHUB";
        createdAt: Date;
        updatedAt: Date;
    }
    interface IUserSocialLink {
        id: string;
        doc: DUserSocialLink;
    }
}
/** For the articles distribution */
export declare namespace MArticleDistribution {
    type trackOrderType = "DATE_ASC" | "DATE_DESC";
    enum enum_trackOrderType {
        DATE_ASC = "DATE_ASC",
        DATE_DESC = "DATE_DESC"
    }
    enum enum_articlePhase {
        "PHASE_1" = 10,
        "PHASE_2" = 30,
        "PHASE_3" = 60
    }
    interface DArticleDistribution {
        phase: number;
        among: string;
        boostPoint: number;
        impressionCount: number;
        trackOrder: trackOrderType;
        createdAt: Date;
        updatedAt: Date;
        isStale: boolean;
        article: MArticle.SArticle;
        topicIDS: string[];
        lastUserIDS: string[];
    }
    interface IArticleDistribution {
        id: string;
        doc: DArticleDistribution;
    }
}
//# sourceMappingURL=database-types.d.ts.map