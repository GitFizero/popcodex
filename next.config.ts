import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  redirects: async () => [
    // Redirect old URLs without locale prefix to /fr/ (default locale)
    {
      source: '/crimson-desert/blog/:slug*',
      destination: '/fr/crimson-desert/blog/:slug*',
      permanent: true,
    },
    {
      source: '/gta-vi/blog/:slug*',
      destination: '/fr/gta-vi/blog/:slug*',
      permanent: true,
    },
    {
      source: '/wolverine/blog/:slug*',
      destination: '/fr/wolverine/blog/:slug*',
      permanent: true,
    },
    {
      source: '/fable/blog/:slug*',
      destination: '/fr/fable/blog/:slug*',
      permanent: true,
    },
    // Redirect any old franchise URL without locale to /fr/
    {
      source: '/crimson-desert/:path*',
      destination: '/fr/crimson-desert/:path*',
      permanent: true,
    },
    {
      source: '/gta-vi/:path*',
      destination: '/fr/gta-vi/:path*',
      permanent: true,
    },
    {
      source: '/wolverine/:path*',
      destination: '/fr/wolverine/:path*',
      permanent: true,
    },
    {
      source: '/fable/:path*',
      destination: '/fr/fable/:path*',
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cloud.umami.is https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self';",
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
    {
      source: '/gta-vi/:path*.(jpg|jpeg|png|webp|avif|gif|svg|ico)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/crimson-desert/:path*.(jpg|jpeg|png|webp|avif|gif|svg|ico)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/:path*.(css|js)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=604800, stale-while-revalidate=86400',
        },
      ],
    },
  ],
};

export default withNextIntl(nextConfig);
