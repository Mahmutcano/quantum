import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './libs/i18nNavigation';

// Burada override yapıyoruz
const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always' // ✅ ZORUNLU override: bu olmadan "/" → "/en" yönlenmez
});

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
