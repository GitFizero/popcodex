'use client';

import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAllFranchiseIds, franchises } from '@/lib/franchise-config';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const allFranchises = getAllFranchiseIds();

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 bg-atmosphere">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-10"
        >
          <button
            onClick={() => {
              window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
            }}
            className="group flex items-center gap-3 mx-auto w-full max-w-md px-5 py-3.5 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] shadow-sm hover:shadow-md transition-all duration-200 cursor-text"
          >
            <Search className="w-5 h-5 text-[var(--color-text-tertiary)]" />
            <span className="flex-1 text-left text-[var(--color-text-tertiary)] text-sm sm:text-base">
              {tNav('search')}
            </span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 bg-[var(--color-bg-subtle)] rounded-lg text-[11px] font-mono text-[var(--color-text-tertiary)]">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          className="mt-8 flex items-center justify-center gap-3 flex-wrap"
        >
          {allFranchises.map((id) => (
            <Link
              key={id}
              href={`/${locale}/${id}`}
              className="px-3 py-1.5 text-sm font-medium rounded-full transition-colors no-underline hover:-translate-y-0.5 transition-transform duration-200"
              style={{
                color: franchises[id].accentColor,
                background: `${franchises[id].accentColor}10`,
              }}
            >
              {franchises[id].name[locale] || franchises[id].name.fr}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
