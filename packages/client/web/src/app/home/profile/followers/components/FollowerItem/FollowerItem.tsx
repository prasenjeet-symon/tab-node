import styles from './FollowerItem.module.css';

export default function FollowerItem() {
  return <section className={styles.followerItem}>
    <div> <img alt='' src="https://picsum.photos/200"/> </div>
    <div>Lorem ipsum dolor sit.</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, maiores architecto.</div>
    <div><button className="filledButton" type='button'> Following </button></div>
  </section>;
}
