'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import NotFound from '@/app/home/components/NotFound/NotFound';
import { MUserRelationship } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import styles from './Followings.module.css';
import FollowingItem from './components/FollowingItem/FollowingItem';

export default function FollowingsPage({ params }: { params: { userDocID: string } }) {
    const [followings, setFollowings] = useState<MUserRelationship.IUserRelationship[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [prevCourser, setPrevCourser] = useState<MUserRelationship.IUserRelationship | undefined>(undefined);
    const LIMIT = 10;

    const fetchFollowings = async () => {
        const database = new AppwriteDatabase();
        const followingsFetched = await database.fetchFollowings(params.userDocID, prevCourser, LIMIT);
        setFollowings(
            produce((draft) => {
                draft.push(...followingsFetched);
            })
        );

        setPrevCourser(followingsFetched[followingsFetched.length - 1]);
    };

    useEffect(() => {
        fetchFollowings();
    }, []);

    return (
        <section className={styles.followings}>
            <div>{followings.length === 0 ? null : 'Followings'} </div>
            <div>
                {followings.map((p) => {
                    return <FollowingItem key={p.id} following={p} />;
                })}
            </div>
            <div>
                {followings.length === 0 ? null : (
                    <button onClick={fetchFollowings} type="button" className="outlineButton">
                        Load More
                    </button>
                )}
            </div>
            {followings.length === 0 ? <NotFound action={() => {}} actionName="" image="/no_followings.svg" title="No Followings" subTitle="Looks like you don't follow anyone" /> : null}
        </section>
    );
}
