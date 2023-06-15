import { AppwriteNodeJsClient } from '@tabnode/node-utils';
import { AWFunction, AppwriteCollection, MUser, MUserActivity, MUserNotification, MUserSocialLink, serializeAppwriteData } from '@tabnode/utils';
import { Permission, Role } from 'node-appwrite';
/** Create a new notification for the user in app */
export async function createWelcomeNotification(req: AWFunction.Req, user: MUser.IUser) {
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const notification: MUserNotification.IUserNotification = {
        id: client.uniqueID(),
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
                docID: 'null',
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
export async function addNewActivityForUser(req: AWFunction.Req, user: MUser.IUser) {
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const activity: MUserActivity.IUserActivity = {
        id: client.uniqueID(),
        doc: {
            action: 'JOINED',
            article: {
                docID: 'null',
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

/** Create initial social links */
export async function createSocialLinks(req: AWFunction.Req, user: MUser.IUser) {
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    const socialLinks: MUserSocialLink.IUserSocialLink[] = [];
    socialLinks.push({
        id: client.uniqueID(),
        doc: {
            createdAt: new Date(),
            updatedAt: new Date(),
            socialLink: '',
            type: 'GITHUB',
            user: {
                aboutMe: user.doc.aboutMe,
                docID: user.id,
                fullName: user.doc.fullName,
                profilePic: user.doc.profilePic,
            },
        },
    });

    socialLinks.push({
        id: client.uniqueID(),
        doc: {
            createdAt: new Date(),
            updatedAt: new Date(),
            socialLink: '',
            type: 'INSTAGRAM',
            user: {
                aboutMe: user.doc.aboutMe,
                docID: user.id,
                fullName: user.doc.fullName,
                profilePic: user.doc.profilePic,
            },
        },
    });

    socialLinks.push({
        id: client.uniqueID(),
        doc: {
            createdAt: new Date(),
            updatedAt: new Date(),
            socialLink: '',
            type: 'TWITTER',
            user: {
                aboutMe: user.doc.aboutMe,
                docID: user.id,
                fullName: user.doc.fullName,
                profilePic: user.doc.profilePic,
            },
        },
    });

    socialLinks.push({
        id: client.uniqueID(),
        doc: {
            createdAt: new Date(),
            updatedAt: new Date(),
            socialLink: '',
            type: 'LINKEDIN',
            user: {
                aboutMe: user.doc.aboutMe,
                docID: user.id,
                fullName: user.doc.fullName,
                profilePic: user.doc.profilePic,
            },
        },
    });

    await Promise.all(
        socialLinks.map((p) => {
            return database.createDocument(databaseID, AppwriteCollection.USER_SOCIAL_LINKS, p.id, serializeAppwriteData(p.doc), [
                Permission.write(Role.user(p.doc.user.docID)),
                Permission.update(Role.user(p.doc.user.docID)),
                Permission.delete(Role.user(p.doc.user.docID)),
                Permission.read(Role.any()),
            ]);
        })
    );
}
