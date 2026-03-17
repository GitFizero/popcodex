import { NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n/config';
import { getAllFranchiseIds, getFranchiseById } from '@/lib/franchise-config';
import { getArticlesByFranchise } from '@/lib/articles';
import { blogArticles as gtaBlogArticles } from '@/gta-vi-wiki/data/blog';
import { blogArticles as crimsonBlogArticles } from '@/crimson-desert-wiki/data/blog';
import { blogArticles as wolverineBlogArticles } from '@/wolverine-wiki/data/blog';
import { blogArticles as fableBlogArticles } from '@/fable-wiki/data/blog';

const BASE_URL = 'https://www.popcodex.com';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  alternates?: Record<string, string>;
}

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function buildEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const now = new Date().toISOString();

  // Homepage
  entries.push({
    url: `${BASE_URL}/${defaultLocale}`,
    lastmod: now,
    changefreq: 'daily',
    priority: 1.0,
    alternates: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}`])),
  });

  // Franchise hubs
  for (const franchiseId of getAllFranchiseIds()) {
    entries.push({
      url: `${BASE_URL}/${defaultLocale}/${franchiseId}`,
      lastmod: now,
      changefreq: 'daily',
      priority: 0.9,
      alternates: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}/${franchiseId}`])),
    });
  }

  // Articles
  for (const franchiseId of getAllFranchiseIds()) {
    const franchise = getFranchiseById(franchiseId)!;
    const articles = getArticlesByFranchise(franchiseId);

    for (const article of articles) {
      const cat = franchise.categories.find(c => c.slug.fr === article.category);
      const defaultCatSlug = cat?.slug[defaultLocale] || article.category;

      entries.push({
        url: `${BASE_URL}/${defaultLocale}/${franchiseId}/${defaultCatSlug}/${article.slug}`,
        lastmod: new Date(article.updatedAt).toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
        alternates: Object.fromEntries(locales.map(l => {
          const lCatSlug = cat?.slug[l] || article.category;
          return [l, `${BASE_URL}/${l}/${franchiseId}/${lCatSlug}/${article.slug}`];
        })),
      });
    }
  }

  // Wiki SPA pages (all sections matching generateStaticParams)
  const wikiPages: Record<string, string[]> = {
    'gta-vi': ['characters', 'story', 'world', 'combat', 'lore', 'blog', 'guides', 'glossary', 'gallery', 'items', 'quests', 'weapons', 'trailers', 'buy', 'about'],
    'crimson-desert': ['characters', 'story', 'world', 'combat', 'lore', 'blog', 'guides', 'glossary', 'gallery', 'items', 'mounts', 'quests', 'weapons', 'buy', 'about'],
    'wolverine': ['characters', 'story', 'world', 'combat', 'lore', 'blog', 'guides', 'glossary', 'gallery', 'items', 'mounts', 'quests', 'weapons', 'buy', 'about'],
    'fable': ['characters', 'story', 'world', 'combat', 'lore', 'blog', 'guides', 'glossary', 'gallery', 'items', 'mounts', 'quests', 'weapons', 'buy', 'about'],
  };

  for (const [wiki, pages] of Object.entries(wikiPages)) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${defaultLocale}/${wiki}/${page}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.7,
        alternates: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}/${wiki}/${page}`])),
      });
    }
  }

  // Wiki blog articles
  const wikiBlogArticles: Record<string, { slug: string }[]> = {
    'gta-vi': gtaBlogArticles,
    'crimson-desert': crimsonBlogArticles,
    'wolverine': wolverineBlogArticles,
    'fable': fableBlogArticles,
  };

  for (const [wiki, articles] of Object.entries(wikiBlogArticles)) {
    for (const article of articles) {
      entries.push({
        url: `${BASE_URL}/${defaultLocale}/${wiki}/blog/${article.slug}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.6,
        alternates: Object.fromEntries(locales.map(l => [l, `${BASE_URL}/${l}/${wiki}/blog/${article.slug}`])),
      });
    }
  }

  return entries;
}

function toXml(entries: SitemapEntry[]): string {
  const urlEntries = entries.map(entry => {
    const alternateLinks = entry.alternates
      ? Object.entries(entry.alternates)
          .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(href)}" />`)
          .join('\n')
      : '';

    return `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
${alternateLinks}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;
}

export async function GET() {
  const entries = buildEntries();
  const xml = toXml(entries);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
