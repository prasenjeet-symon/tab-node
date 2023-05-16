import { Share_Tech_Mono } from 'next/font/google';
import styles from './Header.module.css';

const share_Tech_Mono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function Header() {
  return (
    <section className={`${share_Tech_Mono.className} ${styles.header}`}>
      <div> _TabNode </div>
    </section>
  );
}
