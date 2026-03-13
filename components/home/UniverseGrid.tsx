'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { getAllFranchiseIds, franchises, FranchiseConfig } from '@/lib/franchise-config';
import { getArticlesByFranchise } from '@/lib/articles';

/* Image mapping per franchise */
const universeImages: Record<string, string> = {
  'gta-vi': '/images/gta-vi/jason-lucia-hero-landscape.jpg',
  'crimson-desert': '/images/crimson-desert/pywel-panorama.jpg',
  fable: '/images/fable/hero-desktop.jpg',
  wolverine: '/images/wolverine/hero-landscape.jpg',
};

function UniverseCard({
  franchise,
  locale,
  index,
  featured,
}: {
  franchise: FranchiseConfig;
  locale: string;
  index: number;
  featured?: boolean;
}) {
  const t = useTranslations('universe');
  const articleCount = getArticlesByFranchise(franchise.id).length;
  const releaseDate = new Date(franchise.releaseDate);
  const dateStr = releaseDate.toLocaleDateString(
    locale === 'en' ? 'en-US' : locale,
    { day: 'numeric', month: 'long', year: 'numeric' }
  );
  const secondaryColor = franchise.theme.accentSecondary || franchise.accentColor;
  const imageSrc = universeImages[franchise.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
      className={featured ? 'sm:col-span-2 lg:col-span-2' : ''}
    >
      <Link
        href={`/${locale}/${franchise.id}`}
        className="group block relative rounded-2xl overflow-hidden no-underline transition-all duration-500 hover:-translate-y-2"
        style={{
          boxShadow: `0 4px 30px rgba(0,0,0,0.3), 0 0 0 1px ${franchise.accentColor}10`,
        }}
      >
        {/* Image background */}
        <div className={`relative ${featured ? 'h-72 sm:h-96' : 'h-64 sm:h-80'} overflow-hidden`}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={franchise.name[locale] || franchise.name.fr}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${franchise.accentColor}20, ${secondaryColor}15, ${franchise.accentColor}08)`,
              }}
            />
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)`,
            }}
          />

          {/* Accent line — top */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] origin-left"
            style={{
              background: `linear-gradient(90deg, ${franchise.accentColor}, ${secondaryColor})`,
              boxShadow: `0 0 15px ${franchise.accentColor}60`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.12 + 0.3 }}
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 80%, ${franchise.accentColor}15 0%, transparent 60%)`,
            }}
          />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5" style={{ color: franchise.accentColor }} />
              <span
                className="text-[10px] font-semibold tracking-[0.15em] uppercase"
                style={{ color: franchise.accentColor }}
              >
                {franchise.mediaType === 'games'
                  ? ({ fr: 'Jeu', en: 'Game', es: 'Juego', pt: 'Jogo', it: 'Gioco', ko: '게임' }[locale] || 'Game')
                  : franchise.mediaType}
              </span>
            </div>

            <h3
              className={`font-bold text-white ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}
              style={{
                fontFamily: franchise.theme.fontDisplay,
                letterSpacing: '0.04em',
                textShadow: `0 2px 20px rgba(0,0,0,0.5)`,
              }}
            >
              {franchise.name[locale] || franchise.name.fr}
            </h3>

            <p className="mt-2 text-sm text-white/70 line-clamp-2 max-w-md leading-relaxed">
              {franchise.description[locale] || franchise.description.fr}
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
              <span>{t('articlesCount', { count: articleCount })}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {dateStr}
              </span>
            </div>

            {/* CTA arrow */}
            <div
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
              style={{ color: franchise.accentColor }}
            >
              <span className="tracking-wide">
                {{ fr: 'Explorer', en: 'Explore', es: 'Explorar', pt: 'Explorar', it: 'Esplora', ko: '탐험하기' }[locale] || 'Explore'}
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
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
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-14 sm:mb-20"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-12 h-[2px] mx-auto mb-6 origin-center"
          style={{
            background: 'linear-gradient(90deg, #FF1493, #a855f7, #00FFFF)',
          }}
        />
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
        >
          {t('title')}
        </h2>
        <p className="mt-4 text-[var(--color-text-secondary)] max-w-lg mx-auto">
          {{ fr: 'Plongez dans les wikis les plus complets sur les jeux qui comptent.', en: 'Dive into the most complete wikis for the games that matter.', es: 'Sumérgete en los wikis más completos de los juegos que importan.', pt: 'Mergulhe nos wikis mais completos dos jogos que importam.', it: 'Immergiti nei wiki più completi sui giochi che contano.', ko: '중요한 게임의 가장 완벽한 위키에 빠져보세요.' }[locale] || 'Dive into the most complete wikis for the games that matter.'}
        </p>
      </motion.div>

      {/* Grid layout — first card featured (large), rest standard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allIds.map((id, i) => (
          <UniverseCard
            key={id}
            franchise={franchises[id]}
            locale={locale}
            index={i}
            featured={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
