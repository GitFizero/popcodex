import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/studio/',
          '/*/search',
          '/*/search?*',
        ],
      },
    ],
    sitemap: 'https://www.popcodex.com/sitemap.xml',
  };
}
