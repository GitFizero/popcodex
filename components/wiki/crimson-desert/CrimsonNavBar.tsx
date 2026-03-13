'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, X, Menu, Globe, ChevronDown } from 'lucide-react';
import { useCrimsonI18n, type Lang } from '@/lib/data/crimson-desert/i18n';

const LANG_CYCLE: Lang[] = ['fr', 'en', 'es', 'pt', 'it', 'ko'];
const LANG_FLAGS: Record<string, string> = { fr: '🇫🇷', en: '🇬🇧', es: '🇪🇸', pt: '🇧🇷', it: '🇮🇹', ko: '🇰🇷' };
const LANG_LABELS: Record<string, string> = { fr: 'FR', en: 'EN', es: 'ES', pt: 'PT', it: 'IT', ko: '한국어' };

interface CrimsonNavBarProps {
  locale: string;
  onSearchOpen?: () => void;
}

const CrimsonNavBar = memo(({ locale, onSearchOpen }: CrimsonNavBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [dbMenuOpen, setDbMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useCrimsonI18n(locale);

  const base = `/${locale}/crimson-desert`;

  const NAV_LINKS = [
    { path: `${base}/story`, label: t('nav.story') },
    { path: `${base}/characters`, label: t('nav.characters') },
    { path: `${base}/world`, label: t('nav.world') },
    { path: `${base}/weapons`, label: t('nav.weapons') },
    { path: `${base}/combat`, label: t('nav.combat') },
    { path: `${base}/lore`, label: t('nav.lore') },
    { path: `${base}/blog`, label: t('nav.blog') || 'BLOG' },
    { path: `${base}/gallery`, label: t('nav.gallery') },
  ];

  const DB_LINKS = [
    { path: `${base}/items`, label: t('nav.db.items') || 'ITEMS', icon: '⚔' },
    { path: `${base}/mounts`, label: t('nav.db.mounts') || 'MOUNTS', icon: '🐴' },
    { path: `${base}/quests`, label: t('nav.db.quests') || 'QUESTS', icon: '📜' },
    { path: `${base}/glossary`, label: t('nav.db.glossary') || 'GLOSSARY', icon: '📖' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDbMenuOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!langMenuOpen) return;
    const close = () => setLangMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [langMenuOpen]);

  useEffect(() => {
    if (!dbMenuOpen) return;
    const close = () => setDbMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [dbMenuOpen]);

  const isDbActive = ['/items', '/mounts', '/quests', '/glossary'].some(p => pathname.includes(p));

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-[400ms]"
        style={{
          background: scrolled ? 'rgba(6, 4, 3, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(42 53% 54% / 0.4)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <Link href={`/${locale}`} className="font-ui text-[0.55rem] tracking-wider text-text-muted-custom hover:text-gold-mid transition-colors px-2 py-1 border border-transparent hover:border-gold-mid/30 rounded">
              ← PopCodex
            </Link>
            <Link href={base} className="flex items-center gap-2 group" aria-label="Accueil Crimson Desert">
              <span className="text-lg font-display text-gold-bright group-hover:scale-105 transition-transform duration-300">
                ⚔ CD
              </span>
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map(link => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-heading text-[0.75rem] tracking-[0.12em] transition-colors duration-200 relative
                    ${active ? 'text-gold-bright' : 'text-text-secondary hover:text-gold-bright'}`}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] bg-crimson-bright transition-all duration-300"
                    style={{ width: active ? '100%' : '0%' }}
                  />
                </Link>
              );
            })}

            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setDbMenuOpen(!dbMenuOpen); }}
                className={`font-heading text-[0.75rem] tracking-[0.12em] transition-colors duration-200 flex items-center gap-1
                  ${isDbActive ? 'text-gold-bright' : 'text-text-secondary hover:text-gold-bright'}`}
              >
                {t('nav.database') || 'DATABASE'}
                <ChevronDown size={12} className={`transition-transform duration-200 ${dbMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {dbMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-md overflow-hidden border border-gold-mid/30 shadow-xl min-w-[160px]"
                  style={{ background: 'rgba(6, 4, 3, 0.95)', backdropFilter: 'blur(20px)' }}
                  onClick={e => e.stopPropagation()}
                >
                  {DB_LINKS.map(link => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`flex items-center gap-2 px-4 py-2.5 font-ui text-[0.7rem] font-bold tracking-wider transition-colors
                        ${pathname === link.path ? 'text-gold-bright bg-raised/50' : 'text-text-secondary hover:text-gold-bright hover:bg-raised/30'}`}
                    >
                      <span>{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className="flex items-center gap-1 px-1.5 py-1 text-text-secondary hover:text-gold-bright transition-colors rounded"
                aria-label="Change language"
              >
                <span>{LANG_FLAGS[locale] || '🌐'}</span>
                <span className="font-ui text-[0.6rem] font-bold">{LANG_LABELS[locale] || locale.toUpperCase()}</span>
                <ChevronDown size={10} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {langMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-1 rounded-md overflow-hidden border border-gold-mid/30 shadow-xl min-w-[150px]"
                  style={{ background: 'rgba(6, 4, 3, 0.95)', backdropFilter: 'blur(20px)' }}
                  onClick={e => e.stopPropagation()}
                >
                  {LANG_CYCLE.map(l => (
                    <Link
                      key={l}
                      href={pathname.replace(`/${locale}/`, `/${l}/`)}
                      className={`flex items-center gap-2 w-full px-4 py-2.5 text-left font-ui text-[0.7rem] font-bold tracking-wider transition-colors
                        ${l === locale ? 'text-gold-bright bg-raised/50' : 'text-text-secondary hover:text-gold-bright hover:bg-raised/30'}`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      <span>{LANG_FLAGS[l]}</span>
                      {l === 'fr' ? 'Français' : l === 'en' ? 'English' : l === 'es' ? 'Español' : l === 'pt' ? 'Português' : l === 'it' ? 'Italiano' : '한국어'}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {onSearchOpen && (
              <button
                onClick={onSearchOpen}
                className="p-1.5 text-text-secondary hover:text-gold-bright transition-colors"
                aria-label={t('nav.search')}
              >
                <Search size={16} />
              </button>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-1.5 text-text-secondary hover:text-gold-bright transition-colors"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 overflow-y-auto py-20"
          style={{ background: 'rgba(6,4,3,0.97)', backdropFilter: 'blur(10px)' }}
          onClick={() => setMobileOpen(false)}
        >
          {/* Language selector in mobile menu */}
          <div className="flex flex-wrap justify-center gap-2 mb-4" onClick={e => e.stopPropagation()}>
            {LANG_CYCLE.map(l => (
              <Link
                key={l}
                href={pathname.replace(`/${locale}/`, `/${l}/`)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-ui text-xs font-bold tracking-wider transition-all
                  ${l === locale
                    ? 'border border-gold-mid/50 text-gold-bright bg-gold-dark/30'
                    : 'border border-smoke-light/30 text-text-secondary hover:text-gold-bright hover:border-gold-mid/40'
                  }`}
              >
                <span>{LANG_FLAGS[l]}</span>
                <span>{LANG_LABELS[l]}</span>
              </Link>
            ))}
          </div>

          <Link href={base} className="font-heading text-[1.8rem] text-gold-bright transition-colors" onClick={e => e.stopPropagation()}>{t('nav.home')}</Link>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              className="font-heading text-[1.8rem] text-text-secondary hover:text-gold-bright transition-colors"
              style={{
                animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 50}ms both`,
              }}
              onClick={e => e.stopPropagation()}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 mb-2 font-ui text-[0.6rem] tracking-[0.2em] text-text-muted-custom">{t('nav.database') || 'DATABASE'}</div>
          {DB_LINKS.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              className="font-heading text-[1.4rem] text-text-secondary hover:text-gold-bright transition-colors flex items-center gap-2"
              style={{
                animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${(NAV_LINKS.length + i) * 50}ms both`,
              }}
              onClick={e => e.stopPropagation()}
            >
              <span>{link.icon}</span> {link.label}
            </Link>
          ))}
          <Link href={`${base}/about`} className="font-ui text-sm text-text-muted-custom hover:text-gold-bright transition-colors mt-4" onClick={e => e.stopPropagation()}>{t('nav.about')}</Link>
        </div>
      )}
    </>
  );
});

CrimsonNavBar.displayName = 'CrimsonNavBar';
export default CrimsonNavBar;
