import { Permission, Role, Storage } from 'appwrite';
import Appwrite from '../appwrite';
import { AppwriteErrorReporter } from '../utils';

export class AppwriteStorage {
  private readonly BUCKET_ID;
  private readonly storage: Storage;
  private articleStorage: ArticleStorage;

  constructor() {
    this.BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || '';
    this.storage = Appwrite.storage();
    this.articleStorage = new ArticleStorage(this.storage, this.BUCKET_ID);
  }

  /** Upload article cover image */
  public async uploadArticleCoverImage(file: File, articleDocID: string) {
    return this.articleStorage.uploadCoverImage(file, articleDocID);
  }

  /** Delete the cover image */
  public async deleteArticleCoverImage(articleDocID: string) {
     return this.articleStorage.deleteCoverImage(articleDocID);
  }
}

class ArticleStorage {
  constructor(private storage: Storage, private BUCKET_ID: string) {}

  /** Upload new cover image */
  public async uploadCoverImage(file: File, articleDocID: string) {
    const currentUserID = await Appwrite.currentUserID();
    try {
      const res = await this.storage.createFile(this.BUCKET_ID, articleDocID, file, [Permission.read(Role.any()), Permission.update(Role.user(currentUserID)), Permission.delete(Role.user(currentUserID))]);
      const URL = this.storage.getFileView(this.BUCKET_ID, res.$id);
      return URL;
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Delete the cover */
  public async deleteCoverImage(articleDocID: string) {
    try {
      await this.storage.deleteFile(this.BUCKET_ID, articleDocID);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }
}
