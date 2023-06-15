import { AWFunction, MArticle, deserializeAppwriteData } from '@tabnode/utils';
import { IncreaseDecreaseRelatedTopicsBoostPoint, addNewActivityForUser, addNotificationForAuthor, createArticleDistribution, increaseBoostPointOfUser, makeArticleStory } from './util';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const snap = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const data = deserializeAppwriteData(JSON.parse(snap)) as MArticle.IArticle;

    await createArticleDistribution(req, data);
    await increaseBoostPointOfUser(req, data);
    await IncreaseDecreaseRelatedTopicsBoostPoint(req, data);
    await addNotificationForAuthor(req, data);
    await addNewActivityForUser(req, data);
    await makeArticleStory(req, data);

    res.send('OK', 200);
};
