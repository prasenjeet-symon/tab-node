import { FaHeart } from 'react-icons/fa';
import styles from './SponsoringItem.module.css';

export default function SponsoringItem() {
    return ( <section className={styles.sponsoringItem}>
        <div>
            <div>
                <div><img src="https://www.w3schools.com/howto/img_avatar.png" alt="" /></div>
                <div>
                    <div>Lorem ipsum dolor sit.</div>
                    <div>Member since 23 Jan 2023</div>
                </div>
            </div>
            <div><button className='filledButton' type='button'> <FaHeart/> <span>Sponsoring</span></button></div>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam repellendus enim?</div>
        <div>Sponsoring since Jul 17, 2022</div>
    </section> )
}