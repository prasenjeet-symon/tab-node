'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import NotFound from '@/app/home/components/NotFound/NotFound';
import { MDraftedArticle } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import styles from './Drafted.module.css';
import ArticleDrafted from './components/DraftedArticle';

export default function Drafted({ params }: { params: { userDocID: string } }) {
    const [drafted, setDrafted] = useState<MDraftedArticle.IDraftedArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [prevCourser, setPrevCourser] = useState<MDraftedArticle.IDraftedArticle | undefined>(undefined);
    const LIMIT = 10;

    const fetchSaved = async () => {
        const database = new AppwriteDatabase();
        const savedFetched = await database.fetchDraftedArticles();
        if(!savedFetched) return;
        
        setDrafted(
            produce((draft) => {
                draft?.push(...savedFetched);
            })
        );

        setPrevCourser(savedFetched[savedFetched.length - 1]);
    };

    useEffect(() => {
        fetchSaved();
    }, []);

    return (
        <section className={styles.drafted}>
            {drafted.map((p) => {
                return <ArticleDrafted key={p.id} article={p} />;
            })}

            {drafted.length === 0 ? <NotFound title="Nothing created here" subTitle="Looks like you have not created anything yet" action={() => {}} actionName="" image="/empty_save.svg" /> : null}

            <div></div>
        </section>
    );
}
