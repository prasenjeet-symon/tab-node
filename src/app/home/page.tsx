import styles from './HomePage.module.css';
import Stories from './components/Stories/Stories';
import Article from './components/Article/Article';
import MayFollow from './components/MayFollow/MayFollow'
import ReadingList from './components/ReadingList/ReadingList';

export default function HomePage() {
  return (
    <section className={styles.homePage}>
      <section>
        {/* Home page stories */}
        <div className={styles.searchAndStories}>
          <div></div>
          <div>
            <Stories />
          </div>
        </div>

        {/* Articles starts here */}
        <section className={styles.articlesWrapper}>
          <div>
            <div> Articles </div>
            <div></div>
          </div>
          <div>
            {/* here list all articles card */}
            <Article/>
            <Article/>
            <Article/>
          </div>
        </section>

      </section>
      <section>
        <MayFollow/>
        <ReadingList/>
      </section>
    </section>
  );
}
