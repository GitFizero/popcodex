import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { blogArticles } from '@/gta-vi-wiki/data/blog';
import {
  generateWikiSectionMetadata,
  generateWikiBlogArticleMetadata,
} from '@/lib/wiki-ssr/metadata';

const FRANCHISE_ID = 'gta-vi';
const FRANCHISE_NAME = { fr: 'GTA VI', en: 'GTA VI' };
const OG_IMAGE = 'https://popcodex.com/og-image.svg';

type Props = {
  params: Promise<{ locale: string; path?: string[] }>;
  children: React.ReactNode;
};

export async function generateStaticParams() {
  const sections = [
    [], ['characters'], ['story'], ['world'], ['combat'], ['weapons'],
    ['lore'], ['blog'], ['guides'], ['glossary'], ['gallery'],
    ['items'], ['quests'], ['buy'], ['about'], ['privacy'], ['trailers'],
  ];
  const blogPaths = blogArticles.map(a => ['blog', a.slug]);
  const allPaths = [...sections, ...blogPaths];
  return locales.flatMap(locale => allPaths.map(path => ({ locale, path })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, path } = await params;
  const section = path?.[0] || '';

  if (section === 'blog' && path?.[1]) {
    const article = blogArticles.find(a => a.slug === path[1]);
    if (article) {
      return generateWikiBlogArticleMetadata(FRANCHISE_ID, 'GTA VI Wiki', article, locale);
    }
  }

  type SeoEntry = { title: Record<string, string>; desc: Record<string, string> };
  const seoMap: Record<string, SeoEntry> = {
    '': seo.index, characters: seo.characters, story: seo.story, world: seo.world,
    combat: seo.combat, weapons: seo.weapons, lore: seo.lore, blog: seo.blog,
    guides: seo.guides, glossary: seo.glossary, gallery: seo.gallery,
    items: seo.items, quests: seo.quests, buy: (seo as any).buy, about: seo.about,
    privacy: seo.privacy, trailers: seo.trailers,
  };

  const sectionSeo = seoMap[section];
  if (sectionSeo) {
    return generateWikiSectionMetadata(FRANCHISE_ID, FRANCHISE_NAME, { [section || 'index']: sectionSeo }, section || 'index', locale, OG_IMAGE);
  }

  return generateWikiSectionMetadata(FRANCHISE_ID, FRANCHISE_NAME, { index: seo.index }, 'index', locale, OG_IMAGE);
}

export default async function GtaViLayout({ params, children }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
