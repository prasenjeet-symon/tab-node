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
        const collectionUsers = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USERS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USERS, AppwriteCollection.USERS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS collection created');
                }
            }
        };

        const collectionBadges = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.BADGES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.BADGES, AppwriteCollection.BADGES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES collection created');
                }
            }
        };

        const collectionTopics = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.TOPICS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.TOPICS, AppwriteCollection.TOPICS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS collection created');
                }
            }
        };

        const collectionArticles = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLES, AppwriteCollection.ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES collection created');
                }
            }
        };

        const collectionComments = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.COMMENTS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.COMMENTS, AppwriteCollection.COMMENTS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS collection created');
                }
            }
        };

        const collectionLikes = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.LIKES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.LIKES, AppwriteCollection.LIKES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES collection created');
                }
            }
        };

        const collectionAddress = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ADDRESSES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES collection already exist');
            } catch (error) {
                console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES collection does not exist. Creating...');
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ADDRESSES, AppwriteCollection.ADDRESSES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES collection created');
                }
            }
        };

        const collectionSavedArticles = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.SAVED_ARTICLES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.SAVED_ARTICLES, AppwriteCollection.SAVED_ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES collection created');
                }
            }
        };

        const collectionArticleReaders = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_READERS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_READERS, AppwriteCollection.ARTICLE_READERS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS collection created');
                }
            }
        };

        const collectionBadgesChallenges = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.BADGE_CHALLENGES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, AppwriteCollection.BADGE_CHALLENGES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES collection created');
                }
            }
        };

        const collectionUserRelationships = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, AppwriteCollection.USER_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS collection created');
                }
            }
        };

        const collectionUserTopicRelationships = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS collection created');
                }
            }
        };

        const collectionArticleTopicRelationships = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS collection created');
                }
            }
        };

        const collectionUserRelationshipSuggestions = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, AppwriteCollection.USER_RELATION_SUGGESTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS collection created');
                }
            }
        };

        const collectionUserArticleSuggestions = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS collection created');
                }
            }
        };

        const collectionUserArticleSuggestionsCopy = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY collection created');
                }
            }
        };

        const collectionUserActivities = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_ACTIVITIES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_ACTIVITIES, AppwriteCollection.USER_ACTIVITIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES collection created');
                }
            }
        };

        const collectionUserNotifications = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, AppwriteCollection.USER_NOTIFICATIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS collection created');
                }
            }
        };

        const collectionSponsors = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.SPONSORS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SPONSORS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SPONSORS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.SPONSORS, AppwriteCollection.SPONSORS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SPONSORS collection created');
                }
            }
        };

        const collectionDraftedArticles = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, AppwriteCollection.DRAFTED_ARTICLES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES collection created');
                }
            }
        };

        const collectionTransactions = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.TRANSACTIONS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TRANSACTIONS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TRANSACTIONS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.TRANSACTIONS, AppwriteCollection.TRANSACTIONS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TRANSACTIONS collection created');
                }
            }
        };

        const collectionArticleStories = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES, AppwriteCollection.ARTICLE_STORIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES collection created');
                }
            }
        };

        const collectionArticleSeries = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_SERIES);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_SERIES, AppwriteCollection.ARTICLE_SERIES, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES collection created');
                }
            }
        };

        const collectionArticleStoriesDistribution = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION collection created');
                }
            }
        };

        const collectionUserSocialLinks = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, AppwriteCollection.USER_SOCIAL_LINKS, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS collection created');
                }
            }
        };

        const collectionArticleDistribution = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, AppwriteCollection.ARTICLES_DISTRIBUTION, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION collection created');
                }
            }
        };

        const collectionArticleDistributionClone = async () => {
            try {
                await this.database.getCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE);
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE collection already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE collection does not exist. Creating...');
                    await this.database.createCollection(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, [Permission.read(Role.any()), Permission.write(Role.users()), Permission.delete(Role.users()), Permission.update(Role.users())]);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE collection created');
                }
            }
        };

        console.log('\x1b[33m%s\x1b[0m', 'Creating collections...');
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
        console.log('\x1b[32m%s\x1b[0m', 'Collections created');
    }

    /**
     * Creates MUser attributes in the database.
     *
     * @return {Promise} A promise that resolves when all attributes are created.
     */
    public async createMUser(): Promise<any> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating AppwriteCollection.USER attributes...');

        const createFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.fullName attribute created');
                }
            }
        };

        const createEmailAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'email');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.email attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.email attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'email', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.email attribute created');
                }
            }
        };

        const createAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.aboutMe attribute created');
                }
            }
        };

        const createMobileAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'mobile');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.mobile attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.mobile attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'mobile', 12, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.mobile attribute created');
                }
            }
        };

        const createIsActiveAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'isActive');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.isActive attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.isActive attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USERS, 'isActive', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.isActive attribute created');
                }
            }
        };

        const createProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.profilePic attribute created');
                }
            }
        };

        const createAddressDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'address_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.address_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.address_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'address_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.address_docID attribute created');
                }
            }
        };

        // address
        // address_address
        const createAddressAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'address_address');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.address attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.address attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USERS, 'address_address', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.address attribute created');
                }
            }
        }

        const createTrendNumberOfTopicsAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfTopics');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfTopics attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfTopics attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfTopics', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfTopics attribute created');
                }
            }
        };

        const createTrendNumberOfArticlesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfArticles');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfArticles attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfArticles attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfArticles', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfArticles attribute created');
                }
            }
        };

        const createTrendNumberOfCommentsAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfComments');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfComments attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfComments attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfComments', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfComments attribute created');
                }
            }
        };

        const createTrendNumberOfLikesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfLikes');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfLikes attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfLikes attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfLikes', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfLikes attribute created');
                }
            }
        };

        const createTrendNumberOfDislikesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfDislikes');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfDislikes attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfDislikes attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfDislikes', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfDislikes attribute created');
                }
            }
        };

        const createTrendNumberOfReadAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfRead');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfRead attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfRead attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfRead', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfRead attribute created');
                }
            }
        };

        const createTrendNumberOfSavedAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfSaved');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfSaved attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfSaved attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfSaved', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfSaved attribute created');
                }
            }
        };

        const createTrendNumberOfClickAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfClick');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfClick attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfClick attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfClick', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfClick attribute created');
                }
            }
        };

        const createTrendNumberOfShareAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfShare');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfShare attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfShare attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_numberOfShare', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.numberOfShare attribute created');
                }
            }
        };

        const createTrendBoostPointAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_boostPoint', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.boostPoint attribute created');
                }
            }
        };

        const createTrendResetDateAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_resetDate');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.trend.resetDate attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.trend.resetDate attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'trend_resetDate', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.trend.resetDate attribute created');
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USERS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USERS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USERS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USERS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS.updatedAt attribute created');
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
            createAddressAttribute
        ]);

        console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USERS all attributes created');
    }

    /**
     * Creates an MBadge.
     *
     * @return {Promise<void>} Promise that resolves when the MBadge is created.
     */
    public async createMBadge(): Promise<void> {
        console.log('\x1b[36m%s\x1b[0m', 'Creating AppwriteCollection.BADGES attributes...');

        const createNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'name');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.name attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.name attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'name', 30, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.name attribute created');
                }
            }
        };

        const createBadgesDescriptionAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'description');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.description attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.description attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'description', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.description attribute created');
                }
            }
        };

        const createColorAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'color');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.color attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.color attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'color', 8, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.color attribute created');
                }
            }
        };

        const createLogoAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'logo');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.logo attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.logo attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGES, 'logo', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.logo attribute created');
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.updatedAt attribute created');
                }
            }
        };

        const createNumberOfParticipantsAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfParticipants');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfParticipants attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfParticipants attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfParticipants', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfParticipants attribute created');
                }
            }
        };

        const createNumberOfWinnerAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfWinner');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfWinner attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfWinner attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfWinner', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfWinner attribute created');
                }
            }
        };

        const createNumberOfLoserAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfLoser');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfLoser attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfLoser attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.BADGES, 'trend_numberOfLoser', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGES.trend.numberOfLoser attribute created');
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
        console.log('\x1b[36m%s\x1b[0m', 'Creating AppwriteCollection.TOPICS attributes...');

        const createNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'name');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.name attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.name attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'name', 30, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.name attribute created');
                }
            }
        };

        const createColorAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'color');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.color attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.color attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'color', 8, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.color attribute created');
                }
            }
        };

        const createLogoAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'logo');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.logo attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.logo attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'logo', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.logo attribute created');
                }
            }
        };

        const createDescriptionAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'description');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.description attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.description attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.TOPICS, 'description', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.description attribute created');
                }
            }
        };

        const createWeeklyTrendNumberOfArticlesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_numberOfArticles');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.numberOfArticles attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.numberOfArticles attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_numberOfArticles', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.numberOfArticles attribute created');
                }
            }
        };

        const createWeeklyTrendBoostPointAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_boostPoint', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.boostPoint attribute created');
                }
            }
        };

        const createWeeklyTrendResetDateAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_resetDate');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.resetDate attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.resetDate attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'weeklyTrend_resetDate', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.weeklyTrend.resetDate attribute created');
                }
            }
        };

        const createMonthlyTrendNumberOfArticlesAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_numberOfArticles');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.monthlyTrend.numberOfArticles attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_numberOfArticles', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.monthlyTrend.numberOfArticles attribute created');
                }
            }
        };

        const createMonthlyTrendBoostPointAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.monthlyTrend.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.monthlyTrend.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_boostPoint', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.monthlyTrend.boostPoint attribute created');
                }
            }
        };

        const createMonthlyTrendResetDateAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_resetDate');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.monthlyTrend.resetDate attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.monthlyTrend.resetDate attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'monthlyTrend_resetDate', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.monthlyTrend.resetDate attribute created');
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.TOPICS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.updatedAt attribute created');
                }
            }
        };

        const createAssociatedUsersCountAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.TOPICS, 'associatedUsersCount');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.TOPICS.associatedUsersCount attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.TOPICS.associatedUsersCount attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.TOPICS, 'associatedUsersCount', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.TOPICS.associatedUsersCount attribute created');
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
        const createTitleAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.title attribute created');
                }
            }
        };

        const createSubTitleAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'subTitle');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.subTitle attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.subTitle attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'subTitle', 1000, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.subTitle attribute created');
                }
            }
        };

        const createBodyAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'body');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.body attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.body attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'body', 65535, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.body attribute created');
                }
            }
        };

        const createCoverImageAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'coverImage');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.coverImage attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.coverImage attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'coverImage', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.coverImage attribute created');
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.updatedAt attribute created');
                }
            }
        };

        // Writer Attributes
        const createWriterFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.fullName attribute created');
                }
            }
        };

        const createWriterProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.profilePic attribute created');
                }
            }
        };

        const createWriterAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.aboutMe attribute created');
                }
            }
        };

        const createWriterDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'writer_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.writer.docID attribute created');
                }
            }
        };

        const createReadTimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'readTimeInMin');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.readTimeInMin attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.readTimeInMin attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'readTimeInMin', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.readTimeInMin attribute created');
                }
            }
        };

        // Article Series Attributes
        const createArticleSeriesNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'articleSeries_name');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.articleSeries.name attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.articleSeries.name attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'articleSeries_name', 30, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.articleSeries.name attribute created');
                }
            }
        };

        const createArticleSeriesDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'articleSeries_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.articleSeries.docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.articleSeries.docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'articleSeries_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.articleSeries.docID attribute created');
                }
            }
        };

        const createCanPublishStoryAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'canPublishStory');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES.canPublishStory attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES.canPublishStory attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES, 'canPublishStory', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES.canPublishStory attribute created');
                }
            }
        };

        await Promise.allSettled([
            createTitleAttribute,
            createSubTitleAttribute,
            createBodyAttribute,
            createCoverImageAttribute,
            createCreatedAtAttribute,
            createUpdatedAtAttribute,
            createWriterFullNameAttribute,
            createWriterProfilePicAttribute,
            createWriterAboutMeAttribute,
            createWriterDocIDAttribute,
            createReadTimeAttribute,
            createArticleSeriesNameAttribute,
            createArticleSeriesDocIDAttribute,
            createCanPublishStoryAttribute,
        ]);
    }

    /**
     * Creates an article comment.
     *
     * @return {Promise<void>} A promise that resolves when the comment has been created.
     */
    public async createMArticleComment(): Promise<void> {
        const createCommentBodyAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'body');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.body attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.body attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'body', 65535, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.body attribute created');
                }
            }
        };

        const createCommentCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.createdAt attribute created');
                }
            }
        };

        const createCommentUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.updatedAt attribute created');
                }
            }
        };

        // Commented By Attributes
        const createCommentedByFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.fullName attribute created');
                }
            }
        };

        const createCommentedByProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.profilePic attribute created');
                }
            }
        };

        const createCommentedByAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.aboutMe attribute created');
                }
            }
        };

        const createCommentedByDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'commentedBy_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.commentedBy.docID attribute created');
                }
            }
        };

        // Article Attributes
        const createArticleDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.article_docID attribute created');
                }
            }
        };

        const createArticleTitleAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.article_title attribute created');
                }
            }
        };

        // Writer Attributes
        const createWriterFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_fullName attribute created');
                }
            }
        };

        const createWriterProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_profilePic attribute created');
                }
            }
        };

        const createWriterAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_aboutMe attribute created');
                }
            }
        };

        const createWriterDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'writer_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.writer_docID attribute created');
                }
            }
        };

        // Parent Comment Attributes
        const createParentCommentDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'parentComment_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.COMMENTS.parentComment_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.COMMENTS.parentComment_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.COMMENTS, 'parentComment_docID', 36, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.COMMENTS.parentComment_docID attribute created');
                }
            }
        };

        await Promise.allSettled([
            createCommentBodyAttribute,
            createCommentCreatedAtAttribute,
            createCommentUpdatedAtAttribute,
            createCommentedByFullNameAttribute,
            createCommentedByProfilePicAttribute,
            createCommentedByAboutMeAttribute,
            createCommentedByDocIDAttribute,
            createArticleDocIDAttribute,
            createArticleTitleAttribute,
            createWriterFullNameAttribute,
            createWriterProfilePicAttribute,
            createWriterAboutMeAttribute,
            createWriterDocIDAttribute,
            createParentCommentDocIDAttribute,
        ]);
    }

    /**
     * Create an MArticleLike with the specified attributes.
     *
     * @return {Promise<void>} A promise that resolves once the MArticleLike is created.
     */
    public async createMArticleLike(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MArticleLike attributes');

        // Liked By Attributes
        const createLikedByFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_fullName attribute created');
                }
            }
        };

        const createLikedByProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_profilePic attribute created');
                }
            }
        };

        const createLikedByAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_aboutMe attribute created');
                }
            }
        };

        const createLikedByDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'likedBy_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.likedBy_docID attribute created');
                }
            }
        };

        // Article Attributes
        const createArticleDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.article_docID attribute created');
                }
            }
        };

        const createArticleTitleAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.article_title attribute created');
                }
            }
        };

        const createLikedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.LIKES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.createdAt attribute created');
                }
            }
        };

        const createUpdatedAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.LIKES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.updatedAt attribute created');
                }
            }
        };

        const createStatusAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.LIKES, 'status');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.LIKES.status attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.LIKES.status attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.LIKES, 'status', 10, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.LIKES.status attribute created');
                }
            }
        };

        await Promise.allSettled([createLikedByFullNameAttribute, createLikedByProfilePicAttribute, createLikedByAboutMeAttribute, createLikedByDocIDAttribute, createArticleDocIDAttribute, createArticleTitleAttribute, createLikedAtAttribute, createUpdatedAttribute, createStatusAttribute]);
    }

    /**
     * Creates a new MAddress in the database.
     *
     * @return {Promise<void>} A Promise that resolves when the MAddress is successfully created.
     */
    public async createMAddress(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MAddress attributes');

        const createStreetAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'street');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.street attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.street attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'street', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.street attribute created');
                }
            }
        };

        const createCityAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'city');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.city attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.city attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'city', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.city attribute created');
                }
            }
        };

        const createLandmarkAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'landmark');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.landmark attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.landmark attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'landmark', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.landmark attribute created');
                }
            }
        };

        const createStateAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'state');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.state attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.state attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'state', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.state attribute created');
                }
            }
        };

        const createCountryAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'country');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.country attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.country attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'country', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.country attribute created');
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.updatedAt attribute created');
                }
            }
        };

        const createZipCodeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'zipCode');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.zipCode attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.zipCode attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'zipCode', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.zipCode attribute created');
                }
            }
        };

        // Address Of (MUser.SUser) Attributes
        const createAddressOfFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_fullName attribute created');
                }
            }
        };

        const createAddressOfProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_profilePic attribute created');
                }
            }
        };

        const createAddressOfAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_aboutMe attribute created');
                }
            }
        };

        const createAddressOfDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ADDRESSES, 'addressOf_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ADDRESSES.addressOf_docID attribute created');
                }
            }
        };

        await Promise.allSettled([
            createStreetAttribute,
            createCityAttribute,
            createLandmarkAttribute,
            createStateAttribute,
            createCountryAttribute,
            createCreatedAtAttribute,
            createUpdatedAtAttribute,
            createZipCodeAttribute,
            createAddressOfFullNameAttribute,
            createAddressOfProfilePicAttribute,
            createAddressOfAboutMeAttribute,
            createAddressOfDocIDAttribute,
        ]);
    }

    /**
     * Creates a new saved article in the database.
     *
     * @return {Promise<void>} A promise that resolves when the article is created.
     */
    public async createMSavedArticle(): Promise<void> {
        console.log('\x1b[36m%s\x1b[0m', 'Creating saved article...');
        // Article Attributes
        const createSavedArticleDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.article_docID attribute created');
                }
            }
        };

        const createSavedArticleTitleAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.article_title attribute created');
                }
            }
        };

        // Saved By Attributes
        const createSavedByFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_fullName attribute created');
                }
            }
        };

        const createSavedByProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_profilePic attribute created');
                }
            }
        };

        const createSavedByAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_aboutMe attribute created');
                }
            }
        };

        const createSavedByDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'savedBy_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.savedBy_docID attribute created');
                }
            }
        };

        // Writer Attributes
        const createWriterFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_fullName attribute created');
                }
            }
        };

        const createWriterProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_profilePic attribute created');
                }
            }
        };

        const createWriterAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_aboutMe attribute created');
                }
            }
        };

        const createWriterDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'writer_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.writer_docID attribute created');
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.SAVED_ARTICLES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.SAVED_ARTICLES.updatedAt attribute created');
                }
            }
        };

        await Promise.allSettled([
            createSavedArticleDocIDAttribute,
            createSavedArticleTitleAttribute,
            createSavedByFullNameAttribute,
            createSavedByProfilePicAttribute,
            createSavedByAboutMeAttribute,
            createSavedByDocIDAttribute,
            createWriterFullNameAttribute,
            createWriterProfilePicAttribute,
            createWriterAboutMeAttribute,
            createWriterDocIDAttribute,
            createCreatedAtAttribute,
            createUpdatedAtAttribute,
        ]);
    }

    /**
     * Creates an MArticleReader.
     *
     * @return {Promise<void>} A promise that resolves when the MArticleReader is created.
     */
    public async createMArticleReader(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MArticleReader attributes');
        // Article Attributes
        const createArticleDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.article_docID attribute created');
                }
            }
        };

        const createArticleTitleAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.article_title attribute created');
                }
            }
        };

        // Reader Attributes
        const createReaderFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_fullName attribute created');
                }
            }
        };

        const createReaderProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_profilePic attribute created');
                }
            }
        };

        const createReaderAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_aboutMe attribute created');
                }
            }
        };

        const createReaderDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'reader_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.reader_docID attribute created');
                }
            }
        };

        // Writer Attributes
        const createWriterFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_fullName attribute created');
                }
            }
        };

        const createWriterProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_profilePic attribute created');
                }
            }
        };

        const createWriterAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_aboutMe attribute created');
                }
            }
        };

        const createWriterDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'writer_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.writer_docID attribute created');
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.updatedAt attribute created');
                }
            }
        };

        const createReadTimeInMinAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'readTimeInMin');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.readTimeInMin attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.readTimeInMin attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'readTimeInMin', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.readTimeInMin attribute created');
                }
            }
        };

        const createArticleTimeInMinAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'articleTimeInMin');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.articleTimeInMin attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.articleTimeInMin attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'articleTimeInMin', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.articleTimeInMin attribute created');
                }
            }
        };

        const createIsLiveAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'isLive');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.isLive attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.isLive attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLE_READERS, 'isLive', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_READERS.isLive attribute created');
                }
            }
        };

        await Promise.allSettled([
            createArticleDocIDAttribute,
            createArticleTitleAttribute,
            createReaderFullNameAttribute,
            createReaderProfilePicAttribute,
            createReaderAboutMeAttribute,
            createReaderDocIDAttribute,
            createWriterFullNameAttribute,
            createWriterProfilePicAttribute,
            createWriterAboutMeAttribute,
            createWriterDocIDAttribute,
            createCreatedAtAttribute,
            createUpdatedAtAttribute,
            createReadTimeInMinAttribute,
            createArticleTimeInMinAttribute,
            createIsLiveAttribute,
        ]);
    }

    /**
     * Create an MBadge Challenge.
     *
     * @return {Promise<void>} Promise that resolves when the MBadge Challenge is created.
     */
    public async createMBadgeChallenge(): Promise<void> {
        console.log('\x1b[36m%s\x1b[0m', 'Creating MBadge Challenge attributes');
        // Participant Attributes
        const createParticipantFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_fullName attribute created');
                }
            }
        };

        const createParticipantProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_profilePic attribute created');
                }
            }
        };

        const createParticipantAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_aboutMe attribute created');
                }
            }
        };

        const createParticipantDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'participant_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.participant_docID attribute created');
                }
            }
        };

        // Badge Attributes
        const createBadgeDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'badge_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.badge_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.badge_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'badge_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.badge_docID attribute created');
                }
            }
        };

        const createBadgeNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'badge_name');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.badge_name attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.badge_name attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'badge_name', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.badge_name attribute created');
                }
            }
        };

        const createCreatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.updatedAt attribute created');
                }
            }
        };

        const createStatusAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'status');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.status attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.status attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, 'status', 10, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.BADGE_CHALLENGES.status attribute created');
                }
            }
        };

        await Promise.allSettled([createParticipantFullNameAttribute, createParticipantProfilePicAttribute, createParticipantAboutMeAttribute, createParticipantDocIDAttribute, createBadgeDocIDAttribute, createBadgeNameAttribute, createCreatedAtAttribute, createUpdatedAtAttribute, createStatusAttribute]);
    }

    /**
     * Creates the MUserRelationship.
     *
     * @return {Promise<void>} A Promise that resolves when the MUserRelationship is created.
     */
    public async createMUserRelationship(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MUserRelationship...');
        // From User Attributes
        const createFromUserFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_fullName attribute created');
                }
            }
        };

        const createFromUserProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_profilePic attribute created');
                }
            }
        };

        const createFromUserAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_aboutMe attribute created');
                }
            }
        };

        const createFromUserDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromUser_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromUser_docID attribute created');
                }
            }
        };

        // To User Attributes
        const createToUserFullNameAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_fullName attribute created');
                }
            }
        };

        const createToUserProfilePicAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_profilePic attribute created');
                }
            }
        };

        const createToUserAboutMeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_aboutMe attribute created');
                }
            }
        };

        const createToUserDocIDAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toUser_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toUser_docID attribute created');
                }
            }
        };

        const createCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.updatedAt attribute created');
                }
            }
        };

        const createFromTrendBoostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromTrend_boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromTrend_boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromTrend_boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromTrend_boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromTrend_boostPoint attribute created');
                }
            }
        };

        const createFromTrendResetDateDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromTrend_resetDate');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromTrend_resetDate attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromTrend_resetDate attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'fromTrend_resetDate', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.fromTrend_resetDate attribute created');
                }
            }
        };

        const createToTrendBoostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toTrend_boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toTrend_boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toTrend_boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toTrend_boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toTrend_boostPoint attribute created');
                }
            }
        };

        const createToTrendResetDateDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toTrend_resetDate');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toTrend_resetDate attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toTrend_resetDate attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, 'toTrend_resetDate', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATIONSHIPS.toTrend_resetDate attribute created');
                }
            }
        };

        await Promise.allSettled([
            createFromUserFullNameAttribute,
            createFromUserProfilePicAttribute,
            createFromUserAboutMeAttribute,
            createFromUserDocIDAttribute,
            createToUserFullNameAttribute,
            createToUserProfilePicAttribute,
            createToUserAboutMeAttribute,
            createToUserDocIDAttribute,
            createCreatedAtDatetimeAttribute,
            createUpdatedAtDatetimeAttribute,
            createFromTrendBoostPointFloatAttribute,
            createFromTrendResetDateDatetimeAttribute,
            createToTrendBoostPointFloatAttribute,
            createToTrendResetDateDatetimeAttribute,
        ]);
    }

    /**
     * Creates a relationship between a user and a topic in the database.
     *
     * @return {Promise<void>} A promise that resolves when all the attributes have been created.
     */
    public async createMUserTopicRelationship(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MUserTopicRelationship attributes');
        // User Attributes
        const createUserFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_fullName attribute created');
                }
            }
        };

        const createUserProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_profilePic attribute created');
                }
            }
        };

        const createUserAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_aboutMe attribute created');
                }
            }
        };

        const createUserDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'user_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.user_docID attribute created');
                }
            }
        };

        // Topic Attributes
        const createTopicDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_docID attribute created');
                }
            }
        };

        const createTopicNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_name');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_name attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_name attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_name', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_name attribute created');
                }
            }
        };

        const createTopicColorStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_color');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_color attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_color attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_color', 8, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_color attribute created');
                }
            }
        };

        const createTopicLogoStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_logo');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_logo attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_logo attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'topic_logo', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.topic_logo attribute created');
                }
            }
        };

        const createCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.updatedAt attribute created');
                }
            }
        };

        const createTrendBoostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'trend_boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.trend_boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.trend_boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'trend_boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.trend_boostPoint attribute created');
                }
            }
        };

        const createTrendResetDateDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'trend_resetDate');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.trend_resetDate attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.trend_resetDate attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'trend_resetDate', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.trend_resetDate attribute created');
                }
            }
        };

        const createIsStableBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'isStable');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.isStable attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.isStable attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, 'isStable', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_TOPIC_RELATIONSHIPS.isStable attribute created');
                }
            }
        };

        await Promise.allSettled([
            createUserFullNameStringAttribute,
            createUserProfilePicStringAttribute,
            createUserAboutMeStringAttribute,
            createUserDocIDStringAttribute,
            createTopicDocIDStringAttribute,
            createTopicNameStringAttribute,
            createTopicColorStringAttribute,
            createTopicLogoStringAttribute,
            createCreatedAtDatetimeAttribute,
            createUpdatedAtDatetimeAttribute,
            createTrendBoostPointFloatAttribute,
            createTrendResetDateDatetimeAttribute,
            createIsStableBooleanAttribute,
        ]);
    }

    /**
     * Create a relationship between an article and a topic in the database.
     *
     * @return {Promise<void>} A promise that resolves when the relationship is created.
     */
    public async createMArticleTopicRelationship(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MArticleTopicRelationship attributes...');
        // Article Attributes
        const createArticleDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.article_docID attribute created');
                }
            }
        };

        const createArticleTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.article_title attribute created');
                }
            }
        };

        // Topic Attributes
        const createTopicDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_docID attribute created');
                }
            }
        };

        const createTopicNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_name');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_name attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_name attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_name', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_name attribute created');
                }
            }
        };

        const createTopicColorStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_color');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_color attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_color attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_color', 8, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_color attribute created');
                }
            }
        };

        const createTopicLogoStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_logo');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_logo attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_logo attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'topic_logo', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.topic_logo attribute created');
                }
            }
        };

        const createCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.updatedAt attribute created');
                }
            }
        };

        const createTrendBoostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'trend_boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.trend_boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.trend_boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'trend_boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.trend_boostPoint attribute created');
                }
            }
        };

        const createTrendResetDateDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'trend_resetDate');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.trend_resetDate attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.trend_resetDate attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, 'trend_resetDate', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS.trend_resetDate attribute created');
                }
            }
        };

        await Promise.allSettled([
            createArticleDocIDStringAttribute,
            createArticleTitleStringAttribute,
            createTopicDocIDStringAttribute,
            createTopicNameStringAttribute,
            createTopicColorStringAttribute,
            createTopicLogoStringAttribute,
            createCreatedAtDatetimeAttribute,
            createUpdatedAtDatetimeAttribute,
            createTrendBoostPointFloatAttribute,
            createTrendResetDateDatetimeAttribute,
        ]);
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
        console.log('\x1b[33m%s\x1b[0m', 'Creating AppwriteCollection.USER_RELATION_SUGGESTIONS attributes...');
        // For User Attributes
        const createForFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_fullName attribute created');
                }
            }
        };

        const createForProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_profilePic attribute created');
                }
            }
        };

        const createForAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_aboutMe attribute created');
                }
            }
        };

        const createForDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'for_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.for_docID attribute created');
                }
            }
        };

        // User Attributes
        const createUserFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_fullName attribute created');
                }
            }
        };

        const createUserProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_profilePic attribute created');
                }
            }
        };

        const createUserAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_aboutMe attribute created');
                }
            }
        };

        const createUserDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'user_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.user_docID attribute created');
                }
            }
        };

        const createCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.updatedAt attribute created');
                }
            }
        };

        const createImpressionCountIntegerAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'impressionCount');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.impressionCount attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.impressionCount attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'impressionCount', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.impressionCount attribute created');
                }
            }
        };

        const createBoostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.boostPoint attribute created');
                }
            }
        };

        const createIsStaleBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'isStale');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.isStale attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.isStale attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, 'isStale', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_RELATION_SUGGESTIONS.isStale attribute created');
                }
            }
        };

        await Promise.allSettled([
            createForFullNameStringAttribute,
            createForProfilePicStringAttribute,
            createForAboutMeStringAttribute,
            createForDocIDStringAttribute,
            createUserFullNameStringAttribute,
            createUserProfilePicStringAttribute,
            createUserAboutMeStringAttribute,
            createUserDocIDStringAttribute,
            createCreatedAtDatetimeAttribute,
            createUpdatedAtDatetimeAttribute,
            createImpressionCountIntegerAttribute,
            createBoostPointFloatAttribute,
            createIsStaleBooleanAttribute,
        ]);
    }

    /**
     * Creates a MArticleRelationSuggestion.
     *
     * @return {Promise<void>} A promise that resolves when all the attributes are created.
     */
    public async createMArticleRelationSuggestion(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MArticleRelationSuggestion attributes...');
        // For User Attributes
        const createForFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_fullName attribute created');
                }
            }
        };

        const createForProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_profilePic attribute created');
                }
            }
        };

        const createForAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_aboutMe attribute created');
                }
            }
        };

        const createForDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'for_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.for_docID attribute created');
                }
            }
        };

        // Article Attributes
        const createArticleDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.article_docID attribute created');
                }
            }
        };

        const createArticleTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.article_title attribute created');
                }
            }
        };

        const createCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.updatedAt attribute created');
                }
            }
        };

        const createImpressionCountIntegerAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'impressionCount');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.impressionCount attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.impressionCount attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'impressionCount', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.impressionCount attribute created');
                }
            }
        };

        const createBoostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.boostPoint attribute created');
                }
            }
        };

        const createIsStaleBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'isStale');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.isStale attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.isStale attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, 'isStale', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS.isStale attribute created');
                }
            }
        };

        await Promise.allSettled([
            createForFullNameStringAttribute,
            createForProfilePicStringAttribute,
            createForAboutMeStringAttribute,
            createForDocIDStringAttribute,
            createArticleDocIDStringAttribute,
            createArticleTitleStringAttribute,
            createCreatedAtDatetimeAttribute,
            createUpdatedAtDatetimeAttribute,
            createImpressionCountIntegerAttribute,
            createBoostPointFloatAttribute,
            createIsStaleBooleanAttribute,
        ]);
    }

    /**
     * Creates MUserArticleSuggestionsCopy.
     *
     * @return {Promise<void>} Promise that resolves when all properties are created.
     */

    public async createMUserArticleSuggestionsCopy(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating AppwriteCollection.USER_ARTICLE_SUGGESTIONS attribute');
        // For User Attributes
        const createForFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_fullName attribute created');
                }
            }
        };

        const createForProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_profilePic attribute created');
                }
            }
        };

        const createForAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_aboutMe attribute created');
                }
            }
        };

        const createForDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'for_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.for_docID attribute created');
                }
            }
        };

        // Article Attributes
        const createArticleDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.article_docID attribute created');
                }
            }
        };

        const createArticleTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.article_title attribute created');
                }
            }
        };

        const createCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.updatedAt attribute created');
                }
            }
        };

        const createImpressionCountIntegerAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'impressionCount');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.impressionCount attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.impressionCount attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'impressionCount', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.impressionCount attribute created');
                }
            }
        };

        const createBoostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.boostPoint attribute created');
                }
            }
        };

        const createIsStaleBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'isStale');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.isStale attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.isStale attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY, 'isStale', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ARTICLE_SUGGESTIONS_COPY.isStale attribute created');
                }
            }
        };

        await Promise.all([
            createForFullNameStringAttribute,
            createForProfilePicStringAttribute,
            createForAboutMeStringAttribute,
            createForDocIDStringAttribute,
            createArticleDocIDStringAttribute,
            createArticleTitleStringAttribute,
            createCreatedAtDatetimeAttribute,
            createUpdatedAtDatetimeAttribute,
            createImpressionCountIntegerAttribute,
            createBoostPointFloatAttribute,
            createIsStaleBooleanAttribute,
        ]);
    }

    /**
     * Creates MUserActivities.
     *
     * @return {Promise<void>} Promise that resolves once the MUserActivities are created
     */
    public async createMUserActivities(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating AppwriteCollection.USER_ACTIVITIES attributes...');
        // For User Attributes
        const createUserFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_fullName attribute created');
                }
            }
        };

        const createUserProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_profilePic attribute created');
                }
            }
        };

        const createUserAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_aboutMe attribute created');
                }
            }
        };

        const createUserDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'user_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.user_docID attribute created');
                }
            }
        };

        // Article Attributes
        const createArticleDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.article_docID attribute created');
                }
            }
        };

        const createArticleTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.article_title attribute created');
                }
            }
        };

        const createActionEnumAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'action');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.action attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.action attribute does not exist. Creating...');
                    await this.database.createEnumAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'action', ['LIKE', 'READ', 'COMMENT', 'SAVE', 'CREATE', 'DISLIKE', 'JOINED'], true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.action attribute created');
                }
            }
        };

        const createCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_ACTIVITIES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_ACTIVITIES.updatedAt attribute created');
                }
            }
        };

        await Promise.allSettled([createUserFullNameStringAttribute, createUserProfilePicStringAttribute, createUserAboutMeStringAttribute, createUserDocIDStringAttribute, createArticleDocIDStringAttribute, createArticleTitleStringAttribute, createActionEnumAttribute, createCreatedAtDatetimeAttribute, createUpdatedAtDatetimeAttribute]);
    }

    /**
     * Creates multiple user notifications with various attributes.
     *
     * @return {Promise<void>} A promise that resolves when all notifications are created.
     */
    public async createMUserNotifications(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating AppwriteCollection.USER_NOTIFICATIONS attributes...');
        // For User Attributes
        const createFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_fullName attribute created');
                }
            }
        };

        const createProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_profilePic attribute created');
                }
            }
        };

        const createAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_aboutMe attribute created');
                }
            }
        };

        const createDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'user_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.user_docID attribute created');
                }
            }
        };

        // Originator Attributes
        const createOriginatorFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_fullName attribute created');
                }
            }
        };

        const createOriginatorTypeEnumAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_type');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_type attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_type attribute does not exist. Creating...');
                    await this.database.createEnumAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_type', ['TABNODE', 'USER'], true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_type attribute created');
                }
            }
        };

        const createOriginatorProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_profilePic', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_profilePic attribute created');
                }
            }
        };

        const createOriginatorDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_docID', 36, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_docID attribute created');
                }
            }
        };

        const createOriginatorAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'originator_aboutMe', 500, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.originator_aboutMe attribute created');
                }
            }
        };

        const createTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.title attribute created');
                }
            }
        };

        const createNotificationStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'notification');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.notification attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.notification attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'notification', 65535, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.notification attribute created');
                }
            }
        };

        const createLinkStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'link');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.link attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.link attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'link', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.link attribute created');
                }
            }
        };

        const createTopicEnumAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'topic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.topic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.topic attribute does not exist. Creating...');
                    await this.database.createEnumAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'topic', ['LIKE', 'COMMENT', 'FOLLOW', 'MENTION', 'GENERAL'], true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.topic attribute created');
                }
            }
        };

        const createIsReadBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'isRead');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.isRead attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.isRead attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'isRead', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.isRead attribute created');
                }
            }
        };

        const createCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.createdAt attribute created');
                }
            }
        };

        const createUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_NOTIFICATIONS.updatedAt attribute created');
                }
            }
        };

        await Promise.allSettled([
            createFullNameStringAttribute,
            createProfilePicStringAttribute,
            createAboutMeStringAttribute,
            createDocIDStringAttribute,
            createOriginatorFullNameStringAttribute,
            createOriginatorTypeEnumAttribute,
            createOriginatorProfilePicStringAttribute,
            createOriginatorDocIDStringAttribute,
            createOriginatorAboutMeStringAttribute,
            createTitleStringAttribute,
            createNotificationStringAttribute,
            createLinkStringAttribute,
            createTopicEnumAttribute,
            createIsReadBooleanAttribute,
            createCreatedAtDatetimeAttribute,
            createUpdatedAtDatetimeAttribute,
        ]);
    }

    /**
     * Create MDraftedArticles
     *
     * @return {Promise<void>} - A promise that resolves when all attributes are created
     */
    public async createMDraftedArticles(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating AppwriteCollection.DRAFTED_ARTICLES attributes...');
        // For Drafted Article Attributes
        // originalArticle_docID string attribute
        const originalArticleDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'originalArticle_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.originalArticle_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.originalArticle_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'originalArticle_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.originalArticle_docID attribute created');
                }
            }
        };

        // originalArticle_title string attribute
        const originalArticleTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'originalArticle_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.originalArticle_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.originalArticle_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'originalArticle_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.originalArticle_title attribute created');
                }
            }
        };

        // createdAt datetime attribute
        const createdAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.createdAt attribute created');
                }
            }
        };

        // updatedAt datetime attribute
        const updatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.updatedAt attribute created');
                }
            }
        };

        // article_title string attribute
        const articleTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_title attribute created');
                }
            }
        };

        // article_subTitle string attribute
        const articleSubTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_subTitle');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_subTitle attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_subTitle attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_subTitle', 1000, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_subTitle attribute created');
                }
            }
        };

        // body
        // article_body string attribute
        const articleBodyStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_body');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_body attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_body attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_body', 65535, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_body attribute created');
                }
            }
        };

        // coverImage
        // article_coverImage string attribute
        const articleCoverImageStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_coverImage');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_coverImage attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_coverImage attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_coverImage', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_coverImage attribute created');
                }
            }
        };

        // createdAt
        // article_createdAt datetime attribute
        const articleCreatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_createdAt attribute created');
                }
            }
        };

        // updatedAt
        // article_updatedAt datetime attribute
        const articleUpdatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_updatedAt attribute created');
                }
            }
        };

        // writer_fullName
        // article_writer_fullName string attribute
        const articleWriterFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_fullName attribute created');
                }
            }
        };

        // writer_profilePic
        // article_writer_profilePic string attribute
        const articleWriterProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_profilePic', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_profilePic attribute created');
                }
            }
        };

        // writer_aboutMe
        // article_writer_aboutMe string attribute
        const articleWriterAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_aboutMe', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_aboutMe attribute created');
                }
            }
        };

        // writer_docID
        // article_writer_docID string attribute
        const articleWriterDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_writer_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_writer_docID attribute created');
                }
            }
        };

        // readTimeInMin
        // article_readTimeInMin float attribute
        const articleReadTimeInMinFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_readTimeInMin');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_readTimeInMin attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_readTimeInMin attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_readTimeInMin', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_readTimeInMin attribute created');
                }
            }
        };

        // articleSeries_docID
        // article_articleSeries_docID string attribute
        const articleArticleSeriesDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_articleSeries_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_articleSeries_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_articleSeries_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_articleSeries_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_articleSeries_docID attribute created');
                }
            }
        };

        // articleSeries_name
        // article_articleSeries_name string attribute
        const articleArticleSeriesNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_articleSeries_name');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_articleSeries_name attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_articleSeries_name attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_articleSeries_name', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_articleSeries_name attribute created');
                }
            }
        };

        // canPublishStory
        // article_canPublishStory boolean attribute
        const articleCanPublishStoryBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_canPublishStory');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_canPublishStory attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_canPublishStory attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, 'article_canPublishStory', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.DRAFTED_ARTICLES.article_canPublishStory attribute created');
                }
            }
        };

        await Promise.allSettled([
            originalArticleDocIDStringAttribute,
            originalArticleTitleStringAttribute,
            createdAtDatetimeAttribute,
            updatedAtDatetimeAttribute,
            articleTitleStringAttribute,
            articleSubTitleStringAttribute,
            articleBodyStringAttribute,
            articleCoverImageStringAttribute,
            articleCreatedAtDatetimeAttribute,
            articleUpdatedAtDatetimeAttribute,
            articleWriterFullNameStringAttribute,
            articleWriterProfilePicStringAttribute,
            articleWriterAboutMeStringAttribute,
            articleWriterDocIDStringAttribute,
            articleReadTimeInMinFloatAttribute,
            articleArticleSeriesDocIDStringAttribute,
            articleArticleSeriesNameStringAttribute,
            articleCanPublishStoryBooleanAttribute,
        ]);
    }

    /**
     * Creates Article Stories in the database.
     *
     * @return {Promise<void>} Resolves when all Article Story attributes are created.
     */
    public async createMArticleStories(): Promise<void> {
        console.log('\x1b[36m%s\x1b[0m', 'Creating MArticleStories attributes...');
        // For Article Story Attributes
        // article_docID string attribute
        const articleDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.article_docID attribute created');
                }
            }
        };

        // article_title string attribute
        const articleTitleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.article_title attribute created');
                }
            }
        };

        // story_backgroundImage string attribute
        const storyBackgroundImageStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'story_backgroundImage');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.story_backgroundImage attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.story_backgroundImage attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'story_backgroundImage', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.story_backgroundImage attribute created');
                }
            }
        };

        // story_summery string attribute
        const storySummeryStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'story_summery');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.story_summery attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.story_summery attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'story_summery', 1000, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.story_summery attribute created');
                }
            }
        };

        // createdAt datetime attribute
        const createdAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.createdAt attribute created');
                }
            }
        };

        // updatedAt datetime attribute
        const updatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.updatedAt attribute created');
                }
            }
        };

        // expireAt datetime attribute
        const expireAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'expireAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.expireAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.expireAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'expireAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.expireAt attribute created');
                }
            }
        };

        // user_fullName string attribute
        const userFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_fullName attribute created');
                }
            }
        };

        // user_profilePic string attribute
        const userProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_profilePic', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_profilePic attribute created');
                }
            }
        };

        // user_aboutMe string attribute
        const userAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_aboutMe', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_aboutMe attribute created');
                }
            }
        };

        // user_docID string attribute
        const userDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES, 'user_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES.user_docID attribute created');
                }
            }
        };

        await Promise.allSettled([
            articleDocIDStringAttribute,
            articleTitleStringAttribute,
            storyBackgroundImageStringAttribute,
            storySummeryStringAttribute,
            createdAtDatetimeAttribute,
            updatedAtDatetimeAttribute,
            expireAtDatetimeAttribute,
            userFullNameStringAttribute,
            userProfilePicStringAttribute,
            userAboutMeStringAttribute,
            userDocIDStringAttribute,
        ]);
    }

    /**
     * Creates an Article Series in the database.
     *
     * @return {Promise<void>} A Promise that resolves when the Article Series is created.
     */
    public async createMArticleSeries(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating AppwriteCollection.ARTICLE_SERIES attributes...');
        // For Article Series Attributes
        // name string attribute
        const nameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'name');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.name attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.name attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'name', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.name attribute created');
                }
            }
        };

        // description string attribute
        const descriptionStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'description');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.description attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.description attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'description', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.description attribute created');
                }
            }
        };

        // coverImage string attribute
        const coverImageStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'coverImage');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.coverImage attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.coverImage attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'coverImage', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.coverImage attribute created');
                }
            }
        };

        // numberOfArticles integer attribute
        const numberOfArticlesIntegerAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'numberOfArticles');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.numberOfArticles attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.numberOfArticles attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'numberOfArticles', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.numberOfArticles attribute created');
                }
            }
        };

        // createdAt datetime attribute
        const createdAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.createdAt attribute created');
                }
            }
        };

        // updatedAt datetime attribute
        const updatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_SERIES, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_SERIES.updatedAt attribute created');
                }
            }
        };

        await Promise.allSettled([nameStringAttribute, descriptionStringAttribute, coverImageStringAttribute, numberOfArticlesIntegerAttribute, createdAtDatetimeAttribute, updatedAtDatetimeAttribute]);
    }

    /**
     * Creates an Article Story Distribution.
     *
     * @return {Promise<void>} Resolves when all attributes are created
     */
    public async createMArticleStoryDistribution(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION attributes...');
        // for_fullName string attribute
        const forFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_fullName attribute created');
                }
            }
        };

        // for_profilePic string attribute
        const forProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_profilePic', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_profilePic attribute created');
                }
            }
        };

        // for_aboutMe string attribute
        const forAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_aboutMe', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_aboutMe attribute created');
                }
            }
        };

        // for_docID string attribute
        const forDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'for_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.for_docID attribute created');
                }
            }
        };

        // story_docID string attribute
        const storyDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'story_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.story_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.story_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'story_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.story_docID attribute created');
                }
            }
        };

        // boostPoint float attribute
        const boostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'boostPoint', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.boostPoint attribute created');
                }
            }
        };

        // createdAt datetime attribute
        const createdAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.createdAt attribute created');
                }
            }
        };

        // updatedAt datetime attribute
        const updatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.updatedAt attribute created');
                }
            }
        };

        // expireAt datetime attribute
        const expireAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'expireAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.expireAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.expireAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'expireAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.expireAt attribute created');
                }
            }
        };

        // isSeen boolean attribute
        const isSeenBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'isSeen');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.isSeen attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.isSeen attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, 'isSeen', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION.isSeen attribute created');
                }
            }
        };

        await Promise.allSettled([forFullNameStringAttribute, forProfilePicStringAttribute, forAboutMeStringAttribute, forDocIDStringAttribute, storyDocIDStringAttribute, boostPointFloatAttribute, createdAtDatetimeAttribute, updatedAtDatetimeAttribute, expireAtDatetimeAttribute, isSeenBooleanAttribute]);
    }

    /**
     * Creates a new MUserSocialLink.
     *
     * @async
     * @public
     * @return {Promise<void>} - Resolves when all attributes have been created.
     */
    public async createMUserSocialLink(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MUserSocialLink attributes...');
        // user_fullName string attribute
        const userFullNameStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_fullName');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_fullName attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_fullName attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_fullName', 100, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_fullName attribute created');
                }
            }
        };

        // user_profilePic string attribute
        const userProfilePicStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_profilePic');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_profilePic attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_profilePic attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_profilePic', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_profilePic attribute created');
                }
            }
        };

        // user_aboutMe string attribute
        const userAboutMeStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_aboutMe');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_aboutMe attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_aboutMe attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_aboutMe', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_aboutMe attribute created');
                }
            }
        };

        // user_docID string attribute
        const userDocIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'user_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.user_docID attribute created');
                }
            }
        };

        // socialLink string attribute
        const socialLinkStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'socialLink');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.socialLink attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.socialLink attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'socialLink', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.socialLink attribute created');
                }
            }
        };

        // type enum attribute
        const typeEnumAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'type');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.type attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.type attribute does not exist. Creating...');
                    await this.database.createEnumAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'type', ['WEB', 'TWITTER', 'INSTAGRAM', 'LINKEDIN', 'GITHUB'], true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.type attribute created');
                }
            }
        };

        // createdAt datetime attribute
        const createdAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.createdAt attribute created');
                }
            }
        };

        // updatedAt datetime attribute
        const updatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.USER_SOCIAL_LINKS.updatedAt attribute created');
                }
            }
        };

        await Promise.allSettled([userFullNameStringAttribute, userProfilePicStringAttribute, userAboutMeStringAttribute, userDocIDStringAttribute, socialLinkStringAttribute, typeEnumAttribute, createdAtDatetimeAttribute, updatedAtDatetimeAttribute]);
    }

    /**
     * Creates a new article distribution in the database.
     *
     * @return {Promise<void>} A Promise that resolves when the article distribution is created.
     */
    public async createMArticleDistribution(): Promise<void> {
        console.log('\x1b[33m%s\x1b[0m', 'Creating MArticleDistribution attributes...');
        // phase boolean attribute
        const phaseBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'phase');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.phase attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.phase attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'phase', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.phase attribute created');
                }
            }
        };

        // among string attribute
        const amongStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'among');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.among attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.among attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'among', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.among attribute created');
                }
            }
        };

        // boostPoint float attribute
        const boostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.boostPoint attribute created');
                }
            }
        };

        // impressionCount integer attribute
        const impressionCountIntegerAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'impressionCount');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.impressionCount attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.impressionCount attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'impressionCount', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.impressionCount attribute created');
                }
            }
        };

        // trackOrder enum attribute
        const trackOrderEnumAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'trackOrder');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.trackOrder attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.trackOrder attribute does not exist. Creating...');
                    await this.database.createEnumAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'trackOrder', ['DATE_asc', 'DATE_desc'], false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.trackOrder attribute created');
                }
            }
        };

        // createdAt datetime attribute
        const createdAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.createdAt attribute created');
                }
            }
        };

        // updatedAt datetime attribute
        const updatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.updatedAt attribute created');
                }
            }
        };

        // isStale boolean attribute
        const isStaleBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'isStale');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.isStale attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.isStale attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'isStale', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.isStale attribute created');
                }
            }
        };

        // article_docID string attribute
        const article_docIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.article_docID attribute created');
                }
            }
        };

        // article_title string attribute
        const article_titleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'article_title', 500, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.article_title attribute created');
                }
            }
        };

        // topicIDS string attribute
        const topicIDSStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'topicIDS');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.topicIDS attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.topicIDS attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'topicIDS', 255, false, undefined, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.topicIDS attribute created');
                }
            }
        };

        // lastUserIDS string attribute
        const lastUserIDSStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'lastUserIDS');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.lastUserIDS attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, 'lastUserIDS', 255, false, undefined, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION.lastUserIDS attribute created');
                }
            }
        };

        await Promise.allSettled([
            phaseBooleanAttribute,
            amongStringAttribute,
            boostPointFloatAttribute,
            impressionCountIntegerAttribute,
            trackOrderEnumAttribute,
            createdAtDatetimeAttribute,
            updatedAtDatetimeAttribute,
            isStaleBooleanAttribute,
            article_docIDStringAttribute,
            article_titleStringAttribute,
            topicIDSStringAttribute,
            lastUserIDSStringAttribute,
        ]);
    }

    /**
     * Creates a copy of the MArticleDistribution object in the database.
     *
     * @return {Promise<void>} - A promise that resolves when all the properties of the MArticleDistribution object are created.
     */
    public async createMArticleDistributionCopy(): Promise<void> {
        console.log('Creating AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE attribute...');
        // phase boolean attribute
        const phaseBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'phase');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.phase attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.phase attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'phase', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.phase attribute created');
                }
            }
        };

        // among string attribute
        const amongStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'among');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.among attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.among attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'among', 255, false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.among attribute created');
                }
            }
        };

        // boostPoint float attribute
        const boostPointFloatAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'boostPoint');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.boostPoint attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.boostPoint attribute does not exist. Creating...');
                    await this.database.createFloatAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'boostPoint', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.boostPoint attribute created');
                }
            }
        };

        // impressionCount integer attribute
        const impressionCountIntegerAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'impressionCount');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.impressionCount attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.impressionCount attribute does not exist. Creating...');
                    await this.database.createIntegerAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'impressionCount', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.impressionCount attribute created');
                }
            }
        };

        // trackOrder enum attribute
        const trackOrderEnumAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'trackOrder');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.trackOrder attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.trackOrder attribute does not exist. Creating...');
                    await this.database.createEnumAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'trackOrder', ['DATE_asc', 'DATE_desc'], false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.trackOrder attribute created');
                }
            }
        };

        // createdAt datetime attribute
        const createdAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'createdAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.createdAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.createdAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'createdAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.createdAt attribute created');
                }
            }
        };

        // updatedAt datetime attribute
        const updatedAtDatetimeAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'updatedAt');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.updatedAt attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.updatedAt attribute does not exist. Creating...');
                    await this.database.createDatetimeAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'updatedAt', true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.updatedAt attribute created');
                }
            }
        };

        // isStale boolean attribute
        const isStaleBooleanAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'isStale');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.isStale attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.isStale attribute does not exist. Creating...');
                    await this.database.createBooleanAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'isStale', false);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.isStale attribute created');
                }
            }
        };

        // article_docID string attribute
        const article_docIDStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'article_docID');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.article_docID attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.article_docID attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'article_docID', 36, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.article_docID attribute created');
                }
            }
        };

        // article_title string attribute
        const article_titleStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'article_title');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.article_title attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.article_title attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'article_title', 255, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.article_title attribute created');
                }
            }
        };

        // topicIDS string attribute
        const topicIDSStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'topicIDS');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.topicIDS attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.topicIDS attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'topicIDS', 255, false, undefined, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.topicIDS attribute created');
                }
            }
        };

        // lastUserIDS string attribute
        const lastUserIDSStringAttribute = async () => {
            try {
                await this.database.getAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'lastUserIDS');
                console.log('\x1b[31m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.lastUserIDS attribute already exist');
            } catch (error) {
                if (error instanceof AppwriteException && error.code === 404) {
                    console.log('\x1b[33m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.lastUserIDS attribute does not exist. Creating...');
                    await this.database.createStringAttribute(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE, 'lastUserIDS', 255, false, undefined, true);
                    console.log('\x1b[32m%s\x1b[0m', 'AppwriteCollection.ARTICLES_DISTRIBUTION_CLONE.lastUserIDS attribute created');
                }
            }
        };

        await Promise.allSettled([
            phaseBooleanAttribute,
            amongStringAttribute,
            boostPointFloatAttribute,
            impressionCountIntegerAttribute,
            trackOrderEnumAttribute,
            createdAtDatetimeAttribute,
            updatedAtDatetimeAttribute,
            isStaleBooleanAttribute,
            article_docIDStringAttribute,
            article_titleStringAttribute,
            topicIDSStringAttribute,
            lastUserIDSStringAttribute,
        ]);
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
