import { AWFunction, MSavedArticle, deserializeAppwriteData } from '@tabnode/utils';
import { increaseDecreaseRelatedTopicsBoostPoint, incDecBoostPointOfArticle, increaseBoostPointOfUser, increaseDecreaseBoostPointOfArticleDistribution, increaseDecreaseRelationshipStrengthOfAuthorAndUser } from './util';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const snapData = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const data = deserializeAppwriteData(JSON.parse(snapData)) as MSavedArticle.ISavedArticle;

    await increaseBoostPointOfUser(req, data);
    await incDecBoostPointOfArticle(req, data);
    await increaseDecreaseBoostPointOfArticleDistribution(req, data);
    await increaseDecreaseRelationshipStrengthOfAuthorAndUser(req, data);
    await increaseDecreaseRelatedTopicsBoostPoint(req, data);

    /**
     * - Activity is not recorded
     * - No need to send the notification to the author
     * - No need to suggest the author to follow 
     */

    res.send('OK', 200);
};
