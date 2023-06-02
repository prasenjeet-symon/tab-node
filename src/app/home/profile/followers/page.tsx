import styles from './Followers.module.css';
import FollowerItem from './components/FollowerItem/FollowerItem';

export default function FollowersPage() {
  return <section className={styles.followers}>
    {/* List all followers here */}
    <div> Followers </div>
    <div>
        <FollowerItem/>
        <FollowerItem/>
        <FollowerItem/>
        <FollowerItem/>
        <FollowerItem/>
        <FollowerItem/>
    </div>
  </section>;
}
