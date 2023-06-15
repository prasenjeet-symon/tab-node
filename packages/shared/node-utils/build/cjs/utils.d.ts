import { AWFunction, MArticleDistribution, MArticleRelationSuggestion, MTopic } from '@tabnode/utils';
import { Databases } from 'node-appwrite';
/** Init the nodejs appwrite client */
export declare class AppwriteNodeJsClient {
    private client;
    private databaseInstance;
    private req;
    constructor(req: AWFunction.Req);
    database(): Databases;
    databaseID(): string;
    uniqueID(): any;
}
export declare abstract class AppwriteErrorReporterNodeJs {
    static report(error: any): void;
    static isDocumentNotFound(error: any): boolean;
}
export declare function fetchFullTopic(topicID: string, database: Databases, databaseID: string): Promise<MTopic.ITopic | null>;
/** Fetch all users related to given topic */
export declare function fetchAllUserRelatedToTopic(phase: number, topic: MTopic.ITopic, lastUserID: string, sortType: MArticleDistribution.trackOrderType, database: Databases, databaseID: string): Promise<{
    topic: MTopic.ITopic;
    users: import("@tabnode/utils").MUser.SUser[];
    oldLastUserID: string;
}>;
/** Create new article suggestion if possible  */
export declare function createArticleRelationSuggestion(aRSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion, database: Databases, databaseID: string): Promise<void>;
//# sourceMappingURL=utils.d.ts.map