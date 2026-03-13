'use client';

import Link from 'next/link';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import { Monitor, Gamepad2, ExternalLink, ShieldCheck, Tag, Clock } from 'lucide-react';

const AFFILIATE_LINKS = {
  pc: 'https://www.instant-gaming.com/fr/2462-acheter-grand-theft-auto-vi-pc-rockstar/?igr=gamer-9c3b7dc',
  ps5: 'https://www.instant-gaming.com/fr/15506-acheter-grand-theft-auto-vi-playstation-5-playstation-store/?igr=gamer-9c3b7dc',
  xbox: 'https://www.instant-gaming.com/fr/15505-acheter-grand-theft-auto-vi-xbox-series-x-s-microsoft-store/?igr=gamer-9c3b7dc',
};

const platforms = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    icon: Gamepad2,
    color: 'neon-cyan',
    link: AFFILIATE_LINKS.ps5,
    badge: { fr: 'JOUR 1', en: 'DAY 1', es: 'DÍA 1', it: 'GIORNO 1' },
  },
  {
    id: 'xbox',
    name: 'Xbox Series X|S',
    icon: Gamepad2,
    color: 'neon-green',
    link: AFFILIATE_LINKS.xbox,
    badge: { fr: 'JOUR 1', en: 'DAY 1', es: 'DÍA 1', it: 'GIORNO 1' },
  },
  {
    id: 'pc',
    name: 'PC (Rockstar)',
    icon: Monitor,
    color: 'neon-orange',
    link: AFFILIATE_LINKS.pc,
    badge: { fr: 'BIENTÔT', en: 'COMING SOON', es: 'PRÓXIMAMENTE', it: 'PROSSIMAMENTE' },
  },
];

const BuyGame = ({ locale }: { locale: string }) => {
  const { lang, t } = useGtaI18n(locale);

  const title = {
    fr: 'Acheter GTA 6 — Meilleur Prix PS5, Xbox Series & PC | Leonida Wiki',
    en: 'Buy GTA 6 — Best Price PS5, Xbox Series & PC | Leonida Wiki',
    es: 'Comprar GTA 6 — Mejor Precio PS5, Xbox Series & PC | Leonida Wiki',
    it: 'Acquista GTA 6 — Miglior Prezzo PS5, Xbox Series & PC | Leonida Wiki',
  };

  const description = {
    fr: 'Achetez Grand Theft Auto VI au meilleur prix sur PS5, Xbox Series X|S et PC. Comparez les prix, trouvez les meilleures offres pour GTA 6. Date de sortie : 19 novembre 2026.',
    en: 'Buy Grand Theft Auto VI at the best price on PS5, Xbox Series X|S and PC. Compare prices, find the best deals for GTA 6. Release date: November 19, 2026.',
    es: 'Compra Grand Theft Auto VI al mejor precio en PS5, Xbox Series X|S y PC. Compara precios, encuentra las mejores ofertas para GTA 6. Fecha de lanzamiento: 19 de noviembre de 2026.',
    it: 'Acquista Grand Theft Auto VI al miglior prezzo su PS5, Xbox Series X|S e PC. Confronta i prezzi, trova le migliori offerte per GTA 6. Data di uscita: 19 novembre 2026.',
  };

  const heading = {
    fr: 'ACHETER GTA VI',
    en: 'BUY GTA VI',
    es: 'COMPRAR GTA VI',
    it: 'ACQUISTA GTA VI',
  };

  const subtitle = {
    fr: 'Précommandez Grand Theft Auto VI au meilleur prix. Sortie le 19 novembre 2026.',
    en: 'Pre-order Grand Theft Auto VI at the best price. Release date November 19, 2026.',
    es: 'Reserva Grand Theft Auto VI al mejor precio. Lanzamiento el 19 de noviembre de 2026.',
    it: 'Preordina Grand Theft Auto VI al miglior prezzo. Uscita il 19 novembre 2026.',
  };

  const ctaText = {
    fr: 'ACHETER MAINTENANT',
    en: 'BUY NOW',
    es: 'COMPRAR AHORA',
    it: 'ACQUISTA ORA',
  };

  const faqData = [
    {
      q: { fr: 'Quel est le prix de GTA 6 ?', en: 'What is the price of GTA 6?', es: '¿Cuál es el precio de GTA 6?', it: 'Qual è il prezzo di GTA 6?' },
      a: { fr: 'Le prix officiel de GTA VI est de 79,99€ sur PS5 et Xbox Series. Sur Instant Gaming, vous pouvez le trouver à prix réduit. Le prix PC sera annoncé ultérieurement.', en: 'The official price of GTA VI is $69.99/€79.99 on PS5 and Xbox Series. On Instant Gaming, you can find it at a discounted price. PC price will be announced later.', es: 'El precio oficial de GTA VI es de 79,99€ en PS5 y Xbox Series. En Instant Gaming puedes encontrarlo a precio reducido. El precio de PC se anunciará más tarde.', it: 'Il prezzo ufficiale di GTA VI è di 79,99€ su PS5 e Xbox Series. Su Instant Gaming puoi trovarlo a prezzo ridotto. Il prezzo PC sarà annunciato successivamente.' },
    },
    {
      q: { fr: 'Quand sort GTA 6 ?', en: 'When does GTA 6 come out?', es: '¿Cuándo sale GTA 6?', it: 'Quando esce GTA 6?' },
      a: { fr: 'GTA VI sort le 19 novembre 2026 sur PS5 et Xbox Series X|S. La version PC n\'a pas encore de date confirmée.', en: 'GTA VI releases on November 19, 2026 on PS5 and Xbox Series X|S. The PC version does not have a confirmed date yet.', es: 'GTA VI sale el 19 de noviembre de 2026 en PS5 y Xbox Series X|S. La versión de PC aún no tiene fecha confirmada.', it: 'GTA VI esce il 19 novembre 2026 su PS5 e Xbox Series X|S. La versione PC non ha ancora una data confermata.' },
    },
    {
      q: { fr: 'GTA 6 sort-il sur PC ?', en: 'Is GTA 6 coming to PC?', es: '¿GTA 6 sale en PC?', it: 'GTA 6 esce su PC?' },
      a: { fr: 'Oui, GTA VI sortira sur PC (via Rockstar Games Launcher). La date exacte n\'est pas encore confirmée mais une sortie quelques mois après les consoles est attendue, comme pour GTA V.', en: 'Yes, GTA VI will come to PC (via Rockstar Games Launcher). The exact date is not yet confirmed but a release a few months after consoles is expected, similar to GTA V.', es: 'Sí, GTA VI saldrá en PC (vía Rockstar Games Launcher). La fecha exacta aún no está confirmada, pero se espera un lanzamiento unos meses después de las consolas, como con GTA V.', it: 'Sì, GTA VI uscirà su PC (tramite Rockstar Games Launcher). La data esatta non è ancora confermata ma è prevista un\'uscita qualche mese dopo le console, come per GTA V.' },
    },
  ];

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('inline.home'), item: 'https://leonidawiki.com/' },
      { '@type': 'ListItem', position: 2, name: heading[lang] },
    ],
  };

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Grand Theft Auto VI',
    description: description[lang],
    brand: { '@type': 'Brand', name: 'Rockstar Games' },
    category: 'Video Game',
    releaseDate: '2026-11-19',
    offers: [
      {
        '@type': 'Offer',
        url: AFFILIATE_LINKS.ps5,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/PreOrder',
        itemCondition: 'https://schema.org/NewCondition',
        seller: { '@type': 'Organization', name: 'Instant Gaming' },
      },
      {
        '@type': 'Offer',
        url: AFFILIATE_LINKS.xbox,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/PreOrder',
        itemCondition: 'https://schema.org/NewCondition',
        seller: { '@type': 'Organization', name: 'Instant Gaming' },
      },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(f => ({
      '@type': 'Question',
      name: f.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
    })),
  };

  const trustPoints = {
    fr: ['Livraison instantanée par email', 'Paiement sécurisé', 'Meilleur prix garanti'],
    en: ['Instant delivery by email', 'Secure payment', 'Best price guaranteed'],
    es: ['Entrega instantánea por email', 'Pago seguro', 'Mejor precio garantizado'],
    it: ['Consegna istantanea via email', 'Pagamento sicuro', 'Miglior prezzo garantito'],
  };

  const affiliateNotice = {
    fr: 'Ce site participe au programme d\'affiliation Instant Gaming. En achetant via nos liens, vous soutenez ce wiki fan sans surcoût pour vous.',
    en: 'This site participates in the Instant Gaming affiliate program. By purchasing through our links, you support this fan wiki at no extra cost to you.',
    es: 'Este sitio participa en el programa de afiliados de Instant Gaming. Al comprar a través de nuestros enlaces, apoyas esta wiki fan sin coste adicional.',
    it: 'Questo sito partecipa al programma di affiliazione Instant Gaming. Acquistando tramite i nostri link, supporti questa wiki fan senza costi aggiuntivi.',
  };

  return (
    <div className="relative">
      <main className="pt-20 pb-16 px-4">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-rajdhani text-[0.6rem] tracking-[0.4em] text-neon-cyan mb-4">ROCKSTAR GAMES · 19.11.2026</p>
          <h1 className="font-bebas text-[clamp(2.5rem,8vw,5rem)] neon-pink-text leading-none mb-4">
            {heading[lang]}
          </h1>
          <p className="font-barlow font-light italic text-sm text-text-secondary max-w-xl mx-auto">
            {subtitle[lang]}
          </p>
        </section>

        {/* Platform Cards */}
        <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5 mb-16">
          {platforms.map(p => {
            const Icon = p.icon;
            return (
              <a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`group relative bg-[hsl(213,33%,13%)] rounded-xl p-6 border border-${p.color}/15 hover:border-${p.color}/40 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--${p.color})/0.15)] flex flex-col items-center text-center`}
              >
                <div className={`w-16 h-16 rounded-full bg-${p.color}/10 flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 text-${p.color}`} />
                </div>
                <h2 className={`font-bebas text-2xl text-${p.color} mb-2`}>{p.name}</h2>
                <span className={`inline-block font-rajdhani text-[0.5rem] px-2 py-0.5 rounded-full border border-${p.color}/30 text-${p.color} tracking-widest mb-4`}>
                  {p.badge[lang]}
                </span>
                <span className={`font-barlow font-semibold text-xs px-5 py-2.5 rounded bg-${p.color} text-bg-void group-hover:shadow-[0_0_20px_hsl(var(--${p.color})/0.4)] transition-all flex items-center gap-2`}>
                  {ctaText[lang]} <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            );
          })}
        </section>

        {/* Trust signals */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {[ShieldCheck, Tag, Clock].map((Icon, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-neon-cyan" />
                <span className="font-rajdhani text-xs text-text-secondary tracking-wider">{trustPoints[lang][i]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto mb-16">
          <h2 className="font-bebas text-2xl sm:text-3xl text-text-primary text-center mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-[hsl(213,33%,13%)] rounded-lg border border-neon-cyan/10 group">
                <summary className="font-barlow font-semibold text-sm text-text-primary p-4 cursor-pointer hover:text-neon-cyan transition-colors list-none flex justify-between items-center">
                  {faq.q[lang]}
                  <span className="text-neon-cyan text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-4 pb-4">
                  <p className="font-dm text-xs text-text-secondary leading-relaxed">{faq.a[lang]}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Affiliate notice */}
        <section className="max-w-2xl mx-auto text-center mb-8">
          <p className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest leading-relaxed">
            {affiliateNotice[lang]}
          </p>
        </section>

        {/* Disclaimer */}
        <section className="py-6 px-4 text-center border-t border-neon-pink/10">
          <p className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest leading-relaxed max-w-2xl mx-auto">
            {t('footer.disclaimer')}
          </p>
        </section>
      </main>
    </div>
  );
};

export default BuyGame;
