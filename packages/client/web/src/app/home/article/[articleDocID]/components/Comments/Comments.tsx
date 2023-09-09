'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MArticleComment, MUser, getHumanReadableDate } from '@tabnode/utils';
import { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import styles from './Comments.module.css';
import { AiFillDelete } from 'react-icons/ai';
import { produce } from 'immer';

export default function Comments({ articleDocID, parentDocID, articleTitle, writer }: { articleTitle: string; articleDocID: string; parentDocID: string; writer: MUser.SUser }) {
    const [comments, setComments] = useState<MArticleComment.IArticleComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [canShowReply , setCanShowReply] = useState<{ parentCommentDocID: string; canShowReply: boolean }[]>([]);
    const [prevCursor, setPrevCursor] = useState<MArticleComment.IArticleComment | undefined>(undefined);
    const [user, setUser] = useState<MUser.SUser>();
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const LIMIT = 10;

    const fetchCurrentLoginUser = async () => {
        const database = new AppwriteDatabase();
        const currentUser = await database.fetchLoginUser();
        if (!currentUser) return;
        return currentUser;
    }

    const fetchComments = async () => {
        setLoading(true);
        const database = new AppwriteDatabase();
        const comments = parentDocID ? await database.fetchChildComments(parentDocID, prevCursor, LIMIT) : await database.fetchComments(articleDocID, prevCursor, LIMIT);
        setLoading(false);
        if (!(comments && comments.length !== 0)) return;
        setPrevCursor((prev) => {
            return comments[comments.length - 1];
        });

        setComments((prev) => {
            return [...prev, ...comments];
        });
    };

    useEffect(() => {
        fetchComments();
        fetchCurrentLoginUser().then((user) => {
           if(!user) return;
           setUser({aboutMe: user.doc.aboutMe, docID: user.id, fullName: user.doc.fullName, profilePic: user.doc.profilePic});
        });
    }, []);

    // add new comment
    const addComment = async () => {
        const commentText = commentRef.current?.value;
        if (!(commentText && commentText.trim().length !== 0)) return;

        const database = new AppwriteDatabase();
        const currentUser = await database.fetchLoginUser();
        if (!currentUser) return;

        const comment: MArticleComment.IArticleComment = {
            id: v4(),
            doc: {
                article: {
                    docID: articleDocID,
                    title: articleTitle,
                },
                body: commentText,
                commentedBy: { aboutMe: currentUser.doc.aboutMe, docID: currentUser.id, fullName: currentUser.doc.fullName, profilePic: currentUser.doc.profilePic },
                createdAt: new Date(),
                parentComment: {
                    docID: parentDocID,
                },
                updatedAt: new Date(),
                writer: writer,
            },
        };

        setComments((prev) => {
            return produce(prev, (draft) => {
                draft.push(comment);
                draft.sort((a, b) => {
                    return b.doc.createdAt.getTime() - a.doc.createdAt.getTime();
                });
            });
        });
        
        commentRef.current.value = '';
        await database.addComment(comment);
    };

    /** Delete the comment */
    const deleteComment = async (comment: MArticleComment.IArticleComment) => {
        const database = new AppwriteDatabase();
        setComments((prev)=>{
            return produce(prev,(draft) => {
                // delete by splice
                const index = draft.findIndex((c) => c.id === comment.id);
                if (index !== -1) {
                    draft.splice(index, 1);
                }
            })
        });

        await database.deleteComment(comment);
    };

    /** Show hide reply */
    const ShowHideReply = (parentComment: MArticleComment.IArticleComment) => {
        setCanShowReply(
            produce((draft) => {
                const found = draft.find((c) => c.parentCommentDocID === parentComment.id);
                if (!found) {
                    draft.push({ parentCommentDocID: parentComment.id, canShowReply: false });
                }

                const index = draft.findIndex((c) => c.parentCommentDocID === parentComment.id);
                draft[index].canShowReply = !draft[index].canShowReply;
            })
        );
    };

    const getCanShowReply = (parentComment: MArticleComment.IArticleComment) => {
         const found = canShowReply.find((c) => c.parentCommentDocID === parentComment.id);
         return found ? found.canShowReply : false;
    }

    return (
        <>
            <section className={styles.comments}>
                {/* add comment */}
                <div className={styles.addComment}>
                    <div>
                        <textarea cols={30} rows={10} ref={commentRef}></textarea>
                    </div>
                    <div>
                        <button onClick={addComment} type="button">
                            { parentDocID ? 'Reply' : 'Add Comment' }
                        </button>
                    </div>
                </div>
                {/* list all comments here */}
                {comments.map((p) => {
                    return (
                        <div key={p.id} className={styles.commentItem}>
                            <div>
                                <img src={p.doc.commentedBy.profilePic} alt="" />
                            </div>
                            <div>
                                <div>
                                    <div>{p.doc.commentedBy.fullName}</div>
                                    <div> {getHumanReadableDate(p.doc.createdAt)} </div>
                                    <div> </div>
                                </div> 
                                <div>{p.doc.body}</div>
                                <div>
                                    <button type='button' onClick={ () => ShowHideReply(p) } >Reply</button>
                                    { user?.docID === p.doc.commentedBy.docID ? <button type='button' onClick={()=> deleteComment(p)} title='Delete Comment'><AiFillDelete/> </button> : null }
                                </div>
                                <div>
                                    { getCanShowReply(p) ? <Comments articleDocID={articleDocID} articleTitle={articleTitle} parentDocID={p.id} writer={writer}/> : null }
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
}
