import { AppwriteCollection, MArticle, MArticleRelationSuggestion, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import { v4 } from 'uuid';
import { AppwriteErrorReporter } from '../utils';
import { UserCollection } from './user-collection';
// This is not editable by the user
/** This is like the personalized feed of the logged in user  */
export class UserArticleSuggestionsCollection {
    constructor(private database: Databases, private databaseID: string) {}

    /** Fetch n suggested posts at a time of logged in user with pagination */
    public async fetchSuggestedArticles(userDocID: string, prevCursor: MArticleRelationSuggestion.IArticleRelationSuggestion | undefined, limit: number) {
        try {
            const snap = prevCursor
                ? await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, [Query.equal('for_docID', userDocID), Query.equal('isStale', false), Query.orderDesc('boostPoint'), Query.cursorAfter(prevCursor.id), Query.limit(+limit)])
                : await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, [Query.equal('for_docID', userDocID), Query.equal('isStale', false), Query.orderDesc('boostPoint'), Query.limit(+limit)]);

            return snap.documents.map((p) => {
                return deserializeAppwriteData(p) as MArticleRelationSuggestion.IArticleRelationSuggestion;
            });
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
            throw error;
        }
    }

    /** Fetch single suggested article given article id */
    public async fetchSuggestedArticle(userDocID: string, articleID: string) {
        try {
            const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, [Query.equal('for_docID', userDocID), Query.equal('article_docID', articleID), Query.limit(1)]);
            if (snap.documents.length === 0) return undefined;
            return deserializeAppwriteData(snap.documents[0]) as MArticleRelationSuggestion.IArticleRelationSuggestion;
        } catch (error) {
            AppwriteErrorReporter.report(error);
            if (AppwriteErrorReporter.isDocumentNotFound(error)) return undefined;
            throw error;
        }
    }

    /** Increase impression count of the suggested article */
    public async increaseImpressionCountSuggestedArticle(suggestArticle: MArticleRelationSuggestion.IArticleRelationSuggestion) {
        try {
            await this.database.updateDocument(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, suggestArticle.id, { boostPoint: suggestArticle.doc.boostPoint - 1, impressionCount: suggestArticle.doc.impressionCount + 1, updatedAt: new Date() });
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Mark suggested article stale */
    public async markSuggestedArticleStale(suggestArticle: MArticleRelationSuggestion.IArticleRelationSuggestion) {
        try {
            await this.database.updateDocument(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, suggestArticle.id, { isStale: true, updatedAt: new Date() });
        } catch (error) {
            AppwriteErrorReporter.report(error);
        }
    }

    /** Article clicked  */
    public async articleClicked(article: MArticle.IArticle) {
        const user = await new UserCollection(this.database, this.databaseID).fetchLoginUser();
        if (!user) return;
        const oldSuggestion = await this.fetchSuggestedArticle(user.id, article.id);
        if (!oldSuggestion) {
            // create new one
            const articleSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion = {
                id: v4(),
                doc: {
                    article: { docID: article.id, title: article.doc.title },
                    boostPoint: 0,
                    createdAt: new Date(),
                    for: {
                        aboutMe: user.doc.aboutMe,
                        docID: user.id,
                        fullName: user.doc.fullName,
                        profilePic: user.doc.profilePic,
                    },
                    impressionCount: 0,
                    isStale: true,
                    updatedAt: new Date(),
                },
            };

            await this.database.createDocument(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, articleSuggestion.id, serializeAppwriteData(articleSuggestion.doc), [
                Permission.write(Role.user(articleSuggestion.doc.for.docID)),
                Permission.delete(Role.user(articleSuggestion.doc.for.docID)),
                Permission.update(Role.user(articleSuggestion.doc.for.docID)),
                Permission.read(Role.user(articleSuggestion.doc.for.docID)),
            ]);
        } else {
            // mark stable
            await this.database.updateDocument(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, oldSuggestion.id, { isStale: true, updatedAt: new Date() });
        }
    }
}
