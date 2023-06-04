import {
  AppwriteCollection,
  AppwriteErrorReporterNodeJs,
  AppwriteNodeJsClient,
  ArticleBoostPoints,
  MArticle,
  MArticleDistribution,
  MArticleRelationSuggestion,
  MArticleTopicRelationship,
  MTopic,
  MUser,
  MUserRelationship,
  UserBoostPoints,
  deserializeAppwriteData,
  serializeAppwriteData,
} from '@tabnode/utils';
import { produce } from 'immer';
import { Query } from 'node-appwrite';

/** Increase the boost point for the event creator */
export async function increaseBoostPointOfUser(aSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion) {
  // database connections
  const client = new AppwriteNodeJsClient();
  const database = client.database();
  const databaseID = client.databaseID();

  const user = aSuggestion.doc.for;

  const fetchUser = async (userDocID: string) => {
    try {
      const snap = await database.getDocument(databaseID, AppwriteCollection.USERS, userDocID);
      return deserializeAppwriteData(snap) as MUser.IUser;
    } catch (error) {
      AppwriteErrorReporterNodeJs.report(error);
      if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return null;
      return null;
    }
  };

  const fullUser = await fetchUser(user.docID);
  if (!fullUser) return;
  const boostPoint = UserBoostPoints.click;

  const updatedUser = produce(fullUser, (draft) => {
    draft.doc.trend.numberOfClick = draft.doc.trend.numberOfClick + 1;
    draft.doc.trend.boostPoint = draft.doc.trend.boostPoint + boostPoint;
    draft.doc.updatedAt = new Date();
  });

  await database.updateDocument(databaseID, AppwriteCollection.USERS, updatedUser.id, serializeAppwriteData(updatedUser.doc));
}

/** Inc/Desc boost point of article */
export async function incDecBoostPointOfArticle(aSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion) {
  try {
    const client = new AppwriteNodeJsClient();
    const database = client.database();
    const databaseID = client.databaseID();

    const fetchArticleOfTopic = async (articleDocID: string) => {
      const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('article_docID', articleDocID)]);
      return snap.documents.map((doc) => deserializeAppwriteData(doc) as MArticleTopicRelationship.IArticleTopicRelationship);
    };

    let articleTopicRelations = await fetchArticleOfTopic(aSuggestion.doc.article.docID);

    const boostPoint = ArticleBoostPoints.click;
    // updated the boost point
    articleTopicRelations = produce(articleTopicRelations, (draft) => {
      draft.forEach((p) => {
        p.doc.trend.boostPoint = p.doc.trend.boostPoint + boostPoint;
      });
    });

    await Promise.all(articleTopicRelations.map((p) => database.updateDocument(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, p.id, serializeAppwriteData(p.doc))));
  } catch (error) {
    AppwriteErrorReporterNodeJs.report(error);
    throw error;
  }
}

/** Increase or decrease the boost point of the article distribution if applicable */
export async function increaseDecreaseBoostPointOfArticleDistribution(aSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion) {
  const client = new AppwriteNodeJsClient();
  const database = client.database();
  const databaseID = client.databaseID();

  // fetch active article distribution latest of this article
  const fetchArticleDistribution = async (articleDocID: string) => {
    const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, [Query.equal('article_docID', articleDocID), Query.equal('isStale', false), Query.orderDesc('createdAt'), Query.limit(1)]);
    const allArticleDistributions = snap.documents.map((doc) => deserializeAppwriteData(doc) as MArticleDistribution.IArticleDistribution);
    if (allArticleDistributions.length === 0) return null;
    return allArticleDistributions[0];
  };

  const articleDistribution = await fetchArticleDistribution(aSuggestion.doc.article.docID);
  if (!articleDistribution) return;
  const boostPoint = ArticleBoostPoints.click;

  // update the boost point
  const updatedArticleDistribution = produce(articleDistribution, (draft) => {
    draft.doc.updatedAt = new Date();
    draft.doc.boostPoint = draft.doc.boostPoint + boostPoint;
  });

  await database.updateDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, updatedArticleDistribution.id, serializeAppwriteData(updatedArticleDistribution.doc));
}

/** Increase decrease relationship strength of author and user */
export async function increaseDecreaseRelationshipStrengthOfAuthorAndUser(aSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion) {
  // in this case user will gift to author because user did some action for the author
  // user is interested in author he must scarifies something as gift to make relationship with author
  // ( user ) -----> ( author ) relation graph

  const client = new AppwriteNodeJsClient();
  const database = client.database();
  const databaseID = client.databaseID();

  const fetchFullArticle = async (articleDocID: string) => {
    try {
      const snap = await database.getDocument(databaseID, AppwriteCollection.ARTICLES, articleDocID);
      return deserializeAppwriteData(snap) as MArticle.IArticle;
    } catch (error) {
      AppwriteErrorReporterNodeJs.report(error);
      if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) return null;
      return null;
    }
  };

  const fullArticle = await fetchFullArticle(aSuggestion.doc.article.docID);
  if (!fullArticle) return;

  const boostPoint = UserBoostPoints.click;

  const fetchFollowRelation = async (fromUser: MUser.SUser, toUser: MUser.SUser) => {
    const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_RELATIONSHIPS, [Query.equal('fromUser_docID', fromUser.docID), Query.equal('toUser_docID', toUser.docID)]);
    if (snap.total === 0) return null;
    return deserializeAppwriteData(snap.documents[0]) as MUserRelationship.IUserRelationship;
  };

  const followRelation = await fetchFollowRelation(aSuggestion.doc.for, fullArticle.doc.writer);

  if (followRelation) {
    // add boost point to the to trend ( user ) ----> ( author )
    const updatedFollowRelation = produce(followRelation, (draft) => {
      draft.doc.updatedAt = new Date();
      draft.doc.toTrend.boostPoint = draft.doc.toTrend.boostPoint + boostPoint;
    });

    await database.updateDocument(databaseID, AppwriteCollection.USER_RELATIONSHIPS, updatedFollowRelation.id, serializeAppwriteData(updatedFollowRelation.doc));
  }
}

/** Increase / decrease related topics boost point */
export async function IncreaseDecreaseRelatedTopicsBoostPoint(aSuggestion: MArticleRelationSuggestion.IArticleRelationSuggestion) {
  // database connection
  const client = new AppwriteNodeJsClient();
  const database = client.database();
  const databaseID = client.databaseID();

  // fetch all the topics of involved article
  const fetchAllTopicsOfArticle = async (articleDocID: string) => {
    const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('article_docID', articleDocID)]);
    return snap.documents.map((doc) => deserializeAppwriteData(doc) as MArticleTopicRelationship.IArticleTopicRelationship);
  };

  // fetch full topic given topic docID
  const fetchFullTopic = async (topicDocID: string) => {
    try {
      const snap = await database.getDocument(databaseID, AppwriteCollection.TOPICS, topicDocID);
      return deserializeAppwriteData(snap) as MTopic.ITopic;
    } catch (error) {
      AppwriteErrorReporterNodeJs.report(error);
      if (AppwriteErrorReporterNodeJs.isDocumentNotFound(error)) null;
      return null;
    }
  };

  const allTopicsOfArticle = await fetchAllTopicsOfArticle(aSuggestion.doc.article.docID);
  const allFullTopics = (await Promise.all(allTopicsOfArticle.map((topic) => fetchFullTopic(topic.doc.topic.docID)))).filter((p) => p !== null) as MTopic.ITopic[];

  // increase or decrease boost point of related topics
  const updatedTopics = allFullTopics.map((topic) => {
    const boostPoint = ArticleBoostPoints.click;
    const updatedTopic = produce(topic, (draft) => {
      draft.doc.updatedAt = new Date();
      draft.doc.weeklyTrend.boostPoint = draft.doc.weeklyTrend.boostPoint + boostPoint;
      draft.doc.monthlyTrend.boostPoint = draft.doc.monthlyTrend.boostPoint + boostPoint;
    });

    return updatedTopic;
  });

  await Promise.all(updatedTopics.map((topic) => database.updateDocument(databaseID, AppwriteCollection.TOPICS, topic.id, serializeAppwriteData(topic.doc))));
}
