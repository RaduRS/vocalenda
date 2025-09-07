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

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
