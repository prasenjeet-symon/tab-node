import { AppwriteCollection, MArticleLike, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import Appwrite from '../appwrite';
import { AppwriteErrorReporter } from '../utils';

export class LikesCollection {
    constructor(private database: Databases, private databaseID: string) {}

    /** Add new like/dislike to a article */
    public async addLikeOrDislike(like: MArticleLike.IArticleLike): Promise<void> {
        try {
            await this.database.createDocument(this.databaseID, AppwriteCollection.LIKES, like.id, serializeAppwriteData(like.doc), [Permission.write(Role.user(like.doc.likedBy.docID)), Permission.delete(Role.user(like.doc.likedBy.docID)), Permission.update(Role.user(like.doc.likedBy.docID))]);
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Update the like/dislike of a article  */
    public async updateLikeOrDislike(like: MArticleLike.IArticleLike): Promise<void> {
        try {
            await this.database.updateDocument(this.databaseID, AppwriteCollection.LIKES, like.id, serializeAppwriteData(like.doc));
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Delete the like/dislike of a article   */
    public async deleteLikeOrDislike(like: MArticleLike.IArticleLike): Promise<void> {
        try {
            await this.database.deleteDocument(this.databaseID, AppwriteCollection.LIKES, like.id);
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Fetch n likes of a article  at a time  */
    public async fetchLikes(type: MArticleLike.likesStatus, articleDocID: string, prevCursor: MArticleLike.IArticleLike | undefined, limit: number): Promise<MArticleLike.IArticleLike[]> {
        try {
            const snap = prevCursor
                ? await this.database.listDocuments(this.databaseID, AppwriteCollection.LIKES, [Query.equal('article_docID', articleDocID), Query.equal('status', type), Query.orderDesc('createdAt'), Query.cursorAfter(prevCursor.id), Query.limit(+limit)])
                : await this.database.listDocuments(this.databaseID, AppwriteCollection.LIKES, [Query.equal('article_docID', articleDocID), Query.equal('status', type), Query.orderDesc('createdAt'), Query.limit(+limit)]);

            return snap.documents.map((p) => {
                return deserializeAppwriteData(p);
            }) as MArticleLike.IArticleLike[];
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
            throw error;
        }
    }

    /** Is liked by the current logged in user */
    public async isLikedByUserLoggedIn(articleDocID: string) {
        try {
            const currentUser = await Appwrite.currentUser();
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.LIKES, [Query.equal('article_docID', articleDocID), Query.equal('likedBy_docID', currentUser.$id)]);
            if (snap.documents.length > 0) return true;
            return false;
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Fetch number of likes of given article */
    public async fetchNumberOfLikes(articleDocID: string, status: MArticleLike.likesStatus): Promise<number> {
        try {
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.LIKES, [Query.equal('article_docID', articleDocID), Query.equal('status', status)]);
            return snap.documents.length;
        } catch (error) {
            AppwriteErrorReporter.report(error);
            return 0;
        }
    }
}
