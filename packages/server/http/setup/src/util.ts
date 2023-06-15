// create all the collections
import { AppwriteNodeJsClient } from '@tabnode/node-utils';
import { AWFunction, AppwriteCollection, MTopic, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Role } from 'node-appwrite';

export class SetUp {
    private databases: Databases;
    private databaseID: string;
    private client: AppwriteNodeJsClient;
    private DATABASE_NAME = 'TAB_NODE_DB';

    constructor(req: AWFunction.Req) {
        const client = new AppwriteNodeJsClient(req);
        this.client = client;
        this.databaseID = client.databaseID();
        this.databases = client.database();
    }

    public async createDatabase() {
        return await this.databases.create(this.databaseID, this.DATABASE_NAME);
    }

    public async createCollections() {
        const collections1 = this.databases.createCollection(this.databaseID, AppwriteCollection.ADDRESSES, AppwriteCollection.ADDRESSES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections2 = this.databases.createCollection(this.databaseID, AppwriteCollection.ARTICLES, AppwriteCollection.ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections3 = this.databases.createCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, AppwriteCollection.ARTICLES_DISTRIBUTION, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections4 = this.databases.createCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users()), Permission.read(Role.users())]);
        const collections5 = this.databases.createCollection(this.databaseID, AppwriteCollection.ARTICLE_READERS, AppwriteCollection.ARTICLE_READERS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections6 = this.databases.createCollection(this.databaseID, AppwriteCollection.ARTICLE_SERIES, AppwriteCollection.ARTICLE_SERIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections7 = this.databases.createCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES, AppwriteCollection.ARTICLE_STORIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections8 = this.databases.createCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users()), Permission.read(Role.users())]);
        const collections9 = this.databases.createCollection(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections10 = this.databases.createCollection(this.databaseID, AppwriteCollection.BADGES, AppwriteCollection.BADGES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections11 = this.databases.createCollection(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, AppwriteCollection.BADGE_CHALLENGES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections12 = this.databases.createCollection(this.databaseID, AppwriteCollection.COMMENTS, AppwriteCollection.COMMENTS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections13 = this.databases.createCollection(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, AppwriteCollection.DRAFTED_ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections14 = this.databases.createCollection(this.databaseID, AppwriteCollection.LIKES, AppwriteCollection.LIKES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections15 = this.databases.createCollection(this.databaseID, AppwriteCollection.SAVED_ARTICLES, AppwriteCollection.SAVED_ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections16 = this.databases.createCollection(this.databaseID, AppwriteCollection.SPONSORS, AppwriteCollection.SPONSORS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections17 = this.databases.createCollection(this.databaseID, AppwriteCollection.TOPICS, AppwriteCollection.TOPICS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections18 = this.databases.createCollection(this.databaseID, AppwriteCollection.TRANSACTIONS, AppwriteCollection.TRANSACTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections19 = this.databases.createCollection(this.databaseID, AppwriteCollection.USERS, AppwriteCollection.USERS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections20 = this.databases.createCollection(this.databaseID, AppwriteCollection.USER_ACTIVITIES, AppwriteCollection.USER_ACTIVITIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections21 = this.databases.createCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections22 = this.databases.createCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections23 = this.databases.createCollection(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, AppwriteCollection.USER_NOTIFICATIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections24 = this.databases.createCollection(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, AppwriteCollection.USER_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections25 = this.databases.createCollection(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, AppwriteCollection.USER_RELATION_SUGGESTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections26 = this.databases.createCollection(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, AppwriteCollection.USER_SOCIAL_LINKS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
        const collections27 = this.databases.createCollection(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);

        await Promise.all([
            collections1,
            collections2,
            collections3,
            collections4,
            collections5,
            collections6,
            collections7,
            collections8,
            collections9,
            collections10,
            collections11,
            collections12,
            collections13,
            collections14,
            collections15,
            collections16,
            collections17,
            collections18,
            collections19,
            collections20,
            collections21,
            collections22,
            collections23,
            collections24,
            collections25,
            collections26,
            collections27,
        ]);
    }

    /**
     * export namespace MUser {
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
     */
    public async createMUser() {
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'fullName', 30, true);
        const prop2 = this.databases.createEmailAttribute(this.databaseID, AppwriteCollection.USERS, 'email', true);
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'aboutMe', 255, false);
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'mobile', 15, false);
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'profilePic', 255, false);
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'address_docID', 36, false);
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'address_address', 255, false);
        const prop10 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfTopics', false);
        const prop11 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfArticles', false);
        const prop12 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfComments', false);
        const prop13 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfLikes', false);
        const prop14 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfDislikes', false);
        const prop21 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfRead', false);
        const prop22 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfSaved', false);
        const prop23 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfClick', false);
        const prop15 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfShare', false);
        const prop16 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_boostPoint', false);
        const prop17 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_resetDate', true);
        const prop18 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'createdAt', true);
        const prop19 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'updatedAt', true);
        const prop20 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.USERS, 'isActive', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop6, prop7, prop9, prop10, prop11, prop12, prop13, prop14, prop15, prop16, prop17, prop18, prop19, prop20, prop21, prop22, prop23]);
    }
    /**
     * export namespace MBadge {
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
     */
    public async createMBadge() {
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'name', 30, true);
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'description', 255, false);
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'color', 8, false);
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'logo', 255, false);
        const prop5 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGES, 'createdAt', true);
        const prop6 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGES, 'updatedAt', true);
        const prop7 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfParticipants', false);
        const prop8 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfWinner', false);
        const prop9 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfLoser', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9]);
    }
    /**
     * export namespace MTopic {
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
          isSelected?: boolean;
          ofNetwork?: boolean;
        }
        }
     */
    public async createMTopic() {
        // name: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'name', 30, true);
        // logo: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'logo', 255, false);
        // color: string , max 8 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'color', 8, false);
        // description: string , max 255 , false
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'description', 255, false);
        // weeklyTrend: STrend , false
        // weeklyTrend_numberOfArticles: number , false
        const prop5 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_numberOfArticles', false);
        // weeklyTrend_boostPoint: float , false
        const prop6 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_boostPoint', false);
        // weeklyTrend_resetDate: Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_resetDate', true);
        // monthlyTrend: STrend , false
        // monthlyTrend_numberOfArticles: number , false
        const prop8 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_numberOfArticles', false);
        // monthlyTrend_boostPoint: float , false
        const prop9 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_boostPoint', false);
        // monthlyTrend_resetDate: Date , true
        const prop10 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_resetDate', true);
        // createdAt: Date , true
        const prop11 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'createdAt', true);
        // updatedAt: Date , true
        const prop12 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'updatedAt', true);
        // associatedUsersCount: number , false
        const prop13 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.TOPICS, 'associatedUsersCount', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13]);
    }

    /**
     * export namespace MArticle {
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
          canPublishStory: boolean;
        }

        export interface IArticle {
          id: string;
          doc: DArticle;
          likesCount?: number;
          commentsCount?: number;
          topics?:MTopic.STopic[];
        }
      }
     */
    public async createMArticle() {
        // title: string , max 255 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'title', 255, true);
        // subTitle: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'subTitle', 255, false);
        // body: string , max 65535 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'body', 65535, false);
        // coverImage: string , max 255 , false
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'coverImage', 255, false);
        // createdAt: Date , true
        const prop5 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'createdAt', true);
        // updatedAt: Date , true
        const prop6 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'updatedAt', true);
        // writer: MUser.SUser , false
        // writer_fullName: string , max 30 , true
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_fullName', 30, true);
        // writer_profilePic : string , max 255 , false
        const prop8 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_profilePic', 255, false);
        // writer_aboutMe: string , max 255 , false
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_aboutMe', 255, false);
        // writer_docID : string, max 36 , true
        const prop10 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_docID', 36, true);
        // readTimeInMin: float , false
        const prop11 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'readTimeInMin', false);
        // articleSeries: MArticleSeries.SArticleSeries | null , false
        // articleSeries_name: string , max 30 , true
        const prop12 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'articleSeries_name', 30, true);
        // articleSeries_docID: string , max 36 , true
        const prop13 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'articleSeries_docID', 36, true);
        // canPublishStory: boolean , false
        const prop14 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'canPublishStory', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14]);
    }

    /**
     * export namespace MArticleComment {
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
     */
    public async createMArticleComment() {
        // body : string , max 65535 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'body', 65535, true);
        // createdAt : Date , true
        const prop2 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'createdAt', true);
        // updatedAt : Date , true
        // updatedAt : Date , true
        const prop3 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'updatedAt', true);
        // commentedBy : MUser.SUser , false
        /** 
         * export interface SUser {
            fullName: string; // / max length of 30
            profilePic: string; // URL max length of 255
            aboutMe: string; // max length of 255
            docID: string; //  UUID max length of 36
         }
         */
        // commentedBy_fullName: string , max 30 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_fullName', 30, true);
        // commentedBy_profilePic: string , max 255 , false
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_profilePic', 255, false);
        // commentedBy_aboutMe: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_aboutMe', 255, false);
        // commentedBy_docID: string , max 36 , true
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_docID', 36, true);
        // article : MArticle.SArticle , false
        /** 
          * export interface SArticle {
            docID: string; // UUID max length of 36
            title: string; // Article title max length of 255
            }
          */
        // article_title: string , max 30 , true
        const prop8 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'article_title', 255, true);
        // article_docID: string , max 36 , true
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'article_docID', 36, true);
        // writer: MUser.SUser , false
        // writer_fullName: string , max 30 , true
        const prop10 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_fullName', 30, true);
        // writer_profilePic : string , max 255 , false
        const prop11 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_profilePic', 255, false);
        // writer_aboutMe: string , max 255 , false
        const prop12 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_aboutMe', 255, false);
        // writer_docID : string, max 36 , true
        const prop13 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_docID', 36, true);
        // parentComment: MArticleComment.SArticleComment | null , false
        // parentComment_docID: string , max 36 , true
        const prop14 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'parentComment_docID', 36, true);
        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14]);
    }
    /** 
     * export namespace MArticleLike {
        export type likesStatus = 'LIKED' | 'DISLIKED';
        export enum ENUM_likesStatus {
            LIKED = 'LIKED',
            DISLIKED = 'DISLIKED',
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
     */
    public async createMArticleLike() {
        // likedBy : MUser.SUser , false
        /** 
         * export interface SUser {
            fullName: string; // / max length of 30
            profilePic: string; // URL max length of 255
            aboutMe: string; // max length of 255
            docID: string; //  UUID max length of 36
         }
         */
        // likedBy_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_fullName', 30, true);
        // likedBy_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_profilePic', 255, false);
        // likedBy_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_aboutMe', 255, false);
        // likedBy_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_docID', 36, true);
        // article : MArticle.SArticle , false
        /** 
         * export interface SArticle {
            docID: string; // UUID max length of 36
            title: string; // Article title max length of 255
        }
        */
        // article_title: string , max 30 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'article_title', 255, true);
        // article_docID: string , max 36 , true
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'article_docID', 36, true);
        // createdAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.LIKES, 'createdAt', true);
        // updatedAt : Date , true
        const prop8 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.LIKES, 'updatedAt', true);
        // status : MArticleLike.likesStatus , false
        const prop9 = this.databases.createEnumAttribute(this.databaseID, AppwriteCollection.LIKES, 'status', ['LIKED', 'DISLIKED'], false);
        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9]);
    }
    /** 
     * export namespace MSavedArticle {
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
     */
    public async createMSavedArticle() {
        // article : MArticle.SArticle , false
        // article_docID: string , max 36 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'article_docID', 36, true);
        // article_title: string , max 255 , true
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'article_title', 255, true);
        // savedBy : MUser.SUser , false
        // savedBy_fullName: string , max 30 , true
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_fullName', 30, true);
        // savedBy_profilePic: string , max 255 , false
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_profilePic', 255, false);
        // savedBy_aboutMe: string , max 255 , false
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_aboutMe', 255, false);
        // savedBy_docID: string , max 36 , true
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_docID', 36, true);
        // writer : MUser.SUser , false
        // writer_fullName: string , max 30 , true
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_fullName', 30, true);
        // writer_profilePic: string , max 255 , false
        const prop8 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_profilePic', 255, false);
        // writer_aboutMe: string , max 255 , false
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_aboutMe', 255, false);
        // writer_docID: string , max 36 , true
        const prop10 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_docID', 36, true);
        // createdAt : Date , true
        const prop11 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'createdAt', true);
        // updatedAt : Date , true
        const prop12 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'updatedAt', true);
        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12]);
    }
    /**
     * export namespace MUserRelationship {
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
     */
    public async createMUserRelationship() {
        // fromUser : MUser.SUser , false
        // fromUser_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_fullName', 30, true);
        // fromUser_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_profilePic', 255, false);
        // fromUser_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_aboutMe', 255, false);
        // fromUser_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_docID', 36, true);
        // toUser : MUser.SUser , false
        // toUser_fullName: string , max 30 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_fullName', 30, true);
        // toUser_profilePic: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_profilePic', 255, false);
        // toUser_aboutMe: string , max 255 , false
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_aboutMe', 255, false);
        // toUser_docID: string , max 36 , true
        const prop8 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_docID', 36, true);
        // createdAt : Date , true
        const prop9 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'createdAt', true);
        // updatedAt : Date , true
        const prop10 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'updatedAt', true);
        // fromTrend : MUserRelationship.STrend , false
        const prop11 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromTrend_boostPoint', false);
        // fromTrend : MUserRelationship.STrend , false
        const prop12 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromTrend_resetDate', false);
        // toTrend : MUserRelationship.STrend , false
        const prop13 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toTrend_boostPoint', false);
        const prop14 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toTrend_resetDate', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14]);
    }
    /** 
     * 
     * export namespace MUserTopicRelationship {
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

     */
    public async createMUserTopicRelationship() {
        // user : MUser.SUser , false
        // user_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_fullName', 30, true);
        // user_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_profilePic', 255, false);
        // user_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_aboutMe', 255, false);
        // user_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_docID', 36, true);
        // topic : MTopic.STopic , false
        /** 
         * export interface STopic {
                docID: string;
                name: string;
                color: string;
                logo: string;
            }
         */
        // topic_docID: string , max 36 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_docID', 36, true);
        // topic_name: string , max 30 , true
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_name', 30, true);
        // topic_color: string , max 30 , true
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_color', 30, true);
        // topic_logo: string , max 255 , false
        const prop8 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_logo', 255, false);
        // createdAt : Date , true
        const prop9 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'createdAt', true);
        // updatedAt : Date , true
        const prop10 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'updatedAt', true);
        // trend : MUserTopicRelationship.STrend , false
        const prop11 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'trend_boostPoint', false);
        // trend : MUserTopicRelationship.STrend , false
        const prop12 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'trend_resetDate', false);
        // isStable : boolean , false
        const prop13 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'isStable', false);
        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13]);
    }

    /**
     * export namespace MArticleTopicRelationship {
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
     */
    public async createMArticleTopicRelationship() {
        // article : MArticle.SArticle , false
        /** 
         * export interface SArticle {
                docID: string; // UUID max length of 36
                title: string; // Article title max length of 255
            }
         */
        // article_docID: string , max 36 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'article_docID', 36, true);
        // article_title: string , max 255 , true
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'article_title', 255, true);
        // topic : MTopic.STopic , false
        /** 
         * export interface STopic {
                docID: string;
                name: string;
                color: string;
                logo: string;
            }
         */
        // topic_docID: string , max 36 , true
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_docID', 36, true);
        // topic_name: string , max 30 , true
        // topic_name: string , max 30 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_name', 30, true);
        // topic_color: string , max 30 , true
        // topic_color: string , max 30 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_color', 30, true);
        // topic_logo: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_logo', 255, false);
        // createdAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'createdAt', true);
        // updatedAt : Date , true
        const prop8 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'updatedAt', true);
        // trend : MArticleTopicRelationship.STrend , false
        const prop9 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'trend_boostPoint', false);
        // trend : MArticleTopicRelationship.STrend , false
        // trend : MArticleTopicRelationship.STrend , false
        const prop10 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'trend_resetDate', false);
        // trend : MArticleTopicRelationship.STrend , false
        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10]);
    }

    /** 
     * 
     * export namespace MUserRelationSuggestion {
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
     */
    public async createMUserRelationSuggestion() {
        // for : MUser.SUser , false
        /**
          * export interface SUser {
              fullName: string; // / max length of 30
              profilePic: string; // URL max length of 255
              aboutMe: string; // max length of 255
              docID: string; //  UUID max length of 36
            }
          */
        // for_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_fullName', 30, true);
        // for_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_profilePic', 255, false);
        // for_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_aboutMe', 255, false);
        // for_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_docID', 36, true);
        // user : MUser.SUser , false
        /**
          * export interface SUser {
              fullName: string; // / max length of 30
              profilePic: string; // URL max length of 255
              aboutMe: string; // max length of 255
              docID: string; //  UUID max length of 36
            }
          */
        // user_fullName: string , max 30 , true
        // user_fullName: string , max 30 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_fullName', 30, true);
        // user_profilePic: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_profilePic', 255, false);
        // user_aboutMe: string , max 255 , false
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_aboutMe', 255, false);
        // user_docID: string , max 36 , true
        const prop8 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_docID', 36, true);
        // createdAt : Date , true
        const prop9 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'createdAt', true);
        // updatedAt : Date , true
        const prop10 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'updatedAt', true);
        // impressionCount : number , false
        const prop11 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'impressionCount', false);
        // boostPoint : number , false
        const prop12 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'boostPoint', false);
        // isStale : boolean , false
        const prop13 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'isStale', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13]);
    }

    /** 
       * export namespace MArticleRelationSuggestion {
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
       */
    public async createMArticleRelationSuggestion() {
        // for : MUser.SUser , false
        /** 
            * export interface SUser {
                fullName: string; // / max length of 30
                profilePic: string; // URL max length of 255
                aboutMe: string; // max length of 255
                docID: string; //  UUID max length of 36
              }
            */
        // for_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_fullName', 30, true);
        // for_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_profilePic', 255, false);
        // for_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_aboutMe', 255, false);
        // for_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_docID', 36, true);
        // article : MArticle.SArticle , false
        /** 
            *  export interface SArticle {
                docID: string; // UUID max length of 36
                title: string; // Article title max length of 255
              }
            */
        // article_docID: string , max 36 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'article_docID', 36, true);
        // article_title: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'article_title', 255, false);
        // createdAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'createdAt', true);
        // updatedAt : Date , true
        const prop8 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'updatedAt', true);
        // impressionCount : number , false
        const prop9 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'impressionCount', false);
        // boostPoint : number , false
        const prop10 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'boostPoint', false);
        // isStale : boolean , false
        const prop11 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'isStale', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11]);
    }

    /** User article suggestion copy */
    public async createMArticleRelationSuggestionCopy() {
        // for : MUser.SUser , false
        /** 
          * export interface SUser {
              fullName: string; // / max length of 30
              profilePic: string; // URL max length of 255
              aboutMe: string; // max length of 255
              docID: string; //  UUID max length of 36
            }
          */
        // for_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_fullName', 30, true);
        // for_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_profilePic', 255, false);
        // for_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_aboutMe', 255, false);
        // for_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_docID', 36, true);
        // article : MArticle.SArticle , false
        /** 
          *  export interface SArticle {
              docID: string; // UUID max length of 36
              title: string; // Article title max length of 255
            }
          */
        // article_docID: string , max 36 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'article_docID', 36, true);
        // article_title: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'article_title', 255, false);
        // createdAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'createdAt', true);
        // updatedAt : Date , true
        const prop8 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'updatedAt', true);
        // impressionCount : number , false
        const prop9 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'impressionCount', false);
        // boostPoint : number , false
        const prop10 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'boostPoint', false);
        // isStale : boolean , false
        const prop11 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'isStale', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11]);
    }

    /** 
     * export namespace MUserActivity {
        type activityAction = 'LIKE' | 'READ' | 'COMMENT' | 'SAVE' | 'CREATE' | 'DISLIKE' | 'JOINED';
        export enum ENUM_activityAction {
          LIKE = 'LIKE',
          READ = 'READ',
          COMMENT = 'COMMENT',
          SAVE = 'SAVE',
          CREATE = 'CREATE',
          DISLIKE = 'DISLIKE',
          JOINED = 'JOINED',
        }

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
     */
    public async createMUserActivity() {
        // user : MUser.SUser , false
        /** 
        * export interface SUser {
            fullName: string; // / max length of 30
            profilePic: string; // URL max length of 255
            aboutMe: string; // max length of 255
            docID: string; //  UUID max length of 36
          }
        */
        // user_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_fullName', 30, true);
        // user_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_profilePic', 255, false);
        // user_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_aboutMe', 255, false);
        // user_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_docID', 36, true);

        // article : MArticle.SArticle , false
        /**
        * export interface SArticle {
            docID: string; // UUID max length of 36
            title: string; // Article title max length of 255
          }
        */
        // article_docID: string , max 36 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'article_docID', 36, true);
        // article_title: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'article_title', 255, false);
        // action : MUserActivity.activityAction , false
        // type activityAction = 'LIKE' | 'READ' | 'COMMENT' | 'SAVE' | 'CREATE' | 'DISLIKE' | 'JOINED';
        // ENUM
        const prop7 = this.databases.createEnumAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'action', ['LIKE', 'READ', 'COMMENT', 'SAVE', 'CREATE', 'DISLIKE', 'JOINED'], false);
        // createdAt : Date , true
        const prop8 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'createdAt', true);
        // updatedAt : Date , true
        const prop9 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'updatedAt', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9]);
    }
    /** 
     * 
     * export namespace MUserNotification {
        export type notificationTopic = 'LIKE' | 'COMMENT' | 'FOLLOW' | 'MENTION' | 'GENERAL';
        export type notificationOriginator = 'TABNODE' | 'USER';
        export enum ENUM_notificationTopic {
          LIKE = 'LIKE',
          COMMENT = 'COMMENT',
          FOLLOW = 'FOLLOW',
          MENTION = 'MENTION',
          GENERAL = 'GENERAL',
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
     */
    public async createMUserNotification() {
        // user : MUser.SUser , false
        /** 
       * export interface SUser {
          fullName: string; // / max length of 30
          profilePic: string; // URL max length of 255
          aboutMe: string; // max length of 255
          docID: string; //  UUID max length of 36
        }
       */
        // user_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_fullName', 30, true);
        // user_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_profilePic', 255, false);
        // user_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_aboutMe', 255, false);
        // user_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_docID', 36, true);
        // title: string , max 255 , false
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'title', 255, false);
        // notification: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'notification', 255, false);
        // originator: SOriginator , false
        /** 
       * export interface SOriginator {
          fullName: string;
          type: notificationOriginator;
          profilePic: string;
          docID: string;
          aboutMe: string;
        }
       */
        // originator_fullName: string , max 30 , true
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_fullName', 30, true);
        // originator_type: notificationOriginator , false
        const prop8 = this.databases.createEnumAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_type', ['TABNODE', 'USER'], false);
        // originator_profilePic: string , max 255 , false
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_profilePic', 255, false);
        // originator_docID: string , max 36 , true
        const prop10 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_docID', 36, true);
        // originator_aboutMe: string , max 255 , false
        const prop11 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_aboutMe', 255, false);
        // link: string , max 255 , false
        const prop12 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'link', 255, false);
        // isRead: boolean , false
        const prop13 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'isRead', false);
        // createdAt : Date , true
        const prop14 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'createdAt', true);
        // updatedAt : Date , true
        const prop15 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'updatedAt', true);
        // topic : MUserNotification.notificationTopic , false
        // type notificationTopic = 'LIKE' | 'COMMENT' | 'FOLLOW' | 'MENTION' | 'GENERAL';
        // ENUM
        const prop16 = this.databases.createEnumAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'topic', ['LIKE', 'COMMENT', 'FOLLOW', 'MENTION', 'GENERAL'], false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14, prop15, prop16]);
    }
    /** 
     * export namespace MDraftedArticle {
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
     */
    public async createMDraftedArticle() {
        // article : MArticle.DArticle , false
        /** 
       * export interface DArticle {
          title: string; // Article title max length of 255
          subTitle: string; // Article sub title max length of 255
          body: string; // Article body max length of 65535
          coverImage: string; // URL max length of 255
          createdAt: Date;
          updatedAt: Date;
          writer: MUser.SUser;
          readTimeInMin: number; // FloatField
          articleSeries: MArticleSeries.SArticleSeries | null;
          canPublishStory: boolean;
        }
       */
        // article_title: string , max 255 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_title', 255, true);
        // article_subTitle: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_subTitle', 255, false);
        // article_body: string , max 65535 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_body', 65535, false);
        // const article_coverImage: string , max 255 , false
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_coverImage', 255, false);
        // article_createdAt: Date , true
        const prop5 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_createdAt', true);
        // article_updatedAt: Date , true
        const prop6 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_updatedAt', true);
        // article_writer: MUser.SUser , false
        /** 
       * export interface SUser {
          fullName: string; // / max length of 30
          profilePic: string; // URL max length of 255
          aboutMe: string; // max length of 255
          docID: string; //  UUID max length of 36
        } */
        // article_writer_fullName: string , max 30 , true
        const prop7 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_fullName', 30, true);
        // article_writer_profilePic: string , max 255 , false
        const prop8 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_profilePic', 255, false);
        // article_writer_aboutMe: string , max 255 , false
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_aboutMe', 255, false);
        // article_writer_docID: string , max 36 , true
        const prop10 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_docID', 36, true);
        // article_readTimeInMin: number , false
        const prop11 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_readTimeInMin', false);
        // article_articleSeries: MArticleSeries.SArticleSeries | null , false
        /** 
         * export interface SArticleSeries {
              docID: string; // UUID max length of 36
              name: string; // max length of 30
            }
         */
        // article_articleSeries_docID: string , max 36 , true
        const prop12 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_articleSeries_docID', 36, true);
        // article_articleSeries_name: string , max 30 , false
        const prop13 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_articleSeries_name', 30, false);
        // article_canPublishStory: boolean , false
        const prop14 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_canPublishStory', false);
        // originalArticle: MArticle.SArticle | null , false
        /** 
         * export interface SArticle {
              docID: string; // UUID max length of 36
              title: string; // Article title max length of 255
            }
         */
        // originalArticle_docID: string , max 36 , true
        const prop15 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'originalArticle_docID', 36, true);
        // originalArticle_title: string , max 255 , false
        const prop16 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'originalArticle_title', 255, false);

        // createdAt : Date , true
        const prop17 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'createdAt', true);
        // updatedAt : Date , true
        const prop18 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'updatedAt', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14, prop15, prop16, prop17, prop18]);
    }

    /** 
     * export namespace MArticleStory {
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
     */
    public async createMArticleStory() {
        // article : MArticle.SArticle , false
        /**
       * export interface SArticle {
            docID: string; // UUID max length of 36
            title: string; // Article title max length of 255
          }
       */
        // article_docID: string , max 36 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'article_docID', 36, true);
        // article_title: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'article_title', 255, false);

        /** 
       * story: {
              backgroundImage: string; // URL max length of 255
              summery: string; // Article summery max length of 500
            ;
       */
        // story_backgroundImage: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'story_backgroundImage', 255, false);
        // story_summery: string , max 500 , false
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'story_summery', 500, false);
        // createdAt : Date , true
        const prop5 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'createdAt', true);
        // updatedAt : Date , true
        const prop6 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'updatedAt', true);
        // expireAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'expireAt', true);
        // user : MUser.SUser , false
        /** 
       * export interface SUser {
          fullName: string; // / max length of 30
          profilePic: string; // URL max length of 255
          aboutMe: string; // max length of 255
          docID: string; //  UUID max length of 36
        }
       */
        // user_fullName: string , max 30 , true
        const prop8 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_fullName', 30, true);
        // user_profilePic: string , max 255 , false
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_profilePic', 255, false);
        // user_aboutMe: string , max 255 , false
        const prop10 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_aboutMe', 255, false);
        // user_docID: string , max 36 , true
        const prop11 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_docID', 36, true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11]);
    }

    /** 
     * export namespace MArticleStoryDistribution {
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
     */
    public async createMArticleStoryDistribution() {
        // for : MUser.SUser , false
        /** 
        * export interface SUser {
            fullName: string; // / max length of 30
            profilePic: string; // URL max length of 255
            aboutMe: string; // max length of 255
            docID: string; //  UUID max length of 36
          }
        */
        // for_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_fullName', 30, true);
        // for_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_profilePic', 255, false);
        // for_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_aboutMe', 255, false);
        // for_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_docID', 36, true);

        // story : MArticleStory.SArticleStory , false
        /** 
        *  export interface SArticleStory {
            docID: string; // UUIDField max  length of 36
          }
        */
        // story_docID: string , max 36 , true
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'story_docID', 36, true);
        // boostPoint : number , false
        const prop6 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'boostPoint', false);
        // createdAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'createdAt', true);
        // updatedAt : Date , true
        const prop8 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'updatedAt', true);
        // expireAt : Date , true
        const prop9 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'expireAt', true);
        // isSeen : boolean , false
        const prop10 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'isSeen', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10]);
    }

    /** 
     * export namespace MUserSocialLink {
          export interface DUserSocialLink {
            user: MUser.SUser;
            socialLink: string; // URL max  length of 255
            type: 'WEB' | 'TWITTER' | 'INSTAGRAM' | 'LINKEDIN' | 'GITHUB';
            createdAt: Date;
            updatedAt: Date;
          }

          export interface IUserSocialLink {
            id: string;
            doc: DUserSocialLink;
          }
        }
     */
    public async createMUserSocialLink() {
        // user : MUser.SUser , false
        /** 
       * export interface SUser {
          fullName: string; // / max length of 30
          profilePic: string; // URL max length of 255
          aboutMe: string; // max length of 255
          docID: string; //  UUID max length of 36
        }
       */
        // user_fullName: string , max 30 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_fullName', 30, true);
        // user_profilePic: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_profilePic', 255, false);
        // user_aboutMe: string , max 255 , false
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_aboutMe', 255, false);
        // user_docID: string , max 36 , true
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_docID', 36, true);

        // socialLink : string , max 255 , false
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'socialLink', 255, false);
        // type : 'WEB' | 'TWITTER' | 'INSTAGRAM' | 'LINKEDIN' | 'GITHUB' , false
        // ENUM
        const prop6 = this.databases.createEnumAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'type', ['WEB', 'TWITTER', 'INSTAGRAM', 'LINKEDIN', 'GITHUB'], false);
        // createdAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'createdAt', true);
        // updatedAt : Date , true
        const prop8 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'updatedAt', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8]);
    }

    /** 
     * export namespace MArticleDistribution {
        export type trackOrderType = 'DATE_asc' | 'DATE_desc';
        export enum enum_trackOrderType {
          DATE_asc = 'DATE_asc',
          DATE_desc = 'DATE_desc',
        }

        export enum enum_articlePhase {
          'PHASE_1' = 10,
          'PHASE_2' = 30,
          'PHASE_3' = 60,
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
     */
    public async createMArticleDistribution() {
        // phase : number , false
        const prop1 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'phase', false);
        // among : string , max 255, false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'among', 255, false);
        // boostPoint : number , false
        const prop3 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'boostPoint', false);
        // impressionCount : number , false
        const prop4 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'impressionCount', false);
        // trackOrder : MArticleDistribution.trackOrderType , false
        // ENUM
        const prop5 = this.databases.createEnumAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'trackOrder', ['DATE_asc', 'DATE_desc'], false);
        // createdAt : Date , true
        const prop6 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'createdAt', true);
        // updatedAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'updatedAt', true);
        // isStale : boolean , false
        const prop8 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'isStale', false);
        // article : MArticle.SArticle , false
        /** 
        * export interface SArticle {
            docID: string; // UUID max length of 36
            title: string; // Article title max length of 255
          }
        */
        // article_docID: string , max 36 , true
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'article_docID', 36, true);
        // article_title: string , max 255 , false
        const prop10 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'article_title', 255, false);

        // topicIDS : string[] , false
        const prop11 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'topicIDS', 255, false, undefined, true);
        // lastUserIDS : string[] , false
        const prop12 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'lastUserIDS', 255, false, undefined, true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12]);
    }

    public async createMArticleDistributionCopy() {
        // phase : number , false
        const prop1 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'phase', false);
        // among : string , max 255, false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'among', 255, false);
        // boostPoint : number , false
        const prop3 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'boostPoint', false);
        // impressionCount : number , false
        const prop4 = this.databases.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'impressionCount', false);
        // trackOrder : MArticleDistribution.trackOrderType , false
        // ENUM
        const prop5 = this.databases.createEnumAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'trackOrder', ['DATE_asc', 'DATE_desc'], false);
        // createdAt : Date , true
        const prop6 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'createdAt', true);
        // updatedAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'updatedAt', true);
        // isStale : boolean , false
        const prop8 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'isStale', false);
        // article : MArticle.SArticle , false
        /** 
      * export interface SArticle {
          docID: string; // UUID max length of 36
          title: string; // Article title max length of 255
        }
      */
        // article_docID: string , max 36 , true
        const prop9 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'article_docID', 36, true);
        // article_title: string , max 255 , false
        const prop10 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'article_title', 255, false);

        // topicIDS : string[] , false
        const prop11 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'topicIDS', 255, false, undefined, true);
        // lastUserIDS : string[] , false
        const prop12 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'lastUserIDS', 255, false, undefined, true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12]);
    }

    /** 
     * export namespace MArticleReader {
        export interface DArticleReader {
          article: MArticle.SArticle;
          reader: MUser.SUser;
          writer: MUser.SUser; // article writer
          createdAt: Date;
          updatedAt: Date;
          readTimeInMin: number; // FloatField
          articleTimeInMin: number; // FloatField
          isLive: boolean;
        }

        export interface IArticleReader {
          id: string;
          doc: DArticleReader;
        }
      }
     */
    public async createMArticleReader() {
        // article : MArticle.SArticle , false
        /** 
        * export interface SArticle {
            docID: string; // UUID max length of 36
            title: string; // Article title max length of 255
          }
        */
        // article_docID: string , max 36 , true
        const prop1 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'article_docID', 36, true);
        // article_title: string , max 255 , false
        const prop2 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'article_title', 255, false);
        // reader : MUser.SUser , false
        /**
        *  export interface SUser {
            fullName: string; // / max length of 30
            profilePic: string; // URL max length of 255
            aboutMe: string; // max length of 255
            docID: string; //  UUID max length of 36
          }
        */
        // reader_docID: string , max 36 , true
        const prop3 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_docID', 36, true);
        // reader_fullName: string , max 30 , false
        const prop4 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_fullName', 30, false);
        // reader_profilePic: string , max 255 , false
        const prop5 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_profilePic', 255, false);
        // reader_aboutMe: string , max 255 , false
        const prop6 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_aboutMe', 255, false);

        // createdAt : Date , true
        const prop7 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'createdAt', true);
        // updatedAt : Date , true
        const prop8 = this.databases.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'updatedAt', true);
        // readTimeInMin : FloatField , false
        const prop9 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'readTimeInMin', false);
        // articleTimeInMin : FloatField , false
        const prop10 = this.databases.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'articleTimeInMin', false);
        // isLive : boolean , false
        const prop11 = this.databases.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'isLive', false);

        // writer : MUser.SUser , false
        /**
        *  export interface SUser {
            fullName: string; // / max length of 30
            profilePic: string; // URL max length of 255
            aboutMe: string; // max length of 255
            docID: string; //  UUID max length of 36
          }
        */
        // writer_docID: string , max 36 , true
        const prop12 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_docID', 36, true);
        // writer_fullName: string , max 30 , false
        const prop13 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_fullName', 30, false);
        // writer_profilePic: string , max 255 , false
        const prop14 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_profilePic', 255, false);
        // writer_aboutMe: string , max 255 , false
        const prop15 = this.databases.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_aboutMe', 255, false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14, prop15]);
    }

    /** Create all collection attributes */
    public async createAllCollections() {
        await this.createMUser();
        await this.createMBadge();
        await this.createMTopic();
        await this.createMArticle();
        await this.createMArticleComment();
        await this.createMArticleLike();
        await this.createMSavedArticle();
        await this.createMUserRelationship();
        await this.createMUserTopicRelationship();
        await this.createMArticleTopicRelationship();
        await this.createMUserRelationSuggestion();
        await this.createMArticleRelationSuggestion();
        await this.createMArticleRelationSuggestionCopy();
        await this.createMUserActivity();
        await this.createMUserNotification();
        await this.createMDraftedArticle();
        await this.createMArticleStory();
        await this.createMArticleStoryDistribution();
        await this.createMUserSocialLink();
        await this.createMArticleDistribution();
        await this.createMArticleDistributionCopy();
        await this.createMArticleReader();
    }

    

    /** Create index */
    public async createIndex() {
        // collection : USER_TOPIC_RELATIONSHIPS , attr : [user_docID] , order : [asc]
        const indx1 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'INDEX_USER_TOPIC_RELATIONSHIPS_1', 'key', ['user_docID'], ['asc']);
        // collection: USER_TOPIC_RELATIONSHIPS , attr: [trend_boostPoint] , order: [desc]
        const indx2 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'INDEX_USER_TOPIC_RELATIONSHIPS_2', 'key', ['trend_boostPoint'], ['desc']);
        // collection: USER_TOPIC_RELATIONSHIPS , attr: [user_docID,trend_boostPoint] , order: [asc,desc]
        const indx3 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'INDEX_USER_TOPIC_RELATIONSHIPS_3', 'key', ['user_docID', 'trend_boostPoint'], ['asc', 'desc']);
        // collection:  same upper, attr: [topic_docID] , order: [asc]
        const indx4 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'INDEX_USER_TOPIC_RELATIONSHIPS_4', 'key', ['topic_docID'], ['asc']);
        // collection:  same upper, attr: [createdAt] , order: [asc]
        const indx5 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'INDEX_USER_TOPIC_RELATIONSHIPS_5', 'key', ['createdAt'], ['asc']);
        // collection:  same upper, attr: [createdAt] , order: [desc]
        const indx6 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'INDEX_USER_TOPIC_RELATIONSHIPS_6', 'key', ['createdAt'], ['desc']);
        // collection:  same upper, attr: [topic_docID,createdAt] , order: [asc,asc]
        const indx7 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'INDEX_USER_TOPIC_RELATIONSHIPS_7', 'key', ['topic_docID', 'createdAt'], ['asc', 'asc']);
        // collection:  same upper, attr: [topic_docID,createdAt] , order: [asc,desc]
        const indx8 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'INDEX_USER_TOPIC_RELATIONSHIPS_8', 'key', ['topic_docID', 'createdAt'], ['asc', 'desc']);

        // For the collection ARTICLES

        // collection : ARTICLES , attr : [writer_docID] , order : [asc]
        const indx9 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLES, 'INDEX_ARTICLES_1', 'key', ['writer_docID'], ['asc']);
        // collection: ARTICLES , attr: [createdAt] , order: [desc]
        const indx10 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLES, 'INDEX_ARTICLES_2', 'key', ['createdAt'], ['desc']);
        // collection: ARTICLES , attr: [writer_docID,createdAt] , order: [asc, desc]
        const indx11 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLES, 'INDEX_ARTICLES_3', 'key', ['writer_docID', 'createdAt'], ['asc', 'desc']);

        // For the collection ARTICLE_TOPIC_RELATIONSHIPS
        // collection : ARTICLE_TOPIC_RELATIONSHIPS , attr : [article_docID,trend_boostPoint] , order : [asc,desc]
        const indx12 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'INDEX_ARTICLE_TOPIC_RELATIONSHIPS_1', 'key', ['article_docID', 'trend_boostPoint'], ['asc', 'desc']);
        // collection : ARTICLE_TOPIC_RELATIONSHIPS , attr : [article_docID] , order : [asc]
        const indx13 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'INDEX_ARTICLE_TOPIC_RELATIONSHIPS_2', 'key', ['article_docID'], ['asc']);
        // collection : ARTICLE_TOPIC_RELATIONSHIPS , attr : [trend_boostPoint] , order : [desc]
        const indx14 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'INDEX_ARTICLE_TOPIC_RELATIONSHIPS_3', 'key', ['trend_boostPoint'], ['desc']);
        // collection : ARTICLE_TOPIC_RELATIONSHIPS , attr : [topic_docID] , order : [asc]
        const indx15 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'INDEX_ARTICLE_TOPIC_RELATIONSHIPS_4', 'key', ['topic_docID'], ['asc']);
        // collection : ARTICLE_TOPIC_RELATIONSHIPS , attr : [topic_docID,trend_boostPoint] , order : [asc,desc]
        const indx16 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'INDEX_ARTICLE_TOPIC_RELATIONSHIPS_5', 'key', ['topic_docID', 'trend_boostPoint'], ['asc', 'desc']);

        // For the collection LIKES
        // collection : LIKES , attr : [likedBy_docID,article_docID] , order : [asc,asc]
        const indx17 = this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, 'INDEX_LIKES_1', 'key', ['likedBy_docID', 'article_docID'], ['asc', 'asc']);
        // collection : LIKES , attr : [article_docID] , order : [asc]
        const indx18 = this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, 'INDEX_LIKES_2', 'key', ['article_docID'], ['asc']);
        // collection : LIKES , attr : [status] , order : [asc]
        const indx19 = this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, 'INDEX_LIKES_3', 'key', ['status'], ['asc']);
        // collection : LIKES , attr : [createdAt] , order : [desc]
        const indx20 = this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, 'INDEX_LIKES_4', 'key', ['createdAt'], ['desc']);
        // collection : LIKES , attr : [article_docID,status,createdAt] , order : [asc,asc,desc]
        const indx21 = this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, 'INDEX_LIKES_5', 'key', ['article_docID', 'status', 'createdAt'], ['asc', 'asc', 'desc']);
        // collection : LIKES , attr : [article_docID,status] , order : [asc, asc]
        const indx22 = this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, 'INDEX_LIKES_6', 'key', ['article_docID', 'status'], ['asc', 'asc']);

        // for the collection SAVED_ARTICLES
        // collection : SAVED_ARTICLES , attr : [savedBy_docID,article_docID] , order : [asc,asc]
        const indx23 = this.databases.createIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'INDEX_SAVED_ARTICLES_1', 'key', ['savedBy_docID', 'article_docID'], ['asc', 'asc']);
        // collection : SAVED_ARTICLES , attr : [savedBy_docID] , order : [asc]
        const indx24 = this.databases.createIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'INDEX_SAVED_ARTICLES_2', 'key', ['savedBy_docID'], ['asc']);
        // collection : SAVED_ARTICLES , attr : [createdAt] , order : [desc]
        const indx25 = this.databases.createIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'INDEX_SAVED_ARTICLES_3', 'key', ['createdAt'], ['desc']);
        // collection : SAVED_ARTICLES , attr : [savedBy_docID,createdAt] , order : [asc,desc]
        const indx26 = this.databases.createIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'INDEX_SAVED_ARTICLES_4', 'key', ['savedBy_docID', 'createdAt'], ['asc', 'desc']);
        // collection : SAVED_ARTICLES , attr : [article_docID] , order : [asc]
        const indx27 = this.databases.createIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'INDEX_SAVED_ARTICLES_5', 'key', ['article_docID'], ['asc']);
        // collection : SAVED_ARTICLES , attr : [savedBy_docID,article_docID] , order : [asc,asc]
        const indx28 = this.databases.createIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'INDEX_SAVED_ARTICLES_6', 'key', ['savedBy_docID', 'article_docID'], ['asc', 'asc']);

        // for the collection COMMENTS
        // collection: COMMENTS , attr: [article_docID] , order: [asc]
        const indx29 = this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, 'INDEX_COMMENTS_6', 'key', ['article_docID'], ['asc']);
        // collection: COMMENTS , attr: [parentComment_docID] , order: [asc]
        const indx30 = this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, 'INDEX_COMMENTS_5', 'key', ['parentComment_docID'], ['asc']);
        // collection: COMMENTS , attr: [createdAt] , order: [desc]
        const indx31 = this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, 'INDEX_COMMENTS_1', 'key', ['createdAt'], ['desc']);
        const indx32 = this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, 'INDEX_COMMENTS_2', 'key', ['article_docID', 'parentComment_docID'], ['asc', 'asc']);
        const indx33 = this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, 'INDEX_COMMENTS_3', 'key', ['article_docID', 'parentComment_docID', 'createdAt'], ['asc', 'asc', 'desc']);
        const indx34 = this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, 'INDEX_COMMENTS_4', 'key', ['parentComment_docID', 'createdAt'], ['asc', 'desc']);

        // for the collection USER_SOCIAL_LINKS
        // collection: USER_SOCIAL_LINKS, attr: [ user_docID ] , order: [asc]
        const indx35 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'USER_SOCIAL_LINKS_1', 'key', ['user_docID'], ['asc']);

        // for the collection USER_ACTIVITIES
        // collection: USER_ACTIVITIES, attr: [user_docID] , order: [asc]
        const indx36 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'INDEX_USER_ACTIVITIES_1', 'key', ['user_docID'], ['asc']);
        // collection: USER_ACTIVITIES, attr: [createdAt] , order: [desc]
        const indx37 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'INDEX_USER_ACTIVITIES_2', 'key', ['createdAt'], ['desc']);
        // collection: USER_ACTIVITIES, attr: [user_docID,createdAt] , order: [asc, desc]
        const indx38 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'INDEX_USER_ACTIVITIES_3', 'key', ['user_docID', 'createdAt'], ['asc', 'desc']);

        // for the collection USER_RELATIONSHIPS
        // collection: USER_RELATIONSHIPS, attr: [toUser_docID], order: [asc]
        const indx39 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'INDEX_USER_RELATIONSHIPS_1', 'key', ['toUser_docID'], ['asc']);
        // collection: USER_RELATIONSHIPS, attr: [fromTrend_boostPoint], order: [desc]
        const indx40 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'INDEX_USER_RELATIONSHIPS_2', 'key', ['fromTrend_boostPoint'], ['desc']);
        // collection: USER_RELATIONSHIPS, attr: [toUser_docID,fromTrend_boostPoint], order: [asc, desc]
        const indx41 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'INDEX_USER_RELATIONSHIPS_3', 'key', ['toUser_docID', 'fromTrend_boostPoint'], ['asc', 'desc']);
        // collection: USER_RELATIONSHIPS, attr: [fromUser_docID], order: [asc]
        const indx42 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'INDEX_USER_RELATIONSHIPS_4', 'key', ['fromUser_docID'], ['asc']);
        // collection: USER_RELATIONSHIPS, attr: [toTrend_boostPoint], order: [desc]
        const indx43 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'INDEX_USER_RELATIONSHIPS_5', 'key', ['toTrend_boostPoint'], ['desc']);
        // collection: USER_RELATIONSHIPS, attr: [fromUser_docID, toTrend_boostPoint], order: [asc, desc]
        const indx44 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'INDEX_USER_RELATIONSHIPS_6', 'key', ['fromUser_docID', 'toTrend_boostPoint'], ['asc', 'desc']);
        // collection: USER_RELATIONSHIPS, attr: [fromUser_docID,toUser_docID], order: [asc, asc]
        const indx45 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'INDEX_USER_RELATIONSHIPS_7', 'key', ['fromUser_docID', 'toUser_docID'], ['asc', 'asc']);

        // for the collection USER_NOTIFICATIONS
        // collection: USER_NOTIFICATIONS, attr: [user_docID] , order: [asc]
        const indx46 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'INDEX_USER_NOTIFICATIONS_1', 'key', ['user_docID'], ['asc']);
        const indx47 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'INDEX_USER_NOTIFICATIONS_2', 'key', ['createdAt'], ['desc']);
        const indx48 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'INDEX_USER_NOTIFICATIONS_3', 'key', ['user_docID', 'createdAt'], ['asc', 'desc']);
        const indx49 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'INDEX_USER_NOTIFICATIONS_4', 'key', ['topic'], ['asc']);
        const indx50 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'INDEX_USER_NOTIFICATIONS_5', 'key', ['user_docID', 'topic', 'createdAt'], ['asc', 'asc', 'desc']);
        const indx51 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'INDEX_USER_NOTIFICATIONS_6', 'key', ['user_docID', 'topic'], ['asc', 'asc']);

        // for the collection ARTICLE_READERS
        const indx52 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'INDEX_ARTICLE_READERS_1', 'key', ['article_docID'], ['asc']);
        const indx53 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'INDEX_ARTICLE_READERS_2', 'key', ['createdAt'], ['desc']);
        const indx54 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'INDEX_ARTICLE_READERS_3', 'key', ['article_docID', 'createdAt'], ['asc', 'desc']);

        // for the collection USER_RELATION_SUGGESTIONS
        const indx55 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'INDEX_USER_RELATION_SUGGESTIONS_1', 'key', ['for_docID'], ['asc']);
        const indx56 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'INDEX_USER_RELATION_SUGGESTIONS_2', 'key', ['isStale'], ['asc']);
        const indx57 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'INDEX_USER_RELATION_SUGGESTIONS_3', 'key', ['boostPoint'], ['desc']);
        const indx58 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'INDEX_USER_RELATION_SUGGESTIONS_4', 'key', ['for_docID', 'isStale', 'boostPoint'], ['asc', 'asc', 'desc']);
        const indx59 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'INDEX_USER_RELATION_SUGGESTIONS_5', 'key', ['user_docID'], ['asc']);
        const indx60 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'INDEX_USER_RELATION_SUGGESTIONS_6', 'key', ['for_docID', 'user_docID'], ['asc', 'asc']);
        const indx61 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'INDEX_USER_RELATION_SUGGESTIONS_7', 'key', ['for_docID', 'isStale'], ['asc', 'asc']);

        // for the collection USER_ARTICLE_SUGGESTIONS
        const indx62 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'INDEX_USER_ARTICLE_SUGGESTIONS_1', 'key', ['for_docID'], ['asc']);
        const indx63 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'INDEX_USER_ARTICLE_SUGGESTIONS_2', 'key', ['isStale'], ['asc']);
        const indx64 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'INDEX_USER_ARTICLE_SUGGESTIONS_3', 'key', ['boostPoint'], ['desc']);
        const indx65 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'INDEX_USER_ARTICLE_SUGGESTIONS_4', 'key', ['for_docID', 'isStale', 'boostPoint'], ['asc', 'asc', 'desc']);
        const indx66 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'INDEX_USER_ARTICLE_SUGGESTIONS_5', 'key', ['article_docID'], ['asc']);
        const indx67 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'INDEX_USER_ARTICLE_SUGGESTIONS_6', 'key', ['for_docID', 'article_docID'], ['asc', 'asc']);
        const indx68 = this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'INDEX_USER_ARTICLE_SUGGESTIONS_7', 'key', ['for_docID', 'isStale'], ['asc', 'asc']);

        // for the collection ARTICLE_STORIES
        const indx69 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'INDEX_ARTICLE_STORIES_1', 'key', ['user_docID'], ['asc']);
        const indx70 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'INDEX_ARTICLE_STORIES_2', 'key', ['expireAt'], ['asc']);
        const indx71 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'INDEX_ARTICLE_STORIES_3', 'key', ['expireAt'], ['desc']);
        const indx72 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'INDEX_ARTICLE_STORIES_4', 'key', ['createdAt'], ['asc']);
        const indx73 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'INDEX_ARTICLE_STORIES_5', 'key', ['user_docID', 'expireAt', 'createdAt'], ['asc', 'asc', 'asc']);
        const indx74 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'INDEX_ARTICLE_STORIES_6', 'key', ['user_docID', 'expireAt', 'createdAt'], ['asc', 'desc', 'asc']);

        // for the collection ARTICLE_STORIES_DISTRIBUTION
        const indx75 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_1', 'key', ['for_docID'], ['asc']);
        const indx76 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_2', 'key', ['expireAt'], ['asc']);
        const indx77 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_3', 'key', ['expireAt'], ['desc']);
        const indx78 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_4', 'key', ['boostPoint'], ['desc']);
        const indx79 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_5', 'key', ['for_docID', 'expireAt', 'boostPoint'], ['asc', 'asc', 'desc']);
        const indx80 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_6', 'key', ['for_docID', 'expireAt', 'boostPoint'], ['asc', 'desc', 'desc']);
        const indx81 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_7', 'key', ['story_docID'], ['asc']);
        const indx82 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_8', 'key', ['isSeen'], ['asc']);
        const indx83 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_9', 'key', ['story_docID', 'isSeen', 'boostPoint'], ['asc', 'asc', 'desc']);
        const indx84 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_10', 'key', ['for_docID', 'expireAt'], ['asc', 'asc']);
        const indx85 = this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'INDEX_ARTICLE_STORIES_DISTRIBUTION_11', 'key', ['for_docID', 'expireAt'], ['asc', 'desc']);

        await Promise.allSettled([
            indx1,
            indx2,
            indx3,
            indx4,
            indx5,
            indx6,
            indx7,
            indx8,
            indx9,
            indx10,
            indx11,
            indx12,
            indx13,
            indx14,
            indx15,
            indx16,
            indx17,
            indx18,
            indx19,
            indx20,
            indx21,
            indx22,
            indx23,
            indx24,
            indx25,
            indx26,
            indx27,
            indx28,
            indx29,
            indx30,
            indx31,
            indx32,
            indx33,
            indx34,
            indx35,
            indx36,
            indx37,
            indx38,
            indx39,
            indx40,
            indx41,
            indx42,
            indx43,
            indx44,
            indx45,
            indx46,
        ]);
        await Promise.allSettled([indx47, indx48, indx49, indx50, indx51, indx52, indx53, indx54, indx55, indx56, indx57, indx58, indx59, indx60, indx61, indx62, indx63, indx64, indx65, indx66, indx67, indx68, indx69, indx70, indx71, indx72, indx73, indx74, indx75, indx76, indx77, indx78, indx79, indx80, indx81, indx82, indx83, indx84, indx85]);
    }

    private async isDatabaseEXIT() {
        try {
            const oldDB = await this.databases.get(this.databaseID);
            return true;
        } catch (error) {
            return false;
        }
    }

    public async createInitialTopics() {
        const topics = ['Programming languages', 'Web development', 'Mobile app development', 'Artificial intelligence', 'Machine learning', 'Data analysis', 'Big data', 'Cloud computing', 'DevOps', 'Internet of Things (IoT)', 'Cybersecurity', 'Blockchain', 'Virtual and augmented reality', 'Robotics', '3D printing'];
        const topicsToAdd = topics.map(async (t) => {
            const topicD: MTopic.ITopic = {
                id: this.client.uniqueID(),
                doc: {
                    associatedUsersCount: 0,
                    color: ' ',
                    createdAt: new Date(),
                    description: ' ',
                    logo: ' ',
                    monthlyTrend: { boostPoint: 0, numberOfArticles: 0, resetDate: new Date() },
                    name: t,
                    updatedAt: new Date(),
                    weeklyTrend: { boostPoint: 0, numberOfArticles: 0, resetDate: new Date() },
                },
            };

            await this.databases.createDocument(this.databaseID, AppwriteCollection.TOPICS, topicD.id, serializeAppwriteData(topicD.doc), [Permission.read(Role.any())]);
        });

        await Promise.allSettled(topicsToAdd);
    }

    public async setup() {
        // do database exit
        const IS_DB_EXIT = await this.isDatabaseEXIT();
        if (IS_DB_EXIT) return;
        await this.createDatabase();
        await this.createCollections();
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await this.createAllCollections();
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await this.createIndex();
        await this.createInitialTopics();
    }
}
