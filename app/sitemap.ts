import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/config';
import { getAllFranchiseIds } from '@/lib/franchise-config';

const BASE_URL = 'https://popcodex.com';

// Wiki SPA section routes shared by all franchises
const WIKI_SECTIONS = [
  '/characters',
  '/story',
  '/world',
  '/weapons',
  '/combat',
  '/lore',
  '/blog',
  '/guides',
  '/gallery',
  '/glossary',
  '/items',
  '/mounts',
  '/quests',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date().toISOString();

  // Homepage for each locale
  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    });
  }

  // Franchise wiki homepages + section pages
  const franchiseIds = getAllFranchiseIds();
  for (const locale of locales) {
    for (const franchiseId of franchiseIds) {
      // Wiki homepage
      entries.push({
        url: `${BASE_URL}/${locale}/${franchiseId}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      });

      // Wiki section pages
      for (const section of WIKI_SECTIONS) {
        entries.push({
          url: `${BASE_URL}/${locale}/${franchiseId}${section}`,
          lastModified: now,
          changeFrequency: 'weekly',
          priority: 0.7,
        });
      }
    }
  }

  // Legal pages
  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}/legal/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.2,
    });
  }

  return entries;
}
