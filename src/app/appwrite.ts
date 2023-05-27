import { Account, Client } from 'appwrite';

class Appwrite {
  private static appwrite: Client;
  private static appwriteAccount: Account;

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
    return await Appwrite.account().getSession('current');
  }
}

export default Appwrite;
