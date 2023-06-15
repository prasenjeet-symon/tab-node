'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import NotFound from '@/app/home/components/NotFound/NotFound';
import { MUserActivity } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import styles from './Activity.module.css';
import ActivityGroup from './components/ActivityGroup/ActivityGroup';

export default function ActivityPage({ params }: { params: { userDocID: string } }) {
    const [activities, setActivities] = useState<MUserActivity.IUserActivity[]>([]);
    const [groupedActivities, setGroupedActivities] = useState<{ [key: string]: MUserActivity.IUserActivity[] }>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [prevCourser, setPrevCourser] = useState<MUserActivity.IUserActivity | undefined>(undefined);
    const LIMIT = 10;

    const fetchActivities = async () => {
        const database = new AppwriteDatabase();
        const activitiesFetched = await database.fetchUserActivities(params.userDocID, prevCourser, LIMIT);
        setActivities(
            produce((draft) => {
                draft.push(...activitiesFetched);
            })
        );

        setPrevCourser(
            produce((draft) => {
                return activitiesFetched[activitiesFetched.length - 1];
            })
        );

        // group element by createdAt days like 12 Jan 2023 etc
        const groupedActivities = () => {
            const grouped = activities.reduce((acc, curr) => {
                const key = new Date(curr.doc.createdAt).toLocaleDateString();
                if (!acc[key]) {
                    acc[key] = [];
                }

                acc[key].push(curr);
                return acc;
            }, {} as { [key: string]: MUserActivity.IUserActivity[] });
        };

        setGroupedActivities(
            produce((draft) => {
                return groupedActivities();
            })
        );
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <section className={styles.activity}>
            {/* List all the activity here with load more button */}
            <section>{Object.keys(groupedActivities).length === 0 ? null : 'Recent Activity'} </section>
            <section>
                {Object.keys(groupedActivities).map((key) => {
                    return <ActivityGroup key={key} activities={groupedActivities[key]} />;
                })}

                {Object.keys(groupedActivities).length === 0 ? <NotFound title="No Activities Yet!" subTitle="Looks like you have not started any activity yet" action={() => {}} actionName="" image="/no_activity.svg" /> : null}
            </section>
            <section>
                {Object.keys(groupedActivities).length === 0 ? null : (
                    <button onClick={fetchActivities} className="outlineButton" type="button">
                        Load More
                    </button>
                )}
            </section>
        </section>
    );
}
