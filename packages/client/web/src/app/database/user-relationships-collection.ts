/**
 * ( fromUser)  --------> ( toUser ) <----------- ( fromUser )
 * ( Only FromUser can init connection )
 * ( fromUser and toUser can destroy  connection )
 *
 * How to get the followers of a user?
 *  1. Fetch all the docs where toUser is that user.
 *  2. Extract the fromUser from each doc. These are your followers.
 *  3. How to get the strongest followers ?
 *     1. At the time of fetching sort the docs by fromTrend DESC.
 *  4. How to get the weakest followers ?
 *     1. At the time of fetching sort the docs by fromTrend ASC.
 *
 * How to get the followings of a user?
 *   1. Fetch all the docs where fromUser is that user.
 *   2. Extract the toUser from each doc. These are your followings.
 *   3. How to get the strongest followings ?
 *      1. At the time of fetching sort the docs by toTrend DESC.
 *   4. How to get the weakest followings ?
 *      1. At the time of fetching sort the docs by toTrend ASC.
 *
 */
import { AppwriteCollection, MUserRelationship, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';

export class UserRelationshipsCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Follow user */
  public async follow(userRelation: MUserRelationship.IUserRelationship) {
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, userRelation.id, serializeAppwriteData(userRelation.doc), [
        Permission.write(Role.user(userRelation.doc.fromUser.docID)),
        Permission.delete(Role.user(userRelation.doc.fromUser.docID)),
        Permission.delete(Role.user(userRelation.doc.toUser.docID)),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Un-follow user  */
  public async unfollow(userRelation: MUserRelationship.IUserRelationship) {
    try {
      await this.database.deleteDocument(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, userRelation.id);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch all the followers of given user */
  public async fetchFollowers(userID: string, prevCursor: MUserRelationship.IUserRelationship | undefined, limit: number): Promise<MUserRelationship.IUserRelationship[]> {
    try {
      const snap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, [
            Query.equal('toUser_docID', userID),
            Query.orderDesc('fromTrend_boostPoint'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, [
            Query.equal('toUser_docID', userID),
            Query.orderDesc('fromTrend_boostPoint'),
            Query.limit(+limit),
          ]);

      return snap.documents.map((doc) => {
        return deserializeAppwriteData(doc) as MUserRelationship.IUserRelationship;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }

  /** Fetch followings of given user  */
  public async fetchFollowings(userDocID: string, prevCursor: MUserRelationship.IUserRelationship | undefined, limit: number): Promise<MUserRelationship.IUserRelationship[]> {
    try {
      const snap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, [
            Query.equal('fromUser_docID', userDocID),
            Query.orderDesc('toTrend_boostPoint'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, [
            Query.equal('fromUser_docID', userDocID),
            Query.orderDesc('toTrend_boostPoint'),
            Query.limit(+limit),
          ]);

      return snap.documents.map((doc) => {
        return deserializeAppwriteData(doc) as MUserRelationship.IUserRelationship;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
