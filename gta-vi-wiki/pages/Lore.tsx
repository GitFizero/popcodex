// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { loreEntries } from '@/gta-vi-wiki/data/lore';

const Lore = () => {
  const { t, lang } = useI18n();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('ALL');
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  const categories = ['ALL', 'CHARACTER', 'LOCATION', 'FACTION', 'ITEM', 'EVENT'];

  const filtered = useMemo(() => {
    return loreEntries.filter(e => {
      const matchCat = category === 'ALL' || e.category === category;
      const matchSearch = !search || e.title.toLowerCase().includes(search.toLowerCase()) || tr(e.excerpt, lang).toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search, lang]);

  const selected = selectedEntry ? loreEntries.find(e => e.id === selectedEntry) : null;

  return (
    <>
      <SEOHead
        title={seo.lore.title[lang] || seo.lore.title.en}
        description={seo.lore.desc[lang] || seo.lore.desc.en}
        path="/lore"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.lore[lang], path: '/lore' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('lore.title')}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {selected ? (
            /* Detail view */
            <div className="pb-20">
              <button onClick={() => setSelectedEntry(null)} className="text-sm mb-6 transition-colors" style={{ color: '#00FFFF' }}>
                {t('lore.back')}
              </button>
              <div className="rounded-xl p-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.15)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[0.6rem] tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(0, 255, 255, 0.15)', color: '#00FFFF' }}>{t(`cat.${selected.category}`)}</span>
                  <span className="text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('lore.updated')} {selected.lastUpdated}</span>
                </div>
                <h2 className="text-2xl font-black mb-6" style={{ color: '#FF1493' }}>{selected.title}</h2>
                <div className="text-sm leading-relaxed whitespace-pre-line mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {tr(selected.content, lang)}
                </div>
                {selected.relatedEntries.length > 0 && (
                  <div>
                    <h3 className="text-xs tracking-wider uppercase mb-3" style={{ color: '#00FFFF' }}>{t('lore.related')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.relatedEntries.map(relId => {
                        const rel = loreEntries.find(e => e.id === relId);
                        return rel ? (
                          <button key={relId} onClick={() => setSelectedEntry(relId)} className="px-3 py-1.5 text-xs rounded transition-all" style={{ border: '1px solid rgba(255, 20, 147, 0.2)', color: '#FF1493' }}>
                            {rel.title}
                          </button>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* List view */
            <>
              <div className="mb-8">
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder={t('lore.search')}
                  className="w-full max-w-md mx-auto block px-4 py-3 rounded-lg text-sm outline-none"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255, 20, 147, 0.15)', color: 'white' }}
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className="px-3 py-1.5 text-xs tracking-wider rounded transition-all"
                    style={{
                      background: category === cat ? 'rgba(255, 20, 147, 0.15)' : 'transparent',
                      border: `1px solid ${category === cat ? '#FF1493' : 'rgba(255,255,255,0.1)'}`,
                      color: category === cat ? '#FF1493' : 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {cat === 'ALL' ? t('lore.all') : t(`cat.${cat}`)}
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <p className="text-center py-12" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('lore.no_entries')}</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                  {filtered.map(entry => (
                    <RevealOnScroll key={entry.id}>
                      <button
                        onClick={() => setSelectedEntry(entry.id)}
                        className="w-full text-left p-5 rounded-lg transition-all duration-300"
                        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}
                      >
                        <span className="text-[0.6rem] tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(0, 255, 255, 0.1)', color: '#00FFFF' }}>{t(`cat.${entry.category}`)}</span>
                        <h3 className="text-sm font-bold mt-3 mb-2" style={{ color: 'white' }}>{entry.title}</h3>
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(entry.excerpt, lang)}</p>
                        <p className="text-[0.6rem] mt-3" style={{ color: 'rgba(255,255,255,0.3)' }}>{entry.readingTime} {t('recent.read')}</p>
                      </button>
                    </RevealOnScroll>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Lore;
