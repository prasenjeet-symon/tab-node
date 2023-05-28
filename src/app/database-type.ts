// Appwrite collections
export abstract class AppwriteCollection {
  public static readonly USERS = 'USERS';
  public static readonly BADGES = 'BADGES';
  public static readonly TOPICS = 'TOPICS';
  public static readonly ARTICLES = 'ARTICLES';
  public static readonly COMMENTS = 'COMMENTS';
  public static readonly LIKES = 'LIKES';
  public static readonly ADDRESSES = 'ADDRESSES';
  public static readonly SAVED_ARTICLES = 'SAVED_ARTICLES';
  public static readonly ARTICLE_READERS = 'ARTICLE_READERS';
  public static readonly BADGE_CHALLENGES = 'BADGE_CHALLENGES';
  public static readonly USER_RELATIONSHIPS = 'USER_RELATIONSHIPS';
  public static readonly USER_TOPIC_RELATIONSHIPS = 'USER_TOPIC_RELATIONSHIPS';
  public static readonly ARTICLE_TOPIC_RELATIONSHIPS = 'ARTICLE_TOPIC_RELATIONSHIPS';
  public static readonly USER_RELATION_SUGGESTIONS = 'USER_RELATION_SUGGESTIONS';
  public static readonly USER_ARTICLE_SUGGESTIONS = 'USER_ARTICLE_SUGGESTIONS';
  public static readonly USER_ACTIVITIES = 'USER_ACTIVITIES';
  public static readonly USER_NOTIFICATIONS = 'USER_NOTIFICATIONS';
  public static readonly SPONSORS = 'SPONSORS';
  public static readonly DRAFTED_ARTICLES = 'DRAFTED_ARTICLES';
  public static readonly TRANSACTIONS = 'TRANSACTIONS';
  public static readonly ARTICLE_STORIES = 'ARTICLE_STORIES';
  public static readonly ARTICLE_STORY_VIEWERS = 'ARTICLE_STORY_VIEWS';
  public static readonly ARTICLE_SERIES = 'ARTICLE_SERIES';
  public static readonly ARTICLE_STORIES_DISTRIBUTION = 'ARTICLE_STORIES_DISTRIBUTION';
}
/**
 *
 * For the badges
 *
 */
export namespace MBadge {
  export interface SBadge {
    docID: string;
    name: string;
  }

  export interface STrend {
    numberOfParticipants: number;
    numberOfWinner: number;
    numberOfLoser: number;
  }

  export interface DBadge {
    name: string;
    description: string;
    color: string;
    logo: string;
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
  }
}
/**
 *
 * For the addresses
 *
 */
export namespace MAddress {
  export interface SAddress {
    docID: string;
    address: string;
  }

  export interface DAddress {
    street: string;
    city: string;
    landmark?: string;
    state: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
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
    fullName: string;
    profilePic: string;
    aboutMe: string;
    docID: string;
  }

  interface SSocialLink {
    provider: string;
    link: string;
  }

  interface STrend {
    numberOfTopics: number;
    numberOfArticles: number;
    numberOfComments: number;
    numberOfLikes: number;
    numberOfDislikes: number;
    numberOfRead: number;
    boostPoint: number;
    resetDate: Date;
  }

  export interface DUser {
    fullName: string;
    email: string;
    aboutMe: string;
    mobile: string; // mobile number with country code
    isActive: boolean;
    profilePic: string;
    address: MAddress.SAddress;
    topics: MTopic.STopic[];
    socialLinks: SSocialLink[];
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
    docID: string;
    name: string;
  }

  export interface DArticleSeries {
    name: string;
    description: string;
    coverImage: string;
    numberOfArticles: number;
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
    docID: string;
    title: string;
  }

  export interface DArticle {
    title: string;
    subTitle: string;
    body: string;
    coverImage: string;
    topics: MTopic.STopic[];
    createdAt: Date;
    updatedAt: Date;
    writer: MUser.SUser;
    readTimeInMin: number;
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
    docID: string;
  }

  export interface DArticleComment {
    body: string;
    createdAt: Date;
    updatedAt: Date;
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
  export type likesStatus = 'LIKED' | 'DISLIKED';

  export interface DArticleLike {
    likedBy: MUser.SUser;
    article: MArticle.SArticle;
    createdAt: Date;
    updatedAt: Date;
    status: likesStatus;
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
  export interface SSavedArticle {}

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
  export interface SArticleReader {}

  export interface DArticleReader {
    article: MArticle.SArticle;
    reader: MUser.SUser;
    writer: MUser.SUser; // article writer
    createdAt: Date;
    updatedAt: Date;
    readTimeInMin: number;
    articleTimeInMin: number;
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
  export type badgeStatus = 'PENDING' | 'COMPLETED' | 'FAILED';

  export interface SBadgeChallenge {}

  export interface DBadgeChallenge {
    participant: MUser.SUser;
    badge: MBadge.SBadge;
    createdAt: Date;
    updatedAt: Date;
    status: badgeStatus;
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
    boostPoint: number;
    resetDate: Date;
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
    boostPoint: number;
    resetDate: Date;
  }

  export interface DUserTopicRelationship {
    user: MUser.SUser;
    topic: MTopic.STopic;
    createdAt: Date;
    updatedAt: Date;
    trend: STrend;
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
    boostPoint: number;
    resetDate: Date;
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
    for: MUser.SUser;
    user: MUser.SUser;
    createdAt: Date;
    updatedAt: Date;
    impressionCount: number;
    boostPoint: number;
    isStale: boolean;
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
    for: MUser.SUser;
    article: MArticle.SArticle;
    createdAt: Date;
    updatedAt: Date;
    impressionCount: number;
    boostPoint: number;
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
  export interface SUserActivity {}

  type activityAction = 'LIKE' | 'READ' | 'COMMENT' | 'SAVE' | 'CREATE' | 'DISLIKE';

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
  export interface DUserNotification {
    user: MUser.SUser;
    notification: string;
    link: string;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
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
    docID: string;
  }

  export interface DArticleStory {
    article: MArticle.SArticle;
    story: {
      backgroundImage: string;
      summery: string;
    };
    createdAt: Date;
    updatedAt: Date;
    user: MUser.SUser;
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
  }

  export interface IArticleStoryDistribution {
    id: string;
    doc: DArticleStoryDistribution;
  }
}
