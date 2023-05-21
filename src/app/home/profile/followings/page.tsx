import styles from './Followings.module.css';
import FollowingItem from './components/FollowingItem/FollowingItem';

export default function FollowingsPage() {
    return ( <section className={styles.followings}>
        <div>Followings</div>
        <div>
            <FollowingItem/>
            <FollowingItem/>
            <FollowingItem/>
            <FollowingItem/>
            <FollowingItem/>
            <FollowingItem/>
            <FollowingItem/>
        </div>
    </section> )
}