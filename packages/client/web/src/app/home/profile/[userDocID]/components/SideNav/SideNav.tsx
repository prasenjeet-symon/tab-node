'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { MdBookmarkBorder, MdDrafts, MdOutlineAnalytics, MdOutlineCreditScore, MdOutlineDrafts, MdOutlinePeopleAlt, MdOutlinePersonAddAlt1, MdOutlinePostAdd, MdOutlineStorm } from 'react-icons/md';
import styles from './SideNav.module.css';
import Appwrite from '@/app/appwrite';

export default function SideNav() {
    const pathname = usePathname();
    const router = useRouter();
    const userDocID = pathname.split('/')[3];
    const [isPublic, setIsPublic] = useState(true);

    useEffect(() => {
        const checkPublic = async () => {
            const database = new AppwriteDatabase();
            const loggedInUser = await database.fetchLoginUser();
            if (loggedInUser && loggedInUser.id === userDocID) {
                setIsPublic(false);
            } else {
                setIsPublic(true);
            }
        };

        checkPublic();
    });

    const isActive = (link: string) => {
        return pathname.toLowerCase() === link.toLowerCase() ? styles.activeLink : '';
    };

    const logout = async () => {
       await Appwrite.logout();
       router.push('/');
    }

    return (
        <section className={styles.sideNav}>
            {/* Posted posts */}
            <div onClick={() => router.push(`/home/profile/${userDocID}`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}`)}`}>
                <div>
                    <MdOutlinePostAdd />
                </div>
                <div> Posts </div>
            </div>

            {isPublic ? null : (
                <div onClick={() => router.push(`/home/profile/${userDocID}/drafted`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}/drafted`)}`}>
                    <div>
                        <MdOutlineDrafts />
                    </div>
                    <div> Drafted Posts </div>
                </div>
            )}

            {/* Saved Posts */}
            {isPublic ? null : (
                <div onClick={() => router.push(`/home/profile/${userDocID}/saved`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}/saved`)}`}>
                    <div>
                        <MdBookmarkBorder />
                    </div>
                    <div> Saved Posts </div>
                </div>
            )}

            {/* Activity */}
            <div onClick={() => router.push(`/home/profile/${userDocID}/activity`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}/activity`)}`}>
                <div>
                    <MdOutlineAnalytics />
                </div>
                <div> Activity </div>
            </div>

            {/* Followers  */}
            <div onClick={() => router.push(`/home/profile/${userDocID}/followers`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}/followers`)}`}>
                <div>
                    <MdOutlinePeopleAlt />
                </div>
                <div> Followers </div>
            </div>

            {/* Followings */}
            <div onClick={() => router.push(`/home/profile/${userDocID}/followings`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}/followings`)}`}>
                <div>
                    <MdOutlinePersonAddAlt1 />
                </div>
                <div> Followings </div>
            </div>

            {/* Sponsors */}
            <div onClick={() => router.push(`/home/profile/${userDocID}/sponsers`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}/sponsers`)}`}>
                <div>
                    <MdOutlineStorm />
                </div>
                <div> Sponsors </div>
            </div>

            {/* Sponsoring  */}
            <div onClick={() => router.push(`/home/profile/${userDocID}/sponsoring`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}/sponsoring`)}`}>
                <div>
                    <MdOutlineCreditScore />
                </div>
                <div> Sponsoring </div>
            </div>

            {/* Profile Setting */}
            {isPublic ? null : (
                <div onClick={() => router.push(`/home/profile/${userDocID}/profile-setting`)} className={`${styles.sideNavItem} ${isActive(`/home/profile/${userDocID}/profile-setting`)}`}>
                    <div>
                        <FiSettings />
                    </div>
                    <div> Profile Setting </div>
                </div>
            )}

            {/* Logout button */}
            {
                isPublic ? null : (
                    <div onClick={() => logout()} className={`${styles.sideNavItem} ${isActive('/')} ${styles.logout}`}>
                        <div>
                            <FiLogOut />
                        </div>
                        <div> Logout </div>
                    </div>
                )
            }
        </section>
    );
}
