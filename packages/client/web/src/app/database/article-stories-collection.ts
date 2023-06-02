import { AppwriteCollection, MArticleStory, deserializeAppwriteData } from '@tabnode/utils';
import { Databases, Query } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';

export class ArticleStoriesCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Fetch single story given doc id */
  public async fetchSingleStory(docId: string): Promise<MArticleStory.IArticleStory | null> {
    try {
      const snap = await this.database.getDocument(this.databaseID, AppwriteCollection.ARTICLE_STORIES, docId);
      return deserializeAppwriteData(snap) as MArticleStory.IArticleStory;
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return null;
      throw error;
    }
  }

  /** Fetch posted stories by logged in user */
  public async fetchPostedStories(userDocID: string): Promise<MArticleStory.IArticleStory[]> {
    try {
      const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLE_STORIES, [
        Query.equal('user_docID', userDocID),
        Query.lessThanEqual('expireAt', new Date().toISOString()),
        Query.orderAsc('createdAt'),
      ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p) as MArticleStory.IArticleStory;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      throw error;
    }
  }
}
