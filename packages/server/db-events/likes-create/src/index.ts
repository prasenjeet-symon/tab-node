import { AWFunction, deserializeAppwriteData } from '@tabnode/utils';

module.exports = async (req: AWFunction.Req, res: AWFunction.Res) => {
  const likesDocumentRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  if (likesDocumentRow) return;

  const likesDocument = deserializeAppwriteData(likesDocumentRow);
};
