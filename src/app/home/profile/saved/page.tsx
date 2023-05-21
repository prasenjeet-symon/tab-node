import styles from './Saved.module.css';
import Article from '../../components/Article/Article';

export default function Saved() {
  return ( <section className={styles.saved}>
    <Article/>
    <Article/>
    <Article/>
  </section> )
}
