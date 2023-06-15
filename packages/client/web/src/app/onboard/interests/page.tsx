'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MTopic, MUserTopicRelationship } from '@tabnode/utils';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { v4 } from 'uuid';
import styles from './Interests.module.css';

/** Fetch all the topics to choose from */
async function fetchTopics() {
    const database = new AppwriteDatabase();
    const topics = await database.fetchAllTopics();
    return topics;
}

/** Toggle selection */
function toggleSelection(topic: MTopic.ITopic, topics: MTopic.ITopic[], setTopic: Dispatch<SetStateAction<MTopic.ITopic[]>>) {
    const finalTopics = topics.map((p) => {
        if (p.id === topic.id && !p.ofNetwork) {
            return { ...p, isSelected: !!!p.isSelected };
        } else {
            return p;
        }
    });

    setTopic(finalTopics);
}

/** Choose topics */
async function chooseTopics(topics: MTopic.ITopic[], router: AppRouterInstance) {
    const selectedTopics = topics.filter((p) => p.isSelected && !p.ofNetwork);
    const database = new AppwriteDatabase();
    const currentUser = await database.fetchLoginUser();
    if (!currentUser) {
        router.push('/onboard/session');
        return;
    }

    await Promise.all(
        selectedTopics.map(async (p) => {
            const userToTopicRelation: MUserTopicRelationship.IUserTopicRelationship = {
                id: v4(),
                doc: {
                    createdAt: new Date(),
                    isStable: true,
                    topic: {
                        color: p.doc.color,
                        docID: p.id,
                        logo: p.doc.logo,
                        name: p.doc.name,
                    },
                    trend: { boostPoint: 0, resetDate: new Date() },
                    updatedAt: new Date(),
                    user: {
                        aboutMe: currentUser.doc.aboutMe,
                        docID: currentUser.id,
                        fullName: currentUser.doc.fullName,
                        profilePic: currentUser.doc.profilePic,
                    },
                },
            };

            await database.addTopic(userToTopicRelation);
        })
    );

    // navigate to home
    router.push('/home');
}

/** Fetch already selected topics */
async function fetchSelectedTopics(topics: MTopic.ITopic[], setTopic: Dispatch<SetStateAction<MTopic.ITopic[]>>) {
    const database = new AppwriteDatabase();
    const currentUser = await database.fetchLoginUser();
    if (!currentUser) return [];
    const userTopics = await database.fetchTopics(currentUser.id);
    const selectedTopics = topics.map((p) => {
        const userTopic = userTopics.find((t) => t.doc.topic.docID === p.id);
        if (userTopic) {
            return { ...p, isSelected: true, ofNetwork: true };
        } else {
            return { ...p, isSelected: false, ofNetwork: false };
        }
    });

    setTopic(selectedTopics);
}

export default function InterestsPage() {
    const [topics, setTopics] = useState<MTopic.ITopic[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetchTopics().then((topics) => {
            return fetchSelectedTopics(topics, setTopics);
        });
    }, []);

    return (
        <section className={`${styles.interestPage}`}>
            <div> Select upto 5 interests </div>
            <div>
                {/* list all the interest here to choose from */}
                {topics.map((topic) => {
                    return (
                        <button className={topic.isSelected ? styles.interestButtonSelected : ''} key={topic.id} onClick={() => toggleSelection(topic, topics, setTopics)} type="button">
                            {topic.doc.name}
                        </button>
                    );
                })}
            </div>
            <div>
                <button onClick={() => chooseTopics(topics, router)} type="button">
                    Submit <AiOutlineRight />
                </button>
            </div>
        </section>
    );
}
