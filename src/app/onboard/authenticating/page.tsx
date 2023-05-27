'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Appwrite from '../../appwrite';

export default function AuthenticatingPage() {
  const router = useRouter();

  useEffect(() => {
    async function authenticate() {
      const JWT = await Appwrite.currentUserJWT();
      const session  = await Appwrite.currentSession();
      if (!JWT) {
        // redirect to login page
        router.push('/onboard/session');
        return;
      } else {
        const cookies = new Cookies();
        cookies.set('jwt', JWT, { path: '/' });
        cookies.set('sessionID', session.$id, { path: '/' });
        router.push('/home');
        return;
      }
    }

    authenticate();
  }, []);

  return <section> Authenticating... </section>;
}
