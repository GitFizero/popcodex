// @ts-nocheck
import { useState } from 'react';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';
import { chapters } from '@/wolverine-wiki/data/story';
import { characters } from '@/wolverine-wiki/data/characters';

const StoryPage = () => {
  const { t, lang } = useI18n();
  const [spoilerLevel, setSpoilerLevel] = useState(0);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const visibleChapters = chapters.slice(0, spoilerLevel === 0 ? 2 : chapters.length);

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('story.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.story.title[lang]}</h1>

        {/* Spoiler Control */}
        <RevealOnScroll className="mt-8">
          <div className="bg-surface/50 border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="font-heading text-sm tracking-[0.15em] text-gold-mid">{t('story.spoiler_level')}</h2>
                <p className="font-body text-xs text-text-muted-custom mt-1">
                  {spoilerLevel === 0 ? t('story.spoiler_free') : t('story.full_lore')}
                </p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setSpoilerLevel(0)} className={`px-4 py-2 rounded font-ui text-xs tracking-wider transition-all ${spoilerLevel === 0 ? 'bg-yellow-600/30 text-yellow-400 border border-yellow-500/50' : 'text-text-muted-custom border border-border'}`}>
                  {t('story.spoiler_free')}
                </button>
                <button onClick={() => setSpoilerLevel(1)} className={`px-4 py-2 rounded font-ui text-xs tracking-wider transition-all ${spoilerLevel === 1 ? 'bg-red-600/30 text-red-400 border border-red-500/50' : 'text-text-muted-custom border border-border'}`}>
                  {t('story.full_lore')}
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Quick Nav */}
        <RevealOnScroll className="mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom self-center mr-2">{t('story.quick_nav')}:</span>
            {visibleChapters.map(ch => (
              <button key={ch.id} onClick={() => setActiveChapter(activeChapter === ch.id ? null : ch.id)}
                className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded-full border transition-all
                  ${activeChapter === ch.id ? 'bg-yellow-600/30 border-yellow-500 text-yellow-400' : 'border-border text-text-muted-custom hover:text-text-secondary'}`}>
                {ch.numeral} — {ch.title[lang]}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/20 to-transparent" />
          <div className="space-y-12">
            {visibleChapters.map((ch, i) => (
              <RevealOnScroll key={ch.id} stagger={i * 100}>
                <div className={`relative pl-12 sm:pl-20 transition-all duration-500 ${activeChapter && activeChapter !== ch.id ? 'opacity-40' : ''}`}>
                  <div className="absolute left-2 sm:left-6 top-0 w-4 h-4 rounded-full bg-yellow-500 border-2 border-gray-900" />
                  <div className="bg-surface/50 border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-ui text-[0.6rem] tracking-[0.3em] text-yellow-500">{t('story.chapter')} {ch.numeral}</span>
                      <h3 className="font-display text-xl text-gold-bright">{ch.title[lang]}</h3>
                    </div>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">{ch.synopsis[lang]}</p>

                    {ch.pullQuote && (
                      <blockquote className="mt-4 pl-4 border-l-2 border-yellow-500/40">
                        <p className="font-lore italic text-sm text-text-secondary">"{ch.pullQuote[lang]}"</p>
                      </blockquote>
                    )}

                    {/* Key Events */}
                    <div className="mt-6">
                      <h4 className="font-heading text-xs tracking-[0.15em] text-gold-mid mb-3">{t('story.key_events')}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ch.keyEvents.map(ev => (
                          <div key={ev.title[lang]} className="bg-raised/30 rounded-md p-3 border border-border/50">
                            <div className="font-heading text-xs text-yellow-400">{ev.title[lang]}</div>
                            <p className="font-body text-xs text-text-muted-custom mt-1">{ev.description[lang]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Characters */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ch.keyCharacters.map(cId => {
                        const c = characters.find(x => x.id === cId);
                        return c ? (
                          <span key={cId} className="font-ui text-[0.6rem] tracking-wider px-2 py-1 rounded bg-gray-800 text-text-secondary border border-border/50">
                            {c.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {spoilerLevel === 0 && chapters.length > 2 && (
          <RevealOnScroll className="mt-8 text-center">
            <button onClick={() => setSpoilerLevel(1)} className="btn-outline">
              {t('story.unlock')} ({chapters.length - 2} {t('story.chapter').toLowerCase()}s)
            </button>
          </RevealOnScroll>
        )}
      </div>
    </main>
  );
};

export default StoryPage;
