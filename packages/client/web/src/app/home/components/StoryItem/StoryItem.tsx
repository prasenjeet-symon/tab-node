'use client';

import { MArticleStory, MArticleStoryDistribution } from '@tabnode/utils';
import { useState } from 'react';
import StoryPopup from '../StoryPopup/StoryPopup';
import styles from './StoryItem.module.css';

export default function StoryItem({
    stories,
    updateSeen,
}: {
    stories: {
        story: MArticleStory.IArticleStory | null;
        id: string;
        doc: MArticleStoryDistribution.DArticleStoryDistribution;
    }[];
    updateSeen: (story: { story: MArticleStory.IArticleStory | null; id: string; doc: MArticleStoryDistribution.DArticleStoryDistribution }) => void;
}) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    const isStoryActive = () => {
        const found = stories.find((story) => !story.doc.isSeen);
        return found ? true : false;
    };

    return (
        <section>
            <div onClick={handleOpenPopup} className={`${styles.story} ${isStoryActive() ? styles.storyActive : ''}`}>
                <img src={stories[0].story?.doc.user.profilePic} alt="" />
            </div>
            <StoryPopup updateSeen={updateSeen} stories={stories} onClose={handleClosePopup} isOpen={isPopupOpen} />
        </section>
    );
}
