import { AppwriteCollection, MDraftedArticle, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';
import { UserCollection } from './user-collection';

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
            const draftedArticle = await this.database.getDocument(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, dArticleID);
            return deserializeAppwriteData(draftedArticle) as MDraftedArticle.IDraftedArticle;
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return null;
            return null;
        }
    }

    /** Fetch all the drafted articles all at once */
    public async getAllDraftArticles() {
        try {
            const user = await new UserCollection(this.database, this.databaseID).fetchLoginUser();
            if (!user) return;
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, [Query.equal('article_writer_docID', user.id)]);
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
