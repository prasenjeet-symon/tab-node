import Header from '@/app/home/components/Header/Header';
import styles from './Preview.module.css';

export default function Preview({ isOpen, onClose,  cover, heading, subHeading, tags, body }: { isOpen: boolean; onClose: () => void; cover: string; heading: string; subHeading: string; tags: string[]; body: string }) {
  return (
    <section className={`${styles.preview} ${isOpen ? styles.open : ''}`}>
      <Header/>
      <div className={styles.content}>{body}</div>
      <div className={styles.footer}>
         <button type='button' className={`${styles.close} outlineButton`} onClick={onClose}>Close</button>
      </div>
    </section>
  );
}
