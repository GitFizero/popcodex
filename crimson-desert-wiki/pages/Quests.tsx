// @ts-nocheck
import { useState } from 'react';
import { quests, questTypeLabels, type QuestType } from '@/crimson-desert-wiki/data/quests';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

type Filter = 'ALL' | QuestType;

const QuestsPage = () => {
  const { lang, t } = useI18n();
  const [filter, setFilter] = useState<Filter>('ALL');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = filter === 'ALL' ? quests.filter(q => q.known) : quests.filter(q => q.known && q.type === filter);
  const selectedQuest = quests.find(q => q.id === selected);

  const typeColors: Record<QuestType, string> = {
    MAIN: 'bg-crimson-deep/50 text-crimson-bright border-crimson-core/30',
    SIDE: 'bg-gold-dark/30 text-gold-bright border-gold-mid/30',
    FACTION: 'bg-[#1a3b3b]/30 text-[#4DB6AC] border-[#4DB6AC]/30',
    HIDDEN: 'bg-smoke-mid/30 text-text-secondary border-border',
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.quests.title[lang]}
        description={seo.quests.desc[lang]}
        path="/quests"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.quests[lang], path: '/quests' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('quests.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.quests.title[lang]}</h1>

        <p className="font-body text-sm text-text-secondary text-center mt-4 max-w-2xl mx-auto">{t('quests.subtitle')}</p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
          {(['ALL', 'MAIN', 'SIDE', 'FACTION', 'HIDDEN'] as Filter[]).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`font-ui text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === f ? 'bg-crimson-deep border-crimson-bright text-gold-bright' : 'border-border text-text-secondary hover:border-gold-mid hover:text-gold-mid'}`}>
              {f === 'ALL' ? t('quests.all') : questTypeLabels[f][lang]}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Quest chain / list */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Chain line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-4">
                {filtered.map((quest, i) => (
                  <RevealOnScroll key={quest.id} stagger={i * 100}>
                    <button onClick={() => setSelected(quest.id)}
                      className={`w-full text-left pl-12 pr-4 py-4 rounded-lg border transition-all duration-200 relative focus-gold ${
                        selected === quest.id ? 'bg-card-bg border-gold-mid/50' : 'bg-surface/50 border-border hover:bg-raised/50'}`}>
                      {/* Chain node */}
                      <div className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        quest.type === 'MAIN' ? 'border-crimson-bright bg-crimson-deep/50' : 'border-gold-mid bg-gold-dark/30'}`}>
                        {quest.chapter && <span className="font-ui text-[0.5rem] text-text-primary">{quest.chapter}</span>}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-sm text-text-primary">{quest.name[lang]}</span>
                        <span className={`font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded-full border ${typeColors[quest.type]}`}>
                          {questTypeLabels[quest.type][lang]}
                        </span>
                      </div>
                      {quest.faction && <span className="font-ui text-[0.55rem] text-text-muted-custom mt-1 block">{quest.faction}</span>}
                    </button>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>

          {/* Quest detail */}
          <div className="lg:w-1/2">
            {selectedQuest ? (
              <div className="sticky top-24 p-6 rounded-lg bg-surface/50 border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                <span className={`font-ui text-[0.6rem] tracking-wider px-2 py-0.5 rounded-full border ${typeColors[selectedQuest.type]}`}>
                  {questTypeLabels[selectedQuest.type][lang]}
                </span>
                {selectedQuest.chapter && (
                  <span className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom ml-2">
                    {t('story.chapter')} {selectedQuest.chapter}
                  </span>
                )}
                <h2 className="font-display text-2xl text-gold-bright mt-3">{selectedQuest.name[lang]}</h2>
                <p className="font-body text-sm text-text-secondary mt-4 leading-relaxed">{selectedQuest.description[lang]}</p>

                {/* Prerequisites */}
                {selectedQuest.prerequisites.length > 0 && (
                  <div className="mt-6 p-3 bg-raised/30 rounded-md border border-border">
                    <h4 className="font-heading text-xs tracking-wider text-crimson-bright mb-2">{t('quests.prerequisites')}</h4>
                    <ul className="space-y-1">
                      {selectedQuest.prerequisites.map(preId => {
                        const pre = quests.find(q => q.id === preId);
                        return pre ? (
                          <li key={preId}>
                            <button onClick={() => setSelected(preId)} className="font-body text-sm text-gold-mid hover:text-gold-bright transition-colors">
                              ← {pre.name[lang]}
                            </button>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                )}

                {/* Rewards */}
                <div className="mt-4 p-3 bg-raised/30 rounded-md border border-border">
                  <h4 className="font-heading text-xs tracking-wider text-gold-mid mb-2">{t('quests.rewards')}</h4>
                  <p className="font-body text-sm text-text-secondary">{selectedQuest.rewards[lang]}</p>
                </div>

                {/* Chain navigation */}
                <div className="flex justify-between mt-6">
                  {selectedQuest.previousQuest ? (
                    <button onClick={() => setSelected(selectedQuest.previousQuest!)} className="font-ui text-xs text-gold-mid hover:text-gold-bright transition-colors">
                      ← {quests.find(q => q.id === selectedQuest.previousQuest)?.name[lang]}
                    </button>
                  ) : <span />}
                  {selectedQuest.nextQuest ? (
                    <button onClick={() => setSelected(selectedQuest.nextQuest!)} className="font-ui text-xs text-gold-mid hover:text-gold-bright transition-colors">
                      {quests.find(q => q.id === selectedQuest.nextQuest)?.name[lang]} →
                    </button>
                  ) : <span />}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 rounded-lg border border-border bg-surface/30">
                <p className="font-body text-sm text-text-muted-custom">{t('quests.select')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuestsPage;
