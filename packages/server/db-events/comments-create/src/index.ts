import { AWFunction, deserializeAppwriteData } from '@tabnode/utils';

module.exports = async (req: AWFunction.Req, res: AWFunction.Res) => {
  const commentRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  const comment = deserializeAppwriteData(commentRow);
};
