'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MArticle, MArticleLike, MArticleTopicRelationship, MSavedArticle, getHumanReadableDate } from '@tabnode/utils';
import * as DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import styles from './Article.module.css';
import ArticleActions from './components/ArticleActions/ArticleActions';
import Comments from './components/Comments/Comments';

function extractHtmlData(body: any) {
    return body ? body.split('==========markdown==========')[1] : '';
}

export default function ArticlePage({ params }: { params: { articleDocID: string } }) {
    const [article, setArticle] = useState<MArticle.IArticle>();
    const [topics, setTopics] = useState<MArticleTopicRelationship.IArticleTopicRelationship[]>([]);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [sanitizedHeading, setSanitizedHeading] = useState<string>();
    const [sanitizedSubHeading, setSanitizedSubHeading] = useState<string>();
    const [sanitizedBody, setSanitizedBody] = useState<string>();
    const router = useRouter();

    /** Fetch the article */
    useEffect(() => {
        const fetchArticle = async () => {
            const database = new AppwriteDatabase();
            const articleFetched = await database.fetchPublishedArticleByID(params.articleDocID);
            if (!articleFetched) return;
            setArticle((prev) => {
                return articleFetched;
            });

            renderArticle(articleFetched);
        };

        const fetchArticleTopics = async () => {
            const database = new AppwriteDatabase();
            const topicsFetched = await database.fetchTopicsOfArticle(params.articleDocID);
            setTopics((prev) => {
                return topicsFetched;
            });
        };

        const isLikedByLoggedInUser = async () => {
            const database = new AppwriteDatabase();
            const liked = await database.isLikedByUserArticle(params.articleDocID);
            setIsLiked(!!liked);
        };

        const isSavedByLoggedInUser = async () => {
            const database = new AppwriteDatabase();
            const saved = await database.isSavedByUserArticle(params.articleDocID);
            setIsSaved(!!saved);
        };

        Promise.all([fetchArticle(), fetchArticleTopics(), isLikedByLoggedInUser(), isSavedByLoggedInUser()]);
    }, []);

    const navigateToWriter = () => {
        if (!article) return;
        router.push(`/home/profile/${article.doc.writer.docID}`);
    };

    const renderArticle = (article: MArticle.IArticle) => {
        const sanitizedHeading = DOMPurify.sanitize(article.doc.title);
        const sanitizedSubHeading = DOMPurify.sanitize(article.doc.subTitle);
        const sanitizedBody = DOMPurify.sanitize(extractHtmlData(article.doc.body));
        setSanitizedHeading(sanitizedHeading);
        setSanitizedSubHeading(sanitizedSubHeading);
        setSanitizedBody(sanitizedBody);

        // Highlighting code
        setTimeout(() => {
            hljs.highlightAll();
        }, 1000);
    };

    const likeArticle = async () => {
        if (!article) return;
        setIsLiked(!isLiked);

        const database = new AppwriteDatabase();
        const isLikedFetched = await database.isLikedByUserArticle(params.articleDocID);
        if (isLikedFetched) {
            // delete the like
            return;
        } else {
            const currentUser = await database.fetchLoginUser();
            if (!currentUser) return;
            // add new like
            const like: MArticleLike.IArticleLike = {
                id: v4(),
                doc: {
                    article: {
                        docID: article.id,
                        title: article.doc.title,
                    },
                    createdAt: new Date(),
                    likedBy: {
                        aboutMe: currentUser.doc.aboutMe,
                        docID: currentUser.id,
                        fullName: currentUser.doc.fullName,
                        profilePic: currentUser.doc.profilePic,
                    },
                    status: 'LIKED',
                    updatedAt: new Date(),
                },
            };

            await database.addLikeDislike(like);
        }
    };

    const saveArticle = async () => {
        if (!article) return;
        setIsSaved(!isSaved);

        const database = new AppwriteDatabase();
        const isSavedFetched = await database.isSavedByUserArticle(params.articleDocID);
        if (isSavedFetched) {
            // delete the saved article
            return;
        } else {
            // add new saved
            const currentUser = await database.fetchLoginUser();
            if (!currentUser) return;
            const saved: MSavedArticle.ISavedArticle = {
                id: v4(),
                doc: {
                    article: {
                        docID: article.id,
                        title: article.doc.title,
                    },
                    createdAt: new Date(),
                    savedBy: {
                        aboutMe: currentUser.doc.aboutMe,
                        docID: currentUser.id,
                        fullName: currentUser.doc.fullName,
                        profilePic: currentUser.doc.profilePic,
                    },
                    updatedAt: new Date(),
                    writer: article.doc.writer,
                },
            };

            await database.saveArticle(saved);
        }
    };

    return (
        <>
            <section className={`${styles.contentArticleWrapper}`}>
                <div className="contentArticle">
                    {/* Tags */}
                    <div className="tags">
                        {topics.map((topic) => {
                            return (
                                <button key={topic.id} className="tagButton" type="button">
                                    {topic.doc.topic.name}
                                </button>
                            );
                        })}
                    </div>

                    {/*Heading  */}
                    <div dangerouslySetInnerHTML={{ __html: sanitizedHeading ? sanitizedHeading : '' }} className="heading"></div>
                    {/* Sub heading */}
                    <div dangerouslySetInnerHTML={{ __html: sanitizedSubHeading ? sanitizedSubHeading : '' }} className="subHeading"></div>
                    {/* Author  */}
                    <div onClick={navigateToWriter} style={{ cursor: 'pointer' }} className="authorBlog">
                        <div>
                            <img src={article?.doc.writer.profilePic} alt="" />
                        </div>
                        <div>
                            <div>{article?.doc.writer.fullName}</div>
                            <div>{getHumanReadableDate(article ? article?.doc.createdAt : new Date())}</div>
                        </div>
                    </div>

                    {/* Cover Image */}
                    <div className="coverImage">
                        <img src={article?.doc.coverImage ? article.doc.coverImage : ''} alt="" />
                    </div>

                    {/* Body  */}
                    <div dangerouslySetInnerHTML={{ __html: sanitizedBody ? sanitizedBody : '' }} className="body"></div>

                    {/*List all the root comments here  */}
                    <div className={styles.commentRoot}>
                        <div>Comments</div>
                        <div>{article ? <Comments articleDocID={article.id} articleTitle={article.doc.title} parentDocID={''} writer={article.doc.writer} /> : null}</div>
                    </div>
                </div>

                <ArticleActions isLiked={isLiked} isSaved={isSaved} like={likeArticle} save={saveArticle}></ArticleActions>
            </section>
        </>
    );
}
