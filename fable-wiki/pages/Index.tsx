// @ts-nocheck
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';
import { loreEntries } from '@/fable-wiki/data/lore';
import { regions } from '@/fable-wiki/data/regions';
import { characters } from '@/fable-wiki/data/characters';
import { blogArticles } from '@/fable-wiki/data/blog';
import { tr } from '@/fable-wiki/context/I18nContext';

const TITLE_FABLE = 'FABLE';

const Index = () => {
  const { t, lang } = useI18n();
  const [heroLoaded, setHeroLoaded] = useState(false);
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

  const stats = useMemo(() => [
    { value: '5', label: t('stats.characters') },
    { value: '5', label: t('stats.regions') },
    { value: '3', label: t('stats.disciplines') },
    { value: '5', label: lang === 'fr' ? 'CHAPITRES' : 'CHAPTERS' },
  ], [t, lang]);

  const featureCards = useMemo(() => [
    { title: t('featured.story.title'), desc: t('featured.story.desc'), link: '/story', gradient: 'linear-gradient(135deg, hsl(150 30% 6%) 0%, hsl(150 40% 12%/0.3) 100%)' },
    { title: t('featured.characters.title'), desc: t('featured.characters.desc'), link: '/characters', gradient: 'linear-gradient(135deg, hsl(150 30% 6%) 0%, hsl(45 90% 40%/0.2) 100%)' },
    { title: t('featured.world.title'), desc: t('featured.world.desc'), link: '/world', gradient: 'linear-gradient(135deg, hsl(150 30% 6%) 0%, hsl(150 50% 20%/0.3) 100%)' },
  ], [t]);

  const recentLore = loreEntries.slice(0, 5);
  const categoryColors = { CHARACTER: 'bg-emerald-700/60', LOCATION: 'bg-yellow-700/60', FACTION: 'bg-gray-600/80', ITEM: 'bg-emerald-600/50', EVENT: 'bg-purple-700/70' };

  return (
    <main id="main-content" className="relative z-10">
      <SEOHead title={seo.index.title[lang]} description={seo.index.desc[lang]} path="/" lang={lang} faqItems={seo.faq[lang]} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0" style={{ background: 'hsl(150 30% 3%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.15) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[2px] h-[200%] left-1/3 -top-1/2 origin-center opacity-[0.04]"
            style={{ background: 'linear-gradient(to bottom, transparent, #22C55E, transparent)', animation: 'rotate-slow 30s linear infinite' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="font-body font-medium text-xs tracking-[0.4em] text-yellow-600/80 mb-4 transition-all duration-700"
            style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'none' : 'translateY(10px)' }}>
            {t('hero.eyebrow')}
          </p>
          <div className="flex justify-center mb-6">
            <div className="h-px bg-emerald-500/60 transition-all duration-700 delay-300" style={{ width: heroLoaded ? 200 : 0 }} />
          </div>
          <h1 className="leading-[0.9]">
            <span className="block">
              {TITLE_FABLE.split('').map((l, i) => (
                <span key={`f${i}`} className="inline-block font-display font-black text-emerald-400"
                  style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', textShadow: '0 0 60px rgba(34, 197, 94, 0.4)',
                    opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${600 + i * 60}ms`, letterSpacing: '0.15em' }}>{l}</span>
              ))}
            </span>
          </h1>
          <p className="font-body font-light text-xs tracking-[0.3em] text-gray-500 mt-6 transition-all duration-700 delay-[1400ms]"
            style={{ opacity: heroLoaded ? 1 : 0 }}>{t('hero.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[t('hero.pill.arpg'), t('hero.pill.openworld'), t('hero.pill.lore')].map((pill, i) => (
              <span key={pill} className="font-body text-xs tracking-wider px-4 py-2 border border-emerald-700/40 text-gray-400 rounded-full hover:bg-emerald-900/30 hover:border-emerald-500 transition-all duration-200"
                style={{ opacity: heroLoaded ? 1 : 0, transition: `all 0.5s ease ${1600 + i * 100}ms` }}>{pill}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/lore" className="inline-flex items-center px-6 py-3 rounded-lg font-heading text-sm tracking-[0.15em] bg-emerald-700 text-white hover:bg-emerald-600 transition-all duration-300" style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.5s ease 2000ms' }}>{t('hero.cta.explore')}</Link>
            <Link to="/characters" className="inline-flex items-center px-6 py-3 rounded-lg font-heading text-sm tracking-[0.15em] border border-emerald-700/50 text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300" style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.5s ease 2100ms' }}>{t('hero.cta.characters')}</Link>
          </div>
        </div>
      </section>

      {/* Announcement */}
      <RevealOnScroll>
        <section className="relative z-10 py-4 border-y border-emerald-900/30" style={{ background: 'hsl(150 30% 5%)' }}>
          <p className="text-center font-body font-semibold text-xs sm:text-sm tracking-[0.2em] text-emerald-500/80 px-4">{t('announce.text')}</p>
        </section>
      </RevealOnScroll>

      {/* Stats */}
      <section className="relative z-10 py-16 px-4" ref={statsRef}>
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto bg-emerald-900/20 rounded-lg border-t-2 border-emerald-500/40 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={s.label} className="text-center relative">
                  <div className="font-display text-3xl sm:text-4xl text-emerald-400"
                    style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.6s ease ${i * 150}ms` }}>{s.value}</div>
                  <div className="font-body text-xs tracking-wider text-gray-500 mt-2">{s.label}</div>
                  {i < stats.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-emerald-800/30" />}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Characters highlight */}
      <section className="relative z-10 py-16 px-4" aria-label={t('home.characters.title')}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll><RuneDivider variant="section" title={t('home.characters.title')} /></RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {characters.slice(0, 3).map((char, i) => (
              <RevealOnScroll key={char.id} stagger={i * 150}>
                <Link to="/characters" className="block group">
                  <div className="relative rounded-lg overflow-hidden h-[320px] flex flex-col justify-end border border-emerald-900/30 hover:border-emerald-700/50 transition-all duration-300" style={{ background: 'hsl(150 30% 6%)' }}>
                    {char.image && (
                      <img src={char.image} alt={char.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,30%,3%)] via-transparent to-transparent" />
                    <div className="relative z-10 p-6">
                      <span className="font-body text-[0.6rem] tracking-[0.3em] text-yellow-500">{tr(char.role, lang)}</span>
                      <h3 className="font-heading text-2xl text-emerald-400 mt-1 group-hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">{char.name}</h3>
                      <p className="font-body text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">{tr(char.signatureQuote, lang)}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="flex justify-center mt-8">
              <Link to="/characters" className="inline-flex items-center px-6 py-3 rounded-lg font-heading text-sm tracking-[0.15em] border border-emerald-700/50 text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300">{t('home.characters.seeMore')}</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured */}
      <section className="relative z-10 py-16 px-4" aria-label={t('featured.explore')}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll><RuneDivider variant="section" title={t('featured.explore')} /></RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {featureCards.map((card, i) => (
              <RevealOnScroll key={card.title} stagger={i * 150}>
                <Link to={card.link} className="block group">
                  <div className="relative rounded-lg overflow-hidden min-h-[260px] flex flex-col justify-end border border-emerald-900/30 hover:border-emerald-700/50 transition-all duration-300" style={{ background: card.gradient }}>
                    <div className="relative z-10 p-6">
                      <h3 className="font-heading text-xl text-emerald-400 group-hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">{card.title}</h3>
                      <p className="font-body text-sm text-gray-400 mt-2 leading-relaxed">{card.desc}</p>
                      <span className="font-body text-xs tracking-wider text-yellow-500 mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        {t('featured.discover')} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
      <section className="relative z-10 py-16 px-4" aria-label={t('recent.title')}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll><RuneDivider variant="section" title={t('recent.title')} /></RevealOnScroll>
          <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 mt-8 overflow-x-auto pb-4 sm:snap-x sm:snap-mandatory">
            {recentLore.map((entry, i) => (
              <RevealOnScroll key={entry.id} stagger={i * 100}>
                <Link to="/lore" className="block group">
                  <div className="min-w-0 sm:min-w-[220px] sm:w-[220px] h-[250px] sm:h-[280px] rounded-lg border border-emerald-900/30 p-3 sm:p-4 flex flex-col hover:border-emerald-700/50 transition-all duration-300 sm:snap-start" style={{ background: 'hsl(150 30% 6%)' }}>
                    <span className={`self-start font-body text-[0.6rem] tracking-wider px-2 py-0.5 rounded text-gray-200 ${categoryColors[entry.category]}`}>{t(`cat.${entry.category}`)}</span>
                    <h4 className="font-heading text-sm text-emerald-400 mt-3">{entry.title}</h4>
                    <p className="font-body text-xs text-gray-400 mt-2 flex-1 line-clamp-3">{entry.excerpt[lang]}</p>
                    <div className="mt-auto pt-3 flex justify-between items-center">
                      <span className="font-body text-[0.6rem] text-gray-600">{entry.lastUpdated}</span>
                      <span className="font-body text-[0.6rem] text-gray-600">~{entry.readingTime} {t('recent.read')}</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* World map */}
      <section className="relative z-10 py-16" aria-label={t('world.continent')}>
        <RevealOnScroll>
          <div className="relative h-[400px] overflow-hidden border-y border-emerald-900/30" style={{ background: 'hsl(150 30% 5%)' }}>
            <div className="absolute inset-0">
              <svg width="100%" height="100%" className="opacity-10" aria-hidden="true">
                <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            {regions.map(region => (
              <Link key={region.id} to="/world" className="absolute group" style={{ left: `${region.mapPosition.x}%`, top: `${region.mapPosition.y}%`, transform: 'translate(-50%,-50%)' }}>
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                  <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
                </div>
                <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-[0.65rem] text-emerald-600 group-hover:text-emerald-400 transition-colors">{region.name}</span>
              </Link>
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="font-heading text-2xl sm:text-4xl tracking-[0.3em] text-emerald-800/30">{t('world.continent')}</h2>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Latest Blog */}
      <section className="relative z-10 py-16 px-4" aria-label={t('home.latest_articles')}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll><RuneDivider variant="section" title={t('home.latest_articles')} /></RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {blogArticles.slice(0, 2).map((article, i) => (
              <RevealOnScroll key={article.slug} stagger={i * 150}>
                <Link to={`/blog/${article.slug}`} className="block group">
                  <div className="relative rounded-lg overflow-hidden h-[240px] flex flex-col justify-end border border-emerald-900/30 hover:border-emerald-700/50 transition-all duration-300" style={{ background: 'hsl(150 30% 6%)' }}>
                    <div className="relative z-10 p-5">
                      <span className="font-body text-[0.55rem] tracking-[0.25em] text-yellow-500">{article.category}</span>
                      <h3 className="font-heading text-base text-emerald-400 mt-1 line-clamp-2 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300">{tr(article.title, lang)}</h3>
                      <p className="font-body text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">{tr(article.excerpt, lang)}</p>
                      <span className="font-body text-[0.6rem] text-gray-600 mt-2 block">~{article.readingTime} min</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="flex justify-center mt-8">
              <Link to="/blog" className="inline-flex items-center px-6 py-3 rounded-lg font-heading text-sm tracking-[0.15em] border border-emerald-700/50 text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300">{lang === 'fr' ? 'Voir tous les articles' : 'View all articles'} →</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Buy CTA */}
      <section className="relative z-10 py-16 px-4" aria-label={t('buy.cta.title')}>
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="relative rounded-xl overflow-hidden border border-emerald-700/30" style={{ boxShadow: '0 0 60px rgba(34, 197, 94, 0.15)' }}>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(150 30% 8%) 0%, hsl(150 30% 3%) 50%, hsl(150 30% 8%) 100%)' }} />
              <div className="relative z-10 py-12 px-6 sm:px-10 text-center">
                <h2 className="font-display text-2xl sm:text-3xl text-emerald-400 mb-3">{t('buy.cta.title')}</h2>
                <p className="font-body text-base text-gray-400 mb-8 max-w-lg mx-auto">{t('buy.cta.desc')}</p>
                <Link to="/buy" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-heading text-sm tracking-[0.15em] bg-emerald-700 text-white hover:bg-emerald-600 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300">
                  {t('buy.cta.button')} →
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

export default Index;
