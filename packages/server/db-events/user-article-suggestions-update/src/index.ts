import { AWFunction, deserializeAppwriteData } from '@tabnode/utils';

module.exports = async (req: AWFunction.Req, res: AWFunction.Res) => {
  const userArticleSuggestionOldRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  const userArticleSuggestionOld = deserializeAppwriteData(userArticleSuggestionOldRow);

  const userArticleSuggestionNewRow = req.variables.APPWRITE_FUNCTION_EVENT_DATA;
  const userArticleSuggestionNew = deserializeAppwriteData(userArticleSuggestionNewRow);
};
