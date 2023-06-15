import { MDraftedArticle, getHumanReadableDate } from '@tabnode/utils';
import { useRouter } from 'next/navigation';
import styles from './DraftedArticle.module.css';

export default function ArticleDrafted({ article }: { article: MDraftedArticle.IDraftedArticle }) {
    const router = useRouter();

    const navToFullArticle = async () => {
        router.push(`/home/write-article/${article.id}`);
    };

    return (
        <section onClick={navToFullArticle} className={styles.article}>
            <div>
                <div>
                    <div>
                        <img src={article.doc.article.writer.profilePic} alt="" />
                    </div>
                    <div>
                        <div>
                            <span>{article.doc.article.writer.fullName}</span> <span> {getHumanReadableDate(article.doc.createdAt)} </span>
                        </div>
                        <div>{article.doc.article.writer.aboutMe}</div>
                    </div>
                </div>
                <div>{article.doc.article.title}</div>
                <div>{article.doc.article.subTitle}</div>
                <div></div>
            </div>
            <div>
                <img src={article.doc.article.coverImage} alt="" />
            </div>
        </section>
    );
}
