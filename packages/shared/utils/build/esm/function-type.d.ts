export declare abstract class ArticleBoostPoints {
    static readonly like = 1;
    static readonly dislike = -2;
    static readonly comment = 5;
    static readonly read = 6;
    static readonly click = 1;
    static readonly share = 3;
    static readonly save = 5;
    static readonly create = 10;
}
export declare abstract class UserBoostPoints {
    static readonly read = 5;
    static readonly click = 1;
    static readonly like = 2;
    static readonly dislike = 2;
    static readonly comment = 5;
    static readonly share = 3;
    static readonly save = 5;
    static readonly create = 10;
}
export declare namespace AWFunction {
    type httpStatusCodes = 200 | 400 | 401 | 403 | 404 | 500;
    interface Req {
        headers: any;
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
            APPWRITE_API_KEY: string;
            APPWRITE_PROJECT_ID: string;
            APPWRITE_ENDPOINT: string;
            APPWRITE_DATABASE_ID: string;
            APPWRITE_FUNCTION_ENDPOINT: string;
            APPWRITE_FUNCTION_API_KEY: string;
        };
    }
    interface Res {
        send: (text: string, status: httpStatusCodes) => void;
        json: (obj: any, status: httpStatusCodes) => void;
    }
}
//# sourceMappingURL=function-type.d.ts.map