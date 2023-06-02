import styles from './Post.module.css'
import {AiFillLike , AiTwotoneEye, AiOutlineComment} from 'react-icons/ai';

export default function Post() {
    return ( 
        <div className={styles.post}>
            <div><img src="/profile-pic.jpg" alt="" /></div>
            <div>
                <div>
                    <div>Lorem ipsum dolor sit.</div>
                    <div>23 Jan 2023</div>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                <div>
                    <button type='button' className='tagButton'>Lorem, ipsum dolor.</button>
                    <button type='button' className='tagButton'>Lorem, ipsum dolor.</button>
                    <button type='button' className='tagButton'>Lorem, ipsum dolor.</button>
                </div>
                <div>
                    <div>
                        <button type='button' className='likeButton'> <AiFillLike/> <span> 2 Likes</span> </button>
                        <button type='button' className='likeButton'> <AiTwotoneEye/> <span> 10 Views</span> </button>
                        <button type='button' className='likeButton'> <AiOutlineComment/> <span> 7 Comments</span> </button>
                    </div>
                    <div> 2 Min Read</div>
                </div>
            </div>
        </div>
     )
}