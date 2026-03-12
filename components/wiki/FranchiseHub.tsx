'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, FileText, ArrowRight, Clock } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { FranchiseConfig } from '@/lib/franchise-config';
import { ArticleData, getArticlesByFranchise } from '@/lib/articles';

interface FranchiseHubProps {
  franchise: FranchiseConfig;
}

export default function FranchiseHub({ franchise }: FranchiseHubProps) {
  const locale = useLocale();
  const t = useTranslations('franchise');
  const tUniverse = useTranslations('universe');
  const tArticle = useTranslations('article');
  const articles = getArticlesByFranchise(franchise.id);
  const releaseDate = new Date(franchise.releaseDate).toLocaleDateString(
    locale === 'en' ? 'en-US' : locale, { day: 'numeric', month: 'long', year: 'numeric' }
  );

  const articlesByCategory: Record<string, ArticleData[]> = {};
  articles.forEach(article => {
    if (!articlesByCategory[article.category]) {
      articlesByCategory[article.category] = [];
    }
    articlesByCategory[article.category].push(article);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl overflow-hidden p-8 sm:p-12 mb-12"
        style={{
          background: `linear-gradient(135deg, ${franchise.accentColor}08, ${franchise.accentColor}18, ${franchise.accentColor}08)`,
        }}
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
        >
          {franchise.name[locale] || franchise.name.fr}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl">
          {franchise.description[locale] || franchise.description.fr}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-secondary)]">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {tUniverse('releaseDate')} : {releaseDate}
          </span>
          <span className="flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            {tUniverse('articlesCount', { count: articles.length })}
          </span>
          <Badge color={franchise.accentColor}>{franchise.developer}</Badge>
        </div>
      </motion.div>

      {/* Category navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
        aria-label="Categories"
      >
        {franchise.categories.map((cat) => {
          const catArticles = articlesByCategory[cat.slug.fr] || [];
          return (
            <a
              key={cat.slug.fr}
              href={`#${cat.slug[locale] || cat.slug.fr}`}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] transition-colors no-underline text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            >
              {cat.label[locale] || cat.label.fr}
              {catArticles.length > 0 && (
                <span className="ml-1.5 text-[var(--color-text-tertiary)]">({catArticles.length})</span>
              )}
            </a>
          );
        })}
      </motion.nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1">
          {franchise.categories.map((cat, catIndex) => {
            const catArticles = articlesByCategory[cat.slug.fr] || [];
            if (catArticles.length === 0) return null;
            const catSlug = cat.slug[locale] || cat.slug.fr;
            return (
              <motion.section
                key={cat.slug.fr}
                id={catSlug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                className="mb-10"
              >
                <h2
                  className="text-xl font-bold text-[var(--color-text)] mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {cat.label[locale] || cat.label.fr}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {catArticles.map((article, i) => (
                    <Link
                      key={article.slug}
                      href={`/${locale}/${franchise.id}/${catSlug}/${article.slug}`}
                      className="group flex flex-col p-5 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md no-underline"
                    >
                      <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                        {article.title[locale] || article.title.fr}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2">
                        {article.excerpt[locale] || article.excerpt.fr}
                      </p>
                      <div className="mt-auto pt-3 flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {tArticle('readTime', { minutes: article.readTime })}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-accent)]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Sidebar */}
        <aside className="lg:w-72 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-5">
              <h3
                className="text-sm font-semibold text-[var(--color-text)] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t('totalArticles')}
              </h3>
              <div className="text-3xl font-bold" style={{ color: franchise.accentColor, fontFamily: 'var(--font-display)' }}>
                {articles.length}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] mb-2">
                  <span>{t('wikiProgress')}</span>
                  <span>{Math.min(Math.round((articles.length / 20) * 100), 100)}%</span>
                </div>
                <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min((articles.length / 20) * 100, 100)}%`,
                      background: franchise.accentColor,
                    }}
                  />
                </div>
              </div>

              <div className="mt-4 text-xs text-[var(--color-text-tertiary)]">
                {t('lastUpdate')} : {new Date(articles[0]?.updatedAt || '').toLocaleDateString(locale === 'en' ? 'en-US' : locale, { day: 'numeric', month: 'short', year: 'numeric' })}
              </div>
            </div>

            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-5">
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[var(--color-text-secondary)]">Développeur</dt>
                  <dd className="text-[var(--color-text)] font-medium">{franchise.developer}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-text-secondary)]">Plateformes</dt>
                  <dd className="text-[var(--color-text)] font-medium text-right">{franchise.platforms.join(', ')}</dd>
                </div>
              </dl>
            </div>

            <p className="text-xs text-[var(--color-text-tertiary)] italic">
              {t('disclaimer')}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
