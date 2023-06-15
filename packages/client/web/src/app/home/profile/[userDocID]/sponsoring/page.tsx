import styles from './Sponsoring.module.css';
import SponsoringItem from './components/SponsoringItem/SponsoringItem';

export default function SponsoringPage() {
  return <section className={styles.sponsoring}>
    <div>Sponsoring ( Not Finished Yet ) </div>
    <div>
        <SponsoringItem/>
        <SponsoringItem/>
        <SponsoringItem/>
        <SponsoringItem/>
        <SponsoringItem/>
    </div>
  </section>;
}
