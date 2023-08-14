// create all the collections
import { AppwriteNodeJsClient } from '@tabnode/node-utils';
import { AWFunction, AppwriteCollection, MTopic, serializeAppwriteData } from '@tabnode/utils';
import { AppwriteException, Databases, Permission, Role } from 'node-appwrite';
import { CreateCollections } from './collections';
import { CollectionIndex } from './indexes';

export class SetUp {
    private databases: Databases;
    private databaseID: string;
    private client: AppwriteNodeJsClient;
    private DATABASE_NAME = 'TAB_NODE_DATABASE';

    constructor(req: AWFunction.Req) {
        const client = new AppwriteNodeJsClient(req);
        this.client = client;
        this.databaseID = client.databaseID();
        this.databases = client.database();
    }

    /**
     * Is database already exist
     */
    public async isDatabaseEXIT(): Promise<boolean> {
        try {
            await this.databases.get(this.databaseID);
            return true;
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) return false;
            throw error;
        }
    }

    public async createDatabase() {
        return await this.databases.create(this.databaseID, this.DATABASE_NAME);
    }

    public async createInitialTopics() {
        const topics = ['Programming languages', 'Web development', 'Mobile app development', 'Artificial intelligence', 'Machine learning', 'Data analysis', 'Big data', 'Cloud computing', 'DevOps', 'Internet of Things (IoT)', 'Cybersecurity', 'Blockchain', 'Virtual and augmented reality', 'Robotics', '3D printing'];
        const topicsToAdd = topics.map(async (t) => {
            const topicD: MTopic.ITopic = {
                id: this.client.uniqueID(),
                doc: {
                    associatedUsersCount: 0,
                    color: ' ',
                    createdAt: new Date(),
                    description: ' ',
                    logo: ' ',
                    monthlyTrend: { boostPoint: 0, numberOfArticles: 0, resetDate: new Date() },
                    name: t,
                    updatedAt: new Date(),
                    weeklyTrend: { boostPoint: 0, numberOfArticles: 0, resetDate: new Date() },
                },
            };

            await this.databases.createDocument(this.databaseID, AppwriteCollection.TOPICS, topicD.id, serializeAppwriteData(topicD.doc), [Permission.read(Role.any())]);
        });

        await Promise.allSettled(topicsToAdd);
    }

    public async setup() {
        const isDatabaseExit = await this.isDatabaseEXIT();
        if (!isDatabaseExit) await this.createDatabase();
        await sleep(1000);

        await new CreateCollections(this.databases, this.databaseID).createCollections();
        await sleep(5000);

        await new CreateCollections(this.databases, this.databaseID).init();
        await sleep(5000);

        await new CollectionIndex(this.databases, this.databaseID).createIndexes();
        await sleep(5000);

        await this.createInitialTopics();
    }
}

/**
 *
 * Sleep code
 */
export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
