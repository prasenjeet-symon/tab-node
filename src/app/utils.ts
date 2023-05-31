import { AppwriteException, Models } from 'appwrite';

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

/** Central Appwrite Error Reporting */
export abstract class AppwriteErrorReporter {
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
