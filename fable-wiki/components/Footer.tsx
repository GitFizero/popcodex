import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '@/fable-wiki/context/AppContext';
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RuneDivider from './RuneDivider';

const Footer = memo(() => {
  const { toggleStorybookMode, storybookMode } = useApp();
  const { t } = useI18n();

  return (
    <footer className="relative z-10 bg-[hsl(150,30%,5%)] border-t border-emerald-900/30" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <RuneDivider variant="short" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="font-display text-lg text-emerald-400 mb-3">Fable Wiki</h3>
            <p className="font-body text-sm text-gray-400 leading-relaxed">{t('footer.desc')}</p>
            <p className="font-body text-[0.55rem] text-gray-600 mt-2">{t('about.images_credit')}</p>
          </div>
          <div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-emerald-500/80 mb-3">{t('footer.navigation')}</h4>
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
                <Link key={l.to} to={l.to} className="font-body text-sm text-gray-400 hover:text-emerald-400 transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-emerald-500/80 mb-3">{t('footer.official')}</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.xbox.com/en-US/games/fable" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-gray-400 hover:text-emerald-400 transition-colors">{t('footer.official_site')} ↗</a>
              <a href="https://www.playgroundgames.com/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-gray-400 hover:text-emerald-400 transition-colors">Playground Games ↗</a>
            </div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-emerald-500/80 mb-3 mt-6">{t('footer.legal')}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="font-body text-sm text-gray-400 hover:text-emerald-400 transition-colors">{t('footer.privacy')}</Link>
              <Link to="/about#contact" className="font-body text-sm text-gray-400 hover:text-emerald-400 transition-colors">{t('footer.contact')}</Link>
            </div>
            <div className="mt-4">
              <button onClick={toggleStorybookMode} className="font-body text-xs tracking-wider text-gray-600 hover:text-emerald-500 transition-colors" aria-label="Toggle storybook mode">
                {storybookMode ? t('footer.dark_mode') : t('footer.storybook')}
              </button>
            </div>
          </div>
        </div>
        <RuneDivider variant="short" className="mt-8" />
        <div className="mt-6 text-center">
          <p className="font-body text-[0.65rem] tracking-wider text-gray-600 uppercase leading-relaxed">{t('footer.disclaimer')}</p>
          <p className="font-body text-[0.6rem] text-gray-700 mt-2">{t('footer.made_with')}</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
