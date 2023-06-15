import { AppwriteCollection } from '@tabnode/utils';
import { AppwriteException } from 'node-appwrite';

/** Create all the indexes for the collections USERS */
export async function createArticleIndexes() {
    // ARTICLE_INDEX_1 : writer_docID:asc , createdAt:desc
    const articleIndex1 = async () => {
        const key = 'ARTICLE_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLES, key, 'key', ['writer_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    await Promise.allSettled([articleIndex1]);
}

/** Create all the indexes for the collections COMMENTS */
export async function createCommentsIndexes() {
    // COMMENTS_INDEX_1 : article_docID:asc , parentComment_docID:asc, createdAt:desc
    const commentsIndex1 = async () => {
        const key = 'COMMENTS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.COMMENTS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, key, 'key', ['article_docID', 'parentComment_docID', 'createdAt'], ['asc', 'asc', 'desc']);
        }
    };

    // COMMENTS_INDEX_2 : parentComment_docID:asc , createdAt:desc
    const commentsIndex2 = async () => {
        const key = 'COMMENTS_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.COMMENTS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, key, 'key', ['parentComment_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    // COMMENTS_INDEX_3 : article_docID:asc
    const commentsIndex3 = async () => {
        const key = 'COMMENTS_INDEX_3';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.COMMENTS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.COMMENTS, key, 'key', ['article_docID'], ['asc']);
        }
    };

    await Promise.allSettled([commentsIndex1, commentsIndex2, commentsIndex3]);
}
/**
 * Create all the indexes for the collections LIKES
 */
export async function createLikeIndexes() {
    // LIKES_INDEX_1 : article_docID:asc , status:asc, createdAt:desc
    const likesIndex1 = async () => {
        const key = 'LIKES_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.LIKES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, key, 'key', ['article_docID', 'status', 'createdAt'], ['asc', 'asc', 'desc']);
        }
    };

    // LIKES_INDEX_2 : article_docID:asc , likedBy_docID:asc
    const likesIndex2 = async () => {
        const key = 'LIKES_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.LIKES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, key, 'key', ['article_docID', 'likedBy_docID'], ['asc', 'asc']);
        }
    };

    // LIKES_INDEX_3 : article_docID:asc , status:asc
    const likesIndex3 = async () => {
        const key = 'LIKES_INDEX_3';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.LIKES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.LIKES, key, 'key', ['article_docID', 'status'], ['asc', 'asc']);
        }
    };

    await Promise.allSettled([likesIndex1, likesIndex2, likesIndex3]);
}

/** Create all the indexes for the collections ADDRESSES */
export async function createAddressesIndexes() {
    // ADDRESSES_INDEX_1 : addressOf_docID:asc
    const addressesIndex1 = async () => {
        const key = 'ADDRESSES_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ADDRESSES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ADDRESSES, key, 'key', ['addressOf_docID'], ['asc']);
        }
    };

    await Promise.allSettled([addressesIndex1]);
}

/** Create all the indexes for the collections SAVED_ARTICLES */
export async function createSavedArticlesIndexes() {
    // SAVED_ARTICLES_INDEX_1 : savedBy_docID:asc , createdAt:desc
    const savedArticlesIndex1 = async () => {
        const key = 'SAVED_ARTICLES_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, key, 'key', ['savedBy_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    // SAVED_ARTICLES_INDEX_2 : savedBy_docID:asc, article_docID: asc
    const savedArticlesIndex2 = async () => {
        const key = 'SAVED_ARTICLES_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.SAVED_ARTICLES, key, 'key', ['savedBy_docID', 'article_docID'], ['asc', 'asc']);
        }
    };

    await Promise.allSettled([savedArticlesIndex1, savedArticlesIndex2]);
}

/** Create all the indexes for the collection USER_RELATIONSHIPS */
export async function createUserRelationshipsIndexes() {
    // USER_RELATIONSHIPS_INDEX_1 : toUser_docID:asc , fromTrend_boostPoint:desc
    const userRelationshipsIndex1 = async () => {
        const key = 'USER_RELATIONSHIPS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, key, 'key', ['toUser_docID', 'fromTrend_boostPoint'], ['asc', 'desc']);
        }
    };

    // USER_RELATIONSHIPS_INDEX_2 : fromUser_docID:asc , toTrend_boostPoint:desc
    const userRelationshipsIndex2 = async () => {
        const key = 'USER_RELATIONSHIPS_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, key, 'key', ['fromUser_docID', 'toTrend_boostPoint'], ['asc', 'desc']);
        }
    };

    // USER_RELATIONSHIPS_INDEX_3 : fromUser_docID:asc , toUser_docID:asc
    const userRelationshipsIndex3 = async () => {
        const key = 'USER_RELATIONSHIPS_INDEX_3';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, key, 'key', ['fromUser_docID', 'toUser_docID'], ['asc', 'asc']);
        }
    };

    // USER_RELATIONSHIPS_INDEX_4 : toUser_docID:asc
    const userRelationshipsIndex4 = async () => {
        const key = 'USER_RELATIONSHIPS_INDEX_4';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATIONSHIPS, key, 'key', ['toUser_docID'], ['asc']);
        }
    };

    await Promise.allSettled([userRelationshipsIndex1, userRelationshipsIndex2, userRelationshipsIndex3, userRelationshipsIndex4]);
}

/** Create all the indexes for the collection USER_TOPIC_RELATIONSHIPS  */
export async function createUserTopicRelationshipsIndexes() {
    // USER_TOPIC_RELATIONSHIPS_INDEX_1 : topic_docID:asc , createdAt:asc
    const userTopicRelationshipsIndex1 = async () => {
        const key = 'USER_TOPIC_RELATIONSHIPS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key, 'key', ['topic_docID', 'createdAt'], ['asc', 'asc']);
        }
    };

    // USER_TOPIC_RELATIONSHIPS_INDEX_2 : topic_docID:asc , createdAt:desc
    const userTopicRelationshipsIndex2 = async () => {
        const key = 'USER_TOPIC_RELATIONSHIPS_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key, 'key', ['topic_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    // USER_TOPIC_RELATIONSHIPS_INDEX_3 : user_docID:asc, trend_boostPoint:desc
    const userTopicRelationshipsIndex3 = async () => {
        const key = 'USER_TOPIC_RELATIONSHIPS_INDEX_3';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key, 'key', ['user_docID', 'trend_boostPoint'], ['asc', 'desc']);
        }
    };

    // USER_TOPIC_RELATIONSHIPS_INDEX_4 : user_docID: asc, isStable:asc, trend_boostPoint: desc
    const userTopicRelationshipsIndex4 = async () => {
        const key = 'USER_TOPIC_RELATIONSHIPS_INDEX_4';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key, 'key', ['user_docID', 'isStable', 'trend_boostPoint'], ['asc', 'asc', 'desc']);
        }
    };

    // USER_TOPIC_RELATIONSHIPS_INDEX_4 : topic_docID: asc, createdAt:asc
    const userTopicRelationshipsIndex5 = async () => {
        const key = 'USER_TOPIC_RELATIONSHIPS_INDEX_5';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key, 'key', ['topic_docID', 'createdAt'], ['asc', 'asc']);
        }
    };

    // USER_TOPIC_RELATIONSHIPS_INDEX_4 : topic_docID: asc, createdAt:desc
    const userTopicRelationshipsIndex6 = async () => {
        const key = 'USER_TOPIC_RELATIONSHIPS_INDEX_6';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_TOPIC_RELATIONSHIPS, key, 'key', ['topic_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    await Promise.allSettled([userTopicRelationshipsIndex1, userTopicRelationshipsIndex2, userTopicRelationshipsIndex3, userTopicRelationshipsIndex4, userTopicRelationshipsIndex5, userTopicRelationshipsIndex6]);
}

/** Create all the indexes for the collection ARTICLE_TOPIC_RELATIONSHIPS */
export async function createArticleTopicRelationshipsIndexes() {
    // ARTICLE_TOPIC_RELATIONSHIPS_INDEX_1 : article_docID:asc , trend_boostPoint:desc
    const articleTopicRelationshipsIndex1 = async () => {
        const key = 'ARTICLE_TOPIC_RELATIONSHIPS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, key, 'key', ['article_docID', 'trend_boostPoint'], ['asc', 'desc']);
        }
    };

    // ARTICLE_TOPIC_RELATIONSHIPS_INDEX_2 : topic_docID:asc , trend_boostPoint:desc
    const articleTopicRelationshipsIndex2 = async () => {
        const key = 'ARTICLE_TOPIC_RELATIONSHIPS_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, key, 'key', ['topic_docID', 'trend_boostPoint'], ['asc', 'desc']);
        }
    };

    // ARTICLE_TOPIC_RELATIONSHIPS_INDEX_3 : article_docID:asc
    const articleTopicRelationshipsIndex3 = async () => {
        const key = 'ARTICLE_TOPIC_RELATIONSHIPS_INDEX_3';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_TOPIC_RELATIONSHIPS, key, 'key', ['article_docID'], ['asc']);
        }
    };

    await Promise.allSettled([articleTopicRelationshipsIndex1, articleTopicRelationshipsIndex2, articleTopicRelationshipsIndex3]);
}

/** Create all the indexes for the collection USER_RELATION_SUGGESTIONS */
export async function createUserRelationSuggestionIndexes() {
    // USER_RELATION_SUGGESTIONS_INDEX_1 : for_docID:asc , isStale:asc, boostPoint:desc
    const userRelationSuggestionIndex1 = async () => {
        const key = 'USER_RELATION_SUGGESTIONS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, key, 'key', ['for_docID', 'isStale', 'boostPoint'], ['asc', 'asc', 'desc']);
        }
    };

    // USER_RELATION_SUGGESTIONS_INDEX_2 : for_docID: asc, user_docID: asc
    const userRelationSuggestionIndex2 = async () => {
        const key = 'USER_RELATION_SUGGESTIONS_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_RELATION_SUGGESTIONS, key, 'key', ['for_docID', 'user_docID'], ['asc', 'asc']);
        }
    };

    await Promise.allSettled([userRelationSuggestionIndex1, userRelationSuggestionIndex2]);
}

/** Create all the indexes for the collection USER_ARTICLE_SUGGESTIONS */
export async function createUserArticleSuggestionIndexes() {
    // USER_ARTICLE_SUGGESTIONS_INDEX_1 : for_docID:asc , isStale:asc, boostPoint:desc
    const userArticleSuggestionIndex1 = async () => {
        const key = 'USER_ARTICLE_SUGGESTIONS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, key, 'key', ['for_docID', 'isStale', 'boostPoint'], ['asc', 'asc', 'desc']);
        }
    };

    // USER_ARTICLE_SUGGESTIONS_INDEX_2 : for_docID: asc, article_docID: asc
    const userArticleSuggestionIndex2 = async () => {
        const key = 'USER_ARTICLE_SUGGESTIONS_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ARTICLE_SUGGESTIONS, key, 'key', ['for_docID', 'article_docID'], ['asc', 'asc']);
        }
    };
}

/** Create all the indexes for the collection DRAFTED_ARTICLES */
export async function createDraftedArticlesIndexes() {
    // DRAFTED_ARTICLES_INDEX_1 : article_writer_docID:asc
    const draftedArticlesIndex1 = async () => {
        const key = 'DRAFTED_ARTICLES_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.DRAFTED_ARTICLES, key, 'key', ['article_writer_docID'], ['asc']);
        }
    };

    await Promise.allSettled([draftedArticlesIndex1]);
}

/** Create all the indexes for the collection ARTICLE_STORIES_DISTRIBUTION */
export async function createArticleStoriesDistributionIndexes() {
    // ARTICLE_STORIES_DISTRIBUTION : for_docID:asc, expireAt: asc , boostPoint:desc
    const articleStoriesDistributionIndex = async () => {
        const key = 'ARTICLE_STORIES_DISTRIBUTION_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, key, 'key', ['for_docID', 'expireAt', 'boostPoint'], ['asc', 'asc', 'desc']);
        }
    };

    // ARTICLE_STORIES_DISTRIBUTION : story_docID: asc, isSeen: asc, boostPoint: desc
    const articleStoriesDistributionIndex2 = async () => {
        const key = 'ARTICLE_STORIES_DISTRIBUTION_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES_DISTRIBUTION, key, 'key', ['story_docID', 'isSeen', 'boostPoint'], ['asc', 'asc', 'desc']);
        }
    };

    await Promise.allSettled([articleStoriesDistributionIndex, articleStoriesDistributionIndex2]);
}

/** Create all the indexes for the collection USER_SOCIAL_LINKS */
export async function createUserSocialLinksIndexes() {
    // USER_SOCIAL_LINKS_INDEX_1 : user_docID:asc
    const userSocialLinksIndex1 = async () => {
        const key = 'USER_SOCIAL_LINKS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_SOCIAL_LINKS, key, 'key', ['user_docID'], ['asc']);
        }
    };

    await Promise.allSettled([userSocialLinksIndex1]);
}

/** Create all the indexes for the collection ARTICLES_DISTRIBUTION */
export async function createArticleDistributionIndexes() {
    // ARTICLES_DISTRIBUTION : article_docID: asc , isStale:asc, createdAt:desc
    const articleDistributionIndex = async () => {
        const key = 'ARTICLES_DISTRIBUTION_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, key, 'key', ['article_docID', 'isStale', 'createdAt'], ['asc', 'asc', 'desc']);
        }
    };

    // ARTICLES_DISTRIBUTION : phase: asc, createdAt: desc
    const articleDistributionIndex2 = async () => {
        const key = 'ARTICLES_DISTRIBUTION_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLES_DISTRIBUTION, key, 'key', ['phase', 'createdAt'], ['asc', 'desc']);
        }
    };

    await Promise.allSettled([articleDistributionIndex, articleDistributionIndex2]);
}

/** Create all the indexes for the collection USER_NOTIFICATIONS */
export async function createUserNotificationsIndexes() {
    // USER_NOTIFICATIONS : user_docID:asc, createdAt:desc
    const userNotificationsIndex = async () => {
        const key = 'USER_NOTIFICATIONS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, key, 'key', ['user_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    // USER_NOTIFICATIONS : user_docID: asc, topic: asc, createdAt: desc
    const userNotificationsIndex2 = async () => {
        const key = 'USER_NOTIFICATIONS_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_NOTIFICATIONS, key, 'key', ['user_docID', 'topic', 'createdAt'], ['asc', 'asc', 'desc']);
        }
    };
}

/** Create all the indexes for the collection ARTICLE_READERS*/
export async function createArticleReadersIndexes() {
    // ARTICLE_READERS_INDEX_1 : article_docID:asc, createdAt:desc
    const articleReadersIndex = async () => {
        const key = 'ARTICLE_READERS_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLE_READERS, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_READERS, key, 'key', ['article_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    await Promise.allSettled([articleReadersIndex]);
}

/** Create all the indexes for the collection BADGE_CHALLENGES */
export async function createBadgeChallengesIndexes() {
    // BADGE_CHALLENGES_INDEX_1 : participant_docID:asc, status:asc, createdAt:desc
    const badgeChallengesIndex1 = async () => {
        const key = 'BADGE_CHALLENGES_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, key, 'key', ['participant_docID', 'status', 'createdAt'], ['asc', 'asc', 'desc']);
        }
    };

    // BADGE_CHALLENGES_INDEX_2 : participant_docID:asc, createdAt:desc
    const badgeChallengesIndex2 = async () => {
        const key = 'BADGE_CHALLENGES_INDEX_2';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.BADGE_CHALLENGES, key, 'key', ['participant_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    await Promise.allSettled([badgeChallengesIndex1, badgeChallengesIndex2]);
}

/** Create all the indexes for the collection USER_ACTIVITIES */
export async function createUserActivitiesIndexes() {
    // USER_ACTIVITIES : user_docID: asc , createdAt: desc
    const userActivitiesIndex = async () => {
        const key = 'USER_ACTIVITIES_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.USER_ACTIVITIES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.USER_ACTIVITIES, key, 'key', ['user_docID', 'createdAt'], ['asc', 'desc']);
        }
    };

    await Promise.allSettled([userActivitiesIndex]);
}

/** Create all the indexes for the collection ARTICLE_STORIES */
export async function createArticleStoriesIndexes() {
    // ARTICLE_STORIES : user_docID:asc, expireAt: asc, createdAt: asc
    const articleStoriesIndex = async () => {
        const key = 'ARTICLE_STORIES_INDEX_1';
        try {
            await this.databases.getIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES, key);
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 404) await this.databases.createIndex(this.databaseID, AppwriteCollection.ARTICLE_STORIES, key, 'key', ['user_docID', 'expireAt', 'createdAt'], ['asc', 'asc', 'asc']);
        }
    };
}