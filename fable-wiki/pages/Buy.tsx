// @ts-nocheck
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Buy = () => {
  const { t, lang } = useI18n();

  const platforms = [
    {
      name: 'Xbox Series X|S',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
        </svg>
      ),
      url: 'https://www.xbox.com/en-US/games/fable',
    },
    {
      name: 'PlayStation 5',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z" />
        </svg>
      ),
      url: 'https://store.playstation.com',
    },
    {
      name: 'PC (Steam)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm-6-4h8v2h-8v-2z" />
        </svg>
      ),
      url: 'https://store.steampowered.com',
    },
  ];

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
          {platforms.map((platform, i) => (
            <RevealOnScroll key={platform.name} stagger={i * 150}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] p-6 text-center hover:border-emerald-700/50 hover:bg-emerald-900/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">{platform.icon}</div>
                  <h3 className="font-heading text-base text-emerald-400 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all">{platform.name}</h3>
                  <span className="font-body text-xs text-yellow-500 mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('buy.cta.button')} <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Disclaimer */}
        <RevealOnScroll>
          <div className="mt-8 text-center">
            <p className="font-body text-[0.65rem] text-gray-600 leading-relaxed">
              {lang === 'fr'
                ? "Les liens ci-dessus redirigent vers les plateformes officielles. Ce site n'est pas affilie a Xbox Game Studios ni a Playground Games."
                : "Links above redirect to official platforms. This site is not affiliated with Xbox Game Studios or Playground Games."
              }
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default Buy;
