import { MUserNotification, getHumanReadableDate } from '@tabnode/utils';
import { GoPrimitiveDot } from 'react-icons/go';
import styles from './General.module.css';
import { AiFillAliwangwang } from 'react-icons/ai';

export default function General({ notification }: { notification: MUserNotification.IUserNotification }) {
    return (
        <div className={styles.containerGeneralNotification}>
            <div>
                <span>
                    <AiFillAliwangwang/>
                </span>
            </div>
            <div>
                <div>
                    <img src='https://static.vecteezy.com/system/resources/previews/000/497/018/original/vector-notification-icon-design.jpg' alt="" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: notification.doc.notification }}></div>
                <div> {getHumanReadableDate(notification.doc.createdAt)} </div>
            </div>
            <div>
                <GoPrimitiveDot />
            </div>
        </div>
    );
}
