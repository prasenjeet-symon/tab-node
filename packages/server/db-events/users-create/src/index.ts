import { AWFunction, MUser, deserializeAppwriteData } from '@tabnode/utils';
import { addNewActivityForUser, createSocialLinks, createWelcomeNotification } from './util';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    const userRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
    const user = deserializeAppwriteData(JSON.parse(userRow)) as MUser.IUser;
    await createWelcomeNotification(req, user);
    await addNewActivityForUser(req, user);
    await createSocialLinks(req, user);
    res.send('OK', 200);
};
