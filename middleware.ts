import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/setup(.*)'
]);

const isAuthRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  
  // If user is not signed in and trying to access protected route, redirect to sign-in
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // If user is signed in and trying to access auth routes, redirect to setup
  // But allow homepage to pass through so Clerk can handle its own redirects
  if (isAuthRoute(req) && userId) {
    return NextResponse.redirect(new URL('/setup', req.url));
  }

  // If user is signed in and on homepage, redirect to setup
  if (req.nextUrl.pathname === '/' && userId) {
    return NextResponse.redirect(new URL('/setup', req.url));
  }

  // Create response with security headers
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://clerk.vocalenda.com https://*.clerk.accounts.dev; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.clerk.com https://*.clerk.accounts.dev https://www.google-analytics.com; frame-src 'self' https://*.clerk.accounts.dev;"
  );
  
  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
