'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUserRelationSuggestion } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import styles from './MayFollow.module.css';

export default function MayFollow() {
    const [mayFollow, setMayFollow] = useState<MUserRelationSuggestion.IUserRelationSuggestion[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error>();
    const [followStatus, setFollowStatus] = useState<{ [userId: string]: boolean }>({});
    const IDEAL_TIME = 3000;

    const setFollowStatusForUser = (userId: string) => {
        const isFound = Object.keys(followStatus).find((key) => key === userId);
        if (!isFound) {
            setFollowStatus(
                produce((draft) => {
                    draft[userId] = true;
                })
            );
        } else {
            setFollowStatus(
                produce((draft) => {
                    draft[userId] = !draft[userId];
                })
            );
        }
    };

    const amIFollowing = (userId: string) => {
        const isFound = Object.keys(followStatus).find((key) => key === userId);
        if (!isFound) return false;
        return followStatus[userId];
    };

    const fetchMayFollow = async () => {
        const database = new AppwriteDatabase();
        const currentUser = await database.fetchLoginUser();
        if (!currentUser) return;
        const mayFollow = await database.fetchSuggestedFollowers(currentUser.id, 5);
        setMayFollow(
            produce((draft) => {
                draft.push(...mayFollow.filter((p) => p.doc.user.docID !== currentUser.id));
            })
        );
    };

    const updateViewCount = async () => {
        const database = new AppwriteDatabase();
        await Promise.all(mayFollow.map((p) => database.updateFollowerSuggestionViewCount(p)));
    };

    useEffect(() => {
        fetchMayFollow();

        const timer = setTimeout(async () => {
            await updateViewCount();
        }, IDEAL_TIME);

        // Cleanup the timer when the component unmounts or when dependencies change
        return () => clearTimeout(timer);
    }, []);

    const follow = async (userSuggested: MUserRelationSuggestion.IUserRelationSuggestion) => {
        const database = new AppwriteDatabase();
        setFollowStatusForUser(userSuggested.doc.user.docID);
        await database.followUser({
            id: v4(),
            doc: {
                fromUser: userSuggested.doc.for,
                toUser: userSuggested.doc.user,
                createdAt: new Date(),
                fromTrend: { boostPoint: 0, resetDate: new Date() },
                toTrend: { boostPoint: 0, resetDate: new Date() },
                updatedAt: new Date(),
            },
        });
        // mark this suggestion stable
        await database.markSuggestedFollowerAsStable(userSuggested.doc.for.docID, userSuggested.doc.user.docID);
    };

    return (
        <div className={styles.mayFollow}>
            <div> People you might know </div>
            <div>
                {/* list all the suggested blogger here */}
                {mayFollow.map((p) => {
                    return (
                        <div key={p.id} className={styles.blogger}>
                            <div>
                                <img src={p.doc.user.profilePic} alt="" />
                            </div>
                            <div>
                                <div>{p.doc.user.fullName}</div>
                                <div>{p.doc.user.aboutMe}</div>
                            </div>
                            <div>
                                {amIFollowing(p.doc.user.docID) ? (
                                    <button type="button" className="filledButton">
                                        Following
                                    </button>
                                ) : (
                                    <button onClick={() => follow(p)} type="button" className="followButton">
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}

                {mayFollow.length === 0 && <div>No suggested blogger yet</div>}
            </div>
        </div>
    );
}
