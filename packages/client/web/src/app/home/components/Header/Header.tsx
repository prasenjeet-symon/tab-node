'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser } from '@tabnode/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiFillDiff, AiOutlineSearch, AiTwotoneBell } from 'react-icons/ai';
import styles from './Header.module.css';

export default function Header() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<MUser.IUser | null | undefined>(undefined);

    const navigateToWriteArticle = async () => {
        const database = new AppwriteDatabase();
        setIsLoading(true);
        const createdDraft = await database.createArticle(null);
        setIsLoading(false);
        router.push(`/home/write-article/${createdDraft}`);
    };

    const navigateToNotificationPage = () => {
        router.push(`/home/notification`);
    };

    const navigateToHomePage = () => {
        router.push(`/home`);
    };

    const navigateToProfile = async () => {
        if (!user) return;
        router.push(`/home/profile/${user.id}`);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const database = new AppwriteDatabase();
            const userFetched = await database.fetchLoginUser();
            if (!userFetched) return;
            setUser(userFetched);
        };

        fetchUser();
    }, []);

    return (
        <section className={`${styles.header}`}>
            <section>
                <div>
                    <span>
                        <AiOutlineSearch />
                    </span>
                </div>
                <div style={{ cursor: 'pointer' }} onClick={navigateToHomePage}>
                    TabNode
                </div>
                <div>
                    <div>
                        <div style={{ cursor: 'pointer' }} onClick={navigateToNotificationPage}>
                            <AiTwotoneBell />
                        </div>
                    </div>
                    <div>
                        <img style={{ cursor: 'pointer' }} onClick={navigateToProfile} src={user?.doc.profilePic} alt="" />
                    </div>
                    <div>
                        <button style={{ cursor: 'pointer' }} disabled={isLoading} onClick={navigateToWriteArticle} type="button">
                            <AiFillDiff />
                            <span>Write</span>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
}
