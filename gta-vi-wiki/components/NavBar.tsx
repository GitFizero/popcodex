import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '@/gta-vi-wiki/context/AppContext';
import { useI18n, type Lang } from '@/gta-vi-wiki/context/I18nContext';
import { Search, X, Menu, Globe, ChevronDown } from 'lucide-react';

const LANG_CYCLE: Lang[] = ['fr', 'en', 'es', 'pt', 'it', 'ko'];
const LANG_LABELS: Record<Lang, string> = { fr: 'FR', en: 'EN', es: 'ES', pt: 'PT', it: 'IT', ko: 'KO' };

const NavBar = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [dbMenuOpen, setDbMenuOpen] = useState(false);
  const location = useLocation();
  const { setSearchOpen, retroMode, toggleRetroMode } = useApp();
  const { lang, setLang, t } = useI18n();

  const NAV_LINKS = [
    { path: '/story', label: t('nav.story') },
    { path: '/characters', label: t('nav.characters') },
    { path: '/world', label: t('nav.world') },
    { path: '/weapons', label: t('nav.weapons') },
    { path: '/lore', label: t('nav.lore') },
    { path: '/blog', label: t('nav.blog') },
  ];

  const DB_LINKS = [
    { path: '/items', label: t('nav.db.items'), icon: '📦' },
    { path: '/mounts', label: t('nav.db.mounts'), icon: '🚗' },
    { path: '/quests', label: t('nav.db.quests'), icon: '📋' },
    { path: '/glossary', label: t('nav.db.glossary'), icon: '📖' },
    { path: '/gallery', label: lang === 'fr' ? 'Galerie' : lang === 'es' ? 'Galeria' : 'Gallery', icon: '🖼️' },
    { path: '/trailers', label: 'Trailers', icon: '🎬' },
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
  const isDbActive = ['/items', '/mounts', '/quests', '/glossary', '/gallery', '/trailers'].includes(location.pathname);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-[400ms]"
        style={{
          background: scrolled ? 'rgba(10, 0, 15, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 20, 147, 0.3)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(255, 20, 147, 0.15)' : 'none',
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
            <span className="text-lg font-bold tracking-wider group-hover:scale-105 transition-transform duration-300" style={{ color: '#FF1493', textShadow: '0 0 10px rgba(255, 20, 147, 0.6)' }}>
              GTA VI
            </span>
            <span className="text-xs tracking-[0.15em] uppercase" style={{ color: '#00FFFF' }}>{t('nav.fan_site')}</span>
          </Link>

          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[0.75rem] tracking-[0.12em] transition-colors duration-200 relative"
                  style={{ color: active ? '#FF1493' : 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = '#00FFFF'; }}
                  onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300"
                    style={{ width: active ? '100%' : '0%', background: '#FF1493', boxShadow: '0 0 8px #FF1493' }}
                  />
                </Link>
              );
            })}

            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setDbMenuOpen(!dbMenuOpen); }}
                className="text-[0.75rem] tracking-[0.12em] transition-colors duration-200 flex items-center gap-1"
                style={{ color: isDbActive ? '#FF1493' : 'rgba(255,255,255,0.6)' }}
              >
                {t('nav.database')}
                <ChevronDown size={12} className={`transition-transform duration-200 ${dbMenuOpen ? 'rotate-180' : ''}`} />
                {isDbActive && <span className="absolute -bottom-1 left-0 right-0 h-[2px]" style={{ background: '#FF1493' }} />}
              </button>
              {dbMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-md overflow-hidden shadow-xl min-w-[160px]"
                  style={{ background: 'rgba(10, 0, 15, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 20, 147, 0.2)' }}
                  onClick={e => e.stopPropagation()}
                >
                  {DB_LINKS.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center gap-2 px-4 py-2.5 text-[0.7rem] tracking-wider transition-colors"
                      style={{ color: location.pathname === link.path ? '#FF1493' : 'rgba(255,255,255,0.6)' }}
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
            <button
              onClick={toggleRetroMode}
              className="p-1.5 transition-colors rounded-full"
              style={{ color: retroMode ? '#FF1493' : 'rgba(255,255,255,0.5)' }}
              aria-label={retroMode ? 'Disable retro mode' : 'Enable retro mode'}
              title={t('footer.retro')}
            >
              <span className="text-xs font-bold">VHS</span>
            </button>

            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className="flex items-center gap-0.5 px-1.5 py-1 transition-colors rounded"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                aria-label="Change language"
              >
                <Globe size={13} />
                <span className="text-[0.6rem] font-bold">{LANG_LABELS[lang]}</span>
              </button>
              {langMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-1 rounded-md overflow-hidden shadow-xl"
                  style={{ background: 'rgba(10, 0, 15, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 20, 147, 0.2)' }}
                  onClick={e => e.stopPropagation()}
                >
                  {LANG_CYCLE.map(l => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangMenuOpen(false); }}
                      className="block w-full px-4 py-2 text-left text-[0.7rem] font-bold tracking-wider transition-colors"
                      style={{ color: l === lang ? '#FF1493' : 'rgba(255,255,255,0.6)' }}
                    >
                      {l === 'fr' ? 'Francais' : l === 'en' ? 'English' : l === 'es' ? 'Espanol' : l === 'pt' ? 'Portugues' : l === 'it' ? 'Italiano' : '한국어'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={openSearch}
              className="p-1.5 transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              aria-label={t('nav.search')}
            >
              <Search size={16} />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-1.5 transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-4 overflow-y-auto py-20"
          style={{ background: 'rgba(10, 0, 15, 0.97)', backdropFilter: 'blur(10px)' }}
          onClick={() => setMobileOpen(false)}
        >
          <Link to="/" className="text-[1.8rem] font-bold transition-colors" style={{ color: '#FF1493', textShadow: '0 0 20px rgba(255, 20, 147, 0.5)' }} onClick={e => e.stopPropagation()}>{t('nav.home')}</Link>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[1.8rem] font-bold transition-colors"
              style={{
                color: 'rgba(255,255,255,0.7)',
                animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 50}ms both`,
                transform: 'translateX(60px)',
                opacity: 0,
              }}
              onClick={e => e.stopPropagation()}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 mb-2 text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: '#00FFFF' }}>{t('nav.database')}</div>
          {DB_LINKS.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[1.4rem] font-bold transition-colors flex items-center gap-2"
              style={{
                color: 'rgba(255,255,255,0.6)',
                animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${(NAV_LINKS.length + i) * 50}ms both`,
                transform: 'translateX(60px)',
                opacity: 0,
              }}
              onClick={e => e.stopPropagation()}
            >
              <span>{link.icon}</span> {link.label}
            </Link>
          ))}
          <Link to="/about" className="text-sm transition-colors mt-4" style={{ color: 'rgba(255,255,255,0.4)' }} onClick={e => e.stopPropagation()}>{t('nav.about')}</Link>
        </div>
      )}
    </>
  );
});

NavBar.displayName = 'NavBar';
export default NavBar;
