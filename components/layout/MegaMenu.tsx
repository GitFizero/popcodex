'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { franchises, getFranchisesByMediaType, FranchiseConfig } from '@/lib/franchise-config';
import { getArticlesByFranchise } from '@/lib/articles';

function FranchiseCard({ franchise, locale, index }: { franchise: FranchiseConfig; locale: string; index: number }) {
  const t = useTranslations('nav');
  const articleCount = getArticlesByFranchise(franchise.id).length;
  const releaseDate = new Date(franchise.releaseDate);
  const isReleased = releaseDate <= new Date();

  return (
    <Link
      href={`/${locale}/${franchise.id}`}
      className="group flex flex-col gap-3 p-5 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        animationDelay: `${index * 60}ms`,
      }}
    >
      <div
        className="w-full h-20 rounded-xl"
        style={{
          background: `linear-gradient(135deg, ${franchise.accentColor}15, ${franchise.accentColor}30)`,
        }}
      />
      <div className="flex items-start justify-between">
        <h3 className="font-display font-semibold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>
          {franchise.name[locale] || franchise.name.fr}
        </h3>
        {!isReleased && (
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: `${franchise.accentColor}15`, color: franchise.accentColor }}
          >
            {t('comingSoon')}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3 text-xs text-[var(--color-text-tertiary)]">
        <span>{articleCount} {t('articles')}</span>
        <span>·</span>
        <span>{franchise.developer}</span>
      </div>
      <div className="flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
        <span>{t('viewAll')}</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </Link>
  );
}

interface MegaMenuProps {
  className?: string;
}

export default function MegaMenu({ className }: MegaMenuProps) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const games = getFranchisesByMediaType('games');

  return (
    <div ref={ref} className={className}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-2 rounded-[var(--radius-button)] hover:bg-[var(--color-bg-subtle)] transition-colors text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
      >
        {t('games')}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-1 mx-auto max-w-5xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-xl p-6 z-50">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
              {t('games')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((franchise, i) => (
              <FranchiseCard key={franchise.id} franchise={franchise} locale={locale} index={i} />
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex gap-6">
            <button disabled className="text-sm text-[var(--color-text-tertiary)] cursor-default">
              {t('films')} — {t('comingSoon')}
            </button>
            <button disabled className="text-sm text-[var(--color-text-tertiary)] cursor-default">
              {t('series')} — {t('comingSoon')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
