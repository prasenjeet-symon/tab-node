import styles from './ProfilePage.module.css';
import Post from './components/Post/Post';

export default function ProfilePage() {
  return <section className={styles.profilePage}>
      {/* list all the posted posts  */}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
  </section>;
}
