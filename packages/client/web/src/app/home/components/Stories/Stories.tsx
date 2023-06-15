'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MArticleStory, MArticleStoryDistribution } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import StoryItem from '../StoryItem/StoryItem';
import styles from './Stories.module.css';

export default function Stories() {
    const [stories, setStories] = useState<{
        [key: string]: {
            story: MArticleStory.IArticleStory | null;
            id: string;
            doc: MArticleStoryDistribution.DArticleStoryDistribution;
        }[];
    }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStories = async () => {
            const database = new AppwriteDatabase();
            const currentUser = await database.fetchLoginUser();
            if (!currentUser) return;
            const storiesFetched = await database.fetchAllStories(currentUser.id);
            setStories(storiesFetched);
        };

        fetchStories();
    }, []);

    const updateSeenStatus = (story: { story: MArticleStory.IArticleStory | null; id: string; doc: MArticleStoryDistribution.DArticleStoryDistribution }) => {
        setStories(
            produce((draft) => {
                Object.keys(draft).forEach((key) => {
                    const storyItem = draft[key].find((item) => item.id === story.id);
                    if (storyItem) {
                        storyItem.doc.isSeen = true;
                    }
                });
            })
        );
    };

    return (
        <div className={styles.stories}>
            {/* list all the stories here */}
            {Object.keys(stories).map((key) => {
                return <StoryItem updateSeen={updateSeenStatus} key={key} stories={stories[key]} />;
            })}
        </div>
    );
}
