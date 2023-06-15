'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MArticle } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import styles from './ProfilePage.module.css';
import Post from './components/Post/Post';
import NotFound from '../../components/NotFound/NotFound';

export default function ProfilePage({ params }: { params: { userDocID: string } }) {
    const [posts, setPosts] = useState<MArticle.IArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [prevCourser, setPrevCourser] = useState<MArticle.IArticle | undefined>(undefined);
    const LIMIT = 10;

    const fetchArticleTopics = async (article: MArticle.IArticle) => {
        const database = new AppwriteDatabase();
        const topics = await database.fetchTopicsOfArticle(article.id);
        return topics.map((p) => p.doc.topic);
    };

    const fetchArticleLikes = async (article: MArticle.IArticle) => {
        const database = new AppwriteDatabase();
        const likes = await database.fetchNumberOfLikes(article.id, 'LIKED');
        return likes;
    };

    const fetchArticleComments = async (article: MArticle.IArticle) => {
        const database = new AppwriteDatabase();
        const comments = await database.fetchCommentsCount(article.id);
        return comments;
    };

    const fetchPosts = async () => {
        setLoading(true);
        const database = new AppwriteDatabase();
        const posts = await database.fetchPublishedArticles(params.userDocID, prevCourser, LIMIT);
        setPosts(
            produce((draft) => {
                draft.push(...posts);
            })
        );

        const finalPost = await Promise.all(
            posts.map(async (p) => {
                const [likesC, commentsC, topics] = await Promise.all([fetchArticleLikes(p), fetchArticleComments(p), fetchArticleTopics(p)]);

                return { ...p, likesCount: likesC, commentsCount: commentsC, topics: topics } as MArticle.IArticle;
            })
        );

        await Promise.all(finalPost);
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className={styles.profilePage}>
            {/* list all the posted posts  */}
            {posts.map((p) => {
                return <Post key={p.id} post={p} />;
            })}

            {posts.length === 0 ? <NotFound image='/no_posts_posted.svg' title="No posts found" subTitle="Looks like you have not posted anything yet" action={() => {}} actionName="" /> : null}

            {/* Load more button  */}
            {posts.length > 0 && !loading ? (
                <button className="loadMoreButton" type="button" onClick={fetchPosts}>
                    Load More
                </button>
            ) : null}
        </section>
    );
}
