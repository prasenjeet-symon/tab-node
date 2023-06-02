'use client';

import { MdClose } from 'react-icons/md';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import styles from './StoryPopup.module.css';

export default function StoryPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.nextButton}> <span><GrFormNext/></span> </div>
            <div className={styles.prevButton}><span><GrFormPrevious/></span> </div>
            <div className={styles.storyContainer}>
                <div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione illo quasi iste deleniti nostrum atque, mollitia doloremque, ex, amet aspernatur corporis rem!</div>
                    <button type='button'>Read More</button>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
}
