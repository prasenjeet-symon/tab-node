'use client';

import styles from './SideNav.module.css';
import {MdBookmarkBorder,MdOutlinePostAdd, MdOutlineAnalytics,MdOutlineCreditScore, MdOutlinePeopleAlt , MdOutlineStorm, MdOutlinePersonAddAlt1} from 'react-icons/md';
import {FiSettings} from 'react-icons/fi'
import { usePathname , useRouter} from 'next/navigation';
import Link  from 'next/link';

export default function SideNav() { 
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (link: string) => {
    console.log(pathname, link);
    return  pathname.toLowerCase() === link.toLowerCase() ? styles.activeLink : '';
  };

  return (
    <section className={styles.sideNav}>
      {/* Posted posts */}
      <div onClick={() => router.push('/home/profile')}  className={`${styles.sideNavItem} ${isActive('/home/profile')}`}>
          <div> <MdOutlinePostAdd/> </div>
          <div> Posts </div>
      </div>

      {/* Saved Posts */}
      <div onClick={() => router.push('/home/profile/saved')} className={`${styles.sideNavItem} ${isActive('/home/profile/saved')}`}>
        <div> <MdBookmarkBorder/> </div>
        <div> Saved Posts </div>
      </div>

      {/* Activity */}
      <div onClick={() => router.push('/home/profile/activity')} className={`${styles.sideNavItem} ${isActive('/home/profile/activity')}`}>
        <div> <MdOutlineAnalytics/> </div>
        <div> Activity </div>
      </div>

      {/* Followers  */}
      <div onClick={() => router.push('/home/profile/followers')} className={`${styles.sideNavItem} ${isActive('/home/profile/followers')}`}>
        <div> <MdOutlinePeopleAlt/> </div>
        <div> Followers </div>
      </div>

      {/* Followings */}
      <div onClick={() => router.push('/home/profile/followings')} className={`${styles.sideNavItem} ${isActive('/home/profile/followings')}`}>
        <div> <MdOutlinePersonAddAlt1/> </div>
        <div> Followings </div>
      </div>

      {/* Sponsors */}
      <div onClick={() => router.push('/home/profile/sponsers')} className={`${styles.sideNavItem} ${isActive('/home/profile/sponsers')}`}>
        <div> <MdOutlineStorm/> </div>
        <div> Sponsors </div>
      </div>

      {/* Sponsoring  */}
      <div onClick={() => router.push('/home/profile/sponsoring')} className={`${styles.sideNavItem} ${isActive('/home/profile/sponsoring')}`}>
        <div> <MdOutlineCreditScore/> </div>
        <div> Sponsoring </div>
      </div>

      {/* Profile Setting */}
      <div onClick={() => router.push('/home/profile/profile-setting')} className={`${styles.sideNavItem} ${isActive('/home/profile/profile-setting')}`}>
        <div> <FiSettings/> </div>
        <div> Profile Setting </div>
      </div>
    </section>
  );
}
