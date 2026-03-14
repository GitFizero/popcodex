// @ts-nocheck
import { useState } from 'react';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';
import { regions } from '@/wolverine-wiki/data/regions';

const REGION_TABS = ['overview', 'locations', 'enemies', 'quests'] as const;

const WorldPage = () => {
  const { t, lang } = useI18n();
  const [activeRegion, setActiveRegion] = useState(regions[0].id);
  const [activeTab, setActiveTab] = useState<typeof REGION_TABS[number]>('overview');

  const region = regions.find(r => r.id === activeRegion) || regions[0];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('world.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.world.title[lang]}</h1>

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {/* Region List */}
          <div className="lg:w-[30%]">
            <div className="space-y-3">
              {regions.map(r => (
                <button key={r.id} onClick={() => { setActiveRegion(r.id); setActiveTab('overview'); }}
                  className={`w-full text-left rounded-lg p-4 transition-all duration-200 border
                    ${r.id === activeRegion ? 'bg-raised border-yellow-500/50' : 'border-border hover:bg-raised/30'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ background: r.colorTheme.primary }} />
                    <div>
                      <div className="font-heading text-sm text-text-primary">{r.name}</div>
                      <div className="font-ui text-[0.6rem] text-text-muted-custom">{r.subtitle[lang]}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Map Filters placeholder */}
            <div className="mt-6 bg-surface/50 border border-border rounded-lg p-4">
              <h3 className="font-heading text-xs tracking-[0.15em] text-gold-mid mb-3">{t('world.map.filters_title')}</h3>
              <div className="space-y-2">
                {['resources', 'quests', 'mounts', 'skills', 'travel', 'bosses'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-gray-700" />
                    <span className="font-ui text-xs text-text-muted-custom">{t(`world.map.filter.${f}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Region Detail */}
          <div className="lg:w-[70%]">
            <div className="relative rounded-lg overflow-hidden border border-border p-6 mb-6"
              style={{ background: `linear-gradient(135deg, rgba(20,20,20,0.95), ${region.colorTheme.primary}15)` }}>
              <h2 className="font-display text-2xl text-gold-bright">{region.name}</h2>
              <p className="font-ui text-xs tracking-[0.2em] mt-1" style={{ color: region.colorTheme.primary }}>{region.subtitle[lang]}</p>
              <p className="font-body text-sm text-text-secondary mt-4 leading-relaxed">{region.description[lang]}</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 mb-6">
              {REGION_TABS.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`font-ui text-[0.65rem] tracking-wider px-3 py-2 rounded transition-all duration-200
                    ${activeTab === tab ? 'bg-yellow-600/30 text-yellow-400 border border-yellow-500/50' : 'text-text-muted-custom hover:text-text-secondary border border-transparent'}`}>
                  {t(`world.${tab}`)}
                </button>
              ))}
            </div>

            <div className="bg-surface/50 border border-border rounded-lg p-6">
              {activeTab === 'overview' && (
                <p className="font-body text-sm text-text-secondary leading-relaxed whitespace-pre-line">{region.overview[lang]}</p>
              )}

              {activeTab === 'locations' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {region.locations.map(loc => (
                    <div key={loc.name[lang]} className="bg-raised/30 rounded-md p-4 border border-border/50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded bg-gray-700 text-text-muted-custom">{loc.type}</span>
                        <h4 className="font-heading text-sm text-text-primary">{loc.name[lang]}</h4>
                      </div>
                      <p className="font-body text-xs text-text-secondary">{loc.description[lang]}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'enemies' && (
                <div className="flex flex-wrap gap-2">
                  {region.enemies.map(e => (
                    <span key={e} className="font-ui text-xs tracking-wider px-3 py-1.5 rounded bg-red-900/20 text-red-400 border border-red-500/30">{e}</span>
                  ))}
                </div>
              )}

              {activeTab === 'quests' && (
                <div className="space-y-2">
                  {region.quests[lang].map(q => (
                    <div key={q} className="bg-raised/30 rounded-md p-3 border border-border/50 flex items-center gap-3">
                      <span className="text-yellow-500">📜</span>
                      <span className="font-body text-sm text-text-secondary">{q}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Weapon X Section */}
        <RevealOnScroll className="mt-16">
          <GoldDivider variant="section" title={t('world.abysse.title')} />
          <div className="bg-surface/50 border border-border rounded-lg p-8 mt-8">
            <p className="font-body text-sm text-text-secondary leading-relaxed mb-8 text-center max-w-2xl mx-auto">{t('world.abysse.desc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { key: 'rifts', color: '#6B7280' },
                { key: 'time', color: '#8B5CF6' },
                { key: 'thought', color: '#DC2626' },
              ].map(item => (
                <div key={item.key} className="bg-raised/30 rounded-lg p-6 border border-border/50 text-center">
                  <h4 className="font-heading text-lg" style={{ color: item.color }}>{t(`world.abysse.${item.key}`)}</h4>
                  <p className="font-body text-xs text-text-secondary mt-3">{t(`world.abysse.${item.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default WorldPage;
