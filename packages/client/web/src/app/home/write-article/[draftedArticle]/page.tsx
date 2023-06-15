'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { AppwriteStorage } from '@/app/storage/storage';
import { MDraftedArticle } from '@tabnode/utils';
import * as DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import { produce } from 'immer';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiUploadCloud } from 'react-icons/fi';
import { MdAdd, MdOutlinePublishedWithChanges, MdPreview } from 'react-icons/md';
import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import styles from './Create.module.css';
import ChooseTopics from './components/ChooseTopics/ChooseTopics';
import Preview from './components/Preview/Preview';

function extractRowData(draftedArticle: MDraftedArticle.IDraftedArticle) {
    return draftedArticle.doc.article.body ? draftedArticle.doc.article.body.split('==========markdown==========')[0] : '';
}

function createArticleBody(html: any, markdown: any) {
    return `${markdown}==========markdown==========${html}`;
}

export default function CreatePost({ params }: { params: { draftedArticle: string } }) {
    const dArticleDocID = params.draftedArticle;
    const [draftedArticle, setDraftedArticle] = useState<MDraftedArticle.IDraftedArticle>();
    const [canPreview, setCanPreview] = useState(false);
    const [canPublish, setCanPublish] = useState(false);
    const router = useRouter();

    const titleRef = useRef<HTMLDivElement>(null);
    const subTitleRef = useRef<HTMLDivElement>(null);
    const markdownRef = useRef<HTMLDivElement>(null);
    const uploadFileRef = useRef<HTMLInputElement>(null);
    const coverImageRef = useRef<HTMLImageElement>(null);

    const togglePreview = () => {
        updateDraft();
        document.body.classList.toggle('preview-open');
        setCanPreview(!canPreview);
    };

    const convertMarkDownToHTML = () => {
        const md = new Remarkable({
            html: true,
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, str).value;
                    } catch (err) {}
                }

                try {
                    return hljs.highlightAuto(str).value;
                } catch (err) {}

                return '';
            },
        });

        md.use(linkify);

        return DOMPurify.sanitize(md.render(markdownRef.current?.innerText || ''));
    };

    const togglePublishArticle = () => {
        updateDraft();
        document.body.classList.toggle('preview-open');
        setCanPublish(!canPublish);
    };

    useEffect(() => {
        const fetchDraft = async () => {
            const database = new AppwriteDatabase();
            const article = await database.fetchDraftArticleByID(dArticleDocID);
            if (!article) return;
            setDraftedArticle((prev) => {
                return article;
            });
        };

        fetchDraft();
    }, []);

    const updateDraft = () => {
        setDraftedArticle(
            produce((draft) => {
                if (!draft) return;
                draft.doc.article.title = titleRef.current ? titleRef.current.innerText : '';
                draft.doc.article.subTitle = subTitleRef.current ? subTitleRef.current.innerText : '';
                draft.doc.article.body = createArticleBody(convertMarkDownToHTML(), markdownRef.current?.innerHTML || '');
                draft.doc.article.coverImage = coverImageRef.current ? coverImageRef.current.src : '';
            })
        );
    };

    /** Save the draft */
    const saveDraft = async () => {
        updateDraft();
        if (!draftedArticle) return;
        const database = new AppwriteDatabase();
        await database.updateDraftArticle(draftedArticle);
        router.push(`/home/profile/${draftedArticle.doc.article.writer.docID}/drafted`);
    };

    // upload file
    const uploadFile = () => {
        uploadFileRef.current?.click();
    };

    /** Upload the cover image */
    const uploadCoverImage = async (files: FileList | null) => {
        if (!(files && files.length === 1 && draftedArticle)) return;
        const file = files[0];
        const appwriteStore = new AppwriteStorage();
        const URI = await appwriteStore.uploadArticleCoverImage(file, draftedArticle.id);
        if (!URI) return;
        setDraftedArticle((prev) => {
            return produce(prev, (draft) => {
                if (!draft) return;
                draft.doc.article.coverImage = URI.toString();
            });
        });
    };

    /** Delete the cover image */
    const deleteCoverImage = async () => {
        const appwriteStore = new AppwriteStorage();
        if (!draftedArticle) return;
        await appwriteStore.deleteArticleCoverImage(draftedArticle.id);
        setDraftedArticle((prev) => {
            return produce(prev, (draft) => {
                if (!draft) return;
                draft.doc.article.coverImage = '';
            });
        });
    };

    return (
        <>
            <section className={styles.create}>
                <div>
                    <div className={styles.createHeader}>
                        <div>Create Post</div>
                        <div>
                            <button onClick={togglePreview} type="button">
                                <MdPreview /> <span>Preview</span>
                            </button>
                            <button onClick={() => saveDraft()} type="button">
                                <MdAdd /> <span>Save Draft</span>
                            </button>
                            <button onClick={togglePublishArticle} type="button">
                                <MdOutlinePublishedWithChanges />
                                <span>Publish</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.createBody}>
                        {/* Add cover image */}
                        <div className={styles.coverImage}>
                            {draftedArticle?.doc.article.coverImage ? <img src={draftedArticle.doc.article.coverImage} alt="cover" ref={coverImageRef} /> : null}
                            <input onChange={(e) => uploadCoverImage(e.target.files)} hidden style={{ display: 'none' }} accept="image/*" type="file" ref={uploadFileRef} />

                            {/* Delete the cover image button */}
                            {draftedArticle?.doc.article.coverImage ? (
                                <button onClick={() => deleteCoverImage()} className={styles.closeButton} title="Delete cover" type="button">
                                    <AiFillCloseCircle />
                                </button>
                            ) : null}

                            {!draftedArticle?.doc.article.coverImage ? (
                                <div onClick={uploadFile} className={styles.plusButton}>
                                    <FiUploadCloud />
                                </div>
                            ) : null}
                        </div>

                        {/* Header */}
                        <div suppressContentEditableWarning ref={titleRef} contentEditable className={styles.header}>
                            {draftedArticle?.doc.article.title || 'Write your heading here...'}
                        </div>

                        {/* Sub title */}
                        <div suppressContentEditableWarning ref={subTitleRef} contentEditable className={styles.subTitle}>
                            {draftedArticle?.doc.article.subTitle || 'Write your sub heading here...'}
                        </div>

                        {/* Tags */}
                        <div className={styles.tags}> </div>

                        {/* Markdown editor */}
                        <div dangerouslySetInnerHTML={{ __html: draftedArticle ? extractRowData(draftedArticle) : 'Write your markdown here...' }} suppressContentEditableWarning ref={markdownRef} contentEditable className={styles.editor}>
                        </div>
                    </div>

                    {/* Holds preview popup */}
                    <Preview
                        isOpen={canPreview}
                        onClose={togglePreview}
                        body={draftedArticle ? draftedArticle.doc.article.body : ''}
                        heading={draftedArticle ? draftedArticle.doc.article.title : ''}
                        subHeading={draftedArticle ? draftedArticle.doc.article.subTitle : ''}
                        cover={draftedArticle ? draftedArticle.doc.article.coverImage : ''}
                        tags={[]}
                    />

                    {/* Publish article preview */}
                    <ChooseTopics isOpen={canPublish} draftedArticle={draftedArticle} togglePreview={togglePublishArticle} />
                </div>
            </section>
        </>
    );
}
