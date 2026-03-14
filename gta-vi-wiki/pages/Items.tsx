// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { items, itemTypeLabels, rarityColors } from '@/gta-vi-wiki/data/items';
import type { ItemType } from '@/gta-vi-wiki/data/items';

const Items = () => {
  const { t, lang } = useI18n();
  const [typeFilter, setTypeFilter] = useState<string>('ALL');

  const types: (string)[] = ['ALL', 'WEAPON', 'ARMOR', 'CONSUMABLE', 'MATERIAL', 'KEY_ITEM'];

  const filtered = useMemo(() => {
    if (typeFilter === 'ALL') return items;
    return items.filter(i => i.type === typeFilter);
  }, [typeFilter]);

  return (
    <>
      <SEOHead
        title={seo.items.title[lang] || seo.items.title.en}
        description={seo.items.desc[lang] || seo.items.desc.en}
        path="/items"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.items[lang], path: '/items' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto pb-20">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('nav.db.items').toUpperCase()}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {types.map(tp => (
              <button
                key={tp}
                onClick={() => setTypeFilter(tp)}
                className="px-3 py-1.5 text-xs tracking-wider rounded transition-all"
                style={{
                  background: typeFilter === tp ? 'rgba(255, 20, 147, 0.15)' : 'transparent',
                  border: `1px solid ${typeFilter === tp ? '#FF1493' : 'rgba(255,255,255,0.1)'}`,
                  color: typeFilter === tp ? '#FF1493' : 'rgba(255,255,255,0.5)',
                }}
              >
                {tp === 'ALL' ? t('lore.all') : tr(itemTypeLabels[tp as ItemType], lang)}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-bold mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {lang === 'fr' ? 'Base de donnees en cours de construction' : lang === 'es' ? 'Base de datos en construccion' : 'Database under construction'}
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {lang === 'fr' ? 'Les objets seront ajoutes a mesure que des informations seront confirmees.' : lang === 'es' ? 'Los objetos se agregaran cuando se confirme informacion.' : 'Items will be added as information is confirmed.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(item => (
                <div key={item.id} className="p-5 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm font-bold" style={{ color: 'white' }}>{tr(item.name, lang)}</h3>
                    <span className={`text-[0.55rem] px-1.5 py-0.5 rounded border ${rarityColors[item.rarity]}`}>{item.rarity}</span>
                  </div>
                  <p className="text-[0.65rem] tracking-wider uppercase mb-2" style={{ color: '#00FFFF' }}>{tr(itemTypeLabels[item.type], lang)}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(item.description, lang)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Items;
