import { useEffect } from 'react';
import type { Lang } from '@/crimson-desert-wiki/context/I18nContext';

const DOMAIN = 'https://www.popcodex.com';

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
}

const LOCALE_MAP: Record<Lang, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  it: 'it_IT',
  ko: 'ko_KR',
  de: 'de_DE',
};

const KEYWORDS: Record<Lang, string> = {
  fr: 'crimson desert, crimson desert date de sortie, crimson desert ps5, crimson desert gameplay, crimson desert coop, crimson desert steam, crimson desert sortie, crimson desert date de sortie ps5, pearl abyss, kliff macduff, pywel, crimson desert wiki',
  en: 'crimson desert, crimson desert release date, crimson desert ps5, crimson desert gameplay, crimson desert game, crimson desert multiplayer, crimson desert platforms, when does crimson desert come out, crimson desert release, pearl abyss, kliff macduff, pywel, crimson desert wiki',
  es: 'crimson desert, crimson desert fecha de lanzamiento, crimson desert ps5, crimson desert gameplay, crimson desert juego, crimson desert multijugador, crimson desert plataformas, crimson desert lanzamiento, pearl abyss, kliff macduff, pywel, crimson desert wiki',
  pt: 'crimson desert, crimson desert data de lancamento, crimson desert ps5, crimson desert gameplay, crimson desert jogo, crimson desert multiplayer, crimson desert plataformas, crimson desert lancamento, pearl abyss, kliff macduff, pywel, crimson desert wiki',
  it: 'crimson desert, crimson desert data di uscita, crimson desert ps5, crimson desert gameplay, crimson desert gioco, crimson desert multigiocatore, crimson desert piattaforme, crimson desert uscita, pearl abyss, kliff macduff, pywel, crimson desert wiki',
  ko: '크림슨 디저트, 크림슨 디저트 출시일, 크림슨 디저트 PS5, 크림슨 디저트 게임플레이, 크림슨 디저트 게임, 크림슨 디저트 멀티플레이, 크림슨 디저트 플랫폼, 크림슨 디저트 출시, 펄어비스, 클리프 맥더프, 파이웰, 크림슨 디저트 위키',
  de: 'crimson desert, crimson desert erscheinungsdatum, crimson desert ps5, crimson desert gameplay, crimson desert spiel, crimson desert mehrspieler, crimson desert plattformen, crimson desert release, pearl abyss, kliff macduff, pywel, crimson desert wiki',
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
  lang = 'fr',
  jsonLd,
}: SEOHeadProps) => {
  const fullTitle = `${title} | Crimson Desert Wiki Fan`;
  const canonicalUrl = `${DOMAIN}${path}`;

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

    // Basic meta
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setMeta('name', 'keywords', KEYWORDS[lang]);

    // Canonical
    setLink('canonical', canonicalUrl);

    // Hreflang for all 4 languages + x-default
    setLink('alternate', `${DOMAIN}${path}`, { hreflang: 'fr' });
    setLink('alternate', `${DOMAIN}${path}`, { hreflang: 'en' });
    setLink('alternate', `${DOMAIN}${path}`, { hreflang: 'es' });
    setLink('alternate', `${DOMAIN}${path}`, { hreflang: 'it' });
    setLink('alternate', `${DOMAIN}${path}`, { hreflang: 'x-default' });

    // Open Graph
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', 'Crimson Desert Fan Wiki');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:locale', LOCALE_MAP[lang]);

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(s => s.remove());

    const schemas: Record<string, unknown>[] = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i, arr) => {
          const entry: Record<string, unknown> = {
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
          };
          // Last breadcrumb should NOT have an item property per Google guidelines
          if (i < arr.length - 1) {
            entry.item = `${DOMAIN}${b.path}`;
          }
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
        author: { '@type': 'Organization', name: 'Crimson Desert Fan Wiki' },
        publisher: { '@type': 'Organization', name: 'Crimson Desert Fan Wiki' },
        datePublished: datePublished || '2026-03-08',
        dateModified: dateModified || '2026-03-08',
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        inLanguage: lang,
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
  }, [fullTitle, description, canonicalUrl, type, lang, noindex, breadcrumbs, faqItems, jsonLd, datePublished, dateModified, title, path]);

  return null;
};

export default SEOHead;
