// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n } from '@/fable-wiki/context/I18nContext';
import { loreEntries } from '@/fable-wiki/data/lore';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Lore = () => {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<string>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filters = [
    { key: 'ALL', label: t('lore.all') },
    { key: 'CHARACTER', label: t('lore.characters') },
    { key: 'LOCATION', label: t('lore.locations') },
    { key: 'FACTION', label: t('lore.factions') },
    { key: 'ITEM', label: t('lore.items') },
    { key: 'EVENT', label: t('lore.events') },
  ];

  const filtered = useMemo(() =>
    filter === 'ALL' ? loreEntries : loreEntries.filter(e => e.category === filter),
    [filter]
  );

  const categoryColors: Record<string, string> = {
    CHARACTER: 'bg-emerald-700/60',
    LOCATION: 'bg-yellow-700/60',
    FACTION: 'bg-gray-600/80',
    ITEM: 'bg-emerald-600/50',
    EVENT: 'bg-purple-700/70',
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.lore.title[lang]}
        description={seo.lore.desc[lang]}
        path="/lore"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.lore[lang], path: '/lore' },
        ]}
      />

      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('lore.title')} />
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

        {/* Lore entries */}
        <div className="space-y-4 mt-8">
          {filtered.map((entry, i) => {
            const isExpanded = expandedId === entry.id;
            return (
              <RevealOnScroll key={entry.id} stagger={i * 80}>
                <div className="rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] overflow-hidden">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                    className="w-full text-left p-5 flex items-start gap-4 group"
                  >
                    <span className={`font-body text-[0.6rem] tracking-wider px-2 py-0.5 rounded text-gray-200 mt-1 flex-shrink-0 ${categoryColors[entry.category]}`}>
                      {t(`cat.${entry.category}`)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-base text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-300">
                        {entry.title}
                      </h3>
                      <p className="font-body text-xs text-gray-400 mt-1 line-clamp-2">{entry.excerpt[lang]}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="font-body text-[0.6rem] text-gray-600">~{entry.readingTime} {t('recent.read')}</span>
                      <span className={`text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        &#9662;
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-emerald-900/20">
                      <div className="pt-4 font-body text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                        {entry.content[lang]}
                      </div>
                      {entry.relatedEntries.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-emerald-900/20">
                          <span className="font-body text-[0.6rem] tracking-wider text-gray-500">{lang === 'fr' ? 'ENTREES LIEES' : 'RELATED ENTRIES'}</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {entry.relatedEntries.map(rid => {
                              const related = loreEntries.find(l => l.id === rid);
                              return (
                                <button
                                  key={rid}
                                  onClick={() => setExpandedId(rid)}
                                  className="px-2 py-1 rounded border border-emerald-900/30 bg-emerald-900/10 font-body text-xs text-emerald-400 hover:bg-emerald-900/30 transition-colors"
                                >
                                  {related?.title || rid}
                                </button>
                              );
                            })}
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

export default Lore;
