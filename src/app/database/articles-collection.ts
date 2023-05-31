import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteCollection, MArticle } from '../database-type';
import { AppwriteErrorReporter, deserializeAppwriteData, serializeAppwriteData } from '../utils';

export class ArticlesCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Add new article in publish mode */
  public async addArticleInPublishMode(article: MArticle.IArticle): Promise<void> {
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.ARTICLES, article.id, serializeAppwriteData(article.doc), [
        Permission.read(Role.any()),
        Permission.write(Role.user(article.doc.writer.docID)),
        Permission.delete(Role.user(article.doc.writer.docID)),
        Permission.update(Role.user(article.doc.writer.docID)),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Update the article in publish mode  */
  public async updateArticleInPublishMode(article: MArticle.IArticle): Promise<void> {
    try {
      await this.database.updateDocument(this.databaseID, AppwriteCollection.ARTICLES, article.id, serializeAppwriteData(article.doc));
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Delete the published article   */
  public async deleteArticleInPublishMode(article: MArticle.IArticle): Promise<void> {
    try {
      await this.database.deleteDocument(this.databaseID, AppwriteCollection.ARTICLES, article.id);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Get the published article by document id */
  public async getArticleInPublishMode(articleID: string): Promise<MArticle.IArticle | null> {
    try {
      const articleSnap = await this.database.getDocument(this.databaseID, AppwriteCollection.ARTICLES, articleID);
      return deserializeAppwriteData(articleSnap) as MArticle.IArticle;
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return null;
      throw error;
    }
  }

  /** Get n published articles at a time of given user */
  public async getWrittenArticlesInPublishedMode(userDocID: string, prevCursor: MArticle.IArticle | undefined, limit: number): Promise<MArticle.IArticle[]> {
    try {
      const articlesSnap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLES, [
            Query.equal('writer_docID', userDocID),
            Query.orderDesc('createdAt'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLES, [
            Query.equal('writer_docID', userDocID),
            Query.orderDesc('createdAt'),
            Query.limit(+limit),
          ]);

      return articlesSnap.documents.map((articleSnap) => deserializeAppwriteData(articleSnap) as MArticle.IArticle);
    } catch (error) {
      AppwriteErrorReporter.report(error);
      throw error;
    }
  }
}
