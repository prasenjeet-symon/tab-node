import { AppwriteCollection, MArticle, MDraftedArticle, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import { v4 } from 'uuid';
import { AppwriteErrorReporter } from '../utils';
import { DraftedArticlesCollection } from './drafted-articles-collection';
import { UserCollection } from './user-collection';

export class ArticlesCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Add new article in publish mode */
  public async addArticleInPublishMode(article: MArticle.IArticle): Promise<void> {
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.ARTICLES, article.id, serializeAppwriteData(article.doc), [
        Permission.read(Role.any()),
        Permission.write(Role.user(article.doc.writer.docID)),
        Permission.delete(Role.user(article.doc.writer.docID)),
        Permission.update(Role.user(article.doc.writer.docID)),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Update the article in publish mode  */
  public async updateArticleInPublishMode(article: MArticle.IArticle): Promise<void> {
    try {
      await this.database.updateDocument(this.databaseID, AppwriteCollection.ARTICLES, article.id, serializeAppwriteData(article.doc));
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Delete the published article   */
  public async deleteArticleInPublishMode(article: MArticle.IArticle): Promise<void> {
    try {
      await this.database.deleteDocument(this.databaseID, AppwriteCollection.ARTICLES, article.id);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Get the published article by document id */
  public async getArticleInPublishMode(articleID: string): Promise<MArticle.IArticle | null> {
    try {
      const articleSnap = await this.database.getDocument(this.databaseID, AppwriteCollection.ARTICLES, articleID);
      return deserializeAppwriteData(articleSnap) as MArticle.IArticle;
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return null;
      throw error;
    }
  }

  /** Get n published articles at a time of given user */
  public async getWrittenArticlesInPublishedMode(userDocID: string, prevCursor: MArticle.IArticle | undefined, limit: number): Promise<MArticle.IArticle[]> {
    try {
      const articlesSnap = prevCursor
        ? await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLES, [Query.equal('writer_docID', userDocID), Query.orderDesc('createdAt'), Query.cursorAfter(prevCursor.id), Query.limit(+limit)])
        : await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLES, [Query.equal('writer_docID', userDocID), Query.orderDesc('createdAt'), Query.limit(+limit)]);

      return articlesSnap.documents.map((articleSnap) => deserializeAppwriteData(articleSnap) as MArticle.IArticle);
    } catch (error) {
      AppwriteErrorReporter.report(error);
      throw error;
    }
  }

  /** User want to publish the new article */
  public async createArticle(publishedArticle: MArticle.IArticle | null): Promise<string | undefined> {
    const draftedArticleDocID = v4();
    const loggedInUser = await new UserCollection(this.database, this.databaseID).fetchLoginUser();
    if (!loggedInUser) return;

    const draftedArticle: MDraftedArticle.IDraftedArticle = {
      id: draftedArticleDocID,
      doc: {
        article: publishedArticle
          ? publishedArticle.doc
          : {
              body: '',
              coverImage: '',
              title: '',
              articleSeries: {
                docID: '',
                name: '',
              },
              readTimeInMin: 0,
              subTitle: '',
              writer: {
                aboutMe: loggedInUser.doc.aboutMe,
                docID: loggedInUser.id,
                fullName: loggedInUser.doc.fullName,
                profilePic: loggedInUser.doc.profilePic,
              },
              createdAt: new Date(),
              updatedAt: new Date(),
              canPublishStory: true,
            },
        createdAt: new Date(),
        updatedAt: new Date(),
        originalArticle: publishedArticle
          ? {
              docID: publishedArticle.id,
              title: publishedArticle.doc.title,
            }
          : {
              docID: '',
              title: '',
            },
      },
    };

    // create new drafted article
    await new DraftedArticlesCollection(this.database, this.databaseID).createDraftArticle(draftedArticle);
    return draftedArticleDocID;
  }

  /** Publish the drafted article */
  public async publishDraftedArticle(draftedArticle: MDraftedArticle.IDraftedArticle): Promise<void> {
    if (draftedArticle.doc.originalArticle?.docID) {
      // delete the drafted article and then update the connected original article
      await new DraftedArticlesCollection(this.database, this.databaseID).deleteDraftArticle(draftedArticle);
      const updatedOriginalArticle: MArticle.IArticle = {
        id: draftedArticle.doc.originalArticle.docID,
        doc: draftedArticle.doc.article,
      };
      await this.updateArticleInPublishMode(updatedOriginalArticle);
    } else {
      // delete the drafted article and then add the new article in publish mode
      await new DraftedArticlesCollection(this.database, this.databaseID).deleteDraftArticle(draftedArticle);
      const newArticle: MArticle.IArticle = {
        id: draftedArticle.id,
        doc: draftedArticle.doc.article,
      };
      await this.addArticleInPublishMode(newArticle);
    }
  }
}
