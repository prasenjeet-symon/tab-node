import styles from './MayFollow.module.css';

export default function MayFollow() {
    return (
        <div className={styles.mayFollow}>
           <div> People you might know </div> 
           <div>
            {/* list all the suggested blogger here */}
            <div className={styles.blogger}>
                <div> <img src="/profile-pic.jpg" alt=""  /> </div>
                <div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div> <button type='button' className='followButton'> Follow </button> </div>
            </div>

            <div className={styles.blogger}>
                <div> <img src="/profile-pic.jpg" alt=""  /> </div>
                <div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div> <button type='button' className='followButton'> Follow </button> </div>
            </div>

            <div className={styles.blogger}>
                <div> <img src="/profile-pic.jpg" alt=""  /> </div>
                <div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div> <button type='button' className='followButton'> Follow </button> </div>
            </div>

            <div className={styles.blogger}>
                <div> <img src="/profile-pic.jpg" alt=""  /> </div>
                <div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div> <button type='button' className='followButton'> Follow </button> </div>
            </div>
            </div> 
        </div>
    )
}