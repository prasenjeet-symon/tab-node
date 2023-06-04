// Appwrite collections
export abstract class AppwriteCollection {
  public static readonly USERS = "USERS";
  public static readonly BADGES = "BADGES";
  public static readonly TOPICS = "TOPICS";
  public static readonly ARTICLES = "ARTICLES";
  public static readonly COMMENTS = "COMMENTS";
  public static readonly LIKES = "LIKES";
  public static readonly ADDRESSES = "ADDRESSES";
  public static readonly SAVED_ARTICLES = "SAVED_ARTICLES";
  public static readonly ARTICLE_READERS = "ARTICLE_READERS";
  public static readonly BADGE_CHALLENGES = "BADGE_CHALLENGES";
  public static readonly USER_RELATIONSHIPS = "USER_RELATIONSHIPS";
  public static readonly USER_TOPIC_RELATIONSHIPS = "USER_TOPIC_RELATIONSHIPS";
  public static readonly ARTICLE_TOPIC_RELATIONSHIPS = "ARTICLE_TOPIC_RELATIONSHIPS";
  public static readonly USER_RELATION_SUGGESTIONS = "USER_RELATION_SUGGESTIONS";
  public static readonly USER_ARTICLE_SUGGESTIONS = "USER_ARTICLE_SUGGESTIONS";
  public static readonly USER_ACTIVITIES = "USER_ACTIVITIES";
  public static readonly USER_NOTIFICATIONS = "USER_NOTIFICATIONS";
  public static readonly SPONSORS = "SPONSORS";
  public static readonly DRAFTED_ARTICLES = "DRAFTED_ARTICLES";
  public static readonly TRANSACTIONS = "TRANSACTIONS";
  public static readonly ARTICLE_STORIES = "ARTICLE_STORIES";
  public static readonly ARTICLE_SERIES = "ARTICLE_SERIES";
  public static readonly ARTICLE_STORIES_DISTRIBUTION = "ARTICLE_STORIES_DISTRIBUTION";
  public static readonly USER_SOCIAL_LINKS = "USER_SOCIAL_LINKS";
  public static readonly ARTICLES_DISTRIBUTION = "ARTICLES_DISTRIBUTION";
}
/**
 *
 * For the badges
 *
 */
export namespace MBadge {
  export interface SBadge {
    docID: string; // UUID max length of 36
    name: string; // max length of 30
  }

  export interface STrend {
    numberOfParticipants: number; // IntegerField
    numberOfWinner: number; // IntegerField
    numberOfLoser: number; //  IntegerField
  }

  export interface DBadge {
    name: string; // max length of 30
    description: string; // max length of 255
    color: string; // hexadecimal max length 8
    logo: string; // URL max length of 255
    createdAt: Date;
    updatedAt: Date;
    trend: STrend;
  }

  export interface IBadge {
    id: string;
    doc: DBadge;
  }
}
/**
 *
 * For the topics
 *
 */
export namespace MTopic {
  export interface STopic {
    docID: string;
    name: string;
    color: string;
    logo: string;
  }

  interface STrend {
    numberOfArticles: number; // IntegerField
    boostPoint: number; // FloatField
    resetDate: Date;
  }

  export interface DTopic {
    name: string; // max length of 30
    logo: string; // URL max length of 255
    color: string; // hexadecimal max length 8
    description: string; // max length of 255
    weeklyTrend: STrend;
    monthlyTrend: STrend;
    createdAt: Date;
    updatedAt: Date;
    associatedUsersCount: number; // IntegerField
  }

  export interface ITopic {
    id: string;
    doc: DTopic;
  }
}
/**
 *
 * For the addresses
 *
 */
export namespace MAddress {
  export interface SAddress {
    docID: string; // UUID max length of 36
    address: string; // max length of 255
  }

  export interface DAddress {
    street: string; // max length of 255
    city: string; // max length of 255
    landmark?: string; // max length of 255
    state: string; // max length of 255
    country: string; // max length of 255
    createdAt: Date;
    updatedAt: Date;
    zipCode: string; // max length of 255
    addressOf: MUser.SUser;
  }

  export interface IAddress {
    id: string;
    doc: DAddress;
  }
}

/**
 *
 * For the USERS
 *
 */
export namespace MUser {
  export interface SUser {
    fullName: string; // / max length of 30
    profilePic: string; // URL max length of 255
    aboutMe: string; // max length of 255
    docID: string; //  UUID max length of 36
  }

  interface STrend {
    numberOfTopics: number; // IntegerField
    numberOfArticles: number; // IntegerField
    numberOfComments: number; // IntegerField
    numberOfLikes: number; // IntegerField
    numberOfDislikes: number; // IntegerField
    numberOfRead: number; // IntegerField
    numberOfSaved: number; // IntegerField
    numberOfClick: number; // IntegerField
    numberOfShare: number; // IntegerField
    boostPoint: number; // FloatField
    resetDate: Date;
  }

  export interface DUser {
    fullName: string; // / max length of 30
    email: string; // max length of 255
    aboutMe: string; //  max length of 255
    mobile: string; // max length of 12
    isActive: boolean;
    profilePic: string; // URL max length of 255
    address: MAddress.SAddress;
    trend: STrend;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface IUser {
    id: string;
    doc: DUser;
  }
}
/**
 *
 * For the article series
 *
 */
export namespace MArticleSeries {
  export interface SArticleSeries {
    docID: string; // UUID max length of 36
    name: string; // max length of 30
  }

  export interface DArticleSeries {
    name: string; // max length of 30
    description: string; // max length of 255
    coverImage: string; // URL max length of 255
    numberOfArticles: number; // IntegerField
    createdAt: Date;
    updatedAt: Date;
  }

  export interface IArticleSeries {
    id: string;
    doc: DArticleSeries;
  }
}
/**
 *
 * For the articles
 *
 */
export namespace MArticle {
  export interface SArticle {
    docID: string; // UUID max length of 36
    title: string; // Article title max length of 255
  }

  export interface DArticle {
    title: string; // Article title max length of 255
    subTitle: string; // Article sub title max length of 255
    body: string; // Article body max length of 65535
    coverImage: string; // URL max length of 255
    createdAt: Date;
    updatedAt: Date;
    writer: MUser.SUser;
    readTimeInMin: number; // FloatField
    articleSeries: MArticleSeries.SArticleSeries | null;
  }

  export interface IArticle {
    id: string;
    doc: DArticle;
  }
}
/**
 *
 * For the article comments
 *
 */
export namespace MArticleComment {
  export interface SArticleComment {
    docID: string; // UUID max length of 36
  }

  export interface DArticleComment {
    body: string; // Article body max length of 65535
    createdAt: Date; // DateField
    updatedAt: Date; // DateField
    commentedBy: MUser.SUser;
    article: MArticle.SArticle;
    writer: MUser.SUser; // article writer
    parentComment: MArticleComment.SArticleComment | null;
  }

  export interface IArticleComment {
    id: string;
    doc: DArticleComment;
  }
}
/**
 *
 * For the article likes
 *
 */
export namespace MArticleLike {
  export type likesStatus = "LIKED" | "DISLIKED";
  export enum ENUM_likesStatus {
    LIKED = "LIKED",
    DISLIKED = "DISLIKED",
  }

  export interface DArticleLike {
    likedBy: MUser.SUser;
    article: MArticle.SArticle;
    createdAt: Date;
    updatedAt: Date;
    status: likesStatus; // ENUM FLAG
  }

  export interface IArticleLike {
    id: string;
    doc: DArticleLike;
  }
}
/**
 *
 * For the saved articles
 *
 */

export namespace MSavedArticle {
  export interface DSavedArticle {
    article: MArticle.SArticle;
    savedBy: MUser.SUser;
    writer: MUser.SUser; // article writer
    createdAt: Date;
    updatedAt: Date;
  }

  export interface ISavedArticle {
    id: string;
    doc: DSavedArticle;
  }
}
/**
 *
 * For the article readers
 *
 */
export namespace MArticleReader {
  export interface DArticleReader {
    article: MArticle.SArticle;
    reader: MUser.SUser;
    writer: MUser.SUser; // article writer
    createdAt: Date;
    updatedAt: Date;
    readTimeInMin: number; // FloatField
    articleTimeInMin: number; // FloatField
  }

  export interface IArticleReader {
    id: string;
    doc: DArticleReader;
  }
}
/**
 *
 * For the badge challenges
 *
 */
export namespace MBadgeChallenge {
  export type badgeStatus = "PENDING" | "COMPLETED" | "FAILED";
  export enum ENUM_badgeStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
  }

  export interface DBadgeChallenge {
    participant: MUser.SUser;
    badge: MBadge.SBadge;
    createdAt: Date;
    updatedAt: Date;
    status: badgeStatus; // ENUM FLAG
  }

  export interface IBadgeChallenge {
    id: string;
    doc: DBadgeChallenge;
  }
}
/**
 *
 * For the user relationships
 *
 */
export namespace MUserRelationship {
  export interface STrend {
    boostPoint: number; // FloatField
    resetDate: Date; // DateField
  }

  export interface DUserRelationship {
    fromUser: MUser.SUser;
    toUser: MUser.SUser;
    createdAt: Date;
    updatedAt: Date;
    fromTrend: STrend;
    toTrend: STrend;
  }

  export interface IUserRelationship {
    id: string;
    doc: DUserRelationship;
  }
}
/**
 *
 * For the user topic relationships
 *
 */
export namespace MUserTopicRelationship {
  export interface STrend {
    boostPoint: number; // FloatField
    resetDate: Date; // DateField
  }

  export interface DUserTopicRelationship {
    user: MUser.SUser;
    topic: MTopic.STopic;
    createdAt: Date;
    updatedAt: Date;
    trend: STrend;
    isStable: boolean;
  }

  export interface IUserTopicRelationship {
    id: string;
    doc: DUserTopicRelationship;
  }
}
/**
 *
 * For the article topics relationships
 *
 */
export namespace MArticleTopicRelationship {
  export interface STrend {
    boostPoint: number; // FloatField
    resetDate: Date; // DateField
  }

  export interface DArticleTopicRelationship {
    article: MArticle.SArticle;
    topic: MTopic.STopic;
    createdAt: Date;
    updatedAt: Date;
    trend: STrend;
  }

  export interface IArticleTopicRelationship {
    id: string;
    doc: DArticleTopicRelationship;
  }
}
/**
 *
 * For the user relation suggestion
 *
 */
export namespace MUserRelationSuggestion {
  export interface DUserRelationSuggestion {
    for: MUser.SUser; // this is suggestion for this user
    user: MUser.SUser; // suggest this user
    createdAt: Date;
    updatedAt: Date;
    impressionCount: number; // IntegerField
    boostPoint: number; // FloatField
    isStale: boolean; //  BooleanField
  }

  export interface IUserRelationSuggestion {
    id: string;
    doc: DUserRelationSuggestion;
  }
}
/**
 *
 * For the article relation suggestion
 */
export namespace MArticleRelationSuggestion {
  export interface DArticleRelationSuggestion {
    for: MUser.SUser; // this is suggestion for this user
    article: MArticle.SArticle;
    createdAt: Date;
    updatedAt: Date;
    impressionCount: number; // IntegerField
    boostPoint: number; // FloatField
    isStale: boolean;
  }

  export interface IArticleRelationSuggestion {
    id: string;
    doc: DArticleRelationSuggestion;
  }
}
/**
 *
 * For the user activity
 *
 */
export namespace MUserActivity {
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
}
/**
 *
 * For the user notification
 *
 */
export namespace MUserNotification {
  export type notificationTopic = "LIKE" | "COMMENT" | "FOLLOW" | "MENTION" | "GENERAL";
  export type notificationOriginator = "TABNODE" | "USER";
  export enum ENUM_notificationTopic {
    LIKE = "LIKE",
    COMMENT = "COMMENT",
    FOLLOW = "FOLLOW",
    MENTION = "MENTION",
    GENERAL = "GENERAL",
  }

  export interface SOriginator {
    fullName: string;
    type: notificationOriginator;
    profilePic: string;
    docID: string;
    aboutMe: string;
  }

  export interface DUserNotification {
    user: MUser.SUser;
    title: string;
    notification: string;
    originator: SOriginator;
    link: string; // URL Max  length of 255
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
    topic: notificationTopic; // ENUM FLAG
  }

  export interface IUserNotification {
    id: string;
    doc: DUserNotification;
  }
}
/**
 *
 * For the drafted articles
 *
 */
export namespace MDraftedArticle {
  export interface DDraftedArticle {
    article: MArticle.DArticle;
    originalArticle: MArticle.SArticle | null;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface IDraftedArticle {
    id: string;
    doc: DDraftedArticle;
  }
}
/**
 *
 * For the article stories
 *
 */
export namespace MArticleStory {
  export interface SArticleStory {
    docID: string; // UUIDField max  length of 36
  }

  export interface DArticleStory {
    article: MArticle.SArticle;
    story: {
      backgroundImage: string; // URL max length of 255
      summery: string; // Article summery max length of 500
    };
    createdAt: Date;
    updatedAt: Date;
    expireAt: Date;
    user: MUser.SUser; // story owner
  }

  export interface IArticleStory {
    id: string;
    doc: DArticleStory;
  }
}
/**
 *
 * For the article distribution
 *
 */
export namespace MArticleStoryDistribution {
  export interface DArticleStoryDistribution {
    for: MUser.SUser;
    story: MArticleStory.SArticleStory;
    boostPoint: number;
    createdAt: Date;
    updatedAt: Date;
    expireAt: Date;
    isSeen: boolean;
  }

  export interface IArticleStoryDistribution {
    id: string;
    doc: DArticleStoryDistribution;
    story?: MArticleStory.IArticleStory;
  }
}

/** For the user social links */
export namespace MUserSocialLink {
  export interface DUserSocialLink {
    user: MUser.SUser;
    socialLink: string; // URL max  length of 255
    type: "WEB" | "TWITTER" | "INSTAGRAM" | "LINKEDIN" | "GITHUB";
    createdAt: Date;
    updatedAt: Date;
  }

  export interface IUserSocialLink {
    id: string;
    doc: DUserSocialLink;
  }
}

/** For the articles distribution */
export namespace MArticleDistribution {
  export type trackOrderType = "DATE_ASC" | "DATE_DESC";
  export enum enum_trackOrderType {
    DATE_ASC = "DATE_ASC",
    DATE_DESC = "DATE_DESC",
  }

  export enum enum_articlePhase {
    "PHASE_1" = 10,
    "PHASE_2" = 30,
    "PHASE_3" = 60,
  }
  export interface DArticleDistribution {
    phase: number; // like 1, 2, 3, ...
    among: string; // example 20_345 , where 20 is 20 percent and its actual amount is 345 because this property is never involved in sorting so string value use phase for sorting if needed
    boostPoint: number;
    // impression count is total number of times the article is seen the user ( may or may not clicked )
    // there is impression threshold, after that the article will be marked stale by the tabnode and will not be distributed for next phase ( currently impression threshold is 100%. if all the target user have seen this article then marked as stale if not distributed to next phase )
    // but before impression threshold if the distribution boost point is greater then certain limit then article will be distribution for next phase
    impressionCount: number;
    trackOrder: trackOrderType;
    createdAt: Date;
    updatedAt: Date;
    isStale: boolean; // stale if the article is distributed for the next phase or reached the impression threshold
    article: MArticle.SArticle;
    // there is one to one mapping of topicsIDS and lastUserIDS
    // topicIDS --> [ topicid1, topicid2, topicid3, .... ] --> attach index at the end for sorting like --> [ topicid1__1, topicid1__2, topicid1__3, ....  ]
    // lastUserIDS --> [ userid1, userid2, userid3, .... ] --> attach index at the end for sorting like --> [ userid1__1, userid1__2, userid1__3, ....  ]
    topicIDS: string[];
    lastUserIDS: string[];
  }

  export interface IArticleDistribution {
    id: string;
    doc: DArticleDistribution;
  }
}
