import { MUserNotification, getHumanReadableDate } from '@tabnode/utils';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import styles from './Mention.module.css';

export default function Mention({ notification }: { notification: MUserNotification.IUserNotification }) {
    return (
        <section className={styles.comment}>
            <div>
                <span>
                    <MdOutlineAlternateEmail />
                </span>
            </div>
            <div>
                <div>
                    <img src={notification.doc.originator.profilePic} alt="" />
                </div>
                <div>{notification.doc.title}</div>
                <div>{notification.doc.notification}</div>
                <div>{getHumanReadableDate(notification.doc.createdAt)} </div>
            </div>
            <div>
                <GoPrimitiveDot />
            </div>
        </section>
    );
}
