'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import LanguageSwitcher from './LanguageSwitcher';
import MobileNav from './MobileNav';
import { getFranchiseById } from '@/lib/franchise-config';

export default function Header() {
  const t = useTranslations('nav');
  const params = useParams();
  const franchise = params?.franchise ? getFranchiseById(params.franchise as string) : null;
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (franchise) {
      document.documentElement.setAttribute('data-franchise', franchise.id);
    } else {
      document.documentElement.removeAttribute('data-franchise');
    }
  }, [franchise]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b shadow-sm'
            : 'bg-transparent'
        }`}
        style={{
          ...(scrolled ? {
            backgroundColor: franchise
              ? `color-mix(in srgb, ${franchise.theme.bgGradient ? 'hsl(0 0% 5%)' : 'var(--color-bg)'} 92%, transparent)`
              : 'rgba(10, 10, 26, 0.92)',
            borderColor: franchise ? `${franchise.accentColor}15` : 'var(--color-border)',
          } : {}),
        }}
      >
        {franchise && (
          <div
            className="h-0.5 transition-all duration-300"
            style={{ background: franchise.accentColor }}
          />
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Logo />
              <nav className="hidden lg:flex items-center" aria-label="Main navigation">
                <MegaMenu />
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-input)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] transition-colors text-sm text-[var(--color-text-tertiary)]"
                aria-label={t('search')}
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">{t('searchShort')}</span>
                <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-[var(--color-bg-subtle)] rounded text-[10px] font-mono text-[var(--color-text-tertiary)]">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
              <div className="hidden lg:flex items-center gap-1">
                <LanguageSwitcher />
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const t = useTranslations('search');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-2xl mx-auto mt-[15vh] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-border)]">
          <Search className="w-5 h-5 text-[var(--color-text-tertiary)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('placeholder')}
            autoFocus
            className="flex-1 bg-transparent text-[var(--color-text)] placeholder:text-[var(--color-text-tertiary)] outline-none text-base"
          />
          <kbd className="px-2 py-1 bg-[var(--color-bg-subtle)] rounded text-xs font-mono text-[var(--color-text-tertiary)]">
            ESC
          </kbd>
        </div>
        <div className="p-5 min-h-[200px] max-h-[400px] overflow-y-auto">
          {!query && (
            <p className="text-sm text-[var(--color-text-tertiary)] text-center py-8">
              {t('placeholder')}
            </p>
          )}
          {query && (
            <p className="text-sm text-[var(--color-text-tertiary)] text-center py-8">
              {t('noResults')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
