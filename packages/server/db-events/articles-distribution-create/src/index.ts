import { AppwriteNodeJsClient } from '@tabnode/node-utils';
import { AWFunction, AppwriteCollection, MArticleDistribution, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const newSnap = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const newData = deserializeAppwriteData(JSON.parse(newSnap)) as MArticleDistribution.IArticleDistribution;

    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    await database.createDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, newData.id, serializeAppwriteData(newData.doc));
    res.send('OK', 200);
};
