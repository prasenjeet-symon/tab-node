import styles from './FollowingItem.module.css';

export default function FollowingItem() {
    return ( <section className={styles.followingItem}>
        <div><img src="https://github.com/diego3g.png" alt=""  /></div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam soluta nam sequi.</div>
        <div> <button className='filledButton' type='button'> Following </button> </div>
    </section> )
}