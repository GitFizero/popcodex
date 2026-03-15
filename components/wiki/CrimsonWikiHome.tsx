'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, FileText, ArrowRight, Clock, Sword, Map, Shield, BookOpen, Compass, Newspaper, BarChart3 } from 'lucide-react';
import { FranchiseConfig } from '@/lib/franchise-config';
import { ArticleData, getArticlesByFranchise } from '@/lib/articles';

/* ================================================================
   CRIMSON DESERT — PYWEL CHRONICLES WIKI HOMEPAGE
   Medieval dark fantasy, fire-breathing dragon SVG, gold shimmer,
   feels like an ancient war chronicle / codex
   ================================================================ */

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  personnages: <Shield className="w-5 h-5" />,
  regions: <Map className="w-5 h-5" />,
  combat: <Sword className="w-5 h-5" />,
  lore: <BookOpen className="w-5 h-5" />,
  guides: <Compass className="w-5 h-5" />,
  actualites: <Newspaper className="w-5 h-5" />,
  analyse: <BarChart3 className="w-5 h-5" />,
};

/* Animated fire-breathing dragon SVG */
function FireDragon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dragon-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(0 40% 18%)" />
          <stop offset="100%" stopColor="hsl(0 30% 10%)" />
        </linearGradient>
        <linearGradient id="fire-gradient" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="30%" stopColor="#F97316" />
          <stop offset="60%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
        </linearGradient>
        <filter id="fire-glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="fire-glow-soft">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dragon body — stylized silhouette */}
      <g transform="translate(180, 80)">
        {/* Tail */}
        <path
          d="M80,120 Q100,140 120,130 Q140,120 150,100 Q160,80 175,90 Q185,95 180,85 Q175,70 160,75"
          fill="none" stroke="url(#dragon-body)" strokeWidth="6" strokeLinecap="round"
        />
        {/* Body */}
        <ellipse cx="60" cy="100" rx="50" ry="30" fill="url(#dragon-body)" />
        {/* Neck */}
        <path
          d="M20,85 Q0,60 -20,40 Q-30,30 -25,25"
          fill="none" stroke="url(#dragon-body)" strokeWidth="12" strokeLinecap="round"
        />
        {/* Head */}
        <path
          d="M-25,25 Q-40,15 -55,20 Q-65,25 -60,35 Q-55,42 -40,38 Q-30,35 -25,30 Z"
          fill="url(#dragon-body)"
        />
        {/* Eye */}
        <circle cx="-42" cy="28" r="2.5" fill="#DC2626">
          <animate attributeName="r" values="2.5;3;2.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="-42" cy="28" r="1" fill="#FACC15" />
        {/* Horns */}
        <path d="M-45,20 L-52,8 L-48,18" fill="hsl(0 20% 15%)" />
        <path d="M-38,18 L-40,6 L-35,16" fill="hsl(0 20% 15%)" />
        {/* Jaw (open for fire) */}
        <path
          d="M-55,32 Q-65,38 -70,35 Q-72,33 -65,30"
          fill="hsl(0 30% 12%)"
        />

        {/* Wings */}
        <g className="dragon-wing-left">
          <path
            d="M30,80 Q10,30 -10,10 Q-5,5 10,20 Q25,35 40,25 Q30,15 45,5 Q40,25 55,40 Q50,30 65,20 Q55,45 50,60 Z"
            fill="hsl(0 35% 14%)" fillOpacity="0.9" stroke="hsl(0 40% 20%)" strokeWidth="0.5"
          >
            <animateTransform attributeName="transform" type="rotate" values="0 30 80;-8 30 80;0 30 80" dur="3s" repeatCount="indefinite" />
          </path>
        </g>
        <g className="dragon-wing-right">
          <path
            d="M70,85 Q90,40 110,25 Q105,20 95,30 Q85,40 80,30 Q85,20 75,10 Q80,30 70,45 Q75,35 65,25 Q70,50 72,65 Z"
            fill="hsl(0 35% 14%)" fillOpacity="0.9" stroke="hsl(0 40% 20%)" strokeWidth="0.5"
          >
            <animateTransform attributeName="transform" type="rotate" values="0 70 85;8 70 85;0 70 85" dur="3s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Legs */}
        <path d="M35,125 L30,150 L38,148 L40,125" fill="url(#dragon-body)" />
        <path d="M75,125 L80,150 L88,148 L82,125" fill="url(#dragon-body)" />

        {/* FIRE BREATH */}
        <g filter="url(#fire-glow)">
          {/* Main fire stream */}
          <path
            d="M-65,30 Q-90,25 -120,28 Q-150,32 -170,28 Q-150,25 -120,22 Q-90,18 -65,25"
            fill="url(#fire-gradient)" opacity="0.9"
          >
            <animate attributeName="d"
              values="M-65,30 Q-90,25 -120,28 Q-150,32 -170,28 Q-150,25 -120,22 Q-90,18 -65,25;M-65,30 Q-95,22 -125,30 Q-155,28 -175,32 Q-155,22 -125,20 Q-95,25 -65,25;M-65,30 Q-90,25 -120,28 Q-150,32 -170,28 Q-150,25 -120,22 Q-90,18 -65,25"
              dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.7;0.9" dur="0.3s" repeatCount="indefinite" />
          </path>
          {/* Upper fire tongue */}
          <path
            d="M-65,26 Q-85,18 -110,15 Q-135,12 -155,18"
            fill="none" stroke="#F97316" strokeWidth="4" strokeLinecap="round" opacity="0.7"
          >
            <animate attributeName="d"
              values="M-65,26 Q-85,18 -110,15 Q-135,12 -155,18;M-65,26 Q-88,15 -115,18 Q-140,15 -160,12;M-65,26 Q-85,18 -110,15 Q-135,12 -155,18"
              dur="0.5s" repeatCount="indefinite" />
          </path>
          {/* Core (brightest) */}
          <path
            d="M-65,28 Q-80,26 -100,27 Q-110,28 -120,26"
            fill="none" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" opacity="0.9"
          >
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="0.25s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Fire ambient glow */}
        <circle cx="-100" cy="28" r="40" fill="#DC2626" opacity="0" filter="url(#fire-glow-soft)">
          <animate attributeName="opacity" values="0.06;0.12;0.06" dur="0.8s" repeatCount="indefinite" />
        </circle>

        {/* Embers / sparks */}
        {[
          [-80, 15, 0.4], [-100, 10, 0.8], [-120, 18, 1.2], [-90, 35, 0.6],
          [-130, 12, 1.0], [-110, 38, 0.3], [-140, 25, 1.5], [-95, 8, 0.9],
        ].map(([x, y, delay], i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="#FACC15">
            <animate attributeName="cy" values={`${y};${(y as number) - 20}`} dur="1.5s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="1.5s" begin={`${delay}s`} repeatCount="indefinite" />
            <animate attributeName="r" values="1.5;0.5" dur="1.5s" begin={`${delay}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
    </svg>
  );
}

/* Mountain range silhouette */
function MountainRange({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 200" className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mountain-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Far mountains */}
      <path
        d="M0,200 L0,160 L80,120 L150,140 L200,90 L260,110 L320,60 L380,100 L440,50 L480,30 L520,55 L580,80 L640,40 L680,20 L720,45 L780,70 L840,30 L880,55 L940,80 L980,100 L1040,70 L1080,90 L1120,120 L1160,140 L1200,130 L1200,200 Z"
        fill="hsl(10 50% 3%)"
        stroke="hsl(0 40% 15% / 0.3)"
        strokeWidth="0.5"
      />
      {/* Crimson sky glow above */}
      <path
        d="M0,200 L0,160 L80,120 L150,140 L200,90 L260,110 L320,60 L380,100 L440,50 L480,30 L520,55 L580,80 L640,40 L680,20 L720,45 L780,70 L840,30 L880,55 L940,80 L980,100 L1040,70 L1080,90 L1120,120 L1160,140 L1200,130 L1200,200 Z"
        fill="url(#mountain-glow)"
        transform="translate(0, -30) scale(1, 0.3)"
      />
    </svg>
  );
}

interface CrimsonWikiHomeProps {
  franchise: FranchiseConfig;
}

export default function CrimsonWikiHome({ franchise }: CrimsonWikiHomeProps) {
  const locale = useLocale();
  const t = useTranslations('franchise');
  const tUniverse = useTranslations('universe');
  const tArticle = useTranslations('article');
  const articles = getArticlesByFranchise(franchise.id);

  const articlesByCategory: Record<string, ArticleData[]> = {};
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

  const featuredArticles = articles.slice(0, 3);

  return (
    <div
      className="min-h-screen"
      style={{
        background: franchise.theme.bgGradient,
        fontFamily: franchise.theme.fontBody,
      }}
    >
      {/* === EPIC HERO — PYWEL CHRONICLES === */}
      <div className="relative overflow-hidden min-h-[90vh] flex flex-col">
        {/* Noise texture */}
        <div className="absolute inset-0 pointer-events-none bg-noise-texture" />

        {/* Warm vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, hsl(0 60% 20% / 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 30%, hsl(45 60% 40% / 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)
            `,
          }}
        />

        {/* Gold accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-1 origin-left relative z-20"
          style={{
            background: `linear-gradient(90deg, ${accentColor}, ${secondaryColor})`,
          }}
        />

        {/* Dragon — top right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="absolute top-8 right-0 z-20 hidden sm:block"
        >
          <FireDragon className="w-80 lg:w-96 opacity-70" />
        </motion.div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          {/* Chronicle badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-3 px-4 py-2 border text-xs tracking-[0.25em] uppercase"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                color: secondaryColor,
                borderColor: `${secondaryColor}30`,
                background: `${secondaryColor}06`,
              }}
            >
              <span className="w-6 h-[1px]" style={{ background: secondaryColor }} />
              {locale === 'en' ? 'THE PYWEL CHRONICLES' : locale === 'es' ? 'LAS CRÓNICAS DE PYWEL' : 'LES CHRONIQUES DE PYWEL'}
              <span className="w-6 h-[1px]" style={{ background: secondaryColor }} />
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-[0.9]"
            style={{
              fontFamily: franchise.theme.fontDisplay,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <span className="text-gradient-gold shimmer block">Crimson</span>
            <span className="text-gradient-crimson block">Desert</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 text-xl sm:text-2xl max-w-2xl leading-relaxed"
            style={{
              color: 'var(--color-text-secondary)',
              fontFamily: franchise.theme.fontBody,
              fontStyle: 'italic',
            }}
          >
            {franchise.description[locale] || franchise.description.fr}
          </motion.p>

          {/* Gold separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-3 mt-6 origin-left max-w-lg"
          >
            <div className="h-[1px] flex-1" style={{ background: `linear-gradient(90deg, ${secondaryColor}80, transparent)` }} />
            <div className="w-2 h-2 rotate-45" style={{ background: secondaryColor, boxShadow: `0 0 8px ${secondaryColor}60` }} />
            <div className="h-[1px] w-8" style={{ background: `linear-gradient(90deg, transparent, ${secondaryColor}40)` }} />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" style={{ color: secondaryColor }} />
              <span style={{ color: secondaryColor, fontFamily: franchise.theme.fontDisplay, letterSpacing: '0.1em' }}>
                {articles.length}
              </span>
              <span style={{ color: 'var(--color-text-tertiary)' }}>
                {locale === 'en' ? 'chronicles' : locale === 'es' ? 'crónicas' : 'chroniques'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: accentColor }} />
              <span style={{ color: 'var(--color-text-secondary)' }}>{releaseDate}</span>
            </div>
            <div className="flex items-center gap-2 badge-universe px-3 py-1 rounded-full">
              <span style={{ fontFamily: franchise.theme.fontDisplay, letterSpacing: '0.1em', fontSize: '0.75rem' }}>
                {franchise.developer}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mountain range at bottom */}
        <div className="relative z-10 mt-auto">
          <MountainRange className="w-full h-32 sm:h-48" />
        </div>

        {/* Giant watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
          <span
            className="block text-[14rem] sm:text-[22rem] font-bold leading-none text-gradient-gold"
            style={{
              fontFamily: franchise.theme.fontDisplay,
              opacity: 0.04,
              letterSpacing: '0.08em',
            }}
          >
            PYWEL
          </span>
        </div>
      </div>

      {/* === FEATURED CHRONICLES === */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[2px] w-8" style={{ background: `linear-gradient(90deg, ${secondaryColor}, transparent)` }} />
            <h2
              className="text-2xl sm:text-3xl font-bold text-gradient-gold"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {locale === 'en' ? 'Featured Chronicles' : locale === 'es' ? 'Crónicas Destacadas' : 'Chroniques Vedettes'}
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
                  transition={{ delay: i * 0.12 }}
                >
                  <Link
                    href={`/${locale}/${franchise.id}/${catSlug}/${article.slug}`}
                    className="group block card-medieval rounded-[var(--radius-card)] overflow-hidden no-underline"
                    style={{ background: 'var(--color-bg-elevated)' }}
                  >
                    <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${accentColor}, ${secondaryColor})` }} />
                    {/* Ornate header */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <span
                        className="text-[10px] tracking-[0.2em] uppercase"
                        style={{ color: secondaryColor, fontFamily: franchise.theme.fontDisplay }}
                      >
                        {locale === 'en' ? 'Chronicle' : locale === 'es' ? 'Crónica' : 'Chronique'} {['I', 'II', 'III'][i]}
                      </span>
                      <span className="text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
                        {article.readTime} min
                      </span>
                    </div>
                    <div className="px-5 pb-5">
                      <h3
                        className="text-lg font-bold group-hover:text-[var(--color-accent)] transition-colors"
                        style={{
                          fontFamily: franchise.theme.fontDisplay,
                          color: 'var(--color-text)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {article.title[locale] || article.title.fr}
                      </h3>
                      <p className="mt-2 text-sm line-clamp-3" style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                        {article.excerpt[locale] || article.excerpt.fr}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: secondaryColor }}>
                        <span style={{ fontFamily: franchise.theme.fontDisplay, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                          {locale === 'en' ? 'Read Chronicle' : locale === 'es' ? 'Leer Crónica' : 'Lire la chronique'}
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

      {/* === CATEGORY GRID — CODEX CHAPTERS === */}
      <section className="py-16 sm:py-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${accentColor}06 0%, transparent 60%)` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[2px] w-8" style={{ background: `linear-gradient(90deg, ${secondaryColor}, transparent)` }} />
            <h2
              className="text-2xl sm:text-3xl font-bold text-gradient-gold"
              style={{
                fontFamily: franchise.theme.fontDisplay,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {locale === 'en' ? 'Codex Chapters' : locale === 'es' ? 'Capítulos del Códice' : 'Chapitres du Codex'}
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
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={`#${catSlug}`}
                    className="group block card-medieval rounded-[var(--radius-card)] p-5 no-underline relative overflow-hidden"
                    style={{ background: 'var(--color-bg-elevated)' }}
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-[1px] opacity-30 group-hover:opacity-60 transition-opacity"
                      style={{ background: `linear-gradient(90deg, transparent, ${secondaryColor}, transparent)` }}
                    />
                    <div className="mb-3" style={{ color: secondaryColor }}>{icon}</div>
                    <h3
                      className="font-bold text-sm group-hover:text-[var(--color-accent)] transition-colors"
                      style={{
                        fontFamily: franchise.theme.fontDisplay,
                        color: 'var(--color-text)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {cat.label[locale] || cat.label.fr}
                    </h3>
                    <div className="mt-2 text-xs" style={{ color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
                      {catArticles.length} {locale === 'en' ? 'entries' : locale === 'es' ? 'entradas' : 'entrées'}
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
                  style={{ fontFamily: franchise.theme.fontDisplay, background: 'var(--color-bg-elevated)' }}
                >
                  {cat.label[locale] || cat.label.fr}
                  {catArticles.length > 0 && (
                    <span className="ml-1.5" style={{ color: 'var(--color-text-tertiary)' }}>({catArticles.length})</span>
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
                      <div className="h-[2px] w-8" style={{ background: `linear-gradient(90deg, ${secondaryColor}, transparent)` }} />
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
                            className="group flex flex-col p-5 rounded-[var(--radius-card)] card-medieval no-underline"
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
                            <p className="mt-2 text-sm line-clamp-2" style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                              {article.excerpt[locale] || article.excerpt.fr}
                            </p>
                            <div className="mt-auto pt-3 flex items-center justify-between text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
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
                <div className="card-medieval rounded-[var(--radius-card)] overflow-hidden" style={{ background: 'var(--color-bg-elevated)' }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${accentColor}, ${secondaryColor})` }} />
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
                    <div className="text-4xl font-bold text-gradient-gold" style={{ fontFamily: franchise.theme.fontDisplay }}>
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

                <div className="card-medieval rounded-[var(--radius-card)] p-5" style={{ background: 'var(--color-bg-subtle)' }}>
                  <dl className="space-y-3 text-sm" style={{ fontFamily: franchise.theme.fontBody }}>
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

                <p className="text-xs italic" style={{ color: 'var(--color-text-tertiary)' }}>{t('disclaimer')}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
