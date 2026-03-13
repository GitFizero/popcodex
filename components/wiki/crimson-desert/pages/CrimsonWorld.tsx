'use client';

import { useState } from 'react';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import { regions } from '@/lib/data/crimson-desert/regions';
import type { Region } from '@/lib/data/crimson-desert/regions';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';

type WorldTab = 'overview' | 'locations' | 'enemies' | 'quests';

export default function CrimsonWorld({ locale }: { locale: string }) {
  const { t, lang } = useCrimsonI18n(locale);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [worldTab, setWorldTab] = useState<WorldTab>('overview');
  const [galleryIndex, setGalleryIndex] = useState(0);

  const worldTabs: { key: WorldTab; labelKey: string }[] = [
    { key: 'overview', labelKey: 'world.overview' },
    { key: 'locations', labelKey: 'world.locations' },
    { key: 'enemies', labelKey: 'world.enemies' },
    { key: 'quests', labelKey: 'world.quests' },
  ];

  const openRegion = (region: Region) => {
    setSelectedRegion(region);
    setWorldTab('overview');
    setGalleryIndex(0);
  };

  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <CrimsonNavBar locale={locale} />

      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-surface to-surface" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <RevealOnScroll>
            <h1 className="font-display text-4xl md:text-6xl text-gold-bright mb-4">{t('world.title')}</h1>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">{t('world.continent')}</p>
          </RevealOnScroll>
        </div>
      </section>

      <GoldDivider />

      {/* Interactive SVG Map */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <RevealOnScroll>
          <div className="relative bg-surface-elevated border border-border rounded-lg overflow-hidden aspect-[16/10]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 625" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="regionGlow"><stop offset="0%" stopColor="#c8a45a" stopOpacity="0.4" /><stop offset="100%" stopColor="#c8a45a" stopOpacity="0" /></radialGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <path d="M200,150 Q350,80 500,120 Q650,60 800,150 Q850,300 780,450 Q650,520 500,500 Q350,530 220,450 Q150,300 200,150Z" fill="none" stroke="#c8a45a" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="8,4" />
              {regions.map((region, i) => {
                if (i === 0) return null;
                const prev = regions[i - 1];
                return <line key={`path-${i}`} x1={prev.mapPosition.x * 10} y1={prev.mapPosition.y * 6.25} x2={region.mapPosition.x * 10} y2={region.mapPosition.y * 6.25} stroke="#c8a45a" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4,4" />;
              })}
              {regions.map(region => {
                const cx = region.mapPosition.x * 10;
                const cy = region.mapPosition.y * 6.25;
                const isSelected = selectedRegion?.id === region.id;
                return (
                  <g key={region.id} className="cursor-pointer" onClick={() => openRegion(region)}>
                    <circle cx={cx} cy={cy} r="25" fill="url(#regionGlow)" opacity={isSelected ? 1 : 0.5} />
                    <circle cx={cx} cy={cy} r={isSelected ? 14 : 10} fill="none" stroke={region.colorTheme.primary} strokeWidth={isSelected ? 2 : 1} opacity={isSelected ? 1 : 0.6} className="transition-all duration-300" />
                    <circle cx={cx} cy={cy} r={isSelected ? 6 : 4} fill={region.colorTheme.primary} filter={isSelected ? 'url(#glow)' : undefined} className="transition-all duration-300" />
                    <text x={cx} y={cy - 18} textAnchor="middle" fill={isSelected ? '#e8d48b' : '#c8a45a'} fontSize="11" fontFamily="Cinzel, serif" opacity={isSelected ? 1 : 0.7} className="pointer-events-none">{region.name}</text>
                  </g>
                );
              })}
            </svg>
          </div>
        </RevealOnScroll>
      </section>

      {/* Region Detail Panel */}
      {selectedRegion && (
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <RevealOnScroll>
            <div className="bg-surface-elevated border border-gold-mid/30 rounded-lg overflow-hidden shadow-lg shadow-gold-bright/5">
              <div className="relative p-8">
                <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, ${selectedRegion.colorTheme.primary}44, transparent)` }} />
                <div className="relative flex items-start justify-between">
                  <div>
                    <h2 className="font-display text-3xl text-gold-bright mb-2">{selectedRegion.name}</h2>
                    <p className="font-body text-lg text-text-secondary">{tr(selectedRegion.subtitle, lang)}</p>
                  </div>
                  <button onClick={() => setSelectedRegion(null)} className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 border border-gold-mid/30 text-gold-mid hover:bg-black/50 transition-colors">&times;</button>
                </div>
              </div>

              <div className="flex border-b border-border overflow-x-auto px-4">
                {worldTabs.map(tab => (
                  <button key={tab.key} onClick={() => setWorldTab(tab.key)}
                    className={`font-ui text-sm px-5 py-3 whitespace-nowrap transition-colors border-b-2 ${worldTab === tab.key ? 'border-gold-bright text-gold-bright' : 'border-transparent text-text-secondary hover:text-gold-mid'}`}>
                    {t(tab.labelKey)}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {worldTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="font-body text-text-secondary leading-relaxed">{tr(selectedRegion.description, lang)}</p>
                    <p className="font-body text-text-secondary leading-relaxed">{tr(selectedRegion.overview, lang)}</p>
                    {selectedRegion.image && (
                      <div className="rounded-lg overflow-hidden border border-border">
                        <img src={selectedRegion.image} alt={selectedRegion.name} className="w-full h-64 object-cover" />
                      </div>
                    )}
                    {selectedRegion.gallery && selectedRegion.gallery.length > 0 && (
                      <div>
                        <div className="relative rounded-lg overflow-hidden border border-border">
                          <img src={selectedRegion.gallery[galleryIndex]} alt={`${selectedRegion.name} - ${galleryIndex + 1}`} className="w-full h-64 object-cover" />
                          {selectedRegion.gallery.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                              {selectedRegion.gallery.map((_, idx) => (
                                <button key={idx} onClick={() => setGalleryIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${galleryIndex === idx ? 'bg-gold-bright scale-125' : 'bg-gold-mid/40 hover:bg-gold-mid/70'}`} />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {worldTab === 'locations' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedRegion.locations && selectedRegion.locations.length > 0 ? (
                      selectedRegion.locations.map((location, idx) => (
                        <div key={idx} className="bg-surface rounded-lg p-4 border border-border hover:border-gold-mid/30 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedRegion.colorTheme.primary }} />
                            <h4 className="font-heading text-sm text-gold-bright">{tr(location.name, lang)}</h4>
                          </div>
                          {location.description && <p className="font-body text-sm text-text-secondary">{tr(location.description, lang)}</p>}
                        </div>
                      ))
                    ) : (
                      <p className="font-body text-text-secondary italic col-span-2 text-center py-8">{t('chars.unknown')}</p>
                    )}
                  </div>
                )}
                {(worldTab === 'enemies' || worldTab === 'quests') && (
                  <div className="text-center py-8"><p className="font-body text-text-secondary italic">{t('chars.unknown')}</p></div>
                )}
              </div>
            </div>
          </RevealOnScroll>
        </section>
      )}

      <GoldDivider />

      {/* Abysse Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-gold-bright mb-4">{t('world.abysse.title')}</h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">{t('world.abysse.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-elevated border border-border rounded-lg p-6 text-center hover:border-gold-mid/30 transition-all duration-500 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-500/60 transition-colors">
                <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>
              </div>
              <h3 className="font-heading text-lg text-gold-bright mb-2">{t('world.abysse.rifts')}</h3>
              <p className="font-body text-sm text-text-secondary">{t('world.abysse.rifts.desc')}</p>
            </div>
            <div className="bg-surface-elevated border border-border rounded-lg p-6 text-center hover:border-gold-mid/30 transition-all duration-500 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-900/30 border border-red-500/30 flex items-center justify-center group-hover:border-red-500/60 transition-colors">
                <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /><path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" /></svg>
              </div>
              <h3 className="font-heading text-lg text-gold-bright mb-2">{t('world.abysse.time')}</h3>
              <p className="font-body text-sm text-text-secondary">{t('world.abysse.time.desc')}</p>
            </div>
            <div className="bg-surface-elevated border border-border rounded-lg p-6 text-center hover:border-gold-mid/30 transition-all duration-500 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-500/60 transition-colors">
                <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              </div>
              <h3 className="font-heading text-lg text-gold-bright mb-2">{t('world.abysse.thought')}</h3>
              <p className="font-body text-sm text-text-secondary">{t('world.abysse.thought.desc')}</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Region Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map(region => (
            <RevealOnScroll key={region.id}>
              <button onClick={() => openRegion(region)} className="w-full text-left group">
                <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-gold-mid/30 hover:shadow-lg hover:shadow-gold-bright/5 hover:-translate-y-1">
                  <div className="h-40 overflow-hidden bg-black/30 relative">
                    {region.image ? (
                      <img src={region.image} alt={region.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${region.colorTheme.primary}44, ${region.colorTheme.secondary}44)` }} />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: region.colorTheme.primary }} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg text-gold-bright mb-1">{region.name}</h3>
                    <p className="font-body text-sm text-text-secondary line-clamp-2">{tr(region.subtitle, lang)}</p>
                  </div>
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <CrimsonFooter locale={locale} />
    </div>
  );
}
