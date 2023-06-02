import styles from  './EditProfile.module.css';

export default function EditProfile() {
    return ( <section className={styles.editProfile}>
        <div className='input'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
        </div>

        {/* For the location */}
        <div className='input'>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="Location" />
        </div>

        {/* For the BIO */}
        <div className='input'>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" placeholder="Bio"></textarea>
        </div>

        {/* For the website url */}
        <div className='input'>
            <label htmlFor="website">Website</label>
            <input type="text" id="website" placeholder="Website" />
        </div>

        {/* For the GitHub url  */}
        <div className='input'>
            <label htmlFor="github">GitHub</label>
            <input type="text" id="github" placeholder="GitHub" />
        </div>

        {/* For the twitter url */}
        <div className='input'>
            <label htmlFor="twitter">Twitter</label>
            <input type="text" id="twitter" placeholder="Twitter" />
        </div>

        {/* For the linkedin url  */}
        <div className='input'>
            <label htmlFor="linkedin">LinkedIn</label>
            <input type="text" id="linkedin" placeholder="LinkedIn" />
        </div>
    </section> )
}