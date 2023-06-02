import { AiFillGithub, AiFillTwitterCircle, AiOutlineLink, AiFillLinkedin } from 'react-icons/ai';
import styles from './LinkGroup.module.css';

export default function LinkGroup() {
  return <section className={styles.linkGroup}>
     <div> <AiOutlineLink/> </div>
     <div> <AiFillGithub/> </div>
     <div> <AiFillTwitterCircle/> </div>
     <div> <AiFillLinkedin/> </div>
  </section>;
}
