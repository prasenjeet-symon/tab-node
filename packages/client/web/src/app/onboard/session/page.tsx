'use client';

import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import appwrite from '../../appwrite';
import styles from './Session.module.css';

export default function SessionPage() {
    const signInWithGithub = () => {
        const host = window.location.origin;
        appwrite.account().createOAuth2Session('github', `${host}/onboard/authenticating`);
    };

    const signInWithDiscord = () => {
        const host = window.location.origin;
        appwrite.account().createOAuth2Session('discord', `${host}/onboard/authenticating`);
    };

    return (
        <section className={`${styles.sessionPage} `}>
            <div>
                <div> Sign up / Log in </div>
                <div>
                    <div onClick={signInWithDiscord}>
                        <FaDiscord size={25} /> <span>Continue with Discord</span>
                    </div>
                    <div onClick={signInWithGithub}>
                        <AiFillGithub size={25} /> <span>Continue with GitHub</span>
                    </div>
                </div>
                <div></div>
                <div>
                    <div>Or sign in using a magic link</div>
                    <div>
                        <input placeholder="Email" type="text" />
                    </div>
                    <button disabled={true} type="button">
                        Submit
                    </button>
                </div>
            </div>
            <div>
                <img src="/tabnode_header.jpg" alt="" />
                <div>
                    Empowering Human Thought in <span>the Age of AI</span>
                </div>
            </div>
        </section>
    );
}
