// @ts-nocheck
import { useState } from 'react';
import { useI18n, tr } from '@/fable-wiki/context/I18nContext';
import { regions } from '@/fable-wiki/data/regions';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const World = () => {
  const { t, lang } = useI18n();
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [activeTab, setActiveTab] = useState<string>('overview');

  const tabs = [
    { key: 'overview', label: t('world.overview') },
    { key: 'locations', label: t('world.locations') },
    { key: 'enemies', label: t('world.enemies') },
    { key: 'quests', label: t('world.quests') },
  ];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.world.title[lang]}
        description={seo.world.desc[lang]}
        path="/world"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.world[lang], path: '/world' },
        ]}
      />

      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('world.title')} />
        </RevealOnScroll>

        {/* Interactive map */}
        <RevealOnScroll>
          <div className="relative h-[350px] mt-8 rounded-lg border border-emerald-900/30 overflow-hidden" style={{ background: 'hsl(150,30%,5%)' }}>
            <svg width="100%" height="100%" className="absolute inset-0 opacity-10" aria-hidden="true">
              <defs>
                <pattern id="world-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#world-grid)" />
            </svg>

            {regions.map(region => (
              <button
                key={region.id}
                onClick={() => { setSelectedRegion(region); setActiveTab('overview'); }}
                className="absolute group"
                style={{ left: `${region.mapPosition.x}%`, top: `${region.mapPosition.y}%`, transform: 'translate(-50%,-50%)' }}
              >
                <div className="relative">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedRegion.id === region.id ? 'bg-yellow-400 scale-150' : 'bg-emerald-500'}`}
                    style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                  />
                  <div className="absolute inset-0 rounded-full border border-emerald-500" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
                </div>
                <span className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-[0.65rem] transition-colors ${selectedRegion.id === region.id ? 'text-yellow-400' : 'text-emerald-600 group-hover:text-emerald-400'}`}>
                  {region.name}
                </span>
              </button>
            ))}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="font-heading text-2xl sm:text-4xl tracking-[0.3em] text-emerald-800/20">{t('world.continent')}</h2>
            </div>
          </div>
        </RevealOnScroll>

        {/* Region detail */}
        <RevealOnScroll>
          <div className="mt-8 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] overflow-hidden">
            <div className="p-6 border-b border-emerald-900/30" style={{ background: 'linear-gradient(135deg, hsl(150,30%,8%) 0%, hsl(150,30%,3%) 100%)' }}>
              <span className="font-body text-[0.6rem] tracking-[0.3em] text-yellow-500">{tr(selectedRegion.subtitle, lang)}</span>
              <h2 className="font-display text-3xl text-emerald-400 mt-1">{selectedRegion.name}</h2>
              <p className="font-body text-sm text-gray-400 mt-3 leading-relaxed">{tr(selectedRegion.description, lang)}</p>
            </div>

            <div className="flex overflow-x-auto border-b border-emerald-900/30">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 font-heading text-[0.7rem] tracking-[0.1em] whitespace-nowrap transition-colors
                    ${activeTab === tab.key ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-gray-500 hover:text-emerald-400'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <p className="font-body text-sm text-gray-300 leading-relaxed whitespace-pre-line">{tr(selectedRegion.overview, lang)}</p>
              )}
              {activeTab === 'locations' && (
                <div className="space-y-3">
                  {selectedRegion.locations.length === 0 ? (
                    <p className="font-body text-sm text-gray-500 italic">{lang === 'fr' ? 'Aucun lieu documente.' : 'No documented locations.'}</p>
                  ) : selectedRegion.locations.map((loc, i) => (
                    <div key={i} className="p-4 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,6%)]">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading text-sm text-emerald-400">{tr(loc.name, lang)}</h4>
                        <span className="font-body text-[0.55rem] tracking-wider text-yellow-500 px-2 py-0.5 rounded bg-yellow-900/20">{loc.type}</span>
                      </div>
                      <p className="font-body text-xs text-gray-400 mt-2">{tr(loc.description, lang)}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'enemies' && (
                <div className="flex flex-wrap gap-2">
                  {selectedRegion.enemies.length === 0 ? (
                    <p className="font-body text-sm text-gray-500 italic">{lang === 'fr' ? 'Aucun ennemi documente.' : 'No documented enemies.'}</p>
                  ) : selectedRegion.enemies.map((enemy, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg border border-red-900/30 bg-red-900/10 font-body text-xs text-red-400">
                      {enemy}
                    </span>
                  ))}
                </div>
              )}
              {activeTab === 'quests' && (
                <div className="space-y-2">
                  {(selectedRegion.quests[lang] || []).length === 0 ? (
                    <p className="font-body text-sm text-gray-500 italic">{lang === 'fr' ? 'Aucune quete documentee.' : 'No documented quests.'}</p>
                  ) : (selectedRegion.quests[lang] || []).map((quest, i) => (
                    <div key={i} className="p-3 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,6%)]">
                      <span className="font-body text-sm text-gray-300">{quest}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default World;
