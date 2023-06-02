import { AppwriteCollection, MArticleComment, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';

export class CommentsCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Add new comment by any user */
  public async addNewComment(comment: MArticleComment.IArticleComment) {
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.COMMENTS, comment.id, serializeAppwriteData(comment.doc), [
        Permission.write(Role.user(comment.doc.writer.docID)),
        Permission.delete(Role.user(comment.doc.writer.docID)),
        Permission.update(Role.user(comment.doc.writer.docID)),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Update the comment by the writer */
  public async updateComment(comment: MArticleComment.IArticleComment) {
    try {
      await this.database.updateDocument(this.databaseID, AppwriteCollection.COMMENTS, comment.id, serializeAppwriteData(comment.doc));
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Delete the comment by the writer  */
  public async deleteComment(comment: MArticleComment.IArticleComment) {
    try {
      await this.database.deleteDocument(this.databaseID, AppwriteCollection.COMMENTS, comment.id);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch n comments at a time for the given article */
  public async fetchComments(articleDocID: string, prevCursor: MArticleComment.IArticleComment | undefined, limit: number) {
    try {
      const snap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.COMMENTS, [
            Query.equal('article_docID', articleDocID),
            Query.equal('parentComment_docID', ''),
            Query.orderDesc('createdAt'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.COMMENTS, [
            Query.equal('article_docID', articleDocID),
            Query.equal('parentComment_docID', ''),
            Query.orderDesc('createdAt'),
            Query.limit(+limit),
          ]);

      return snap.documents.map((doc) => {
        return deserializeAppwriteData(doc);
      }) as MArticleComment.IArticleComment[];
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch article child comments given parent comment id  */
  public async fetchChildComments(parentCommentDocID: string, prevCursor: MArticleComment.IArticleComment | undefined, limit: number) {
    try {
      const snap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.COMMENTS, [
            Query.equal('parentComment_docID', parentCommentDocID),
            Query.orderDesc('createdAt'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.COMMENTS, [
            Query.equal('parentComment_docID', parentCommentDocID),
            Query.orderDesc('createdAt'),
            Query.limit(+limit),
          ]);

      return snap.documents.map((doc) => {
        return deserializeAppwriteData(doc);
      }) as MArticleComment.IArticleComment[];
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }
}
