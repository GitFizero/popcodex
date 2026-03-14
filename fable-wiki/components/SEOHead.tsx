import { useEffect } from 'react';
import type { Lang } from '@/fable-wiki/context/I18nContext';

const DOMAIN = 'https://popcodex.com';

interface BreadcrumbItem { name: string; path: string; }
interface FAQItem { question: string; answer: string; }

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
}

const SEOHead = ({ title, description, path = '/', type = 'website', datePublished, dateModified, faqItems, breadcrumbs, noindex = false, lang = 'en', jsonLd }: SEOHeadProps) => {
  const fullTitle = `${title} | Fable Wiki Fan`;
  const canonicalUrl = `${DOMAIN}${path}`;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = lang;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string, extra?: Record<string, string>) => {
      const selector = extra ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) { el = document.createElement('link'); el.rel = rel; if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v)); document.head.appendChild(el); }
      el.href = href;
    };

    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setLink('canonical', canonicalUrl);
    setLink('alternate', `${DOMAIN}${path}`, { hreflang: 'fr' });
    setLink('alternate', `${DOMAIN}${path}`, { hreflang: 'en' });
    setLink('alternate', `${DOMAIN}${path}`, { hreflang: 'x-default' });

    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', 'Fable Fan Wiki');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(s => s.remove());
    const schemas: Record<string, unknown>[] = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((b, i, arr) => { const entry: Record<string, unknown> = { '@type': 'ListItem', position: i + 1, name: b.name }; if (i < arr.length - 1) entry.item = `${DOMAIN}${b.path}`; return entry; }) });
    }
    if (faqItems && faqItems.length > 0) {
      schemas.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) });
    }
    if (type === 'article') {
      schemas.push({ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, author: { '@type': 'Organization', name: 'Fable Fan Wiki' }, publisher: { '@type': 'Organization', name: 'Fable Fan Wiki' }, datePublished: datePublished || '2026-03-10', dateModified: dateModified || '2026-03-10', mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl }, inLanguage: lang });
    }
    if (jsonLd) { if (Array.isArray(jsonLd)) schemas.push(...jsonLd); else schemas.push(jsonLd); }

    schemas.forEach(schema => { const script = document.createElement('script'); script.type = 'application/ld+json'; script.setAttribute('data-seo-jsonld', 'true'); script.textContent = JSON.stringify(schema); document.head.appendChild(script); });

    return () => { document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove()); };
  }, [fullTitle, description, canonicalUrl, type, lang, noindex, breadcrumbs, faqItems, jsonLd, datePublished, dateModified, title, path]);

  return null;
};

export default SEOHead;
