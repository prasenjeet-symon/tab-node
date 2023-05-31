import { Databases, Query } from 'appwrite';
import { AppwriteCollection, MArticleRelationSuggestion } from '../database-type';
import { AppwriteErrorReporter, deserializeAppwriteData } from '../utils';
// This is not editable by the user
/** This is like the personalized feed of the logged in user  */
export class UserArticleSuggestionsCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Fetch n suggested posts at a time of logged in user with pagination */
  public async fetchSuggestedArticles(userDocID: string, prevCursor: MArticleRelationSuggestion.IArticleRelationSuggestion | undefined, limit: number) {
    try {
      const snap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, [
            Query.equal('for_docID', userDocID),
            Query.orderDesc('boostPoint'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, [
            Query.equal('for_docID', userDocID),
            Query.orderDesc('boostPoint'),
            Query.limit(+limit),
          ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p) as MArticleRelationSuggestion.IArticleRelationSuggestion;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
