'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FaComment, FaHeart, FaMoneyBillWave } from 'react-icons/fa';
import { MdNotifications, MdOutlineAlternateEmail, MdPerson4 } from 'react-icons/md';
import styles from './SideNav.module.css';

export default function SideNav() {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (link: string) => {
        console.log(pathname, link);
        return pathname.toLowerCase() === link.toLowerCase() ? styles.activeLink : '';
    };

    return (
        <section className={styles.sideNav}>
            <div onClick={() => router.push('/home/notification')} className={`${styles.sideNavItem} ${isActive('/home/notification')}`}>
                <div>
                    <MdNotifications />
                </div>
                <div> All Notifications </div>
            </div>

            {/* For the likes */}
            <div onClick={() => router.push('/home/notification/likes')} className={`${styles.sideNavItem} ${isActive('/home/notification/likes')}`}>
                <div>
                    <FaHeart />
                </div>
                <div> Likes </div>
            </div>

            {/* For the comments */}
            <div onClick={() => router.push('/home/notification/comments')} className={`${styles.sideNavItem} ${isActive('/home/notification/comments')}`} >
                <div>
                    <FaComment />
                </div>
                <div> Comments </div>
            </div>

            {/* For the mentions */}
            <div onClick={() => router.push('/home/notification/mentions')} className={`${styles.sideNavItem} ${isActive('/home/notification/mentions')}`}>
                <div>
                    <MdOutlineAlternateEmail />
                </div>
                <div> Mentions </div>
            </div>

            {/* For the followers  */}
            <div className={styles.sideNavItem}>
                <div>
                    <MdPerson4 />
                </div>
                <div> Followers </div>
            </div>

            {/* For the sponsors */}
            <div className={styles.sideNavItem}>
                <div>
                    <FaMoneyBillWave />
                </div>
                <div> Sponsors </div>
            </div>
        </section>
    );
}
