'use client';

import { useState, useMemo, useCallback } from 'react';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import {
  items,
  itemTypeLabels,
  rarityColors,
  type Item,
  type ItemRarity,
  type ItemType,
} from '@/lib/data/crimson-desert/items';

type TypeFilter = 'ALL' | ItemType;
type RarityFilter = 'ALL' | ItemRarity;

const typeIcons: Record<ItemType, string> = {
  WEAPON: '\u2694\uFE0F',
  ARMOR: '\uD83D\uDEE1\uFE0F',
  CONSUMABLE: '\uD83E\uDDEA',
  MATERIAL: '\uD83D\uDC8E',
  KEY_ITEM: '\uD83D\uDD11',
};

const rarityOrder: ItemRarity[] = ['COMMON', 'UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY'];

const CrimsonItems = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('ALL');
  const [rarityFilter, setRarityFilter] = useState<RarityFilter>('ALL');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const types: { key: TypeFilter; label: string }[] = useMemo(() => [
    { key: 'ALL', label: t('items.all') },
    ...(['WEAPON', 'ARMOR', 'CONSUMABLE', 'MATERIAL', 'KEY_ITEM'] as ItemType[]).map(k => ({
      key: k as TypeFilter,
      label: tr(itemTypeLabels[k], lang),
    })),
  ], [t, lang]);

  const filtered = useMemo(() => {
    let result = items;
    if (typeFilter !== 'ALL') {
      result = result.filter(i => i.type === typeFilter);
    }
    if (rarityFilter !== 'ALL') {
      result = result.filter(i => i.rarity === rarityFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(i =>
        tr(i.name, lang).toLowerCase().includes(q) ||
        tr(i.description, lang).toLowerCase().includes(q)
      );
    }
    return result;
  }, [typeFilter, rarityFilter, search, lang]);

  const handleSelect = useCallback((item: Item) => setSelectedItem(item), []);
  const handleBack = useCallback(() => setSelectedItem(null), []);

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('items.title')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('items.title')}
              </h1>
              <p className="font-body text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
                {t('items.subtitle')}
              </p>
              <div className="flex justify-center mt-6">
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
                  placeholder={t('items.select')}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 pl-10 font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-gold-mid/50 transition-colors"
                  aria-label={t('items.select')}
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-mid/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </div>

              {/* Type filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                {types.map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => { setTypeFilter(cat.key); setSelectedItem(null); }}
                    className={`font-ui text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-200 ${
                      typeFilter === cat.key
                        ? 'bg-gold-mid/20 border-gold-mid/50 text-gold-bright'
                        : 'border-border text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'
                    }`}
                  >
                    {cat.key !== 'ALL' && <span className="mr-1">{typeIcons[cat.key as ItemType]}</span>}
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Rarity filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setRarityFilter('ALL')}
                  className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded border transition-all ${
                    rarityFilter === 'ALL' ? 'border-gold-mid/50 text-gold-bright bg-gold-mid/10' : 'border-border text-text-secondary hover:text-gold-mid'
                  }`}
                >
                  {t('items.all')}
                </button>
                {rarityOrder.map(r => (
                  <button
                    key={r}
                    onClick={() => setRarityFilter(r)}
                    className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded border transition-all ${
                      rarityFilter === r
                        ? `${rarityColors[r]} bg-white/5`
                        : 'border-border text-text-secondary hover:text-gold-mid'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <GoldDivider variant="short" />

          {/* Content */}
          {items.length === 0 ? (
            /* Empty state — awaiting official data */
            <RevealOnScroll>
              <div className="mt-12 text-center py-24">
                <div className="inline-block p-8 rounded-lg border border-gold-mid/20 bg-surface-elevated">
                  <div className="text-5xl mb-6 opacity-40">&#x1F4DC;</div>
                  <h2 className="font-display text-xl sm:text-2xl text-gold-mid mb-4" style={{ textShadow: '0 0 20px hsl(var(--gold-glow)/0.3)' }}>
                    The Archivist&apos;s Ledger Awaits
                  </h2>
                  <p className="font-body text-sm text-text-secondary max-w-md mx-auto leading-relaxed italic">
                    &ldquo;The grand catalogue of Pywel&apos;s relics, armaments, and provisions remains sealed.
                    Database awaiting official item data from Pearl Abyss.
                    When the scrolls are unsealed, every weapon, armor, and artifact shall be chronicled herein.&rdquo;
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
          ) : selectedItem ? (
            /* Detail Panel */
            <RevealOnScroll>
              <div className="mt-8">
                <button
                  onClick={handleBack}
                  className="font-ui text-xs tracking-wider text-gold-mid hover:text-gold-bright transition-colors mb-6 inline-block"
                >
                  &larr; {t('items.all')}
                </button>

                <div className="bg-surface-elevated rounded-lg border border-border overflow-hidden">
                  {selectedItem.image && (
                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        src={selectedItem.image}
                        alt={`${tr(selectedItem.name, lang)} — \u00A9 Pearl Abyss`}
                        className="w-full h-full object-cover opacity-50"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/60 to-transparent" />
                    </div>
                  )}

                  <div className="p-8">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border bg-gold-dark/40 border-gold-mid/30 text-gold-bright">
                        {typeIcons[selectedItem.type]} {tr(itemTypeLabels[selectedItem.type], lang)}
                      </span>
                      <span className={`font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border ${rarityColors[selectedItem.rarity]}`}>
                        {selectedItem.rarity}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl text-gold-bright mb-4" style={{ textShadow: '0 0 30px hsl(var(--gold-glow))' }}>
                      {tr(selectedItem.name, lang)}
                    </h2>

                    <p className="font-body text-sm text-text-primary leading-[1.8] mb-6">
                      {tr(selectedItem.description, lang)}
                    </p>

                    {/* Acquisition */}
                    <div className="border-t border-border pt-6 mb-6">
                      <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">{t('items.acquisition')}</h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed italic border-l-2 border-gold-mid/30 pl-4">
                        {tr(selectedItem.acquisition, lang)}
                      </p>
                    </div>

                    {/* Stats */}
                    {selectedItem.stats && Object.keys(selectedItem.stats).length > 0 && (
                      <div className="border-t border-border pt-6">
                        <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">{t('items.stats')}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {Object.entries(selectedItem.stats).map(([stat, value]) => (
                            <div key={stat} className="bg-surface rounded-lg border border-border p-3 text-center">
                              <p className="font-ui text-[0.6rem] tracking-wider text-text-secondary uppercase">{stat}</p>
                              <p className="font-heading text-lg text-gold-bright mt-1">{value}</p>
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
                    <p className="font-heading text-lg text-gold-mid/50">{t('items.select')}</p>
                  </div>
                </RevealOnScroll>
              ) : (
                <>
                  <p className="font-ui text-xs tracking-wider text-text-secondary mb-6 text-center">
                    {t('items.select')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filtered.map((item, i) => (
                      <RevealOnScroll key={item.id} stagger={i * 60}>
                        <button
                          onClick={() => handleSelect(item)}
                          className="w-full text-left group relative rounded-lg overflow-hidden border border-border hover:border-gold-mid/40 transition-all duration-300 bg-surface-elevated"
                          style={{ boxShadow: 'var(--shadow-card)' }}
                        >
                          {item.image && (
                            <div className="relative h-[140px] overflow-hidden">
                              <img
                                src={item.image}
                                alt={`${tr(item.name, lang)} — \u00A9 Pearl Abyss`}
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/50 to-transparent" />
                            </div>
                          )}
                          <div className={`p-4 ${item.image ? '-mt-6 relative z-10' : ''}`}>
                            <div className="flex gap-2 mb-2">
                              <span className="font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded bg-gold-dark/40 border border-gold-mid/30 text-gold-bright">
                                {typeIcons[item.type]} {tr(itemTypeLabels[item.type], lang)}
                              </span>
                              <span className={`font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded border ${rarityColors[item.rarity]}`}>
                                {item.rarity}
                              </span>
                            </div>
                            <h3 className="font-heading text-sm text-gold-bright group-hover:drop-shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-300">
                              {tr(item.name, lang)}
                            </h3>
                            <p className="font-body text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">
                              {tr(item.description, lang)}
                            </p>
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

export default CrimsonItems;
