import { MUserNotification, getHumanReadableDate } from '@tabnode/utils';
import { FaHeart } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import styles from './Like.module.css';

export default function Like({ notification }: { notification: MUserNotification.IUserNotification }) {
    return (
        <section className={styles.like}>
            <div>
                <span>
                    <FaHeart />
                </span>
            </div>
            <div>
                <div>
                    <img src={notification.doc.originator.profilePic} alt="" />
                </div>
                <div>{notification.doc.notification}</div>
                <div> {getHumanReadableDate(notification.doc.createdAt)} </div>
            </div>
            <div>
                <GoPrimitiveDot />
            </div>
        </section>
    );
}
