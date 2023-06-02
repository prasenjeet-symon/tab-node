'use client';

import AppwriteDatabase from '@/app/database/appwrite-database';
import { MUser } from '@/app/database-type';
import { generateAvatar } from '@/app/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Appwrite from '../../appwrite';

export default function AuthenticatingPage() {
  const router = useRouter();

  useEffect(() => {
    async function authenticate() {
      const JWT = await Appwrite.currentUserJWT();
      const session = await Appwrite.currentSession();
      if (!JWT) {
        // redirect to login page
        router.push('/onboard/session');
        return;
      } else {
        const cookies = new Cookies();
        cookies.set('jwt', JWT, { path: '/' });
        cookies.set('sessionID', session.$id, { path: '/' });
        // create the new user if we can
        const appwriteDatabase = new AppwriteDatabase();
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
            trend: { boostPoint: 0.0, numberOfArticles: 0, numberOfComments: 0, numberOfDislikes: 0, numberOfLikes: 0, numberOfRead: 0, numberOfTopics: 0, resetDate: new Date() },
          },
        };

        try {
          await appwriteDatabase.createUser(user);
        } catch (error) {
          console.error(error, 'ERR');
        }
        router.push('/home');
        return;
      }
    }

    authenticate();
  }, []);

  return <section> Authenticating... </section>;
}
