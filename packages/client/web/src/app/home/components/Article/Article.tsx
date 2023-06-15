import AppwriteDatabase from '@/app/database/appwrite-database';
import { MArticle, getHumanReadableDate } from '@tabnode/utils';
import { useRouter } from 'next/navigation';
import styles from './Article.module.css';

export default function Article({ article }: { article: MArticle.IArticle }) {
    const router = useRouter();

    const navToFullArticle = async () => {
        const database = new AppwriteDatabase();
        await database.articleClicked(article);
        router.push(`/home/article/${article.id}`);
    };

    return (
        <section style={{ cursor:'pointer' }} onClick={navToFullArticle} className={styles.article}>
            <div>
                <div>
                    <div>
                        <img src={article.doc.writer.profilePic} alt="" />
                    </div>
                    <div>
                        <div>   
                            <span>{article.doc.writer.fullName}</span> <span> {getHumanReadableDate(article.doc.createdAt)} </span>
                        </div>
                        <div>{article.doc.writer.aboutMe}</div>
                    </div>
                </div>
                <div>{article.doc.title}</div>
                <div>{article.doc.subTitle}</div>
                <div>
                    {/* list all the tags here */}
                    {article.topics
                        ? article.topics.map((topic) => (
                              <button key={topic.docID} type="button" className="tagButton">
                                  {topic.name}
                              </button>
                          ))
                        : null}
                </div>
            </div>
            <div>
                <img src={article.doc.coverImage} alt="" />
            </div>
        </section>
    );
}
