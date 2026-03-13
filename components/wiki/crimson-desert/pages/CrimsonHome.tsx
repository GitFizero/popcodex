'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import { loreEntries } from '@/lib/data/crimson-desert/lore';
import { regions } from '@/lib/data/crimson-desert/regions';
import { characters } from '@/lib/data/crimson-desert/characters';
import { blogArticles } from '@/lib/data/crimson-desert/blog';

const pailuneRuins = '/images/crimson-desert/pailune-ruins.jpg';
const hernandStreet = '/images/crimson-desert/hernand-street.jpg';
const mountainCastle = '/images/crimson-desert/mountain-castle.jpg';
const pywelPanorama = '/images/crimson-desert/pywel-panorama.jpg';
const envCanyon = '/images/crimson-desert/env-canyon.jpg';

const TITLE_CRIMSON = 'CRIMSON';
const TITLE_DESERT = 'DESERT';

const CrimsonHome = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const prefix = `/${locale}/crimson-desert`;
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [crimsonClicks, setCrimsonClicks] = useState(0);
  const [shake, setShake] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => { const ti = setTimeout(() => setHeroLoaded(true), 100); return () => clearTimeout(ti); }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleCrimsonClick = useCallback(() => {
    setCrimsonClicks(prev => {
      const next = prev + 1;
      if (next >= 7) { setShake(true); setTimeout(() => setShake(false), 600); return 0; }
      return next;
    });
  }, []);

  const stats = useMemo(() => [
    { value: '3', label: t('stats.characters') },
    { value: '5', label: t('stats.regions') },
    { value: '50\u201380', label: t('stats.hours') },
    { value: '7', label: t('stats.years') },
  ], [t]);

  const featureCards = useMemo(() => [
    { title: t('featured.story.title'), desc: t('featured.story.desc'), link: `${prefix}/story`, gradient: 'linear-gradient(135deg, hsl(var(--bg-card)) 0%, hsl(var(--crimson-deep)/0.3) 100%)', image: pailuneRuins },
    { title: t('featured.characters.title'), desc: t('featured.characters.desc'), link: `${prefix}/characters`, gradient: 'linear-gradient(135deg, hsl(var(--bg-card)) 0%, hsl(var(--smoke-mid)/0.3) 100%)', image: hernandStreet },
    { title: t('featured.world.title'), desc: t('featured.world.desc'), link: `${prefix}/world`, gradient: 'linear-gradient(135deg, hsl(var(--bg-card)) 0%, hsl(var(--gold-dark)/0.3) 100%)', image: mountainCastle },
  ], [t, prefix]);

  const recentLore = loreEntries.slice(0, 5);

  const categoryColors: Record<string, string> = {
    CHARACTER: 'bg-crimson-core/60', LOCATION: 'bg-gold-dark/60',
    FACTION: 'bg-smoke-mid/80', ITEM: 'bg-crimson-fire/50', EVENT: 'bg-crimson-deep/70',
  };

  return (
    <main id="main-content" className={`relative z-10 ${shake ? 'animate-[shake_0.3s_ease-in-out]' : ''}`}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-void" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src={envCanyon} alt="Paysage canyon Crimson Desert — \u00A9 Pearl Abyss" className="absolute inset-0 w-full h-full object-cover opacity-[0.18]" loading="eager" width={1920} height={1080} fetchPriority="high" decoding="async" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
        </div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--crimson-deep)/0.3) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[2px] h-[200%] left-1/3 -top-1/2 origin-center opacity-[0.06]"
            style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--crimson-bright)), transparent)', animation: 'rotate-slow 30s linear infinite' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="font-ui font-medium text-xs tracking-[0.4em] text-gold-muted mb-4 transition-all duration-700"
            style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'none' : 'translateY(10px)' }}>
            {t('hero.eyebrow')}
          </p>
          <div className="flex justify-center mb-6">
            <div className="h-px bg-gold-mid/60 transition-all duration-700 delay-300" style={{ width: heroLoaded ? 200 : 0 }} />
          </div>
          <h1 className="leading-[0.9]">
            <span className="block cursor-pointer" onClick={handleCrimsonClick}>
              {TITLE_CRIMSON.split('').map((l, i) => (
                <span key={`c${i}`} className="inline-block font-display font-black text-gold-bright"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', textShadow: '0 0 60px hsl(var(--gold-glow))',
                    opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${600 + i * 30}ms`, letterSpacing: '0.15em' }}>{l}</span>
              ))}
            </span>
            <span className="block mt-2">
              {TITLE_DESERT.split('').map((l, i) => (
                <span key={`d${i}`} className="inline-block font-display font-black text-crimson-bright"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', textShadow: '0 0 60px hsl(var(--crimson-glow-strong))',
                    opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${800 + i * 30}ms`, letterSpacing: '0.15em' }}>{l}</span>
              ))}
            </span>
          </h1>
          <p className="font-ui font-light text-xs tracking-[0.3em] text-text-muted-custom mt-6 transition-all duration-700 delay-[1400ms]"
            style={{ opacity: heroLoaded ? 1 : 0 }}>{t('hero.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[t('hero.pill.arpg'), t('hero.pill.openworld'), t('hero.pill.lore')].map((pill, i) => (
              <span key={pill} className="font-ui text-xs tracking-wider px-4 py-2 border border-gold-mid/40 text-text-secondary rounded-full hover:bg-crimson-deep hover:border-gold-bright transition-all duration-200"
                style={{ opacity: heroLoaded ? 1 : 0, transition: `all 0.5s ease ${1600 + i * 100}ms` }}>{pill}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href={`${prefix}/lore`} className="btn-primary shimmer" style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.5s ease 2000ms' }}>{t('hero.cta.explore')}</Link>
            <Link href={`${prefix}/characters`} className="btn-outline" style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.5s ease 2100ms' }}>{t('hero.cta.characters')}</Link>
          </div>
        </div>
      </section>

      {/* Announcement */}
      <RevealOnScroll>
        <section className="relative z-10 py-4 border-y" style={{ background: 'linear-gradient(135deg, hsl(var(--bg-raised)), hsl(var(--bg-surface)))', borderColor: 'hsl(var(--border-crimson))' }}>
          <p className="text-center font-ui font-semibold text-xs sm:text-sm tracking-[0.2em] text-gold-mid px-4">{t('announce.text')}</p>
        </section>
      </RevealOnScroll>

      {/* Stats */}
      <section className="relative z-10 py-16 px-4 content-defer" ref={statsRef}>
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto bg-raised/50 rounded-lg gold-border-top p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={s.label} className="text-center relative">
                  <div className="font-display text-3xl sm:text-4xl text-gold-bright"
                    style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.6s ease ${i * 150}ms` }}>{s.value}</div>
                  <div className="font-ui text-xs tracking-wider text-text-muted-custom mt-2">{s.label}</div>
                  {i < stats.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold-mid/20" />}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Characters highlight */}
      <section className="relative z-10 py-16 px-4 content-defer" aria-label={t('home.characters.title')}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll><GoldDivider variant="section" title={t('home.characters.title')} /></RevealOnScroll>
          <h2 className="sr-only">{t('home.characters.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {characters.slice(0, 3).map((char, i) => (
              <RevealOnScroll key={char.id} stagger={i * 150}>
                <Link href={`${prefix}/characters`} className="block group" title={`${char.name} \u2014 Crimson Desert`}>
                  <div className="relative rounded-lg overflow-hidden h-[380px] flex flex-col justify-end card-hover border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                    <img src={char.image} alt={`${char.name} \u2014 \u00A9 Pearl Abyss`} className="absolute inset-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" loading="lazy" decoding="async" width={600} height={400} sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-transparent" />
                    <div className="relative z-10 p-6">
                      <span className="font-ui text-[0.6rem] tracking-[0.3em] text-crimson-bright">{tr(char.role, lang)}</span>
                      <h3 className="font-heading text-2xl text-gold-bright mt-1 group-hover:drop-shadow-[0_0_20px_hsl(var(--gold-glow))] transition-all duration-300">{char.name}</h3>
                      <p className="font-body text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">{tr(char.signatureQuote, lang)}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="flex justify-center mt-8">
              <Link href={`${prefix}/characters`} className="btn-outline">{t('home.characters.seeMore')}</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured sections */}
      <section className="relative z-10 py-16 px-4 content-defer" aria-label={t('featured.explore')}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll><GoldDivider variant="section" title={t('featured.explore')} /></RevealOnScroll>
          <h2 className="sr-only">{t('featured.explore')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {featureCards.map((card, i) => (
              <RevealOnScroll key={card.title} stagger={i * 150}>
                <Link href={card.link} className="block group" title={`${card.title} \u2014 Crimson Desert Wiki`}>
                  <div className="relative rounded-lg overflow-hidden min-h-[300px] flex flex-col justify-end card-hover border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                    <img src={card.image} alt={`${card.title} Crimson Desert Pearl Abyss \u2014 \u00A9 Pearl Abyss`} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" loading="lazy" decoding="async" width={600} height={400} sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0" style={{ background: card.gradient }} />
                    <div className="relative z-10 p-6">
                      <h3 className="font-heading text-xl text-gold-bright group-hover:drop-shadow-[0_0_20px_hsl(var(--gold-glow))] transition-all duration-300">{card.title}</h3>
                      <p className="font-body text-sm text-text-secondary mt-2 leading-relaxed">{card.desc}</p>
                      <span className="font-ui text-xs tracking-wider text-crimson-bright mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        {t('featured.discover')} <span className="transition-transform duration-300 group-hover:translate-x-1">{'\u2192'}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Lore */}
      <section className="relative z-10 py-16 px-4 content-defer" aria-label={t('recent.title')}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll><GoldDivider variant="section" title={t('recent.title')} /></RevealOnScroll>
          <h2 className="sr-only">{t('recent.title')}</h2>
          <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 mt-8 overflow-x-auto pb-4 scrollbar-thin sm:snap-x sm:snap-mandatory">
            {recentLore.map((entry, i) => (
              <RevealOnScroll key={entry.id} stagger={i * 100}>
                <Link href={`${prefix}/lore`} className="block group" title={`${entry.title} \u2014 Crimson Desert Lore`}>
                  <div className="min-w-0 sm:min-w-[220px] sm:w-[220px] h-[250px] sm:h-[280px] rounded-lg bg-card-bg border border-border p-3 sm:p-4 flex flex-col card-hover sm:snap-start">
                    <span className={`self-start font-ui text-[0.6rem] tracking-wider px-2 py-0.5 rounded text-sand-pale ${categoryColors[entry.category]}`}>{t(`cat.${entry.category}`)}</span>
                    <h4 className="font-heading text-sm text-gold-bright mt-3">{entry.title}</h4>
                    <p className="font-body text-xs text-text-secondary mt-2 flex-1 line-clamp-3">{entry.excerpt[lang]}</p>
                    <div className="mt-auto pt-3 flex justify-between items-center">
                      <span className="font-ui text-[0.6rem] text-text-muted-custom">{entry.lastUpdated}</span>
                      <span className="font-ui text-[0.6rem] text-text-muted-custom">~{entry.readingTime} {t('recent.read')}</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* World map */}
      <section className="relative z-10 py-16 content-defer" aria-label={t('world.continent')}>
        <RevealOnScroll>
          <div className="relative h-[400px] overflow-hidden bg-surface border-y border-border">
            <img src={pywelPanorama} alt="Continent de Pywel carte monde ouvert Crimson Desert \u2014 \u00A9 Pearl Abyss" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" decoding="async" width={1920} height={400} />
            <div className="absolute inset-0">
              <svg width="100%" height="100%" className="opacity-10" aria-hidden="true">
                <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(28, 38%, 16%)" strokeWidth="0.5" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            {regions.map(region => (
              <Link key={region.id} href={`${prefix}/world`} className="absolute group" style={{ left: `${region.mapPosition.x}%`, top: `${region.mapPosition.y}%`, transform: 'translate(-50%,-50%)' }} title={`${region.name} \u2014 Crimson Desert`}>
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-crimson-bright" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                  <div className="absolute inset-0 rounded-full border border-crimson-bright" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
                </div>
                <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-[0.65rem] text-gold-mid group-hover:text-gold-bright transition-colors">{region.name}</span>
              </Link>
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="font-heading text-2xl sm:text-4xl tracking-[0.3em] text-gold-mid/30">{t('world.continent')}</h2>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Latest Blog Articles */}
      <section className="relative z-10 py-16 px-4 content-defer" aria-label={t('home.latest_articles')}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <GoldDivider variant="section" title={t('home.latest_articles')} />
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {blogArticles.slice(0, 3).map((article, i) => (
              <RevealOnScroll key={article.slug} stagger={i * 150}>
                <Link href={`${prefix}/blog/${article.slug}`} className="block group" title={tr(article.title, lang)}>
                  <div className="relative rounded-lg overflow-hidden h-[300px] flex flex-col justify-end card-hover border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                    <img src={article.coverImage} alt={`${tr(article.title, lang)} \u2014 \u00A9 Pearl Abyss`} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-transparent" />
                    <div className="relative z-10 p-5">
                      <span className="font-ui text-[0.55rem] tracking-[0.25em] text-crimson-bright">{article.category}</span>
                      <h3 className="font-heading text-base text-gold-bright mt-1 line-clamp-2 group-hover:drop-shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-300">{tr(article.title, lang)}</h3>
                      <p className="font-body text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">{tr(article.excerpt, lang)}</p>
                      <span className="font-ui text-[0.6rem] text-text-muted-custom mt-2 block">~{article.readingTime} min</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="flex justify-center mt-8">
              <Link href={`${prefix}/blog`} className="btn-outline">{lang === 'fr' ? 'Voir tous les articles' : lang === 'es' ? 'Ver todos los art\u00EDculos' : lang === 'it' ? 'Vedi tutti gli articoli' : 'View all articles'} {'\u2192'}</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Buy CTA */}
      <section className="relative z-10 py-16 px-4 content-defer" aria-label={t('buy.cta.title')}>
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="relative rounded-xl overflow-hidden border border-border-gold/30" style={{ boxShadow: '0 0 60px hsl(var(--crimson-glow))' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-crimson-deep/40 via-void to-crimson-deep/40" />
              <div className="relative z-10 py-12 px-6 sm:px-10 text-center">
                <h2 className="font-display text-2xl sm:text-3xl text-gold-bright mb-3">{t('buy.cta.title')}</h2>
                <p className="font-body text-base text-text-secondary mb-8 max-w-lg mx-auto">{t('buy.cta.desc')}</p>
                <Link href={`${prefix}/buy`} className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-heading text-sm tracking-[0.15em] bg-gradient-to-r from-crimson-deep to-crimson-core text-sand-pale hover:from-crimson-core hover:to-crimson-bright hover:shadow-[0_0_25px_hsl(var(--crimson-glow-strong))] transition-all duration-300">
                  {t('buy.cta.button')} {'\u2192'}
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

export default CrimsonHome;
