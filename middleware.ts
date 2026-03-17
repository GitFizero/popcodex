import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/lib/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { hostname, protocol } = request.nextUrl;

  // Redirect www → non-www (canonical domain: popcodex.com)
  if (hostname === 'www.popcodex.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'popcodex.com';
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(fr|en|es|pt|it|ko)/:path*'],
};
