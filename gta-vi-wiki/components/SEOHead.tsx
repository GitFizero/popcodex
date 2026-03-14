import { useEffect } from 'react';
import type { Lang } from '@/gta-vi-wiki/context/I18nContext';

const DOMAIN = 'https://gtaviwiki.com';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  datePublished?: string;
  dateModified?: string;
  faqItems?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
  lang?: Lang;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
  includeVideoGameSchema?: boolean;
  basePath?: string;
}

const LOCALE_MAP: Record<Lang, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  es: 'es_ES',
};

const KEYWORDS: Record<Lang, string> = {
  fr: 'gta vi, gta 6, gta vi date de sortie, gta vi ps5, gta vi gameplay, gta vi vice city, gta vi lucia, gta vi jason, rockstar games, leonida, gta vi wiki',
  en: 'gta vi, gta 6, gta vi release date, gta vi ps5, gta vi gameplay, gta vi vice city, gta vi lucia, gta vi jason, rockstar games, leonida, gta vi wiki',
  es: 'gta vi, gta 6, gta vi fecha de lanzamiento, gta vi ps5, gta vi gameplay, gta vi vice city, gta vi lucia, gta vi jason, rockstar games, leonida, gta vi wiki',
};

const SEOHead = ({
  title,
  description,
  path = '/',
  type = 'website',
  datePublished,
  dateModified,
  faqItems,
  breadcrumbs,
  noindex = false,
  lang = 'en',
  jsonLd,
  ogImage,
  includeVideoGameSchema = false,
  basePath = '',
}: SEOHeadProps) => {
  const fullTitle = `${title} | GTA VI Wiki Fan`;
  const canonicalUrl = `${DOMAIN}${basePath}${path}`;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = lang;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string, extra?: Record<string, string>) => {
      const selector = extra
        ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.href = href;
    };

    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setMeta('name', 'keywords', KEYWORDS[lang]);
    setLink('canonical', canonicalUrl);
    setLink('alternate', `${DOMAIN}${basePath}${path}`, { hreflang: 'fr' });
    setLink('alternate', `${DOMAIN}${basePath}${path}`, { hreflang: 'en' });
    setLink('alternate', `${DOMAIN}${basePath}${path}`, { hreflang: 'es' });
    setLink('alternate', `${DOMAIN}${basePath}${path}`, { hreflang: 'x-default' });

    // Theme color
    setMeta('name', 'theme-color', '#0a000f');

    // Author
    setMeta('name', 'author', 'PopCodex');

    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', 'GTA VI Fan Wiki');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:locale', LOCALE_MAP[lang]);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    // OG Image
    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
      setMeta('property', 'og:image:width', '1200');
      setMeta('property', 'og:image:height', '630');
      setMeta('name', 'twitter:image', ogImage);
    }

    // Article type extras
    if (type === 'article') {
      setMeta('property', 'article:author', 'PopCodex');
      if (datePublished) setMeta('property', 'article:published_time', datePublished);
      if (dateModified) setMeta('property', 'article:modified_time', dateModified);
    }

    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(s => s.remove());

    const schemas: Record<string, unknown>[] = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i, arr) => {
          const entry: Record<string, unknown> = { '@type': 'ListItem', position: i + 1, name: b.name };
          if (i < arr.length - 1) entry.item = `${DOMAIN}${b.path}`;
          return entry;
        }),
      });
    }

    if (faqItems && faqItems.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      });
    }

    if (type === 'article') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        author: { '@type': 'Organization', name: 'GTA VI Fan Wiki' },
        publisher: { '@type': 'Organization', name: 'GTA VI Fan Wiki' },
        datePublished: datePublished || '2026-03-13',
        dateModified: dateModified || '2026-03-13',
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        inLanguage: lang,
      });
    }

    if (includeVideoGameSchema) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'VideoGame',
        name: 'Grand Theft Auto VI',
        alternateName: 'GTA VI',
        description: 'Open-world action-adventure game set in Leonida, featuring dual protagonists Lucia and Jason.',
        gamePlatform: ['PlayStation 5', 'Xbox Series X|S'],
        applicationCategory: 'Game',
        operatingSystem: 'PlayStation 5, Xbox Series X|S',
        publisher: { '@type': 'Organization', name: 'Rockstar Games' },
        developer: { '@type': 'Organization', name: 'Rockstar North' },
        datePublished: '2026-11-19',
        genre: ['Action-adventure', 'Open world'],
      });
    }

    if (jsonLd) {
      if (Array.isArray(jsonLd)) schemas.push(...jsonLd);
      else schemas.push(jsonLd);
    }

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove());
    };
  }, [fullTitle, description, canonicalUrl, type, lang, noindex, breadcrumbs, faqItems, jsonLd, datePublished, dateModified, title, path, ogImage, includeVideoGameSchema, basePath]);

  return null;
};

export default SEOHead;
