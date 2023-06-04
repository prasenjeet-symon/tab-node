import { AWFunction, MArticleReader, deserializeAppwriteData } from '@tabnode/utils';

module.exports = async (req: AWFunction.Req, res: AWFunction.Res) => {
  const articleReaderRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  const articleReader = deserializeAppwriteData(articleReaderRow) as MArticleReader.IArticleReader;
};
