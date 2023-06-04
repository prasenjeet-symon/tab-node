import { Databases } from 'node-appwrite';
import { MArticleDistribution, MArticleRelationSuggestion, MTopic } from './database-types';
/** Convert the data to appwrite  */
export declare function serializeAppwriteData(data: Record<string, any>, keyStr?: string): Record<string, any>;
/** Deserialize the data from appwrite*/
export declare function deserializeAppwriteData(serializedData: Record<string, any>): Record<string, any>;
/** Generate the new unique avatar*/
export declare function generateAvatar(email: string): string;
/** Init the nodejs appwrite client */
export declare class AppwriteNodeJsClient {
    private client;
    private databaseInstance;
    constructor();
    database(): Databases;
    databaseID(): string;
}
/** Appwrite nodejs error reporting */
/** Central Appwrite Error Reporting */
export declare abstract class AppwriteErrorReporterNodeJs {
    static report(error: any): void;
    static isDocumentNotFound(error: any): boolean;
}
/** Get the different threshold for different phase boost point */
export declare function getThreshold(phase: number, users: number): {
    impressionCountPercent: number;
    boostPoint: number;
};
/** Get total number of users for the AB testing */
export declare function getUsersCountForArticleSuggestion(phase: number, totalUsers: number): number;
/** Get the phase users in percentage for the AB testing  */
export declare function getPhaseUsersPercentage(phase: number): 0 | MArticleDistribution.enum_articlePhase;
export declare function fetchFullTopic(topicID: string, database: Databases, databaseID: string): Promise<MTopic.ITopic | null>;
/** Fetch all users related to given topic */
export declare function fetchAllUserRelatedToTopic(phase: number, topic: MTopic.ITopic, lastUserID: string, sortType: MArticleDistribution.trackOrderType, database: Databases, databaseID: string): Promise<{
    topic: MTopic.ITopic;
    users: import("./database-types").MUser.SUser[];
    oldLastUserID: string;
}>;
/** Create new article suggestion if possible  */
export declare function createArticleRelationSuggestion(aRSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion, database: Databases, databaseID: string): Promise<void>;
//# sourceMappingURL=utils.d.ts.map