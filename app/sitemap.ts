import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/config';
import { getAllFranchiseIds, getFranchiseById } from '@/lib/franchise-config';
import { getArticlesByFranchise } from '@/lib/articles';

const BASE_URL = 'https://popcodex.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepages
  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}`])),
      },
    });
  }

  // Franchise hubs
  for (const franchiseId of getAllFranchiseIds()) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/${franchiseId}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}/${franchiseId}`])),
        },
      });
    }
  }

  // Articles
  for (const franchiseId of getAllFranchiseIds()) {
    const franchise = getFranchiseById(franchiseId)!;
    const articles = getArticlesByFranchise(franchiseId);
    for (const article of articles) {
      for (const locale of locales) {
        const cat = franchise.categories.find(c => c.slug.fr === article.category);
        const catSlug = cat?.slug[locale] || article.category;
        entries.push({
          url: `${BASE_URL}/${locale}/${franchiseId}/${catSlug}/${article.slug}`,
          lastModified: new Date(article.updatedAt),
          changeFrequency: 'weekly',
          priority: 0.8,
          alternates: {
            languages: Object.fromEntries(locales.map(l => {
              const lCatSlug = cat?.slug[l] || article.category;
              return [l, `${BASE_URL}/${l}/${franchiseId}/${lCatSlug}/${article.slug}`];
            })),
          },
        });
      }
    }
  }

  return entries;
}
