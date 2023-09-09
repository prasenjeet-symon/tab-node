'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import Article from '@/app/home/components/Article/Article';
import NotFound from '@/app/home/components/NotFound/NotFound';
import { MArticle, MSavedArticle } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import styles from './Saved.module.css';

export default function Saved({ params }: { params: { userDocID: string } }) {
    const [saved, setSaved] = useState<MSavedArticle.ISavedArticle[]>([]);
    const [fullArticles, setFullArticles] = useState<MArticle.IArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [prevCourser, setPrevCourser] = useState<MSavedArticle.ISavedArticle | undefined>(undefined);
    const LIMIT = 10;

    const fetchSaved = async () => {
        setLoading(true);
        const database = new AppwriteDatabase();
        const savedFetched = await database.fetchSavedArticles(params.userDocID, prevCourser, LIMIT);
        setSaved(
            produce((draft) => {
                draft?.push(...savedFetched);
            })
        );

        if (savedFetched.length !== 0) setPrevCourser(savedFetched[savedFetched.length - 1]);

        const fullArticles = await Promise.all(savedFetched.map((p) => fetchFullArticle(p.doc.article.docID)));
        setFullArticles(
            produce((draft) => {
                draft.push(...fullArticles);
            })
        );

        setLoading(false);
    };

    const fetchFullArticle = async (articleDocID: string) => {
        const database = new AppwriteDatabase();
        const [fullArticle, topics] = await Promise.all([database.fetchPublishedArticleByID(articleDocID), database.fetchTopicsOfArticle(articleDocID)]);
        return { ...fullArticle, topics: topics.map((p) => p.doc.topic) } as MArticle.IArticle;
    };

    useEffect(() => {
        fetchSaved();
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className={styles.saved}>
                    {fullArticles.map((p) => {
                        return <Article key={p.id} article={p} />;
                    })}

                    {fullArticles.length === 0 ? <NotFound title="Nothing saved here" subTitle="Looks like you have not saved anything yet" action={() => {}} actionName="" image="/empty_save.svg" /> : null}

                    <div>
                        {fullArticles.length === 0 ? null : (
                            <button onClick={fetchSaved} type="button" className="outlineButton">
                                Load More
                            </button>
                        )}
                    </div>
                </section>
            )}
        </>
    );
}
