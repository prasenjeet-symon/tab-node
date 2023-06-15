import { AppwriteCollection, MUserRelationSuggestion, deserializeAppwriteData } from '@tabnode/utils';
import { Databases, Query } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';
// Only READ is allowed for this collection for the client side

/** This collection is used to suggest logged in user to suggest followers to follow */
export class UserRelationSuggestionCollection {
    constructor(private database: Databases, private databaseID: string) {}

    /** Fetch top n followers to follow  */
    public async fetchFollowersToFollow(userDocID: string, n: number): Promise<MUserRelationSuggestion.IUserRelationSuggestion[]> {
        try {
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, [Query.equal('for_docID', userDocID), Query.equal('isStale', false), Query.orderDesc('boostPoint'), Query.limit(+n)]);

            return snap.documents.map((doc) => deserializeAppwriteData(doc) as MUserRelationSuggestion.IUserRelationSuggestion);
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
            throw error;
        }
    }

    /** Fetch single follower suggestion  */
    public async fetchFollowerSuggestionSingle(forUserDocID: string, userDocID: string): Promise<MUserRelationSuggestion.IUserRelationSuggestion | null> {
        try {
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, [Query.equal('for_docID', forUserDocID), Query.equal('user_docID', userDocID)]);

            if (snap.documents.length === 0) return null;

            return deserializeAppwriteData(snap.documents[0]) as MUserRelationSuggestion.IUserRelationSuggestion;
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return null;
            throw error;
        }
    }

    /** Mark suggestion as stale */
    public async updateFollowerSuggestionToStale(forUserDocID: string, userDocID: string) {
        try {
            const suggestedFollower = await this.fetchFollowerSuggestionSingle(forUserDocID, userDocID);
            if (!suggestedFollower) return;
            await this.database.updateDocument(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, suggestedFollower.id, {
                isStale: true,
            });
        } catch (error) {
            AppwriteErrorReporter.report(error);
            throw error;
        }
    }

    /** Update the view count of suggestion  */
    public async updateFollowerSuggestionViewCount(suggestedFollower: MUserRelationSuggestion.IUserRelationSuggestion) {
        try {
            await this.database.updateDocument(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, suggestedFollower.id, {
                boostPoint: suggestedFollower.doc.boostPoint - 1,
                viewCount: suggestedFollower.doc.impressionCount + 1,
            });
        } catch (error) {
            AppwriteErrorReporter.report(error);
            throw error;
        }
    }
}
