'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, FileText, ArrowRight, Clock, Shield, MapPin, Car, Crosshair, Gamepad2, Newspaper, Play } from 'lucide-react';
import { FranchiseConfig } from '@/lib/franchise-config';
import { ArticleMeta, getArticlesMetaByFranchise } from '@/lib/articles';

/* ================================================================
   GTA VI — VICE CITY WIKI HOMEPAGE
   Neon cyberpunk aesthetic, police siren animation, neon grid,
   feels like a standalone Vice City crime database
   ================================================================ */

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  personnages: <Shield className="w-5 h-5" />,
  lieux: <MapPin className="w-5 h-5" />,
  vehicules: <Car className="w-5 h-5" />,
  armes: <Crosshair className="w-5 h-5" />,
  gameplay: <Gamepad2 className="w-5 h-5" />,
  guides: <FileText className="w-5 h-5" />,
  actualites: <Newspaper className="w-5 h-5" />,
  trailers: <Play className="w-5 h-5" />,
};

/* Animated police siren / gyrophare SVG */
function PoliceSiren({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Siren bar body */}
      <rect x="30" y="30" width="140" height="24" rx="12" fill="hsl(220 25% 12%)" stroke="hsl(220 15% 25%)" strokeWidth="1" />
      <rect x="32" y="32" width="136" height="20" rx="10" fill="hsl(220 20% 8%)" />

      {/* Red light (left) */}
      <g className="siren-red">
        <circle cx="60" cy="42" r="10" fill="#DC2626" />
        <circle cx="60" cy="42" r="10" fill="#DC2626" opacity="0.6">
          <animate attributeName="r" values="10;18;10" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="42" r="6" fill="#FF4444" />
        <circle cx="60" cy="42" r="3" fill="#FFFFFF" opacity="0.8" />
      </g>

      {/* Blue light (right) */}
      <g className="siren-blue">
        <circle cx="140" cy="42" r="10" fill="#2563EB" />
        <circle cx="140" cy="42" r="10" fill="#2563EB" opacity="0.6">
          <animate attributeName="r" values="10;18;10" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="42" r="6" fill="#3B82F6" />
        <circle cx="140" cy="42" r="3" fill="#FFFFFF" opacity="0.8" />
      </g>

      {/* Center LED strip */}
      <rect x="85" y="38" width="30" height="8" rx="4" fill="hsl(220 20% 6%)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={90 + i * 6} cy="42" r="2" fill="#FFF" opacity="0.3">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="0.3s" begin={`${i * 0.06}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Light beam sweeps */}
      <polygon points="60,42 10,0 30,0" fill="#DC2626" opacity="0">
        <animate attributeName="opacity" values="0;0.08;0" dur="0.8s" repeatCount="indefinite" />
      </polygon>
      <polygon points="140,42 170,0 190,0" fill="#2563EB" opacity="0">
        <animate attributeName="opacity" values="0;0.08;0" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
      </polygon>
    </svg>
  );
}

/* Vice City skyline silhouette */
function ViceCitySkyline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 200" className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyline-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF1493" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Buildings silhouette */}
      <path
        d="M0,200 L0,180 L40,180 L40,140 L60,140 L60,120 L80,120 L80,140 L100,140 L100,100 L120,100 L120,80 L140,80 L140,60 L150,60 L150,80 L170,80 L170,100 L190,100 L190,120 L220,120 L220,90 L240,90 L240,70 L260,70 L260,50 L280,50 L280,40 L300,40 L300,50 L320,50 L320,80 L350,80 L350,110 L370,110 L370,90 L390,90 L390,60 L410,60 L410,40 L420,30 L430,40 L430,60 L450,60 L450,80 L470,80 L470,100 L500,100 L500,130 L530,130 L530,110 L550,110 L550,80 L570,80 L570,60 L590,60 L590,45 L600,35 L610,45 L610,60 L630,60 L630,80 L660,80 L660,100 L680,100 L680,70 L700,70 L700,50 L720,50 L720,35 L730,25 L740,35 L740,50 L760,50 L760,70 L780,70 L780,90 L810,90 L810,110 L840,110 L840,130 L870,130 L870,100 L890,100 L890,80 L910,80 L910,60 L930,60 L930,50 L950,50 L950,70 L970,70 L970,90 L1000,90 L1000,120 L1030,120 L1030,100 L1050,100 L1050,130 L1080,130 L1080,150 L1120,150 L1120,130 L1150,130 L1150,160 L1180,160 L1180,180 L1200,180 L1200,200 Z"
        fill="hsl(220 67% 4%)"
        stroke="hsl(189 100% 50% / 0.1)"
        strokeWidth="0.5"
      />
      {/* Glow above skyline */}
      <path
        d="M0,200 L0,180 L40,180 L40,140 L60,140 L60,120 L80,120 L80,140 L100,140 L100,100 L120,100 L120,80 L140,80 L140,60 L150,60 L150,80 L170,80 L170,100 L190,100 L190,120 L220,120 L220,90 L240,90 L240,70 L260,70 L260,50 L280,50 L280,40 L300,40 L300,50 L320,50 L320,80 L350,80 L350,110 L370,110 L370,90 L390,90 L390,60 L410,60 L410,40 L420,30 L430,40 L430,60 L450,60 L450,80 L470,80 L470,100 L500,100 L500,130 L530,130 L530,110 L550,110 L550,80 L570,80 L570,60 L590,60 L590,45 L600,35 L610,45 L610,60 L630,60 L630,80 L660,80 L660,100 L680,100 L680,70 L700,70 L700,50 L720,50 L720,35 L730,25 L740,35 L740,50 L760,50 L760,70 L780,70 L780,90 L810,90 L810,110 L840,110 L840,130 L870,130 L870,100 L890,100 L890,80 L910,80 L910,60 L930,60 L930,50 L950,50 L950,70 L970,70 L970,90 L1000,90 L1000,120 L1030,120 L1030,100 L1050,100 L1050,130 L1080,130 L1080,150 L1120,150 L1120,130 L1150,130 L1150,160 L1180,160 L1180,180 L1200,180 L1200,200 Z"
        fill="url(#skyline-glow)"
        transform="translate(0, -20) scale(1, 0.3)"
      />
      {/* Window lights (small rectangles scattered) */}
      {[
        [145, 65], [150, 72], [285, 45], [290, 52], [415, 45], [420, 52],
        [595, 50], [600, 58], [725, 40], [730, 48], [735, 55],
        [555, 85], [560, 92], [895, 65], [900, 72], [935, 55], [940, 62],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="3" height="4" fill="#FF1493" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur={`${2 + (i % 3)}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

interface GtaWikiHomeProps {
  franchise: FranchiseConfig;
}

export default function GtaWikiHome({ franchise }: GtaWikiHomeProps) {
  const locale = useLocale();
  const t = useTranslations('franchise');
  const tUniverse = useTranslations('universe');
  const tArticle = useTranslations('article');
  const articles = getArticlesMetaByFranchise(franchise.id);

  const articlesByCategory: Record<string, ArticleMeta[]> = {};
  articles.forEach(article => {
    if (!articlesByCategory[article.category]) {
      articlesByCategory[article.category] = [];
    }
    articlesByCategory[article.category].push(article);
  });

  const accentColor = franchise.accentColor;
  const secondaryColor = franchise.theme.accentSecondary || accentColor;
  const releaseDate = new Date(franchise.releaseDate).toLocaleDateString(
    locale === 'ko' ? 'ko-KR' : locale === 'en' ? 'en-US' : locale,
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  // Featured articles (first 3)
  const featuredArticles = articles.slice(0, 3);

  return (
    <div
      className="min-h-screen"
      style={{
        background: franchise.theme.bgGradient,
        fontFamily: franchise.theme.fontBody,
      }}
    >
      {/* === IMMERSIVE HERO === */}
      <div className="relative overflow-hidden min-h-[90vh] flex flex-col">
        {/* Neon grid background */}
        <div
          className="absolute inset-0 bg-universe-grid"
          style={{ backgroundSize: '60px 60px' }}
        />

        {/* Scanlines */}
        <div className="absolute inset-0 scanlines pointer-events-none" />

        {/* Radial glow centers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, hsl(330 100% 56% / 0.06) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, hsl(189 100% 50% / 0.04) 0%, transparent 50%)
            `,
          }}
        />

        {/* Top accent bar with siren animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-1 origin-left relative z-20"
          style={{
            background: `linear-gradient(90deg, #DC2626, ${accentColor}, #2563EB, ${secondaryColor})`,
            boxShadow: '0 0 20px #DC262680, 0 0 20px #2563EB80',
          }}
        />

        {/* Siren */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-6 right-8 z-30 hidden sm:block"
        >
          <PoliceSiren className="w-48 opacity-80" />
        </motion.div>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          {/* "WANTED" style badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 border text-xs font-bold tracking-[0.2em] uppercase"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                color: secondaryColor,
                borderColor: `${secondaryColor}40`,
                background: `${secondaryColor}08`,
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: secondaryColor }} />
              {locale === 'en' ? 'VICE CITY DATABASE' : locale === 'es' ? 'BASE DE DATOS VICE CITY' : 'BASE DE DONNÉES VICE CITY'}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="neon-title neon-flicker text-6xl sm:text-7xl lg:text-9xl font-bold"
            style={{
              fontFamily: franchise.theme.fontDisplay,
              color: accentColor,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            GTA VI
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-xl sm:text-2xl max-w-2xl font-light"
            style={{
              color: 'var(--color-text-secondary)',
              fontFamily: franchise.theme.fontBody,
            }}
          >
            {franchise.description[locale] || franchise.description.fr}
          </motion.p>

          {/* Neon line separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[1px] max-w-lg mt-6 origin-left"
            style={{
              background: `linear-gradient(90deg, ${secondaryColor}, ${accentColor}60, transparent)`,
              boxShadow: `0 0 10px ${secondaryColor}40`,
            }}
          />

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" style={{ color: secondaryColor }} />
              <span style={{ color: secondaryColor, fontFamily: franchise.theme.fontDisplay, letterSpacing: '0.08em' }}>
                {articles.length}
              </span>
              <span style={{ color: 'var(--color-text-tertiary)' }}>{tUniverse('articlesCount', { count: articles.length }).replace(String(articles.length), '').trim()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: accentColor }} />
              <span style={{ color: 'var(--color-text-secondary)' }}>{releaseDate}</span>
            </div>
            <div className="flex items-center gap-2 badge-universe px-3 py-1 rounded-full">
              <span style={{ fontFamily: franchise.theme.fontDisplay, letterSpacing: '0.08em', fontSize: '0.75rem' }}>
                {franchise.developer}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Skyline at bottom */}
        <div className="relative z-10 mt-auto">
          <ViceCitySkyline className="w-full h-32 sm:h-48" />
        </div>

        {/* Giant watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
          <span
            className="block text-[16rem] sm:text-[24rem] font-bold leading-none neon-title-alt"
            style={{
              fontFamily: franchise.theme.fontDisplay,
              opacity: 0.04,
              letterSpacing: '0.05em',
            }}
          >
            VI
          </span>
        </div>
      </div>

      {/* === FEATURED ARTICLES — "MOST WANTED" STYLE === */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-1 h-8 rounded-full" style={{ background: `linear-gradient(180deg, ${accentColor}, ${secondaryColor})` }} />
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                color: 'var(--color-text)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {locale === 'en' ? 'Featured Intel' : locale === 'es' ? 'Intel Destacado' : 'Dossiers Vedettes'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredArticles.map((article, i) => {
              const catSlug = franchise.categories.find(c => c.slug.fr === article.category)?.slug[locale] || article.category;
              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/${locale}/${franchise.id}/${catSlug}/${article.slug}`}
                    className="group block card-neon rounded-[var(--radius-card)] overflow-hidden no-underline"
                    style={{ background: 'var(--color-bg-elevated)' }}
                  >
                    {/* Top accent */}
                    <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${accentColor}, ${secondaryColor})` }} />
                    {/* Decorative header with "file number" aesthetic */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <span
                        className="text-[10px] font-mono tracking-widest"
                        style={{ color: secondaryColor }}
                      >
                        FILE #{String(i + 1).padStart(3, '0')}
                      </span>
                      <span
                        className="text-[10px] font-mono"
                        style={{ color: 'var(--color-text-tertiary)' }}
                      >
                        {article.readTime} MIN
                      </span>
                    </div>
                    <div className="px-5 pb-5">
                      <h3
                        className="text-lg font-bold group-hover:text-[var(--color-accent)] transition-colors"
                        style={{
                          fontFamily: franchise.theme.fontDisplay,
                          color: 'var(--color-text)',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {article.title[locale] || article.title.fr}
                      </h3>
                      <p
                        className="mt-2 text-sm line-clamp-3"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {article.excerpt[locale] || article.excerpt.fr}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: secondaryColor }}>
                        <span style={{ fontFamily: franchise.theme.fontDisplay, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          {locale === 'en' ? 'Read Intel' : locale === 'es' ? 'Leer Intel' : 'Lire le dossier'}
                        </span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === CATEGORY GRID — DEPARTMENT STYLE === */}
      <section className="py-16 sm:py-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${accentColor}08 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-1 h-8 rounded-full" style={{ background: `linear-gradient(180deg, ${secondaryColor}, ${accentColor})` }} />
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                color: 'var(--color-text)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {locale === 'en' ? 'Explore Categories' : locale === 'es' ? 'Explorar Categorías' : 'Explorer les Catégories'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {franchise.categories.map((cat, i) => {
              const catArticles = articlesByCategory[cat.slug.fr] || [];
              const catSlug = cat.slug[locale] || cat.slug.fr;
              const icon = CATEGORY_ICONS[cat.slug.fr];
              return (
                <motion.div
                  key={cat.slug.fr}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={`#${catSlug}`}
                    className="group block card-neon rounded-[var(--radius-card)] p-5 no-underline relative overflow-hidden"
                    style={{ background: 'var(--color-bg-elevated)' }}
                  >
                    {/* Corner accent */}
                    <div
                      className="absolute top-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-30 transition-opacity"
                      style={{
                        background: `radial-gradient(circle at 100% 0%, ${accentColor}, transparent 70%)`,
                      }}
                    />
                    <div className="mb-3" style={{ color: secondaryColor }}>{icon}</div>
                    <h3
                      className="font-bold text-sm group-hover:text-[var(--color-accent)] transition-colors"
                      style={{
                        fontFamily: franchise.theme.fontDisplay,
                        color: 'var(--color-text)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {cat.label[locale] || cat.label.fr}
                    </h3>
                    <div
                      className="mt-2 text-xs font-mono"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    >
                      {catArticles.length} {catArticles.length > 1 ? 'files' : 'file'}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === ALL ARTICLES BY CATEGORY === */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category nav */}
          <nav
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
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 mt-4">
            {/* Articles */}
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
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-1 h-6 rounded-full"
                        style={{ background: `linear-gradient(180deg, ${accentColor}, ${secondaryColor})` }}
                      />
                      <h2
                        className="text-xl font-bold"
                        style={{
                          fontFamily: franchise.theme.fontDisplay,
                          color: 'var(--color-text)',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {cat.label[locale] || cat.label.fr}
                      </h2>
                    </div>

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
                            className="group flex flex-col p-5 rounded-[var(--radius-card)] card-neon no-underline"
                            style={{ background: 'var(--color-bg-elevated)' }}
                          >
                            <h3
                              className="font-semibold group-hover:text-[var(--color-accent)] transition-colors"
                              style={{
                                fontFamily: franchise.theme.fontDisplay,
                                color: 'var(--color-text)',
                                letterSpacing: '0.03em',
                              }}
                            >
                              {article.title[locale] || article.title.fr}
                            </h3>
                            <p
                              className="mt-2 text-sm line-clamp-2"
                              style={{ color: 'var(--color-text-secondary)' }}
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
                                style={{ color: secondaryColor }}
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
                {/* Stats */}
                <div className="card-neon rounded-[var(--radius-card)] overflow-hidden" style={{ background: 'var(--color-bg-elevated)' }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg, #DC2626, ${accentColor}, #2563EB, ${secondaryColor})` }} />
                  <div className="p-5">
                    <h3
                      className="text-sm font-semibold mb-4"
                      style={{
                        fontFamily: franchise.theme.fontDisplay,
                        color: 'var(--color-text)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('totalArticles')}
                    </h3>
                    <div className="text-4xl font-bold neon-title" style={{ color: accentColor, fontFamily: franchise.theme.fontDisplay }}>
                      {articles.length}
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center justify-between text-xs mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        <span>{t('wikiProgress')}</span>
                        <span>{Math.min(Math.round((articles.length / 30) * 100), 100)}%</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--color-border)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min((articles.length / 30) * 100, 100)}%` }}
                          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${accentColor}, ${secondaryColor})` }}
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                      {t('lastUpdate')} : {new Date(articles[0]?.updatedAt || '').toLocaleDateString(
                        locale === 'ko' ? 'ko-KR' : locale === 'en' ? 'en-US' : locale,
                        { day: 'numeric', month: 'short', year: 'numeric' }
                      )}
                    </div>
                  </div>
                </div>

                {/* Info card */}
                <div className="card-neon rounded-[var(--radius-card)] p-5" style={{ background: 'var(--color-bg-subtle)' }}>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt style={{ color: 'var(--color-text-secondary)' }}>
                        {locale === 'ko' ? '개발사' : locale === 'en' ? 'Developer' : 'Développeur'}
                      </dt>
                      <dd className="font-medium" style={{ color: 'var(--color-text)' }}>{franchise.developer}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt style={{ color: 'var(--color-text-secondary)' }}>
                        {locale === 'ko' ? '플랫폼' : locale === 'en' ? 'Platforms' : 'Plateformes'}
                      </dt>
                      <dd className="font-medium text-right" style={{ color: 'var(--color-text)' }}>{franchise.platforms.join(', ')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt style={{ color: 'var(--color-text-secondary)' }}>
                        {locale === 'ko' ? '퍼블리셔' : locale === 'en' ? 'Publisher' : 'Éditeur'}
                      </dt>
                      <dd className="font-medium text-right" style={{ color: 'var(--color-text)' }}>{franchise.publisher}</dd>
                    </div>
                  </dl>
                </div>

                <p className="text-xs italic" style={{ color: 'var(--color-text-tertiary)' }}>
                  {t('disclaimer')}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
