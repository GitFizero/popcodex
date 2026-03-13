import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '@/crimson-desert-wiki/context/AppContext';
import { useI18n, type Lang } from '@/crimson-desert-wiki/context/I18nContext';
import { Search, X, Menu, Globe, Moon, Sun, ChevronDown } from 'lucide-react';

const LANG_CYCLE: Lang[] = ['fr', 'en', 'es', 'it', 'ko'];
const LANG_LABELS: Record<Lang, string> = { fr: 'FR', en: 'EN', es: 'ES', it: 'IT', ko: '한국어' };

const NavBar = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [dbMenuOpen, setDbMenuOpen] = useState(false);
  const location = useLocation();
  const { setSearchOpen, parchmentMode, toggleParchmentMode } = useApp();
  const { lang, setLang, t } = useI18n();
  const [isCheater, setIsCheater] = useState(false);

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
    { path: '/items', label: t('nav.db.items'), icon: '⚔' },
    { path: '/mounts', label: t('nav.db.mounts'), icon: '🐴' },
    { path: '/quests', label: t('nav.db.quests'), icon: '📜' },
    { path: '/glossary', label: t('nav.db.glossary'), icon: '📖' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    const onCheater = () => setIsCheater(true);
    window.addEventListener('cheater-activated', onCheater);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('cheater-activated', onCheater);
    };
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

  const isDbActive = ['/items', '/mounts', '/quests', '/glossary'].includes(location.pathname);

  return (
    <>
      <a href="#main-content" className="skip-link focus-gold">Aller au contenu</a>
      <nav
        className="fixed top-[3px] left-0 w-full z-[1000] transition-all duration-[400ms]"
        style={{
          background: scrolled ? 'rgba(6, 4, 3, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(var(--border-gold))' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 group focus-gold" aria-label="Accueil">
            <span className="text-lg font-display text-gold-bright group-hover:scale-105 transition-transform duration-300">
              ⚔ CD
            </span>
            {isCheater && <span className="font-ui text-[0.55rem] tracking-wider px-1.5 py-0.5 rounded-full bg-gold-bright text-void animate-pulse">CHEATER</span>}
          </Link>

          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-heading text-[0.75rem] tracking-[0.12em] transition-colors duration-200 relative focus-gold
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

            {/* Database dropdown */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setDbMenuOpen(!dbMenuOpen); }}
                className={`font-heading text-[0.75rem] tracking-[0.12em] transition-colors duration-200 flex items-center gap-1 focus-gold
                  ${isDbActive ? 'text-gold-bright' : 'text-text-secondary hover:text-gold-bright'}`}
              >
                {t('nav.database')}
                <ChevronDown size={12} className={`transition-transform duration-200 ${dbMenuOpen ? 'rotate-180' : ''}`} />
                {isDbActive && <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-crimson-bright" />}
              </button>
              {dbMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-md overflow-hidden border border-border-gold/30 shadow-xl min-w-[160px]"
                  style={{ background: 'rgba(6, 4, 3, 0.95)', backdropFilter: 'blur(20px)' }}
                  onClick={e => e.stopPropagation()}
                >
                  {DB_LINKS.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-2 px-4 py-2.5 font-ui text-[0.7rem] font-bold tracking-wider transition-colors
                        ${location.pathname === link.path ? 'text-gold-bright bg-raised/50' : 'text-text-secondary hover:text-gold-bright hover:bg-raised/30'}`}
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
              onClick={toggleParchmentMode}
              className="p-1.5 text-text-secondary hover:text-gold-bright transition-colors focus-gold rounded-full hover:bg-raised/50"
              aria-label={parchmentMode ? 'Dark mode' : 'Parchment mode'}
              title={parchmentMode ? t('footer.dark_mode') : t('footer.parchment')}
            >
              {parchmentMode ? <Moon size={15} /> : <Sun size={15} />}
            </button>
          
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen); }}
                className="flex items-center gap-0.5 px-1.5 py-1 text-text-secondary hover:text-gold-bright transition-colors focus-gold rounded"
                aria-label="Change language"
              >
                <Globe size={13} />
                <span className="font-ui text-[0.6rem] font-bold">{LANG_LABELS[lang]}</span>
              </button>
              {langMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-1 rounded-md overflow-hidden border border-border-gold/30 shadow-xl"
                  style={{ background: 'rgba(6, 4, 3, 0.95)', backdropFilter: 'blur(20px)' }}
                  onClick={e => e.stopPropagation()}
                >
                  {LANG_CYCLE.map(l => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangMenuOpen(false); }}
                      className={`block w-full px-4 py-2 text-left font-ui text-[0.7rem] font-bold tracking-wider transition-colors
                        ${l === lang ? 'text-gold-bright bg-raised/50' : 'text-text-secondary hover:text-gold-bright hover:bg-raised/30'}`}
                    >
                      {l === 'fr' ? '🇫🇷 Français' : l === 'en' ? '🇬🇧 English' : l === 'es' ? '🇪🇸 Español' : l === 'it' ? '🇮🇹 Italiano' : '🇰🇷 한국어'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={openSearch}
              className="p-1.5 text-text-secondary hover:text-gold-bright transition-colors focus-gold"
              aria-label={t('nav.search')}
            >
              <Search size={16} />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-1.5 text-text-secondary hover:text-gold-bright transition-colors focus-gold"
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
          style={{ background: 'rgba(6,4,3,0.97)', backdropFilter: 'blur(10px)' }}
          onClick={() => setMobileOpen(false)}
        >
          <Link to="/" className="font-heading text-[1.8rem] text-gold-bright transition-colors focus-gold" onClick={e => e.stopPropagation()}>{t('nav.home')}</Link>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-heading text-[1.8rem] text-text-secondary hover:text-gold-bright transition-colors focus-gold"
              style={{
                animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 50}ms both`,
                transform: 'translateX(60px)',
                opacity: 0,
              }}
              onClick={e => e.stopPropagation()}
            >
              {link.label}
            </Link>
          ))}
          {/* Database links in mobile */}
          <div className="mt-2 mb-2 font-ui text-[0.6rem] tracking-[0.2em] text-text-muted-custom">{t('nav.database')}</div>
          {DB_LINKS.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-heading text-[1.4rem] text-text-secondary hover:text-gold-bright transition-colors focus-gold flex items-center gap-2"
              style={{
                animation: `slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${(NAV_LINKS.length + i) * 50}ms both`,
                transform: 'translateX(60px)',
                opacity: 0,
              }}
              onClick={e => e.stopPropagation()}
            >
              <span>{link.icon}</span> {link.label}
            </Link>
          ))}
          <Link to="/about" className="font-ui text-sm text-text-muted-custom hover:text-gold-bright transition-colors focus-gold mt-4" onClick={e => e.stopPropagation()}>{t('nav.about')}</Link>
        </div>
      )}
    </>
  );
});

NavBar.displayName = 'NavBar';
export default NavBar;
