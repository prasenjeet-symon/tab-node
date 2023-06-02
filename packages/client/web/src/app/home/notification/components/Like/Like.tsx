import { FaHeart } from 'react-icons/fa';
import styles from './Like.module.css';
import { GoPrimitiveDot } from 'react-icons/go';

export default function Like() {
  return (
    <section className={styles.like}>
      <div> <span><FaHeart/></span> </div>
      <div>
         <div> <img src="https://picsum.photos/200/300" alt="" /> </div>
         <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit praesentium voluptatibus non!</div>
         <div> 23 Jan 2023 02:23 AM </div>
      </div>
      <div>
        <GoPrimitiveDot/>
      </div>
    </section>
  );
}
