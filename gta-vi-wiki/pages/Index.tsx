// @ts-nocheck
import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { loreEntries } from '@/gta-vi-wiki/data/lore';
import { regions } from '@/gta-vi-wiki/data/regions';
import { characters } from '@/gta-vi-wiki/data/characters';
import { blogArticles } from '@/gta-vi-wiki/data/blog';

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
    { value: '2', label: t('stats.characters') },
    { value: '6', label: t('stats.regions') },
    { value: '5', label: t('stats.chapters') },
    { value: '2026', label: t('stats.year') },
  ], [t]);

  const featured = [
    { title: t('featured.story.title'), desc: t('featured.story.desc'), path: '/story', color: '#FF1493' },
    { title: t('featured.characters.title'), desc: t('featured.characters.desc'), path: '/characters', color: '#00FFFF' },
    { title: t('featured.world.title'), desc: t('featured.world.desc'), path: '/world', color: '#FF1493' },
  ];

  const recentLore = loreEntries.slice(0, 4);
  const latestArticles = blogArticles.slice(0, 3);

  return (
    <>
      <SEOHead
        title={seo.index.title[lang] || seo.index.title.en}
        description={seo.index.desc[lang] || seo.index.desc.en}
        path="/"
        lang={lang}
        faqItems={seo.faq[lang]}
        includeVideoGameSchema
      />

      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a000f 0%, #1a0025 30%, #0a000f 100%)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 20, 147, 0.08) 0%, transparent 70%)' }} />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div
              className="transition-all duration-1000"
              style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)' }}
            >
              <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: '#00FFFF', textShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}>
                {t('hero.eyebrow')}
              </p>
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-2">
                <span style={{ color: '#FF1493', textShadow: '0 0 40px rgba(255, 20, 147, 0.6), 0 0 80px rgba(255, 20, 147, 0.3)' }}>GTA</span>
                <span className="ml-4" style={{ color: '#00FFFF', textShadow: '0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 255, 255, 0.3)' }}>VI</span>
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.25em] uppercase mt-4 mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {[t('hero.pill.openworld'), t('hero.pill.action'), t('hero.pill.crime')].map(pill => (
                  <span key={pill} className="px-4 py-1.5 rounded-full text-xs tracking-wider" style={{ border: '1px solid rgba(255, 20, 147, 0.4)', color: 'rgba(255,255,255,0.7)', background: 'rgba(255, 20, 147, 0.08)' }}>
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/story" className="px-8 py-3 text-sm font-bold tracking-wider rounded transition-all duration-300" style={{ background: 'linear-gradient(135deg, #FF1493, #cc1177)', color: 'white', boxShadow: '0 0 20px rgba(255, 20, 147, 0.4)' }}>
                  {t('hero.cta.explore')}
                </Link>
                <Link to="/characters" className="px-8 py-3 text-sm font-bold tracking-wider rounded transition-all duration-300" style={{ border: '1px solid #00FFFF', color: '#00FFFF' }}>
                  {t('hero.cta.characters')}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <p className="text-xs tracking-[0.2em] uppercase">{t('hero.scroll')}</p>
          </div>
        </section>

        {/* Announcement */}
        <div className="py-3 text-center text-xs tracking-wider" style={{ background: 'linear-gradient(90deg, rgba(255, 20, 147, 0.15), rgba(0, 255, 255, 0.1), rgba(255, 20, 147, 0.15))', color: '#00FFFF' }}>
          {t('announce.text')}
        </div>

        {/* Stats */}
        <section ref={statsRef} className="py-16 px-4" style={{ background: 'rgba(10, 0, 15, 0.95)' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center" style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(20px)', transition: `all 600ms ease ${i * 150}ms` }}>
                <div className="text-4xl sm:text-5xl font-black" style={{ color: '#FF1493', textShadow: '0 0 20px rgba(255, 20, 147, 0.4)' }}>{s.value}</div>
                <div className="text-xs tracking-[0.15em] uppercase mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <NeonDivider />

        {/* Featured Sections */}
        <section className="py-20 px-4" style={{ background: '#0a000f' }}>
          <div className="max-w-6xl mx-auto space-y-16">
            {featured.map((f, i) => (
              <RevealOnScroll key={f.path} stagger={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg" style={{ background: 'rgba(255, 20, 147, 0.03)', border: `1px solid ${f.color}33` }}>
                  <div className="flex-1">
                    <h2 className="text-3xl font-black tracking-tight mb-4" style={{ color: f.color, textShadow: `0 0 20px ${f.color}66` }}>{f.title}</h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>{f.desc}</p>
                    <Link to={f.path} className="inline-block px-6 py-2 text-xs font-bold tracking-wider rounded transition-colors" style={{ border: `1px solid ${f.color}`, color: f.color }}>
                      {t('featured.discover')} &rarr;
                    </Link>
                  </div>
                  <div className="w-full md:w-48 h-48 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${f.color}22, transparent)`, border: `1px solid ${f.color}22` }}>
                    <span className="text-6xl font-black" style={{ color: `${f.color}33` }}>{f.title[0]}</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <NeonDivider variant="section" title={t('home.characters.title')} />

        {/* Characters Preview */}
        <section className="py-16 px-4" style={{ background: '#0a000f' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {characters.map(char => (
                <RevealOnScroll key={char.id}>
                  <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 20, 147, 0.03)', border: '1px solid rgba(255, 20, 147, 0.15)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: char.colorTheme === 'pink' ? '#FF1493' : '#00FFFF' }}>{char.name}</h3>
                    <p className="text-xs tracking-wider uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>{tr(char.role, lang)}</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{tr(char.bio, lang).substring(0, 200)}...</p>
                    <p className="text-xs italic" style={{ color: char.colorTheme === 'pink' ? '#FF1493' : '#00FFFF' }}>"{tr(char.signatureQuote, lang)}"</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/characters" className="text-sm tracking-wider transition-colors" style={{ color: '#00FFFF' }}>
                {t('home.characters.seeMore')} &rarr;
              </Link>
            </div>
          </div>
        </section>

        <NeonDivider variant="section" title={t('recent.title')} />

        {/* Recent Lore */}
        <section className="py-16 px-4" style={{ background: '#0a000f' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentLore.map(entry => (
              <RevealOnScroll key={entry.id}>
                <Link to="/lore" className="block p-5 rounded-lg transition-all duration-300" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                  <span className="text-[0.6rem] tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(0, 255, 255, 0.15)', color: '#00FFFF' }}>{t(`cat.${entry.category}`)}</span>
                  <h4 className="text-sm font-bold mt-3 mb-2" style={{ color: 'white' }}>{entry.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(entry.excerpt, lang)}</p>
                  <p className="text-[0.6rem] mt-3" style={{ color: 'rgba(255,255,255,0.3)' }}>{entry.readingTime} {t('recent.read')}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        {latestArticles.length > 0 && (
          <>
            <NeonDivider variant="section" title={t('home.latest_articles')} />
            <section className="py-16 px-4" style={{ background: '#0a000f' }}>
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {latestArticles.map(article => (
                  <RevealOnScroll key={article.id}>
                    <Link to={`/blog/${article.slug}`} className="block p-5 rounded-lg transition-all duration-300" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                      <span className="text-[0.6rem] tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(255, 20, 147, 0.2)', color: '#FF1493' }}>{t(`blog.cat.${article.category.toLowerCase()}`)}</span>
                      <h4 className="text-sm font-bold mt-3 mb-2" style={{ color: 'white' }}>{tr(article.title, lang)}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(article.excerpt, lang).substring(0, 120)}...</p>
                      <p className="text-[0.6rem] mt-3" style={{ color: 'rgba(255,255,255,0.3)' }}>{article.readingTime} min {t('recent.read')}</p>
                    </Link>
                  </RevealOnScroll>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Buy CTA */}
        <section className="py-20 px-4 text-center" style={{ background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.1), rgba(0, 255, 255, 0.05))' }}>
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('buy.cta.title')}
            </h2>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('buy.cta.desc')}</p>
            <Link to="/buy" className="inline-block px-10 py-3 text-sm font-bold tracking-wider rounded transition-all" style={{ background: 'linear-gradient(135deg, #FF1493, #cc1177)', color: 'white', boxShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('buy.cta.button')}
            </Link>
          </RevealOnScroll>
        </section>
      </main>
    </>
  );
};

export default Index;
