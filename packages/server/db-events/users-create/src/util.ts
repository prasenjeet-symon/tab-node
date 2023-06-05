import { AppwriteCollection, AppwriteNodeJsClient, MUser, MUserActivity, MUserNotification, serializeAppwriteData } from '@tabnode/utils';
import { Permission, Role } from 'node-appwrite';
import { v4 } from 'uuid';

/** Create a new notification for the user in app */
export async function createWelcomeNotification(user: MUser.IUser) {
  if (!user) return;

  const client = new AppwriteNodeJsClient();
  const database = client.database();
  const databaseID = client.databaseID();

  const notification: MUserNotification.IUserNotification = {
    id: v4(),
    doc: {
      createdAt: new Date(),
      updatedAt: new Date(),
      isRead: false,
      link: '/',
      title: 'Welcome to Tabnode',
      notification: `<span tabNodeHighlight>Hi ${user.doc.fullName} </span>, Welcome to TabNode! Join us to empower human thoughts in the age of AI. Explore, connect, and share your unique perspective. Let's shape the future together! <span tabNodeHighlight>#TabNode</span>`,
      topic: 'GENERAL',
      user: {
        docID: user.id,
        aboutMe: user.doc.aboutMe,
        fullName: user.doc.fullName,
        profilePic: user.doc.profilePic,
      },
      originator: {
        aboutMe: '',
        docID: '',
        fullName: 'tabnode',
        profilePic: '',
        type: 'TABNODE',
      },
    },
  };

  await database.createDocument(databaseID, AppwriteCollection.USER_NOTIFICATIONS, notification.id, serializeAppwriteData(notification.doc), [
    Permission.write(Role.user(notification.doc.user.docID)),
    Permission.update(Role.user(notification.doc.user.docID)),
    Permission.delete(Role.user(notification.doc.user.docID)),
    Permission.read(Role.user(notification.doc.user.docID)),
  ]);
}

/** Send the email to the user welcome msg */
export async function sendWelcomeEmail(user: MUser.IUser) {}

/** Add new activity for the author */
export async function addNewActivityForUser(user: MUser.IUser) {
  // database connection
  const client = new AppwriteNodeJsClient();
  const database = client.database();
  const databaseID = client.databaseID();

  const activity: MUserActivity.IUserActivity = {
    id: v4(),
    doc: {
      action: 'JOINED',
      article: {
        docID: '',
        title: '',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        aboutMe: user.doc.aboutMe,
        docID: user.id,
        fullName: user.doc.fullName,
        profilePic: user.doc.profilePic,
      },
    },
  };

  await database.createDocument(databaseID, AppwriteCollection.USER_ACTIVITIES, activity.id, serializeAppwriteData(activity.doc), [
    Permission.write(Role.user(activity.doc.user.docID)),
    Permission.delete(Role.user(activity.doc.user.docID)),
    Permission.update(Role.user(activity.doc.user.docID)),
    Permission.read(Role.any()),
  ]);
}
