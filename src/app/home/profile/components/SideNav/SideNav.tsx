import styles from './SideNav.module.css';
import {FaBookmark, FaShoePrints} from 'react-icons/fa';

export default function SideNav() {
  return (
    <section className={styles.sideNav}>
      {/* Saved Posts */}
      <div className={styles.sideNavItem}>
        <div> <FaBookmark/> </div>
        <div> Saved Posts </div>
      </div>

      {/* Activity */}
      <div className={styles.sideNavItem}>
        <div> <FaShoePrints/> </div>
        <div> Activity </div>
      </div>

      {/* Followers  */}
      <div className={styles.sideNavItem}>
        <div> <FaShoePrints/> </div>
        <div> Followers </div>
      </div>

      {/* Followings */}
      <div className={styles.sideNavItem}>
        <div> <FaShoePrints/> </div>
        <div> Followings </div>
      </div>

      {/* Sponsors */}
      <div className={styles.sideNavItem}>
        <div> <FaShoePrints/> </div>
        <div> Sponsors </div>
      </div>

      {/* Sponsoring  */}
      <div className={styles.sideNavItem}>
        <div> <FaShoePrints/> </div>
        <div> Sponsoring </div>
      </div>
    </section>
  );
}
