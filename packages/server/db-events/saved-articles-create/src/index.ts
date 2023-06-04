import { AWFunction, deserializeAppwriteData } from '@tabnode/utils';

module.exports = async (req: AWFunction.Req, res: AWFunction.Res) => {
  const savedArticleRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  const savedArticle = deserializeAppwriteData(savedArticleRow);
};
