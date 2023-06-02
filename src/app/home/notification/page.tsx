import styles from './Notification.module.css';
import Comment from './components/Comment/Comment';
import Like from './components/Like/Like';
import Mention from './components/Mention/Mention';

export default function NotificationPage() {
  return (
    <section className={styles.notification}>
      <section>All Notifications</section>
      <section>
        <Like />
        <Like />
        <Like />
        <Comment />
        <Like/>
        <Mention/>
      </section>
    </section>
  );
}
