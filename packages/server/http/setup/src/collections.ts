import { AppwriteCollection } from '@tabnode/utils';
import { AppwriteException, Databases, Permission, Role } from 'node-appwrite';

export class CreateCollections {
    constructor(private database: Databases, private databaseID: string) {}

    /**
     * Creates multiple collections in the database.
     *
     * @return {Promise} A promise that resolves when all the collections are created.
     */
    async createCollections(): Promise<any> {
        const collectionAddress = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ADDRESSES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ADDRESSES, AppwriteCollection.ADDRESSES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionArticles = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLES, AppwriteCollection.ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionArticleDistribution = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, AppwriteCollection.ARTICLES_DISTRIBUTION, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionArticleDistributionClone = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionArticleReaders = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_READERS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_READERS, AppwriteCollection.ARTICLE_READERS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionArticleSeries = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_SERIES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_SERIES, AppwriteCollection.ARTICLE_SERIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionArticleStories = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES, AppwriteCollection.ARTICLE_STORIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionArticleStoriesDistribution = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionArticleTopicRelationships = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionBadges = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.BADGES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.BADGES, AppwriteCollection.BADGES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionBadgesChallenges = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.BADGE_CHALLENGES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, AppwriteCollection.BADGE_CHALLENGES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionComments = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.COMMENTS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.COMMENTS, AppwriteCollection.COMMENTS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionDraftedArticles = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, AppwriteCollection.DRAFTED_ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionLikes = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.LIKES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.LIKES, AppwriteCollection.LIKES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionSavedArticles = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.SAVED_ARTICLES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.SAVED_ARTICLES, AppwriteCollection.SAVED_ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionSponsors = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.SPONSORS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.SPONSORS, AppwriteCollection.SPONSORS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionTopics = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.TOPICS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.TOPICS, AppwriteCollection.TOPICS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionTransactions = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.TRANSACTIONS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.TRANSACTIONS, AppwriteCollection.TRANSACTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUserActivities = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_ACTIVITIES);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_ACTIVITIES, AppwriteCollection.USER_ACTIVITIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUsers = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USERS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USERS, AppwriteCollection.USERS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUserArticleSuggestions = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUserArticleSuggestionsCopy = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUserNotifications = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, AppwriteCollection.USER_NOTIFICATIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUserRelationships = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, AppwriteCollection.USER_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUserRelationshipSuggestions = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, AppwriteCollection.USER_RELATION_SUGGESTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUserSocialLinks = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, AppwriteCollection.USER_SOCIAL_LINKS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        const collectionUserTopicRelationships = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS);
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                }
            }
        };

        await Promise.allSettled([
            collectionAddress,
            collectionArticles,
            collectionArticleDistribution,
            collectionArticleDistributionClone,
            collectionArticleReaders,
            collectionArticleSeries,
            collectionArticleStories,
            collectionArticleStoriesDistribution,
            collectionArticleTopicRelationships,
            collectionBadges,
            collectionBadgesChallenges,
            collectionComments,
            collectionDraftedArticles,
            collectionLikes,
            collectionSavedArticles,
            collectionSponsors,
            collectionTopics,
            collectionTransactions,
            collectionUserActivities,
            collectionUsers,
            collectionUserArticleSuggestions,
            collectionUserArticleSuggestionsCopy,
            collectionUserNotifications,
            collectionUserRelationships,
            collectionUserRelationshipSuggestions,
            collectionUserSocialLinks,
            collectionUserTopicRelationships,
        ]);
    }

    /**
     * Creates MUser attributes in the database.
     *
     * @return {Promise} A promise that resolves when all attributes are created.
     */
    public async createMUser(): Promise<any> {
        const createFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'fullName');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'fullName', 30, true);
                }
            }
        };

        const createEmailAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'email');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'email', 255, true);
                }
            }
        };

        const createAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'aboutMe');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'aboutMe', 255, false);
                }
            }
        };

        const createMobileAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'mobile');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'mobile', 12, true);
                }
            }
        };

        const createIsActiveAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'isActive');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USERS, 'isActive', true);
                }
            }
        };

        const createProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'profilePic');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'profilePic', 255, false);
                }
            }
        };

        const createAddressDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'address_docID');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'address_docID', 36, true);
                }
            }
        };

        const createTrendNumberOfTopicsAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfTopics');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfTopics', true);
                }
            }
        };

        const createTrendNumberOfArticlesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfArticles');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfArticles', true);
                }
            }
        };

        const createTrendNumberOfCommentsAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfComments');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfComments', true);
                }
            }
        };

        const createTrendNumberOfLikesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfLikes');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfLikes', true);
                }
            }
        };

        const createTrendNumberOfDislikesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfDislikes');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfDislikes', true);
                }
            }
        };

        const createTrendNumberOfReadAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfRead');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfRead', true);
                }
            }
        };

        const createTrendNumberOfSavedAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfSaved');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfSaved', true);
                }
            }
        };

        const createTrendNumberOfClickAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfClick');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfClick', true);
                }
            }
        };

        const createTrendNumberOfShareAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfShare');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfShare', true);
                }
            }
        };

        const createTrendBoostPointAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_boostPoint');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_boostPoint', true);
                }
            }
        };

        const createTrendResetDateAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_resetDate');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_resetDate', true);
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'createdAt');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'createdAt', true);
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'updatedAt');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'updatedAt', true);
                }
            }
        };

        await Promise.allSettled([
            createFullNameAttribute,
            createEmailAttribute,
            createAboutMeAttribute,
            createProfilePicAttribute,
            createAddressDocIDAttribute,
            createMobileAttribute,
            createIsActiveAttribute,
            createTrendNumberOfTopicsAttribute,
            createTrendNumberOfArticlesAttribute,
            createTrendNumberOfCommentsAttribute,
            createTrendNumberOfLikesAttribute,
            createTrendNumberOfDislikesAttribute,
            createTrendNumberOfReadAttribute,
            createTrendNumberOfSavedAttribute,
            createTrendNumberOfClickAttribute,
            createTrendNumberOfShareAttribute,
            createTrendBoostPointAttribute,
            createTrendResetDateAttribute,
            createCreatedAtAttribute,
            createUpdatedAtAttribute,
        ]);
    }

    /**
     * Creates an MBadge.
     *
     * @return {Promise<void>} Promise that resolves when the MBadge is created.
     */
    public async createMBadge(): Promise<void> {
        const createNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'name');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'name', 30, true);
                }
            }
        };

        const createBadgesDescriptionAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'description');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'description', 255, true);
                }
            }
        };

        const createColorAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'color');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'color', 8, true);
                }
            }
        };

        const createLogoAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'logo');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'logo', 255, true);
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'createdAt');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGES, 'createdAt', true);
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'updatedAt');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGES, 'updatedAt', true);
                }
            }
        };

        const createNumberOfParticipantsAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfParticipants');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfParticipants', true);
                }
            }
        };

        const createNumberOfWinnerAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfWinner');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfWinner', true);
                }
            }
        };

        const createNumberOfLoserAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfLoser');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfLoser', true);
                }
            }
        };

        await Promise.allSettled([createNameAttribute, createBadgesDescriptionAttribute, createColorAttribute, createLogoAttribute, createCreatedAtAttribute, createUpdatedAtAttribute, createNumberOfParticipantsAttribute, createNumberOfWinnerAttribute, createNumberOfLoserAttribute]);
    }

    /**
     * Creates an MTopic in the database.
     *
     * @return {Promise<void>} A promise that resolves when the MTopic is created.
     */
    public async createMTopic(): Promise<void> {
        const createNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'name');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'name', 30, true);
                }
            }
        };

        const createColorAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'color');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'color', 8, true);
                }
            }
        };

        const createLogoAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'logo');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'logo', 255, true);
                }
            }
        };

        const createDescriptionAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'description');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'description', 255, true);
                }
            }
        };

        const createWeeklyTrendNumberOfArticlesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_numberOfArticles');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_numberOfArticles', 36, true);
                }
            }
        };

        const createWeeklyTrendBoostPointAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_boostPoint');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_boostPoint', true);
                }
            }
        };

        const createWeeklyTrendResetDateAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_resetDate');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_resetDate', true);
                }
            }
        };

        const createMonthlyTrendNumberOfArticlesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_numberOfArticles');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_numberOfArticles', 36, true);
                }
            }
        };

        const createMonthlyTrendBoostPointAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_boostPoint');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_boostPoint', true);
                }
            }
        };

        const createMonthlyTrendResetDateAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_resetDate');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_resetDate', true);
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'createdAt');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'createdAt', true);
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'updatedAt');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'updatedAt', true);
                }
            }
        };

        const createAssociatedUsersCountAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'associatedUsersCount');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.TOPICS, 'associatedUsersCount', true);
                }
            }
        };

        await Promise.allSettled([
            createNameAttribute,
            createColorAttribute,
            createLogoAttribute,
            createDescriptionAttribute,
            createWeeklyTrendNumberOfArticlesAttribute,
            createWeeklyTrendBoostPointAttribute,
            createWeeklyTrendResetDateAttribute,
            createMonthlyTrendNumberOfArticlesAttribute,
            createMonthlyTrendBoostPointAttribute,
            createMonthlyTrendResetDateAttribute,
            createAssociatedUsersCountAttribute,
            createCreatedAtAttribute,
            createUpdatedAtAttribute,
        ]);
    }

    /**
     * Creates the 'MArticle' in the database by creating all the necessary attributes for the article.
     *
     * @return {Promise<void>} Resolves when all the attributes have been created.
     */
    public async createMArticle(): Promise<void> {
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'title', 255, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'subTitle', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'body', 65535, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'coverImage', 255, false);
        const prop5 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'createdAt', true);
        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'updatedAt', true);

        // Writer Attributes
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_fullName', 30, true);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_profilePic', 255, false);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_aboutMe', 255, false);
        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_docID', 36, true);

        const prop11 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'readTimeInMin', false);

        // Article Series Attributes
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'articleSeries_name', 30, true);
        const prop13 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'articleSeries_docID', 36, true);

        const prop14 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'canPublishStory', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14]);
    }

    /**
     * Creates an article comment.
     *
     * @return {Promise<void>} A promise that resolves when the comment has been created.
     */
    public async createMArticleComment(): Promise<void> {
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'body', 65535, true);
        const prop2 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'createdAt', true);
        const prop3 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'updatedAt', true);

        // Commented By Attributes
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_fullName', 30, true);
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_profilePic', 255, false);
        const prop6 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_aboutMe', 255, false);
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_docID', 36, true);

        // Article Attributes
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'article_docID', 36, true);
        const prop14 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'article_title', 255, true);

        // Writer Attributes
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_fullName', 30, true);
        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_profilePic', 255, false);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_aboutMe', 255, false);
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_docID', 36, true);

        // Parent Comment Attributes
        const prop13 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'parentComment_docID', 36, false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14]);
    }

    /**
     * Create an MArticleLike with the specified attributes.
     *
     * @return {Promise<void>} A promise that resolves once the MArticleLike is created.
     */
    public async createMArticleLike(): Promise<void> {
        // Liked By Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_docID', 36, true);

        // Article Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'article_docID', 36, true);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'article_title', 36, true);

        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.LIKES, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.LIKES, 'updatedAt', true);

        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'status', 10, true); // ENUM FLAG

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9]);
    }

    /**
     * Creates a new MAddress in the database.
     *
     * @return {Promise<void>} A Promise that resolves when the MAddress is successfully created.
     */
    public async createMAddress(): Promise<void> {
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'street', 255, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'city', 255, true);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'landmark', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'state', 255, true);
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'country', 255, true);
        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'updatedAt', true);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'zipCode', 255, true);

        // Address Of (MUser.SUser) Attributes
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_fullName', 30, true);
        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_profilePic', 255, false);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_aboutMe', 255, false);
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_docID', 36, true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12]);
    }

    /**
     * Creates a new saved article in the database.
     *
     * @return {Promise<void>} A promise that resolves when the article is created.
     */
    public async createMSavedArticle(): Promise<void> {
        // Article Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'article_docID', 36, true);
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'article_title', 255, true);

        // Saved By Attributes
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_fullName', 30, true);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_profilePic', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_aboutMe', 255, false);
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_docID', 36, true);

        // Writer Attributes
        const prop6 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_fullName', 30, true);
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_profilePic', 255, false);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_aboutMe', 255, false);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_docID', 36, true);

        const prop10 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'createdAt', true);
        const prop11 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'updatedAt', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12]);
    }

    /**
     * Creates an MArticleReader.
     *
     * @return {Promise<void>} A promise that resolves when the MArticleReader is created.
     */
    public async createMArticleReader(): Promise<void> {
        // Article Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'article_docID', 36, true);
        const prop15 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'article_title', 255, true);

        // Reader Attributes
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_fullName', 30, true);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_profilePic', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_aboutMe', 255, false);
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_docID', 36, true);

        // Writer Attributes
        const prop6 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_fullName', 30, true);
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_profilePic', 255, false);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_aboutMe', 255, false);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_docID', 36, true);

        const prop10 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'createdAt', true);
        const prop11 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'updatedAt', true);

        const prop12 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'readTimeInMin', false);
        const prop13 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'articleTimeInMin', false);
        const prop14 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'isLive', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14, prop15]);
    }

    /**
     * Create an MBadge Challenge.
     *
     * @return {Promise<void>} Promise that resolves when the MBadge Challenge is created.
     */
    public async createMBadgeChallenge(): Promise<void> {
        // Participant Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_docID', 36, true);

        // Badge Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'badge_docID', 36, true);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'badge_name', 255, true);

        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'updatedAt', true);

        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'status', 10, true); // ENUM FLAG

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9]);
    }

    /**
     * Creates the MUserRelationship.
     *
     * @return {Promise<void>} A Promise that resolves when the MUserRelationship is created.
     */
    public async createMUserRelationship(): Promise<void> {
        // From User Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_docID', 36, true);

        // To User Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_fullName', 30, true);
        const prop6 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_profilePic', 255, false);
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_aboutMe', 255, false);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_docID', 36, true);

        const prop9 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'createdAt', true);
        const prop10 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'updatedAt', true);

        const prop11 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromTrend_boostPoint', false); // FloatField
        const prop12 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromTrend_resetDate', false); // DateField

        const prop13 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toTrend_boostPoint', false); // FloatField
        const prop14 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toTrend_resetDate', false); // DateField

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14]);
    }

    /**
     * Creates a relationship between a user and a topic in the database.
     *
     * @return {Promise<void>} A promise that resolves when all the attributes have been created.
     */
    public async createMUserTopicRelationship(): Promise<void> {
        // User Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_docID', 36, true);

        // Topic Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_docID', 36, true);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_name', 255, true);
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_color', 8, true);
        const prop13 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_logo', 255, true);

        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'updatedAt', true);

        const prop8 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'trend_boostPoint', false); // FloatField
        const prop9 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'trend_resetDate', false); // DateField

        const prop10 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'isStable', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13]);
    }

    /**
     * Create a relationship between an article and a topic in the database.
     *
     * @return {Promise<void>} A promise that resolves when the relationship is created.
     */
    public async createMArticleTopicRelationship(): Promise<void> {
        // Article Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'article_docID', 36, true);
        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'article_title', 255, true);

        // Topic Attributes
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_docID', 36, true);
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_name', 255, true);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_color', 8, true);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_logo', 255, true);

        const prop3 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'createdAt', true);
        const prop4 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'updatedAt', true);

        const prop5 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'trend_boostPoint', false); // FloatField
        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'trend_resetDate', false); // DateField

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10]);
    }

    /**
     * Create MUser Relation Suggestion.
     *
     * This function creates user relation suggestions in the database.
     * It creates attributes for both the user and the relation.
     * The attributes include full name, profile picture, about me, document ID, creation timestamp, update timestamp,
     * impression count, boost point, and staleness indicator.
     *
     * @return {Promise<void>} A promise that resolves when all the attributes are created.
     */
    public async createMUserRelationSuggestion(): Promise<void> {
        // For User Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_docID', 36, true);

        // User Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_fullName', 30, true);
        const prop6 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_profilePic', 255, false);
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_aboutMe', 255, false);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_docID', 36, true);

        const prop9 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'createdAt', true);
        const prop10 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'updatedAt', true);

        const prop11 = this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'impressionCount', false); // IntegerField
        const prop12 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'boostPoint', false); // FloatField
        const prop13 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'isStale', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13]);
    }

    /**
     * Creates a MArticleRelationSuggestion.
     *
     * @return {Promise<void>} A promise that resolves when all the attributes are created.
     */
    public async createMArticleRelationSuggestion(): Promise<void> {
        // For User Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_docID', 36, true);

        // Article Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'article_docID', 36, true);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'article_title', 255, true);

        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'updatedAt', true);

        const prop8 = this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'impressionCount', false); // IntegerField
        const prop9 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'boostPoint', false); // FloatField
        const prop10 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'isStale', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11]);
    }

    /**
     * Creates MUserArticleSuggestionsCopy.
     *
     * @return {Promise<void>} Promise that resolves when all properties are created.
     */
    public async createMUserArticleSuggestionsCopy(): Promise<void> {
        // For User Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_docID', 36, true);

        // Article Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'article_docID', 36, true);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'article_title', 255, true);

        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'updatedAt', true);

        const prop8 = this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'impressionCount', false); // IntegerField
        const prop9 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'boostPoint', false); // FloatField
        const prop10 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'isStale', false);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11]);
    }

    /**
     * Creates MUserActivities.
     *
     * @return {Promise<void>} Promise that resolves once the MUserActivities are created
     */
    public async createMUserActivities(): Promise<void> {
        // For User Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_docID', 36, true);

        // Article Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'article_docID', 36, true);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'article_title', 255, true);

        const prop6 = this.database.createEnumAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'action', ['LIKE', 'READ', 'COMMENT', 'SAVE', 'CREATE', 'DISLIKE', 'JOINED'], true);

        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'createdAt', true);
        const prop8 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'updatedAt', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9]);
    }

    /**
     * Creates multiple user notifications with various attributes.
     *
     * @return {Promise<void>} A promise that resolves when all notifications are created.
     */
    public async createMUserNotifications(): Promise<void> {
        // For User Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_docID', 36, true);

        // Originator Attributes
        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_fullName', 30, true);
        const prop6 = this.database.createEnumAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_type', ['TABNODE', 'USER'], true);
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_profilePic', 255, false);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_docID', 36, false);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_aboutMe', 255, false);

        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'title', 255, true);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'notification', 65535, true);
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'link', 255, true);

        const prop13 = this.database.createEnumAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'topic', ['LIKE', 'COMMENT', 'FOLLOW', 'MENTION', 'GENERAL'], true);

        const prop14 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'isRead', true);

        const prop15 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'createdAt', true);
        const prop16 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'updatedAt', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14, prop15, prop16]);
    }

    /**
     * Create MDraftedArticles
     *
     * @return {Promise<void>} - A promise that resolves when all attributes are created
     */
    public async createMDraftedArticles(): Promise<void> {
        // For Drafted Article Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_title', 255, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_subTitle', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_body', 65535, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_coverImage', 255, false);
        const prop5 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_createdAt', true);
        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_updatedAt', true);
        const prop7 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_fullName', 30, true);
        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_profilePic', 255, false);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_aboutMe', 255, false);
        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_docID', 36, true);
        const prop11 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_readTimeInMin', false);
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'articleSeries_name', 30, true);
        const prop13 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'articleSeries_docID', 36, true);
        const prop14 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_canPublishStory', false);

        const prop15 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'originalArticle_docID', 36, false);
        const prop18 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'originalArticle_title', 255, false);

        const prop16 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'createdAt', true);
        const prop17 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'updatedAt', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12, prop13, prop14, prop15, prop16, prop17, prop18]);
    }

    /**
     * Creates Article Stories in the database.
     *
     * @return {Promise<void>} Resolves when all Article Story attributes are created.
     */
    public async createMArticleStories(): Promise<void> {
        // For Article Story Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'article_docID', 36, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'article_title', 255, true);

        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'story_backgroundImage', 255, true);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'story_summery', 500, true);

        const prop5 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'createdAt', true);
        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'updatedAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'expireAt', true);

        const prop8 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_fullName', 30, true);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_profilePic', 255, false);
        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_aboutMe', 255, false);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_docID', 36, true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11]);
    }

    /**
     * Creates an Article Series in the database.
     *
     * @return {Promise<void>} A Promise that resolves when the Article Series is created.
     */
    public async createMArticleSeries(): Promise<void> {
        // For Article Series Attributes
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'name', 30, true);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'description', 255, true);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'coverImage', 255, true);
        const prop5 = this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'numberOfArticles', true);
        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'updatedAt', true);

        await Promise.all([prop2, prop3, prop4, prop5, prop6, prop7]);
    }

    /**
     * Creates an Article Story Distribution.
     *
     * @return {Promise<void>} Resolves when all attributes are created
     */
    public async createMArticleStoryDistribution(): Promise<void> {
        // For Article Story Distribution Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_docID', 36, true);

        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'story_docID', 36, true);

        const prop6 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'boostPoint', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'createdAt', true);
        const prop8 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'updatedAt', true);
        const prop9 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'expireAt', true);
        const prop10 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'isSeen', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10]);
    }

    /**
     * Creates a new MUserSocialLink.
     *
     * @async
     * @public
     * @return {Promise<void>} - Resolves when all attributes have been created.
     */
    public async createMUserSocialLink(): Promise<void> {
        // For User Social Link Attributes
        const prop1 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_fullName', 30, true);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_profilePic', 255, false);
        const prop3 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_aboutMe', 255, false);
        const prop4 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_docID', 36, true);

        const prop5 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'socialLink', 255, true);

        const prop6 = this.database.createEnumAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'type', ['WEB', 'TWITTER', 'INSTAGRAM', 'LINKEDIN', 'GITHUB'], true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'createdAt', true);
        const prop8 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'updatedAt', true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8]);
    }

    /**
     * Creates a new article distribution in the database.
     *
     * @return {Promise<void>} A Promise that resolves when the article distribution is created.
     */
    public async createMArticleDistribution(): Promise<void> {
        const prop1 = this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'phase', false);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'among', 255, false);
        const prop3 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'boostPoint', false);
        const prop4 = this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'impressionCount', false);
        const prop5 = this.database.createEnumAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'trackOrder', ['DATE_asc', 'DATE_desc'], false);
        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'updatedAt', true);
        const prop8 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'isStale', false);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'article_docID', 36, true);
        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'article_title', 255, false);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'topicIDS', 255, false, undefined, true);
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'lastUserIDS', 255, false, undefined, true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12]);
    }

    /**
     * Creates a copy of the MArticleDistribution object in the database.
     *
     * @return {Promise<void>} - A promise that resolves when all the properties of the MArticleDistribution object are created.
     */
    public async createMArticleDistributionCopy(): Promise<void> {
        const prop1 = this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'phase', false);
        const prop2 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'among', 255, false);
        const prop3 = this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'boostPoint', false);
        const prop4 = this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'impressionCount', false);
        const prop5 = this.database.createEnumAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'trackOrder', ['DATE_asc', 'DATE_desc'], false);
        const prop6 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'createdAt', true);
        const prop7 = this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'updatedAt', true);
        const prop8 = this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'isStale', false);
        const prop9 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'article_docID', 36, true);
        const prop10 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'article_title', 255, false);
        const prop11 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'topicIDS', 255, false, undefined, true);
        const prop12 = this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'lastUserIDS', 255, false, undefined, true);

        await Promise.all([prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12]);
    }

    /**
     * Initializes the necessary collections and tables in the database.
     *
     * @return {Promise<void>} A promise that resolves when the initialization is complete.
     */
    public async init(): Promise<void> {
        await this.createCollections();
        await this.createMUser();
        await this.createMBadge();
        await this.createMTopic();
        await this.createMArticle();
        await this.createMArticleComment();
        await this.createMArticleLike();
        await this.createMAddress();
        await this.createMSavedArticle();
        await this.createMArticleReader();
        await this.createMBadgeChallenge();
        await this.createMUserRelationship();
        await this.createMUserTopicRelationship();
        await this.createMArticleTopicRelationship();
        await this.createMUserRelationSuggestion();
        await this.createMArticleRelationSuggestion();
        await this.createMUserArticleSuggestionsCopy();
        await this.createMUserActivities();
        await this.createMUserNotifications();
        await this.createMDraftedArticles();
        await this.createMArticleStories();
        await this.createMArticleSeries();
        await this.createMArticleStoryDistribution();
        await this.createMUserSocialLink();
        await this.createMArticleDistribution();
        await this.createMArticleDistributionCopy();
    }
}
