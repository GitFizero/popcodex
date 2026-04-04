import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '@/fable-wiki/context/AppContext';
import { useI18n, type Lang } from '@/fable-wiki/context/I18nContext';
import { Search, X, Menu, Globe, Moon, Sun, ChevronDown, ArrowLeft } from 'lucide-react';

const LANG_CYCLE: Lang[] = ['fr', 'en', 'de', 'es', 'pt', 'it', 'ko'];
const LANG_LABELS: Record<Lang, string> = { fr: 'FR', en: 'EN', de: 'DE', es: 'ES', pt: 'PT', it: 'IT', ko: 'KO' };

const NavBar = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [dbMenuOpen, setDbMenuOpen] = useState(false);
  const location = useLocation();
  const { setSearchOpen, storybookMode, toggleStorybookMode } = useApp();
  const { lang, setLang, t } = useI18n();

  const NAV_LINKS = [
    { path: '/story', label: t('nav.story') },
    { path: '/characters', label: t('nav.characters') },
    { path: '/world', label: t('nav.world') },
    { path: '/weapons', label: t('nav.weapons') },
    { path: '/combat', label: t('nav.combat') },
    { path: '/lore', label: t('nav.lore') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/gallery', label: t('nav.gallery') },
  ];

  const DB_LINKS = [
    { path: '/items', label: t('nav.db.items') },
    { path: '/quests', label: t('nav.db.quests') },
    { path: '/glossary', label: t('nav.db.glossary') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDbMenuOpen(false); }, [location]);

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

  const openSearch = useCallback(() => setSearchOpen(true), [setSearchOpen]);
  const isDbActive = ['/items', '/quests', '/glossary'].includes(location.pathname);

  const isWikiMode = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('wiki') === 'true';

  return (
    <>
      <nav
        className="fixed top-[3px] left-0 w-full z-[1000] transition-all duration-[400ms]"
        style={{
          background: scrolled ? 'rgba(3, 10, 5, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            {!isWikiMode && (
              <a
                href="/fr"
                className="flex items-center gap-1 px-2 py-1 rounded-md font-body text-[0.65rem] tracking-wider transition-all duration-200 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-900/10 text-gray-400 hover:text-emerald-400"
                title="Retour à PopCodex"
              >
                <ArrowLeft size={12} />
                <span className="hidden sm:inline">PopCodex</span>
              </a>
            )}
            <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
              <span className="text-lg font-display text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                Fable
              </span>
            </Link>
          </div>

          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-heading text-[0.75rem] tracking-[0.12em] transition-colors duration-200 relative
                    ${active ? 'text-emerald-400' : 'text-gray-400 hover:text-emerald-400'}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-yellow-400 transition-all duration-300" style={{ width: active ? '100%' : '0%' }} />
                </Link>
              );
            })}

            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setDbMenuOpen(!dbMenuOpen); }}
                className={`font-heading text-[0.75rem] tracking-[0.12em] transition-colors duration-200 flex items-center gap-1
                  ${isDbActive ? 'text-emerald-400' : 'text-gray-400 hover:text-emerald-400'}`}
              >
                {t('nav.database')}
                <ChevronDown size={12} className={`transition-transform duration-200 ${dbMenuOpen ? 'rotate-180' : ''}`} />
                {isDbActive && <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-400" />}
              </button>
              {dbMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-md overflow-hidden border border-emerald-900/50 shadow-xl min-w-[160px]"
                  style={{ background: 'rgba(3, 10, 5, 0.95)', backdropFilter: 'blur(20px)' }}
                  onClick={e => e.stopPropagation()}
                >
                  {DB_LINKS.map(link => (
                    <Link key={link.path} to={link.path}
                      className={`flex items-center gap-2 px-4 py-2.5 font-body text-[0.7rem] font-bold tracking-wider transition-colors
                        ${location.pathname === link.path ? 'text-emerald-400 bg-emerald-900/20' : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-900/10'}`}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button onClick={toggleStorybookMode}
              className="p-1.5 text-gray-400 hover:text-emerald-400 transition-colors rounded-full hover:bg-emerald-900/20"
              aria-label={storybookMode ? 'Dark mode' : 'Storybook mode'}
              title={storybookMode ? t('footer.dark_mode') : t('footer.storybook')}>
              {storybookMode ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className="flex items-center gap-0.5 px-1.5 py-1 text-gray-400 hover:text-emerald-400 transition-colors rounded"
                aria-label="Change language">
                <Globe size={13} />
                <span className="font-body text-[0.6rem] font-bold">{LANG_LABELS[lang]}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-1 rounded-md overflow-hidden border border-emerald-900/50 shadow-xl"
                  style={{ background: 'rgba(3, 10, 5, 0.95)', backdropFilter: 'blur(20px)' }}
                  onClick={e => e.stopPropagation()}>
                  {LANG_CYCLE.map(l => (
                    <button key={l} onClick={() => { setLang(l); setLangMenuOpen(false); }}
                      className={`block w-full px-4 py-2 text-left font-body text-[0.7rem] font-bold tracking-wider transition-colors
                        ${l === lang ? 'text-emerald-400 bg-emerald-900/20' : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-900/10'}`}>
                      {l === 'fr' ? '🇫🇷 Français' : l === 'en' ? '🇬🇧 English' : l === 'es' ? '🇪🇸 Español' : l === 'pt' ? '🇧🇷 Português' : l === 'it' ? '🇮🇹 Italiano' : '🇰🇷 한국어'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={openSearch} className="p-1.5 text-gray-400 hover:text-emerald-400 transition-colors" aria-label={t('nav.search')}>
              <Search size={16} />
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-1.5 text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center gap-4 overflow-y-auto pt-20 pb-8"
          style={{ background: 'rgba(3,10,5,0.97)', backdropFilter: 'blur(10px)' }}
          onClick={() => setMobileOpen(false)}>
          <Link to="/" className="font-heading text-[1.8rem] text-emerald-400 transition-colors" onClick={e => e.stopPropagation()}>{t('nav.home')}</Link>
          {NAV_LINKS.map((link, i) => (
            <Link key={link.path} to={link.path}
              className="font-heading text-[1.8rem] text-gray-400 hover:text-emerald-400 transition-colors"
              style={{ animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 50}ms both`, transform: 'translateX(60px)', opacity: 0 }}
              onClick={e => e.stopPropagation()}>
              {link.label}
            </Link>
          ))}
          <div className="mt-2 mb-2 font-body text-[0.6rem] tracking-[0.2em] text-gray-600">{t('nav.database')}</div>
          {DB_LINKS.map((link, i) => (
            <Link key={link.path} to={link.path}
              className="font-heading text-[1.4rem] text-gray-400 hover:text-emerald-400 transition-colors"
              style={{ animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${(NAV_LINKS.length + i) * 50}ms both`, transform: 'translateX(60px)', opacity: 0 }}
              onClick={e => e.stopPropagation()}>
              {link.label}
            </Link>
          ))}
          <Link to="/about" className="font-body text-sm text-gray-500 hover:text-emerald-400 transition-colors mt-4" onClick={e => e.stopPropagation()}>{t('nav.about')}</Link>
        </div>
      )}
    </>
  );
});

NavBar.displayName = 'NavBar';
export default NavBar;
