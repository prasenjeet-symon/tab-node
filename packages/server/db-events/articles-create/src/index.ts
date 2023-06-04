import { AWFunction, MArticle, deserializeAppwriteData } from "@tabnode/utils";

module.exports = async (req: AWFunction.Req, res: AWFunction.Res) => {
  const articleRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  if (!articleRow) {
    return;
  }

  const article = deserializeAppwriteData(articleRow) as MArticle.IArticle;
};
