import { AppwriteCollection, MUserSocialLink, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';

export class UserSocialLinksCollection {
    constructor(private database: Databases, private databaseID: string) {}

    /** Add new link for the user */
    public async addLink(sLink: MUserSocialLink.IUserSocialLink) {
        try {
            await this.database.createDocument(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, sLink.id, serializeAppwriteData(sLink.doc), [
                Permission.write(Role.user(sLink.doc.user.docID)),
                Permission.delete(Role.user(sLink.doc.user.docID)),
                Permission.update(Role.user(sLink.doc.user.docID)),
                Permission.read(Role.any()),
            ]);
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Update the link */
    public async updateLink(sLink: MUserSocialLink.IUserSocialLink) {
        try {
            await this.database.updateDocument(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, sLink.id, serializeAppwriteData(sLink.doc));
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Fetch all the social link of the public user */
    public async fetchAllLinks(userDocID: string) {
        try {
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, [Query.equal('user_docID', userDocID)]);

            return snap.documents.map((p) => {
                return deserializeAppwriteData(p) as MUserSocialLink.IUserSocialLink;
            });
        } catch (error) {
            AppwriteErrorReporter.report(error);
            return [];
        }
    }
}
