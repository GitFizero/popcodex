import { Metadata } from 'next';
import { FranchiseConfig } from '../franchise-config';
import { ArticleData } from '../articles';
import { locales } from '../i18n/config';

const BASE_URL = 'https://popcodex.com';
const ALL_LOCALES = locales;

export function generateBaseMetadata(locale: string): Metadata {
  const titles: Record<string, string> = {
    fr: "PopCodex — L'encyclopédie pop culture",
    en: 'PopCodex — The Pop Culture Encyclopedia',
    es: 'PopCodex — La enciclopedia de cultura pop',
    pt: 'PopCodex — A enciclopédia de cultura pop',
    it: "PopCodex — L'enciclopedia della cultura pop",
    ko: 'PopCodex — 팝 컬처 백과사전',
  };
  const descriptions: Record<string, string> = {
    fr: 'PopCodex est votre guide encyclopédique des univers de la pop culture : jeux vidéo, films, séries et comics. GTA VI, Crimson Desert, Fable, Wolverine et plus.',
    en: 'PopCodex is your encyclopedic guide to pop culture universes: video games, movies, TV shows and comics. GTA VI, Crimson Desert, Fable, Wolverine and more.',
    es: 'PopCodex es tu guía enciclopédica de los universos de la cultura pop: videojuegos, películas, series y cómics.',
    pt: 'PopCodex é o seu guia enciclopédico dos universos da cultura pop: videogames, filmes, séries e quadrinhos.',
    it: "PopCodex è la tua guida enciclopedica agli universi della cultura pop: videogiochi, film, serie TV e fumetti.",
    ko: 'PopCodex는 비디오 게임, 영화, TV 시리즈, 만화 등 팝 컬처 세계의 백과사전 가이드입니다. GTA VI, 붉은사막, 페이블, 울버린 등.',
  };
  return {
    title: titles[locale] || titles.fr,
    description: descriptions[locale] || descriptions.fr,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: Object.fromEntries(ALL_LOCALES.map(l => [l, `${BASE_URL}/${l}`])),
    },
    openGraph: {
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
      url: `${BASE_URL}/${locale}`,
      siteName: 'PopCodex',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateFranchiseMetadata(franchise: FranchiseConfig, locale: string): Metadata {
  const title = `${franchise.name[locale] || franchise.name.fr} | PopCodex`;
  const description = franchise.description[locale] || franchise.description.fr;
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/${franchise.id}`,
      languages: Object.fromEntries(ALL_LOCALES.map(l => [l, `${BASE_URL}/${l}/${franchise.id}`])),
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/${franchise.id}`,
      siteName: 'PopCodex',
      locale,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export function generateArticleMetadata(article: ArticleData, franchise: FranchiseConfig, locale: string, categorySlug: string): Metadata {
  const title = `${article.title[locale] || article.title.fr} — ${franchise.name[locale] || franchise.name.fr} | PopCodex`;
  const description = article.excerpt[locale] || article.excerpt.fr;
  const url = `${BASE_URL}/${locale}/${franchise.id}/${categorySlug}/${article.slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        ALL_LOCALES.map(l => {
          const catSlug = franchise.categories.find(c => c.slug.fr === article.category)?.slug[l] || article.category;
          return [l, `${BASE_URL}/${l}/${franchise.id}/${catSlug}/${article.slug}`];
        })
      ),
    },
    openGraph: {
      title: article.title[locale] || article.title.fr,
      description,
      url,
      siteName: 'PopCodex',
      locale,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
    },
    twitter: { card: 'summary_large_image', title: article.title[locale] || article.title.fr, description },
  };
}
