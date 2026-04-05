// @ts-nocheck
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import { mapMarkers, markerCategories, type MarkerCategory, type MapMarker } from '@/crimson-desert-wiki/data/mapMarkers';

// ── Map image: 5000×4336 (upscaled 2x for clarity) — correct aspect ratio ──
const IMG_W = 5000;
const IMG_H = 4336;
const MAP_HEIGHT = 1000;
const MAP_WIDTH = Math.round((IMG_W / IMG_H) * MAP_HEIGHT); // ≈ 1153
const MAP_BOUNDS: L.LatLngBoundsExpression = [[0, 0], [MAP_HEIGHT, MAP_WIDTH]];
const MAP_CENTER: L.LatLngExpression = [MAP_HEIGHT / 2, MAP_WIDTH / 2];
const MAP_IMAGE = '/pywel-map.webp';

function toLatLng(pos: [number, number]): L.LatLngExpression {
  return [MAP_HEIGHT - (pos[0] / 100) * MAP_HEIGHT, (pos[1] / 100) * MAP_WIDTH];
}

// ── SVG pin markers ──
const PIN_PATH = 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z';
const CAT_SYMBOLS: Record<MarkerCategory, string> = {
  cities: '<path d="M10.5 8v3h1v-1.5h1V11h1V8h-1v1.5h-1V8z" fill="COLOR" opacity="0.85"/>',
  fast_travel: '<polygon points="12,6 13.5,9.5 10.5,9.5" fill="COLOR" opacity="0.85"/>',
  bosses: '<path d="M11 8.2h.8v-.8h.4v.8h.8v.4h-.8v.8h-.4v-.8H11z" fill="COLOR" opacity="0.85"/>',
  quests: '<text x="12" y="11.5" text-anchor="middle" font-size="6" font-weight="bold" fill="COLOR" opacity="0.85">!</text>',
  resources: '<path d="M12 6l-2.5 3h1.5v3h2v-3h1.5z" fill="COLOR" opacity="0.85"/>',
  mounts: '<path d="M10 10.5c0-1.5 1-2.5 2-3 1 .5 2 1.5 2 3h-1l-.5-1h-1l-.5 1z" fill="COLOR" opacity="0.85"/>',
  secrets: '<text x="12" y="11.5" text-anchor="middle" font-size="6" font-weight="bold" fill="COLOR" opacity="0.85">?</text>',
  vendors: '<path d="M10 7.5h4v1h-4zm-.5 1.5h5l-.5 3h-4z" fill="COLOR" opacity="0.85"/>',
  collectibles: '<path d="M12 6.5l1 2h2l-1.5 1.5.5 2-2-1-2 1 .5-2L9 8.5h2z" fill="COLOR" opacity="0.85"/>',
  skills: '<path d="M12 6l.8 2h2l-1.5 1.2.5 2L12 10l-1.8 1.2.5-2L9.2 8h2z" fill="COLOR" opacity="0.85"/>',
};

function createPinIcon(category: MarkerCategory, color: string, size: number = 28): L.DivIcon {
  const sym = CAT_SYMBOLS[category].replace(/COLOR/g, color);
  return L.divIcon({
    className: 'mg-pin',
    iconSize: [size, Math.round(size * 1.25)],
    iconAnchor: [size / 2, Math.round(size * 1.25)],
    popupAnchor: [0, -Math.round(size * 1.1)],
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${Math.round(size * 1.25)}" style="filter:drop-shadow(0 2px 3px rgba(0,0,0,0.6));cursor:pointer"><path d="${PIN_PATH}" fill="${color}"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/>${sym}</svg>`,
  });
}

// ── Mobile detection hook ──
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return mobile;
}

/* ──── Sidebar ──── */
function MapSidebar({
  visible, onToggle, markerCounts, markers, onSelectMarker, collapsed, onToggleCollapse, isMobile,
}: {
  visible: Set<MarkerCategory>; onToggle: (id: MarkerCategory) => void;
  markerCounts: Record<string, number>; markers: MapMarker[];
  onSelectMarker: (m: MapMarker) => void;
  collapsed: boolean; onToggleCollapse: () => void; isMobile: boolean;
}) {
  const { lang } = useI18n();
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return markers.filter(m => {
      const name = m.name[lang] || m.name.en || m.name.fr || '';
      return name.toLowerCase().includes(q);
    }).slice(0, 10);
  }, [query, markers, lang]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSearchOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const allVisible = markerCategories.every(c => visible.has(c.id));
  const toggleAll = () => {
    markerCategories.forEach(c => {
      if (allVisible) { if (visible.has(c.id)) onToggle(c.id); }
      else { if (!visible.has(c.id)) onToggle(c.id); }
    });
  };

  // Collapsed: show toggle button
  if (collapsed) {
    return (
      <button
        onClick={onToggleCollapse}
        className="absolute top-3 left-3 z-[1000] w-10 h-10 rounded-lg bg-[#1e2233]/95 backdrop-blur border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    );
  }

  const sidebarWidth = isMobile ? 'w-56' : 'w-60';

  return (
    <>
      {/* Backdrop on mobile */}
      {isMobile && (
        <div className="absolute inset-0 z-[999] bg-black/40" onClick={onToggleCollapse} />
      )}
      <div className={`absolute top-0 left-0 bottom-0 z-[1000] ${sidebarWidth} flex flex-col bg-[#161929]/98 backdrop-blur-md border-r border-white/10`}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
          <span className="text-[0.6rem] font-semibold tracking-wider text-[#C9A84C] uppercase">
            {lang === 'fr' ? 'Carte de Pywel' : 'Pywel Map'}
          </span>
          <button onClick={onToggleCollapse} className="w-6 h-6 rounded flex items-center justify-center text-white/40 hover:text-white/80 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        </div>

        {/* Search */}
        <div ref={searchRef} className="px-3 py-2 border-b border-white/5 relative">
          <div className="relative">
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/30" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" value={query}
              onChange={e => { setQuery(e.target.value); setSearchOpen(true); }}
              onFocus={() => setSearchOpen(true)}
              placeholder={lang === 'fr' ? 'Rechercher...' : 'Search...'}
              className="w-full pl-7 pr-3 py-1.5 rounded text-xs bg-white/5 border border-white/10 text-white/90 placeholder:text-white/30 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
            />
          </div>
          {searchOpen && results.length > 0 && (
            <div className="absolute left-3 right-3 mt-1 rounded-lg bg-[#161929] border border-white/10 max-h-48 overflow-y-auto shadow-xl z-10">
              {results.map(m => {
                const cat = markerCategories.find(c => c.id === m.category);
                return (
                  <button key={m.id} onClick={() => { onSelectMarker(m); setQuery(''); setSearchOpen(false); if (isMobile) onToggleCollapse(); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-white/5 transition-colors">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: cat?.color }} />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-white/90 block truncate">{m.name[lang] || m.name.en}</span>
                      <span className="text-[0.55rem] text-white/35 block truncate">{cat?.label[lang] || cat?.label.en}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Show/Hide All */}
        <div className="px-3 py-1.5 border-b border-white/5">
          <button onClick={toggleAll} className="text-[0.55rem] tracking-wider text-white/40 hover:text-[#C9A84C] transition-colors">
            {allVisible ? (lang === 'fr' ? 'Tout masquer' : 'Hide all') : (lang === 'fr' ? 'Tout afficher' : 'Show all')}
          </button>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto px-1 py-1 mg-scroll">
          {markerCategories.map(cat => {
            const active = visible.has(cat.id);
            const count = markerCounts[cat.id] || 0;
            return (
              <button key={cat.id} onClick={() => onToggle(cat.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left transition-all group ${active ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`}>
                <span className="w-3.5 h-3.5 rounded flex-shrink-0 border-[1.5px] flex items-center justify-center transition-all"
                  style={{ borderColor: active ? cat.color : 'rgba(255,255,255,0.15)', background: active ? cat.color : 'transparent' }}>
                  {active && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                </span>
                <svg width="14" height="17" viewBox="0 0 24 24" className="flex-shrink-0" style={{ opacity: active ? 1 : 0.3 }}>
                  <path d={PIN_PATH} fill={cat.color}/><circle cx="12" cy="9" r="2.5" fill="#fff" opacity="0.9"/>
                </svg>
                <span className={`flex-1 text-[0.7rem] truncate transition-colors ${active ? 'text-white/85' : 'text-white/30 group-hover:text-white/50'}`}>
                  {cat.label[lang] || cat.label.en}
                </span>
                <span className={`text-[0.55rem] tabular-nums ${active ? 'text-white/35' : 'text-white/15'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-3 py-1.5 border-t border-white/5 text-center">
          <span className="text-[0.45rem] text-white/15 tracking-wider">{mapMarkers.length} {lang === 'fr' ? 'marqueurs' : 'markers'}</span>
        </div>
      </div>
    </>
  );
}

/* ──── Map Controls ──── */
function MapControls({ onFullscreen, isFullscreen, isMobile }: { onFullscreen: () => void; isFullscreen: boolean; isMobile: boolean }) {
  const map = useMap();
  const btnClass = "w-9 h-9 rounded-lg bg-[#1e2233]/90 backdrop-blur border border-white/10 text-white/80 hover:text-white hover:bg-[#1e2233] flex items-center justify-center transition-all active:scale-95";

  return (
    <div className={`absolute z-[1000] flex flex-col gap-1 ${isMobile ? 'bottom-3 right-2' : 'bottom-4 right-3'}`}>
      <button onClick={() => map.zoomIn()} className={btnClass}>+</button>
      <button onClick={() => map.zoomOut()} className={btnClass}>−</button>
      <div className="h-1" />
      <button onClick={() => map.fitBounds(MAP_BOUNDS, { padding: [20, 20] })} className={btnClass}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
      </button>
      <button onClick={onFullscreen} className={btnClass}>
        {isFullscreen ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        )}
      </button>
    </div>
  );
}

/* ──── Fly-to handler ──── */
function FlyToMarker({ target }: { target: MapMarker | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo(toLatLng(target.position), 5, { duration: 0.6 });
  }, [target, map]);
  return null;
}

/* ──── Zoom handler ──── */
function ZoomHandler({ onZoom }: { onZoom: (z: number) => void }) {
  const map = useMap();
  useMapEvents({ zoomend() { onZoom(map.getZoom()); } });
  useEffect(() => { onZoom(map.getZoom()); }, [map, onZoom]);
  return null;
}

/* ──── Main Component ──── */
export default function InteractiveMap({
  fullscreen, onToggleFullscreen,
}: {
  fullscreen: boolean; onToggleFullscreen: () => void;
}) {
  const { lang } = useI18n();
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(2);

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    setSidebarCollapsed(isMobile);
  }, [isMobile]);

  const [visibleCategories, setVisibleCategories] = useState<Set<MarkerCategory>>(() => {
    const initial = new Set<MarkerCategory>();
    markerCategories.forEach(c => { if (c.defaultVisible) initial.add(c.id); });
    return initial;
  });

  const [flyTarget, setFlyTarget] = useState<MapMarker | null>(null);

  const toggleCategory = useCallback((id: MarkerCategory) => {
    setVisibleCategories(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  const filteredMarkers = useMemo(
    () => mapMarkers.filter(m => visibleCategories.has(m.category)),
    [visibleCategories],
  );

  const markerCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    mapMarkers.forEach(m => { counts[m.category] = (counts[m.category] || 0) + 1; });
    return counts;
  }, []);

  // Zoom-dependent marker size
  const getSize = useCallback((z: number) => {
    if (isMobile) {
      if (z <= 1) return 16;
      if (z <= 2) return 18;
      if (z <= 3) return 22;
      if (z <= 4) return 26;
      return 30;
    }
    if (z <= 1) return 20;
    if (z <= 2) return 24;
    if (z <= 3) return 28;
    if (z <= 4) return 32;
    return 36;
  }, [isMobile]);

  const iconCache = useMemo(() => {
    const size = getSize(currentZoom);
    const cache: Record<string, L.DivIcon> = {};
    markerCategories.forEach(cat => { cache[cat.id] = createPinIcon(cat.id, cat.color, size); });
    return cache;
  }, [currentZoom, getSize]);

  const handleSearchSelect = useCallback((marker: MapMarker) => {
    setVisibleCategories(prev => {
      if (prev.has(marker.category)) return prev;
      const next = new Set(prev);
      next.add(marker.category);
      return next;
    });
    setFlyTarget(marker);
    setTimeout(() => setFlyTarget(null), 800);
  }, []);

  const handleZoom = useCallback((z: number) => setCurrentZoom(z), []);

  return (
    <div className="relative w-full h-full" style={{ background: '#0f1119' }}>
      <MapContainer
        center={MAP_CENTER}
        zoom={isMobile ? 1 : 2}
        minZoom={isMobile ? 0 : 1}
        maxZoom={5}
        crs={L.CRS.Simple}
        maxBounds={[[-50, -50], [MAP_HEIGHT + 50, MAP_WIDTH + 50]]}
        maxBoundsViscosity={0.9}
        zoomControl={false}
        attributionControl={false}
        zoomSnap={0.5}
        zoomDelta={0.5}
        wheelPxPerZoomLevel={120}
        style={{ width: '100%', height: '100%', background: '#0f1119' }}
      >
        <ImageOverlay url={MAP_IMAGE} bounds={MAP_BOUNDS} className="mg-img" />

        {filteredMarkers.map(marker => {
          const icon = iconCache[marker.category];
          const cat = markerCategories.find(c => c.id === marker.category);
          return (
            <Marker key={marker.id} position={toLatLng(marker.position)} icon={icon}>
              <Popup className="mg-popup" maxWidth={isMobile ? 220 : 280} minWidth={isMobile ? 160 : 200}>
                <div className="mg-popup-inner">
                  <div className="mg-popup-hdr" style={{ borderLeftColor: cat?.color }}>
                    <span className="mg-popup-cat" style={{ color: cat?.color }}>{cat?.label[lang] || cat?.label.en}</span>
                    <h3 className="mg-popup-title">{marker.name[lang] || marker.name.en}</h3>
                  </div>
                  <p className="mg-popup-desc">{marker.description[lang] || marker.description.en}</p>
                  {marker.regionId && (
                    <div className="mg-popup-rgn">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>{marker.regionId.charAt(0).toUpperCase() + marker.regionId.slice(1).replace('-', ' ')}</span>
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}

        <FlyToMarker target={flyTarget} />
        <ZoomHandler onZoom={handleZoom} />
        <MapControls onFullscreen={onToggleFullscreen} isFullscreen={fullscreen} isMobile={isMobile} />
      </MapContainer>

      <MapSidebar
        visible={visibleCategories} onToggle={toggleCategory}
        markerCounts={markerCounts} markers={mapMarkers}
        onSelectMarker={handleSearchSelect}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(c => !c)}
        isMobile={isMobile}
      />

      <style>{`
        .mg-img img {
          image-rendering: auto;
          image-rendering: smooth;
          image-rendering: high-quality;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          filter: contrast(1.04) saturate(1.08);
        }
        .leaflet-fade-anim .leaflet-tile,
        .leaflet-fade-anim .leaflet-popup {
          transition: opacity 0.15s linear;
        }
        .mg-pin { background: none !important; border: none !important; }
        .mg-pin svg { transition: transform 0.12s ease-out; }
        .mg-pin:hover svg, .mg-pin svg:hover { transform: scale(1.15) translateY(-2px); }
        .mg-popup .leaflet-popup-content-wrapper {
          background: #171a2a;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.7);
          padding: 0;
        }
        .mg-popup .leaflet-popup-content { margin: 0; width: auto !important; }
        .mg-popup .leaflet-popup-tip { background: #171a2a; border: 1px solid rgba(255,255,255,0.08); }
        .mg-popup .leaflet-popup-close-button { color: rgba(255,255,255,0.3) !important; font-size: 16px !important; top: 6px !important; right: 6px !important; }
        .mg-popup .leaflet-popup-close-button:hover { color: #C9A84C !important; }
        .mg-popup-inner { padding: 12px 14px; }
        .mg-popup-hdr { border-left: 3px solid; padding-left: 8px; margin-bottom: 6px; }
        .mg-popup-cat { font-size: 0.55rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; opacity: 0.8; }
        .mg-popup-title { color: #fff; font-family: 'Cinzel', serif; font-size: 0.8rem; font-weight: 600; margin: 1px 0 0; line-height: 1.3; }
        .mg-popup-desc { color: rgba(255,255,255,0.5); font-size: 0.7rem; line-height: 1.5; margin: 0; }
        .mg-popup-rgn { display: flex; align-items: center; gap: 4px; margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.3); font-size: 0.55rem; text-transform: capitalize; }
        .mg-scroll::-webkit-scrollbar { width: 3px; }
        .mg-scroll::-webkit-scrollbar-track { background: transparent; }
        .mg-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
        .mg-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }
        .leaflet-container { font-family: inherit; }
        @media (max-width: 767px) {
          .mg-popup-inner { padding: 10px 12px; }
          .mg-popup-title { font-size: 0.75rem; }
          .mg-popup-desc { font-size: 0.65rem; }
        }
      `}</style>
    </div>
  );
}
