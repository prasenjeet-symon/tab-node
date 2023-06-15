'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MSavedArticle, getHumanReadableDate } from '@tabnode/utils';
import { produce } from 'immer';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './ReadingList.module.css';

export default function ReadingList() {
    const [savedArticles, setSavedArticles] = useState<MSavedArticle.ISavedArticle[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const router = useRouter();

    const navToFullArticle = (article: MSavedArticle.ISavedArticle) => {
        router.push(`/home/article/${article.doc.article.docID}`);
    };

    useEffect(() => {
        const fetchReadingList = async () => {
            const database = new AppwriteDatabase();
            const currentUser = await database.fetchLoginUser();
            if (!currentUser) return;
            const readingListFetched = await database.fetchSavedArticles(currentUser.id, undefined, 5);
            setSavedArticles(
                produce((draft) => {
                    draft.push(...readingListFetched);
                })
            );
        };

        fetchReadingList();
    }, []);

    return (
        <div className={styles.readingList}>
            <div>My Reading List</div>
            <div>
                {/* list all reading list here */}
                {savedArticles.map((article, index) => {
                    return (
                        <div style={{ cursor: 'pointer' }}  onClick={() => navToFullArticle(article)} key={article.id} className={styles.readingListItem}>
                            <div>{article.doc.article.title}</div>
                            <div>
                                <div>{article.doc.writer.fullName}</div>
                                <div>{getHumanReadableDate(article.doc.createdAt)}</div>
                            </div>
                        </div>
                    );
                })}

                {savedArticles.length === 0 ? <div>No reading list yet</div> : null}
            </div>
        </div>
    );
}
