import { Databases, Query } from 'appwrite';
import { AppwriteCollection, MUserActivity } from '../database-type';
import { AppwriteErrorReporter, deserializeAppwriteData } from '../utils';

export class UserActivitiesCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Fetch user activities */
  public async fetchUserActivities(userDocID: string, prevCursor: MUserActivity.IUserActivity | undefined, limit: number): Promise<MUserActivity.IUserActivity[]> {
    try {
      const snap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_ACTIVITIES, [
            Query.equal('user_docID', userDocID),
            Query.orderDesc('createdAt'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_ACTIVITIES, [
            Query.equal('user_docID', userDocID),
            Query.orderDesc('createdAt'),
            Query.limit(+limit),
          ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p) as MUserActivity.IUserActivity;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
