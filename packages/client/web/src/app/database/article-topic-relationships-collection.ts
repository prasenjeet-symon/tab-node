import { AppwriteCollection, MArticle, MArticleTopicRelationship, MTopic, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import Appwrite from '../appwrite';
import { AppwriteErrorReporter } from '../utils';
import { ArticlesCollection } from './articles-collection';
import { UserArticleSuggestionsCollection } from './user-article-suggestions-collection';
import { UserTopicRelationshipsCollection } from './user-topic-relationships-collection';

/** This collection holds all the topics a article is published in */
export class ArticleTopicRelationshipCollection {
    constructor(private database: Databases, private databaseID: string) {}

    /** Add new topic to the article  */
    public async addNewTopic(aTopicRelation: MArticleTopicRelationship.IArticleTopicRelationship) {
        try {
            const currentUser = await Appwrite.currentUser();
            await this.database.createDocument(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, aTopicRelation.id, serializeAppwriteData(aTopicRelation.doc), [
                Permission.write(Role.user(currentUser.$id)),
                Permission.delete(Role.user(currentUser.$id)),
                Permission.update(Role.user(currentUser.$id)),
                Permission.read(Role.any()),
            ]);
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Delete topic from the article */
    public async deleteTopic(aTopicRelation: MArticleTopicRelationship.IArticleTopicRelationship) {
        try {
            await this.database.deleteDocument(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, aTopicRelation.id);
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Fetch all the topics of given article */
    public async fetchTopics(articleDocID: string) {
        try {
            const result = await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('article_docID', articleDocID), Query.orderDesc('trend_boostPoint')]);

            return result.documents.map((p) => {
                return deserializeAppwriteData(p) as MArticleTopicRelationship.IArticleTopicRelationship;
            });
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
            throw error;
        }
    }

    /** Fetch n best top articles */
    public async fetchBestArticles(prevCursor: (MArticleTopicRelationship.IArticleTopicRelationship | undefined)[], n: number) {
        const userID = await Appwrite.currentUserID();
        const userTopics = await new UserTopicRelationshipsCollection(this.database, this.databaseID).fetchTopics(userID);
        const topics = userTopics.map((t) => t.doc.topic);

        const bestArticleTopic = async (topic: MTopic.STopic) => {
            const thisTopicCursor = prevCursor.find((p) => p?.doc.topic.docID === topic.docID);

            const result = thisTopicCursor
                ? await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('topic_docID', topic.docID), Query.orderDesc('trend_boostPoint'), Query.cursorAfter(thisTopicCursor.id), Query.limit(+n)])
                : await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('topic_docID', topic.docID), Query.orderDesc('trend_boostPoint'), Query.limit(+n)]);
            return result.documents.map((p) => {
                return deserializeAppwriteData(p) as MArticleTopicRelationship.IArticleTopicRelationship;
            });
        };

        const allArticlesOfTopics = await Promise.all(topics.map(bestArticleTopic));
        const allArticles = allArticlesOfTopics.reduce((acc, curr) => {
            return [...acc, ...curr];
        }, []);

        const uniqueArticles = allArticles.filter((a, i, arr) => {
            return arr.findIndex((b) => b.doc.article.docID === a.doc.article.docID) === i;
        });

        // remove already suggested one
        const finalArticle = (
            await Promise.all(
                uniqueArticles.map(async (articleU) => {
                    const isSuggested = await new UserArticleSuggestionsCollection(this.database, this.databaseID).fetchSuggestedArticle(userID, articleU.doc.article.docID);
                    if (isSuggested) {
                        return isSuggested.doc.isStale ? articleU : null;
                    } else {
                        return articleU;
                    }
                })
            )
        ).filter((p) => p !== null) as MArticleTopicRelationship.IArticleTopicRelationship[];

        const fullArticles = (
            await Promise.all(
                finalArticle.map(async (p) => {
                    const articles = await new ArticlesCollection(this.database, this.databaseID).getArticleInPublishMode(p.doc.article.docID);
                    return articles;
                })
            )
        ).filter((p) => p !== null) as MArticle.IArticle[];

        const cursors = allArticlesOfTopics.map((p) => {
            if (p.length === 0) {
                const oldCursor = prevCursor.find((c) => c?.doc.topic.docID === p[0].doc.topic.docID);
                return oldCursor;
            } else {
                return p[p.length - 1];
            }
        });

        return { fullArticles, cursors };
    }
}
