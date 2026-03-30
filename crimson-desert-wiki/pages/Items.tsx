// @ts-nocheck
import { useState } from 'react';
import { items, itemTypeLabels, rarityColors, type ItemType } from '@/crimson-desert-wiki/data/items';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

type Filter = 'ALL' | ItemType;

const ItemsPage = () => {
  const { lang, t } = useI18n();
  const [filter, setFilter] = useState<Filter>('ALL');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = filter === 'ALL' ? items : items.filter(i => i.type === filter);
  const selectedItem = items.find(i => i.id === selected);

  const filterLabels: Record<Filter, string> = {
    ALL: t('items.all'),
    WEAPON: itemTypeLabels.WEAPON[lang] || 'Weapon',
    ARMOR: itemTypeLabels.ARMOR[lang] || 'Armor',
    CONSUMABLE: itemTypeLabels.CONSUMABLE[lang] || 'Consumable',
    MATERIAL: itemTypeLabels.MATERIAL[lang] || 'Material',
    KEY_ITEM: itemTypeLabels.KEY_ITEM[lang] || 'Key Item',
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.items.title[lang]}
        description={seo.items.desc[lang]}
        path="/items"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.items[lang], path: '/items' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('items.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.items.title[lang]}</h1>

        <p className="font-body text-sm text-text-secondary text-center mt-4 max-w-2xl mx-auto">
          {t('items.subtitle')}
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
          {(['ALL', 'WEAPON', 'ARMOR', 'CONSUMABLE', 'MATERIAL', 'KEY_ITEM'] as Filter[]).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`font-ui text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === f ? 'bg-crimson-deep border-crimson-bright text-gold-bright' : 'border-border text-text-secondary hover:border-gold-mid hover:text-gold-mid'}`}>
              {filterLabels[f]}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Item List */}
          <div className="lg:w-1/2">
            <div className="space-y-3">
              {filtered.map((item, i) => (
                <RevealOnScroll key={item.id} stagger={i * 80}>
                  <button onClick={() => setSelected(item.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 focus-gold ${
                      selected === item.id ? 'bg-card-bg border-gold-mid/50' : 'bg-surface/50 border-border hover:bg-raised/50 hover:border-gold-mid/30'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`font-heading text-sm ${rarityColors[item.rarity].split(' ')[0]}`}>{item.name[lang]}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom">{itemTypeLabels[item.type][lang]}</span>
                          <span className={`font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded-full border ${rarityColors[item.rarity]}`}>
                            {item.rarity}
                          </span>
                        </div>
                      </div>
                      <span className="text-xl opacity-30">
                        {item.type === 'WEAPON' ? '⚔' : item.type === 'ARMOR' ? '🛡' : item.type === 'CONSUMABLE' ? '🧪' : '📦'}
                      </span>
                    </div>
                  </button>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Item Detail */}
          <div className="lg:w-1/2">
            {selectedItem ? (
              <div className="sticky top-24 p-6 rounded-lg bg-surface/50 border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                <span className={`font-ui text-[0.6rem] tracking-wider px-2 py-0.5 rounded-full border ${rarityColors[selectedItem.rarity]}`}>
                  {selectedItem.rarity}
                </span>
                <h2 className={`font-display text-2xl mt-3 ${rarityColors[selectedItem.rarity].split(' ')[0]}`}>{selectedItem.name[lang]}</h2>
                <span className="font-ui text-[0.65rem] tracking-wider text-text-muted-custom">{itemTypeLabels[selectedItem.type][lang]}</span>
                <p className="font-body text-sm text-text-secondary mt-4 leading-relaxed">{selectedItem.description[lang]}</p>

                <div className="mt-6 p-3 bg-raised/30 rounded-md border border-border">
                  <h4 className="font-heading text-xs tracking-wider text-gold-mid mb-2">{t('items.acquisition')}</h4>
                  <p className="font-body text-sm text-text-secondary">{selectedItem.acquisition[lang]}</p>
                </div>

                {selectedItem.stats && (
                  <div className="mt-4">
                    <h4 className="font-heading text-xs tracking-wider text-gold-mid mb-3">{t('items.stats')}</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(selectedItem.stats).map(([key, val]) => (
                        <div key={key} className="text-center p-2 bg-raised/20 rounded">
                          <div className="font-ui text-[0.55rem] tracking-wider text-text-muted-custom uppercase">{key}</div>
                          <div className="font-heading text-lg text-text-primary mt-1">{val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 rounded-lg border border-border bg-surface/30">
                <p className="font-body text-sm text-text-muted-custom">{t('items.select')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemsPage;
