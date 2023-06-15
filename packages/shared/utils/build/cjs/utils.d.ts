import { MArticleDistribution } from './database-types';
/** Convert the data to appwrite  */
export declare function serializeAppwriteData(data: Record<string, any>, keyStr?: string): Record<string, any>;
/** Deserialize the data from appwrite*/
export declare function deserializeAppwriteData(serializedData: Record<string, any>): Record<string, any>;
/** Generate the new unique avatar*/
export declare function generateAvatar(email: string): string;
/** Appwrite nodejs error reporting */
/** Central Appwrite Error Reporting */
/** Get the different threshold for different phase boost point */
export declare function getThreshold(phase: number, users: number): {
    impressionCountPercent: number;
    boostPoint: number;
};
/** Get total number of users for the AB testing */
export declare function getUsersCountForArticleSuggestion(phase: number, totalUsers: number): number;
/** Get the phase users in percentage for the AB testing  */
export declare function getPhaseUsersPercentage(phase: number): 0 | MArticleDistribution.enum_articlePhase;
export declare function isValidDateString(dateString: string): boolean;
export declare function getHumanReadableDate(date: Date): string;
export declare function calculateReadingTime(content: string, wordsPerMinute?: number): number;
//# sourceMappingURL=utils.d.ts.map