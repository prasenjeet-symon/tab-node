'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser, MUserSocialLink } from '@tabnode/utils';
import { produce } from 'immer';
import { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import styles from './EditProfile.module.css';
import { useRouter } from 'next/navigation';

export default function EditProfile() {
    const nameRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLTextAreaElement>(null);
    const websiteRef = useRef<HTMLInputElement>(null);
    const githubRef = useRef<HTMLInputElement>(null);
    const twitterRef = useRef<HTMLInputElement>(null);
    const linkedinRef = useRef<HTMLInputElement>(null);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [website, setWebsite] = useState('');
    const [github, setGithub] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const [userOld, setUserOld] = useState<MUser.IUser>();
    const [linksOld, setLinksOld] = useState<MUserSocialLink.IUserSocialLink[]>([]);

    const router = useRouter();

    const fetchUser = async () => {
        const database = new AppwriteDatabase();
        const user = await database.fetchLoginUser();
        if (!user) return;
        setUserOld(user);
        setName(user.doc.fullName);
        setLocation(user.doc.address.address);
        setBio(user.doc.aboutMe);
        fetchSocialLink(user.id);
    };

    const fetchSocialLink = async (userDocID: string) => {
        const database = new AppwriteDatabase();
        const socialLinks = await database.fetchSocialLink(userDocID);
        setLinksOld(socialLinks);
        socialLinks.forEach((link) => {
            switch (link.doc.type) {
                case 'GITHUB':
                    setGithub(link.doc.socialLink);
                    break;

                case 'INSTAGRAM':
                    break;

                case 'LINKEDIN':
                    setLinkedin(link.doc.socialLink);
                    break;

                case 'TWITTER':
                    setTwitter(link.doc.socialLink);
                    break;

                case 'WEB':
                    setWebsite(link.doc.socialLink);

                default:
                    null;
            }
        });
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const saveData = async () => {
        const finalName = nameRef.current?.value || '';
        const finalLocation = locationRef.current?.value || '';
        const finalBio = bioRef.current?.value || '';
        const finalWebsite = websiteRef.current?.value || '';
        const finalGithub = githubRef.current?.value || '';
        const finalTwitter = twitterRef.current?.value || '';
        const finalLinkedin = linkedinRef.current?.value || '';

        if (!userOld) return;
        // update the user
        const finalUser = produce(userOld, (draft) => {
            draft.doc.fullName = finalName;
            draft.doc.address.address = finalLocation;
            draft.doc.aboutMe = finalBio;
            draft.doc.updatedAt = new Date();
        });

        const database = new AppwriteDatabase();
        await database.updateUser(finalUser);

        // update the links
        produce(linksOld, (draft) => {
            draft.forEach((p) => {
                if (p.doc.type === 'GITHUB') p.doc.socialLink = finalGithub;
                if (p.doc.type === 'TWITTER') p.doc.socialLink = finalTwitter;
                if (p.doc.type === 'LINKEDIN') p.doc.socialLink = finalLinkedin;
                if (p.doc.type === 'WEB') p.doc.socialLink = finalWebsite;
            });
        });

        await Promise.all(linksOld.map((p) => database.updateSocialLink(p)));
        router.push(`/home/profile/${finalUser.id}`)
    };

    return (
        <section className={styles.editProfile}>
            <div className="input">
                <label htmlFor="name">Name</label>
                <input defaultValue={name} ref={nameRef} type="text" id="name" placeholder="Name" />
            </div>

            {/* For the location */}
            <div className="input">
                <label htmlFor="location">Location</label>
                <input defaultValue={location} ref={locationRef} type="text" id="location" placeholder="Location" />
            </div>

            {/* For the BIO */}
            <div className="input">
                <label htmlFor="bio">Bio</label>
                <textarea defaultValue={bio} ref={bioRef} id="bio" placeholder="Bio"></textarea>
            </div>

            {/* For the website url */}
            <div className="input">
                <label htmlFor="website">Website</label>
                <input defaultValue={website} ref={websiteRef} type="text" id="website" placeholder="Website" />
            </div>

            {/* For the GitHub url  */}
            <div className="input">
                <label htmlFor="github">GitHub</label>
                <input defaultValue={github} ref={githubRef} type="text" id="github" placeholder="GitHub" />
            </div>

            {/* For the twitter url */}
            <div className="input">
                <label htmlFor="twitter">Twitter</label>
                <input defaultValue={twitter} ref={twitterRef} type="text" id="twitter" placeholder="Twitter" />
            </div>

            {/* For the linkedin url  */}
            <div className="input">
                <label htmlFor="linkedin">LinkedIn</label>
                <input defaultValue={linkedin} ref={linkedinRef} type="text" id="linkedin" placeholder="LinkedIn" />
            </div>

            <div className={styles.saveButton}>
            <button onClick={saveData} className="filledButton " type="button">
                Save Profile
            </button>
            </div>
        </section>
    );
}
