// @ts-nocheck
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';
import { ExternalLink, AlertTriangle } from 'lucide-react';

const PLATFORMS = [
  {
    id: 'pc',
    name: 'PC (Steam)',
    url: 'https://www.instant-gaming.com/fr/7187-acheter-fable-pc-steam/?igr=gamer-9c3b7dc',
    available: true,
    priceLabel: { fr: 'Voir le prix', en: 'See price', es: 'Ver precio', pt: 'Ver preço', it: 'Vedi prezzo', ko: '가격 보기' },
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm-6-4h8v2h-8v-2z" />
      </svg>
    ),
  },
  {
    id: 'xbox',
    name: 'Xbox Series X|S',
    url: '',
    available: false,
    priceLabel: { fr: 'Bientôt disponible', en: 'Coming soon', es: 'Próximamente', pt: 'Em breve', it: 'Prossimamente', ko: '곧 출시' },
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 'ps5',
    name: 'PlayStation 5',
    url: '',
    available: false,
    priceLabel: { fr: 'Bientôt disponible', en: 'Coming soon', es: 'Próximamente', pt: 'Em breve', it: 'Prossimamente', ko: '곧 출시' },
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z" />
      </svg>
    ),
  },
];

const Buy = () => {
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
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
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

      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('buy.cta.title')} />
        </RevealOnScroll>

        {/* Hero CTA */}
        <RevealOnScroll>
          <div className="mt-8 relative rounded-xl overflow-hidden border border-emerald-700/30" style={{ boxShadow: '0 0 60px rgba(34, 197, 94, 0.15)' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(150,30%,8%) 0%, hsl(150,30%,3%) 50%, hsl(150,30%,8%) 100%)' }} />
            <div className="relative z-10 py-16 px-6 sm:px-10 text-center">
              <h2 className="font-display text-3xl sm:text-4xl text-emerald-400 mb-4">{t('buy.cta.title')}</h2>
              <p className="font-body text-base text-gray-400 mb-8 max-w-lg mx-auto">{t('buy.cta.desc')}</p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {PLATFORMS.map((platform, i) => (
            <RevealOnScroll key={platform.id} stagger={i * 150}>
              {platform.available ? (
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block group"
                >
                  <div className="rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] p-6 text-center hover:border-emerald-700/50 hover:bg-emerald-900/10 transition-all duration-300">
                    <div className="flex justify-center mb-4">{platform.icon}</div>
                    <h3 className="font-heading text-base text-emerald-400 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all">{platform.name}</h3>
                    <span className="font-body text-xs text-yellow-500 mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {(platform.priceLabel as any)[lang] || platform.priceLabel.en} <ExternalLink size={12} /> <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                    </span>
                  </div>
                </a>
              ) : (
                <div className="block opacity-60">
                  <div className="rounded-lg border border-emerald-900/20 bg-[hsl(150,30%,5%)] p-6 text-center">
                    <div className="flex justify-center mb-4">{platform.icon}</div>
                    <h3 className="font-heading text-base text-emerald-400">{platform.name}</h3>
                    <span className="font-body text-xs text-gray-500 mt-3 inline-block">
                      {(platform.priceLabel as any)[lang] || platform.priceLabel.en}
                    </span>
                  </div>
                </div>
              )}
            </RevealOnScroll>
          ))}
        </div>

        {/* Affiliate disclaimer */}
        <RevealOnScroll>
          <div className="mt-8 p-5 rounded-lg border border-emerald-700/20 bg-emerald-900/5 flex items-start gap-3">
            <AlertTriangle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-xs tracking-[0.1em] text-emerald-500 mb-1">{(disclaimerTitle as any)[lang] || disclaimerTitle.en}</p>
              <p className="font-body text-sm text-gray-400 leading-relaxed">{(disclaimerText as any)[lang] || disclaimerText.en}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default Buy;
