import { ArticleData } from '../articles';
import { FranchiseConfig } from '../franchise-config';

const BASE_URL = 'https://www.popcodex.com';

export function generateWebsiteJsonLd(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PopCodex',
    url: `${BASE_URL}/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/${locale}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function generateArticleJsonLd(article: ArticleData, franchise: FranchiseConfig, locale: string, categorySlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[locale] || article.title.fr,
    description: article.excerpt[locale] || article.excerpt.fr,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PopCodex',
      url: BASE_URL,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: `${BASE_URL}/${locale}/${franchise.id}/${categorySlug}/${article.slug}`,
  };
}

export function generateVideoGameJsonLd(franchise: FranchiseConfig, locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: franchise.name[locale] || franchise.name.fr,
    description: franchise.description[locale] || franchise.description.fr,
    gamePlatform: franchise.platforms,
    publisher: {
      '@type': 'Organization',
      name: franchise.publisher,
    },
    developer: {
      '@type': 'Organization',
      name: franchise.developer,
    },
    datePublished: franchise.releaseDate,
  };
}
