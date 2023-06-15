'use client';

import Header from '@/app/home/components/Header/Header';
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';
import { useEffect } from 'react';
import styles from './Preview.module.css';

function extractHtmlData(body: any) {
    return body ? body.split('==========markdown==========')[1] : '';
}

export default function Preview({ isOpen, onClose, cover, heading, subHeading, tags, body }: { isOpen: boolean; onClose: () => void; cover: string; heading: string; subHeading: string; tags: string[]; body: string }) {
    useEffect(() => {
        const time = setTimeout(() => {
            hljs.highlightAll();
        }, 1500);

        return () => {
            clearTimeout(time);
        };
    }, []);

    return (
        <section className={`${styles.preview} ${isOpen ? styles.open : ''}`}>
            <Header />
            <div className="contentArticle">
                {/* Tags */}
                <div className="tags">
                    <button className="tagButton" type="button">
                        Topic One
                    </button>
                    <button className="tagButton" type="button">
                        Topic Two
                    </button>
                    <button className="tagButton" type="button">
                        Topic Three
                    </button>
                </div>

                {/*Heading  */}
                <div className="heading">{heading}</div>
                {/* Sub heading */}
                <div className="subHeading">{subHeading}</div>

                {/* Cover Image */}
                <div className="coverImage">
                    <img src={cover ? cover : ''} alt="" />
                </div>

                {/* Body  */}
                <div dangerouslySetInnerHTML={{ __html: extractHtmlData(body) }} className="body"></div>
            </div>
            <div className={styles.footer}>
                <button type="button" className={`${styles.close} outlineButton`} onClick={onClose}>
                    Close
                </button>
            </div>
        </section>
    );
}
