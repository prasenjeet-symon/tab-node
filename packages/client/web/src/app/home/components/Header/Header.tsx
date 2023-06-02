import { AiFillDiff, AiOutlineMenu, AiOutlineSearch, AiTwotoneBell } from 'react-icons/ai';
import styles from './Header.module.css';

export default function Header() {
  return <section className={`${styles.header}`}>
    <section>
        <div><span><AiOutlineSearch/></span> </div>
        <div> TabNode </div>
        <div>
            <div> <AiTwotoneBell/> </div>
            <div> <img src="/profile-pic.jpg" alt="" /> </div>
            <div> <button type='button'> <AiFillDiff/> <span>Write</span> </button> </div>
        </div>
    </section>
  </section>;
}
