import styles from './Article.module.css'

export default function Article() {
  return (
  <section className={styles.article}> 
       <div>
        <div>
            <div> <img src="/profile-pic.jpg" alt="" /> </div>
            <div>
                <div> <span>Lorem, ipsum dolor.</span> <span> 23 Jan 2023 </span> </div>
                <div>Lorem ipsum dolor sit amet.</div>
            </div>
        </div>
        <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam excepturi repudiandae at! Corporis recusandae placeat harum voluptatem, itaque quibusdam, consequatur voluptate accusantium animi est fuga suscipit. Quia velit laborum in!</div>
        <div>
            {/* list all the tags here */}
            <button type='button' className='tagButton'>Lorem, ipsum.</button>
            <button type='button' className='tagButton'>Lorem, ipsum.</button>
            <button type='button' className='tagButton'>Lorem, ipsum.</button>
        </div>
        </div> 
       <div> <img src="/article.webp" alt="" /> </div> 
  </section>
  );
}
