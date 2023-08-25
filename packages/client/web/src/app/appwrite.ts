import { Account, Client, Databases, Storage } from 'appwrite';

class Appwrite {
  private static appwrite: Client;
  private static appwriteAccount: Account;
  private static appwriteDatabase: Databases;
  private static appwriteStorage: Storage;

  private static initialize(endpoint: string, project: string) {
    if (!Appwrite.appwrite) {
      try {
        Appwrite.appwrite = new Client();
        Appwrite.appwrite.setEndpoint(endpoint).setProject(project);
      } catch (error) {
        console.error(error, 'Appwrite initialize error');
      }
    }
  }

  static client() {
    if (!Appwrite.appwrite) {
      Appwrite.initialize(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '', process.env.NEXT_PUBLIC_APPWRITE_PROJECT || '');
    }

    return Appwrite.appwrite;
  }

  static account() {
    if (!Appwrite.appwriteAccount) {
      Appwrite.appwriteAccount = new Account(Appwrite.client());
    }
    return Appwrite.appwriteAccount;
  }

  static async currentUserJWT() {
    const user = await Appwrite.account().createJWT();
    return user.jwt;
  }

  static async currentSession() {
    return await Appwrite.account().getSession('current')
  }

  static async logout() {
    return await Appwrite.account().deleteSession('current');
  }

  /** Get the current logged in user userID */
  static async currentUserID() {
    return (await Appwrite.account().get())['$id'];
  }

  /** Get the current logged in user  */
  static async currentUser() {
    return await Appwrite.account().get();
  }

  // For the database
  static database() {
    if (!Appwrite.appwriteDatabase) {
      Appwrite.appwriteDatabase = new Databases(Appwrite.client());
    }
    return Appwrite.appwriteDatabase;
  }

  // for the storage
  static storage() {
    if (!Appwrite.appwriteStorage) {
      Appwrite.appwriteStorage = new Storage(Appwrite.client());
    }
    return Appwrite.appwriteStorage;
  }
}

export default Appwrite;
