'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { getAllFranchiseIds, franchises } from '@/lib/franchise-config';

/* ── Animated starfield background ── */
function Starfield() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ── Nebula-like color blobs ── */
function NebulaGlow() {
  const allIds = getAllFranchiseIds();
  const blobs = allIds.map((id, i) => {
    const f = franchises[id];
    const positions = [
      { left: '10%', top: '15%' },
      { right: '15%', top: '25%' },
      { left: '20%', bottom: '20%' },
      { right: '10%', bottom: '30%' },
    ];
    return { id, color: f.accentColor, position: positions[i % 4], index: i };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            ...blob.position,
            background: `radial-gradient(circle, ${blob.color}15 0%, ${blob.color}05 40%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -15, 10, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 15 + blob.index * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Central galaxy glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(100,100,255,0.06) 0%, rgba(150,50,255,0.03) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

/* ── Orbital ring decoration ── */
function OrbitalRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-white/[0.03]"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full border border-white/[0.04]"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        style={{ borderStyle: 'dashed' }}
      />
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const allFranchises = getAllFranchiseIds();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-[#060612]">
      {/* Deep space background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #0d0d2b 0%, #060612 50%, #020208 100%)',
        }}
      />

      <Starfield />
      <NebulaGlow />
      <OrbitalRing />

      {/* Grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-white/60 tracking-wide">
            {allFranchises.length} {locale === 'en' ? 'universes to explore' : locale === 'es' ? 'universos por explorar' : 'univers à explorer'}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
        >
          Pop
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${franchises['gta-vi'].accentColor}, #a855f7, ${franchises['crimson-desert'].accentColor}, ${franchises['wolverine'].accentColor})`,
              backgroundSize: '300% 100%',
            }}
          >
            Codex
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* Universe constellation dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 sm:gap-8"
        >
          {allFranchises.map((id, i) => {
            const f = franchises[id];
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.12, type: 'spring', stiffness: 200 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <motion.div
                  className="w-3 h-3 rounded-full relative"
                  style={{ background: f.accentColor }}
                  whileHover={{ scale: 1.8 }}
                  animate={{
                    boxShadow: [
                      `0 0 8px ${f.accentColor}40`,
                      `0 0 20px ${f.accentColor}60`,
                      `0 0 8px ${f.accentColor}40`,
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
                <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors tracking-wider uppercase font-medium whitespace-nowrap">
                  {f.name[locale]?.split(' ').pop() || f.name.fr}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase">scroll</span>
          <ChevronDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
