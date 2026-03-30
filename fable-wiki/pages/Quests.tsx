// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n, tr } from '@/fable-wiki/context/I18nContext';
import { quests, questTypeLabels } from '@/fable-wiki/data/quests';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Quests = () => {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<string>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filters = [
    { key: 'ALL', label: lang === 'fr' ? 'Toutes' : 'All' },
    ...Object.entries(questTypeLabels).map(([key, label]) => ({
      key,
      label: tr(label, lang),
    })),
  ];

  const filtered = useMemo(() =>
    filter === 'ALL' ? quests : quests.filter(q => q.type === filter),
    [filter]
  );

  const typeColors: Record<string, string> = {
    MAIN: 'bg-emerald-700/60 text-emerald-200',
    SIDE: 'bg-blue-700/60 text-blue-200',
    FACTION: 'bg-yellow-700/60 text-yellow-200',
    HIDDEN: 'bg-purple-700/60 text-purple-200',
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
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

      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('quests.title')} />
        </RevealOnScroll>

        {/* Filters */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-lg font-heading text-xs tracking-[0.15em] border transition-all duration-300
                  ${filter === f.key
                    ? 'bg-emerald-700 border-emerald-500 text-white'
                    : 'border-emerald-900/30 text-gray-400 hover:border-emerald-700/50 hover:text-emerald-400'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Quest list */}
        {filtered.length === 0 ? (
          <RevealOnScroll>
            <div className="mt-12 text-center py-16">
              <p className="font-body text-sm text-gray-500">
                {lang === 'fr' ? 'Aucune quete dans cette categorie.' : 'No quests in this category.'}
              </p>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="space-y-3 mt-8">
            {filtered.map((quest, i) => {
              const isExpanded = expandedId === quest.id;
              return (
                <RevealOnScroll key={quest.id} stagger={i * 80}>
                  <div className="rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] overflow-hidden">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : quest.id)}
                      className="w-full text-left p-4 flex items-start gap-3 group"
                    >
                      <span className={`font-body text-[0.55rem] tracking-wider px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${typeColors[quest.type]}`}>
                        {tr(questTypeLabels[quest.type], lang)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-sm text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all">
                          {tr(quest.name, lang)}
                        </h3>
                        {quest.chapter && (
                          <span className="font-body text-[0.55rem] text-gray-600">
                            {lang === 'fr' ? `Chapitre ${quest.chapter}` : `Chapter ${quest.chapter}`}
                          </span>
                        )}
                      </div>
                      <span className={`text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>&#9662;</span>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 border-t border-emerald-900/20 pt-3 space-y-3">
                        <p className="font-body text-sm text-gray-300 leading-relaxed">{tr(quest.description, lang)}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {quest.region && (
                            <div>
                              <span className="font-body text-[0.6rem] tracking-wider text-gray-500">{lang === 'fr' ? 'REGION' : 'REGION'}</span>
                              <p className="font-body text-xs text-gray-300 mt-0.5">{quest.region}</p>
                            </div>
                          )}
                          {quest.faction && (
                            <div>
                              <span className="font-body text-[0.6rem] tracking-wider text-gray-500">FACTION</span>
                              <p className="font-body text-xs text-gray-300 mt-0.5">{quest.faction}</p>
                            </div>
                          )}
                        </div>
                        <div>
                          <span className="font-body text-[0.6rem] tracking-wider text-gray-500">{lang === 'fr' ? 'RECOMPENSES' : 'REWARDS'}</span>
                          <p className="font-body text-xs text-gray-300 mt-0.5">{tr(quest.rewards, lang)}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Quests;
