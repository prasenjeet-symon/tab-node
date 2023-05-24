'use client'

import { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { MdAdd, MdOutlinePublishedWithChanges, MdPreview } from 'react-icons/md';
import styles from './Create.module.css';
import Preview from './components/Preview/Preview';

export default function CreatePost() {
    const previewPopup = useState(false);
    const headingRef = useRef<HTMLDivElement>(null);
    const subHeadingRef = useRef<HTMLDivElement>(null);
    const markdownRef = useRef<HTMLDivElement>(null);
    const extractedData: { heading: string, subHeading: string, markdown: string  } = { heading: '', subHeading: '', markdown: '' };

    const handleData = ()=>{
        const heading = headingRef.current?.innerText;
        const subHeading = subHeadingRef.current?.innerText;
        const markdown = markdownRef.current?.innerText;

        extractedData.heading = heading || "";
        extractedData.subHeading = subHeading || "";
        extractedData.markdown = markdown || "";

        console.log(heading, subHeading, markdown);
    }

    const handleOpenPreviewPopup = () => {
        handleData();
        previewPopup[1](true);
    }

    const handleClosePreviewPopup = () => {
        previewPopup[1](false);
    }

    return ( <section className={styles.create}>
        <div>

            <div className={styles.createHeader}>
                <div>Create Post</div>
                <div>
                    <button onClick={handleOpenPreviewPopup} type='button'> <MdPreview/> <span>Preview</span> </button>
                    <button type='button'> <MdAdd/> <span>Save Draft</span> </button>
                    <button type='button'> <MdOutlinePublishedWithChanges/> <span>Publish</span> </button>
                </div>
            </div>
            <div className={styles.createBody}>
                {/* Add cover image */}
                <div className={styles.coverImage}>
                    {/* plus button */}
                    <div className={styles.plusButton}> <FiUploadCloud/> </div>
                </div>

                {/* Header */}
                <div suppressContentEditableWarning  ref={headingRef} contentEditable className={styles.header}>
                   Write your heading here...
                </div>

                {/* Sub title */}
                <div suppressContentEditableWarning  ref={subHeadingRef} contentEditable className={styles.subTitle}>
                    Write your subheading here...
                </div>

                {/* Tags */}
                <div className={styles.tags}></div>

                {/* Markdown editor */}
                <div suppressContentEditableWarning  ref={markdownRef} contentEditable className={styles.editor}>
                  Write your content here...
                </div>
            </div>

            {/* Holds preview popup */}
            <Preview isOpen={previewPopup[0]} onClose={handleClosePreviewPopup} body={extractedData.markdown} heading={extractedData.heading} subHeading={extractedData.subHeading} cover='' tags={[]}/>
        </div>
    </section> )
}