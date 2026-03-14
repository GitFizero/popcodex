'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllFranchiseIds, franchises, FranchiseConfig } from '@/lib/franchise-config';
import { getArticlesByFranchise } from '@/lib/articles';

function UniverseCard({ franchise, locale, index }: { franchise: FranchiseConfig; locale: string; index: number }) {
  const t = useTranslations('universe');
  const articleCount = getArticlesByFranchise(franchise.id).length;
  const releaseDate = new Date(franchise.releaseDate);
  const dateStr = releaseDate.toLocaleDateString(locale === 'en' ? 'en-US' : locale, { day: 'numeric', month: 'long', year: 'numeric' });
  const secondary = franchise.theme.accentSecondary || franchise.accentColor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
    >
      <Link
        href={`/${locale}/${franchise.id}`}
        className="group block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl no-underline relative"
        style={{
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
        }}
      >
        {/* Visual preview — full-width cinematic banner */}
        <div className="relative h-52 sm:h-64 overflow-hidden">
          {/* Cover image or fallback gradient */}
          {franchise.coverImage ? (
            <img
              src={franchise.coverImage}
              alt={franchise.name[locale] || franchise.name.fr}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${franchise.accentColor}10, ${secondary}08 50%, ${franchise.accentColor}05 100%)`,
                }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 40%, ${franchise.accentColor}15 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${secondary}10 0%, transparent 40%)`,
                }}
              />
            </>
          )}

          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: franchise.coverImage
                ? `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)`
                : 'none',
            }}
          />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <span
              className="font-bold text-8xl sm:text-9xl transition-transform duration-700 group-hover:scale-110"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                color: franchise.coverImage ? 'white' : franchise.accentColor,
                opacity: franchise.coverImage ? 0.15 : 0.07,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {franchise.name[locale]?.split(' ')[0] || franchise.id.toUpperCase()}
            </span>
          </div>

          {/* Accent glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at 50% 80%, ${franchise.accentColor}15, transparent 60%)`,
            }}
          />

          {/* Bottom accent line with glow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${franchise.accentColor}, ${secondary}, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, ${franchise.accentColor}15, transparent)`,
            }}
          />
        </div>

        {/* Info area */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="text-xl sm:text-2xl font-bold text-[var(--color-text)] group-hover:text-[color:var(--accent)] transition-colors"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                '--accent': franchise.accentColor,
              } as React.CSSProperties}
            >
              {franchise.name[locale] || franchise.name.fr}
            </h3>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `${franchise.accentColor}10`,
                border: `1px solid ${franchise.accentColor}20`,
              }}
            >
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ color: franchise.accentColor }}
              />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {franchise.categories.slice(0, 4).map((cat) => (
              <span
                key={cat.slug.fr}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: `${franchise.accentColor}08`,
                  color: franchise.accentColor,
                  border: `1px solid ${franchise.accentColor}12`,
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
              {dateStr}
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-10 sm:mb-14"
      >
        <h2
          className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('title')}
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)] max-w-md">
          {locale === 'fr' ? 'Choisissez un univers et plongez dans son encyclopédie.' : locale === 'es' ? 'Elige un universo y sumérgete en su enciclopedia.' : 'Choose a universe and dive into its encyclopedia.'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {allIds.map((id, i) => (
          <UniverseCard
            key={id}
            franchise={franchises[id]}
            locale={locale}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
