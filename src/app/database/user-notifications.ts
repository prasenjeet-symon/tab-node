import { Databases } from "appwrite";

export class UserNotificationsCollection {
    constructor(private database: Databases, private databaseID: string){}

    /** Fetch n notifications for a user */
    public async userNotifications(){}
}