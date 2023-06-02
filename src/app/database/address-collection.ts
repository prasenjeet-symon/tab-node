import { Databases, Permission, Query, Role } from 'appwrite';
import { produce } from 'immer';
import { AppwriteCollection, MAddress, MUser } from '../database-type';
import { AppwriteErrorReporter, deserializeAppwriteData, serializeAppwriteData } from '../utils';
import { UserCollection } from './user-collection';

export class AddressCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Add new address for the user */
  public async addNewAddress(address: MAddress.IAddress, user: MUser.IUser) {
    // User is already created at the time of address modification
    try {
      await this.database.createDocument(this.databaseID, AppwriteCollection.ADDRESSES, address.id, serializeAppwriteData(address.doc), [
        Permission.write(Role.user(address.doc.addressOf.docID)),
        Permission.delete(Role.user(address.doc.addressOf.docID)),
        Permission.update(Role.user(address.doc.addressOf.docID)),
        Permission.read(Role.any()),
      ]);

      // also update the user address
      const updatedUser = produce(user, (draft) => {
        draft.doc.address.address = `${address.doc.street}, ${address.doc.city}, ${address.doc.state}, ${address.doc.country}, ${address.doc.zipCode}`;
        draft.doc.address.docID = address.id;
      });

      const userCollection = new UserCollection(this.database, this.databaseID);
      await userCollection.updateUser(updatedUser);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Update the address of given user */
  public async updateAddress(address: MAddress.IAddress, user: MUser.IUser) {
    try {
      await this.database.updateDocument(this.databaseID, AppwriteCollection.ADDRESSES, address.id, serializeAppwriteData(address.doc));
      // also update the user address
      const updatedUser = produce(user, (draft) => {
        draft.doc.address.address = `${address.doc.street}, ${address.doc.city}, ${address.doc.state}, ${address.doc.country}, ${address.doc.zipCode}`;
        draft.doc.address.docID = address.id;
      });

      const userCollection = new UserCollection(this.database, this.databaseID);
      await userCollection.updateUser(updatedUser);
    } catch (error) {
      AppwriteErrorReporter.report(error);
    }
  }

  /** Fetch full address of given user  */
  public async fetchFullAddress(userDocID: string) {
    try {
      const snap = await this.database.listDocuments(this.databaseID, AppwriteCollection.ADDRESSES, [Query.equal('addressOf_docID', userDocID)]);
      // user will have single address
      if (snap.total === 0) return null;
      return deserializeAppwriteData(snap.documents[0]) as MAddress.IAddress;
    } catch (error) {
      AppwriteErrorReporter.report(error);
      if (AppwriteErrorReporter.isDocumentNotFound(error)) return null;
      throw error;
    }
  }
}
