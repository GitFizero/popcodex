// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n, tr } from '@/fable-wiki/context/I18nContext';
import { items, itemTypeLabels, rarityColors } from '@/fable-wiki/data/items';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Items = () => {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<string>('ALL');

  const filters = [
    { key: 'ALL', label: t('items.all') },
    ...Object.entries(itemTypeLabels).map(([key, label]) => ({
      key,
      label: tr(label, lang),
    })),
  ];

  const filtered = useMemo(() =>
    filter === 'ALL' ? items : items.filter(i => i.type === filter),
    [filter]
  );

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
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

      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('items.title')} />
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

        {/* Items list */}
        {filtered.length === 0 ? (
          <RevealOnScroll>
            <div className="mt-12 text-center py-16">
              <div className="w-20 h-20 rounded-full border-2 border-emerald-700/30 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-600">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-emerald-400 tracking-wider">
                {lang === 'fr' ? 'BASE DE DONNEES A VENIR' : 'DATABASE COMING SOON'}
              </h3>
              <p className="font-body text-sm text-gray-500 mt-3 max-w-md mx-auto">
                {lang === 'fr'
                  ? "Les objets de Fable seront documentes ici au fur et a mesure des revelations officielles par Playground Games."
                  : "Fable items will be documented here as officially revealed by Playground Games."
                }
              </p>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="space-y-3 mt-8">
            {filtered.map((item, i) => (
              <RevealOnScroll key={item.id} stagger={i * 50}>
                <div className={`p-4 rounded-lg border bg-[hsl(150,30%,5%)] ${rarityColors[item.rarity] || 'border-emerald-900/30'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-body text-[0.55rem] tracking-wider text-yellow-500 px-2 py-0.5 rounded bg-yellow-900/20">
                      {tr(itemTypeLabels[item.type], lang)}
                    </span>
                    <h3 className="font-heading text-sm text-emerald-400">{tr(item.name, lang)}</h3>
                    <span className="font-body text-[0.55rem] tracking-wider text-gray-500">{item.rarity}</span>
                  </div>
                  <p className="font-body text-xs text-gray-400 mt-2">{tr(item.description, lang)}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Items;
