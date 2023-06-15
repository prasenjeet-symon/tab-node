'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUserRelationship } from '@tabnode/utils';
import { useEffect, useState } from 'react';
import styles from './FollowingItem.module.css';

export default function FollowingItem({ following }: { following: MUserRelationship.IUserRelationship }) {
    const [isFollowing, setFollowings] = useState<boolean>(false);

    const follow = async () => {
        const database = new AppwriteDatabase();
        await database.followUser(following);
        setFollowings(true);
    };

    const unFollow = async () => {
        const database = new AppwriteDatabase();
        await database.unFollowUser(following);
        setFollowings(false);
    };

    const amIFollowing = async () => {
        const amI = await new AppwriteDatabase().amIFollowing(following.doc.toUser);
        setFollowings(!!amI);
    };

    useEffect(() => {
        amIFollowing();
    }, []);

    return (
        <section className={styles.followingItem}>
            <div>
                <img src={following.doc.toUser.profilePic} alt="" />
            </div>
            <div>{following.doc.toUser.fullName}</div>
            <div>{following.doc.toUser.aboutMe}</div>
            <div>
                {isFollowing ? (
                    <button onClick={unFollow} className="filledButton" type="button">
                        Following
                    </button>
                ) : (
                    <button onClick={follow} className="outlineButton" type="button">
                        Follow
                    </button>
                )}
            </div>
        </section>
    );
}
