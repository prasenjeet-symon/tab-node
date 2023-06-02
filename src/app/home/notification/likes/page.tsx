import Like from "../components/Like/Like";
import styles from './Likes.module.css';

export default function Likes() {
  return <section className={styles.likes}>
    <div>Likes Notifications</div>
    <div>
        <Like/>
        <Like/>
        <Like/>
        <Like/>
        <Like/>
        <Like/>
    </div>
  </section>;
}
