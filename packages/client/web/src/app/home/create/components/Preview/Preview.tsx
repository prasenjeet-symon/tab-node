'use client'

import Header from '@/app/home/components/Header/Header';
import styles from './Preview.module.css';
import * as DOMPurify from 'dompurify';
import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import 'highlight.js/styles/dark.css';
import hljs from 'highlight.js';


export default function Preview({ isOpen, onClose,  cover, heading, subHeading, tags, body }: { isOpen: boolean; onClose: () => void; cover: string; heading: string; subHeading: string; tags: string[]; body: string }) {
  const md = new Remarkable({
    html:true,
    breaks:true,
     highlight: function (str, lang) {
       if (lang && hljs.getLanguage(lang)) {
         try {
           return hljs.highlight(lang, str).value;
         } catch (err) {}
       }

       try {
         return hljs.highlightAuto(str).value;
       } catch (err) {}

       return ''; // use external default escaping
     },
   });

   md.use(linkify);

   const sanitizedHeading =  DOMPurify.sanitize(md.render(heading));
   const sanitizedSubHeading = DOMPurify.sanitize(md.render(subHeading));
   const sanitizedBody = DOMPurify.sanitize(md.render(body));

   // Highlighting code
  setTimeout(() => {
    hljs.highlightAll();
  }, 1000);

  return (
    <section className={`${styles.preview} ${isOpen ? styles.open : ''}`}>
      <Header/>
      <div className='contentArticle'>
           {/* Tags */}
           <div className='tags'>
             <button className='tagButton' type='button'> Docker </button>
             <button className='tagButton' type='button'> Kubernetes </button>
             <button className='tagButton' type='button'> Beginner </button>
           </div>

          {/*Heading  */}
          <div dangerouslySetInnerHTML={{ __html: sanitizedHeading }} className='heading'></div>
           {/* Sub heading */}
           <div dangerouslySetInnerHTML={{ __html: sanitizedSubHeading }} className='subHeading'></div>

           {/* Cover Image */}
           <div  className='coverImage'><img src="https://th.bing.com/th/id/R.c14576b4319ac6e86d19439fc3730dc4?rik=Ci8rYkseJ%2fEecg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fBackgrounds-download-space-wallpaper-HD.jpg&ehk=THftsVAb6REKrqDfgZ2VD2SIXgDYZOdSDjyFIAbmYvg%3d&risl=&pid=ImgRaw&r=0" alt=""  /></div>

           {/* Body  */}
           <div dangerouslySetInnerHTML={{ __html: sanitizedBody }} className='body'></div>
      </div>
      <div className={styles.footer}>
         <button type='button' className={`${styles.close} outlineButton`} onClick={onClose}>Close</button>
      </div>
    </section>
  );
}
