// @ts-nocheck
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { ExternalLink, AlertTriangle } from 'lucide-react';

const PLATFORMS = [
  {
    id: 'pc',
    name: 'PC (Rockstar)',
    url: 'https://www.instant-gaming.com/fr/2462-acheter-grand-theft-auto-vi-pc-rockstar/?igr=gamer-9c3b7dc',
    color: '#FF1493',
    available: true,
    priceLabel: { fr: 'Voir le prix', en: 'See price', es: 'Ver precio', pt: 'Ver preço', it: 'Vedi prezzo', ko: '가격 보기' },
  },
  {
    id: 'ps5',
    name: 'PlayStation 5',
    url: 'https://www.instant-gaming.com/fr/15506-acheter-grand-theft-auto-vi-playstation-5-playstation-store/?igr=gamer-9c3b7dc',
    color: '#0070D1',
    available: true,
    priceLabel: { fr: 'Voir le prix', en: 'See price', es: 'Ver precio', pt: 'Ver preço', it: 'Vedi prezzo', ko: '가격 보기' },
  },
  {
    id: 'xbox',
    name: 'Xbox Series X|S',
    url: 'https://www.instant-gaming.com/fr/15505-acheter-grand-theft-auto-vi-xbox-series-x-s-microsoft-store/?igr=gamer-9c3b7dc',
    color: '#107C10',
    available: true,
    priceLabel: { fr: 'Voir le prix', en: 'See price', es: 'Ver precio', pt: 'Ver preço', it: 'Vedi prezzo', ko: '가격 보기' },
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
    <>
      <SEOHead
        title={lang === 'fr' ? 'Acheter GTA VI | Precommander' : lang === 'es' ? 'Comprar GTA VI | Reservar' : 'Buy GTA VI | Pre-Order'}
        description={lang === 'fr' ? 'Precommandez GTA VI pour PS5, Xbox Series X|S et PC au meilleur prix. Sortie le 19 novembre 2026.' : 'Pre-order GTA VI for PS5, Xbox Series X|S and PC at the best price. Release November 19, 2026.'}
        path="/buy"
        lang={lang}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a000f 0%, #1a0025 50%, #0a000f 100%)' }}>
        <div className="max-w-3xl mx-auto text-center pb-20">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4" style={{ color: '#FF1493', textShadow: '0 0 40px rgba(255, 20, 147, 0.5)' }}>
              {t('buy.cta.title')}
            </h1>
            <p className="text-lg mb-12" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {t('buy.cta.desc')}
            </p>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {PLATFORMS.map(p => (
              <RevealOnScroll key={p.id}>
                {p.available ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block p-8 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}44` }}
                  >
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'white' }}>{p.name}</h2>
                    <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {lang === 'fr' ? '19 novembre 2026' : lang === 'es' ? '19 de noviembre de 2026' : 'November 19, 2026'}
                    </p>
                    <span className="inline-flex items-center gap-2 px-6 py-2 text-xs font-bold tracking-wider rounded" style={{ background: p.color, color: 'white' }}>
                      {(p.priceLabel as any)[lang] || p.priceLabel.en}
                      <ExternalLink size={14} />
                    </span>
                  </a>
                ) : (
                  <div
                    className="block p-8 rounded-xl opacity-60"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}22` }}
                  >
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'white' }}>{p.name}</h2>
                    <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {lang === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
                    </p>
                  </div>
                )}
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-16 p-5 rounded-lg flex items-start gap-3 text-left" style={{ background: 'rgba(255, 20, 147, 0.03)', border: '1px solid rgba(255, 20, 147, 0.15)' }}>
            <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#FF1493' }} />
            <div>
              <p className="text-xs font-bold tracking-wider mb-1" style={{ color: '#FF1493' }}>{(disclaimerTitle as any)[lang] || disclaimerTitle.en}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{(disclaimerText as any)[lang] || disclaimerText.en}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Buy;
