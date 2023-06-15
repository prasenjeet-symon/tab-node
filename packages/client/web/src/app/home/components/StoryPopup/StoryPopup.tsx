'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MArticleStory, MArticleStoryDistribution } from '@tabnode/utils';
import { useEffect, useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { MdClose } from 'react-icons/md';
import styles from './StoryPopup.module.css';

export default function StoryPopup({
    isOpen,
    onClose,
    stories,
    updateSeen
}: {
    stories: {
        story: MArticleStory.IArticleStory | null;
        id: string;
        doc: MArticleStoryDistribution.DArticleStoryDistribution;
    }[];
    isOpen: boolean;
    onClose: () => void;
    updateSeen: (story: { story: MArticleStory.IArticleStory | null; id: string; doc: MArticleStoryDistribution.DArticleStoryDistribution }) => void;
}) {
    const [visibleStory, setVisibleStory] = useState<MArticleStory.IArticleStory | null>(null);
    const [visibleStoryId, setVisibleStoryId] = useState<string>();

    const moveStoryNext = () => {
        const storyIndex = stories.findIndex((story) => story.id === visibleStoryId);
        if (storyIndex === stories.length - 1) {
            onClose();
            return;
        }

        setVisibleStory(stories[storyIndex + 1].story);
        setVisibleStoryId(stories[storyIndex + 1].id);
        storyViewed(stories[storyIndex + 1]);
    };

    const moveStoryBack = () => {
        const storyIndex = stories.findIndex((story) => story.id === visibleStoryId);
        if (storyIndex === 0) {
            return;
        }

        setVisibleStory(stories[storyIndex - 1].story);
        setVisibleStoryId(stories[storyIndex - 1].id);
    };

    const storyViewed = async (story: { story: MArticleStory.IArticleStory | null; id: string; doc: MArticleStoryDistribution.DArticleStoryDistribution }) => {
      updateSeen(story);
        const database = new AppwriteDatabase();
        await database.markStoryAsViewed({ id: story.id, doc: story.doc });
    };

    useEffect(() => {
        // fist story visible
        if (stories.length === 0) return;
        setVisibleStory(stories[0].story);
        setVisibleStoryId(stories[0].id);
    }, []);

    return (
        <section className={`${styles.popup} ${isOpen ? styles.open : ''}`}>
            <div className={styles.popupContentHeader}>
                <div></div>
                <div>
                    <MdClose onClick={onClose} />
                </div>
            </div>
            <div className={styles.popupContentBody}>
                {/* Story Items */}
                <div className={styles.popupContentBodyInner}>
                    <div className={styles.sliderUpper}>
                        {stories.map((p) => (
                            <div key={p.id}></div>
                        ))}
                    </div>
                    <div className={styles.nextButton}>
                        <span onClick={moveStoryNext}>
                            <GrFormNext />
                        </span>
                    </div>
                    <div className={styles.prevButton}>
                        <span onClick={moveStoryBack}>
                            <GrFormPrevious />
                        </span>
                    </div>
                    <div style={{ background: visibleStory?.doc.story.backgroundImage ? `url(${visibleStory?.doc.story.backgroundImage})` : `url('https://cdn.wallpapersafari.com/93/31/W8w9lV.jpg')` }} className={styles.storyContainer}>
                        {visibleStory ? (
                            <div>
                                <div>{visibleStory.doc.story.summery}</div>
                                <button type="button">Read More</button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}
