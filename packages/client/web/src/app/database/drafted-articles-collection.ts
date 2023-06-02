import { AppwriteCollection, MDraftedArticle, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Role } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';

export class DraftedArticlesCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Create new draft article */
  public async createDraftArticle(dArticle: MDraftedArticle.IDraftedArticle) {
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, dArticle.id, serializeAppwriteData(dArticle.doc), [
        Permission.write(Role.user(dArticle.doc.article.writer.docID)),
        Permission.delete(Role.user(dArticle.doc.article.writer.docID)),
        Permission.update(Role.user(dArticle.doc.article.writer.docID)),
        Permission.read(Role.user(dArticle.doc.article.writer.docID)),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Update the drafted article */
  public async updateDraftArticle(dArticle: MDraftedArticle.IDraftedArticle) {
    try {
      await this.database.updateDocument(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, dArticle.id, serializeAppwriteData(dArticle.doc));
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Delete the drafted article */
  public async deleteDraftArticle(dArticle: MDraftedArticle.IDraftedArticle) {
    try {
      await this.database.deleteDocument(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, dArticle.id);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch drafted article by ID  */
  public async getDraftArticleByID(dArticleID: string) {
    try {
      await this.database.getDocument(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, dArticleID);
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }

  /** Fetch all the drafted articles all at once */
  public async getAllDraftArticles() {
    try {
      const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES);
      return snap.documents.map((p) => {
        return deserializeAppwriteData(p) as MDraftedArticle.IDraftedArticle;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
