import styles from './ActivityGroup.module.css';
import {FaPenAlt} from 'react-icons/fa';

export default function ActivityGroup() {
  return <section className={styles.activityGroup}>
     <div>
        <div>May 23 2023</div>
        <div><hr /></div>
     </div>
     <div>
         <div className={styles.activityGroupItem}>
            <div> <FaPenAlt/> <span> Wrote an article </span> </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
         </div>

         <div className={styles.activityGroupItem}>
            <div> <FaPenAlt/> <span> Wrote an article </span> </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
         </div>
     </div>
  </section>;
}
