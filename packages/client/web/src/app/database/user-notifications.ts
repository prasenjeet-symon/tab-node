import { AppwriteCollection, MUserNotification, deserializeAppwriteData } from '@tabnode/utils';
import { Databases, Query } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';

export class UserNotificationsCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Fetch n notifications for a user */
  public async userNotifications(userDocID: string, prevCursor: MUserNotification.IUserNotification | undefined, limit: number) {
    try {
      const snap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, [
            Query.equal('user_docID', userDocID),
            Query.orderDesc('createdAt'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, [
            Query.equal('user_docID', userDocID),
            Query.orderDesc('createdAt'),
            Query.limit(+limit),
          ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p) as MUserNotification.IUserNotification;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }

  /** Mark notification as read after click */
  public async markNotificationRead(notificationID: string) {
    try {
      await this.database.updateDocument(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, notificationID, {
        isRead: true,
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch user notification by topic n at a time */
  public async userNotificationByTopic(userDocID: string, topic: MUserNotification.notificationTopic, prevCursor: MUserNotification.IUserNotification | undefined, limit: number) {
    try {
      const snap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, [
            Query.equal('user_docID', userDocID),
            Query.equal('topic', topic),
            Query.orderDesc('createdAt'),
            Query.cursorAfter(prevCursor.id),
            Query.limit(+limit),
          ])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, [
            Query.equal('user_docID', userDocID),
            Query.equal('topic', topic),
            Query.orderDesc('createdAt'),
            Query.limit(+limit),
          ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p) as MUserNotification.IUserNotification;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
