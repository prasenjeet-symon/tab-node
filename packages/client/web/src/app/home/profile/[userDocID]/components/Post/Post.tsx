'use client';

import styles from './Post.module.css'
import {AiFillLike , AiTwotoneEye, AiOutlineComment} from 'react-icons/ai';
import { MArticle, calculateReadingTime, getHumanReadableDate } from '@tabnode/utils';
import { useRouter } from 'next/navigation';

export default function Post({ post }:  { post: MArticle.IArticle }) {
    const router = useRouter();

    const navToFullArticle = ()=>{
        router.push(`/home/article/${post.id}`);
    }

    return ( 
        <div className={styles.post}>
            <div><img src={post.doc.coverImage} alt={post.doc.title} /></div>
            <div onClick={navToFullArticle}>
                <div>
                    <div>{post.doc.writer.fullName}</div>
                    <div>{getHumanReadableDate(post.doc.createdAt)}</div>
                </div>
                <div>{post.doc.title}</div>
                <div>
                    { post.topics ? post.topics.map(topic => <button key={topic.docID} type='button' className='tagButton'>{topic.name}</button>)  :null }
                </div>
                <div>
                    <div>
                        <button type='button' className='likeButton'> <AiFillLike/> <span> {post.likesCount || 0} Likes</span> </button>
                        <button type='button' className='likeButton'> <AiTwotoneEye/> <span> 10 Views</span> </button>
                        <button type='button' className='likeButton'> <AiOutlineComment/> <span> {post.commentsCount || 0} Comments</span> </button>
                    </div>
                    <div> { calculateReadingTime(post.doc.body) } Min Read</div>
                </div>
            </div>
        </div>
     )
}