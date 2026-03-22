import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ],
  redirects: async () => [
    // Redirect old URLs without locale prefix to /fr/ version
    {
      source: '/crimson-desert/blog/:slug',
      destination: '/fr/crimson-desert/actualites/:slug',
      permanent: true,
    },
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
      source: '/fable/:path*',
      destination: '/fr/fable/:path*',
      permanent: true,
    },
    {
      source: '/wolverine/:path*',
      destination: '/fr/wolverine/:path*',
      permanent: true,
    },
  ],
};

export default withNextIntl(nextConfig);
