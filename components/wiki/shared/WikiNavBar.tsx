'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, X, Menu, Globe, ChevronDown } from 'lucide-react';

export type Lang = 'fr' | 'en' | 'es' | 'it' | 'ko';

export interface WikiNavLink {
  path: string;
  label: string;
}

export interface WikiNavConfig {
  /** Franchise URL slug, e.g. 'wolverine' */
  franchiseSlug: string;
  /** Short logo text, e.g. '⚔ CD' or '🐺 MW' */
  logoText: string;
  /** Main navigation links */
  navLinks: WikiNavLink[];
  /** Optional database dropdown links */
  dbLinks?: (WikiNavLink & { icon: string })[];
  /** Database dropdown label */
  dbLabel?: string;
  /** Accent CSS color for active link underline, e.g. 'hsl(var(--crimson-bright))' */
  accentColor: string;
  /** NavBar background when scrolled */
  scrolledBg: string;
  /** Border color when scrolled */
  scrolledBorder: string;
  /** Text classes */
  textActive: string;
  textDefault: string;
  textHover: string;
  textMuted: string;
  /** Font class for nav links */
  fontNav: string;
  /** Font class for UI elements */
  fontUi: string;
  /** Search placeholder */
  searchLabel?: string;
  /** Home label for mobile */
  homeLabel?: string;
  /** About link */
  aboutLabel?: string;
}

interface WikiNavBarProps {
  locale: string;
  config: WikiNavConfig;
  onSearchOpen?: () => void;
}

const LANG_CYCLE: Lang[] = ['fr', 'en', 'es', 'it', 'ko'];

const WikiNavBar = memo(({ locale, config, onSearchOpen }: WikiNavBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [dbMenuOpen, setDbMenuOpen] = useState(false);
  const pathname = usePathname();
  const base = `/${locale}/${config.franchiseSlug}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDbMenuOpen(false); }, [pathname]);

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

  const isDbActive = config.dbLinks?.some(l => pathname.includes(l.path)) ?? false;

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-[400ms]"
        style={{
          background: scrolled ? config.scrolledBg : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? `1px solid ${config.scrolledBorder}` : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}`}
              className={`${config.fontUi} text-[0.55rem] tracking-wider ${config.textMuted} hover:${config.textActive} transition-colors px-2 py-1 border border-transparent hover:border-current/30 rounded`}
              style={{ color: 'inherit', opacity: 0.5 }}
            >
              ← PopCodex
            </Link>
            <Link href={base} className="flex items-center gap-2 group" aria-label="Accueil">
              <span className={`text-lg ${config.fontNav} ${config.textActive} group-hover:scale-105 transition-transform duration-300`}>
                {config.logoText}
              </span>
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-5">
            {config.navLinks.map(link => {
              const fullPath = link.path.startsWith('/') ? link.path : `${base}/${link.path}`;
              const active = pathname === fullPath;
              return (
                <Link
                  key={fullPath}
                  href={fullPath}
                  className={`${config.fontNav} text-[0.75rem] tracking-[0.12em] transition-colors duration-200 relative
                    ${active ? config.textActive : `${config.textDefault} hover:${config.textHover}`}`}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300"
                    style={{ width: active ? '100%' : '0%', background: config.accentColor }}
                  />
                </Link>
              );
            })}

            {config.dbLinks && config.dbLinks.length > 0 && (
              <div className="relative">
                <button
                  onClick={(e) => { e.stopPropagation(); setDbMenuOpen(!dbMenuOpen); }}
                  className={`${config.fontNav} text-[0.75rem] tracking-[0.12em] transition-colors duration-200 flex items-center gap-1
                    ${isDbActive ? config.textActive : `${config.textDefault} hover:${config.textHover}`}`}
                >
                  {config.dbLabel || 'DATABASE'}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${dbMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {dbMenuOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-md overflow-hidden shadow-xl min-w-[160px]"
                    style={{ background: config.scrolledBg, backdropFilter: 'blur(20px)', border: `1px solid ${config.scrolledBorder}` }}
                    onClick={e => e.stopPropagation()}
                  >
                    {config.dbLinks.map(link => {
                      const fullPath = link.path.startsWith('/') ? link.path : `${base}/${link.path}`;
                      return (
                        <Link
                          key={fullPath}
                          href={fullPath}
                          className={`flex items-center gap-2 px-4 py-2.5 ${config.fontUi} text-[0.7rem] font-bold tracking-wider transition-colors
                            ${pathname === fullPath ? config.textActive : `${config.textDefault} hover:${config.textHover}`}`}
                        >
                          <span>{link.icon}</span>
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className={`flex items-center gap-0.5 px-1.5 py-1 ${config.textDefault} hover:${config.textHover} transition-colors rounded`}
                aria-label="Change language"
              >
                <Globe size={13} />
                <span className={`${config.fontUi} text-[0.6rem] font-bold`}>{locale.toUpperCase()}</span>
              </button>
              {langMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-1 rounded-md overflow-hidden shadow-xl"
                  style={{ background: config.scrolledBg, backdropFilter: 'blur(20px)', border: `1px solid ${config.scrolledBorder}` }}
                  onClick={e => e.stopPropagation()}
                >
                  {LANG_CYCLE.map(l => (
                    <Link
                      key={l}
                      href={pathname.replace(`/${locale}/`, `/${l}/`)}
                      className={`block w-full px-4 py-2 text-left ${config.fontUi} text-[0.7rem] font-bold tracking-wider transition-colors
                        ${l === locale ? config.textActive : `${config.textDefault} hover:${config.textHover}`}`}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      {l === 'fr' ? 'Français' : l === 'en' ? 'English' : l === 'es' ? 'Español' : l === 'it' ? 'Italiano' : '한국어'}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {onSearchOpen && (
              <button
                onClick={onSearchOpen}
                className={`p-1.5 ${config.textDefault} hover:${config.textHover} transition-colors`}
                aria-label={config.searchLabel || 'Search'}
              >
                <Search size={16} />
              </button>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden p-1.5 ${config.textDefault} hover:${config.textHover} transition-colors`}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-4 overflow-y-auto py-20"
          style={{ background: config.scrolledBg, backdropFilter: 'blur(10px)' }}
          onClick={() => setMobileOpen(false)}
        >
          <Link href={base} className={`${config.fontNav} text-[1.8rem] ${config.textActive} transition-colors`} onClick={e => e.stopPropagation()}>
            {config.homeLabel || 'HOME'}
          </Link>
          {config.navLinks.map((link, i) => {
            const fullPath = link.path.startsWith('/') ? link.path : `${base}/${link.path}`;
            return (
              <Link
                key={fullPath}
                href={fullPath}
                className={`${config.fontNav} text-[1.8rem] ${config.textDefault} hover:${config.textHover} transition-colors`}
                style={{ animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 50}ms both` }}
                onClick={e => e.stopPropagation()}
              >
                {link.label}
              </Link>
            );
          })}
          {config.dbLinks && config.dbLinks.length > 0 && (
            <>
              <div className={`mt-2 mb-2 ${config.fontUi} text-[0.6rem] tracking-[0.2em] ${config.textMuted}`}>{config.dbLabel || 'DATABASE'}</div>
              {config.dbLinks.map((link, i) => {
                const fullPath = link.path.startsWith('/') ? link.path : `${base}/${link.path}`;
                return (
                  <Link
                    key={fullPath}
                    href={fullPath}
                    className={`${config.fontNav} text-[1.4rem] ${config.textDefault} hover:${config.textHover} transition-colors flex items-center gap-2`}
                    style={{ animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${(config.navLinks.length + i) * 50}ms both` }}
                    onClick={e => e.stopPropagation()}
                  >
                    <span>{link.icon}</span> {link.label}
                  </Link>
                );
              })}
            </>
          )}
          {config.aboutLabel && (
            <Link href={`${base}/about`} className={`${config.fontUi} text-sm ${config.textMuted} hover:${config.textHover} transition-colors mt-4`} onClick={e => e.stopPropagation()}>
              {config.aboutLabel}
            </Link>
          )}
        </div>
      )}
    </>
  );
});

WikiNavBar.displayName = 'WikiNavBar';
export default WikiNavBar;
