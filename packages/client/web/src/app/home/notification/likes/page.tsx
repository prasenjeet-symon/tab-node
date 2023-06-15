'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser, MUserNotification } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import Like from '../components/Like/Like';
import styles from './Likes.module.css';

export default function Likes() {
    let currentUser: MUser.IUser;
    const [notificationLikes, setNotificationsLike] = useState<MUserNotification.IUserNotification[]>([]);
    const [prevCourser, setPrevCourser] = useState<MUserNotification.IUserNotification | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const LIMIT = 10;

    const fetchNotifications = async () => {
        const database = new AppwriteDatabase();
        const notifications = await database.fetchUserNotificationByTopic(currentUser.id, 'LIKE', prevCourser, LIMIT);
        setNotificationsLike(
            produce((draft) => {
                draft.push(...notifications);
            })
        );

        setPrevCourser(notifications[notifications.length - 1]);
    };

    const fetchCurrentUser = async () => {
        const database = new AppwriteDatabase();
        const user = await database.fetchLoginUser();
        if (!user) return;
        currentUser = user;
    };

    useEffect(() => {
        fetchCurrentUser().then(() => {
            fetchNotifications();
        });
    }, []);

    return (
        <section className={styles.likes}>
            <div> {notificationLikes.length === 0 ? null : 'Likes Notifications'} </div>
            <div>
                {notificationLikes.map((notification) => (
                    <Like key={notification.id} notification={notification} />
                ))}

                {notificationLikes.length === 0 ? <NotFound image="/no_likes_notification.svg" title="No Likes Received yet!" subTitle="Looks like you have not received any likes yet" action={() => {}} actionName="" /> : null}
            </div>
            <div>
                {notificationLikes.length === 0 ? null : (
                    <button onClick={fetchNotifications} type="button" className="outlineButton">
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
}
