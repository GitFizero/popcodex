import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/studio/'],
      },
    ],
    sitemap: 'https://popcodex.com/sitemap.xml',
    host: 'https://popcodex.com',
  };
}
