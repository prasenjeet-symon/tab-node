import { AppwriteException } from 'appwrite';

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
