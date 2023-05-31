import { Databases, Permission, Query, Role } from 'appwrite';
import Appwrite from '../appwrite';
import { AppwriteCollection, MArticleTopicRelationship } from '../database-type';
import { AppwriteErrorReporter, deserializeAppwriteData, serializeAppwriteData } from '../utils';

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
      const result = await this.database.listDocuments(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [
        Query.equal('article_docID', articleDocID),
        Query.orderDesc('trend_boostPoint'),
      ]);

      return result.documents.map((p) => {
        return deserializeAppwriteData(p) as MArticleTopicRelationship.IArticleTopicRelationship;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
