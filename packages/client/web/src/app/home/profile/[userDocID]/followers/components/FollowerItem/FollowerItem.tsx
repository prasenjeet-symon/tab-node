'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUserRelationship } from '@tabnode/utils';
import { useEffect, useState } from 'react';
import styles from './FollowerItem.module.css';

export default function FollowerItem({ follower }: { follower: MUserRelationship.IUserRelationship }) {
    const [followStatus, setFollowStatus] = useState<boolean>(true);

    const unFollow = async () => {
        const database = new AppwriteDatabase();
        setFollowStatus(false);
        await database.unFollowUser(follower);
    };

    const follow = async () => {
        const database = new AppwriteDatabase();
        setFollowStatus(true);
        await database.followUser(follower);
    };

    const amIFollowing = async () => {
        const amI = await new AppwriteDatabase().amIFollowing(follower.doc.fromUser);
        setFollowStatus(!!amI);
    };

    useEffect(() => {
        amIFollowing();
    }, []);

    return (
        <section className={styles.followerItem}>
            <div>
                <img alt="" src={follower.doc.fromUser.profilePic} />
            </div>
            <div>{follower.doc.fromUser.fullName}</div>
            <div>{follower.doc.fromUser.aboutMe}</div>
            <div>
                {followStatus ? (
                    <button className="filledButton" type="button" onClick={unFollow}>
                        Following
                    </button>
                ) : (
                    <button className="outlineButton" type="button" onClick={follow}>
                        Follow
                    </button>
                )}
            </div>
        </section>
    );
}
