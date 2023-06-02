import { Databases } from "node-appwrite";
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
//# sourceMappingURL=utils.d.ts.map