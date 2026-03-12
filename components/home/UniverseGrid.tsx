'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllFranchiseIds, franchises, FranchiseConfig } from '@/lib/franchise-config';
import { getArticlesByFranchise } from '@/lib/articles';

function UniverseCard({ franchise, locale, large, index }: { franchise: FranchiseConfig; locale: string; large?: boolean; index: number }) {
  const t = useTranslations('universe');
  const articleCount = getArticlesByFranchise(franchise.id).length;
  const releaseDate = new Date(franchise.releaseDate);
  const dateStr = releaseDate.toLocaleDateString(locale === 'en' ? 'en-US' : locale, { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className={large ? 'sm:col-span-2' : ''}
    >
      <Link
        href={`/${locale}/${franchise.id}`}
        className="group block rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] overflow-hidden bg-[var(--color-bg-elevated)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg no-underline"
      >
        <div
          className={`relative ${large ? 'h-48 sm:h-64' : 'h-40 sm:h-48'}`}
          style={{
            background: `linear-gradient(135deg, ${franchise.accentColor}08, ${franchise.accentColor}20, ${franchise.accentColor}08)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-6xl sm:text-8xl font-bold opacity-10"
              style={{ fontFamily: 'var(--font-display)', color: franchise.accentColor }}
            >
              {franchise.name[locale]?.split(' ')[0] || franchise.id.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="text-xl sm:text-2xl font-bold text-[var(--color-text)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {franchise.name[locale] || franchise.name.fr}
            </h3>
            <ArrowRight
              className="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0 mt-1"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {franchise.categories.slice(0, 3).map((cat) => (
              <span
                key={cat.slug.fr}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: `${franchise.accentColor}10`,
                  color: franchise.accentColor,
                }}
              >
                {cat.label[locale] || cat.label.fr}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-text-tertiary)]">
            <span>{t('articlesCount', { count: articleCount })}</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {t('releaseDate')} : {dateStr}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function UniverseGrid() {
  const t = useTranslations('universe');
  const locale = useLocale();
  const allIds = getAllFranchiseIds();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-8 sm:mb-12"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {t('title')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {allIds.map((id, i) => (
          <UniverseCard
            key={id}
            franchise={franchises[id]}
            locale={locale}
            large={i === 0}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
