'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWolverineI18n } from '@/lib/data/wolverine/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

const WolverineHome = ({ locale }: { locale: string }) => {
  const { t } = useWolverineI18n(locale);
  const prefix = `/${locale}/wolverine`;
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
    { value: '10+', label: t('stats.characters') },
    { value: '3', label: t('stats.locations') },
    { value: '6+', label: t('stats.powers') },
    { value: '4', label: t('stats.years') },
  ], [t]);

  const featureCards = useMemo(() => [
    {
      title: t('featured.story.title'),
      desc: t('featured.story.desc'),
      link: `${prefix}/story`,
      image: '/images/wolverine/screenshot-01.jpg',
    },
    {
      title: t('featured.characters.title'),
      desc: t('featured.characters.desc'),
      link: `${prefix}/characters`,
      image: '/images/wolverine/screenshot-02.jpg',
    },
    {
      title: t('featured.world.title'),
      desc: t('featured.world.desc'),
      link: `${prefix}/locations`,
      image: '/images/wolverine/screenshot-03.jpg',
    },
  ], [t, prefix]);

  return (
    <main id="main-content" className="relative z-10">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/wolverine/hero-landscape.jpg"
            alt="Marvel's Wolverine — © Insomniac Games / Sony"
            fill
            className="object-cover opacity-[0.25]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(45 100% 50% / 0.06) 0%, transparent 60%)' }} />

        <div className="relative z-10 text-center px-4">
          <div
            className={`transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="font-ui text-[0.65rem] tracking-[0.25em] uppercase mb-6" style={{ color: '#EAB308' }}>
              {t('hero.eyebrow')}
            </p>
            <h1
              className="font-display text-6xl sm:text-8xl lg:text-9xl font-bold tracking-[0.08em] uppercase"
              style={{
                color: '#EAB308',
                textShadow: '0 0 60px rgba(234, 179, 8, 0.3), 0 0 120px rgba(234, 179, 8, 0.1)',
              }}
            >
              WOLVERINE
            </h1>
            <p className="font-ui text-[0.6rem] tracking-[0.3em] uppercase mt-4 text-neutral-500">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href={`${prefix}/characters`}
                className="px-6 py-3 rounded font-heading text-sm tracking-[0.1em] transition-all duration-200 hover:scale-[1.03]"
                style={{ background: '#EAB308', color: '#000', fontWeight: 700 }}
              >
                {t('hero.cta.explore')}
              </Link>
              <Link
                href={`${prefix}/story`}
                className="px-6 py-3 rounded font-heading text-sm tracking-[0.1em] border transition-all duration-200 hover:scale-[1.03]"
                style={{ borderColor: 'hsl(45 72% 66% / 0.4)', color: '#EAB308' }}
              >
                {t('hero.cta.characters')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="relative z-10 py-16" style={{ background: 'hsl(0 0% 4%)' }}>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className={`transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-display text-4xl md:text-5xl font-bold" style={{ color: '#EAB308' }}>{s.value}</div>
              <div className="font-ui text-[0.65rem] tracking-[0.15em] uppercase mt-2 text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Sections */}
      <section className="relative z-10 py-20" style={{ background: 'hsl(0 0% 3%)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <RevealOnScroll key={i}>
                <Link href={card.link} className="group block relative rounded-lg overflow-hidden no-underline" style={{ height: '360px' }}>
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-xl tracking-[0.08em]" style={{ color: '#EAB308' }}>{card.title}</h3>
                    <p className="font-body text-sm text-neutral-400 mt-2 line-clamp-2">{card.desc}</p>
                    <span className="font-ui text-[0.65rem] tracking-[0.15em] uppercase mt-3 inline-block transition-all group-hover:gap-3" style={{ color: '#EAB308' }}>
                      {t('featured.explore')} →
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WolverineHome;
