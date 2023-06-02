import SideNav from './components/SideNav/SideNav';
import styles from './Notification.module.css';

export default function NotificationLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.notificationLayout}>
      <section>
        <SideNav/>
      </section>
      <section>{children}</section>
    </section>
  );
}
