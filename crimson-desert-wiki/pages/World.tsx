// @ts-nocheck
import { useState, useCallback, useRef } from 'react';
import { regions } from '@/crimson-desert-wiki/data/regions';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

type RegionTab = 'OVERVIEW' | 'LOCATIONS' | 'ENEMIES' | 'QUESTS';

const mapComingSoon: Record<string, string> = {
  fr: 'Carte de Pywel — Bientôt disponible',
  en: 'Map of Pywel — Coming Soon',
  es: 'Mapa de Pywel — Próximamente',
  it: 'Mappa di Pywel — Prossimamente',
};
const mapDesc: Record<string, string> = {
  fr: 'La carte interactive du continent de Pywel sera dévoilée prochainement. Explorez les régions ci-dessous en attendant.',
  en: 'The interactive map of the continent of Pywel will be revealed soon. Explore the regions below in the meantime.',
  es: 'El mapa interactivo del continente de Pywel será revelado pronto. Explora las regiones a continuación mientras tanto.',
  it: 'La mappa interattiva del continente di Pywel sarà svelata presto. Esplora le regioni qui sotto nel frattempo.',
};
const mapRelease: Record<string, string> = {
  fr: 'SORTIE : 19 MARS 2026', en: 'RELEASE: MARCH 19, 2026',
  es: 'LANZAMIENTO: 19 DE MARZO DE 2026', it: 'USCITA: 19 MARZO 2026',
};

const WorldPage = () => {
  const { lang, t } = useI18n();
  const [selectedRegion, setSelectedRegion] = useState<typeof regions[number] | null>(null);
  const [mapScale, setMapScale] = useState(1);
  const [regionTabs, setRegionTabs] = useState<Record<string, RegionTab>>({});
  const portalRef = useRef<HTMLDivElement>(null);

  const getTab = (id: string) => regionTabs[id] || 'OVERVIEW';
  const setTab = useCallback((id: string, tab: RegionTab) => {
    setRegionTabs(prev => ({ ...prev, [id]: tab }));
  }, []);

  const tabLabels: Record<RegionTab, string> = {
    OVERVIEW: t('world.overview'), LOCATIONS: t('world.locations'),
    ENEMIES: t('world.enemies'), QUESTS: t('world.quests'),
  };

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

        {/* Map Hero */}
        <RevealOnScroll className="mt-8">
          <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-lg bg-surface border border-border flex items-center justify-center">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <svg width="100%" height="100%">
                <defs><pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(28, 38%, 16%)" strokeWidth="0.3" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
              </svg>
            </div>
            <div className="relative z-10 text-center px-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold-mid/30 flex items-center justify-center bg-card-bg/50">
                <span className="text-3xl">🗺️</span>
              </div>
              <h2 className="font-heading text-lg sm:text-xl text-gold-bright">{mapComingSoon[lang]}</h2>
              <p className="font-body text-sm text-text-secondary mt-3 max-w-md mx-auto leading-relaxed">{mapDesc[lang]}</p>
              <div className="mt-4 inline-block font-ui text-[0.65rem] tracking-[0.2em] text-gold-muted px-3 py-1 border border-gold-mid/20 rounded-full">
                {mapRelease[lang]}
              </div>
              {/* Planned marker filters */}
              <div className="mt-6">
                <h3 className="font-ui text-[0.6rem] tracking-[0.15em] text-text-muted-custom mb-3">{t('world.map.filters_title')}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['resources', 'quests', 'mounts', 'skills', 'travel', 'bosses'].map(f => (
                    <span key={f} className="font-ui text-[0.6rem] tracking-wider px-3 py-1.5 rounded-full border border-border/50 text-text-muted-custom bg-raised/20 opacity-60">
                      {t(`world.map.filter.${f}`)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Region detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {regions.map((region, i) => {
            const tab = getTab(region.id);
            return (
              <RevealOnScroll key={region.id} stagger={i * 120}>
                <div className="rounded-lg border overflow-hidden card-hover min-h-[380px] flex flex-col"
                  style={{ borderColor: 'hsl(var(--border-subtle))', boxShadow: 'var(--shadow-card)', background: `linear-gradient(135deg, hsl(var(--bg-card)) 70%, ${region.colorTheme.primary}15 100%)` }}>
                  <div className="relative p-5 border-b border-border h-40 overflow-hidden" style={{ borderColor: `${region.colorTheme.primary}30` }}>
                    {region.image && (
                      <img src={region.image} alt={`${region.name} — © Pearl Abyss`} className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" decoding="async" width={400} height={160} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/60 to-transparent" />
                    <div className="relative flex items-center gap-3 h-full">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mt-auto" style={{ background: `${region.colorTheme.primary}30` }}>
                        <span className="text-lg">
                          {region.id === 'hernand' ? '🏰' : region.id === 'pailune' ? '🌿' : region.id === 'demeniss' ? '⚔' : region.id === 'delesyie' ? '🌫' : '🏜'}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <h3 className="font-heading text-base" style={{ color: region.colorTheme.primary }}>{region.name}</h3>
                        <p className="font-ui text-[0.6rem] text-text-muted-custom">{region.subtitle[lang]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-b border-border">
                    {(['OVERVIEW', 'LOCATIONS', 'ENEMIES', 'QUESTS'] as const).map(tb => (
                      <button key={tb} onClick={() => setTab(region.id, tb)}
                        className={`flex-1 font-ui text-[0.55rem] tracking-wider py-2 transition-colors focus-gold
                          ${tab === tb ? 'text-gold-bright border-b-2 border-gold-mid' : 'text-text-muted-custom hover:text-text-secondary'}`}>
                        {tabLabels[tb]}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 flex-1">
                    {tab === 'OVERVIEW' && <p className="font-body text-xs text-text-secondary leading-relaxed">{region.overview[lang]}</p>}
                    {tab === 'LOCATIONS' && (
                      <div className="space-y-2">
                        {region.locations.map(loc => (
                          <div key={loc.name[lang]} className="p-2 bg-raised/30 rounded">
                            <div className="flex justify-between items-start">
                              <span className="font-heading text-xs text-text-primary">{loc.name[lang]}</span>
                              <span className="font-ui text-[0.5rem] tracking-wider text-text-muted-custom">{loc.type}</span>
                            </div>
                            <p className="font-body text-[0.7rem] text-text-muted-custom mt-1">{loc.description[lang]}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {tab === 'ENEMIES' && (
                      <div className="space-y-1">
                        {region.enemies.map(e => (
                          <div key={e} className="flex items-center gap-2 py-1">
                            <span className="text-crimson-bright text-[0.5rem]">◆</span>
                            <span className="font-body text-xs text-text-secondary">{e}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {tab === 'QUESTS' && (
                      <div className="space-y-1">
                        {region.quests[lang].map(q => (
                          <div key={q} className="flex items-center gap-2 py-1">
                            <span className="text-gold-mid text-[0.5rem]">◆</span>
                            <span className="font-body text-xs text-text-secondary">{q}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* The Abysse */}
        <div className="mt-16">
          <RevealOnScroll>
            <div ref={portalRef} className="relative rounded-lg overflow-hidden py-16 px-6 text-center"
              style={{ background: 'radial-gradient(ellipse at center, hsl(var(--crimson-deep)) 0%, hsl(var(--bg-void)) 70%)' }}>
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: 'conic-gradient(from 0deg, transparent, hsl(var(--crimson-core)), transparent, hsl(var(--crimson-deep)), transparent)', animation: 'rotate-slow 20s linear infinite' }} />
              <div className="relative z-10">
                <h2 className="font-display text-3xl sm:text-5xl text-crimson-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--crimson-glow-strong))' }}>
                  {t('world.abysse.title')}
                </h2>
                <p className="font-body text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">{t('world.abysse.desc')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
                  {[
                    { title: t('world.abysse.rifts'), desc: t('world.abysse.rifts.desc') },
                    { title: t('world.abysse.time'), desc: t('world.abysse.time.desc') },
                    { title: t('world.abysse.thought'), desc: t('world.abysse.thought.desc') },
                  ].map(prop => (
                    <div key={prop.title} className="bg-void/50 border border-crimson-core/30 rounded-lg p-4 backdrop-blur-sm">
                      <h4 className="font-heading text-sm text-crimson-bright">{prop.title}</h4>
                      <p className="font-body text-xs text-text-muted-custom mt-2">{prop.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
};

export default WorldPage;
