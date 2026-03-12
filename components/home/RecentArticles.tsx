'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { getRecentArticles } from '@/lib/articles';
import { franchises } from '@/lib/franchise-config';
import Badge from '@/components/ui/Badge';

export default function RecentArticles() {
  const t = useTranslations('recent');
  const tArticle = useTranslations('article');
  const locale = useLocale();
  const articles = getRecentArticles(5);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-8"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {t('title')}
      </motion.h2>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
        {articles.map((article, i) => {
          const franchise = franchises[article.franchise];
          const catSlug = franchise.categories.find(c => c.slug.fr === article.category)?.slug[locale] || article.category;
          return (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex-shrink-0 w-72 sm:w-80 snap-start"
            >
              <Link
                href={`/${locale}/${franchise.id}/${catSlug}/${article.slug}`}
                className="group flex flex-col h-full p-5 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md no-underline"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge color={franchise.accentColor}>
                    {franchise.name[locale] || franchise.name.fr}
                  </Badge>
                </div>
                <h3
                  className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {article.title[locale] || article.title.fr}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2 flex-1">
                  {article.excerpt[locale] || article.excerpt.fr}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {tArticle('readTime', { minutes: article.readTime })}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-accent)]" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
