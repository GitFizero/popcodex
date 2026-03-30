// @ts-nocheck
import { useState, useMemo } from 'react';
import { loreEntries, type LoreEntry } from '@/crimson-desert-wiki/data/lore';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import ImageCredit from '@/crimson-desert-wiki/components/ImageCredit';
import { seo } from '@/crimson-desert-wiki/lib/seo';

type CategoryFilter = 'ALL' | 'CHARACTER' | 'LOCATION' | 'FACTION' | 'ITEM' | 'EVENT';

const LorePage = () => {
  const { lang, t } = useI18n();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<CategoryFilter>('ALL');
  const [selectedEntry, setSelectedEntry] = useState<LoreEntry | null>(null);
  const [sortBy, setSortBy] = useState<'alpha' | 'category'>('alpha');

  const filtered = useMemo(() => {
    let entries = [...loreEntries];
    if (filter !== 'ALL') entries = entries.filter(e => e.category === filter);
    if (search) {
      const q = search.toLowerCase();
      entries = entries.filter(e => e.title.toLowerCase().includes(q) || e.excerpt[lang].toLowerCase().includes(q) || e.content[lang].toLowerCase().includes(q));
    }
    if (sortBy === 'alpha') entries.sort((a, b) => a.title.localeCompare(b.title));
    else entries.sort((a, b) => a.category.localeCompare(b.category));
    return entries;
  }, [search, filter, sortBy, lang]);

  const categoryColors: Record<string, string> = {
    CHARACTER: 'bg-crimson-core/60 text-sand-pale', LOCATION: 'bg-gold-dark/60 text-sand-pale',
    FACTION: 'bg-smoke-mid/80 text-sand-pale', ITEM: 'bg-crimson-fire/50 text-sand-pale', EVENT: 'bg-crimson-deep/70 text-sand-pale',
  };

  const categoryIcons: Record<string, string> = {
    CHARACTER: '⚔️', LOCATION: '🏰', FACTION: '🛡️', ITEM: '✨', EVENT: '📜',
  };

  const filterLabels: Record<CategoryFilter, string> = {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('lore.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.lore.title[lang]}</h1>
        
        {/* Search & Filters */}
        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder={t('lore.search')}
            className="w-full bg-transparent border-b-2 border-border focus:border-gold-mid py-2.5 sm:py-3 text-base sm:text-lg font-heading text-text-primary placeholder:text-text-muted-custom outline-none transition-colors" />
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {(['ALL', 'CHARACTER', 'LOCATION', 'FACTION', 'ITEM', 'EVENT'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`font-ui text-[0.6rem] sm:text-[0.65rem] tracking-wider px-2.5 sm:px-3 py-1.5 rounded-full border transition-all duration-200 focus-gold
                  ${filter === f ? 'bg-crimson-core/40 border-gold-mid text-gold-bright' : 'border-border text-text-muted-custom hover:text-text-secondary'}`}>
                {filterLabels[f]}
              </button>
            ))}
            <div className="ml-auto flex gap-1.5 sm:gap-2">
              <button onClick={() => setSortBy('alpha')} className={`font-ui text-[0.55rem] sm:text-[0.6rem] tracking-wider px-2 py-1 rounded focus-gold ${sortBy === 'alpha' ? 'text-gold-bright' : 'text-text-muted-custom'}`}>{t('lore.alpha')}</button>
              <button onClick={() => setSortBy('category')} className={`font-ui text-[0.55rem] sm:text-[0.6rem] tracking-wider px-2 py-1 rounded focus-gold ${sortBy === 'category' ? 'text-gold-bright' : 'text-text-muted-custom'}`}>{t('lore.category')}</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8">
          {/* Entry List */}
          <div className={`${selectedEntry ? 'hidden lg:block' : ''} lg:w-[40%] space-y-1.5 sm:space-y-2 max-h-[70vh] overflow-y-auto scrollbar-thin`}>
            {filtered.length === 0 ? (
              <p className="font-body text-sm text-text-muted-custom text-center py-8">{t('lore.no_entries')}</p>
            ) : filtered.map(entry => (
              <button key={entry.id} onClick={() => setSelectedEntry(entry)}
                className={`w-full text-left p-2.5 sm:p-3 rounded-lg border transition-all duration-200 focus-gold flex items-center gap-2.5 sm:gap-3
                  ${selectedEntry?.id === entry.id ? 'bg-card-bg border-gold-mid/50' : 'border-transparent hover:bg-raised/30 hover:border-border'}`}>
                {entry.image ? (
                  <ImageCredit src={entry.image} alt={entry.title} className="w-10 h-10 sm:w-12 sm:h-12 rounded-md flex-shrink-0 border border-border/50 overflow-hidden" imgClassName="w-full h-full object-cover" />
                ) : (
                  <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-raised/50 flex items-center justify-center text-base sm:text-lg flex-shrink-0 border border-border/30" aria-hidden="true">{categoryIcons[entry.category]}</span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="font-heading text-xs sm:text-sm text-text-primary">{entry.title}</span>
                    <span className={`font-ui text-[0.45rem] sm:text-[0.5rem] tracking-wider px-1.5 py-0.5 rounded ${categoryColors[entry.category]}`}>{t(`cat.${entry.category}`)}</span>
                  </div>
                  <p className="font-body text-[0.65rem] sm:text-xs text-text-muted-custom mt-0.5 sm:mt-1 truncate">{entry.excerpt[lang]}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="flex-1">
            {selectedEntry ? (
              <article className="bg-card-bg border border-border rounded-lg overflow-hidden lg:sticky lg:top-24" key={selectedEntry.id} style={{ animation: 'fade-in-up 0.3s ease-out' }}>
                {selectedEntry.image && (
                  <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden">
                    <img src={selectedEntry.image} alt={`${selectedEntry.title} — © Pearl Abyss`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/40 to-transparent" />
                    <span className="absolute right-2 top-2 font-ui text-[0.4rem] sm:text-[0.45rem] tracking-wider text-sand-pale/70 bg-void/60 px-1.5 py-0.5 rounded pointer-events-none select-none">© Pearl Abyss</span>
                    <button onClick={() => setSelectedEntry(null)} className="lg:hidden absolute top-3 left-3 font-ui text-xs text-text-secondary bg-card-bg/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border focus-gold">
                      ← {t('lore.back')}
                    </button>
                  </div>
                )}
                <div className="p-4 sm:p-6">
                  {!selectedEntry.image && (
                    <button onClick={() => setSelectedEntry(null)} className="lg:hidden font-ui text-xs text-text-secondary mb-4 focus-gold">← {t('lore.back')}</button>
                  )}
                  <span className={`inline-block font-ui text-[0.5rem] sm:text-[0.55rem] tracking-wider px-2 py-0.5 rounded ${categoryColors[selectedEntry.category]}`}>{t(`cat.${selectedEntry.category}`)}</span>
                  <h2 className="font-heading text-xl sm:text-2xl text-gold-bright mt-2">{selectedEntry.title}</h2>
                  <div className="flex gap-3 sm:gap-4 mt-2 font-ui text-[0.55rem] sm:text-[0.6rem] text-text-muted-custom">
                    <span>{t('lore.updated')} {selectedEntry.lastUpdated}</span>
                    <span>~{selectedEntry.readingTime} {t('recent.read')}</span>
                  </div>
                  <GoldDivider variant="short" className="my-3 sm:my-4" />
                  <div className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed whitespace-pre-line">{selectedEntry.content[lang]}</div>
                  {selectedEntry.relatedEntries.length > 0 && (
                    <div className="mt-6 sm:mt-8">
                      <h4 className="font-heading text-xs tracking-[0.15em] text-gold-mid mb-2 sm:mb-3">{t('lore.related')}</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedEntry.relatedEntries.map(relId => {
                          const rel = loreEntries.find(e => e.id === relId);
                          return rel ? (
                            <button key={relId} onClick={() => setSelectedEntry(rel)}
                              className="font-ui text-[0.6rem] sm:text-[0.65rem] tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-border text-text-secondary hover:border-gold-mid hover:text-gold-bright transition-all duration-200 focus-gold">{rel.title}</button>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ) : (
              <div className="hidden lg:flex items-center justify-center h-64 text-text-muted-custom font-body text-sm">{t('lore.select')}</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LorePage;
