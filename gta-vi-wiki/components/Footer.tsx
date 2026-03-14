import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/gta-vi-wiki/context/AppContext';
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';

const Footer = memo(() => {
  const { toggleRetroMode, retroMode } = useApp();
  const { t, lang } = useI18n();

  return (
    <footer className="relative z-10 border-t" style={{ background: 'rgba(10, 0, 15, 0.95)', borderColor: 'rgba(255, 20, 147, 0.2)' }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <NeonDivider variant="short" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ color: '#FF1493', textShadow: '0 0 10px rgba(255, 20, 147, 0.5)' }}>GTA VI WIKI</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('footer.desc')}</p>
            <p className="text-[0.55rem] mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('about.images_credit')}</p>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.15em] mb-3" style={{ color: '#00FFFF' }}>{t('footer.navigation')}</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/story', label: t('nav.story') },
                { to: '/characters', label: t('nav.characters') },
                { to: '/world', label: t('nav.world') },
                { to: '/weapons', label: t('nav.weapons') },
                { to: '/lore', label: t('nav.lore') },
                { to: '/gallery', label: lang === 'fr' ? 'Galerie' : lang === 'es' ? 'Galeria' : 'Gallery' },
                { to: '/about', label: t('nav.about') },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#FF1493'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}
                >{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.15em] mb-3" style={{ color: '#00FFFF' }}>{t('footer.official')}</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('footer.official_site')}</a>
              <a href="https://www.rockstargames.com" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Rockstar Games</a>
            </div>
            <h4 className="text-sm tracking-[0.15em] mb-3 mt-6" style={{ color: '#00FFFF' }}>{t('footer.legal')}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('footer.privacy')}</Link>
              <Link to="/about#contact" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('footer.contact')}</Link>
            </div>
            <div className="mt-4">
              <button onClick={toggleRetroMode} className="text-xs tracking-wider transition-colors" style={{ color: 'rgba(255,255,255,0.3)' }} aria-label="Toggle retro mode">
                {retroMode ? t('footer.dark_mode') : t('footer.retro')}
              </button>
            </div>
          </div>
        </div>
        <NeonDivider variant="short" className="mt-8" />
        <div className="mt-6 text-center">
          <p className="text-[0.65rem] tracking-wider uppercase leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('footer.disclaimer')}</p>
          <p className="text-[0.6rem] mt-2" style={{ color: 'rgba(255,255,255,0.2)' }}>{t('footer.made_with')}</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
