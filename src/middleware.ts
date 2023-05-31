import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // return NextResponse.next();
  
  console.log(request.nextUrl.pathname, 'PATH');
  const urlRegex = /\/[^/]+\.[^/]+$/;
  const url = request.nextUrl.pathname;
  const isMatch = urlRegex.test(url);
  if (isMatch) {
    return NextResponse.next();
  }

  const loginUrl = new URL('/onboard/session', request.url);
  const homeUrl = new URL('/home', request.url);

  const handleAuthentication = async () => {
    const cookie = request.cookies.get('jwt');
    if (!cookie) {
      //  if there is no cookie redirect to login
      return false;
    }

    const JWT = cookie.value;
    const sessionID = request.cookies.get('sessionID')?.value;
    const appwriteProjectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT || '';
    const url = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/account/sessions/${sessionID}`;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Appwrite-Response-Format': '1.0.0',
        'X-Appwrite-Project': appwriteProjectId,
        'X-Appwrite-JWT': JWT,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok && response.status === 401) {
      // if the response is unauthorized redirect to login
      return false;
    } else if (!response.ok && response.status !== 401) {
      throw new Error(`${response.status} | ${response.statusText} | ${await response.text()} | Request Failed`);
    }

    const currentSession = await response.json();

    if (currentSession.userId === '') {
      return false;
    } else {
      // if the user is logged in continue the request
      return true;
    }
  };

  if (request.nextUrl.pathname === '/onboard/authenticating') {
    return NextResponse.next();
  }

  // if the route is /onboard/session the just continue the request
  if (request.nextUrl.pathname === '/onboard/session') {
    const isAuthenticated = await handleAuthentication();
    if (isAuthenticated) {
      // goto home
      return NextResponse.redirect(homeUrl);
    } else {
      return NextResponse.next();
    }
  }

  try {
    const canContinue = await handleAuthentication();
    if (canContinue) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(loginUrl);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(loginUrl);
  }
}
