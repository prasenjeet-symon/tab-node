'use client';

import { useState } from 'react';
import StoryPopup from '../StoryPopup/StoryPopup';
import styles from './StoryItem.module.css';

export default function StoryItem() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section>
      <div onClick={handleOpenPopup} className={`${styles.story} ${styles.storyActive}`}>
        <img src="/story-pic.jpg" alt="" />
      </div>
      <StoryPopup onClose={handleClosePopup} isOpen={isPopupOpen} />
    </section>
  );
}
