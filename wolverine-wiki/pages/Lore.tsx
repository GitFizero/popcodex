// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';
import { loreEntries } from '@/wolverine-wiki/data/lore';

const CATEGORIES = ['ALL', 'CHARACTER', 'LOCATION', 'FACTION', 'ITEM', 'EVENT'] as const;

const LorePage = () => {
  const { t, lang } = useI18n();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('ALL');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [sortAlpha, setSortAlpha] = useState(false);

  const filtered = useMemo(() => {
    let entries = loreEntries;
    if (category !== 'ALL') entries = entries.filter(e => e.category === category);
    if (search) {
      const q = search.toLowerCase();
      entries = entries.filter(e => e.title.toLowerCase().includes(q) || e.excerpt[lang].toLowerCase().includes(q));
    }
    if (sortAlpha) entries = [...entries].sort((a, b) => a.title.localeCompare(b.title));
    return entries;
  }, [category, search, sortAlpha, lang]);

  const selected = selectedId ? loreEntries.find(e => e.id === selectedId) : null;

  const categoryColors: Record<string, string> = {
    CHARACTER: 'bg-crimson-core/60', LOCATION: 'bg-gold-dark/60',
    FACTION: 'bg-smoke-mid/80', ITEM: 'bg-crimson-fire/50', EVENT: 'bg-crimson-deep/70',
  };

  const catLabels: Record<string, string> = {
    ALL: t('lore.all'), CHARACTER: t('lore.characters'), LOCATION: t('lore.locations'),
    FACTION: t('lore.factions'), ITEM: t('lore.items'), EVENT: t('lore.events'),
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('lore.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.lore.title[lang]}</h1>

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {/* Left panel - List */}
          <div className="lg:w-[40%]">
            {/* Search */}
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder={t('lore.search')}
              className="w-full bg-surface border border-border rounded-md px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted-custom outline-none focus:border-yellow-500/50 transition-colors mb-4" />

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setCategory(cat)}
                  className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded-full border transition-all
                    ${category === cat ? 'bg-yellow-600/30 border-yellow-500 text-yellow-400' : 'border-border text-text-muted-custom hover:text-text-secondary'}`}>
                  {catLabels[cat]}
                </button>
              ))}
              <button onClick={() => setSortAlpha(!sortAlpha)}
                className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded-full border transition-all ml-auto
                  ${sortAlpha ? 'bg-yellow-600/30 border-yellow-500 text-yellow-400' : 'border-border text-text-muted-custom'}`}>
                {t('lore.alpha')}
              </button>
            </div>

            {/* Entries */}
            <div className="space-y-2 max-h-[65vh] overflow-y-auto scrollbar-thin">
              {filtered.length === 0 ? (
                <p className="font-body text-sm text-text-muted-custom text-center py-8">{t('lore.no_entries')}</p>
              ) : filtered.map(entry => (
                <button key={entry.id} onClick={() => setSelectedId(entry.id)}
                  className={`w-full text-left rounded-md p-4 transition-all duration-200 border
                    ${selectedId === entry.id ? 'bg-raised border-yellow-500/50' : 'border-border hover:bg-raised/30'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded text-sand-pale ${categoryColors[entry.category]}`}>{t(`cat.${entry.category}`)}</span>
                  </div>
                  <h3 className="font-heading text-sm text-text-primary mt-1">{entry.title}</h3>
                  <p className="font-body text-xs text-text-secondary mt-1 line-clamp-2">{entry.excerpt[lang]}</p>
                  <div className="flex justify-between mt-2">
                    <span className="font-ui text-[0.55rem] text-text-muted-custom">{entry.lastUpdated}</span>
                    <span className="font-ui text-[0.55rem] text-text-muted-custom">~{entry.readingTime}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right panel - Detail */}
          <div className="lg:w-[60%]">
            {selected ? (
              <div className="bg-surface/50 border border-border rounded-lg p-6 sticky top-20">
                <button onClick={() => setSelectedId(null)} className="font-ui text-xs text-text-muted-custom hover:text-gold-bright mb-4 lg:hidden">← {t('lore.back')}</button>
                {selected.image && (
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 -mt-1">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,20,20,0.8)] to-transparent" />
                </div>
              )}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-ui text-[0.6rem] tracking-wider px-2 py-0.5 rounded text-sand-pale ${categoryColors[selected.category]}`}>{t(`cat.${selected.category}`)}</span>
                  <span className="font-ui text-[0.55rem] text-text-muted-custom">{t('lore.updated')} {selected.lastUpdated}</span>
                </div>
                <h2 className="font-display text-2xl text-gold-bright mb-4">{selected.title}</h2>
                <p className="font-body text-sm text-text-secondary leading-relaxed whitespace-pre-line">{selected.content[lang]}</p>

                {selected.relatedEntries.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-heading text-xs tracking-[0.15em] text-gold-mid mb-3">{t('lore.related')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.relatedEntries.map(relId => {
                        const rel = loreEntries.find(e => e.id === relId);
                        return rel ? (
                          <button key={relId} onClick={() => setSelectedId(relId)}
                            className="font-ui text-xs tracking-wider px-3 py-1.5 rounded bg-raised/50 text-text-secondary border border-border/50 hover:text-yellow-400 hover:border-yellow-500/30 transition-all">
                            {rel.title}
                          </button>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-surface/50 border border-border rounded-lg p-12 text-center">
                <p className="font-body text-sm text-text-muted-custom">{t('lore.select')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LorePage;
