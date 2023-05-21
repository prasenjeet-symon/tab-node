import styles from './ProfileHeader.module.css';
import {MdLocationOn, MdCake} from 'react-icons/md'

export default function ProfileHeader() {
  return (
    <section className={styles.profileHeader}>
      <div>
        <img src="/profile-pic.jpg" alt="" />
      </div>
      <div>Lorem, ipsum dolor.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, id.</div>
      <div>
         <div> <span> <MdLocationOn/> </span> <span>India, Bihar</span> </div>
         <div> <span> <MdCake/> </span> <span>Joined on Mar 23 2023</span>  </div>
      </div>
    </section>
  );
}
