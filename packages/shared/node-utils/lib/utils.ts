import { AppwriteCollection, MArticleDistribution, MArticleRelationSuggestion, MTopic, MUserTopicRelationship, deserializeAppwriteData, getUsersCountForArticleSuggestion, serializeAppwriteData } from '@tabnode/utils';
import { AppwriteException, Client, Databases, Permission, Query, Role } from 'node-appwrite';

/** Init the nodejs appwrite client */
export class AppwriteNodeJsClient {
  private client: Client;
  private databaseInstance!: Databases;

  constructor() {
    this.client = new Client();
    // set the config
    this.client
      .setEndpoint(process.env.APPWRITE_ENDPOINT || '') // Your API Endpoint
      .setProject(process.env.APPWRITE_PROJECT_ID || '') // Your project ID
      .setKey(process.env.APPWRITE_API_KEY || ''); // Your secret API key
  }

  public database() {
    this.databaseInstance = new Databases(this.client);
    return this.databaseInstance;
  }

  public databaseID() {
    return process.env.APPWRITE_DATABASE_ID || '';
  }
}

export abstract class AppwriteErrorReporterNodeJs {
  public static report(error: any) {
    if (error instanceof AppwriteException) {
      // Handle the error as an AppwriteException
      console.error('AppwriteExceptionReport:', error.message);
    } else {
      // Handle other types of errors
      console.error('Other error:', error);
    }
  }

  public static isDocumentNotFound(error: any) {
    if (error instanceof AppwriteException) {
      return error.code === 404;
    } else {
      return false;
    }
  }
}

export async function fetchFullTopic(topicID: string, database: Databases, databaseID: string) {
  try {
    const snap = await database.getDocument(databaseID, AppwriteCollection.TOPICS, topicID);
    return deserializeAppwriteData(snap) as MTopic.ITopic;
  } catch (error) {
    AppwriteErrorReporterNodeJs.report(error);
    if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return null;
    return null;
  }
}

/** Fetch all users related to given topic */
export async function fetchAllUserRelatedToTopic(phase: number, topic: MTopic.ITopic, lastUserID: string, sortType: MArticleDistribution.trackOrderType, database: Databases, databaseID: string) {
  const limit = getUsersCountForArticleSuggestion(phase, topic.doc.associatedUsersCount);

  const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [
    Query.equal('topic_docID', topic.id),
    sortType === 'DATE_ASC' ? Query.orderAsc('createdAt') : Query.orderDesc('createdAt'),
    lastUserID === 'undefined' ? '' : Query.cursorAfter(lastUserID),
    Query.limit(+limit),
  ]);

  const finalData = snap.documents.map((p) => {
    return deserializeAppwriteData(p) as MUserTopicRelationship.IUserTopicRelationship;
  });

  return { topic: topic, users: finalData.map((p) => p.doc.user), oldLastUserID: lastUserID };
}

/** Create new article suggestion if possible  */
export async function createArticleRelationSuggestion(aRSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion, database: Databases, databaseID: string) {
  await database.createDocument(databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, aRSuggestion.id, serializeAppwriteData(aRSuggestion), [
    Permission.write(Role.user(aRSuggestion.doc.for.docID)),
    Permission.delete(Role.user(aRSuggestion.doc.for.docID)),
    Permission.update(Role.user(aRSuggestion.doc.for.docID)),
    Permission.read(Role.user(aRSuggestion.doc.for.docID)),
  ]);
}
