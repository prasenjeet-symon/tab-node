export namespace AWFunction {
  export type httpStatusCodes = 200 | 400 | 401 | 403 | 404 | 500;

  export interface Req {
    headers: any; // request headers
    payload: any;
    variables: {
      APPWRITE_FUNCTION_ID: string;
      APPWRITE_FUNCTION_NAME: string;
      APPWRITE_FUNCTION_DEPLOYMENT: string;
      APPWRITE_FUNCTION_TRIGGER: "event" | "http" | "schedule";
      APPWRITE_FUNCTION_RUNTIME_NAME: string;
      APPWRITE_FUNCTION_RUNTIME_VERSION: string;
      APPWRITE_FUNCTION_EVENT: string;
      APPWRITE_FUNCTION_EVENT_DATA: any;
      APPWRITE_FUNCTION_DATA: any;
      APPWRITE_FUNCTION_PROJECT_ID: string;
      APPWRITE_FUNCTION_USER_ID: string;
      APPWRITE_FUNCTION_JWT: string;
    };
  }

  export interface Res {
    send: (text: string, status: httpStatusCodes) => void;
    json: (obj: any, status: httpStatusCodes) => void;
  }
}
