// @ts-nocheck
import { useState } from 'react';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { regions } from '@/gta-vi-wiki/data/regions';

const World = () => {
  const { t, lang } = useI18n();
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'locations' | 'enemies' | 'quests'>('overview');

  const tabs = [
    { key: 'overview', label: t('world.overview') },
    { key: 'locations', label: t('world.locations') },
    { key: 'enemies', label: t('world.enemies') },
    { key: 'quests', label: t('world.quests') },
  ];

  return (
    <>
      <SEOHead
        title={seo.world.title[lang] || seo.world.title.en}
        description={seo.world.desc[lang] || seo.world.desc.en}
        path="/world"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.world[lang], path: '/world' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('world.title')}
            </h1>
            <p className="text-center text-xs tracking-wider uppercase mb-4" style={{ color: '#00FFFF' }}>{t('world.continent')}</p>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {/* Region selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {regions.map(r => (
              <button
                key={r.id}
                onClick={() => { setSelectedRegion(r); setActiveTab('overview'); }}
                className="px-4 py-2 text-xs font-bold tracking-wider rounded transition-all"
                style={{
                  background: selectedRegion.id === r.id ? `${r.colorTheme.primary}22` : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${selectedRegion.id === r.id ? r.colorTheme.primary : 'rgba(255,255,255,0.1)'}`,
                  color: selectedRegion.id === r.id ? r.colorTheme.primary : 'rgba(255,255,255,0.5)',
                }}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* Selected region detail */}
          <div className="rounded-xl p-8 mb-16" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${selectedRegion.colorTheme.primary}33` }}>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="w-full aspect-video rounded-lg flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${selectedRegion.colorTheme.primary}22, ${selectedRegion.colorTheme.secondary}22)` }}>
                  <span className="text-6xl font-black" style={{ color: `${selectedRegion.colorTheme.primary}44` }}>{selectedRegion.name[0]}</span>
                </div>
                <h2 className="text-2xl font-black mb-1" style={{ color: selectedRegion.colorTheme.primary }}>{selectedRegion.name}</h2>
                <p className="text-xs tracking-wider uppercase mb-4" style={{ color: selectedRegion.colorTheme.secondary }}>{tr(selectedRegion.subtitle, lang)}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{tr(selectedRegion.description, lang)}</p>
              </div>

              <div className="lg:w-2/3">
                <div className="flex flex-wrap gap-2 mb-6">
                  {tabs.map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      className="px-4 py-2 text-xs font-bold tracking-wider rounded transition-all"
                      style={{
                        background: activeTab === tab.key ? `${selectedRegion.colorTheme.primary}22` : 'transparent',
                        border: `1px solid ${activeTab === tab.key ? selectedRegion.colorTheme.primary : 'rgba(255,255,255,0.1)'}`,
                        color: activeTab === tab.key ? selectedRegion.colorTheme.primary : 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="min-h-[250px]">
                  {activeTab === 'overview' && (
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.7)' }}>{tr(selectedRegion.overview, lang)}</p>
                  )}
                  {activeTab === 'locations' && (
                    <div className="grid gap-4">
                      {selectedRegion.locations.map(loc => (
                        <div key={tr(loc.name, lang)} className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm font-bold" style={{ color: 'white' }}>{tr(loc.name, lang)}</h4>
                            <span className="text-[0.55rem] tracking-wider px-1.5 py-0.5 rounded" style={{ background: 'rgba(0, 255, 255, 0.1)', color: '#00FFFF' }}>{loc.type}</span>
                          </div>
                          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(loc.description, lang)}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === 'enemies' && (
                    <div className="flex flex-wrap gap-3">
                      {selectedRegion.enemies.map(e => (
                        <span key={e} className="px-3 py-1.5 text-xs rounded" style={{ background: 'rgba(255, 20, 147, 0.1)', border: '1px solid rgba(255, 20, 147, 0.2)', color: '#FF1493' }}>{e}</span>
                      ))}
                    </div>
                  )}
                  {activeTab === 'quests' && (
                    <div className="space-y-3">
                      {(selectedRegion.quests[lang] || selectedRegion.quests.en).map((q, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ background: '#00FFFF', boxShadow: '0 0 6px #00FFFF' }} />
                          <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{q}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Underworld section */}
          <NeonDivider variant="section" title={t('world.underworld.title')} />
          <div className="py-12">
            <RevealOnScroll>
              <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto mb-12" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('world.underworld.desc')}</p>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: t('world.underworld.drugs'), desc: t('world.underworld.drugs.desc'), color: '#FF1493' },
                { title: t('world.underworld.heists'), desc: t('world.underworld.heists.desc'), color: '#00FFFF' },
                { title: t('world.underworld.corruption'), desc: t('world.underworld.corruption.desc'), color: '#FF1493' },
              ].map(item => (
                <RevealOnScroll key={item.title}>
                  <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}22` }}>
                    <h3 className="text-sm font-bold tracking-wider mb-3" style={{ color: item.color }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* All regions grid */}
          <NeonDivider className="my-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {regions.map(r => (
              <RevealOnScroll key={r.id}>
                <button
                  onClick={() => { setSelectedRegion(r); setActiveTab('overview'); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                  className="w-full text-left p-6 rounded-lg transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${r.colorTheme.primary}22` }}
                >
                  <h3 className="text-lg font-bold mb-1" style={{ color: r.colorTheme.primary }}>{r.name}</h3>
                  <p className="text-xs tracking-wider uppercase mb-3" style={{ color: r.colorTheme.secondary }}>{tr(r.subtitle, lang)}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(r.description, lang)}</p>
                </button>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default World;
