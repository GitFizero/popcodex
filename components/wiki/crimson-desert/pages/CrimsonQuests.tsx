'use client';

import { useState, useMemo, useCallback } from 'react';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import {
  quests,
  questTypeLabels,
  type Quest,
  type QuestType,
} from '@/lib/data/crimson-desert/quests';

type TypeFilter = 'ALL' | QuestType;

const typeIcons: Record<QuestType, string> = {
  MAIN: '\u2694\uFE0F',
  SIDE: '\uD83D\uDCDC',
  FACTION: '\uD83C\uDFF0',
  HIDDEN: '\uD83D\uDD75\uFE0F',
};

const typeColors: Record<QuestType, string> = {
  MAIN: 'bg-gold-dark/60 border-gold-mid/40 text-gold-bright',
  SIDE: 'bg-surface border-border text-text-secondary',
  FACTION: 'bg-crimson-deep/30 border-crimson-deep/40 text-sand-pale',
  HIDDEN: 'bg-purple-900/30 border-purple-400/30 text-purple-300',
};

const CrimsonQuests = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('ALL');
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  const types: { key: TypeFilter; label: string }[] = useMemo(() => [
    { key: 'ALL', label: t('quests.all') },
    ...(['MAIN', 'SIDE', 'FACTION', 'HIDDEN'] as QuestType[]).map(k => ({
      key: k as TypeFilter,
      label: tr(questTypeLabels[k], lang),
    })),
  ], [t, lang]);

  const filtered = useMemo(() => {
    if (typeFilter === 'ALL') return quests;
    return quests.filter(q => q.type === typeFilter);
  }, [typeFilter]);

  const handleSelect = useCallback((quest: Quest) => setSelectedQuest(quest), []);
  const handleBack = useCallback(() => setSelectedQuest(null), []);

  /* Build quest chain for the selected quest */
  const questChain = useMemo(() => {
    if (!selectedQuest) return [];
    const chain: Quest[] = [];

    /* Walk backwards to find the start */
    let current: Quest | undefined = selectedQuest;
    const visited = new Set<string>();
    while (current?.previousQuest && !visited.has(current.previousQuest)) {
      visited.add(current.id);
      current = quests.find(q => q.id === current!.previousQuest);
      if (current) chain.unshift(current);
    }

    chain.push(selectedQuest);

    /* Walk forwards */
    current = selectedQuest;
    visited.clear();
    while (current?.nextQuest && !visited.has(current.nextQuest)) {
      visited.add(current.id);
      current = quests.find(q => q.id === current!.nextQuest);
      if (current) chain.push(current);
    }

    return chain;
  }, [selectedQuest]);

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('quests.title')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('quests.title')}
              </h1>
              <p className="font-body text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
                {t('quests.subtitle')}
              </p>
              <div className="flex justify-center mt-6">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Filters */}
          <RevealOnScroll>
            <div className="bg-surface-elevated rounded-lg border border-border p-6 mb-8">
              <div className="flex flex-wrap gap-2">
                {types.map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => { setTypeFilter(cat.key); setSelectedQuest(null); }}
                    className={`font-ui text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-200 ${
                      typeFilter === cat.key
                        ? 'bg-gold-mid/20 border-gold-mid/50 text-gold-bright'
                        : 'border-border text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'
                    }`}
                  >
                    {cat.key !== 'ALL' && <span className="mr-1">{typeIcons[cat.key as QuestType]}</span>}
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <GoldDivider variant="short" />

          {/* Content */}
          {quests.length === 0 ? (
            /* Empty state */
            <RevealOnScroll>
              <div className="mt-12 text-center py-24">
                <div className="inline-block p-8 rounded-lg border border-gold-mid/20 bg-surface-elevated">
                  <div className="text-5xl mb-6 opacity-40">&#x1F4DC;</div>
                  <h2 className="font-display text-xl sm:text-2xl text-gold-mid mb-4" style={{ textShadow: '0 0 20px hsl(var(--gold-glow)/0.3)' }}>
                    The Quest Board Awaits
                  </h2>
                  <p className="font-body text-sm text-text-secondary max-w-md mx-auto leading-relaxed italic">
                    &ldquo;The heralds have yet to post their proclamations upon the board.
                    When the tales of Pywel unfold, every quest, errand, and sacred duty
                    shall be inscribed upon these pages.&rdquo;
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="h-px w-32 bg-gold-mid/30" />
                  </div>
                  <p className="font-ui text-[0.6rem] tracking-[0.3em] text-gold-muted mt-4">
                    AWAITING PEARL ABYSS OFFICIAL DATA
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ) : selectedQuest ? (
            /* Detail Panel */
            <RevealOnScroll>
              <div className="mt-8">
                <button
                  onClick={handleBack}
                  className="font-ui text-xs tracking-wider text-gold-mid hover:text-gold-bright transition-colors mb-6 inline-block"
                >
                  &larr; {t('quests.all')}
                </button>

                <div className="bg-surface-elevated rounded-lg border border-border overflow-hidden">
                  <div className="p-8">
                    {/* Type & Chapter badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border ${typeColors[selectedQuest.type]}`}>
                        {typeIcons[selectedQuest.type]} {tr(questTypeLabels[selectedQuest.type], lang)}
                      </span>
                      {selectedQuest.chapter !== null && (
                        <span className="font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border border-gold-mid/30 bg-gold-dark/40 text-gold-bright">
                          CH. {selectedQuest.chapter}
                        </span>
                      )}
                      {selectedQuest.faction && (
                        <span className="font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border border-border bg-surface text-text-secondary">
                          {selectedQuest.faction}
                        </span>
                      )}
                      {selectedQuest.region && (
                        <span className="font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border border-border bg-surface text-text-secondary">
                          {selectedQuest.region}
                        </span>
                      )}
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl text-gold-bright mb-4" style={{ textShadow: '0 0 30px hsl(var(--gold-glow))' }}>
                      {tr(selectedQuest.name, lang)}
                    </h2>

                    <p className="font-body text-sm text-text-primary leading-[1.8] mb-6">
                      {tr(selectedQuest.description, lang)}
                    </p>

                    {/* Prerequisites */}
                    {selectedQuest.prerequisites.length > 0 && (
                      <div className="border-t border-border pt-6 mb-6">
                        <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">
                          {t('quests.prerequisites')}
                        </h3>
                        <ul className="space-y-2">
                          {selectedQuest.prerequisites.map((prereq, i) => {
                            const prereqQuest = quests.find(q => q.id === prereq);
                            return (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-mid/50" />
                                {prereqQuest ? (
                                  <button
                                    onClick={() => handleSelect(prereqQuest)}
                                    className="font-body text-sm text-gold-mid hover:text-gold-bright transition-colors underline decoration-gold-mid/30"
                                  >
                                    {tr(prereqQuest.name, lang)}
                                  </button>
                                ) : (
                                  <span className="font-body text-sm text-text-secondary italic">{prereq}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Rewards */}
                    <div className="border-t border-border pt-6 mb-6">
                      <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">
                        {t('quests.rewards')}
                      </h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed italic border-l-2 border-gold-mid/30 pl-4">
                        {tr(selectedQuest.rewards, lang)}
                      </p>
                    </div>

                    {/* Quest Chain Visualization */}
                    {questChain.length > 1 && (
                      <div className="border-t border-border pt-6">
                        <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-4">
                          QUEST CHAIN
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          {questChain.map((q, i) => (
                            <div key={q.id} className="flex items-center gap-2">
                              <button
                                onClick={() => handleSelect(q)}
                                className={`font-ui text-[0.6rem] tracking-wider px-3 py-2 rounded border transition-all ${
                                  q.id === selectedQuest.id
                                    ? 'border-gold-mid/50 bg-gold-mid/20 text-gold-bright'
                                    : 'border-border bg-surface text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'
                                }`}
                              >
                                {tr(q.name, lang)}
                              </button>
                              {i < questChain.length - 1 && (
                                <span className="text-gold-mid/40 text-sm">&rarr;</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ) : (
            /* Grid View */
            <div className="mt-8">
              {filtered.length === 0 ? (
                <RevealOnScroll>
                  <div className="text-center py-20">
                    <p className="font-heading text-lg text-gold-mid/50">{t('quests.select')}</p>
                  </div>
                </RevealOnScroll>
              ) : (
                <>
                  <p className="font-ui text-xs tracking-wider text-text-secondary mb-6 text-center">
                    {t('quests.select')}
                  </p>
                  <div className="space-y-3">
                    {filtered.map((quest, i) => (
                      <RevealOnScroll key={quest.id} stagger={i * 60}>
                        <button
                          onClick={() => handleSelect(quest)}
                          className="w-full text-left group rounded-lg border border-border hover:border-gold-mid/40 transition-all duration-300 bg-surface-elevated overflow-hidden"
                          style={{ boxShadow: 'var(--shadow-card)' }}
                        >
                          <div className="p-5 flex items-start gap-4">
                            {/* Quest type icon */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-lg">
                              {typeIcons[quest.type]}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap gap-2 mb-2">
                                <span className={`font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded border ${typeColors[quest.type]}`}>
                                  {tr(questTypeLabels[quest.type], lang)}
                                </span>
                                {quest.chapter !== null && (
                                  <span className="font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded bg-gold-dark/40 border border-gold-mid/30 text-gold-bright">
                                    CH. {quest.chapter}
                                  </span>
                                )}
                                {quest.faction && (
                                  <span className="font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded border border-border text-text-secondary">
                                    {quest.faction}
                                  </span>
                                )}
                              </div>

                              <h3 className="font-heading text-sm text-gold-bright group-hover:drop-shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-300">
                                {tr(quest.name, lang)}
                              </h3>
                              <p className="font-body text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed">
                                {tr(quest.description, lang)}
                              </p>

                              {/* Chain indicators */}
                              <div className="flex gap-3 mt-2">
                                {quest.previousQuest && (
                                  <span className="font-ui text-[0.5rem] tracking-wider text-gold-muted">
                                    &larr; prev
                                  </span>
                                )}
                                {quest.nextQuest && (
                                  <span className="font-ui text-[0.5rem] tracking-wider text-gold-muted">
                                    next &rarr;
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex-shrink-0 self-center">
                              <span className="font-ui text-sm text-gold-mid/40 group-hover:text-gold-bright transition-colors">
                                &rsaquo;
                              </span>
                            </div>
                          </div>
                        </button>
                      </RevealOnScroll>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonQuests;
