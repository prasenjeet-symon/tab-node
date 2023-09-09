import { AiFillLike, AiFillSave, AiOutlineLike } from 'react-icons/ai';
import styles from './ArticleActions.module.css';
import { FiBookmark } from 'react-icons/fi';
import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

export default function ArticleActions({ isLiked, isSaved, like, save }: { isLiked: boolean; isSaved: boolean; like: () => void; save: () => void }) {
   return (
    <>
    <section className={styles.actions}>
        {  isLiked ? <button title='Like' type='button'> <AiFillLike/></button> : <button onClick={like} title='Like' type='button'> <AiOutlineLike/></button> } 
        { isSaved ? <button onClick={save} title='Save' type='button'><FaBookmark/></button> : <button onClick={save} title='Save' type='button'><FaRegBookmark/></button>  }    
    </section>
    </>
   )
}
