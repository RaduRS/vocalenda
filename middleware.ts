import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

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
  
  // Generate nonce for scripts
  const nonce = randomBytes(16).toString('base64');
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Enhanced security headers for A+ rating
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=()');
  
  // Cross-Origin headers for better security
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
  
  // CSP with conditional unsafe-eval for development
  const scriptSrc = isDevelopment
    ? `'self' 'unsafe-eval' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://clerk.vocalenda.com https://*.clerk.accounts.dev`
    : `'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://clerk.vocalenda.com https://*.clerk.accounts.dev`;
  
  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://www.google-analytics.com https://ssl.google-analytics.com blob:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://clerk.vocalenda.com https://api.clerk.com https://*.clerk.accounts.dev",
    "frame-src 'self' https://*.clerk.accounts.dev",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  // Remove or restrict CORS for better security
  response.headers.delete('Access-Control-Allow-Origin');
  
  // Add the nonce to the response for use in scripts
  response.headers.set('X-Nonce', nonce);
  
  // Inject nonce into HTML if it's an HTML response
  if (response.headers.get('content-type')?.includes('text/html')) {
    const html = await response.text();
    const modifiedHtml = html.replace(
      '<meta name="csp-nonce" content="" id="csp-nonce" />',
      `<meta name="csp-nonce" content="${nonce}" id="csp-nonce" />`
    );
    return new NextResponse(modifiedHtml, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }
  
  // Optimize for back/forward cache (bfcache)
  if (!response.headers.get('Cache-Control')) {
    response.headers.set('Cache-Control', 'public, max-age=1, s-maxage=86400, stale-while-revalidate=86400');
  }
  
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
