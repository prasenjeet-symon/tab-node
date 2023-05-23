import styles from './Profile-setting.module.css';
import EditProfile from './components/EditProfile/EditProfile';

export default function ProfileSettingPage (){
    return ( <section className={styles.profile_setting}>
        <div> Edit Profile </div>
        <div>
            <EditProfile/>
        </div>
        <div>
            <button className='filledButton' type='button'>Save Profile</button>
        </div>
    </section> )
}