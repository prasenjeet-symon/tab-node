'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser, getHumanReadableDate } from '@tabnode/utils';
import { produce } from 'immer';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdCake, MdLocationOn } from 'react-icons/md';
import styles from './ProfileHeader.module.css';

export default function ProfileHeader() {
    const pathname = usePathname();
    const userDocID = pathname.split('/')[3];
    const [userProfile, setUserProfile] = useState<MUser.IUser>();

    useEffect(() => {
        const fetchUser = async () => {
            const database = new AppwriteDatabase();
            const user = await database.fetchPublicUserByID(userDocID);
            if (!user) return;
            setUserProfile(
                produce((draft) => {
                    return user;
                })
            );
        };

        fetchUser();
    }, []);

    return (
        <>
            {userProfile ? (
                <section className={styles.profileHeader}>
                    <div>
                        <img src={userProfile.doc.profilePic} alt="" />
                    </div>
                    <div>{userProfile.doc.fullName} </div>
                    <div>{userProfile.doc.aboutMe}</div>
                    <div>
                        <div>
                            <span>{userProfile.doc.address.address ? <MdLocationOn /> : null}</span>
                            <span>{userProfile.doc.address.address}</span>
                        </div>
                        <div>
                            <span>
                                <MdCake />
                            </span>
                            <span>Joined {getHumanReadableDate(userProfile.doc.createdAt)}</span>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
}
