import { MUserNotification, getHumanReadableDate } from '@tabnode/utils';
import { FaComment } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import styles from './Comment.module.css';

export default function Comment({ notification }: { notification: MUserNotification.IUserNotification }) {
    return (
        <section className={styles.comment}>
            <div>
                <span>
                    <FaComment />
                </span>
            </div>
            <div>
                <div>
                    <img src={notification.doc.originator.profilePic} alt="" />
                </div>
                <div>{notification.doc.title}</div>
                <div>{notification.doc.notification}</div>
                <div> {getHumanReadableDate(notification.doc.createdAt)} </div>
            </div>
            <div>
                <GoPrimitiveDot />
            </div>
        </section>
    );
}
