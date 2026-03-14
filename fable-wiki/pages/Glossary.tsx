// @ts-nocheck
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/fable-wiki/context/I18nContext';
import { glossaryEntries } from '@/fable-wiki/data/glossary';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Glossary = () => {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<string>('ALL');
  const [search, setSearch] = useState('');

  const categories = [
    { key: 'ALL', label: lang === 'fr' ? 'Tous' : 'All' },
    { key: 'CHARACTER', label: lang === 'fr' ? 'Personnages' : 'Characters' },
    { key: 'LOCATION', label: lang === 'fr' ? 'Lieux' : 'Locations' },
    { key: 'FACTION', label: lang === 'fr' ? 'Factions' : 'Factions' },
    { key: 'MECHANIC', label: lang === 'fr' ? 'Mecaniques' : 'Mechanics' },
    { key: 'CREATURE', label: lang === 'fr' ? 'Creatures' : 'Creatures' },
    { key: 'ITEM', label: lang === 'fr' ? 'Objets' : 'Items' },
  ];

  const filtered = useMemo(() => {
    let entries = filter === 'ALL' ? glossaryEntries : glossaryEntries.filter(e => e.category === filter);
    if (search) {
      const q = search.toLowerCase();
      entries = entries.filter(e =>
        e.term.toLowerCase().includes(q) || e.definition[lang].toLowerCase().includes(q)
      );
    }
    return entries;
  }, [filter, search, lang]);

  const categoryColors: Record<string, string> = {
    CHARACTER: 'bg-emerald-700/60',
    LOCATION: 'bg-yellow-700/60',
    FACTION: 'bg-gray-600/80',
    MECHANIC: 'bg-blue-700/60',
    CREATURE: 'bg-red-700/60',
    ITEM: 'bg-purple-700/60',
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.glossary.title[lang]}
        description={seo.glossary.desc[lang]}
        path="/glossary"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.glossary[lang], path: '/glossary' },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={lang === 'fr' ? 'GLOSSAIRE' : 'GLOSSARY'} />
        </RevealOnScroll>

        {/* Search */}
        <RevealOnScroll>
          <div className="mt-8">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t('search.placeholder')}
              className="w-full bg-[hsl(150,30%,6%)] border border-emerald-900/30 rounded-lg px-4 py-3 font-body text-sm text-gray-200 placeholder:text-gray-600 outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
        </RevealOnScroll>

        {/* Category filters */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map(c => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`px-3 py-1.5 rounded-lg font-heading text-[0.65rem] tracking-[0.12em] border transition-all duration-300
                  ${filter === c.key
                    ? 'bg-emerald-700 border-emerald-500 text-white'
                    : 'border-emerald-900/30 text-gray-400 hover:border-emerald-700/50 hover:text-emerald-400'
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Entries */}
        <div className="space-y-3 mt-8">
          {filtered.length === 0 ? (
            <p className="font-body text-sm text-gray-500 text-center py-8">{t('search.no_results')} "{search}"</p>
          ) : filtered.map((entry, i) => (
            <RevealOnScroll key={entry.id} stagger={i * 50}>
              <div className="p-4 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] flex items-start gap-3">
                <span className={`font-body text-[0.55rem] tracking-wider px-2 py-0.5 rounded text-gray-200 mt-0.5 flex-shrink-0 ${categoryColors[entry.category] || 'bg-gray-700/60'}`}>
                  {entry.category}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-sm text-emerald-400">{entry.term}</h3>
                    {entry.relatedLink && (
                      <Link to={entry.relatedLink} className="font-body text-[0.55rem] text-yellow-500 hover:text-yellow-400 transition-colors">→</Link>
                    )}
                  </div>
                  <p className="font-body text-xs text-gray-400 mt-1 leading-relaxed">{tr(entry.definition, lang)}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Glossary;
