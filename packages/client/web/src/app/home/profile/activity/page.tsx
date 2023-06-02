import styles from './Activity.module.css';
import ActivityGroup from './components/ActivityGroup/ActivityGroup';

export default function ActivityPage() {
  return <section className={styles.activity}>
    {/* List all the activity here with load more button */}
    <section> Recent Activity </section>
    <section>
        <ActivityGroup/>
        <ActivityGroup/>
    </section>
    <section>
        <button className='outlineButton' type='button'>Load More</button>
    </section>
  </section>;
}
