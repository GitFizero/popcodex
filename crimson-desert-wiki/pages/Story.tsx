// @ts-nocheck
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import { chapters } from '@/crimson-desert-wiki/data/story';
import { characters } from '@/crimson-desert-wiki/data/characters';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

const StoryPage = () => {
  const { t, lang } = useI18n();
  const [introVisible, setIntroVisible] = useState(true);
  const [spoilerFree, setSpoilerFree] = useState(true);

  useEffect(() => { const ti = setTimeout(() => setIntroVisible(false), 2000); return () => clearTimeout(ti); }, []);

  return (
    <main id="main-content" className="relative z-10 min-h-screen">
      <SEOHead
        title={seo.story.title[lang]}
        description={seo.story.desc[lang]}
        path="/story"
        type="article"
        lang={lang}
        datePublished="2026-03-01"
        dateModified="2026-03-08"
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.story[lang], path: '/story' },
        ]}
      />

      {introVisible && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-void" style={{ animation: 'fade-out 0.6s ease-in-out 1.4s forwards', opacity: 1 }}>
          <h1 className="font-display text-3xl sm:text-5xl text-gold-bright text-center tracking-[0.2em]" style={{ animation: 'scale-in 1s ease-out forwards' }}>
            {t('story.title')}
          </h1>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="sr-only">{seo.story.title[lang]}</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <RevealOnScroll><GoldDivider variant="section" title={t('story.journey')} /></RevealOnScroll>
            <div className="relative mt-12">
              <div className="absolute left-6 sm:left-4 lg:left-1/2 top-0 bottom-0 w-[2px] sm:w-[3px] bg-crimson-core/30 -translate-x-1/2" />
              {chapters.map((ch, i) => {
                const isRight = i % 2 === 1;
                const isLast = i === chapters.length - 1;
                const blurred = spoilerFree && isLast;
                return (
                  <div key={ch.id} id={ch.id}>
                    {ch.pullQuote && i > 0 && chapters[i - 1].pullQuote && (
                      <RevealOnScroll className="my-8 sm:my-12 px-4 lg:px-16">
                        <blockquote className="text-center">
                          <p className="font-lore italic text-lg sm:text-2xl text-gold-mid/70 leading-relaxed">"{chapters[i - 1].pullQuote![lang]}"</p>
                        </blockquote>
                      </RevealOnScroll>
                    )}
                    <div className={`relative flex items-start mb-10 sm:mb-16 ${isRight ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="absolute left-6 sm:left-4 lg:left-1/2 -translate-x-1/2 z-10">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rotate-45 bg-gold-mid border-2 border-crimson-core" />
                      </div>
                      <div className="w-10 sm:w-12 lg:hidden flex-shrink-0" />
                      <RevealOnScroll direction={isRight ? 'right' : 'left'} className={`flex-1 lg:w-[45%] ${isRight ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                        <div className={`relative rounded-lg bg-card-bg border border-border p-4 sm:p-6 ${blurred ? 'filter blur-sm select-none' : ''}`} style={{ boxShadow: 'var(--shadow-card)' }}>
                          <span className="absolute -top-3 sm:-top-4 -left-1 sm:-left-2 font-display text-3xl sm:text-5xl text-crimson-deep/30 select-none" aria-hidden="true">{ch.numeral}</span>
                          <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden"><div className="absolute -top-5 -left-5 w-10 h-10 rotate-45 bg-gold-mid/20" /></div>
                          <div className="relative z-10 pt-2">
                            <span className="font-ui text-[0.6rem] tracking-[0.3em] text-crimson-bright">{t('story.chapter')} {ch.numeral}</span>
                            <h3 className="font-heading text-xl text-gold-bright mt-1">{ch.title[lang]}</h3>
                            <p className="font-body text-sm text-text-secondary mt-3 leading-relaxed">{ch.synopsis[lang]}</p>
                            <details className="mt-4 group">
                              <summary className="font-ui text-[0.65rem] tracking-wider text-text-muted-custom cursor-pointer hover:text-gold-mid transition-colors focus-gold">{t('story.key_events')} ▾</summary>
                              <div className="mt-2 space-y-2 pl-3 border-l border-crimson-core/30">
                                {ch.keyEvents.map(ev => (
                                  <div key={ev.title[lang]}>
                                    <span className="font-body text-xs text-text-primary font-semibold">{ev.title[lang]}</span>
                                    <p className="font-body text-xs text-text-muted-custom italic">{ev.description[lang]}</p>
                                  </div>
                                ))}
                              </div>
                            </details>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {ch.keyCharacters.map(cId => {
                                const c = characters.find(x => x.id === cId);
                                return c ? (
                                  <Link key={cId} to="/characters" className="font-ui text-[0.6rem] tracking-wider px-2 py-1 rounded-full bg-raised/80 text-text-secondary border border-border hover:border-gold-mid hover:text-gold-bright transition-all duration-200 focus-gold" title={`${c.name} — Crimson Desert`}>{c.name}</Link>
                                ) : null;
                              })}
                            </div>
                          </div>
                        </div>
                        {blurred && (
                          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-void/50">
                            <button onClick={() => setSpoilerFree(false)} className="btn-primary text-sm">{t('story.unlock')}</button>
                          </div>
                        )}
                      </RevealOnScroll>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface/50 border border-border rounded-lg p-4">
                <h4 className="font-heading text-xs tracking-[0.15em] text-gold-mid mb-3">{t('story.quick_nav')}</h4>
                <div className="space-y-2">
                  {chapters.map(ch => (
                    <a key={ch.id} href={`#${ch.id}`} className="block font-ui text-[0.7rem] text-text-secondary hover:text-gold-bright transition-colors focus-gold">
                      {ch.numeral}. {ch.title[lang]}
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-surface/50 border border-border rounded-lg p-4">
                <h4 className="font-heading text-xs tracking-[0.15em] text-gold-mid mb-3">{t('story.spoiler_level')}</h4>
                <button onClick={() => setSpoilerFree(!spoilerFree)}
                  className={`w-full font-ui text-[0.65rem] tracking-wider py-2 px-3 rounded border transition-all duration-200 focus-gold
                    ${spoilerFree ? 'bg-gold-dark/20 border-gold-mid/30 text-gold-bright' : 'bg-crimson-deep/20 border-crimson-core/30 text-crimson-bright'}`}>
                  {spoilerFree ? t('story.spoiler_free') : t('story.full_lore')}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default StoryPage;
