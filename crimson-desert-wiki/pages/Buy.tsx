// @ts-nocheck
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import { seo } from '@/crimson-desert-wiki/lib/seo';
import { ExternalLink, Monitor, Gamepad2, AlertTriangle } from 'lucide-react';

const combatAction = '/crimson-desert/combat-action.jpg';

const PLATFORMS = [
  {
    id: 'pc',
    icon: Monitor,
    name: 'PC / Mac (Steam)',
    edition: 'Deluxe Edition',
    url: 'https://www.instant-gaming.com/fr/21082-acheter-crimson-desert-deluxe-edition-pc-mac-steam/?igr=gamer-9c3b7dc',
    available: true,
    priceLabel: { fr: 'Voir le prix', en: 'See price', es: 'Ver precio', it: 'Vedi prezzo' },
  },
  {
    id: 'ps5',
    icon: Gamepad2,
    name: 'PlayStation 5',
    edition: 'Deluxe Edition',
    url: '',
    available: false,
    priceLabel: { fr: 'Bientôt disponible', en: 'Coming soon', es: 'Próximamente', it: 'Prossimamente' },
  },
  {
    id: 'xbox',
    icon: Gamepad2,
    name: 'Xbox Series X|S / PC',
    edition: 'Deluxe Edition (Microsoft Store)',
    url: 'https://www.instant-gaming.com/fr/21853-acheter-crimson-desert-deluxe-edition-xbox-series-x-s-pc-microsoft-store/?igr=gamer-9c3b7dc',
    available: true,
    priceLabel: { fr: 'Voir le prix', en: 'See price', es: 'Ver precio', it: 'Vedi prezzo' },
  },
];

const Buy = () => {
  const { t, lang } = useI18n();

  const heading = {
    fr: 'ACHETER CRIMSON DESERT',
    en: 'BUY CRIMSON DESERT',
    es: 'COMPRAR CRIMSON DESERT',
    it: 'ACQUISTA CRIMSON DESERT',
  };

  const subtitle = {
    fr: 'Obtenez Crimson Desert au meilleur prix sur la plateforme de votre choix. Sortie le 19 mars 2026.',
    en: 'Get Crimson Desert at the best price on your platform of choice. Releasing March 19, 2026.',
    es: 'Obtén Crimson Desert al mejor precio en la plataforma de tu elección. Lanzamiento el 19 de marzo de 2026.',
    it: 'Ottieni Crimson Desert al miglior prezzo sulla piattaforma che preferisci. Uscita il 19 marzo 2026.',
  };

  const disclaimerTitle = {
    fr: 'Liens d\'affiliation',
    en: 'Affiliate links',
    es: 'Enlaces de afiliación',
    it: 'Link di affiliazione',
  };

  const disclaimerText = {
    fr: 'Les liens ci-dessus sont des liens d\'affiliation. En achetant via ces liens, vous soutenez ce wiki fan sans surcoût pour vous. Merci ! ❤️',
    en: 'The links above are affiliate links. By purchasing through these links, you support this fan wiki at no extra cost to you. Thank you! ❤️',
    es: 'Los enlaces anteriores son enlaces de afiliación. Al comprar a través de ellos, apoyas esta wiki fan sin costo adicional. ¡Gracias! ❤️',
    it: 'I link sopra sono link di affiliazione. Acquistando tramite questi link, sostieni questa wiki fan senza costi aggiuntivi. Grazie! ❤️',
  };

  const features = {
    fr: ['Monde ouvert massif', 'Combat dynamique', 'Histoire en 5 chapitres', '3 personnages jouables'],
    en: ['Massive open world', 'Dynamic combat', '5-chapter story', '3 playable characters'],
    es: ['Mundo abierto masivo', 'Combate dinámico', 'Historia en 5 capítulos', '3 personajes jugables'],
    it: ['Mondo aperto massiccio', 'Combattimento dinamico', 'Storia in 5 capitoli', '3 personaggi giocabili'],
  };

  return (
    <main id="main-content" className="relative z-10">
      <SEOHead
        title={seo.buy.title[lang]}
        description={seo.buy.desc[lang]}
        path="/buy"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.buy[lang], path: '/buy' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Crimson Desert',
          description: seo.buy.desc[lang],
          brand: { '@type': 'Organization', name: 'Pearl Abyss' },
          category: 'Video Game',
          releaseDate: '2026-03-19',
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" aria-label="Buy Hero">
        <img
          src={combatAction}
          alt="Crimson Desert combat — © Pearl Abyss"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <RevealOnScroll>
            <p className="font-ui text-[0.65rem] tracking-[0.35em] text-crimson-bright mb-4">PEARL ABYSS · 19 MARS 2026</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gold-bright leading-tight mb-6">
              {heading[lang]}
            </h1>
            <p className="font-body text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              {subtitle[lang]}
            </p>
          </RevealOnScroll>

          {/* Features pills */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {features[lang].map((f) => (
                <span key={f} className="px-4 py-2 rounded-full border border-border-gold/30 font-ui text-[0.7rem] tracking-wider text-gold-mid bg-raised/50">
                  {f}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="relative z-10 py-16 px-4" aria-label={heading[lang]}>
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <GoldDivider variant="section" title={lang === 'fr' ? 'Choisissez votre plateforme' : lang === 'es' ? 'Elige tu plataforma' : lang === 'it' ? 'Scegli la tua piattaforma' : 'Choose your platform'} />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {PLATFORMS.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <RevealOnScroll key={platform.id} stagger={i * 150}>
                  <div className={`relative rounded-xl border overflow-hidden transition-all duration-300 h-full flex flex-col
                    ${platform.available
                      ? 'border-border-gold/40 bg-card hover:border-gold-mid/60 hover:shadow-[0_0_40px_hsl(var(--gold-glow))] group'
                      : 'border-border/30 bg-surface opacity-60'
                    }`}
                  >
                    {/* Glow top line */}
                    {platform.available && (
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-mid to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}

                    <div className="p-6 sm:p-8 flex flex-col items-center text-center flex-1">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5
                        ${platform.available ? 'bg-crimson-deep/40 text-crimson-bright' : 'bg-smoke-mid/30 text-text-muted-custom'}`}>
                        <Icon size={28} />
                      </div>

                      <h2 className="font-heading text-lg tracking-[0.1em] text-gold-bright mb-1">{platform.name}</h2>
                      <p className="font-ui text-[0.65rem] tracking-wider text-text-muted-custom mb-6">{platform.edition}</p>

                      {platform.available ? (
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-sm tracking-[0.1em] transition-all duration-300
                            bg-gradient-to-r from-crimson-deep to-crimson-core text-sand-pale
                            hover:from-crimson-core hover:to-crimson-bright hover:shadow-[0_0_25px_hsl(var(--crimson-glow-strong))]"
                        >
                          {(platform.priceLabel as any)[lang]}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-sm tracking-[0.1em] text-text-muted-custom border border-border/30 cursor-not-allowed">
                          {(platform.priceLabel as any)[lang]}
                        </span>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* Affiliate disclaimer */}
          <RevealOnScroll>
            <div className="mt-12 p-5 rounded-lg border border-border-gold/20 bg-raised/30 flex items-start gap-3 max-w-2xl mx-auto">
              <AlertTriangle size={18} className="text-gold-mid flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading text-xs tracking-[0.1em] text-gold-mid mb-1">{disclaimerTitle[lang]}</p>
                <p className="font-body text-sm text-text-secondary leading-relaxed">{disclaimerText[lang]}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

export default Buy;
