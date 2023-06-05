import { MArticleDistribution } from './database-types';
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

/** Appwrite nodejs error reporting */
/** Central Appwrite Error Reporting */

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
