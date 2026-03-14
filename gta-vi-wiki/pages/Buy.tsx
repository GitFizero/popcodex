// @ts-nocheck
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';

const Buy = () => {
  const { t, lang } = useI18n();

  const platforms = [
    {
      name: 'PlayStation 5',
      icon: 'PS5',
      link: 'https://store.playstation.com',
      color: '#0070D1',
    },
    {
      name: 'Xbox Series X|S',
      icon: 'XBOX',
      link: 'https://www.xbox.com',
      color: '#107C10',
    },
  ];

  return (
    <>
      <SEOHead
        title={lang === 'fr' ? 'Acheter GTA VI | Precommander' : lang === 'es' ? 'Comprar GTA VI | Reservar' : 'Buy GTA VI | Pre-Order'}
        description={lang === 'fr' ? 'Precommandez GTA VI pour PS5 et Xbox Series X|S. Sortie le 19 novembre 2026.' : 'Pre-order GTA VI for PS5 and Xbox Series X|S. Release November 19, 2026.'}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {platforms.map(p => (
              <RevealOnScroll key={p.name}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 rounded-xl transition-all duration-300"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}44` }}
                >
                  <div className="text-3xl font-black mb-3" style={{ color: p.color }}>{p.icon}</div>
                  <h2 className="text-lg font-bold mb-2" style={{ color: 'white' }}>{p.name}</h2>
                  <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {lang === 'fr' ? '19 novembre 2026' : lang === 'es' ? '19 de noviembre de 2026' : 'November 19, 2026'}
                  </p>
                  <span className="inline-block px-6 py-2 text-xs font-bold tracking-wider rounded" style={{ background: p.color, color: 'white' }}>
                    {t('buy.cta.button')}
                  </span>
                </a>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-lg" style={{ background: 'rgba(255, 20, 147, 0.03)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {lang === 'fr'
                ? "Ce site est une encyclopedie fan non officielle. Les liens de precommande menent vers les boutiques officielles des plateformes. Ce site n'est pas affilie a Rockstar Games ou Take-Two Interactive."
                : lang === 'es'
                ? 'Este sitio es una enciclopedia fan no oficial. Los enlaces de reserva llevan a las tiendas oficiales. No afiliado a Rockstar Games.'
                : "This is an unofficial fan encyclopedia. Pre-order links lead to official platform stores. Not affiliated with Rockstar Games or Take-Two Interactive."}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Buy;
