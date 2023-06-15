'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser, MUserNotification } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import Comment from '../components/Comment/Comment';
import styles from './Comments.module.css';
import NotFound from '../../components/NotFound/NotFound';

export default function CommentsNotificationPage() {
    let currentUser: MUser.IUser;
    const [commentsNotifications, setCommentsNotifications] = useState<MUserNotification.IUserNotification[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [prevCourser, setPrevCourse] = useState<MUserNotification.IUserNotification | undefined>(undefined);
    const LIMIT = 10;

    const fetchNotifications = async () => {
        const database = new AppwriteDatabase();
        const notifications = await database.fetchUserNotificationByTopic(currentUser.id, 'COMMENT', prevCourser, LIMIT);
        setCommentsNotifications(
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
        <section className={styles.comments}>
            <div>{ commentsNotifications.length === 0 ? null : 'Comments Notifications' }</div>
            <div>
                {commentsNotifications.map((notification) => (
                    <Comment key={notification.id} notification={notification} />
                ))}
                {
                    commentsNotifications.length === 0 ? <NotFound image='/no_comments_notification.svg' actionName='' action={()=>{}} title='No Comments Received Yet' subTitle='Looks like you have not received any comments yet'/> : null
                }
            </div>
            <div>
                {commentsNotifications.length === 0 ? null : (
                    <button onClick={fetchNotifications} type="button" className="outlineButton">
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
}
