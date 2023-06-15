import { AppwriteNodeJsClient } from '@tabnode/node-utils';
import { AWFunction, AppwriteCollection, MArticleRelationSuggestion, deserializeAppwriteData, serializeAppwriteData } from '@tabnode/utils';
import { IncreaseDecreaseRelatedTopicsBoostPoint, incDecBoostPointOfArticle, increaseBoostPointOfUser, increaseDecreaseBoostPointOfArticleDistribution, increaseDecreaseRelationshipStrengthOfAuthorAndUser, suggestUserAuthorToFollow } from './utils';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const newSnap = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const newData = deserializeAppwriteData(JSON.parse(newSnap)) as MArticleRelationSuggestion.IArticleRelationSuggestion;

    // fetch the old data
    const client = new AppwriteNodeJsClient(req);
    const database = client.database();
    const databaseID = client.databaseID();

    await database.createDocument(databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, newData.id, serializeAppwriteData(newData.doc));

    if (newData.doc.isStale) {
        // article clicked
        await increaseBoostPointOfUser(req, newData);
        await incDecBoostPointOfArticle(req, newData);
        await increaseDecreaseBoostPointOfArticleDistribution(req, newData);
        await increaseDecreaseRelationshipStrengthOfAuthorAndUser(req, newData);
        await IncreaseDecreaseRelatedTopicsBoostPoint(req, newData);
        await suggestUserAuthorToFollow(req, newData);
    }

    res.send('OK', 200);
};
