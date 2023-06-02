import { Databases, Permission, Query, Role } from 'appwrite';
import { AppwriteCollection, MBadgeChallenge } from '@tabnode/utils';
import { deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { AppwriteErrorReporter } from '../utils';

export class BadgeChallengesCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Add new badge challenges  */
  public async addNewBadgeChallenge(challenge: MBadgeChallenge.IBadgeChallenge) {
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, challenge.id, serializeAppwriteData(challenge.doc), [
        Permission.write(Role.user(challenge.doc.participant.docID)),
        Permission.delete(Role.user(challenge.doc.participant.docID)),
        Permission.update(Role.user(challenge.doc.participant.docID)),
        Permission.read(Role.any()),
      ]);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch the badge of given user */
  public async fetchBadgeOfUser(userDocID: string) {
    // only completed badges for the public to see
    try {
      const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, [
        Query.equal('participant_docID', userDocID),
        Query.equal('status', MBadgeChallenge.ENUM_badgeStatus.COMPLETED),
        Query.orderDesc('createdAt'),
      ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p);
      }) as MBadgeChallenge.IBadgeChallenge[];
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }

  /** Fetch badge challenges of given user ( logged in user ) */
  public async fetchBadgeChallengesOfUser(userDocID: string) {
    try {
      const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, [
        Query.equal('participant_docID', userDocID),
        Query.orderDesc('createdAt'),
      ]);

      return snap.documents.map((p) => {
        return deserializeAppwriteData(p);
      }) as MBadgeChallenge.IBadgeChallenge[];
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return [];
      throw error;
    }
  }
}
