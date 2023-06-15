import { AWFunction, MArticleReader, deserializeAppwriteData } from '@tabnode/utils';
import { IncreaseDecreaseRelatedTopicsBoostPoint, addNewActivityForUser, incDecBoostPointOfArticle, increaseBoostPointOfUser, increaseDecreaseBoostPointOfArticleDistribution, increaseDecreaseRelationshipStrengthOfAuthorAndUser, suggestUserAuthorToFollow } from './util';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const snap = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const data = deserializeAppwriteData(JSON.parse(snap)) as MArticleReader.IArticleReader;

    await incDecBoostPointOfArticle(req, data);
    await increaseDecreaseBoostPointOfArticleDistribution(req, data);
    await increaseBoostPointOfUser(req, data);
    await increaseDecreaseRelationshipStrengthOfAuthorAndUser(req, data);
    await suggestUserAuthorToFollow(req, data);
    await IncreaseDecreaseRelatedTopicsBoostPoint(req, data);
    await addNewActivityForUser(req, data);

    res.send('OK', 200);
};
