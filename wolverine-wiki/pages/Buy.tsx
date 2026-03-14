// @ts-nocheck
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const BuyPage = () => {
  const { t, lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.buy.title[lang]}
        description={seo.buy.desc[lang]}
        path="/buy"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.buy[lang], path: '/buy' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('buy.cta.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.buy.title[lang]}</h1>

        <RevealOnScroll className="mt-8">
          <div className="relative rounded-xl overflow-hidden border border-yellow-500/30" style={{ boxShadow: '0 0 60px rgba(234,179,8,0.15)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-gray-900 to-gray-900" />
            <div className="relative z-10 py-16 px-8 text-center">
              <h2 className="font-display text-3xl sm:text-4xl text-gold-bright mb-4">{t('buy.cta.title')}</h2>
              <p className="font-body text-lg text-text-secondary mb-8 max-w-lg mx-auto">{t('buy.cta.desc')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://store.playstation.com/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-heading text-sm tracking-[0.15em] bg-gradient-to-r from-yellow-700 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-300">
                  PlayStation Store →
                </a>
              </div>
              <p className="font-ui text-xs text-text-muted-custom mt-8">
                {lang === 'fr' ? "Exclusivite PlayStation 5 · Sortie le 15 septembre 2026" : "PlayStation 5 Exclusive · Releasing September 15, 2026"}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface/50 border border-border rounded-lg p-6">
              <h3 className="font-heading text-lg text-gold-bright mb-3">{lang === 'fr' ? 'Edition Standard' : 'Standard Edition'}</h3>
              <ul className="space-y-2">
                <li className="font-body text-sm text-text-secondary flex items-center gap-2"><span className="text-yellow-500">✓</span> {lang === 'fr' ? 'Jeu complet' : 'Full game'}</li>
                <li className="font-body text-sm text-text-secondary flex items-center gap-2"><span className="text-yellow-500">✓</span> {lang === 'fr' ? 'Costume classique' : 'Classic suit'}</li>
              </ul>
            </div>
            <div className="bg-surface/50 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="font-heading text-lg text-gold-bright mb-3">{lang === 'fr' ? 'Edition Deluxe' : 'Deluxe Edition'}</h3>
              <ul className="space-y-2">
                <li className="font-body text-sm text-text-secondary flex items-center gap-2"><span className="text-yellow-500">✓</span> {lang === 'fr' ? 'Jeu complet' : 'Full game'}</li>
                <li className="font-body text-sm text-text-secondary flex items-center gap-2"><span className="text-yellow-500">✓</span> {lang === 'fr' ? 'Costumes bonus' : 'Bonus suits'}</li>
                <li className="font-body text-sm text-text-secondary flex items-center gap-2"><span className="text-yellow-500">✓</span> {lang === 'fr' ? 'Artbook numerique' : 'Digital artbook'}</li>
                <li className="font-body text-sm text-text-secondary flex items-center gap-2"><span className="text-yellow-500">✓</span> {lang === 'fr' ? 'Acces anticipe' : 'Early access'}</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default BuyPage;
