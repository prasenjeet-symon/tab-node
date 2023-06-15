'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import NotFound from '@/app/home/components/NotFound/NotFound';
import { MUserRelationship } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import styles from './Followers.module.css';
import FollowerItem from './components/FollowerItem/FollowerItem';

export default function FollowersPage({ params }: { params: { userDocID: string } }) {
    const [followers, setFollowers] = useState<MUserRelationship.IUserRelationship[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();
    const [prevCourser, setPrevCourser] = useState<MUserRelationship.IUserRelationship | undefined>(undefined);
    const LIMIT = 10;

    const fetchFollowers = async () => {
        const database = new AppwriteDatabase();
        const followersFetched = await database.fetchFollowers(params.userDocID, prevCourser, LIMIT);
        setFollowers(
            produce((draft) => {
                draft?.push(...followersFetched);
            })
        );

        setPrevCourser(followersFetched[followersFetched.length - 1]);
    };

    useEffect(() => {
        fetchFollowers();
    }, []);

    return (
        <section className={styles.followers}>
            {/* List all followers here */}
            <div> {followers.length === 0 ? null : 'Followers'} </div>
            <div>
                {followers.map((p) => {
                    return <FollowerItem key={p.id} follower={p} />;
                })}
            </div>
            <div>
                {followers.length === 0 ? null : (
                    <button onClick={fetchFollowers} type="button" className="outlineButton">
                        Load More
                    </button>
                )}
            </div>
            {followers.length === 0 ? <NotFound title="No Followers" subTitle="Looks like you have no followers" action={() => {}} actionName="" image="/no_followers.svg" /> : null}
        </section>
    );
}
