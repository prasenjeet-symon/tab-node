/** User to topic relation holds all the suggested topics a user might be interested in as well as all the stable topics too */

import { AppwriteCollection, MUserTopicRelationship, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteErrorReporter } from '../utils';

export class UserTopicRelationshipsCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Add a new topic to the user's topic relationships collection  */
  public async addTopic(uTopicRelation: MUserTopicRelationship.IUserTopicRelationship): Promise<void> {
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, uTopicRelation.id, serializeAppwriteData(uTopicRelation.doc), [
        Permission.write(Role.user(uTopicRelation.doc.user.docID)),
        Permission.delete(Role.user(uTopicRelation.doc.user.docID)),
        Permission.update(Role.user(uTopicRelation.doc.user.docID)),
        Permission.read(Role.any()),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Remove a topic from the user's topic relationships collection   */
  public async removeTopic(uTopicRelation: MUserTopicRelationship.IUserTopicRelationship): Promise<void> {
    try {
      await this.database.deleteDocument(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, uTopicRelation.id);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch all the topics related to a user */
  public async fetchTopics(userDocID: string): Promise<MUserTopicRelationship.IUserTopicRelationship[]> {
    try {
      const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [
        Query.equal('user_docID', userDocID),
        Query.orderDesc('trend_boostPoint'),
      ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p) as MUserTopicRelationship.IUserTopicRelationship;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }

  /** Fetch all the topics user might be interested in */
  public async fetchSuggestedTopics(userDocID: string): Promise<MUserTopicRelationship.IUserTopicRelationship[]> {
    try {
      const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [
        Query.equal('user_docID', userDocID),
        Query.equal('isStable', false),
        Query.orderDesc('trend_boostPoint'),
      ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p) as MUserTopicRelationship.IUserTopicRelationship;
      });
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
