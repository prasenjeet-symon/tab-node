'use client';

import { MArticle, MArticleRelationSuggestion, MArticleTopicRelationship } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import AppwriteDatabase from '../database/appwrite-database';
import styles from './HomePage.module.css';
import Article from './components/Article/Article';
import MayFollow from './components/MayFollow/MayFollow';
import NotFound from './components/NotFound/NotFound';
import ReadingList from './components/ReadingList/ReadingList';
import Stories from './components/Stories/Stories';

export default function HomePage() {
    const [bestArticle, setBestArticles] = useState<MArticle.IArticle[]>([]);
    const [suggestedArticles, setSuggestedArticles] = useState<MArticleRelationSuggestion.IArticleRelationSuggestion[]>([]);
    const [suggestedFullArticles, setSuggestedFullArticles] = useState<MArticle.IArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isReachedEnd, setIsReachedEnd] = useState(false);
    const [prevCursor, setPrevCursor] = useState<(MArticleTopicRelationship.IArticleTopicRelationship | undefined)[]>([]);

    // fetch best articles
    const fetchBestArticles = async () => {
        const database = new AppwriteDatabase();
        const bestArticlesFetched = await database.fetchBestArticles(prevCursor, 5);
        setBestArticles(
            produce((draft) => {
                draft.push(...bestArticlesFetched.fullArticles);
            })
        );

        if (bestArticlesFetched.fullArticles.length === 0) {
            setIsReachedEnd(true);
        }

        setPrevCursor(bestArticlesFetched.cursors);
    };

    const fetchSuggestedArticles = async () => {
        const database = new AppwriteDatabase();
        const currentUser = await database.fetchLoginUser();
        if (!currentUser) return;
        const suggestedArticlesFetched = await database.fetchSuggestedPosts(currentUser.id, undefined, 5);
        setSuggestedArticles(suggestedArticlesFetched);
        const fullArticlesFetched = await Promise.all(suggestedArticlesFetched.map((p) => database.fetchPublishedArticleByID(p.doc.article.docID)));
        setSuggestedFullArticles(fullArticlesFetched.filter((p) => p !== null) as MArticle.IArticle[]);
    };

    useEffect(() => {
        Promise.all([fetchBestArticles(), fetchSuggestedArticles()]);

        const timer = setTimeout(async () => {
            const database = new AppwriteDatabase();
            await Promise.all(suggestedArticles.map((p) => database.updateArticleSuggestionViewCount(p)));
        }, 2000); // update view count after 2 seconds

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <section className={styles.homePage}>
                <section>
                    {/* Home page stories */}
                    <div className={styles.searchAndStories}>
                        <div></div>
                        <div>
                            <Stories />
                        </div>
                    </div>

                    {/* Articles starts here */}
                    <section className={styles.articlesWrapper}>
                        <div>
                            <div>{suggestedFullArticles.length + bestArticle.length > 0 ? 'Articles' : null} </div>
                            <div></div>
                        </div>
                        <div>
                            {/* List suggested articles */}
                            {suggestedFullArticles.map((p) => {
                                return <Article key={p.id} article={p} />;
                            })}
                            {/* List all the best articles  */}
                            {bestArticle.map((p) => {
                                return <Article key={p.id} article={p} />;
                            })}

                            {suggestedArticles.length + bestArticle.length !== 0  && !isReachedEnd? (
                                <div>
                                    <button onClick={fetchBestArticles} type="button" className="outlineButton">
                                        Load More
                                    </button>
                                </div>
                            ) : null}
                        </div>
                        {suggestedArticles.length + bestArticle.length === 0 ? <NotFound actionName={''} action={() => {}} image="home_no_articles.svg" subTitle="Looks like we don't have any articles for you yet! Start by creating one!" title="No Articles Found" /> : null}
                    </section>
                </section>
                <section>
                    <MayFollow />
                    <ReadingList />
                </section>
            </section>
        </>
    );
}
