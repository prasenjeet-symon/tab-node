'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser, generateAvatar } from '@tabnode/utils';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Appwrite from '../../appwrite';
import styles from './Authenticating.module.css';

/** Authenticating Page */
async function authenticate(router: AppRouterInstance) {
  // if the user is logged in and there is user document created then
  // - Check for the user topics if no topics exit for this user then redirect to topic chooser page
  const JWT = await Appwrite.currentUserJWT();
  const session = await Appwrite.currentSession();
  if (!JWT) {
    // redirect to login page
    router.push('/onboard/session');
    return;
  }

  // user is logged in
  // check if the user document is already created
  const cookies = new Cookies();
  cookies.set('jwt', JWT, { path: '/' });
  cookies.set('sessionID', session.$id, { path: '/' });

  const appwrite = new AppwriteDatabase();
  const loggedInUser = await appwrite.fetchLoginUser();
  if (!loggedInUser) {
    // no such document is associated for this user
    // create new user document
    // and redirect to the topic chooser page
    const userID = await Appwrite.currentUserID();
    const currentUser = await Appwrite.currentUser();
    const user: MUser.IUser = {
      id: userID,
      doc: {
        aboutMe: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: currentUser.email,
        fullName: currentUser.name,
        isActive: true,
        mobile: currentUser.phone || '',
        profilePic: generateAvatar(currentUser.email),
        address: { address: '', docID: '' },
        trend: { boostPoint: 0.0, numberOfArticles: 0, numberOfComments: 0, numberOfDislikes: 0, numberOfLikes: 0, numberOfRead: 0, numberOfTopics: 0, resetDate: new Date(), numberOfClick: 0, numberOfSaved: 0, numberOfShare: 0 },
      },
    };

    await appwrite.createUser(user);
    router.push('/onboard/interests');
  } else {
    // there is document associated for this user
    // check if the user has topics
    const userTopics = await appwrite.fetchTopics(loggedInUser.id);
    if (userTopics.length === 0) {
      // redirect to topic chooser page
      router.push('/onboard/interests');
    } else {
      // redirect to home page
      router.push('/home');
    }
  }
}

export default function AuthenticatingPage() {
  const router = useRouter();

  useEffect(() => {
    authenticate(router);
  }, []);

  return <section className={styles.authenticate}> Authenticating... </section>;
}
