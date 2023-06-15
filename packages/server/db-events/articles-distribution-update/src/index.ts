import { AppwriteNodeJsClient } from '@tabnode/node-utils';
import { AWFunction, AppwriteCollection, MArticleDistribution, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { createPhase } from './util';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const newSnap = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const newData = deserializeAppwriteData(JSON.parse(newSnap)) as MArticleDistribution.IArticleDistribution;

    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();
    const oldSnap = await database.getDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, newData.id);
    const oldData = deserializeAppwriteData(oldSnap) as MArticleDistribution.IArticleDistribution;
    await database.updateDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, newData.id, serializeAppwriteData(newData.doc));

    await createPhase(req, oldData, newData);
};
