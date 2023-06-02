import SideNav from './components/SideNav/SideNav';
import styles from './ProfilePage.module.css';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import LinkGroup  from './components/LinkGroup/LinkGroup';
import LiveViewCount from './components/LiveViewCount/LiveViewCount';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.profilePageLayout}>
      <section>
        <div>
           <div> <LiveViewCount/> </div>
           <div><LinkGroup/></div>
        </div>
        <div><ProfileHeader/></div>
      </section>
      <section>
        <div>
          <SideNav />
        </div>
        <div>{children}</div>
      </section>
    </section>
  );
}
