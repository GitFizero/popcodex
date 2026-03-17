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
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      },
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.popcodex.com/sitemap.xml',
    host: 'https://www.popcodex.com',
  };
}
