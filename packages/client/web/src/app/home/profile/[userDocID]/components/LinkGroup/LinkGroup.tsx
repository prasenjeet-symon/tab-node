'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUserSocialLink } from '@tabnode/utils';
import { produce } from 'immer';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram, AiOutlineLink } from 'react-icons/ai';
import styles from './LinkGroup.module.css';

export default function LinkGroup() {
    const pathname = usePathname();
    const userDocID = pathname.split('/')[3];

    const [userLinks, setUserLinks] = useState<MUserSocialLink.IUserSocialLink[]>([]);

    useEffect(() => {
        const fetchUserLinks = async () => {
            const linksFetched = await new AppwriteDatabase().fetchSocialLink(userDocID);
            setUserLinks(
                produce((draft) => {
                    draft.push(...linksFetched);
                })
            );
        };

        fetchUserLinks();
    }, []);

    return (
        <section className={styles.linkGroup}>
            {userLinks.map((p) => {
                switch (p.doc.type) {
                    case 'WEB':
                        return (
                            <div>
                                {' '}
                                <a href={p.doc.socialLink}>
                                    <AiOutlineLink />
                                </a>{' '}
                            </div>
                        );
                        break;

                    case 'GITHUB':
                        return (
                            <div>
                                {' '}
                                <a href={p.doc.socialLink}>
                                    <AiFillGithub />
                                </a>{' '}
                            </div>
                        );
                        break;

                    case 'TWITTER':
                        return (
                            <div>
                                {' '}
                                <a href={p.doc.socialLink}>
                                    <AiFillTwitterCircle />
                                </a>{' '}
                            </div>
                        );
                        break;

                    case 'LINKEDIN':
                        return (
                            <div>
                                {' '}
                                <a href={p.doc.socialLink}>
                                    <AiFillLinkedin />
                                </a>{' '}
                            </div>
                        );
                        break;

                        case 'INSTAGRAM':
                            return (
                                <div>
                                    {' '}
                                    <a href={p.doc.socialLink}>
                                        <AiOutlineInstagram />
                                    </a>
                                </div>
                            );
                            break;

                    default:
                        return null;
                }
            })}
        </section>
    );
}
