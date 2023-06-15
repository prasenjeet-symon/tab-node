import { FaHeart } from 'react-icons/fa';
import styles from './SponsorItem.module.css';

export default function SponsorItem() {
  return (
    <section className={styles.sponsorItem}>
      <div>
        <div>
          <div>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          </div>
          <div>
            <div>Lorem ipsum dolor sit.</div>
            <div>Member since 23 Jan 2023</div>
          </div>
        </div>
        <div>
          <button className="outlineButton" type="button">
            <FaHeart /> <span>$5</span>
          </button>
        </div>
      </div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam repellendus enim?</div>
      <div>Sponsoring since Jul 17, 2022</div>
    </section>
  );
}
