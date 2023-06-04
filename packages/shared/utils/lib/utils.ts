import { AppwriteException, Client, Databases, Permission, Query, Role } from 'node-appwrite';
import { AppwriteCollection, MArticleDistribution, MArticleRelationSuggestion, MTopic, MUserTopicRelationship } from './database-types';
import { ArticleBoostPoints } from './function-type';

/** Is pure JSON Object */
function isPureJSONObject(value: any) {
  return typeof value === 'object' && value !== null && !Array.isArray(value) && Object.prototype.toString.call(value) === '[object Object]';
}

/** Convert the data to appwrite  */
export function serializeAppwriteData(data: Record<string, any>, keyStr: string = ''): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key of Object.keys(data)) {
    const value = data[key];
    if (isPureJSONObject(value)) {
      const finalResult = serializeAppwriteData(value, `${keyStr}${key}_`);
      Object.assign(result, finalResult);
    } else {
      result[`${keyStr}${key}`] = value;
    }
  }

  return result;
}

/** Deserialize the data from appwrite*/
export function deserializeAppwriteData(serializedData: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key of Object.keys(serializedData)) {
    const value = serializedData[key];
    const keys = key.split('_');

    let currentObj = result;
    for (let i = 0; i < keys.length; i++) {
      const currentKey = keys[i];
      if (i === keys.length - 1) {
        currentObj[currentKey] = value;
      } else {
        if (!currentObj[currentKey] || !isPureJSONObject(currentObj[currentKey])) {
          currentObj[currentKey] = {};
        }
        currentObj = currentObj[currentKey];
      }
    }
  }

  const finalData = { id: serializedData['$id'], doc: result };
  return finalData;
}

/** Generate the new unique avatar*/
export function generateAvatar(email: string) {
  return `https://robohash.org/${email}.png`;
}

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

/** Appwrite nodejs error reporting */
/** Central Appwrite Error Reporting */
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

/** Get the different threshold for different phase boost point */
export function getThreshold(phase: number, users: number) {
  const mainUser = Math.floor((users * 15) / 100); // 15 percentage of user did some actions
  const boostPoint = mainUser * (ArticleBoostPoints.click + ArticleBoostPoints.comment + ArticleBoostPoints.like + ArticleBoostPoints.read + ArticleBoostPoints.share);
  return { impressionCountPercent: 70, boostPoint: Math.floor(boostPoint) };
}

/** Get total number of users for the AB testing */
export function getUsersCountForArticleSuggestion(phase: number, totalUsers: number) {
  switch (phase) {
    case 1:
      return Math.floor((MArticleDistribution.enum_articlePhase.PHASE_1 * totalUsers) / 100);

    case 2:
      return Math.floor((MArticleDistribution.enum_articlePhase.PHASE_2 * totalUsers) / 100);

    case 3:
      return Math.floor((MArticleDistribution.enum_articlePhase.PHASE_3 * totalUsers) / 100);

    default:
      return 0;
  }
}

/** Get the phase users in percentage for the AB testing  */
export function getPhaseUsersPercentage(phase: number) {
  switch (phase) {
    case 1:
      return MArticleDistribution.enum_articlePhase.PHASE_1;

    case 2:
      return MArticleDistribution.enum_articlePhase.PHASE_2;

    case 3:
      return MArticleDistribution.enum_articlePhase.PHASE_3;

    default:
      return 0;
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
