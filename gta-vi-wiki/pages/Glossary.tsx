// @ts-nocheck
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { glossaryEntries } from '@/gta-vi-wiki/data/glossary';

const Glossary = () => {
  const { t, lang } = useI18n();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('ALL');
  const [sortAlpha, setSortAlpha] = useState(false);

  const categories = ['ALL', 'CHARACTER', 'LOCATION', 'FACTION', 'MECHANIC', 'ITEM'];

  const filtered = useMemo(() => {
    let entries = glossaryEntries.filter(e => {
      const matchCat = category === 'ALL' || e.category === category;
      const matchSearch = !search || e.term.toLowerCase().includes(search.toLowerCase()) || tr(e.definition, lang).toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
    if (sortAlpha) entries = [...entries].sort((a, b) => a.term.localeCompare(b.term));
    return entries;
  }, [category, search, sortAlpha, lang]);

  return (
    <>
      <SEOHead
        title={seo.glossary.title[lang] || seo.glossary.title.en}
        description={seo.glossary.desc[lang] || seo.glossary.desc.en}
        path="/glossary"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.glossary[lang], path: '/glossary' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('nav.db.glossary').toUpperCase()}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="mb-6">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t('lore.search')}
              className="w-full max-w-md mx-auto block px-4 py-3 rounded-lg text-sm outline-none"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255, 20, 147, 0.15)', color: 'white' }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
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
          <div className="flex justify-center mb-12">
            <button onClick={() => setSortAlpha(!sortAlpha)} className="text-xs tracking-wider" style={{ color: sortAlpha ? '#00FFFF' : 'rgba(255,255,255,0.3)' }}>
              {t('lore.alpha')} {sortAlpha ? '(ON)' : '(OFF)'}
            </button>
          </div>

          <div className="grid gap-4 pb-20">
            {filtered.map(entry => (
              <div key={entry.id} className="p-5 rounded-lg flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm font-bold" style={{ color: 'white' }}>{entry.term}</h3>
                    <span className="text-[0.55rem] tracking-wider px-1.5 py-0.5 rounded" style={{ background: 'rgba(0, 255, 255, 0.1)', color: '#00FFFF' }}>{t(`cat.${entry.category}`)}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{tr(entry.definition, lang)}</p>
                </div>
                {entry.relatedLink && (
                  <Link to={entry.relatedLink} className="text-xs tracking-wider flex-shrink-0" style={{ color: '#FF1493' }}>&rarr;</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Glossary;
