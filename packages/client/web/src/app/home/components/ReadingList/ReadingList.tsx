import styles from './ReadingList.module.css'


export default function ReadingList(){
    return (
        <div className={styles.readingList}>
            <div>My Reading List</div>
            <div>
                {/* list all reading list here */}
                <div className={styles.readingListItem}>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                    <div>
                        <div>Lorem, ipsum dolor.</div>
                        <div>23 Jan 2023</div>
                    </div>
                </div>

                <div className={styles.readingListItem}>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                    <div>
                        <div>Lorem, ipsum dolor.</div>
                        <div>23 Jan 2023</div>
                    </div>
                </div>

                <div className={styles.readingListItem}>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                    <div>
                        <div>Lorem, ipsum dolor.</div>
                        <div>23 Jan 2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}