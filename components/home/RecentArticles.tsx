'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { getRecentArticles } from '@/lib/articles';
import { franchises } from '@/lib/franchise-config';

// Map French article categories to wiki SPA internal routes
const CATEGORY_TO_WIKI_ROUTE: Record<string, string> = {
  personnages: '/characters',
  lieux: '/world',
  vehicules: '/world',
  armes: '/weapons',
  gameplay: '/combat',
  guides: '/guides',
  actualites: '/blog',
  trailers: '/trailers',
  regions: '/world',
  combat: '/combat',
  lore: '/lore',
  analyse: '/blog',
  creatures: '/world',
  classes: '/lore',
  traditions: '/lore',
  pouvoirs: '/combat',
  ennemis: '/characters',
};

export default function RecentArticles() {
  const t = useTranslations('recent');
  const tArticle = useTranslations('article');
  const locale = useLocale();
  const articles = getRecentArticles(6);

  // Split: first article large, rest in grid
  const [featured, ...rest] = articles;
  const featuredFranchise = franchises[featured.franchise as keyof typeof franchises];
  const featuredWikiRoute = CATEGORY_TO_WIKI_ROUTE[featured.category] || '/';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center gap-3 mb-10"
      >
        <TrendingUp className="w-5 h-5 text-[var(--color-text-tertiary)]" />
        <h2
          className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('title')}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Featured (large) article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:row-span-2"
        >
          <Link
            href={`/${locale}/${featuredFranchise.id}${featuredWikiRoute}`}
            className="group flex flex-col h-full rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline"
          >
            {/* Color header area */}
            <div
              className="h-40 sm:h-52 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${featuredFranchise.accentColor}15, ${featuredFranchise.accentColor}30, ${featuredFranchise.accentColor}10)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-6xl sm:text-8xl font-bold opacity-10"
                  style={{ fontFamily: featuredFranchise.theme.fontDisplay, color: featuredFranchise.accentColor }}
                >
                  {featuredFranchise.name[locale]?.split(' ')[0] || featuredFranchise.id}
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${featuredFranchise.accentColor}, transparent)` }}
              />
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${featuredFranchise.accentColor}12`,
                    color: featuredFranchise.accentColor,
                  }}
                >
                  {featuredFranchise.name[locale] || featuredFranchise.name.fr}
                </span>
                <span className="text-xs text-[var(--color-text-tertiary)]">
                  {new Date(featured.publishedAt).toLocaleDateString(locale === 'en' ? 'en-US' : locale, {
                    day: 'numeric', month: 'short',
                  })}
                </span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {featured.title[locale] || featured.title.fr}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] line-clamp-3 flex-1 leading-relaxed">
                {featured.excerpt[locale] || featured.excerpt.fr}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {tArticle('readTime', { minutes: featured.readTime })}
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform" style={{ color: featuredFranchise.accentColor }}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Remaining articles in a compact stack */}
        {rest.map((article, i) => {
          const franchise = franchises[article.franchise as keyof typeof franchises];
          const wikiRoute = CATEGORY_TO_WIKI_ROUTE[article.category] || '/';
          return (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/${locale}/${franchise.id}${wikiRoute}`}
                className="group flex items-start gap-4 p-4 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md no-underline"
              >
                {/* Color dot */}
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: `${franchise.accentColor}12` }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: franchise.accentColor, fontFamily: franchise.theme.fontDisplay }}
                  >
                    {franchise.name[locale]?.charAt(0) || franchise.id.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{
                        background: `${franchise.accentColor}10`,
                        color: franchise.accentColor,
                      }}
                    >
                      {franchise.name[locale] || franchise.name.fr}
                    </span>
                  </div>
                  <h3
                    className="font-semibold text-sm text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors truncate"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {article.title[locale] || article.title.fr}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)] line-clamp-1">
                    {article.excerpt[locale] || article.excerpt.fr}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-2" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
