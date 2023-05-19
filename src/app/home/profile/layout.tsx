import SideNav from './components/SideNav/SideNav';
import styles from './ProfilePage.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.profilePageLayout}>
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </section>
  );
}
