'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useCrimsonI18n } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';

interface TriviaItem {
  text: Record<string, string>;
}

const triviaItems: TriviaItem[] = [
  {
    text: {
      en: 'Crimson Desert has been in development for over 7 years, originally announced in 2019 as an MMO before pivoting to a single-player action-RPG.',
      fr: "Crimson Desert est en d\u00E9veloppement depuis plus de 7 ans, initialement annonc\u00E9 en 2019 comme un MMO avant de pivoter vers un action-RPG solo.",
      es: 'Crimson Desert ha estado en desarrollo durante m\u00E1s de 7 a\u00F1os, anunciado originalmente en 2019 como un MMO antes de pivotar hacia un action-RPG para un jugador.',
      it: "Crimson Desert \u00E8 in sviluppo da oltre 7 anni, originariamente annunciato nel 2019 come un MMO prima di diventare un action-RPG single-player.",
      ko: '\uD06C\uB9BC\uC2A8 \uB514\uC800\uD2B8\uB294 7\uB144 \uC774\uC0C1 \uAC1C\uBC1C \uC911\uC774\uBA70, 2019\uB144 MMO\uB85C \uBC1C\uD45C\uB41C \uD6C4 \uC2F1\uAE00\uD50C\uB808\uC774\uC5B4 \uC561\uC158 RPG\uB85C \uC804\uD658\uB418\uC5C8\uC2B5\uB2C8\uB2E4.',
    },
  },
  {
    text: {
      en: 'The game runs on the proprietary BlackSpace Engine, built specifically by Pearl Abyss for next-gen open-world rendering with real-time global illumination.',
      fr: "Le jeu tourne sur le moteur propri\u00E9taire BlackSpace Engine, con\u00E7u sp\u00E9cifiquement par Pearl Abyss pour le rendu open-world next-gen avec illumination globale en temps r\u00E9el.",
      es: 'El juego funciona con el motor propietario BlackSpace Engine, construido espec\u00EDficamente por Pearl Abyss para renderizado de mundo abierto de nueva generaci\u00F3n.',
      it: "Il gioco utilizza il motore proprietario BlackSpace Engine, costruito appositamente da Pearl Abyss per il rendering open-world di nuova generazione.",
      ko: '\uAC8C\uC784\uC740 Pearl Abyss\uAC00 \uCC28\uC138\uB300 \uC624\uD508 \uC6D4\uB4DC \uB80C\uB354\uB9C1\uC744 \uC704\uD574 \uC81C\uC791\uD55C \uC790\uCCB4 \uC5D4\uC9C4 BlackSpace Engine\uC73C\uB85C \uAD6C\uB3D9\uB429\uB2C8\uB2E4.',
    },
  },
  {
    text: {
      en: 'The continent of Pywel features 5 distinct regions, each with unique biomes, cultures, and threats \u2014 from lush green hills to scorching crimson sands.',
      fr: "Le continent de Pywel comprend 5 r\u00E9gions distinctes, chacune avec des biomes, cultures et menaces uniques \u2014 des collines verdoyantes aux sables \u00E9carlates.",
      es: 'El continente de Pywel cuenta con 5 regiones distintas, cada una con biomas, culturas y amenazas \u00FAnicas.',
      it: "Il continente di Pywel presenta 5 regioni distinte, ognuna con biomi, culture e minacce uniche.",
      ko: '\uD30C\uC774\uC6F0 \uB300\uB959\uC5D0\uB294 5\uAC1C\uC758 \uACE0\uC720\uD55C \uC9C0\uC5ED\uC774 \uC788\uC73C\uBA70, \uAC01\uAC01 \uB3C5\uD2B9\uD55C \uC0DD\uD0DC\uACC4, \uBB38\uD654, \uC704\uD611\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.',
    },
  },
  {
    text: {
      en: 'Pearl Abyss is also known for Black Desert Online, and Crimson Desert shares its DNA while being a completely standalone experience.',
      fr: "Pearl Abyss est aussi connu pour Black Desert Online, et Crimson Desert partage son ADN tout en \u00E9tant une exp\u00E9rience compl\u00E8tement ind\u00E9pendante.",
      es: 'Pearl Abyss tambi\u00E9n es conocido por Black Desert Online, y Crimson Desert comparte su ADN mientras es una experiencia completamente independiente.',
      it: "Pearl Abyss \u00E8 noto anche per Black Desert Online, e Crimson Desert condivide il suo DNA pur essendo un'esperienza completamente indipendente.",
      ko: 'Pearl Abyss\uB294 \uAC80\uC740\uC0AC\uB9C9 \uC628\uB77C\uC778\uC73C\uB85C\uB3C4 \uC720\uBA85\uD558\uBA70, \uD06C\uB9BC\uC2A8 \uB514\uC800\uD2B8\uB294 \uADF8 DNA\uB97C \uACF5\uC720\uD558\uBA74\uC11C\uB3C4 \uC644\uC804\uD788 \uB3C5\uB9BD\uB41C \uACBD\uD5D8\uC785\uB2C8\uB2E4.',
    },
  },
  {
    text: {
      en: 'The weapon switching system allows seamless transitions between 8 different weapon types mid-combat, a key innovation in action-RPG design.',
      fr: "Le syst\u00E8me de changement d'arme permet des transitions fluides entre 8 types d'armes en plein combat, une innovation cl\u00E9 en design d'action-RPG.",
      es: 'El sistema de cambio de arma permite transiciones fluidas entre 8 tipos de armas en pleno combate, una innovaci\u00F3n clave en dise\u00F1o de action-RPG.',
      it: "Il sistema di cambio arma permette transizioni fluide tra 8 tipi di armi in pieno combattimento, un'innovazione chiave nel design action-RPG.",
      ko: '\uBB34\uAE30 \uAD50\uCCB4 \uC2DC\uC2A4\uD15C\uC740 \uC804\uD22C \uC911 8\uAC00\uC9C0 \uBB34\uAE30 \uC720\uD615 \uAC04\uC758 \uB04A\uAE40 \uC5C6\uB294 \uC804\uD658\uC744 \uAC00\uB2A5\uD558\uAC8C \uD558\uBA70, \uC561\uC158 RPG \uB514\uC790\uC778\uC758 \uD575\uC2EC \uD601\uC2E0\uC785\uB2C8\uB2E4.',
    },
  },
];

const officialLinks = [
  { label: 'Official Website', url: 'https://www.crimsondesert.com', icon: '\uD83C\uDF0D' },
  { label: 'Pearl Abyss', url: 'https://www.pearlabyss.com', icon: '\uD83C\uDFAE' },
  { label: 'YouTube', url: 'https://www.youtube.com/@CrimsonDesert', icon: '\u25B6\uFE0F' },
  { label: 'X (Twitter)', url: 'https://x.com/CrimsonDesert', icon: '\uD835\uDD4F' },
];

const contributeSteps: Record<string, string[]> = {
  en: [
    'Report inaccuracies or outdated information',
    'Suggest new lore entries or corrections via email',
    'Share screenshots from the official Fan Kit',
    'Help translate content into new languages',
    'Spread the word about this wiki to the community',
  ],
  fr: [
    "Signaler les inexactitudes ou informations obsol\u00E8tes",
    "Sugg\u00E9rer de nouvelles entr\u00E9es de lore ou des corrections par email",
    "Partager des captures d'\u00E9cran du Fan Kit officiel",
    "Aider \u00E0 traduire le contenu dans de nouvelles langues",
    "Faire conna\u00EEtre ce wiki \u00E0 la communaut\u00E9",
  ],
  es: [
    'Reportar inexactitudes o informaci\u00F3n desactualizada',
    'Sugerir nuevas entradas de lore o correcciones por email',
    'Compartir capturas de pantalla del Fan Kit oficial',
    'Ayudar a traducir contenido a nuevos idiomas',
    'Difundir este wiki en la comunidad',
  ],
  it: [
    'Segnalare inesattezze o informazioni obsolete',
    'Suggerire nuove voci di lore o correzioni via email',
    'Condividere screenshot dal Fan Kit ufficiale',
    'Aiutare a tradurre i contenuti in nuove lingue',
    'Diffondere questo wiki nella comunit\u00E0',
  ],
  ko: [
    '\uBD80\uC815\uD655\uD558\uAC70\uB098 \uC624\uB798\uB41C \uC815\uBCF4 \uC2E0\uACE0',
    '\uC774\uBA54\uC77C\uB85C \uC0C8\uB85C\uC6B4 \uB85C\uC5B4 \uD56D\uBAA9\uC774\uB098 \uC218\uC815 \uC0AC\uD56D \uC81C\uC548',
    '\uACF5\uC2DD Fan Kit\uC758 \uC2A4\uD06C\uB9B0\uC0F7 \uACF5\uC720',
    '\uC0C8\uB85C\uC6B4 \uC5B8\uC5B4\uB85C \uCF58\uD150\uCE20 \uBC88\uC5ED \uB3C4\uC6C0',
    '\uCEE4\uBBA4\uB2C8\uD2F0\uC5D0 \uC774 \uC704\uD0A4 \uC54C\uB9AC\uAE30',
  ],
};

const CrimsonAbout = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const prefix = `/${locale}/crimson-desert`;
  const [expandedTrivia, setExpandedTrivia] = useState<number | null>(null);

  const toggleTrivia = useCallback((idx: number) => {
    setExpandedTrivia(prev => prev === idx ? null : idx);
  }, []);

  const steps = contributeSteps[lang] || contributeSteps.en;

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('about.title')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT WIKI</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('about.title')}
              </h1>
              <div className="flex justify-center">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 pb-20">
          {/* Disclaimer */}
          <RevealOnScroll>
            <div className="bg-surface-elevated rounded-lg border border-crimson-bright/30 p-8 mb-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson-bright/60 to-transparent" />
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1 shrink-0">{'\u26A0\uFE0F'}</span>
                <div>
                  <h2 className="font-heading text-base tracking-[0.15em] text-gold-bright mb-3">
                    {t('about.disclaimer.title')}
                  </h2>
                  <p
                    className="font-body text-sm text-text-primary leading-[1.8] mb-3"
                    dangerouslySetInnerHTML={{ __html: t('about.disclaimer.text') }}
                  />
                  <p className="font-body text-xs text-text-secondary leading-relaxed italic">
                    {t('about.disclaimer.sub')}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Mission */}
          <RevealOnScroll>
            <GoldDivider variant="section" title={t('about.mission.title')} />
            <div className="mt-6 bg-surface-elevated rounded-lg border border-border p-8">
              <p className="font-body text-sm text-text-primary leading-[1.8]">
                {t('about.mission.text')}
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: '\uD83D\uDCDA', label: lang === 'fr' ? 'Lore complet' : lang === 'es' ? 'Lore completo' : lang === 'it' ? 'Lore completo' : lang === 'ko' ? '\uC644\uC804\uD55C \uB85C\uC5B4' : 'Complete Lore' },
                  { icon: '\u2694\uFE0F', label: lang === 'fr' ? 'Guides combat' : lang === 'es' ? 'Gu\u00EDas de combate' : lang === 'it' ? 'Guide combattimento' : lang === 'ko' ? '\uC804\uD22C \uAC00\uC774\uB4DC' : 'Combat Guides' },
                  { icon: '\uD83D\uDDFA\uFE0F', label: lang === 'fr' ? 'Carte du monde' : lang === 'es' ? 'Mapa del mundo' : lang === 'it' ? 'Mappa del mondo' : lang === 'ko' ? '\uC138\uACC4 \uC9C0\uB3C4' : 'World Map' },
                  { icon: '\uD83C\uDF10', label: lang === 'fr' ? 'Multilingue' : lang === 'es' ? 'Multiling\u00FCe' : lang === 'it' ? 'Multilingue' : lang === 'ko' ? '\uB2E4\uAD6D\uC5B4' : 'Multilingual' },
                ].map(item => (
                  <div key={item.label} className="text-center p-4 rounded-lg bg-surface border border-border">
                    <span className="text-xl block mb-2">{item.icon}</span>
                    <span className="font-ui text-[0.6rem] tracking-wider text-gold-mid">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* How to Contribute */}
          <RevealOnScroll>
            <GoldDivider variant="section" title={t('about.contribute.title')} />
            <div className="mt-6 bg-surface-elevated rounded-lg border border-border p-8">
              <p className="font-body text-sm text-text-primary leading-[1.8] mb-6">
                {t('about.contribute.text')}
              </p>
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 bg-surface rounded-lg border border-border px-4 py-3">
                    <span className="font-display text-sm text-gold-bright mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-body text-sm text-text-primary">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Trivia */}
          <RevealOnScroll>
            <GoldDivider variant="section" title={t('about.trivia')} />
            <div className="mt-6 space-y-3">
              {triviaItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => toggleTrivia(i)}
                  className="w-full text-left group bg-surface-elevated rounded-lg border border-border hover:border-gold-mid/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-4 px-5 py-4">
                    <span className="font-display text-sm text-gold-bright shrink-0 w-8 h-8 rounded-full bg-gold-mid/10 border border-gold-mid/20 flex items-center justify-center">
                      {expandedTrivia === i ? '\u2212' : '\u002B'}
                    </span>
                    <span className="font-heading text-sm text-gold-mid group-hover:text-gold-bright transition-colors">
                      {lang === 'fr' ? 'Le saviez-vous ?' : lang === 'es' ? '\u00BFSab\u00EDas que...?' : lang === 'it' ? 'Lo sapevi?' : lang === 'ko' ? '\uC54C\uACE0 \uACC4\uC168\uB098\uC694?' : 'Did you know?'} #{i + 1}
                    </span>
                  </div>
                  {expandedTrivia === i && (
                    <div className="px-5 pb-5 pl-[4.25rem]">
                      <p className="font-body text-sm text-text-primary leading-[1.8]">
                        {item.text[lang] || item.text.en}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Credits */}
          <RevealOnScroll>
            <GoldDivider variant="section" title={t('about.credits.title')} />
            <div className="mt-6 bg-surface-elevated rounded-lg border border-border p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-mid" />
                  <span className="font-body text-sm text-text-primary">
                    <strong className="text-gold-bright font-heading">Pearl Abyss</strong> {' \u2014 '}
                    {lang === 'fr' ? 'D\u00E9veloppeur et \u00E9diteur de Crimson Desert' : lang === 'es' ? 'Desarrollador y editor de Crimson Desert' : lang === 'it' ? 'Sviluppatore ed editore di Crimson Desert' : lang === 'ko' ? '\uD06C\uB9BC\uC2A8 \uB514\uC800\uD2B8 \uAC1C\uBC1C\uC0AC \uBC0F \uD37C\uBE14\uB9AC\uC154' : 'Developer and publisher of Crimson Desert'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-mid" />
                  <span className="font-body text-sm text-text-primary">
                    {t('about.images_credit')}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-mid" />
                  <span className="font-body text-sm text-text-primary">
                    <strong className="text-gold-bright font-heading">Next.js & Tailwind CSS</strong> {' \u2014 '}
                    {lang === 'fr' ? 'Technologies web utilis\u00E9es' : lang === 'es' ? 'Tecnolog\u00EDas web utilizadas' : lang === 'it' ? 'Tecnologie web utilizzate' : lang === 'ko' ? '\uC0AC\uC6A9\uB41C \uC6F9 \uAE30\uC220' : 'Web technologies used'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-mid" />
                  <span className="font-body text-sm text-text-primary">
                    <strong className="text-gold-bright font-heading">
                      {lang === 'fr' ? 'Communaut\u00E9 fan' : lang === 'es' ? 'Comunidad fan' : lang === 'it' ? 'Comunit\u00E0 fan' : lang === 'ko' ? '\uD32C \uCEE4\uBBA4\uB2C8\uD2F0' : 'Fan community'}
                    </strong> {' \u2014 '}
                    {lang === 'fr' ? 'Contributions, corrections et traductions' : lang === 'es' ? 'Contribuciones, correcciones y traducciones' : lang === 'it' ? 'Contributi, correzioni e traduzioni' : lang === 'ko' ? '\uAE30\uC5EC, \uC218\uC815 \uBC0F \uBC88\uC5ED' : 'Contributions, corrections, and translations'}
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Official Links */}
          <RevealOnScroll>
            <GoldDivider variant="section" title={t('about.links.title')} />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {officialLinks.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-surface-elevated rounded-lg border border-border hover:border-gold-mid/40 p-5 transition-all duration-200"
                >
                  <span className="text-xl w-10 h-10 rounded-full bg-gold-mid/10 border border-gold-mid/20 flex items-center justify-center shrink-0 group-hover:bg-gold-mid/20 transition-colors">
                    {link.icon}
                  </span>
                  <div>
                    <span className="font-heading text-sm text-gold-bright group-hover:drop-shadow-[0_0_10px_hsl(var(--gold-glow))] transition-all block">
                      {link.label}
                    </span>
                    <span className="font-ui text-[0.6rem] text-text-secondary tracking-wider">{link.url.replace('https://', '')} {'\u2197'}</span>
                  </div>
                </a>
              ))}
            </div>
          </RevealOnScroll>

          {/* Contact */}
          <RevealOnScroll>
            <GoldDivider variant="section" title={t('about.contact.title')} />
            <div className="mt-6 bg-surface-elevated rounded-lg border border-border p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold-mid/10 border border-gold-mid/20 flex items-center justify-center">
                <span className="text-xl text-gold-mid">{'\u2709\uFE0F'}</span>
              </div>
              <p className="font-body text-sm text-text-primary leading-[1.8] max-w-lg mx-auto mb-6">
                {t('about.contact.text')}
              </p>
              <a
                href="mailto:contact@pywelwiki.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-sm tracking-[0.15em] border border-gold-mid/40 text-gold-bright hover:bg-gold-mid/10 hover:border-gold-mid/60 transition-all duration-200"
              >
                contact@pywelwiki.com {'\u2192'}
              </a>
            </div>
          </RevealOnScroll>

          {/* Back to home */}
          <RevealOnScroll>
            <div className="flex justify-center mt-12">
              <Link href={prefix} className="font-ui text-xs tracking-wider text-gold-mid hover:text-gold-bright transition-colors">
                {'\u2190'} {lang === 'fr' ? "Retour \u00E0 l'accueil" : lang === 'es' ? 'Volver al inicio' : lang === 'it' ? "Torna all'inizio" : lang === 'ko' ? '\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30' : 'Back to Home'}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonAbout;
