'use client';

import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import appwrite from '../../appwrite';
import styles from './Session.module.css';
import { v4 } from 'uuid';
import { useRef, useState } from 'react';

export default function SessionPage() {
    const emailRef = useRef<HTMLInputElement>(null);

    const signInWithGithub = () => {
        const host = window.location.origin;
        appwrite.account().createOAuth2Session('github', `${host}/onboard/authenticating`);
    };

    const signInWithDiscord = () => {
        const host = window.location.origin;
        appwrite.account().createOAuth2Session('discord', `${host}/onboard/authenticating`);
    };

    const magicURLLogin = async () => {
        const email = emailRef.current?.value;
        if(!email) return;
        console.log('email', email);
        const userId = v4();
        const host = window.location.origin;
        const response = await appwrite.account().createMagicURLSession(userId, email, `${host}/onboard/authenticating`);
        console.log('response', response);
    }

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
                        <input ref={emailRef} placeholder="Email" type="text" />
                    </div>
                    <button onClick={()=> magicURLLogin()} type="button">
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
