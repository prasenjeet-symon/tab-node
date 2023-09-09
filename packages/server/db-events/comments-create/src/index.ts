import { AWFunction, MArticleComment, deserializeAppwriteData } from '@tabnode/utils';
import { increaseDecreaseRelatedTopicsBoostPoint, addNewActivityForUser, addNotificationForAuthor, incDecBoostPointOfArticle, increaseBoostPointOfUser, increaseDecreaseBoostPointOfArticleDistribution, increaseDecreaseRelationshipStrengthOfAuthorAndUser, suggestUserAuthorToFollow } from './util';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const snap = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const data = deserializeAppwriteData(JSON.parse(snap)) as MArticleComment.IArticleComment;

    await addNotificationForAuthor(req, data);
    await incDecBoostPointOfArticle(req, data);
    await increaseDecreaseBoostPointOfArticleDistribution(req, data);
    await increaseBoostPointOfUser(req, data);
    await increaseDecreaseRelationshipStrengthOfAuthorAndUser(req, data);
    await suggestUserAuthorToFollow(req, data);
    await increaseDecreaseRelatedTopicsBoostPoint(req, data);
    await addNewActivityForUser(req, data);

    res.send('OK', 200);
};
