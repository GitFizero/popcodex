'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, FileText, ArrowRight, Clock, Gamepad2 } from 'lucide-react';
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
    locale === 'ko' ? 'ko-KR' : locale === 'en' ? 'en-US' : locale,
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  const articlesByCategory: Record<string, ArticleData[]> = {};
  articles.forEach(article => {
    if (!articlesByCategory[article.category]) {
      articlesByCategory[article.category] = [];
    }
    articlesByCategory[article.category].push(article);
  });

  return (
    <div className="min-h-screen">
      {/* Full-width immersive hero — makes it feel like a sub-site */}
      <div
        className="relative overflow-hidden"
        style={{ background: franchise.theme.bgGradient }}
      >
        {/* Decorative pattern layer */}
        {franchise.theme.heroPattern && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: franchise.theme.heroPattern }}
          />
        )}

        {/* Accent bar at top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-1 origin-left"
          style={{ background: franchise.accentColor }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10">
          {/* Franchise identity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: `${franchise.accentColor}15` }}
            >
              <Gamepad2 className="w-5 h-5" style={{ color: franchise.accentColor }} />
            </div>
            <Badge color={franchise.accentColor}>{franchise.developer}</Badge>
            <span className="text-sm text-[var(--color-text-tertiary)]">·</span>
            <span className="text-sm text-[var(--color-text-secondary)]">{franchise.platforms.join(' / ')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.03em',
              color: franchise.accentColor,
            }}
          >
            {franchise.name[locale] || franchise.name.fr}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed"
          >
            {franchise.description[locale] || franchise.description.fr}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[var(--color-text-secondary)]"
          >
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
              <Calendar className="w-4 h-4" style={{ color: franchise.accentColor }} />
              {tUniverse('releaseDate')} : {releaseDate}
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
              <FileText className="w-4 h-4" style={{ color: franchise.accentColor }} />
              {tUniverse('articlesCount', { count: articles.length })}
            </span>
          </motion.div>

          {/* Big watermark text */}
          <div className="absolute right-0 bottom-0 overflow-hidden pointer-events-none select-none">
            <span
              className="block text-[12rem] sm:text-[16rem] font-bold leading-none opacity-[0.03]"
              style={{ fontFamily: 'var(--font-display)', color: franchise.accentColor }}
            >
              {franchise.name[locale]?.split(' ')[0] || franchise.id}
            </span>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Category navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2 overflow-x-auto py-6 -mx-4 px-4 sm:mx-0 sm:px-0 sticky top-16 z-20 bg-[var(--color-bg)]/90 backdrop-blur-sm"
          aria-label="Categories"
        >
          {franchise.categories.map((cat, i) => {
            const catArticles = articlesByCategory[cat.slug.fr] || [];
            return (
              <motion.a
                key={cat.slug.fr}
                href={`#${cat.slug[locale] || cat.slug.fr}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.04 }}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] transition-all duration-200 no-underline text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:-translate-y-0.5"
              >
                {cat.label[locale] || cat.label.fr}
                {catArticles.length > 0 && (
                  <span className="ml-1.5 text-[var(--color-text-tertiary)]">({catArticles.length})</span>
                )}
              </motion.a>
            );
          })}
        </motion.nav>

        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          {/* Main content */}
          <div className="flex-1 min-w-0">
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
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-1 h-6 rounded-full"
                      style={{ background: franchise.accentColor }}
                    />
                    <h2
                      className="text-xl font-bold text-[var(--color-text)]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {cat.label[locale] || cat.label.fr}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {catArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/${locale}/${franchise.id}/${catSlug}/${article.slug}`}
                        className="group flex flex-col p-5 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md no-underline"
                      >
                        <h3
                          className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
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
            <div className="lg:sticky lg:top-32 space-y-6">
              <div
                className="rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden"
                style={{ background: `${franchise.accentColor}04` }}
              >
                <div
                  className="h-1"
                  style={{ background: franchise.accentColor }}
                />
                <div className="p-5">
                  <h3
                    className="text-sm font-semibold text-[var(--color-text)] mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t('totalArticles')}
                  </h3>
                  <div
                    className="text-4xl font-bold"
                    style={{ color: franchise.accentColor, fontFamily: 'var(--font-display)' }}
                  >
                    {articles.length}
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] mb-2">
                      <span>{t('wikiProgress')}</span>
                      <span>{Math.min(Math.round((articles.length / 30) * 100), 100)}%</span>
                    </div>
                    <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((articles.length / 30) * 100, 100)}%` }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: franchise.accentColor }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-[var(--color-text-tertiary)]">
                    {t('lastUpdate')} : {new Date(articles[0]?.updatedAt || '').toLocaleDateString(
                      locale === 'ko' ? 'ko-KR' : locale === 'en' ? 'en-US' : locale,
                      { day: 'numeric', month: 'short', year: 'numeric' }
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-5">
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-text-secondary)]">
                      {locale === 'ko' ? '개발사' : locale === 'en' ? 'Developer' : 'Développeur'}
                    </dt>
                    <dd className="text-[var(--color-text)] font-medium">{franchise.developer}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-text-secondary)]">
                      {locale === 'ko' ? '플랫폼' : locale === 'en' ? 'Platforms' : 'Plateformes'}
                    </dt>
                    <dd className="text-[var(--color-text)] font-medium text-right">{franchise.platforms.join(', ')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-text-secondary)]">
                      {locale === 'ko' ? '퍼블리셔' : locale === 'en' ? 'Publisher' : 'Éditeur'}
                    </dt>
                    <dd className="text-[var(--color-text)] font-medium text-right">{franchise.publisher}</dd>
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
    </div>
  );
}
