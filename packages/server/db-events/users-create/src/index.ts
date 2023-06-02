import { AWFunction, MUser, deserializeAppwriteData } from "@tabnode/utils";
import { createWelcomeNotification } from "./util";

module.exports = async (req: AWFunction.Req, res: AWFunction.Res) => {
  const userRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  if (!userRow) {
    res.send("Interval server error", 500);
    return;
  }

  const user = deserializeAppwriteData(userRow) as MUser.IUser;
  await Promise.allSettled([createWelcomeNotification(user)]);
};
