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

  const isGta = franchise.id === 'gta-vi';
  const isCrimson = franchise.id === 'crimson-desert';
  const secondaryColor = franchise.theme.accentSecondary || franchise.accentColor;

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
        className="group block rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] overflow-hidden bg-[var(--color-bg-elevated)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg no-underline"
        style={{
          boxShadow: isGta
            ? `0 0 0 1px hsl(189 100% 50% / 0.06)`
            : isCrimson
              ? `0 8px 32px rgba(0,0,0,0.2)`
              : undefined,
        }}
      >
        {/* Visual preview area — teases the universe aesthetic */}
        <div
          className={`relative ${large ? 'h-48 sm:h-64' : 'h-40 sm:h-48'} overflow-hidden`}
          style={{
            background: isGta
              ? 'linear-gradient(180deg, hsl(220 67% 3%), hsl(216 56% 6%))'
              : isCrimson
                ? 'linear-gradient(135deg, hsl(10 50% 3%), hsl(20 33% 6%))'
                : `linear-gradient(135deg, ${franchise.accentColor}08, ${franchise.accentColor}20, ${franchise.accentColor}08)`,
          }}
        >
          {/* GTA: neon grid + scanlines */}
          {isGta && (
            <>
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'linear-gradient(hsl(189 100% 50% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(189 100% 50% / 0.06) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(206 100% 95% / 0.02) 2px, hsl(206 100% 95% / 0.02) 4px)',
                }}
              />
            </>
          )}

          {/* Crimson Desert: noise + warm vignette */}
          {isCrimson && (
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
              }}
            />
          )}

          {/* Watermark text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`font-bold ${isGta ? 'text-7xl sm:text-9xl' : 'text-6xl sm:text-8xl'}`}
              style={{
                fontFamily: franchise.theme.fontDisplay,
                color: isGta ? '#FF1493' : isCrimson ? '#D4A946' : franchise.accentColor,
                opacity: isGta ? 0.12 : isCrimson ? 0.08 : 0.1,
                letterSpacing: isGta ? '0.06em' : isCrimson ? '0.1em' : undefined,
                textTransform: isGta || isCrimson ? 'uppercase' : undefined,
                textShadow: isGta
                  ? '0 0 40px hsl(330 100% 56% / 0.3)'
                  : undefined,
              }}
            >
              {isGta ? 'VI' : isCrimson ? 'PYWEL' : (franchise.name[locale]?.split(' ')[0] || franchise.id.toUpperCase())}
            </span>
          </div>

          {/* Accent bar at bottom of preview */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background: isGta || isCrimson
                ? `linear-gradient(90deg, ${franchise.accentColor}, ${secondaryColor})`
                : franchise.accentColor,
              boxShadow: isGta ? `0 0 10px ${franchise.accentColor}60` : undefined,
            }}
          />
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="text-xl sm:text-2xl font-bold text-[var(--color-text)]"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                letterSpacing: isGta ? '0.03em' : isCrimson ? '0.06em' : undefined,
                textTransform: isGta || isCrimson ? 'uppercase' : undefined,
              }}
            >
              {franchise.name[locale] || franchise.name.fr}
            </h3>
            <ArrowRight
              className="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:translate-x-0.5 flex-shrink-0 mt-1 transition-all duration-200"
              style={{
                color: isGta ? secondaryColor : undefined,
              }}
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
                  fontFamily: franchise.theme.fontDisplay,
                  letterSpacing: isGta || isCrimson ? '0.04em' : undefined,
                  textTransform: isGta || isCrimson ? 'uppercase' : undefined,
                  fontSize: isGta || isCrimson ? '0.65rem' : undefined,
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
