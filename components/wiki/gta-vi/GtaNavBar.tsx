'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Globe } from 'lucide-react';
import { useGtaI18n, type Lang } from '@/lib/data/gta-vi/i18n';

interface GtaNavBarProps {
  locale: string;
  onSearchOpen: () => void;
}

const langOptions: { code: Lang; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
];

const GtaNavBar = ({ locale, onSearchOpen }: GtaNavBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { t, lang } = useGtaI18n(locale);

  const prefix = `/${locale}/gta-vi`;

  const navLinks = [
    { label: t('nav.home'), path: `${prefix}` },
    { label: t('nav.story'), path: `${prefix}/story` },
    { label: t('nav.characters'), path: `${prefix}/characters` },
    { label: t('nav.map'), path: `${prefix}/map` },
    { label: t('nav.leonida'), path: `${prefix}/leonida` },
    { label: t('nav.gameplay'), path: `${prefix}/gameplay` },
    { label: t('nav.gallery'), path: `${prefix}/gallery` },
    { label: t('nav.trailers'), path: `${prefix}/trailers` },
    { label: 'BLOG', path: `${prefix}/blog` },
    { label: 'FAQ', path: `${prefix}/faq` },
    { label: t('nav.buy'), path: `${prefix}/buy`, highlight: true },
    { label: t('nav.about'), path: `${prefix}/about` },
    { label: t('nav.contact'), path: `${prefix}/contact` },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

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
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const switchLang = (newLang: Lang) => {
    // Replace the locale segment in the current path
    const newPath = pathname.replace(`/${locale}/`, `/${newLang}/`);
    window.location.href = newPath;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'bg-bg-base/90 backdrop-blur-xl border-b border-neon-cyan/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href={prefix} className="flex items-baseline gap-1 glitch-hover select-none">
            <span className="font-bebas text-xl neon-pink-text">GTA</span>
            <span className="font-bebas text-xl neon-cyan-text">VI</span>
            <span className="font-rajdhani text-[0.55rem] text-text-muted-vice ml-1 tracking-widest">FAN WIKI</span>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map(l => (
              <Link
                key={l.path}
                href={l.path}
                className={`font-barlow font-semibold text-xs tracking-wide transition-colors duration-200 hover:text-neon-cyan relative group ${
                  (l as any).highlight
                    ? 'text-neon-gold hover:text-neon-gold'
                    : pathname === l.path ? 'text-neon-cyan' : 'text-text-secondary'
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[1px] ${(l as any).highlight ? 'bg-neon-gold' : 'bg-neon-cyan'} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2 py-1 text-text-secondary hover:text-neon-cyan transition-colors"
              >
                <span>{langOptions.find(o => o.code === lang)?.flag || '🌐'}</span>
                <span className="font-rajdhani text-[0.65rem] tracking-widest">{lang.toUpperCase()}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-1 bg-[hsl(213,33%,13%)] border border-neon-cyan/20 rounded-lg shadow-xl overflow-hidden min-w-[140px] z-50">
                  {langOptions.map(opt => (
                    <button
                      key={opt.code}
                      onClick={() => { switchLang(opt.code); setLangMenuOpen(false); }}
                      className={`w-full text-left px-3 py-2 flex items-center gap-2 font-rajdhani text-xs tracking-wider transition-colors ${
                        lang === opt.code ? 'bg-neon-cyan/10 text-neon-cyan' : 'text-text-secondary hover:bg-[hsl(214,36%,10%)] hover:text-text-primary'
                      }`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button onClick={onSearchOpen} className="p-2 text-text-secondary hover:text-neon-cyan transition-colors">
              <Search size={16} />
            </button>
            <span className="hidden sm:inline-block font-rajdhani text-[0.55rem] px-2 py-0.5 bg-neon-pink/20 text-neon-pink rounded tracking-widest">
              {t('nav.fansite')}
            </span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-secondary"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] bg-[hsl(220,67%,2%,0.98)] flex flex-col items-center justify-center gap-3 sm:gap-5 overflow-y-auto py-16">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {langOptions.map(opt => (
              <button
                key={opt.code}
                onClick={() => { switchLang(opt.code); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-rajdhani text-sm tracking-widest transition-all ${
                  lang === opt.code
                    ? 'border border-neon-cyan/50 text-neon-cyan bg-neon-cyan/10'
                    : 'border border-text-muted-vice/20 text-text-secondary'
                }`}
              >
                <span>{opt.flag}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
          {navLinks.map((l, i) => (
            <Link
              key={l.path}
              href={l.path}
              className="font-bebas text-2xl sm:text-3xl text-text-primary hover:neon-pink-text transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default GtaNavBar;
