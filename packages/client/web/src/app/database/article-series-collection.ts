import { AppwriteCollection, MArticleSeries, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Role } from 'appwrite';
import Appwrite from '../appwrite';
import { AppwriteErrorReporter } from '../utils';

export class ArticleSeriesCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Add new article series */
  public async addArticleSeries(articleS: MArticleSeries.IArticleSeries) {
    try {
      const currentUser = await Appwrite.currentUserID();
      if (!currentUser) return;
      await this.database.createDocument(this.databaseID, AppwriteCollection.ARTICLE_SERIES, articleS.id, serializeAppwriteData(articleS.doc), [
        Permission.write(Role.user(currentUser)),
        Permission.delete(Role.user(currentUser)),
        Permission.update(Role.user(currentUser)),
        Permission.read(Role.any()),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Update the article series */
  public async updateArticleSeries(articleS: MArticleSeries.IArticleSeries) {
    try {
      await this.database.updateDocument(this.databaseID, AppwriteCollection.ARTICLE_SERIES, articleS.id, serializeAppwriteData(articleS.doc));
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }
}
