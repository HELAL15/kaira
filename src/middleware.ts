import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {



  // const token = request.cookies.get('token')?.value;

  // if (!token && request.nextUrl.pathname === '/profile') {
  //   const loginUrl = new URL('/login', request.url);
  //   loginUrl.searchParams.set('redirect', request.nextUrl.pathname);

  //   return NextResponse.redirect(loginUrl);
  // }

  // if (token && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/profile',
    '/login',
    '/register'
  ]
};


// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// // Create the next-intl middleware instance
// const intlMiddleware = createMiddleware(routing);

// export function middleware(request: NextRequest) {
//   // Run the intl middleware first
//   const intlResponse = intlMiddleware(request);
//   // if (intlResponse) return intlResponse;

//   const token = request.cookies.get('token')?.value;

//   // Protect /profile from unauthenticated access
//   // if (!token && request.nextUrl.pathname.includes('/profile')) {
//   //   const loginUrl = new URL('/login', request.url);
//   //   loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
//   //   return NextResponse.redirect(loginUrl);
//   // }

//   // Redirect authenticated users away from /login or /register
//   // if (
//   //   token &&
//   //   (request.nextUrl.pathname.includes('/login') ||
//   //     request.nextUrl.pathname.includes('/register'))
//   // ) {
//   //   return NextResponse.redirect(new URL('/', request.url));
//   // }

//   // If intl middleware made a response (like headers), merge it
//   return intlResponse || NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/profile',
//     '/login',
//     '/register',
//     '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
//   ]
// };
