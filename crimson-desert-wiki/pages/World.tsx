// @ts-nocheck
import { useState, useCallback, useRef, lazy, Suspense } from 'react';
import { regions } from '@/crimson-desert-wiki/data/regions';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

const InteractiveMap = lazy(() => import('@/crimson-desert-wiki/components/map/InteractiveMap'));

type RegionTab = 'OVERVIEW' | 'LOCATIONS' | 'ENEMIES' | 'QUESTS';

const MAP_STATS_KEYS = [
  'world.map.stats.area',
  'world.map.stats.regions',
  'world.map.stats.bosses',
  'world.map.stats.fast_travel',
  'world.map.stats.caves',
  'world.map.stats.collectibles',
  'world.map.stats.sky',
  'world.map.stats.quests',
] as const;

const WorldPage = () => {
  const { lang, t } = useI18n();
  const [regionTabs, setRegionTabs] = useState<Record<string, RegionTab>>({});
  const [mapFullscreen, setMapFullscreen] = useState(false);
  const portalRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const getTab = (id: string) => regionTabs[id] || 'OVERVIEW';
  const setTab = useCallback((id: string, tab: RegionTab) => {
    setRegionTabs(prev => ({ ...prev, [id]: tab }));
  }, []);

  const tabLabels: Record<RegionTab, string> = {
    OVERVIEW: t('world.overview'), LOCATIONS: t('world.locations'),
    ENEMIES: t('world.enemies'), QUESTS: t('world.quests'),
  };

  const regionEmoji = (id: string) =>
    id === 'hernand' ? '🏰' : id === 'pailune' ? '🌿' : id === 'demeniss' ? '⚔' : id === 'delesyie' ? '🌫' : '🏜';

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

        {/* Map subtitle / intro */}
        <RevealOnScroll className="mt-4">
          <p className="font-body text-sm text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            {t('world.map.subtitle')}
          </p>
        </RevealOnScroll>

        {/* Stats bar */}
        <RevealOnScroll className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MAP_STATS_KEYS.map(key => (
              <div key={key} className="bg-surface border border-border rounded-lg px-3 py-3 text-center">
                <span className="font-ui text-[0.65rem] tracking-wider text-gold-bright block">{t(key)}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Interactive Map Section */}
        <RevealOnScroll className="mt-10">
          <h2 className="font-heading text-lg text-gold-bright text-center mb-4">{t('world.map.interactive_title')}</h2>
          <p className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom text-center mb-6">
            {lang === 'fr'
              ? 'Carte interactive avec marqueurs, filtres et recherche — zoomez, cliquez sur les marqueurs pour les détails'
              : 'Interactive map with markers, filters and search — zoom, click markers for details'}
          </p>
        </RevealOnScroll>
      </div>

      {/* Map container — full width, outside the max-w-7xl wrapper */}
      <div
        ref={mapContainerRef}
        className={`relative border-y border-border transition-all duration-300 ${
          mapFullscreen ? 'fixed inset-0 z-[9999]' : ''
        }`}
        style={mapFullscreen ? undefined : { height: 'max(75vh, 550px)' }}
      >
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-[#1a1f2e]">
            <span className="font-ui text-sm text-white/40 animate-pulse">
              {lang === 'fr' ? 'Chargement de la carte...' : 'Loading map...'}
            </span>
          </div>
        }>
          <InteractiveMap
            fullscreen={mapFullscreen}
            onToggleFullscreen={() => setMapFullscreen(f => !f)}
          />
        </Suspense>
      </div>

      {/* Alternative maps — below the map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 mb-8 flex flex-wrap justify-center gap-3">
          <span className="font-ui text-[0.55rem] tracking-wider text-text-muted-custom self-center mr-2">
            {lang === 'fr' ? 'Autres cartes :' : 'Other maps:'}
          </span>
          {[
            { name: 'The Hidden Gaming Lair', url: 'https://crimsondesert.th.gl/' },
            { name: 'Map Master', url: 'https://mapmaster.io/games/crimson-desert' },
            { name: 'Game8', url: 'https://game8.co/games/Crimson-Desert/archives/585760' },
            { name: 'IMapp', url: 'https://crimson-desert.interactivemap.app/' },
          ].map(m => (
            <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer"
              className="font-ui text-[0.55rem] tracking-wider text-text-secondary hover:text-gold-bright transition-colors px-3 py-1.5 rounded-full border border-border/30 hover:border-gold-mid/30">
              {m.name} ↗
            </a>
          ))}
        </div>

        {/* Fast Travel System */}
        <RevealOnScroll className="mt-16">
          <GoldDivider variant="section" title={t('world.fast_travel.title')} />
          <p className="font-body text-sm text-text-secondary text-center max-w-3xl mx-auto mt-4 leading-relaxed">
            {t('world.fast_travel.desc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            {[
              { key: 'nexus', icon: '🔵' },
              { key: 'cresset', icon: '🟣' },
              { key: 'skydive', icon: '🪂' },
            ].map(ft => (
              <div key={ft.key} className="bg-surface border border-border rounded-lg p-5 text-center">
                <span className="text-2xl block mb-2">{ft.icon}</span>
                <h4 className="font-heading text-sm text-gold-bright mb-2">{t(`world.fast_travel.${ft.key}`)}</h4>
                <p className="font-body text-xs text-text-muted-custom leading-relaxed">{t(`world.fast_travel.${ft.key}_desc`)}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Region detail cards */}
        <RevealOnScroll className="mt-16">
          <GoldDivider variant="section" title={t('world.regions_title')} />
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {regions.map((region, i) => {
            const tab = getTab(region.id);
            return (
              <RevealOnScroll key={region.id} stagger={i * 120}>
                <div className="rounded-lg border overflow-hidden card-hover min-h-[380px] flex flex-col"
                  style={{ borderColor: 'hsl(var(--border-subtle))', boxShadow: 'var(--shadow-card)', background: `linear-gradient(135deg, hsl(var(--bg-card)) 70%, ${region.colorTheme.primary}15 100%)` }}>
                  <div className="relative p-5 border-b border-border h-40 overflow-hidden" style={{ borderColor: `${region.colorTheme.primary}30` }}>
                    {region.image && (
                      <img src={region.image} alt={`${region.name} — Crimson Desert`} className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" decoding="async" width={400} height={160} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/60 to-transparent" />
                    <div className="relative flex items-center gap-3 h-full">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mt-auto" style={{ background: `${region.colorTheme.primary}30` }}>
                        <span className="text-lg">{regionEmoji(region.id)}</span>
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
                  <div className="p-4 flex-1 overflow-y-auto max-h-[250px]">
                    {tab === 'OVERVIEW' && <p className="font-body text-xs text-text-secondary leading-relaxed">{region.overview[lang]}</p>}
                    {tab === 'LOCATIONS' && (
                      <div className="space-y-2">
                        {region.locations.length === 0 && <p className="font-body text-xs text-text-muted-custom italic">{lang === 'fr' ? 'Lieux en cours de documentation...' : 'Locations being documented...'}</p>}
                        {region.locations.map(loc => (
                          <div key={loc.name[lang] || loc.name.en} className="p-2 bg-raised/30 rounded">
                            <div className="flex justify-between items-start">
                              <span className="font-heading text-xs text-text-primary">{loc.name[lang] || loc.name.en}</span>
                              <span className="font-ui text-[0.5rem] tracking-wider text-text-muted-custom">{loc.type}</span>
                            </div>
                            <p className="font-body text-[0.7rem] text-text-muted-custom mt-1">{loc.description[lang] || loc.description.en}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {tab === 'ENEMIES' && (
                      <div className="space-y-1">
                        {region.enemies.length === 0 && <p className="font-body text-xs text-text-muted-custom italic">{lang === 'fr' ? 'Ennemis en cours de documentation...' : 'Enemies being documented...'}</p>}
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
                        {(region.quests[lang] || region.quests.en || []).length === 0 && <p className="font-body text-xs text-text-muted-custom italic">{lang === 'fr' ? 'Quêtes en cours de documentation...' : 'Quests being documented...'}</p>}
                        {(region.quests[lang] || region.quests.en || []).map(q => (
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

        {/* SEO-rich text content for AdSense / Google */}
        <RevealOnScroll className="mt-16">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <h2 className="font-heading text-lg text-gold-bright mb-4">
              {lang === 'fr' ? 'Guide complet de la carte de Crimson Desert' : 'Crimson Desert Complete Map Guide'}
            </h2>
            <div className="font-body text-sm text-text-secondary leading-relaxed space-y-4">
              {lang === 'fr' ? (
                <>
                  <p>
                    La carte de Crimson Desert couvre le continent de <strong>Pywel</strong>, un monde ouvert de <strong>90 km²</strong> divisé en 5 régions principales :
                    Hernand (la cité marchande), Pailune (patrie des Greymanes), Déméniss (territoire contesté), Délésyie (la région technologique) et le Désert Pourpre.
                    En plus de la surface au sol, le jeu propose des <strong>îles célestes</strong> accessibles en vol ainsi que <strong>plus de 100 grottes et souterrains</strong>.
                  </p>
                  <p>
                    Le système de voyage rapide repose sur les <strong>Abyss Nexus</strong> (46 points de téléportation gratuits) et les <strong>Abyss Cresset</strong> (puzzles
                    récompensant un Artéfact Abysse). Pour localiser ces points, utilisez la <strong>Lumière Guide</strong> de votre épée qui fait briller les Nexus d'un halo bleu.
                    Les cercles blancs avec un "?" sur la carte indiquent soit un Abyss Nexus, soit un Lieu Secret ou des Ruines Anciennes.
                  </p>
                  <p>
                    Le jeu contient <strong>76 boss</strong> (dont le Staglord, Queen Stoneback Crab, Hexe Marie, Golden Star et le boss final Kearush),
                    <strong>141 Artéfacts Abysse scellés</strong> à collecter, des <strong>Cloches Cachées</strong> pour révéler la carte,
                    et plus de <strong>300 heures de contenu</strong> entre quêtes principales, secondaires, défis, mini-jeux, artisanat et construction de base.
                  </p>
                  <p>
                    Pour gagner de l'argent rapidement, consultez notre <a href="/blog/crimson-desert-guide-argent-rapide-farming" className="text-gold-bright hover:text-gold-mid">guide pour gagner de l'argent</a>.
                    Pour les meilleurs équipements, découvrez notre <a href="/blog/crimson-desert-meilleures-armes-tier-list-2026" className="text-gold-bright hover:text-gold-mid">tier list des armes</a>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The Crimson Desert map covers the continent of <strong>Pywel</strong>, an open world spanning <strong>90 km²</strong> divided into 5 main regions:
                    Hernand (the trade city), Pailune (Greymane homeland), Demeniss (contested territory), Delesyia (the tech region), and the Crimson Desert.
                    Beyond ground level, the game features <strong>sky islands</strong> accessible by flight and <strong>over 100 caves and underground areas</strong>.
                  </p>
                  <p>
                    The fast travel system relies on <strong>Abyss Nexus</strong> (46 free teleportation points) and <strong>Abyss Cressets</strong> (puzzles
                    that reward an Abyss Artifact). To locate these points, use your sword's <strong>Guiding Light</strong> which makes Nexus glow blue.
                    White circles with "?" on the map indicate either an Abyss Nexus, a Secret Place, or Ancient Ruins.
                  </p>
                  <p>
                    The game contains <strong>76 bosses</strong> (including the Staglord, Queen Stoneback Crab, Hexe Marie, Golden Star and the final boss Kearush),
                    <strong>141 Sealed Abyss Artifacts</strong> to collect, <strong>Hidden Bells</strong> to reveal the map,
                    and over <strong>300 hours of content</strong> across main quests, side quests, challenges, minigames, crafting and base building.
                  </p>
                  <p>
                    To earn money fast, check our <a href="/blog/crimson-desert-guide-argent-rapide-farming" className="text-gold-bright hover:text-gold-mid">money-making guide</a>.
                    For the best gear, see our <a href="/blog/crimson-desert-meilleures-armes-tier-list-2026" className="text-gold-bright hover:text-gold-mid">weapons tier list</a>.
                  </p>
                </>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default WorldPage;
