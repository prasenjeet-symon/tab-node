import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteCollection, MArticleReader } from '../database-type';
import { AppwriteErrorReporter, deserializeAppwriteData, serializeAppwriteData } from '../utils';

export class ArticleReadersCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Add new user to article */
  public async addNewReader(reader: MArticleReader.IArticleReader) {
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.ARTICLE_READERS, reader.id, serializeAppwriteData(reader.doc), [
        Permission.write(Role.user(reader.doc.reader.docID)),
        Permission.delete(Role.user(reader.doc.reader.docID)),
        Permission.read(Role.any()),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch the article readers of given article */
  public async fetchReaders(articleDocID: string) {
    try {
      const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLE_READERS, [
        Query.equal('article_docID', articleDocID),
        Query.orderDesc('createdAt'),
      ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p);
      }) as MArticleReader.IArticleReader[];
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
