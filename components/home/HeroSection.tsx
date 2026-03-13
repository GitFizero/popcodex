'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Search, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAllFranchiseIds, franchises } from '@/lib/franchise-config';
import Link from 'next/link';
import { getArticlesByFranchise } from '@/lib/articles';

/* Animated accent orbs that float around */
function FloatingOrbs() {
  const allIds = getAllFranchiseIds();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {allIds.map((id, i) => {
        const f = franchises[id];
        const positions = [
          { left: '15%', top: '20%' },
          { right: '20%', top: '30%' },
          { left: '25%', bottom: '25%' },
          { right: '15%', bottom: '20%' },
        ];
        return (
          <motion.div
            key={id}
            className="absolute w-64 h-64 rounded-full"
            style={{
              ...positions[i],
              background: `radial-gradient(circle, ${f.accentColor}12 0%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              y: [0, -20, 0, 15, 0],
              x: [0, 10, -10, 5, 0],
              scale: [1, 1.1, 0.95, 1.05, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const tNav = useTranslations('nav');
  const tUniverse = useTranslations('universe');
  const locale = useLocale();
  const allFranchises = getAllFranchiseIds();

  // Total article count
  const totalArticles = allFranchises.reduce((sum, id) => sum + getArticlesByFranchise(id).length, 0);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-atmosphere" />
      <FloatingOrbs />

      {/* Grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-[var(--color-text-secondary)]">
            {totalArticles} {locale === 'en' ? 'articles across' : locale === 'es' ? 'artículos en' : 'articles sur'} {allFranchises.length} {locale === 'en' ? 'universes' : locale === 'es' ? 'universos' : 'univers'}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', lineHeight: 0.95 }}
        >
          Pop
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${franchises['gta-vi'].accentColor}, ${franchises['crimson-desert'].accentColor}, ${franchises['fable'].accentColor}, ${franchises['wolverine'].accentColor})`,
            }}
          >
            Codex
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={() => {
              window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
            }}
            className="group flex items-center gap-3 mx-auto w-full max-w-md px-5 py-4 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] shadow-sm hover:shadow-lg transition-all duration-300 cursor-text"
          >
            <Search className="w-5 h-5 text-[var(--color-text-tertiary)]" />
            <span className="flex-1 text-left text-[var(--color-text-tertiary)] text-sm sm:text-base">
              {tNav('search')}
            </span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 bg-[var(--color-bg-subtle)] rounded-lg text-[11px] font-mono text-[var(--color-text-tertiary)]">
              <span className="text-xs">&#8984;</span>K
            </kbd>
          </button>
        </motion.div>

        {/* Franchise quick pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
          className="mt-8 flex items-center justify-center gap-3 flex-wrap"
        >
          {allFranchises.map((id, i) => {
            const f = franchises[id];
            const count = getArticlesByFranchise(id).length;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <Link
                  href={`/${locale}/${id}`}
                  className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 no-underline hover:-translate-y-0.5 hover:shadow-md border"
                  style={{
                    color: f.accentColor,
                    background: `${f.accentColor}08`,
                    borderColor: `${f.accentColor}15`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: f.accentColor }} />
                  {f.name[locale] || f.name.fr}
                  <span className="text-[10px] opacity-60">{count}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--color-text-tertiary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
