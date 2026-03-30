// @ts-nocheck
import { useState } from 'react';
import { useI18n, tr } from '@/fable-wiki/context/I18nContext';
import { chapters } from '@/fable-wiki/data/story';
import { characters } from '@/fable-wiki/data/characters';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Story = () => {
  const { t, lang } = useI18n();
  const [expandedChapter, setExpandedChapter] = useState<string | null>('chapter-1');

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.story.title[lang]}
        description={seo.story.desc[lang]}
        path="/story"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.story[lang], path: '/story' },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('story.title')} />
          <p className="text-center font-heading text-sm tracking-[0.2em] text-gray-500 mt-4">{t('story.journey')}</p>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-900/40" />

          {chapters.map((chapter, i) => {
            const isExpanded = expandedChapter === chapter.id;
            const keyChars = chapter.keyCharacters
              .map(id => characters.find(c => c.id === id))
              .filter(Boolean);

            return (
              <RevealOnScroll key={chapter.id} stagger={i * 150}>
                <div className="relative pl-16 pb-12">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-emerald-500 bg-[hsl(150,30%,5%)] flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full transition-colors ${isExpanded ? 'bg-emerald-400' : 'bg-emerald-700'}`} />
                  </div>

                  <button
                    onClick={() => setExpandedChapter(isExpanded ? null : chapter.id)}
                    className="w-full text-left group"
                  >
                    <span className="font-body text-[0.6rem] tracking-[0.3em] text-yellow-500">
                      {lang === 'fr' ? 'CHAPITRE' : 'CHAPTER'} {chapter.numeral}
                    </span>
                    <h3 className="font-heading text-xl text-emerald-400 mt-1 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300">
                      {tr(chapter.title, lang)}
                    </h3>
                  </button>

                  {isExpanded && (
                    <div className="mt-4 space-y-6 animate-fade-in">
                      <p className="font-body text-sm text-gray-300 leading-relaxed">{tr(chapter.synopsis, lang)}</p>

                      {chapter.pullQuote && (
                        <blockquote className="border-l-2 border-emerald-500/40 pl-4">
                          <p className="font-body text-sm text-gray-200 italic">{tr(chapter.pullQuote, lang)}</p>
                        </blockquote>
                      )}

                      {/* Key Events */}
                      <div>
                        <h4 className="font-heading text-sm tracking-[0.15em] text-emerald-500/80 mb-3">
                          {lang === 'fr' ? 'EVENEMENTS CLES' : 'KEY EVENTS'}
                        </h4>
                        <div className="space-y-3">
                          {chapter.keyEvents.map((evt, j) => (
                            <div key={j} className="p-3 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,6%)]">
                              <h5 className="font-heading text-sm text-emerald-400">{tr(evt.title, lang)}</h5>
                              <p className="font-body text-xs text-gray-400 mt-1">{tr(evt.description, lang)}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Characters */}
                      {keyChars.length > 0 && (
                        <div>
                          <h4 className="font-heading text-sm tracking-[0.15em] text-emerald-500/80 mb-3">
                            {lang === 'fr' ? 'PERSONNAGES CLES' : 'KEY CHARACTERS'}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {keyChars.map(c => (
                              <span key={c.id} className="px-3 py-1.5 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,6%)] font-body text-xs text-gray-300">
                                {c.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Story;
