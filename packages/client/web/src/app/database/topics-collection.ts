import { AppwriteCollection, MTopic, deserializeAppwriteData } from '@tabnode/utils';
import { Databases } from 'appwrite';

export class TopicCollection {
  constructor(private database: Databases, private databaseID: string) {}

  /** Fetch all the topics to choose from */
  public async fetchAllTopics(): Promise<MTopic.ITopic[]> {
    const topicsSnap = await this.database.listDocuments(this.databaseID, AppwriteCollection.TOPICS);
    return topicsSnap.documents.map((p) => {
      return deserializeAppwriteData(p);
    }) as MTopic.ITopic[];
  }
}
