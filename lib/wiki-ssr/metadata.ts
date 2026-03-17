import { Metadata } from 'next';
import { locales } from '@/lib/i18n/config';

const BASE_URL = 'https://www.popcodex.com';
const ALL_LOCALES = locales;

interface WikiSEOEntry {
  title: Record<string, string>;
  desc: Record<string, string>;
}

interface WikiSEOConfig {
  [section: string]: WikiSEOEntry;
}

interface BlogArticleData {
  slug: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  seoTitle: Record<string, string>;
  seoDescription: Record<string, string>;
  coverImage: string;
  publishedAt: string;
  author: string;
}

/**
 * Generate metadata for a wiki section page (characters, story, world, etc.)
 */
export function generateWikiSectionMetadata(
  franchiseId: string,
  franchiseName: Record<string, string>,
  seoConfig: WikiSEOConfig,
  section: string,
  locale: string,
  ogImage?: string,
): Metadata {
  const sectionSeo = seoConfig[section];
  if (!sectionSeo) {
    // Fallback for sections without dedicated SEO
    const name = franchiseName[locale] || franchiseName.fr;
    const title = `${section ? section.charAt(0).toUpperCase() + section.slice(1) : ''} — ${name} Wiki | PopCodex`;
    return { title };
  }

  const title = sectionSeo.title[locale] || sectionSeo.title.en || sectionSeo.title.fr;
  const description = sectionSeo.desc[locale] || sectionSeo.desc.en || sectionSeo.desc.fr;
  const isIndex = !section || section === 'index';
  const path = isIndex ? `/${locale}/${franchiseId}` : `/${locale}/${franchiseId}/${section}`;
  const image = ogImage || `${BASE_URL}/og-image.svg`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages: Object.fromEntries(
        ALL_LOCALES.map(l => [l, `${BASE_URL}/${l}/${franchiseId}${!isIndex ? `/${section}` : ''}`])
      ),
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: 'PopCodex',
      locale,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    robots: { index: true, follow: true },
  };
}

/**
 * Generate metadata for a wiki blog article page.
 */
export function generateWikiBlogArticleMetadata(
  franchiseId: string,
  franchiseLabel: string,
  article: BlogArticleData,
  locale: string,
): Metadata {
  const title = (article.seoTitle[locale] || article.seoTitle.en || article.seoTitle.fr);
  const description = article.seoDescription[locale] || article.seoDescription.en || article.seoDescription.fr;
  const path = `/${locale}/${franchiseId}/blog/${article.slug}`;
  const image = article.coverImage
    ? (article.coverImage.startsWith('http') ? article.coverImage : `${BASE_URL}${article.coverImage}`)
    : `${BASE_URL}/og-image.svg`;

  return {
    title: `${title}`,
    description,
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages: Object.fromEntries(
        ALL_LOCALES.map(l => [l, `${BASE_URL}/${l}/${franchiseId}/blog/${article.slug}`])
      ),
    },
    openGraph: {
      title: article.title[locale] || article.title.en || article.title.fr,
      description,
      url: `${BASE_URL}${path}`,
      siteName: 'PopCodex',
      locale,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title[locale] || article.title.en || article.title.fr,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Generate JSON-LD for a wiki article.
 */
export function generateWikiArticleJsonLd(
  franchiseId: string,
  article: BlogArticleData,
  locale: string,
  publisherName: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[locale] || article.title.en || article.title.fr,
    description: article.seoDescription[locale] || article.seoDescription.en || article.seoDescription.fr,
    image: article.coverImage
      ? (article.coverImage.startsWith('http') ? article.coverImage : `${BASE_URL}${article.coverImage}`)
      : undefined,
    author: { '@type': 'Organization', name: publisherName },
    publisher: { '@type': 'Organization', name: 'PopCodex', url: BASE_URL },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/${locale}/${franchiseId}/blog/${article.slug}`,
    },
    inLanguage: locale,
  };
}

/**
 * Generate breadcrumb JSON-LD.
 */
export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i, arr) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
      };
      if (i < arr.length - 1) {
        entry.item = `${BASE_URL}${item.path}`;
      }
      return entry;
    }),
  };
}
