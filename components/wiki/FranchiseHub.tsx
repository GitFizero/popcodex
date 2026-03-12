'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, FileText, ArrowRight, Clock, Gamepad2 } from 'lucide-react';
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

  const accentColor = franchise.accentColor;
  const secondaryColor = franchise.theme.accentSecondary || accentColor;
  const isGta = franchise.id === 'gta-vi';
  const isCrimson = franchise.id === 'crimson-desert';

  return (
    <div
      className="min-h-screen"
      style={{
        background: franchise.theme.bgGradient,
        fontFamily: franchise.theme.fontBody,
      }}
    >
      {/* === HERO SECTION === */}
      <div className="relative overflow-hidden">
        {/* Background pattern (grid for GTA, radial for Crimson) */}
        {franchise.theme.heroPattern && (
          <div
            className={`absolute inset-0 pointer-events-none ${isGta ? 'bg-universe-grid' : ''}`}
            style={{
              background: isGta ? undefined : franchise.theme.heroPattern,
              backgroundSize: isGta ? '60px 60px' : undefined,
            }}
          />
        )}

        {/* Noise texture for Crimson Desert */}
        {isCrimson && (
          <div className="absolute inset-0 pointer-events-none bg-noise-texture" />
        )}

        {/* Accent bar at top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-1 origin-left"
          style={{
            background: isGta || isCrimson
              ? `linear-gradient(90deg, ${accentColor}, ${secondaryColor})`
              : accentColor,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
          {/* Franchise identity row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: `${accentColor}15` }}
            >
              <Gamepad2 className="w-5 h-5" style={{ color: accentColor }} />
            </div>
            <span
              className="badge-universe px-3 py-1 rounded-full text-xs font-semibold"
              style={{ fontFamily: franchise.theme.fontDisplay }}
            >
              {franchise.developer}
            </span>
            <span className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>·</span>
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {franchise.platforms.join(' / ')}
            </span>
          </motion.div>

          {/* TITLE — radically different per universe */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`text-5xl sm:text-6xl lg:text-8xl font-bold ${
              isGta ? 'neon-title neon-flicker' : isCrimson ? 'text-gradient-gold shimmer' : ''
            }`}
            style={{
              fontFamily: franchise.theme.fontDisplay,
              letterSpacing: isGta ? '0.04em' : isCrimson ? '0.08em' : '-0.03em',
              color: isGta ? accentColor : isCrimson ? undefined : accentColor,
              textTransform: isGta || isCrimson ? 'uppercase' : undefined,
            }}
          >
            {franchise.name[locale] || franchise.name.fr}
          </motion.h1>

          {/* Subtitle decorative line */}
          {(isGta || isCrimson) && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="h-[2px] max-w-md mt-4 origin-left"
              style={{
                background: isGta
                  ? `linear-gradient(90deg, ${secondaryColor}, transparent)`
                  : `linear-gradient(90deg, ${secondaryColor}80, transparent)`,
                boxShadow: isGta ? `0 0 15px ${secondaryColor}40` : undefined,
              }}
            />
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 text-lg sm:text-xl max-w-2xl leading-relaxed"
            style={{
              color: 'var(--color-text-secondary)',
              fontFamily: franchise.theme.fontBody,
            }}
          >
            {franchise.description[locale] || franchise.description.fr}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{
                background: 'var(--color-bg-elevated)',
                borderColor: 'var(--color-border)',
              }}
            >
              <Calendar className="w-4 h-4" style={{ color: accentColor }} />
              {tUniverse('releaseDate')} : {releaseDate}
            </span>
            <span
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{
                background: 'var(--color-bg-elevated)',
                borderColor: 'var(--color-border)',
              }}
            >
              <FileText className="w-4 h-4" style={{ color: secondaryColor }} />
              {tUniverse('articlesCount', { count: articles.length })}
            </span>
          </motion.div>

          {/* Big watermark text */}
          <div className="absolute right-0 bottom-0 overflow-hidden pointer-events-none select-none">
            <span
              className={`block text-[12rem] sm:text-[18rem] font-bold leading-none ${
                isGta ? 'neon-title-alt' : ''
              }`}
              style={{
                fontFamily: franchise.theme.fontDisplay,
                color: isGta ? undefined : accentColor,
                opacity: isGta ? 0.04 : 0.03,
                letterSpacing: isGta ? '0.05em' : undefined,
              }}
            >
              {isGta ? 'VI' : isCrimson ? 'PYWEL' : (franchise.name[locale]?.split(' ')[0] || franchise.id)}
            </span>
          </div>
        </div>
      </div>

      {/* === CONTENT AREA === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Category navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex gap-2 overflow-x-auto py-6 -mx-4 px-4 sm:mx-0 sm:px-0 sticky top-16 z-20 backdrop-blur-md"
          style={{ background: 'color-mix(in srgb, var(--color-bg) 90%, transparent)' }}
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
                transition={{ delay: 0.35 + i * 0.04 }}
                className="cat-pill flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 no-underline hover:-translate-y-0.5"
                style={{
                  fontFamily: franchise.theme.fontDisplay,
                  background: 'var(--color-bg-elevated)',
                }}
              >
                {cat.label[locale] || cat.label.fr}
                {catArticles.length > 0 && (
                  <span className="ml-1.5" style={{ color: 'var(--color-text-tertiary)' }}>
                    ({catArticles.length})
                  </span>
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
                  className="mb-14"
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-6">
                    {isCrimson ? (
                      <div
                        className="h-[2px] w-8"
                        style={{ background: `linear-gradient(90deg, ${secondaryColor}, transparent)` }}
                      />
                    ) : (
                      <div
                        className="w-1 h-6 rounded-full"
                        style={{
                          background: isGta
                            ? `linear-gradient(180deg, ${accentColor}, ${secondaryColor})`
                            : accentColor,
                        }}
                      />
                    )}
                    <h2
                      className="text-xl font-bold"
                      style={{
                        fontFamily: franchise.theme.fontDisplay,
                        color: 'var(--color-text)',
                        letterSpacing: isGta || isCrimson ? '0.06em' : undefined,
                        textTransform: isGta || isCrimson ? 'uppercase' : undefined,
                      }}
                    >
                      {cat.label[locale] || cat.label.fr}
                    </h2>
                  </div>

                  {/* Article cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {catArticles.map((article, articleIndex) => (
                      <motion.div
                        key={article.slug}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: articleIndex * 0.06 }}
                      >
                        <Link
                          href={`/${locale}/${franchise.id}/${catSlug}/${article.slug}`}
                          className={`group flex flex-col p-5 rounded-[var(--radius-card)] transition-all duration-200 no-underline ${
                            franchise.theme.cardEffect || 'border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:-translate-y-0.5 hover:shadow-md'
                          }`}
                          style={{ background: 'var(--color-bg-elevated)' }}
                        >
                          <h3
                            className="font-semibold transition-colors"
                            style={{
                              fontFamily: franchise.theme.fontDisplay,
                              color: 'var(--color-text)',
                              letterSpacing: isGta ? '0.02em' : isCrimson ? '0.04em' : undefined,
                            }}
                          >
                            <span className="group-hover:text-[var(--color-accent)] transition-colors">
                              {article.title[locale] || article.title.fr}
                            </span>
                          </h3>
                          <p
                            className="mt-2 text-sm line-clamp-2"
                            style={{
                              color: 'var(--color-text-secondary)',
                              fontFamily: franchise.theme.fontBody,
                            }}
                          >
                            {article.excerpt[locale] || article.excerpt.fr}
                          </p>
                          <div
                            className="mt-auto pt-3 flex items-center justify-between text-xs"
                            style={{ color: 'var(--color-text-tertiary)' }}
                          >
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {tArticle('readTime', { minutes: article.readTime })}
                            </span>
                            <ArrowRight
                              className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{ color: isGta ? secondaryColor : accentColor }}
                            />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Stats card */}
              <div
                className={`rounded-[var(--radius-card)] overflow-hidden ${
                  isCrimson ? 'card-medieval' : isGta ? 'card-neon' : 'border border-[var(--color-border)]'
                }`}
                style={{ background: 'var(--color-bg-elevated)' }}
              >
                <div
                  className="h-1"
                  style={{
                    background: isGta || isCrimson
                      ? `linear-gradient(90deg, ${accentColor}, ${secondaryColor})`
                      : accentColor,
                  }}
                />
                <div className="p-5">
                  <h3
                    className="text-sm font-semibold mb-4"
                    style={{
                      fontFamily: franchise.theme.fontDisplay,
                      color: 'var(--color-text)',
                      letterSpacing: isGta || isCrimson ? '0.08em' : undefined,
                      textTransform: isGta || isCrimson ? 'uppercase' : undefined,
                    }}
                  >
                    {t('totalArticles')}
                  </h3>
                  <div
                    className={`text-4xl font-bold ${isGta ? 'neon-title' : isCrimson ? 'text-gradient-gold' : ''}`}
                    style={{
                      color: isGta ? accentColor : isCrimson ? undefined : accentColor,
                      fontFamily: franchise.theme.fontDisplay,
                    }}
                  >
                    {articles.length}
                  </div>

                  <div className="mt-5">
                    <div
                      className="flex items-center justify-between text-xs mb-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      <span>{t('wikiProgress')}</span>
                      <span>{Math.min(Math.round((articles.length / 30) * 100), 100)}%</span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ background: 'var(--color-border)' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((articles.length / 30) * 100, 100)}%` }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: isGta || isCrimson
                            ? `linear-gradient(90deg, ${accentColor}, ${secondaryColor})`
                            : accentColor,
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="mt-4 text-xs"
                    style={{ color: 'var(--color-text-tertiary)' }}
                  >
                    {t('lastUpdate')} : {new Date(articles[0]?.updatedAt || '').toLocaleDateString(
                      locale === 'ko' ? 'ko-KR' : locale === 'en' ? 'en-US' : locale,
                      { day: 'numeric', month: 'short', year: 'numeric' }
                    )}
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div
                className={`rounded-[var(--radius-card)] p-5 ${
                  isCrimson ? 'card-medieval' : isGta ? 'card-neon' : 'border border-[var(--color-border)]'
                }`}
                style={{ background: 'var(--color-bg-subtle)' }}
              >
                <dl className="space-y-3 text-sm" style={{ fontFamily: franchise.theme.fontBody }}>
                  <div className="flex justify-between">
                    <dt style={{ color: 'var(--color-text-secondary)' }}>
                      {locale === 'ko' ? '개발사' : locale === 'en' ? 'Developer' : 'Développeur'}
                    </dt>
                    <dd className="font-medium" style={{ color: 'var(--color-text)' }}>
                      {franchise.developer}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: 'var(--color-text-secondary)' }}>
                      {locale === 'ko' ? '플랫폼' : locale === 'en' ? 'Platforms' : 'Plateformes'}
                    </dt>
                    <dd className="font-medium text-right" style={{ color: 'var(--color-text)' }}>
                      {franchise.platforms.join(', ')}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: 'var(--color-text-secondary)' }}>
                      {locale === 'ko' ? '퍼블리셔' : locale === 'en' ? 'Publisher' : 'Éditeur'}
                    </dt>
                    <dd className="font-medium text-right" style={{ color: 'var(--color-text)' }}>
                      {franchise.publisher}
                    </dd>
                  </div>
                </dl>
              </div>

              <p
                className="text-xs italic"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {t('disclaimer')}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
