import { AWFunction, MSavedArticle, deserializeAppwriteData } from '@tabnode/utils';
import { IncreaseDecreaseRelatedTopicsBoostPoint, incDecBoostPointOfArticle, increaseBoostPointOfUser, increaseDecreaseBoostPointOfArticleDistribution, increaseDecreaseRelationshipStrengthOfAuthorAndUser } from './util';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const snapData = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const data = deserializeAppwriteData(JSON.parse(snapData)) as MSavedArticle.ISavedArticle;

    await increaseBoostPointOfUser(req, data);
    await incDecBoostPointOfArticle(req, data);
    await increaseDecreaseBoostPointOfArticleDistribution(req, data);
    await increaseDecreaseRelationshipStrengthOfAuthorAndUser(req, data);
    await IncreaseDecreaseRelatedTopicsBoostPoint(req, data);

    res.send('OK', 200);
};
