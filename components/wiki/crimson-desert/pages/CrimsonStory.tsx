'use client';

import { useState, useRef } from 'react';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import { chapters } from '@/lib/data/crimson-desert/story';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';

export default function CrimsonStory({ locale }: { locale: string }) {
  const { t, lang } = useCrimsonI18n(locale);
  const [spoilerFree, setSpoilerFree] = useState(true);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const chapterRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToChapter = (id: string) => {
    chapterRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <CrimsonNavBar locale={locale} />

      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-surface to-surface" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <RevealOnScroll>
            <h1 className="font-display text-4xl md:text-6xl text-gold-bright mb-4">{t('story.title')}</h1>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">{t('story.journey')}</p>
          </RevealOnScroll>
        </div>
      </section>

      <GoldDivider />

      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-ui text-sm text-text-secondary">{t('story.spoiler_level')}:</span>
            <button onClick={() => setSpoilerFree(true)}
              className={`font-ui px-4 py-2 rounded-l border transition-all ${spoilerFree ? 'bg-gold-bright/20 border-gold-mid text-gold-bright' : 'bg-surface-elevated border-border text-text-secondary hover:border-gold-mid/30'}`}>
              {t('story.spoiler_free')}
            </button>
            <button onClick={() => setSpoilerFree(false)}
              className={`font-ui px-4 py-2 rounded-r border border-l-0 transition-all ${!spoilerFree ? 'bg-red-900/30 border-red-500/50 text-red-400' : 'bg-surface-elevated border-border text-text-secondary hover:border-gold-mid/30'}`}>
              {t('story.full_lore')}
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-ui text-sm text-text-secondary mr-2">{t('story.quick_nav')}:</span>
            {chapters.map(ch => (
              <button key={ch.id} onClick={() => scrollToChapter(ch.id)}
                className="w-8 h-8 rounded-full border border-gold-mid/30 text-gold-mid font-ui text-xs hover:bg-gold-bright/20 hover:border-gold-mid transition-all flex items-center justify-center">
                {ch.number}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-bright/50 via-gold-mid/30 to-transparent" />

          {chapters.map((chapter, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedChapter === chapter.id;

            return (
              <div key={chapter.id} ref={el => { chapterRefs.current[chapter.id] = el; }} className="relative mb-16">
                <RevealOnScroll>
                  <div className={`flex flex-col md:flex-row items-start ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-surface-elevated border-2 border-gold-mid flex items-center justify-center shadow-lg shadow-gold-bright/10">
                        <span className="font-heading text-sm text-gold-bright">{chapter.numeral}</span>
                      </div>
                    </div>

                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <button onClick={() => setExpandedChapter(isExpanded ? null : chapter.id)} className="w-full text-left group">
                        <div className="bg-surface-elevated border border-border rounded-lg p-6 transition-all duration-500 hover:border-gold-mid/30 hover:shadow-lg hover:shadow-gold-bright/5">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-ui text-xs text-gold-mid/70 uppercase tracking-wider">{t('story.chapter')} {chapter.number}</span>
                            <svg className={`w-5 h-5 text-gold-mid transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="font-heading text-xl text-gold-bright mb-3">{tr(chapter.title, lang)}</h3>
                          {spoilerFree ? (
                            <div className="relative">
                              <p className="font-body text-text-secondary leading-relaxed line-clamp-3">{tr(chapter.synopsis, lang)}</p>
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-elevated flex items-end justify-center pb-2">
                                <span className="font-ui text-xs text-gold-mid/70">{t('story.unlock')}</span>
                              </div>
                            </div>
                          ) : (
                            <p className="font-body text-text-secondary leading-relaxed">{tr(chapter.synopsis, lang)}</p>
                          )}
                          {chapter.keyCharacters.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {chapter.keyCharacters.map(c => (
                                <span key={c} className="px-2 py-1 text-xs font-ui rounded bg-gold-bright/10 border border-gold-mid/20 text-gold-mid">{c}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </button>

                      {isExpanded && !spoilerFree && chapter.keyEvents.length > 0 && (
                        <div className="mt-4 space-y-3 pl-4 border-l-2 border-gold-mid/20">
                          <h4 className="font-heading text-sm text-gold-mid uppercase tracking-wider mb-3">{t('story.key_events')}</h4>
                          {chapter.keyEvents.map((event, eIdx) => (
                            <div key={eIdx} className="bg-surface rounded-lg p-4 border border-border">
                              <h5 className="font-heading text-sm text-gold-bright mb-2">{tr(event.title, lang)}</h5>
                              <p className="font-body text-sm text-text-secondary leading-relaxed">{tr(event.description, lang)}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            );
          })}
        </div>
      </section>

      <CrimsonFooter locale={locale} />
    </div>
  );
}
