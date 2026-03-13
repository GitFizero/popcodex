'use client';

import { useState, useMemo, useCallback } from 'react';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import { loreEntries, type LoreEntry } from '@/lib/data/crimson-desert/lore';

type Category = 'ALL' | LoreEntry['category'];
type SortMode = 'alpha' | 'category';

const categoryColors: Record<string, string> = {
  CHARACTER: 'bg-crimson-core/60 border-crimson-bright/30',
  LOCATION: 'bg-gold-dark/60 border-gold-mid/30',
  FACTION: 'bg-smoke-mid/80 border-smoke-light/30',
  ITEM: 'bg-crimson-fire/50 border-crimson-fire/30',
  EVENT: 'bg-crimson-deep/70 border-crimson-deep/30',
};

const categoryIcons: Record<string, string> = {
  CHARACTER: '\u2694',
  LOCATION: '\uD83D\uDDFA',
  FACTION: '\uD83C\uDFF0',
  ITEM: '\uD83D\uDCA0',
  EVENT: '\u26A1',
};

const CrimsonLore = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [sortMode, setSortMode] = useState<SortMode>('category');
  const [selectedEntry, setSelectedEntry] = useState<LoreEntry | null>(null);

  const categories: { key: Category; label: string }[] = useMemo(() => [
    { key: 'ALL', label: t('lore.all') },
    { key: 'CHARACTER', label: t('lore.characters') },
    { key: 'LOCATION', label: t('lore.locations') },
    { key: 'FACTION', label: t('lore.factions') },
    { key: 'ITEM', label: t('lore.items') },
    { key: 'EVENT', label: t('lore.events') },
  ], [t]);

  const filtered = useMemo(() => {
    let entries = loreEntries;
    if (activeCategory !== 'ALL') {
      entries = entries.filter(e => e.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      entries = entries.filter(e =>
        e.title.toLowerCase().includes(q) ||
        tr(e.excerpt, lang).toLowerCase().includes(q) ||
        tr(e.content, lang).toLowerCase().includes(q)
      );
    }
    if (sortMode === 'alpha') {
      entries = [...entries].sort((a, b) => a.title.localeCompare(b.title));
    }
    return entries;
  }, [activeCategory, search, sortMode, lang]);

  const handleSelect = useCallback((entry: LoreEntry) => setSelectedEntry(entry), []);
  const handleBack = useCallback(() => setSelectedEntry(null), []);

  const getRelatedEntries = useCallback((ids: string[]) => {
    return loreEntries.filter(e => ids.includes(e.id));
  }, []);

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('lore.title')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('lore.title')}
              </h1>
              <div className="flex justify-center">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Search & Filters */}
          <RevealOnScroll>
            <div className="bg-surface-elevated rounded-lg border border-border p-6 mb-8">
              {/* Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder={t('lore.search')}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 pl-10 font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-gold-mid/50 transition-colors"
                  aria-label={t('lore.search')}
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-mid/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => { setActiveCategory(cat.key); setSelectedEntry(null); }}
                    className={`font-ui text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-200 ${
                      activeCategory === cat.key
                        ? 'bg-gold-mid/20 border-gold-mid/50 text-gold-bright'
                        : 'border-border text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'
                    }`}
                  >
                    {cat.key !== 'ALL' && <span className="mr-1">{categoryIcons[cat.key]}</span>}
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSortMode('category')}
                  className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded border transition-all ${
                    sortMode === 'category' ? 'border-gold-mid/50 text-gold-bright bg-gold-mid/10' : 'border-border text-text-secondary hover:text-gold-mid'
                  }`}
                >
                  {t('lore.category')}
                </button>
                <button
                  onClick={() => setSortMode('alpha')}
                  className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded border transition-all ${
                    sortMode === 'alpha' ? 'border-gold-mid/50 text-gold-bright bg-gold-mid/10' : 'border-border text-text-secondary hover:text-gold-mid'
                  }`}
                >
                  {t('lore.alpha')}
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <GoldDivider variant="short" />

          {/* Content area */}
          {selectedEntry ? (
            /* Detail Panel */
            <RevealOnScroll>
              <div className="mt-8">
                <button
                  onClick={handleBack}
                  className="font-ui text-xs tracking-wider text-gold-mid hover:text-gold-bright transition-colors mb-6 inline-block"
                >
                  {t('lore.back')}
                </button>

                <div className="bg-surface-elevated rounded-lg border border-border overflow-hidden">
                  {/* Header with image */}
                  {selectedEntry.image && (
                    <div className="relative h-[300px] overflow-hidden">
                      <img
                        src={selectedEntry.image}
                        alt={`${selectedEntry.title} — © Pearl Abyss`}
                        className="w-full h-full object-cover opacity-60"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <span className={`inline-block font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border ${categoryColors[selectedEntry.category]} text-sand-pale mb-3`}>
                          {categoryIcons[selectedEntry.category]} {t(`cat.${selectedEntry.category}`)}
                        </span>
                        <h2 className="font-display text-2xl sm:text-4xl text-gold-bright" style={{ textShadow: '0 0 30px hsl(var(--gold-glow))' }}>
                          {selectedEntry.title}
                        </h2>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    {!selectedEntry.image && (
                      <>
                        <span className={`inline-block font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border ${categoryColors[selectedEntry.category]} text-sand-pale mb-3`}>
                          {categoryIcons[selectedEntry.category]} {t(`cat.${selectedEntry.category}`)}
                        </span>
                        <h2 className="font-display text-2xl sm:text-4xl text-gold-bright mb-6" style={{ textShadow: '0 0 30px hsl(var(--gold-glow))' }}>
                          {selectedEntry.title}
                        </h2>
                      </>
                    )}

                    {/* Excerpt */}
                    <p className="font-body text-base text-gold-mid italic mb-6 leading-relaxed border-l-2 border-gold-mid/30 pl-4">
                      {tr(selectedEntry.excerpt, lang)}
                    </p>

                    {/* Full content */}
                    <div className="font-body text-sm text-text-primary leading-[1.8] whitespace-pre-line">
                      {tr(selectedEntry.content, lang)}
                    </div>

                    {/* Metadata */}
                    <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4 items-center">
                      <span className="font-ui text-[0.6rem] tracking-wider text-text-secondary">
                        {t('lore.updated')} {selectedEntry.lastUpdated}
                      </span>
                      <span className="font-ui text-[0.6rem] tracking-wider text-text-secondary">
                        ~{selectedEntry.readingTime}
                      </span>
                    </div>

                    {/* Related entries */}
                    {selectedEntry.relatedEntries.length > 0 && (
                      <div className="mt-8">
                        <GoldDivider variant="section" title={t('lore.related')} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                          {getRelatedEntries(selectedEntry.relatedEntries).map(related => (
                            <button
                              key={related.id}
                              onClick={() => handleSelect(related)}
                              className="text-left group bg-surface rounded-lg border border-border p-4 hover:border-gold-mid/40 transition-all duration-200"
                            >
                              <span className={`inline-block font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded ${categoryColors[related.category]} text-sand-pale mb-2`}>
                                {t(`cat.${related.category}`)}
                              </span>
                              <h4 className="font-heading text-sm text-gold-bright group-hover:drop-shadow-[0_0_10px_hsl(var(--gold-glow))] transition-all">
                                {related.title}
                              </h4>
                              <p className="font-body text-xs text-text-secondary mt-1 line-clamp-2">
                                {tr(related.excerpt, lang)}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ) : (
            /* List View */
            <div className="mt-8">
              {filtered.length === 0 ? (
                <RevealOnScroll>
                  <div className="text-center py-20">
                    <p className="font-heading text-lg text-gold-mid/50">{t('lore.no_entries')}</p>
                  </div>
                </RevealOnScroll>
              ) : (
                <>
                  <p className="font-ui text-xs tracking-wider text-text-secondary mb-6 text-center">
                    {t('lore.select')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((entry, i) => (
                      <RevealOnScroll key={entry.id} stagger={i * 80}>
                        <button
                          onClick={() => handleSelect(entry)}
                          className="w-full text-left group relative rounded-lg overflow-hidden border border-border hover:border-gold-mid/40 transition-all duration-300"
                          style={{ boxShadow: 'var(--shadow-card)' }}
                        >
                          {/* Card image */}
                          {entry.image && (
                            <div className="relative h-[160px] overflow-hidden">
                              <img
                                src={entry.image}
                                alt={`${entry.title} — © Pearl Abyss`}
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/50 to-transparent" />
                            </div>
                          )}

                          <div className={`p-5 ${entry.image ? '-mt-8 relative z-10' : 'bg-surface-elevated'}`}>
                            <span className={`inline-block font-ui text-[0.55rem] tracking-[0.2em] px-2 py-0.5 rounded ${categoryColors[entry.category]} text-sand-pale mb-2`}>
                              {categoryIcons[entry.category]} {t(`cat.${entry.category}`)}
                            </span>
                            <h3 className="font-heading text-base text-gold-bright group-hover:drop-shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-300">
                              {entry.title}
                            </h3>
                            <p className="font-body text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">
                              {tr(entry.excerpt, lang)}
                            </p>
                            <div className="mt-3 flex justify-between items-center">
                              <span className="font-ui text-[0.55rem] text-text-muted-custom">{entry.lastUpdated}</span>
                              <span className="font-ui text-[0.55rem] text-text-muted-custom">~{entry.readingTime}</span>
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

export default CrimsonLore;
