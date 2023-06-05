import {
  AppwriteCollection,
  AppwriteErrorReporterNodeJs,
  AppwriteNodeJsClient,
  ArticleBoostPoints,
  MArticle,
  MArticleDistribution,
  MArticleReader,
  MArticleTopicRelationship,
  MTopic,
  MUser,
  MUserActivity,
  MUserRelationSuggestion,
  MUserRelationship,
  UserBoostPoints,
  deserializeAppwriteData,
  serializeAppwriteData,
} from '@tabnode/utils';
import { produce } from 'immer';
import { Permission, Query, Role } from 'node-appwrite';
import { v4 } from 'uuid';

/** Increase boost point of the article */
export async function incDecBoostPointOfArticle(aReader: MArticleReader.IArticleReader) {
  try {
    const client = new AppwriteNodeJsClient();
    const database = client.database();
    const databaseID = client.databaseID();

    const fetchArticleOfTopic = async (articleDocID: string) => {
      const snap = await database.listDocuments(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Query.equal('article_docID', articleDocID)]);
      return snap.documents.map((doc) => deserializeAppwriteData(doc) as MArticleTopicRelationship.IArticleTopicRelationship);
    };

    let articleTopicRelations = await fetchArticleOfTopic(aReader.doc.article.docID);

    const boostPoint = ArticleBoostPoints.read;
    // updated the boost point
    articleTopicRelations = produce(articleTopicRelations, (draft) => {
      draft.forEach((p) => {
        p.doc.updatedAt = new Date();
        p.doc.trend.boostPoint = p.doc.trend.boostPoint + boostPoint;
      });
    });

    await Promise.all(articleTopicRelations.map((p) => database.updateDocument(databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, p.id, serializeAppwriteData(p.doc))));
  } catch (error) {
    AppwriteErrorReporterNodeJs.report(error);
    throw error;
  }
}

/** Increase boost point of the article distribution */
export async function increaseDecreaseBoostPointOfArticleDistribution(aReader: MArticleReader.IArticleReader) {
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

  const articleDistribution = await fetchArticleDistribution(aReader.doc.article.docID);
  if (!articleDistribution) return;
  const boostPoint = ArticleBoostPoints.read;

  // update the boost point
  const updatedArticleDistribution = produce(articleDistribution, (draft) => {
    draft.doc.updatedAt = new Date();
    draft.doc.boostPoint = draft.doc.boostPoint + boostPoint;
  });

  await database.updateDocument(databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, updatedArticleDistribution.id, serializeAppwriteData(updatedArticleDistribution.doc));
}

/** Increase the user boost point */
export async function increaseBoostPointOfUser(aReader: MArticleReader.IArticleReader) {
  // database connections
  const client = new AppwriteNodeJsClient();
  const database = client.database();
  const databaseID = client.databaseID();

  const user = aReader.doc.reader;

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

  const boostPoint = UserBoostPoints.read;
  const updatedUser = produce(fullUser, (draft) => {
    draft.doc.trend.numberOfRead = draft.doc.trend.numberOfRead + 1;
    draft.doc.trend.boostPoint = draft.doc.trend.boostPoint + boostPoint;
    draft.doc.updatedAt = new Date();
  });

  await database.updateDocument(databaseID, AppwriteCollection.USERS, updatedUser.id, serializeAppwriteData(updatedUser.doc));
}

/** Increase the relationship strength of user and author */
export async function increaseDecreaseRelationshipStrengthOfAuthorAndUser(aReader: MArticleReader.IArticleReader) {
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

  const fullArticle = await fetchFullArticle(aReader.doc.article.docID);
  if (!fullArticle) return;

  const boostPoint = UserBoostPoints.read;

  const fetchFollowRelation = async (fromUser: MUser.SUser, toUser: MUser.SUser) => {
    const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_RELATIONSHIPS, [Query.equal('fromUser_docID', fromUser.docID), Query.equal('toUser_docID', toUser.docID)]);
    if (snap.total === 0) return null;
    return deserializeAppwriteData(snap.documents[0]) as MUserRelationship.IUserRelationship;
  };

  const followRelation = await fetchFollowRelation(aReader.doc.reader, fullArticle.doc.writer);

  if (followRelation) {
    // add boost point to the to trend ( user ) ----> ( author )
    const updatedFollowRelation = produce(followRelation, (draft) => {
      draft.doc.updatedAt = new Date();
      draft.doc.toTrend.boostPoint = draft.doc.toTrend.boostPoint + boostPoint;
    });

    await database.updateDocument(databaseID, AppwriteCollection.USER_RELATIONSHIPS, updatedFollowRelation.id, serializeAppwriteData(updatedFollowRelation.doc));
  }
}

/** Suggest user author to follow if applicable */
export async function suggestUserAuthorToFollow(aReader: MArticleReader.IArticleReader) {
  // database connection
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

  const fullArticle = await fetchFullArticle(aReader.doc.article.docID);
  if (!fullArticle) return;

  const fetchFollowRelation = async (fromUser: MUser.SUser, toUser: MUser.SUser) => {
    const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_RELATIONSHIPS, [Query.equal('fromUser_docID', fromUser.docID), Query.equal('toUser_docID', toUser.docID)]);
    if (snap.total === 0) return null;
    return deserializeAppwriteData(snap.documents[0]) as MUserRelationship.IUserRelationship;
  };

  const followRelation = await fetchFollowRelation(aReader.doc.reader, fullArticle.doc.writer);

  if (followRelation) return;

  const fetchFollowSuggestion = async (user: MUser.SUser, author: MUser.SUser) => {
    const snap = await database.listDocuments(databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, [Query.equal('for_docID', user.docID), Query.equal('user_docID', author.docID)]);
    if (snap.total === 0) return null;
    return deserializeAppwriteData(snap.documents[0]) as MUserRelationSuggestion.IUserRelationSuggestion;
  };

  const followSuggestion = await fetchFollowSuggestion(aReader.doc.reader, fullArticle.doc.writer);
  if (followSuggestion) return;

  // create follow suggestion
  const newFollowSuggestion: MUserRelationSuggestion.IUserRelationSuggestion = {
    id: v4(),
    doc: {
      boostPoint: 3, // three impression
      createdAt: new Date(),
      for: aReader.doc.reader,
      user: fullArticle.doc.writer,
      impressionCount: 0,
      isStale: false,
      updatedAt: new Date(),
    },
  };

  await database.createDocument(databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, newFollowSuggestion.id, serializeAppwriteData(newFollowSuggestion.doc), [
    Permission.write(Role.user(newFollowSuggestion.doc.for.docID)),
    Permission.delete(Role.user(newFollowSuggestion.doc.for.docID)),
    Permission.update(Role.user(newFollowSuggestion.doc.for.docID)),
    Permission.read(Role.user(newFollowSuggestion.doc.for.docID)),
  ]);
}

/** Increase / decrease related topics boost point */
export async function IncreaseDecreaseRelatedTopicsBoostPoint(aReader: MArticleReader.IArticleReader) {
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

  const allTopicsOfArticle = await fetchAllTopicsOfArticle(aReader.doc.article.docID);
  const allFullTopics = (await Promise.all(allTopicsOfArticle.map((topic) => fetchFullTopic(topic.doc.topic.docID)))).filter((p) => p !== null) as MTopic.ITopic[];

  // increase or decrease boost point of related topics
  const updatedTopics = allFullTopics.map((topic) => {
    const boostPoint = ArticleBoostPoints.read;
    const updatedTopic = produce(topic, (draft) => {
      draft.doc.updatedAt = new Date();
      draft.doc.weeklyTrend.boostPoint = draft.doc.weeklyTrend.boostPoint + boostPoint;
      draft.doc.monthlyTrend.boostPoint = draft.doc.monthlyTrend.boostPoint + boostPoint;
    });

    return updatedTopic;
  });

  await Promise.all(updatedTopics.map((topic) => database.updateDocument(databaseID, AppwriteCollection.TOPICS, topic.id, serializeAppwriteData(topic.doc))));
}

/** Add new activity for the author */
export async function addNewActivityForUser(aReader: MArticleReader.IArticleReader) {
  // database connection
  const client = new AppwriteNodeJsClient();
  const database = client.database();
  const databaseID = client.databaseID();

  const activity: MUserActivity.IUserActivity = {
    id: v4(),
    doc: {
      action: 'READ',
      article: aReader.doc.article,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: aReader.doc.reader,
    },
  };

  await database.createDocument(databaseID, AppwriteCollection.USER_ACTIVITIES, activity.id, serializeAppwriteData(activity.doc), [
    Permission.write(Role.user(activity.doc.user.docID)),
    Permission.delete(Role.user(activity.doc.user.docID)),
    Permission.update(Role.user(activity.doc.user.docID)),
    Permission.read(Role.any()),
  ]);
}
