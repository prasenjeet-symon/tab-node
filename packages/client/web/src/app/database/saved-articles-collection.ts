import { AppwriteCollection, MSavedArticle, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';
import { UserCollection } from './user-collection';

export class SavedArticlesCollection {
    constructor(private database: Databases, private databaseID: string) {}

    /** Add new  article to the collection */
    public async saveArticle(article: MSavedArticle.ISavedArticle) {
        try {
            await this.database.createDocument(this.databaseID, AppwriteCollection.SAVED_ARTICLES, article.id, serializeAppwriteData(article.doc), [
                Permission.write(Role.user(article.doc.savedBy.docID)),
                Permission.delete(Role.user(article.doc.savedBy.docID)),
                Permission.read(Role.user(article.doc.savedBy.docID)), // saved collection is private
            ]);
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Remove from the saved collection */
    public async removeSavedArticle(article: MSavedArticle.ISavedArticle) {
        try {
            await this.database.deleteDocument(this.databaseID, AppwriteCollection.SAVED_ARTICLES, article.id);
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Fetch n saved articles at a time of user */
    public async fetchSavedArticles(userDocID: string, prevCursor: MSavedArticle.ISavedArticle | undefined, limit: number) {
        try {
            const snap = prevCursor
                ? await this.database.listDocuments(this.databaseID, AppwriteCollection.SAVED_ARTICLES, [Query.equal('savedBy_docID', userDocID), Query.orderDesc('createdAt'), Query.cursorAfter(prevCursor.id), Query.limit(+limit)])
                : await this.database.listDocuments(this.databaseID, AppwriteCollection.SAVED_ARTICLES, [Query.equal('savedBy_docID', userDocID), Query.orderDesc('createdAt'), Query.limit(+limit)]);

            return snap.documents.map((p) => {
                return deserializeAppwriteData(p);
            }) as MSavedArticle.ISavedArticle[];
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
            throw error;
        }
    }

    /** Fetch saved article given user and article */
    public async fetchSavedArticle(userDocID: string, articleDocID: string) {
        try {
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.SAVED_ARTICLES, [Query.equal('savedBy_docID', userDocID), Query.equal('article_docID', articleDocID)]);
            if (snap.documents.length > 0) return deserializeAppwriteData(snap.documents[0]) as MSavedArticle.ISavedArticle;
            return null;
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Is Saved by user logged in article */
    public async isSavedByUserArticle(articleDocID: string) {
        try {
            const currentUser = await new UserCollection(this.database, this.databaseID).fetchLoginUser();
            if (!currentUser) return;
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.SAVED_ARTICLES, [Query.equal('savedBy_docID', currentUser.id), Query.equal('article_docID', articleDocID)]);
            if (snap.documents.length > 0) return true;
            return false;
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }
}
