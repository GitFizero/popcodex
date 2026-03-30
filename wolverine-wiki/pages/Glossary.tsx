// @ts-nocheck
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';
import { glossaryEntries } from '@/wolverine-wiki/data/glossary';

const CATEGORIES = ['ALL', 'CHARACTER', 'LOCATION', 'FACTION', 'MECHANIC', 'CREATURE', 'ITEM'] as const;

const GlossaryPage = () => {
  const { t, lang } = useI18n();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('ALL');

  const filtered = useMemo(() => {
    let entries = glossaryEntries;
    if (category !== 'ALL') entries = entries.filter(e => e.category === category);
    if (search) {
      const q = search.toLowerCase();
      entries = entries.filter(e => e.term.toLowerCase().includes(q) || e.definition[lang].toLowerCase().includes(q));
    }
    return entries.sort((a, b) => a.term.localeCompare(b.term));
  }, [category, search, lang]);

  const letters = useMemo(() => {
    const set = new Set(filtered.map(e => e.term[0].toUpperCase()));
    return Array.from(set).sort();
  }, [filtered]);

  const categoryColors: Record<string, string> = {
    CHARACTER: 'bg-red-600/40 text-red-300',
    LOCATION: 'bg-yellow-600/40 text-yellow-300',
    FACTION: 'bg-blue-600/40 text-blue-300',
    MECHANIC: 'bg-green-600/40 text-green-300',
    CREATURE: 'bg-purple-600/40 text-purple-300',
    ITEM: 'bg-orange-600/40 text-orange-300',
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={lang === 'fr' ? 'GLOSSAIRE' : 'GLOSSARY'} /></RevealOnScroll>
        <h1 className="sr-only">{seo.glossary.title[lang]}</h1>

        {/* Search & Filters */}
        <div className="mt-8 mb-6">
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder={t('lore.search')}
            className="w-full bg-surface border border-border rounded-md px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted-custom outline-none focus:border-yellow-500/50 transition-colors mb-4" />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded-full border transition-all
                  ${category === cat ? 'bg-yellow-600/30 border-yellow-500 text-yellow-400' : 'border-border text-text-muted-custom hover:text-text-secondary'}`}>
                {cat === 'ALL' ? (lang === 'fr' ? 'Tout' : 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Letter index */}
        <div className="flex flex-wrap gap-1 mb-6">
          {letters.map(l => (
            <a key={l} href={`#letter-${l}`} className="font-heading text-sm text-yellow-500 hover:text-yellow-400 w-8 h-8 flex items-center justify-center rounded hover:bg-raised/50 transition-all">{l}</a>
          ))}
        </div>

        {/* Entries grouped by letter */}
        {letters.map(letter => {
          const entriesForLetter = filtered.filter(e => e.term[0].toUpperCase() === letter);
          return (
            <div key={letter} id={`letter-${letter}`} className="mb-8">
              <h2 className="font-display text-2xl text-gold-bright mb-4 sticky top-16 bg-void/90 backdrop-blur-sm py-2 z-10">{letter}</h2>
              <div className="space-y-3">
                {entriesForLetter.map(entry => (
                  <RevealOnScroll key={entry.id}>
                    <div className="bg-surface/50 border border-border rounded-md p-4 hover:border-yellow-500/30 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-heading text-sm text-text-primary">{entry.term}</h3>
                        <span className={`font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded ${categoryColors[entry.category] || 'bg-gray-600/40 text-gray-300'}`}>{entry.category}</span>
                      </div>
                      <p className="font-body text-xs text-text-secondary leading-relaxed">{entry.definition[lang]}</p>
                      {entry.relatedLink && (
                        <Link to={entry.relatedLink} className="font-ui text-[0.6rem] text-yellow-500 hover:text-yellow-400 mt-2 inline-block transition-colors">
                          {t('chars.view_character')}
                        </Link>
                      )}
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default GlossaryPage;
