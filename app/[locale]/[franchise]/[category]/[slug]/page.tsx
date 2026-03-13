import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getFranchiseById, getAllFranchiseIds, findCategoryBySlug } from '@/lib/franchise-config';
import { getArticlesByFranchise, getArticleBySlug } from '@/lib/articles';
import { generateArticleMetadata } from '@/lib/seo/metadata';
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo/jsonld';
import ArticleLayout from '@/components/wiki/ArticleLayout';
import { locales } from '@/lib/i18n/config';

// Crimson Desert is served by its own dedicated wiki SPA
const WIKI_FRANCHISES = ['crimson-desert'];

export async function generateStaticParams() {
  const params: { locale: string; franchise: string; category: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const franchiseId of getAllFranchiseIds()) {
      if (WIKI_FRANCHISES.includes(franchiseId)) continue;
      const franchise = getFranchiseById(franchiseId)!;
      const articles = getArticlesByFranchise(franchiseId);
      for (const article of articles) {
        const cat = franchise.categories.find(c => c.slug.fr === article.category);
        if (cat) {
          params.push({
            locale,
            franchise: franchiseId,
            category: cat.slug[locale] || cat.slug.fr,
            slug: article.slug,
          });
        }
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; franchise: string; category: string; slug: string }> }) {
  const { locale, franchise: franchiseId, category: categorySlug, slug } = await params;
  const franchise = getFranchiseById(franchiseId);
  if (!franchise) return {};
  const article = getArticleBySlug(franchiseId, slug);
  if (!article) return {};
  return generateArticleMetadata(article, franchise, locale, categorySlug);
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; franchise: string; category: string; slug: string }> }) {
  const { locale, franchise: franchiseId, category: categorySlug, slug } = await params;
  setRequestLocale(locale);

  const franchise = getFranchiseById(franchiseId);
  if (!franchise) notFound();

  const article = getArticleBySlug(franchiseId, slug);
  if (!article) notFound();

  const category = findCategoryBySlug(franchise, categorySlug, locale)
    || franchise.categories.find(c => c.slug.fr === article.category);
  if (!category) notFound();

  const categoryLabel = category.label[locale] || category.label.fr;
  const localeCatSlug = category.slug[locale] || category.slug.fr;

  // Build prev/next
  const allArticles = getArticlesByFranchise(franchiseId).filter(a => a.category === article.category);
  const currentIndex = allArticles.findIndex(a => a.slug === article.slug);

  const prevArticle = currentIndex > 0 ? {
    slug: allArticles[currentIndex - 1].slug,
    title: allArticles[currentIndex - 1].title[locale] || allArticles[currentIndex - 1].title.fr,
    href: `/${locale}/${franchiseId}/${localeCatSlug}/${allArticles[currentIndex - 1].slug}`,
  } : null;

  const nextArticle = currentIndex < allArticles.length - 1 ? {
    slug: allArticles[currentIndex + 1].slug,
    title: allArticles[currentIndex + 1].title[locale] || allArticles[currentIndex + 1].title.fr,
    href: `/${locale}/${franchiseId}/${localeCatSlug}/${allArticles[currentIndex + 1].slug}`,
  } : null;

  const breadcrumbs = [
    { label: 'PopCodex', href: `/${locale}` },
    { label: franchise.name[locale] || franchise.name.fr, href: `/${locale}/${franchiseId}` },
    { label: categoryLabel, href: `/${locale}/${franchiseId}#${localeCatSlug}` },
    { label: article.title[locale] || article.title.fr, href: `/${locale}/${franchiseId}/${localeCatSlug}/${slug}` },
  ];

  const articleJsonLd = generateArticleJsonLd(article, franchise, locale, localeCatSlug);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(
    breadcrumbs.map(b => ({ name: b.label, url: b.href }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleLayout
        article={article}
        franchise={franchise}
        categorySlug={localeCatSlug}
        categoryLabel={categoryLabel}
        breadcrumbs={breadcrumbs}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      />
    </>
  );
}
