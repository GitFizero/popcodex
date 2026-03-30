import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/crimson-desert-wiki/context/AppContext';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import GoldDivider from './GoldDivider';

const Footer = memo(() => {
  const { toggleParchmentMode, parchmentMode } = useApp();
  const { t } = useI18n();

  return (
    <footer className="relative z-10 bg-surface border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GoldDivider variant="short" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="font-display text-lg text-gold-bright mb-3">⚔ CD WIKI</h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('footer.desc')}</p>
            <p className="font-ui text-[0.55rem] text-text-muted-custom mt-2">{t('about.images_credit')}</p>
          </div>
          <div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">{t('footer.navigation')}</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/story', label: t('nav.story') },
                { to: '/characters', label: t('nav.characters') },
                { to: '/world', label: t('nav.world') },
                { to: '/combat', label: t('nav.combat') },
                { to: '/lore', label: t('nav.lore') },
                { to: '/about', label: t('nav.about') },
              ].map(l => (
                <Link key={l.to} to={l.to} className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors focus-gold">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">{t('footer.official')}</h4>
            <div className="flex flex-col gap-2">
              <a href="https://crimsondesert.pearlabyss.com/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors focus-gold">{t('footer.official_site')}</a>
              <a href="https://www.pearlabyss.com/en-US" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors focus-gold">Pearl Abyss ↗</a>
            </div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3 mt-6">{t('footer.legal')}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors focus-gold">{t('footer.privacy')}</Link>
              <Link to="/about#contact" className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors focus-gold">{t('footer.contact')}</Link>
            </div>
            <div className="mt-4">
              <button onClick={toggleParchmentMode} className="font-ui text-xs tracking-wider text-text-muted-custom hover:text-gold-mid transition-colors focus-gold" aria-label="Toggle parchment mode">
                {parchmentMode ? t('footer.dark_mode') : t('footer.parchment')}
              </button>
            </div>
          </div>
        </div>
        <GoldDivider variant="short" className="mt-8" />
        <div className="mt-6 text-center">
          <p className="font-ui text-[0.65rem] tracking-wider text-text-muted-custom uppercase leading-relaxed">{t('footer.disclaimer')}</p>
          <p className="font-ui text-[0.6rem] text-text-muted-custom/60 mt-2">{t('footer.made_with')}</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
