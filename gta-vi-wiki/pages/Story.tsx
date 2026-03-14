// @ts-nocheck
import { useState } from 'react';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { chapters } from '@/gta-vi-wiki/data/story';

const Story = () => {
  const { t, lang } = useI18n();
  const [spoilerLevel, setSpoilerLevel] = useState(0);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  return (
    <>
      <SEOHead
        title={seo.story.title[lang] || seo.story.title.en}
        description={seo.story.desc[lang] || seo.story.desc.en}
        path="/story"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.story[lang], path: '/story' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('story.title')}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {/* Spoiler control */}
          <RevealOnScroll>
            <div className="flex items-center justify-center gap-6 mb-12">
              <span className="text-xs tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('story.spoiler_level')}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSpoilerLevel(0)}
                  className="px-4 py-2 text-xs rounded transition-all"
                  style={{ background: spoilerLevel === 0 ? 'rgba(0, 255, 255, 0.15)' : 'transparent', border: `1px solid ${spoilerLevel === 0 ? '#00FFFF' : 'rgba(255,255,255,0.1)'}`, color: spoilerLevel === 0 ? '#00FFFF' : 'rgba(255,255,255,0.4)' }}
                >
                  {t('story.spoiler_free')}
                </button>
                <button
                  onClick={() => setSpoilerLevel(1)}
                  className="px-4 py-2 text-xs rounded transition-all"
                  style={{ background: spoilerLevel === 1 ? 'rgba(255, 20, 147, 0.15)' : 'transparent', border: `1px solid ${spoilerLevel === 1 ? '#FF1493' : 'rgba(255,255,255,0.1)'}`, color: spoilerLevel === 1 ? '#FF1493' : 'rgba(255,255,255,0.4)' }}
                >
                  {t('story.full_lore')}
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Quick nav */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {chapters.map(ch => (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(activeChapter === ch.id ? null : ch.id)}
                  className="px-4 py-2 text-xs font-bold tracking-wider rounded transition-all"
                  style={{
                    background: activeChapter === ch.id ? 'rgba(255, 20, 147, 0.15)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${activeChapter === ch.id ? '#FF1493' : 'rgba(255,255,255,0.1)'}`,
                    color: activeChapter === ch.id ? '#FF1493' : 'rgba(255,255,255,0.5)',
                  }}
                >
                  {t('story.chapter')} {ch.numeral}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Chapters */}
          <div className="space-y-12 pb-20">
            {chapters.map((ch, idx) => (
              <RevealOnScroll key={ch.id} stagger={idx * 100}>
                <div className="p-8 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-black" style={{ color: '#FF1493', textShadow: '0 0 15px rgba(255, 20, 147, 0.3)' }}>{ch.numeral}</span>
                    <div>
                      <p className="text-[0.6rem] tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('story.chapter')} {ch.number}</p>
                      <h2 className="text-xl font-bold" style={{ color: 'white' }}>{tr(ch.title, lang)}</h2>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {spoilerLevel === 0 ? tr(ch.synopsis, lang).substring(0, 200) + '...' : tr(ch.synopsis, lang)}
                  </p>

                  {ch.pullQuote && (
                    <div className="pl-4 my-6" style={{ borderLeft: '2px solid #FF1493' }}>
                      <p className="text-sm italic" style={{ color: '#00FFFF' }}>"{tr(ch.pullQuote, lang)}"</p>
                    </div>
                  )}

                  {spoilerLevel === 1 && (
                    <div className="mt-6">
                      <h3 className="text-xs tracking-wider uppercase mb-4" style={{ color: '#00FFFF' }}>{t('story.key_events')}</h3>
                      <div className="space-y-3">
                        {ch.keyEvents.map((ev, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#FF1493', boxShadow: '0 0 8px #FF1493' }} />
                            <div>
                              <h4 className="text-sm font-bold" style={{ color: 'white' }}>{tr(ev.title, lang)}</h4>
                              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(ev.description, lang)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {spoilerLevel === 0 && (
                    <button
                      onClick={() => setSpoilerLevel(1)}
                      className="text-xs tracking-wider mt-4 transition-colors"
                      style={{ color: '#FF1493' }}
                    >
                      {t('story.unlock')} &rarr;
                    </button>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Story;
