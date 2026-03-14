import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n/config';
import { getAllFranchiseIds, getFranchiseById } from '@/lib/franchise-config';
import { getArticlesByFranchise } from '@/lib/articles';

const BASE_URL = 'https://popcodex.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage — one entry with all language alternates
  entries.push({
    url: `${BASE_URL}/${defaultLocale}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: {
      languages: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}`])),
    },
  });

  // Franchise hubs — one entry per franchise with hreflang
  for (const franchiseId of getAllFranchiseIds()) {
    entries.push({
      url: `${BASE_URL}/${defaultLocale}/${franchiseId}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}/${franchiseId}`])),
      },
    });
  }

  // Articles — one entry per article with hreflang alternates
  for (const franchiseId of getAllFranchiseIds()) {
    const franchise = getFranchiseById(franchiseId)!;
    const articles = getArticlesByFranchise(franchiseId);

    for (const article of articles) {
      const cat = franchise.categories.find(c => c.slug.fr === article.category);
      const defaultCatSlug = cat?.slug[defaultLocale] || article.category;

      entries.push({
        url: `${BASE_URL}/${defaultLocale}/${franchiseId}/${defaultCatSlug}/${article.slug}`,
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

  // Wiki SPA pages — one entry per page with hreflang
  const wikiPages: Record<string, string[]> = {
    'gta-vi': ['characters', 'story', 'world', 'combat', 'lore', 'blog', 'guides', 'glossary', 'gallery', 'weapons', 'trailers', 'about'],
    'crimson-desert': ['characters', 'story', 'world', 'combat', 'lore', 'blog', 'guides', 'glossary', 'items', 'mounts', 'quests', 'weapons', 'about'],
    'wolverine': ['characters', 'story', 'world', 'combat', 'lore', 'blog', 'guides', 'glossary', 'about'],
    'fable': ['characters', 'story', 'world', 'combat', 'lore', 'blog', 'guides', 'glossary', 'items', 'mounts', 'quests', 'weapons', 'about'],
  };

  for (const [wiki, pages] of Object.entries(wikiPages)) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${defaultLocale}/${wiki}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}/${wiki}/${page}`])),
        },
      });
    }
  }

  return entries;
}
