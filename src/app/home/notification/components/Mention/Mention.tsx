
import { FaComment } from 'react-icons/fa';
import styles from './Mention.module.css';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Mention() {
    return ( <section className={styles.comment}>
       <div> <span><MdOutlineAlternateEmail/></span> </div>
      <div>
         <div> <img src="https://picsum.photos/200/300" alt="" /> </div>
         <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <span>Velit praesentium voluptatibus non!</span> </div>
         <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias quae alias, earum rem numquam porro aliquid vero minus dolor ducimus quidem. Vero, totam?
         </div>
         <div> 23 Jan 2023 12:00 AM </div>
      </div>
      <div>
        <GoPrimitiveDot/>
      </div>
    </section> )
}