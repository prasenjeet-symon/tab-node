'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser, MUserNotification } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import Mention from '../components/Mention/Mention';
import styles from './Mentions.module.css';
import NotFound from '../../components/NotFound/NotFound';

export default function MentionsNotificationPage() {
    let currentUser: MUser.IUser;
    const [notifications, setNotifications] = useState<MUserNotification.IUserNotification[]>([]);
    const [prevCourser, setPrevCourse] = useState<MUserNotification.IUserNotification | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const LIMIT = 10;

    const fetchNotifications = async () => {
        const database = new AppwriteDatabase();
        const notifications = await database.fetchUserNotificationByTopic(currentUser.id, 'MENTION', prevCourser, LIMIT);
        setNotifications(
            produce((draft) => {
                draft.push(...notifications);
            })
        );

        setPrevCourse(notifications[notifications.length - 1]);
    };

    const fetchUser = async () => {
        const database = new AppwriteDatabase();
        const user = await database.fetchLoginUser();
        if (!user) return;
        currentUser = user;
    };

    useEffect(() => {
        fetchUser().then(() => fetchNotifications());
    }, []);

    return (
        <section className={styles.mentions}>
            <div>{notifications.length === 0 ? null : 'Mentions Notifications'} </div>
            <div>
                {notifications.map((notification) => (
                    <Mention key={notification.id} notification={notification} />
                ))}

                {
                    notifications.length === 0 ? <NotFound title='Nobody mentioned you yet!' subTitle='Looks like nobody mentioned you yet' action={()=>{}} actionName='' image='/no_mentions_notifications.svg'/> : null
                }
            </div>
            <div>
                {notifications.length === 0 ? null : (
                    <button onClick={fetchNotifications} type="button" className="outlineButton">
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
}
