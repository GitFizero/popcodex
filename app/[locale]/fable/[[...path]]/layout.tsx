import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { seo } from '@/fable-wiki/lib/seo';
import { blogArticles } from '@/fable-wiki/data/blog';
import {
  generateWikiSectionMetadata,
  generateWikiBlogArticleMetadata,
} from '@/lib/wiki-ssr/metadata';

const FRANCHISE_ID = 'fable';
const FRANCHISE_NAME = { fr: 'Fable', en: 'Fable' };
const OG_IMAGE = 'https://www.popcodex.com/og-image.svg';

type Props = {
  params: Promise<{ locale: string; path?: string[] }>;
  children: React.ReactNode;
};

export async function generateStaticParams() {
  const sections = [
    [], ['characters'], ['story'], ['world'], ['combat'], ['weapons'],
    ['lore'], ['blog'], ['guides'], ['glossary'], ['gallery'],
    ['items'], ['mounts'], ['quests'], ['buy'], ['about'], ['privacy'],
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
      return generateWikiBlogArticleMetadata(FRANCHISE_ID, 'Fable Fan Wiki', article, locale);
    }
  }

  type SeoEntry = { title: Record<string, string>; desc: Record<string, string> };
  const seoMap: Record<string, SeoEntry> = {
    '': seo.index, characters: seo.characters, story: seo.story, world: seo.world,
    combat: seo.combat, weapons: (seo as any).weapons, lore: seo.lore, blog: (seo as any).blog,
    guides: seo.guides, glossary: seo.glossary, gallery: seo.gallery,
    items: (seo as any).items, mounts: (seo as any).mounts, quests: (seo as any).quests,
    buy: (seo as any).buy, about: seo.about, privacy: (seo as any).privacy,
  };

  const sectionSeo = seoMap[section];
  if (sectionSeo) {
    return generateWikiSectionMetadata(FRANCHISE_ID, FRANCHISE_NAME, { [section || 'index']: sectionSeo }, section || 'index', locale, OG_IMAGE);
  }

  return generateWikiSectionMetadata(FRANCHISE_ID, FRANCHISE_NAME, { index: seo.index }, 'index', locale, OG_IMAGE);
}

export default async function FableLayout({ params, children }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
