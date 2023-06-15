'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser, MUserNotification } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import NotFound from '../components/NotFound/NotFound';
import styles from './Notification.module.css';
import Comment from './components/Comment/Comment';
import Like from './components/Like/Like';
import Mention from './components/Mention/Mention';
import General from './components/General/General';

export default function NotificationPage() {
    let user: MUser.IUser;
    const [notifications, setNotifications] = useState<MUserNotification.IUserNotification[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [prevCourser, setPrevCourser] = useState<MUserNotification.IUserNotification | undefined>(undefined);
    const LIMIT = 10;

    const fetchUser = async () => {
        const database = new AppwriteDatabase();
        const userFetched = await database.fetchLoginUser();
        if (!userFetched) return;
        user = userFetched;
    };

    const fetchNotifications = async () => {
        const database = new AppwriteDatabase();
        const notifications = await database.fetchNotifications(user.id, prevCourser, LIMIT);
        setNotifications(
            produce((draft) => {
                draft.push(...notifications);
            })
        );

        setPrevCourser(notifications[notifications.length - 1]);
    };

    useEffect(() => {
        fetchUser().then(() => {
            fetchNotifications();
        });
    }, []);

    const renderNotification = (notification: MUserNotification.IUserNotification) => {
        switch (notification.doc.topic) {
            case 'COMMENT':
                return <Comment notification={notification} />;
                break;

            case 'LIKE':
                return <Like notification={notification} />;
                break;

            case 'MENTION':
                return <Mention notification={notification} />;
                break;

            case 'FOLLOW':
                return null;

            case 'GENERAL':
                return <General notification={notification} />;

            default:
                return null;
        }
    };

    return (
        <section className={styles.notification}>
            <section> {notifications.length === 0 ? null : 'All Notifications'} </section>
            <section>
                {notifications.map((notification, index) => {
                    return renderNotification(notification);
                })}

                {notifications.length === 0 ? <NotFound title="No Notifications yet!" subTitle="Looks like you have not received any notifications yet" action={() => {}} actionName="" image="/no_notifications.svg" /> : null}
            </section>
            <section>
                {notifications.length === 0 ? null : (
                    <button onClick={fetchNotifications} type="button" className="outlineButton">
                        Load More
                    </button>
                )}
            </section>
        </section>
    );
}
