'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { getFranchisesByMediaType } from '@/lib/franchise-config';
import { getArticlesByFranchise } from '@/lib/articles';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function MobileNav() {
  const t = useTranslations('nav');
  const tA = useTranslations('accessibility');
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(true);

  const games = getFranchisesByMediaType('games');

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={tA('openMenu')}
        className="flex items-center justify-center w-9 h-9 rounded-[var(--radius-button)] hover:bg-[var(--color-bg-subtle)] transition-colors lg:hidden"
      >
        <Menu className="w-5 h-5 text-[var(--color-text)]" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-[#121212] shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label={tA('closeMenu')}
                className="flex items-center justify-center w-9 h-9 rounded-[var(--radius-button)] hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <nav className="p-4 space-y-2">
              <button
                onClick={() => setGamesOpen(!gamesOpen)}
                className="w-full flex items-center justify-between p-3 rounded-[var(--radius-button)] hover:bg-white/10 text-white font-medium"
              >
                {t('games')}
                <ChevronRight className={`w-4 h-4 transition-transform ${gamesOpen ? 'rotate-90' : ''}`} />
              </button>

              {gamesOpen && (
                <div className="pl-3 space-y-1">
                  {games.map((franchise) => {
                    const count = getArticlesByFranchise(franchise.id).length;
                    return (
                      <Link
                        key={franchise.id}
                        href={`/${locale}/${franchise.id}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between p-3 rounded-[var(--radius-button)] hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ background: franchise.accentColor }}
                          />
                          <span className="text-sm font-medium text-white">
                            {franchise.name[locale] || franchise.name.fr}
                          </span>
                        </div>
                        <span className="text-xs text-white/50">
                          {count} {t('articles')}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}

              <div className="p-3 text-sm text-white/40">
                {t('films')} — {t('comingSoon')}
              </div>
              <div className="p-3 text-sm text-white/40">
                {t('series')} — {t('comingSoon')}
              </div>
            </nav>

            <div className="p-4 border-t border-white/10 flex items-center justify-between">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
