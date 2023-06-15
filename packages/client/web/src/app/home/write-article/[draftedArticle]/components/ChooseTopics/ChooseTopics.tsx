import AppwriteDatabase from '@/app/database/appwrite-database';
import { MArticleTopicRelationship, MDraftedArticle, MTopic } from '@tabnode/utils';
import { produce } from 'immer';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { v4 } from 'uuid';
import styles from './ChooseTopics.module.css';

export default function ChooseTopics({ draftedArticle, togglePreview , isOpen }: { draftedArticle: MDraftedArticle.IDraftedArticle | undefined; togglePreview: () => void , isOpen: boolean}) {
  const [ topics, setTopics ] = useState<MTopic.ITopic[]>();
  const router = useRouter();

  useEffect(()=>{
     const fetchTopics = async ()=>{
       const appwriteDatabase = new AppwriteDatabase();
       const topics = await appwriteDatabase.fetchAllTopics();
       setTopics((prev)=>{
         return topics;
       });
     }

     fetchTopics();
  }, []);

  
  const chooseTopic = (topic: MTopic.ITopic) => {
    

    setTopics((prev) => {
      return produce(prev, (draft) => {
        if (!draft) return;
        draft.forEach((p) => {
          if (p.id === topic.id) {
            if( topics && topics.filter((p)=> p.isSelected).length >= 3 && !!!p.isSelected)  return;
            p.isSelected = !!!p.isSelected;
          }
        });
      });
    });
  };

  const publishArticle = async ()=>{
    if(!draftedArticle) return;
    const chosenTopics = topics?.filter((p)=> p.isSelected);
    if(chooseTopic.length === 0) return;
    const articleToTopicRelations: MArticleTopicRelationship.IArticleTopicRelationship[] = chosenTopics ? chosenTopics.map((p)=>{
       return { 
        id:v4(),
        doc: {
          article: {
            docID: draftedArticle.id,
            title: draftedArticle.doc.article.title,
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          topic: {
            color: p.doc.color,
            docID: p.id,
            logo: p.doc.logo,
            name: p.doc.name,
          },
          trend: {
            boostPoint: 0,
            resetDate: new Date()
          }
        }
       }
    }): [];

    const database = new AppwriteDatabase();
    await Promise.all(
      articleToTopicRelations.map((p) => {
        return database.addTopicToArticle(p);
      })
    );

    // publish the article
    await database.publishDraftArticle(draftedArticle);
    router.push(`/home/profile/${draftedArticle.doc.article.writer.docID}`);
  }

  return (
    <>
      <section className={`${styles.chooseTopics} ${isOpen ? styles.open : ''}`}>
        <div> Select upto 3 topics to publish article </div>
        <div>
          {/* list all the interest here to choose from */}
          {topics ? topics.map((topic) => {
            return (
              <button className={topic.isSelected ? styles.interestButtonSelected : ''} key={topic.id} onClick={() => chooseTopic(topic)} type="button">
                {topic.doc.name}
              </button>
            );
          }): null}
        </div>
        <div>
          <button onClick={() => publishArticle()} type="button">Publish <AiOutlineRight /></button>
          <button onClick={togglePreview} type="button">Cancel</button>
        </div>
      </section>
    </>
  );
}
