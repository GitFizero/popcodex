'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAllFranchiseIds, franchises } from '@/lib/franchise-config';
import Link from 'next/link';

/* ---------- Star field background ---------- */
function Starfield() {
  // Generate deterministic star positions via simple math (no Math.random for SSR stability)
  const stars: { x: number; y: number; r: number; delay: number; opacity: number }[] = [];
  for (let i = 0; i < 120; i++) {
    const seed = i * 7919; // prime
    stars.push({
      x: (seed * 13) % 100,
      y: (seed * 17) % 100,
      r: 0.3 + ((seed * 23) % 100) / 100 * 1.2,
      delay: ((seed * 31) % 100) / 100 * 6,
      opacity: 0.15 + ((seed * 37) % 100) / 100 * 0.7,
    });
  }
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="white"
          opacity={s.opacity}
        >
          <animate
            attributeName="opacity"
            values={`${s.opacity};${s.opacity * 0.3};${s.opacity}`}
            dur={`${3 + s.delay}s`}
            begin={`${s.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

/* ---------- Nebula blobs ---------- */
function NebulaBlobs() {
  const allIds = getAllFranchiseIds();
  const positions = [
    { left: '10%', top: '15%', size: 500 },
    { right: '5%', top: '25%', size: 450 },
    { left: '30%', bottom: '10%', size: 400 },
    { right: '25%', bottom: '20%', size: 350 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {allIds.map((id, i) => {
        const f = franchises[id];
        const pos = positions[i % positions.length];
        return (
          <motion.div
            key={id}
            className="absolute rounded-full"
            style={{
              ...pos,
              width: pos.size,
              height: pos.size,
              background: `radial-gradient(circle, ${f.accentColor}18 0%, ${f.accentColor}06 40%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 15, -15, 10, 0],
              scale: [1, 1.15, 0.9, 1.08, 1],
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}

/* ---------- Universe portals — circular orbit around center ---------- */
function UniversePortals() {
  const locale = useLocale();
  const allIds = getAllFranchiseIds();
  const count = allIds.length;

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square mt-8 hidden md:block">
      {/* Orbit ring */}
      <div className="absolute inset-[15%] rounded-full border border-white/[0.04]" />
      <div className="absolute inset-[30%] rounded-full border border-white/[0.03]" />

      {allIds.map((id, i) => {
        const f = franchises[id];
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        const radius = 38; // % from center
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        const secondary = f.theme.accentSecondary || f.accentColor;

        return (
          <motion.div
            key={id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.6, type: 'spring' }}
          >
            <Link
              href={`/${locale}/${id}`}
              className="group relative flex flex-col items-center gap-3 no-underline"
            >
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${f.accentColor}30, transparent 70%)` }}
              />

              {/* Portal sphere */}
              <div
                className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${f.accentColor}40, ${secondary}15 60%, transparent 100%)`,
                  boxShadow: `0 0 30px ${f.accentColor}20, inset 0 0 20px ${f.accentColor}10`,
                  border: `1.5px solid ${f.accentColor}30`,
                }}
              >
                <span
                  className="text-lg lg:text-xl font-bold"
                  style={{
                    fontFamily: f.theme.fontDisplay,
                    color: f.accentColor,
                    textShadow: `0 0 20px ${f.accentColor}60`,
                  }}
                >
                  {id === 'gta-vi' ? 'VI' : id === 'crimson-desert' ? 'CD' : id === 'wolverine' ? 'X' : 'F'}
                </span>
              </div>

              {/* Label */}
              <span
                className="text-[11px] font-medium tracking-wide text-white/50 group-hover:text-white/90 transition-colors whitespace-nowrap"
                style={{ fontFamily: f.theme.fontDisplay }}
              >
                {f.name[locale] || f.name.fr}
              </span>
            </Link>
          </motion.div>
        );
      })}

      {/* Center core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-5 h-5 rounded-full bg-white/20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ boxShadow: '0 0 40px rgba(255,255,255,0.15)' }}
        />
      </div>
    </div>
  );
}

/* ---------- Mobile universe pills ---------- */
function MobileUniversePills() {
  const locale = useLocale();
  const allIds = getAllFranchiseIds();

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-10 md:hidden">
      {allIds.map((id, i) => {
        const f = franchises[id];
        return (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          >
            <Link
              href={`/${locale}/${id}`}
              className="group inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-200 no-underline hover:-translate-y-0.5 border backdrop-blur-sm"
              style={{
                color: f.accentColor,
                background: `${f.accentColor}08`,
                borderColor: `${f.accentColor}20`,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: f.accentColor }} />
              {f.name[locale] || f.name.fr}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ========== MAIN HERO ========== */
export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const allFranchises = getAllFranchiseIds();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Deep space background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, #0d0d1a 0%, #060610 50%, #020206 100%)',
        }}
      />

      <Starfield />
      <NebulaBlobs />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Title with portal logo as the O */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight flex items-center justify-center"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', lineHeight: 0.95 }}
        >
          <span className="text-white">Pop</span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #818CF8, #C084FC, #F472B6, #FB923C)',
            }}
          >
            C
          </span>
          {/* Portal logo as the "O" */}
          <motion.span
            className="inline-flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
          >
            <svg
              viewBox="0 0 80 80"
              className="w-[0.7em] h-[0.7em]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="40" cy="40" r="32" stroke="#A78BFA" strokeWidth="2" opacity="0.3" />
              <circle cx="40" cy="40" r="22" stroke="#C084FC" strokeWidth="2" opacity="0.5" />
              <circle cx="40" cy="40" r="12" stroke="#F472B6" strokeWidth="2.5" opacity="0.8" />
              <circle cx="40" cy="40" r="4" fill="#F472B6" />
              <circle cx="40" cy="12" r="3" fill="#C084FC" opacity="0.8" />
            </svg>
          </motion.span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #C084FC, #F472B6, #FB923C)',
            }}
          >
            dex
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg sm:text-xl text-white/50 max-w-lg mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* Badge — below subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/60">
            {allFranchises.length} {locale === 'en' ? 'universes to explore' : locale === 'es' ? 'universos por explorar' : locale === 'pt' ? 'universos para explorar' : 'univers à explorer'}
          </span>
        </motion.div>

        {/* Universe portals (desktop) */}
        <UniversePortals />

        {/* Mobile pills */}
        <MobileUniversePills />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
