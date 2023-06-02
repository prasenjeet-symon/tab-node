import styles from './Sponsers.module.css';
import SponsorItem from './components/SponsorItem/SponsorItem';

export default function SponsorsPage() {
  return (
    <section className={styles.sponsors}>
      <div>Sponsors</div>
      <div>
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
        <SponsorItem />
      </div>
    </section>
  );
}
