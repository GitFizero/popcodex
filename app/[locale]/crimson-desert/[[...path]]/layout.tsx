import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { seo } from '@/crimson-desert-wiki/lib/seo';
import { blogArticles } from '@/crimson-desert-wiki/data/blog';
import {
  generateWikiSectionMetadata,
  generateWikiBlogArticleMetadata,
} from '@/lib/wiki-ssr/metadata';

const FRANCHISE_ID = 'crimson-desert';
const FRANCHISE_NAME = { fr: 'Crimson Desert', en: 'Crimson Desert' };
const OG_IMAGE = 'https://www.popcodex.com/crimson-desert/pywel-panorama.jpg';

type Props = {
  params: Promise<{ locale: string; path?: string[] }>;
  children: React.ReactNode;
};

export async function generateStaticParams() {
  // All wiki section pages
  const sections = [
    [], // index
    ['characters'],
    ['story'],
    ['world'],
    ['combat'],
    ['weapons'],
    ['lore'],
    ['blog'],
    ['guides'],
    ['glossary'],
    ['gallery'],
    ['items'],
    ['mounts'],
    ['quests'],
    ['buy'],
    ['about'],
    ['privacy'],
  ];

  // Blog article pages
  const blogPaths = blogArticles.map(a => ['blog', a.slug]);

  const allPaths = [...sections, ...blogPaths];

  return locales.flatMap(locale =>
    allPaths.map(path => ({ locale, path }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, path } = await params;
  const section = path?.[0] || '';

  // Blog article: /blog/:slug
  if (section === 'blog' && path?.[1]) {
    const slug = path[1];
    const article = blogArticles.find(a => a.slug === slug);
    if (article) {
      return generateWikiBlogArticleMetadata(
        FRANCHISE_ID,
        'Crimson Desert Fan Wiki',
        article,
        locale,
      );
    }
  }

  // Section pages: map section to seo config key
  type SeoEntry = { title: Record<string, string>; desc: Record<string, string> };
  const seoMap: Record<string, SeoEntry> = {
    '': seo.index,
    characters: seo.characters,
    story: seo.story,
    world: seo.world,
    combat: seo.combat,
    weapons: seo.weapons,
    lore: seo.lore,
    blog: seo.blog,
    guides: seo.guides,
    glossary: seo.glossary,
    gallery: seo.gallery,
    items: seo.items,
    mounts: seo.mounts,
    quests: seo.quests,
    buy: seo.buy,
    about: seo.about,
    privacy: seo.privacy,
  };

  const sectionSeo = seoMap[section];
  if (sectionSeo) {
    return generateWikiSectionMetadata(
      FRANCHISE_ID,
      FRANCHISE_NAME,
      { [section || 'index']: sectionSeo },
      section || 'index',
      locale,
      OG_IMAGE,
    );
  }

  // Fallback
  return generateWikiSectionMetadata(
    FRANCHISE_ID,
    FRANCHISE_NAME,
    { index: seo.index },
    'index',
    locale,
    OG_IMAGE,
  );
}

export default async function CrimsonDesertLayout({ params, children }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
