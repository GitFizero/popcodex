'use client';

import { useEffect, useState, lazy, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
const heroLandscape = '/images/gta-vi/jason-lucia-02-landscape.jpg';
import { characters } from '@/lib/data/gta-vi/characters';
import { characterImages } from '@/lib/data/gta-vi/characterImages';
import { characterSEO } from '@/lib/data/gta-vi/characterSlugs';
import { blogArticles, getArticlePath } from '@/lib/data/gta-vi/blogArticles';
import { Clock, ArrowRight } from 'lucide-react';

// Lazy-load below-fold components
const RevealOnScroll = lazy(() => import('@/components/wiki/shared/RevealOnScroll'));
const CountdownTimer = lazy(() => import('@/components/wiki/gta-vi/CountdownTimer'));
const eyefindPosts = [
  { user: '@LuciaOnTheRun', text: 'Fresh out. New chapter. Same mistakes. #Leonida', likes: 24300 },
  { user: '@JasonInTheKeys', text: 'When your boss is a drug runner and your rent is free 🤷', likes: 18700 },
  { user: '@BoobishKing', text: 'The club money pay for the studio. The drug money pay for it all.', likes: 45100 },
  { user: '@RealDimezOfficial', text: 'Viral videos. Viral hooks. One hit away from fame. 🔥', likes: 67800 },
];

const locationPills = ['VICE CITY', 'LEONIDA KEYS', 'GRASSRIVERS', 'PORT GELLHORN', 'AMBROSIA', 'MOUNT KALAGA'];

const Index = ({ locale }: { locale: string }) => {
  const [eyebrowVisible, setEyebrowVisible] = useState(false);
  const [titleStage, setTitleStage] = useState(0);
  const { t, lang } = useGtaI18n(locale);

  const stats = [
    { value: '2', label: t('stats.protagonists') },
    { value: '1ère', label: t('stats.first') },
    { value: '8', label: t('stats.characters') },
    { value: '6+', label: t('stats.zones') },
    { value: '475M', label: t('stats.views') },
  ];

  useEffect(() => {
    setTimeout(() => setEyebrowVisible(true), 300);
    setTimeout(() => setTitleStage(1), 600);
    setTimeout(() => setTitleStage(2), 900);
    setTimeout(() => setTitleStage(3), 1200);
  }, []);

  return (
    <div className="relative">
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0">
          <Image
            src={heroLandscape}
            alt="Jason Duval et Lucia Caminos - Protagonistes de GTA VI Grand Theft Auto 6 - Artwork officiel Rockstar Games"
            className="object-cover object-top"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,67%,2%)] via-[hsl(220,67%,2%,0.7)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,67%,2%,0.6)] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 bg-vignette pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl">
          <p className={`font-rajdhani text-[0.65rem] sm:text-xs tracking-[0.4em] text-neon-cyan mb-8 transition-opacity duration-700 ${eyebrowVisible ? 'opacity-100' : 'opacity-0'}`}>
            {t('hero.eyebrow')}
          </p>

          <h1 className="font-bebas leading-[0.85] mb-8">
            <span className={`block text-[clamp(2.5rem,9vw,5.5rem)] text-text-primary transition-all duration-700 ${titleStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              GRAND THEFT
            </span>
            <span className={`block text-[clamp(2.5rem,9vw,5.5rem)] neon-pink-text transition-all duration-700 ${titleStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              AUTO
            </span>
            <span className={`block text-[clamp(4rem,14vw,10rem)] neon-cyan-text neon-flicker transition-all duration-700 ${titleStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              VI
            </span>
          </h1>

          <p className="font-barlow font-light italic text-text-secondary text-sm tracking-[0.15em] mb-6 max-w-lg mx-auto">
            {t('hero.tagline')}
          </p>

          <p className="font-bebas text-xl sm:text-3xl neon-yellow-text neon-flicker mb-8" style={{ animationDelay: '2s' }}>
            ONLY IN LEONIDA
          </p>

          <div className="inline-block font-rajdhani text-[0.55rem] px-3 py-1 rounded-full border border-neon-pink/30 text-neon-pink tracking-widest mb-8">
            {t('hero.unofficial')}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={`/${locale}/gta-vi/story`} className="font-barlow font-semibold text-xs px-6 py-2.5 rounded bg-neon-pink text-bg-void hover:shadow-[0_0_20px_hsl(var(--neon-pink)/0.4)] transition-all">
              {t('hero.explore')}
            </Link>
            <Link href={`/${locale}/gta-vi/characters`} className="font-barlow font-semibold text-xs px-6 py-2.5 rounded border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all">
              {t('hero.characters')}
            </Link>
          </div>

          <div className="mt-20 flex flex-col items-center gap-2">
            <div className="w-[1px] h-10 border-l border-dashed border-neon-pink/30" />
            <span className="font-rajdhani text-[0.5rem] tracking-[0.5em] text-text-muted-vice">{t('hero.scroll')}</span>
          </div>
        </div>
      </section>

      {/* Below-fold content wrapped in Suspense for lazy-loaded components */}
      <Suspense fallback={null}>
      {/* ══════ SYNOPSIS ══════ */}
      <RevealOnScroll>
        <section className="relative py-16 px-4">
          <div className="relative max-w-2xl mx-auto border border-neon-pink/15 rounded-lg p-6 sm:p-10 bg-[hsl(214,36%,10%)]/50">
            <p className="font-barlow font-light text-base sm:text-lg text-text-primary italic leading-relaxed mb-4">
              {t('synopsis.text')}
            </p>
            <p className="font-rajdhani text-[0.6rem] text-text-muted-vice">{t('synopsis.credit')}</p>
            <p className="font-marker text-sm sm:text-base neon-yellow-text text-center mt-6">
              {t('synopsis.closing')}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {/* ══════ COUNTDOWN ══════ */}
      <RevealOnScroll>
        <section className="py-16 px-4 text-center">
          <h2 className="font-bebas text-2xl sm:text-4xl neon-cyan-text mb-8">{t('countdown.title')}</h2>
          <CountdownTimer locale={locale} />
        </section>
      </RevealOnScroll>

      {/* ══════ STATS ══════ */}
      <RevealOnScroll>
        <section className="py-10 px-4 border-y border-neon-pink/10">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <span className="font-bebas text-2xl sm:text-3xl neon-pink-text">{s.value}</span>
                <p className="font-rajdhani text-[0.55rem] text-text-secondary tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* ══════ DUAL PROTAGONISTS ══════ */}
      <RevealOnScroll>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Link href={`/${locale}/gta-vi/characters?id=lucia`} className="card-glow-pink bg-[hsl(213,33%,13%)] rounded-xl p-6 border border-neon-pink/10 group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <Image src={characterImages.lucia.square} alt="Lucia Caminos" width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-neon-pink/30" />
                <div>
                  <h3 className="font-bebas text-xl neon-pink-text">LUCIA CAMINOS</h3>
                  <span className="font-rajdhani text-[0.55rem] px-2 py-0.5 rounded bg-neon-gold/20 text-neon-gold">{t('characters.playable')}</span>
                </div>
              </div>
              <p className="font-dm text-xs text-text-secondary leading-relaxed mb-3">
                {t('inline.luciaDesc')}
              </p>
              <p className="font-marker text-xs text-neon-pink/60">
                "The only thing that matters is who you know and what you got."
              </p>
            </Link>

            <Link href={`/${locale}/gta-vi/characters?id=jason`} className="card-glow-cyan bg-[hsl(213,33%,13%)] rounded-xl p-6 border border-neon-cyan/10 group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <Image src={characterImages.jason.square} alt="Jason Duval" width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-neon-cyan/30" />
                <div>
                  <h3 className="font-bebas text-xl neon-cyan-text">JASON DUVAL</h3>
                  <span className="font-rajdhani text-[0.55rem] px-2 py-0.5 rounded bg-neon-gold/20 text-neon-gold">{t('characters.playable')}</span>
                </div>
              </div>
              <p className="font-dm text-xs text-text-secondary leading-relaxed mb-3">
                {t('inline.jasonDesc')}
              </p>
              <p className="font-marker text-xs text-neon-cyan/60">
                "Another day in paradise, right?"
              </p>
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/* ══════ ONLY IN LEONIDA ══════ */}
      <RevealOnScroll>
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,67%,2%)] via-[hsl(214,40%,7%)] to-[hsl(220,67%,2%)]" />
          <div className="relative z-10 text-center">
            <h2 className="font-bebas text-[clamp(2rem,6vw,4rem)] text-text-primary/10 mb-6">ONLY IN LEONIDA</h2>
            <p className="font-bebas text-2xl sm:text-4xl neon-pink-text neon-flicker mb-8">VICE CITY</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {locationPills.map(loc => (
                <Link
                  key={loc}
                  href={`/${locale}/gta-vi/map`}
                  className="font-rajdhani text-[0.55rem] px-3 py-1 rounded-full border border-neon-cyan/15 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors tracking-widest"
                >
                  {loc}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/gta-vi/map`} className="font-barlow font-semibold text-xs text-neon-cyan hover:underline">
              {t('inline.exploreMap')}
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/* ══════ MEET LEONIDA ══════ */}
      <RevealOnScroll>
        <section className="py-16 px-4">
          <h2 className="font-bebas text-2xl sm:text-3xl text-text-primary text-center mb-10">{t('characters.meet')}</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {characters.slice(0, 4).map((char) => {
              const seo = characterSEO[char.id];
              const slug = seo?.slug || char.id;
              return (
                <Link
                  key={char.id}
                  href={`/${locale}/gta-vi/characters/${slug}`}
                  className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-neon-pink/30 transition-all hover:-translate-y-1"
                >
                  {characterImages[char.id] && (
                    <img
                      src={characterImages[char.id].portrait}
                      alt={char.name}
                      className="w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className={`font-bebas text-sm sm:text-lg ${char.neonClass} tracking-wide`}>{char.name}</h3>
                    <p className="font-rajdhani text-[0.5rem] sm:text-[0.6rem] text-text-secondary tracking-wider line-clamp-1">{char.role}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`/${locale}/gta-vi/characters`}
              className="inline-flex items-center gap-2 font-barlow font-semibold text-xs px-6 py-2.5 rounded border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all"
            >
              {t('hero.characters')} →
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/* ══════ EYEFIND FEED ══════ */}
      <RevealOnScroll>
        <section className="py-16 px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="font-rajdhani text-xs neon-cyan-text tracking-widest mb-5">{t('eyefind.title')} <span className="animate-pulse">▌</span></h2>
            <div className="space-y-2">
              {eyefindPosts.map((post, i) => (
                <div key={i} className="bg-[hsl(213,33%,13%)] rounded-lg p-3 border border-neon-cyan/5 hover:border-neon-cyan/15 transition-colors">
                  <span className="font-rajdhani text-[0.6rem] text-neon-cyan">{post.user}</span>
                  <p className="font-dm text-xs text-text-primary mt-1">{post.text}</p>
                  <span className="font-rajdhani text-[0.5rem] text-text-muted-vice">♥ {post.likes.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <p className="font-rajdhani text-[0.5rem] text-text-muted-vice text-center mt-3 tracking-widest">
              {t('eyefind.disclaimer')}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {/* ══════ TRAILER TIMELINE ══════ */}
      <RevealOnScroll>
        <section className="py-16 px-4">
          <h2 className="font-bebas text-2xl sm:text-3xl text-text-primary text-center mb-10">{t('timeline.title')}</h2>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-[hsl(213,33%,13%)] rounded-lg p-4 border border-neon-pink/15">
              <span className="font-rajdhani text-[0.5rem] text-neon-pink tracking-widest">TRAILER 1</span>
              <h3 className="font-bebas text-lg text-text-primary mt-1">{t('inline.dec2023')}</h3>
              <p className="font-dm text-[0.6rem] text-text-muted-vice mt-1">"Love Is a Long Road"</p>
            </div>
            <div className="bg-[hsl(213,33%,13%)] rounded-lg p-4 border border-neon-cyan/15">
              <span className="font-rajdhani text-[0.5rem] text-neon-cyan tracking-widest">TRAILER 2</span>
              <h3 className="font-bebas text-lg text-text-primary mt-1">{t('inline.may2025')}</h3>
              <p className="font-dm text-[0.6rem] text-text-muted-vice mt-1">475M {t('inline.views')}</p>
            </div>
            <div className="bg-[hsl(213,33%,13%)] rounded-lg p-4 border border-dashed border-neon-orange/30">
              <span className="font-rajdhani text-[0.5rem] text-neon-orange tracking-widest">MARKETING</span>
              <h3 className="font-bebas text-lg text-text-primary mt-1">{t('inline.summer2026')}</h3>
              <span className="font-rajdhani text-[0.45rem] px-1.5 py-0.5 rounded bg-neon-orange/10 text-neon-orange inline-block">{t('inline.pending')}</span>
            </div>
            <div className="bg-[hsl(213,33%,13%)] rounded-lg p-4 border border-neon-cyan/30" style={{ boxShadow: '0 0 15px hsl(var(--neon-cyan) / 0.1)' }}>
              <span className="font-rajdhani text-[0.5rem] text-neon-cyan tracking-widest animate-pulse">{t('inline.release')}</span>
              <h3 className="font-bebas text-lg neon-cyan-text mt-1">{t('inline.nov2026')}</h3>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* ══════ BUY GTA VI ══════ */}
      <RevealOnScroll>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-2xl sm:text-3xl neon-pink-text mb-3">
              {lang === 'fr' ? 'ACHETER GTA VI' : lang === 'es' ? 'COMPRAR GTA VI' : lang === 'it' ? 'ACQUISTA GTA VI' : 'BUY GTA VI'}
            </h2>
            <p className="font-barlow font-light italic text-xs text-text-secondary mb-8">
              {lang === 'fr' ? 'Précommandez au meilleur prix sur votre plateforme' : lang === 'es' ? 'Reserva al mejor precio en tu plataforma' : lang === 'it' ? 'Preordina al miglior prezzo sulla tua piattaforma' : 'Pre-order at the best price on your platform'}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <a href="https://www.instant-gaming.com/fr/15506-acheter-grand-theft-auto-vi-playstation-5-playstation-store/?igr=gamer-9c3b7dc" target="_blank" rel="noopener noreferrer nofollow" className="bg-[hsl(213,33%,13%)] rounded-xl p-4 border border-neon-cyan/15 hover:border-neon-cyan/40 transition-all hover:-translate-y-1 group">
                <p className="font-bebas text-lg text-neon-cyan mb-1">PlayStation 5</p>
                <span className="font-barlow font-semibold text-[0.65rem] px-4 py-1.5 rounded bg-neon-cyan text-bg-void inline-block group-hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.3)] transition-all">
                  {lang === 'fr' ? 'ACHETER' : lang === 'es' ? 'COMPRAR' : lang === 'it' ? 'ACQUISTA' : 'BUY'}
                </span>
              </a>
              <a href="https://www.instant-gaming.com/fr/15505-acheter-grand-theft-auto-vi-xbox-series-x-s-microsoft-store/?igr=gamer-9c3b7dc" target="_blank" rel="noopener noreferrer nofollow" className="bg-[hsl(213,33%,13%)] rounded-xl p-4 border border-neon-green/15 hover:border-neon-green/40 transition-all hover:-translate-y-1 group">
                <p className="font-bebas text-lg text-neon-green mb-1">Xbox Series X|S</p>
                <span className="font-barlow font-semibold text-[0.65rem] px-4 py-1.5 rounded bg-neon-green text-bg-void inline-block group-hover:shadow-[0_0_15px_hsl(var(--neon-green)/0.3)] transition-all">
                  {lang === 'fr' ? 'ACHETER' : lang === 'es' ? 'COMPRAR' : lang === 'it' ? 'ACQUISTA' : 'BUY'}
                </span>
              </a>
              <a href="https://www.instant-gaming.com/fr/2462-acheter-grand-theft-auto-vi-pc-rockstar/?igr=gamer-9c3b7dc" target="_blank" rel="noopener noreferrer nofollow" className="bg-[hsl(213,33%,13%)] rounded-xl p-4 border border-neon-orange/15 hover:border-neon-orange/40 transition-all hover:-translate-y-1 group">
                <p className="font-bebas text-lg text-neon-orange mb-1">PC</p>
                <span className="font-barlow font-semibold text-[0.65rem] px-4 py-1.5 rounded bg-neon-orange text-bg-void inline-block group-hover:shadow-[0_0_15px_hsl(var(--neon-orange)/0.3)] transition-all">
                  {lang === 'fr' ? 'ACHETER' : lang === 'es' ? 'COMPRAR' : lang === 'it' ? 'ACQUISTA' : 'BUY'}
                </span>
              </a>
            </div>
            <Link href={`/${locale}/gta-vi/buy`} className="font-barlow font-semibold text-xs text-neon-cyan hover:underline">
              {lang === 'fr' ? 'Voir tous les détails & FAQ →' : lang === 'es' ? 'Ver todos los detalles & FAQ →' : lang === 'it' ? 'Vedi tutti i dettagli & FAQ →' : 'See all details & FAQ →'}
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      {/* ══════ LATEST BLOG ARTICLES ══════ */}
      <RevealOnScroll>
        <section className="py-16 px-4">
          <h2 className="font-bebas text-2xl sm:text-3xl text-text-primary text-center mb-3">{lang === 'fr' ? 'DERNIERS ARTICLES' : lang === 'es' ? 'ÚLTIMOS ARTÍCULOS' : lang === 'it' ? 'ULTIMI ARTICOLI' : 'LATEST ARTICLES'}</h2>
          <p className="font-barlow font-light italic text-xs text-text-secondary text-center mb-10">
            {lang === 'fr' ? 'Guides, analyses et actualités sur GTA 6' : lang === 'es' ? 'Guías, análisis y noticias sobre GTA 6' : lang === 'it' ? 'Guide, analisi e notizie su GTA 6' : 'Guides, analysis and news about GTA 6'}
          </p>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
            {blogArticles.slice(0, 3).map(article => (
              <Link
                key={article.id}
                href={`/${locale}/gta-vi${getArticlePath(article, lang)}`}
                className="group bg-[hsl(213,33%,13%)] rounded-xl overflow-hidden border border-white/5 hover:border-neon-cyan/20 transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={article.coverImage}
                    alt={article.coverAlt[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bebas text-sm sm:text-base text-text-primary mb-1 group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {article.title[lang]}
                  </h3>
                  <p className="font-dm text-[0.6rem] text-text-secondary line-clamp-2 mb-3">
                    {article.excerpt[lang]}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-rajdhani text-[0.5rem] text-text-muted-vice flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readingTime} min
                    </span>
                    <span className="font-rajdhani text-[0.5rem] text-neon-cyan flex items-center gap-1 group-hover:gap-2 transition-all">
                      {lang === 'fr' ? 'LIRE' : lang === 'es' ? 'LEER' : lang === 'it' ? 'LEGGI' : 'READ'} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`/${locale}/gta-vi/blog`}
              className="inline-flex items-center gap-2 font-barlow font-semibold text-xs px-6 py-2.5 rounded border border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 transition-all"
            >
              {lang === 'fr' ? 'Tous les articles' : lang === 'es' ? 'Todos los artículos' : lang === 'it' ? 'Tutti gli articoli' : 'All articles'} →
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      </Suspense>
    </div>
  );
};

export default Index;
