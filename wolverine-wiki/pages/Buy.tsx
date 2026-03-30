// @ts-nocheck
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';
import { ExternalLink, AlertTriangle } from 'lucide-react';

const BuyPage = () => {
  const { t, lang } = useI18n();

  const disclaimerTitle = {
    fr: 'Liens d\'affiliation',
    en: 'Affiliate links',
    es: 'Enlaces de afiliación',
    pt: 'Links de afiliação',
    it: 'Link di affiliazione',
    ko: '제휴 링크',
  };

  const disclaimerText = {
    fr: 'Les liens ci-dessus sont des liens d\'affiliation. En achetant via ces liens, vous soutenez ce wiki fan sans surcoût pour vous. Merci ! ❤️',
    en: 'The links above are affiliate links. By purchasing through these links, you support this fan wiki at no extra cost to you. Thank you! ❤️',
    es: 'Los enlaces anteriores son enlaces de afiliación. Al comprar a través de ellos, apoyas esta wiki fan sin costo adicional. ¡Gracias! ❤️',
    pt: 'Os links acima são links de afiliação. Ao comprar através destes links, você apoia esta wiki fan sem custo adicional. Obrigado! ❤️',
    it: 'I link sopra sono link di affiliazione. Acquistando tramite questi link, sostieni questa wiki fan senza costi aggiuntivi. Grazie! ❤️',
    ko: '위 링크는 제휴 링크입니다. 이 링크를 통해 구매하시면 추가 비용 없이 이 팬 위키를 지원하실 수 있습니다. 감사합니다! ❤️',
  };

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
                <a href="https://www.instant-gaming.com/fr/13543-acheter-marvel-s-wolverine-playstation-5-playstation-store/?igr=gamer-9c3b7dc" target="_blank" rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-heading text-sm tracking-[0.15em] bg-gradient-to-r from-yellow-700 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all duration-300">
                  {lang === 'fr' ? 'Voir le prix — PlayStation 5' : lang === 'es' ? 'Ver precio — PlayStation 5' : 'See price — PlayStation 5'}
                  <ExternalLink size={14} />
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

        {/* Affiliate disclaimer */}
        <RevealOnScroll className="mt-12">
          <div className="p-5 rounded-lg border border-yellow-500/20 bg-yellow-900/5 flex items-start gap-3">
            <AlertTriangle size={18} className="text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-xs tracking-[0.1em] text-yellow-500 mb-1">{(disclaimerTitle as any)[lang] || disclaimerTitle.en}</p>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{(disclaimerText as any)[lang] || disclaimerText.en}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default BuyPage;
