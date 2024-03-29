import {
    MAddress,
    MArticle,
    MArticleComment,
    MArticleLike,
    MArticleReader,
    MArticleRelationSuggestion,
    MArticleSeries,
    MArticleStory,
    MArticleStoryDistribution,
    MArticleTopicRelationship,
    MBadgeChallenge,
    MDraftedArticle,
    MSavedArticle,
    MUser,
    MUserActivity,
    MUserNotification,
    MUserRelationSuggestion,
    MUserRelationship,
    MUserSocialLink,
    MUserTopicRelationship,
} from '@tabnode/utils';
import { Databases } from 'appwrite';
import Appwrite from '../appwrite';
import { AddressCollection } from './address-collection';
import { ArticleReadersCollection } from './article-readers-collection';
import { ArticleSeriesCollection } from './article-series-collection';
import { ArticleStoriesCollection } from './article-stories-collection';
import { ArticleStoryDistributionCollection } from './article-story-distribution-collection';
import { ArticleTopicRelationshipCollection } from './article-topic-relationships-collection';
import { ArticlesCollection } from './articles-collection';
import { BadgeChallengesCollection } from './badge-challenges-collection';
import { CommentsCollection } from './comments-collection';
import { DraftedArticlesCollection } from './drafted-articles-collection';
import { LikesCollection } from './likes-collection';
import { SavedArticlesCollection } from './saved-articles-collection';
import { TopicCollection } from './topics-collection';
import { UserActivitiesCollection } from './user-activities-collection';
import { UserArticleSuggestionsCollection } from './user-article-suggestions-collection';
import { UserCollection } from './user-collection';
import { UserNotificationsCollection } from './user-notifications';
import { UserRelationSuggestionCollection } from './user-relation-suggestion';
import { UserRelationshipsCollection } from './user-relationships-collection';
import { UserSocialLinksCollection } from './user-social-links-collection';
import { UserTopicRelationshipsCollection } from './user-topic-relationships-collection';

export default class AppwriteDatabase {
    private readonly database: Databases;
    private readonly DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
    private userCollection: UserCollection;
    private topicCollection: TopicCollection;
    private articlesCollection: ArticlesCollection;
    private commentsCollection: CommentsCollection;
    private likesCollection: LikesCollection;
    private addressCollection: AddressCollection;
    private savedArticlesCollection: SavedArticlesCollection;
    private articleReadersCollection: ArticleReadersCollection;
    private badgeChallengesCollection: BadgeChallengesCollection;
    private userRelationshipsCollection: UserRelationshipsCollection;
    private userTopicRelationshipsCollection: UserTopicRelationshipsCollection;
    private articleTopicRelationshipCollection: ArticleTopicRelationshipCollection;
    private userRelationSuggestionCollection: UserRelationSuggestionCollection;
    private userArticleSuggestionsCollection: UserArticleSuggestionsCollection;
    private userActivitiesCollection: UserActivitiesCollection;
    private userNotificationsCollection: UserNotificationsCollection;
    private draftedArticlesCollection: DraftedArticlesCollection;
    private articleStoriesCollection: ArticleStoriesCollection;
    private articleStoryDistributionCollection: ArticleStoryDistributionCollection;
    private userSocialLinksCollection: UserSocialLinksCollection;
    private articleSeriesCollection: ArticleSeriesCollection;

    constructor() {
        this.database = Appwrite.database();
        this.userCollection = new UserCollection(this.database, this.DATABASE_ID);
        this.topicCollection = new TopicCollection(this.database, this.DATABASE_ID);
        this.articlesCollection = new ArticlesCollection(this.database, this.DATABASE_ID);
        this.commentsCollection = new CommentsCollection(this.database, this.DATABASE_ID);
        this.likesCollection = new LikesCollection(this.database, this.DATABASE_ID);
        this.addressCollection = new AddressCollection(this.database, this.DATABASE_ID);
        this.savedArticlesCollection = new SavedArticlesCollection(this.database, this.DATABASE_ID);
        this.articleReadersCollection = new ArticleReadersCollection(this.database, this.DATABASE_ID);
        this.badgeChallengesCollection = new BadgeChallengesCollection(this.database, this.DATABASE_ID);
        this.userRelationshipsCollection = new UserRelationshipsCollection(this.database, this.DATABASE_ID);
        this.userTopicRelationshipsCollection = new UserTopicRelationshipsCollection(this.database, this.DATABASE_ID);
        this.articleTopicRelationshipCollection = new ArticleTopicRelationshipCollection(this.database, this.DATABASE_ID);
        this.userRelationSuggestionCollection = new UserRelationSuggestionCollection(this.database, this.DATABASE_ID);
        this.userArticleSuggestionsCollection = new UserArticleSuggestionsCollection(this.database, this.DATABASE_ID);
        this.userActivitiesCollection = new UserActivitiesCollection(this.database, this.DATABASE_ID);
        this.userNotificationsCollection = new UserNotificationsCollection(this.database, this.DATABASE_ID);
        this.draftedArticlesCollection = new DraftedArticlesCollection(this.database, this.DATABASE_ID);
        this.articleStoriesCollection = new ArticleStoriesCollection(this.database, this.DATABASE_ID);
        this.articleStoryDistributionCollection = new ArticleStoryDistributionCollection(this.database, this.DATABASE_ID);
        this.userSocialLinksCollection = new UserSocialLinksCollection(this.database, this.DATABASE_ID);
        this.articleSeriesCollection = new ArticleSeriesCollection(this.database, this.DATABASE_ID);
    }

    /** Create new user */
    public async createUser(user: MUser.IUser) {
        return this.userCollection.createUser(user);
    }

    /** Update user  */
    public async updateUser(user: MUser.IUser) {
        return this.userCollection.updateUser(user);
    }

    /** Fetch currently logged in user  */
    public async fetchLoginUser() {
        return this.userCollection.fetchLoginUser();
    }

    /** Fetch public user by id */
    public async fetchPublicUserByID(userDocID: string) {
        return this.userCollection.fetchPublicUser(userDocID);
    }

    /** Fetch all the topics to choose from */
    public async fetchAllTopics() {
        return this.topicCollection.fetchAllTopics();
    }

    /** Add new article to publish mode */
    public async addArticleToPublishMode(article: MArticle.IArticle) {
        return this.articlesCollection.addArticleInPublishMode(article);
    }

    /** Update the article in publish mode */
    public async updateArticleInPublishMode(article: MArticle.IArticle) {
        return this.articlesCollection.updateArticleInPublishMode(article);
    }

    /** Delete the published article  */
    public async deleteArticleInPublishMode(article: MArticle.IArticle) {
        return this.articlesCollection.deleteArticleInPublishMode(article);
    }

    /** Fetch n article at a time of given user */
    public async fetchPublishedArticles(userDocID: string, prevCursor: MArticle.IArticle | undefined, limit: number) {
        return this.articlesCollection.getWrittenArticlesInPublishedMode(userDocID, prevCursor, limit);
    }

    /** Add new comment */
    public async addComment(comment: MArticleComment.IArticleComment) {
        return this.commentsCollection.addNewComment(comment);
    }

    /** Update the comment  */
    public async updateComment(comment: MArticleComment.IArticleComment) {
        return this.commentsCollection.updateComment(comment);
    }

    /** Delete the comment */
    public async deleteComment(comment: MArticleComment.IArticleComment) {
        return this.commentsCollection.deleteComment(comment);
    }

    /** Fetch n comments at a time of given article  */
    public async fetchComments(articleDocID: string, prevCursor: MArticleComment.IArticleComment | undefined, limit: number) {
        return this.commentsCollection.fetchComments(articleDocID, prevCursor, limit);
    }

    /** Fetch n child comments at a time of given comment  */
    public async fetchChildComments(commentDocID: string, prevCursor: MArticleComment.IArticleComment | undefined, limit: number) {
        return this.commentsCollection.fetchChildComments(commentDocID, prevCursor, limit);
    }

    /** Add like/dislike to the article */
    public async addLikeDislike(like: MArticleLike.IArticleLike) {
        return this.likesCollection.addLikeOrDislike(like);
    }

    /** Update the like/dislike to the article  */
    public async updateLikeDislike(like: MArticleLike.IArticleLike) {
        return this.likesCollection.updateLikeOrDislike(like);
    }

    /** Delete the like/dislike to the article   */
    public async deleteLikeDislike(like: MArticleLike.IArticleLike) {
        return this.likesCollection.deleteLikeOrDislike(like);
    }

    /** Fetch n likes at a time of given article   */
    public async fetchLikes(type: MArticleLike.likesStatus, articleDocID: string, prevCursor: MArticleLike.IArticleLike | undefined, limit: number) {
        return this.likesCollection.fetchLikes(type, articleDocID, prevCursor, limit);
    }

    /** Fetch address of the user */
    public async fetchAddress(userDocID: string) {
        return this.addressCollection.fetchFullAddress(userDocID);
    }

    /** Add new address for the user */
    public async addAddress(address: MAddress.IAddress, user: MUser.IUser) {
        return this.addressCollection.addNewAddress(address, user);
    }

    /** Update address of given user */
    public async updateAddress(address: MAddress.IAddress, user: MUser.IUser) {
        return this.addressCollection.updateAddress(address, user);
    }

    /** Save article */
    public async saveArticle(article: MSavedArticle.ISavedArticle) {
        return this.savedArticlesCollection.saveArticle(article);
    }

    /** Remove saved article */
    public async removeSavedArticle(article: MSavedArticle.ISavedArticle) {
        return this.savedArticlesCollection.removeSavedArticle(article);
    }

    /** Fetch n saved articles at a time of given user  */
    public async fetchSavedArticles(userDocID: string, prevCursor: MSavedArticle.ISavedArticle | undefined, limit: number) {
        return this.savedArticlesCollection.fetchSavedArticles(userDocID, prevCursor, limit);
    }

    /** Add new reader to the article  */
    public async addReader(reader: MArticleReader.IArticleReader) {
        return this.articleReadersCollection.addNewReader(reader);
    }

    /** Fetch article reader of given article */
    public async fetchArticleReaders(articleDocID: string) {
        return this.articleReadersCollection.fetchReaders(articleDocID);
    }

    /** Add new badge challenge for the logged in user */
    public async addBadgeChallenge(challenge: MBadgeChallenge.IBadgeChallenge) {
        return this.badgeChallengesCollection.addNewBadgeChallenge(challenge);
    }

    /** Fetch all the badge challenges for the logged in user  */
    public async fetchAllBadgeChallenges(userDocID: string) {
        return this.badgeChallengesCollection.fetchBadgeChallengesOfUser(userDocID);
    }

    /** Fetch all the completed badge challenges of any user */
    public async fetchCompletedBadgeChallenges(userDocID: string) {
        return this.badgeChallengesCollection.fetchBadgeOfUser(userDocID);
    }

    /** Follow user */
    public async followUser(userRelation: MUserRelationship.IUserRelationship) {
        return this.userRelationshipsCollection.follow(userRelation);
    }

    /** UnFollow user */
    public async unFollowUser(userRelation: MUserRelationship.IUserRelationship) {
        return this.userRelationshipsCollection.unfollow(userRelation);
    }

    /** Fetch n followers of given user  */
    public async fetchFollowers(userDocID: string, prevCursor: MUserRelationship.IUserRelationship | undefined, limit: number) {
        return this.userRelationshipsCollection.fetchFollowers(userDocID, prevCursor, limit);
    }

    /** Fetch n followings of given user */
    public async fetchFollowings(userDocID: string, prevCursor: MUserRelationship.IUserRelationship | undefined, limit: number) {
        return this.userRelationshipsCollection.fetchFollowings(userDocID, prevCursor, limit);
    }

    /** Add new topic to logged in user */
    public async addTopic(topic: MUserTopicRelationship.IUserTopicRelationship) {
        return this.userTopicRelationshipsCollection.addTopic(topic);
    }

    /** Remove topic from logged in user  */
    public async removeTopic(topic: MUserTopicRelationship.IUserTopicRelationship) {
        return this.userTopicRelationshipsCollection.removeTopic(topic);
    }

    /** Fetch all the topics of logged in user  */
    public async fetchTopics(userDocID: string) {
        return this.userTopicRelationshipsCollection.fetchTopics(userDocID);
    }

    /** Fetch all suggested topics of logged in user */
    public async fetchSuggestedTopics(userDocID: string) {
        return this.userTopicRelationshipsCollection.fetchSuggestedTopics(userDocID);
    }

    /** Add new topic to article */
    public async addTopicToArticle(aTopicRelation: MArticleTopicRelationship.IArticleTopicRelationship) {
        return this.articleTopicRelationshipCollection.addNewTopic(aTopicRelation);
    }

    /** Delete topic from article */
    public async deleteTopicFromArticle(aTopicRelation: MArticleTopicRelationship.IArticleTopicRelationship) {
        return this.articleTopicRelationshipCollection.deleteTopic(aTopicRelation);
    }

    /** Fetch all the topics of given article */
    public async fetchTopicsOfArticle(articleDocID: string) {
        return this.articleTopicRelationshipCollection.fetchTopics(articleDocID);
    }

    /** Fetch suggested followers to follow */
    public async fetchSuggestedFollowers(userDocID: string, limit: number) {
        return this.userRelationSuggestionCollection.fetchFollowersToFollow(userDocID, limit);
    }

    /** Mark the suggested follower as stable */
    public async markSuggestedFollowerAsStable(forUserDocID: string, userDocID: string) {
        return this.userRelationSuggestionCollection.updateFollowerSuggestionToStale(forUserDocID, userDocID);
    }

    /** Fetch suggested post for user */
    public async fetchSuggestedPosts(userDocID: string, prevCursor: MArticleRelationSuggestion.IArticleRelationSuggestion | undefined, limit: number) {
        return this.userArticleSuggestionsCollection.fetchSuggestedArticles(userDocID, prevCursor, limit);
    }

    /** Fetch user activities */
    public async fetchUserActivities(userDocID: string, prevCursor: MUserActivity.IUserActivity | undefined, limit: number) {
        return this.userActivitiesCollection.fetchUserActivities(userDocID, prevCursor, limit);
    }

    /** Fetch n notification at a time of logged in user */
    public async fetchNotifications(userDocID: string, prevCursor: MUserNotification.IUserNotification | undefined, limit: number) {
        return this.userNotificationsCollection.userNotifications(userDocID, prevCursor, limit);
    }

    /** Mark the notification as read */
    public async markNotificationAsRead(notification: MUserNotification.IUserNotification) {
        return this.userNotificationsCollection.markNotificationRead(notification.id);
    }

    /** Fetch user notification by topic n at a time */
    public async fetchUserNotificationByTopic(userDocID: string, topic: MUserNotification.notificationTopic, prevCursor: MUserNotification.IUserNotification | undefined, limit: number) {
        return this.userNotificationsCollection.userNotificationByTopic(userDocID, topic, prevCursor, limit);
    }

    /** Fetch all drafted articles */
    public async fetchDraftedArticles() {
        return this.draftedArticlesCollection.getAllDraftArticles();
    }

    /** Fetch single draft article by ID */
    public async fetchDraftArticleByID(articleID: string) {
        return this.draftedArticlesCollection.getDraftArticleByID(articleID);
    }

    /** Delete the drafted article */
    public async deleteDraftArticle(dArticle: MDraftedArticle.IDraftedArticle) {
        return this.draftedArticlesCollection.deleteDraftArticle(dArticle);
    }

    /** Update the drafted article  */
    public async updateDraftArticle(dArticle: MDraftedArticle.IDraftedArticle) {
        return this.draftedArticlesCollection.updateDraftArticle(dArticle);
    }

    /** Create new article */
    public async createArticle(publishedArticle: MArticle.IArticle | null) {
        return this.articlesCollection.createArticle(publishedArticle);
    }

    /** Publish the drafted article */
    public async publishDraftArticle(dArticle: MDraftedArticle.IDraftedArticle) {
        return this.articlesCollection.publishDraftedArticle(dArticle);
    }

    /** Fetch posted article stories by the logged in user */
    public async fetchPostedStories(userDocID: string) {
        return this.articleStoriesCollection.fetchPostedStories(userDocID);
    }

    /** Fetch all the stories for logged in user */
    public async fetchAllStories(userDocID: string) {
        return this.articleStoryDistributionCollection.fetchAllActiveStories(userDocID);
    }

    /** Mark story as viewed */
    public async markStoryAsViewed(story: MArticleStoryDistribution.IArticleStoryDistribution) {
        return this.articleStoryDistributionCollection.markStoryAsSeen(story);
    }

    /** Fetch story viewers */
    public async fetchStoryViewers(story: MArticleStory.IArticleStory) {
        return this.articleStoryDistributionCollection.fetchAllStoryViewers(story);
    }

    /** Add social link to the user */
    public async addSocialLink(socialLink: MUserSocialLink.IUserSocialLink) {
        return this.userSocialLinksCollection.addLink(socialLink);
    }

    /** Update the social link of the user */
    public async updateSocialLink(socialLink: MUserSocialLink.IUserSocialLink) {
        return this.userSocialLinksCollection.updateLink(socialLink);
    }

    /** Add new article series */
    public async addArticleSeries(series: MArticleSeries.IArticleSeries) {
        return this.articleSeriesCollection.addArticleSeries(series);
    }

    /** Update the article series */
    public async updateArticleSeries(series: MArticleSeries.IArticleSeries) {
        return this.articleSeriesCollection.updateArticleSeries(series);
    }

    /** Fetch published article by id */
    public async fetchPublishedArticleByID(articleID: string) {
        return this.articlesCollection.getArticleInPublishMode(articleID);
    }

    /** Fetch is liked by the logged user */
    public async isLikedByUserArticle(articleDocID: string) {
        return this.likesCollection.isLikedByUserLoggedIn(articleDocID);
    }

    /** Is saved by the user */
    public async isSavedByUserArticle(articleDocID: string) {
        return this.savedArticlesCollection.isSavedByUserArticle(articleDocID);
    }

    /** Fetch single saved article given user  and article */
    public async fetchSavedArticle(userDocID: string, articleDocID: string) {
        return this.savedArticlesCollection.fetchSavedArticle(userDocID, articleDocID);
    }

    /** Fetch social link of the public user */
    public async fetchSocialLink(userDocID: string) {
        return this.userSocialLinksCollection.fetchAllLinks(userDocID);
    }

    /** Fetch number of likes of given article */
    public async fetchNumberOfLikes(articleDocID: string, status: MArticleLike.likesStatus): Promise<number> {
        return this.likesCollection.fetchNumberOfLikes(articleDocID, status);
    }

    /** Fetch number of comments */
    public async fetchCommentsCount(articleDocID: string) {
        return this.commentsCollection.fetchCommentsCount(articleDocID);
    }

    /** Am i following the user */
    public async amIFollowing(targetUser: MUser.SUser) {
        return this.userRelationshipsCollection.amIFollowing(targetUser);
    }

    public async updateFollowerSuggestionViewCount(suggestedFollower: MUserRelationSuggestion.IUserRelationSuggestion) {
        return this.userRelationSuggestionCollection.updateFollowerSuggestionViewCount(suggestedFollower);
    }

    /** Update the impression count of the suggested article */
    public async updateArticleSuggestionViewCount(suggestedArticle: MArticleRelationSuggestion.IArticleRelationSuggestion) {
        return this.userArticleSuggestionsCollection.increaseImpressionCountSuggestedArticle(suggestedArticle);
    }

    /** Make suggested article stale */
    public async markSuggestedArticleAsStale(suggestedArticle: MArticleRelationSuggestion.IArticleRelationSuggestion) {
        return this.userArticleSuggestionsCollection.markSuggestedArticleStale(suggestedArticle);
    }

    /** Fetch n best article for the logged in user */
    public async fetchBestArticles(prevCursor: (MArticleTopicRelationship.IArticleTopicRelationship | undefined)[], n: number) {
        return this.articleTopicRelationshipCollection.fetchBestArticles(prevCursor, n);
    }

    /** Article clicked */
    public async articleClicked(article: MArticle.IArticle) {
        return this.userArticleSuggestionsCollection.articleClicked(article);
    }
}
