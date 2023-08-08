import { AppwriteCollection, MArticleStory, MArticleStoryDistribution, deserializeAppwriteData } from '@tabnode/utils';
import { Databases, Query } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';
import { ArticleStoriesCollection } from './article-stories-collection';

export class ArticleStoryDistributionCollection {
    constructor(private database: Databases, private databaseID: string) {}

    /** Fetch all the active stories of logged in user */
    public async fetchAllActiveStories(userDocID: string): Promise<{
        [key: string]: {
            story: MArticleStory.IArticleStory | null;
            id: string;
            doc: MArticleStoryDistribution.DArticleStoryDistribution;
        }[];
    }> {
        try {
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, [Query.equal('for_docID', userDocID), Query.lessThanEqual('expireAt', new Date().toISOString()), Query.orderDesc('boostPoint')]);

            const stories = snap.documents.map((p) => {
                return deserializeAppwriteData(p);
            }) as MArticleStoryDistribution.IArticleStoryDistribution[];

            // Fill with actual stories
            const finalStories = await Promise.all(
                stories.map(async (storyDistro) => {
                    const story = await new ArticleStoriesCollection(this.database, this.databaseID).fetchSingleStory(storyDistro.doc.story.docID);
                    return { ...storyDistro, story: story };
                })
            );

            // group the stories by userDocID
            const groupedStories = finalStories.reduce(
                (acc, cur) => {
                    const userDocId = cur.story ? cur.story.doc.user.docID : undefined;
                    if (!userDocId) return acc;

                    if (!acc[userDocId]) acc[userDocId] = [];
                    acc[userDocId].push(cur);
                    return acc;
                },
                {} as {
                    [key: string]: {
                        story: MArticleStory.IArticleStory | null;
                        id: string;
                        doc: MArticleStoryDistribution.DArticleStoryDistribution;
                    }[];
                }
            );

            return groupedStories;
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return {};
            throw error;
        }
    }

    /** Mark story as seen */
    public async markStoryAsSeen(story: MArticleStoryDistribution.IArticleStoryDistribution) {
        try {
            await this.database.updateDocument(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, story.id, {
                isSeen: true,
            });
        } catch (error) {
            AppwriteErrorReporter.report(error);
            throw error;
        }
    }

    /** Fetch all the story viewers */
    public async fetchAllStoryViewers(story: MArticleStory.IArticleStory): Promise<MArticleStoryDistribution.IArticleStoryDistribution[]> {
        try {
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, [Query.equal('story_docID', story.id), Query.equal('isSeen', true), Query.orderDesc('boostPoint')]);

            return snap.documents.map((p) => {
                return deserializeAppwriteData(p);
            }) as MArticleStoryDistribution.IArticleStoryDistribution[];
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
            throw error;
        }
    }
}
