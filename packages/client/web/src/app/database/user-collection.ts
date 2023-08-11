import { AppwriteCollection, MUser, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Role } from 'appwrite';
import Appwrite from '../appwrite';
import { AppwriteErrorReporter } from '../utils';

/** Singleton class to handle user collection cache */
export class UserCollectionSingleton {
    private static instance: UserCollection;
    private database: Databases;
    private databaseID: string;
    private user: MUser.IUser | null | undefined = null;

    private constructor(database: Databases, databaseID: string) {
        this.database = database;
        this.databaseID = databaseID;
    }

    public async fetchLoginUser() {
        if (!this.user) {
            this.user = await new UserCollection(this.database, this.databaseID).fetchLoginUser();
        }

        return this.user;
    }

    public static getInstance(database: Databases, databaseID: string) {
        if (!UserCollectionSingleton.instance) {
            UserCollectionSingleton.instance = new UserCollection(database, databaseID);
        }
        return UserCollectionSingleton.instance;
    }
}

export class UserCollection {
    constructor(private database: Databases, private databaseID: string) {}

    /** Create a user */
    public async createUser(user: MUser.IUser) {
        // if the user is already created just return
        const oldUser = await this.fetchLoginUser();
        if (oldUser) return;

        try {
            await this.database.createDocument(this.databaseID, AppwriteCollection.USERS, user.id, serializeAppwriteData(user.doc), [Permission.write(Role.user(user.id)), Permission.delete(Role.user(user.id)), Permission.update(Role.user(user.id)), Permission.read(Role.any())]);
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Update the user */
    public async updateUser(user: MUser.IUser) {
        try {
            await this.database.updateDocument(this.databaseID, AppwriteCollection.USERS, user.id, serializeAppwriteData(user.doc));
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Fetch the current user */
    public async fetchLoginUser() {
        try {
            const userId = await Appwrite.currentUserID(); // same as document id
            const user = await this.database.getDocument(this.databaseID, AppwriteCollection.USERS, userId);
            return deserializeAppwriteData(user) as MUser.IUser;
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) {
                return null;
            }
        }
    }

    /** Fetch public user */
    public async fetchPublicUser(userId: string) {
        try {
            const user = await this.database.getDocument(this.databaseID, AppwriteCollection.USERS, userId);
            return deserializeAppwriteData(user) as MUser.IUser;
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) {
                return null;
            }
        }
    }
}
