// @ts-nocheck
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import { mapMarkers, markerCategories, type MarkerCategory, type MapMarker } from '@/crimson-desert-wiki/data/mapMarkers';

// Map image dimensions — the CRS.Simple coordinate system
const MAP_HEIGHT = 1000;
const MAP_WIDTH = 1000;
const MAP_BOUNDS: L.LatLngBoundsExpression = [[0, 0], [MAP_HEIGHT, MAP_WIDTH]];
const MAP_CENTER: L.LatLngExpression = [MAP_HEIGHT / 2, MAP_WIDTH / 2];
const MAP_IMAGE = '/pywel-map.webp';

// Convert percentage-based position [y%, x%] to CRS.Simple coordinates
function toLatLng(pos: [number, number]): L.LatLngExpression {
  return [MAP_HEIGHT - (pos[0] / 100) * MAP_HEIGHT, (pos[1] / 100) * MAP_WIDTH];
}

// Create a colored circle DivIcon for a marker category
function createCategoryIcon(color: string, emoji: string, isActive: boolean): L.DivIcon {
  return L.divIcon({
    className: '',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
    html: `<div style="
      width:28px;height:28px;border-radius:50%;
      background:${color}${isActive ? 'dd' : '99'};
      border:2px solid ${color};
      display:flex;align-items:center;justify-content:center;
      font-size:13px;line-height:1;
      box-shadow:0 2px 8px ${color}40, 0 0 12px ${color}20;
      cursor:pointer;transition:transform 0.15s;
    ">${emoji}</div>`,
  });
}

/* ──── Search Bar ──── */
function MapSearchBar({ markers, onSelect }: { markers: MapMarker[]; onSelect: (m: MapMarker) => void }) {
  const { lang } = useI18n();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return markers.filter(m => {
      const name = m.name[lang] || m.name.en || m.name.fr || '';
      return name.toLowerCase().includes(q);
    }).slice(0, 8);
  }, [query, markers, lang]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="absolute top-3 left-3 z-[1000] w-64 sm:w-72">
      <input
        type="text"
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        placeholder={lang === 'fr' ? '🔍 Rechercher un lieu...' : '🔍 Search a location...'}
        className="w-full px-3 py-2 rounded-lg text-xs bg-black/80 backdrop-blur-sm border border-white/15 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-[#C9A84C]/50"
      />
      {open && results.length > 0 && (
        <div className="mt-1 rounded-lg bg-black/90 backdrop-blur-sm border border-white/10 max-h-60 overflow-y-auto">
          {results.map(m => {
            const cat = markerCategories.find(c => c.id === m.category);
            return (
              <button
                key={m.id}
                onClick={() => { onSelect(m); setQuery(''); setOpen(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 transition-colors"
              >
                <span className="text-sm">{cat?.emoji}</span>
                <div className="min-w-0">
                  <span className="text-xs text-white/90 block truncate">{m.name[lang] || m.name.en}</span>
                  <span className="text-[0.6rem] text-white/40 block truncate">{m.description[lang] || m.description.en}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ──── Filter Panel ──── */
function MapFilterPanel({
  visible,
  onToggle,
  markerCounts,
}: {
  visible: Set<MarkerCategory>;
  onToggle: (id: MarkerCategory) => void;
  markerCounts: Record<string, number>;
}) {
  const { lang } = useI18n();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="absolute top-3 right-3 z-[1000]">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-1 px-3 py-1.5 rounded-lg text-[0.6rem] tracking-wider bg-black/80 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white transition-colors"
      >
        {collapsed
          ? (lang === 'fr' ? '☰ Filtres' : '☰ Filters')
          : (lang === 'fr' ? '✕ Fermer' : '✕ Close')}
      </button>
      {!collapsed && (
        <div className="rounded-lg bg-black/85 backdrop-blur-sm border border-white/10 p-2 space-y-1 max-h-[70vh] overflow-y-auto w-48">
          {markerCategories.map(cat => {
            const active = visible.has(cat.id);
            const count = markerCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                onClick={() => onToggle(cat.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left transition-colors text-[0.65rem] ${
                  active ? 'bg-white/10 text-white/90' : 'text-white/40 hover:text-white/60'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0 border"
                  style={{
                    background: active ? cat.color : 'transparent',
                    borderColor: cat.color,
                  }}
                />
                <span className="flex-1 truncate">{cat.label[lang] || cat.label.en}</span>
                <span className="text-[0.55rem] text-white/30">{count}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ──── Map Controls (zoom, reset, fullscreen) ──── */
function MapControls({ onFullscreen, isFullscreen }: { onFullscreen: () => void; isFullscreen: boolean }) {
  const map = useMap();
  const { lang } = useI18n();

  return (
    <div className="absolute bottom-4 right-3 z-[1000] flex flex-col gap-1">
      <button
        onClick={() => map.zoomIn()}
        className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white flex items-center justify-center text-base transition-colors"
      >+</button>
      <button
        onClick={() => map.zoomOut()}
        className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white flex items-center justify-center text-base transition-colors"
      >−</button>
      <button
        onClick={() => map.fitBounds(MAP_BOUNDS)}
        className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white flex items-center justify-center text-xs transition-colors mt-1"
        title={lang === 'fr' ? 'Réinitialiser la vue' : 'Reset view'}
      >⟲</button>
      <button
        onClick={onFullscreen}
        className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-sm border border-white/15 text-white/80 hover:text-white flex items-center justify-center text-xs transition-colors"
        title={isFullscreen ? (lang === 'fr' ? 'Quitter' : 'Exit') : (lang === 'fr' ? 'Plein écran' : 'Fullscreen')}
      >{isFullscreen ? '✕' : '⛶'}</button>
    </div>
  );
}

/* ──── Fly-to handler (child of MapContainer) ──── */
function FlyToMarker({ target }: { target: MapMarker | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo(toLatLng(target.position), 5, { duration: 0.8 });
    }
  }, [target, map]);
  return null;
}

/* ──── Main InteractiveMap Component ──── */
export default function InteractiveMap({
  fullscreen,
  onToggleFullscreen,
}: {
  fullscreen: boolean;
  onToggleFullscreen: () => void;
}) {
  const { lang } = useI18n();

  // Filter state: initialize from category defaults
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

  // Filtered markers
  const filteredMarkers = useMemo(
    () => mapMarkers.filter(m => visibleCategories.has(m.category)),
    [visibleCategories],
  );

  // Marker counts per category
  const markerCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    mapMarkers.forEach(m => { counts[m.category] = (counts[m.category] || 0) + 1; });
    return counts;
  }, []);

  // Category icon cache
  const iconCache = useMemo(() => {
    const cache: Record<string, L.DivIcon> = {};
    markerCategories.forEach(cat => {
      cache[cat.id] = createCategoryIcon(cat.color, cat.emoji, true);
    });
    return cache;
  }, []);

  const handleSearchSelect = useCallback((marker: MapMarker) => {
    // Make sure the category is visible
    setVisibleCategories(prev => {
      if (prev.has(marker.category)) return prev;
      const next = new Set(prev);
      next.add(marker.category);
      return next;
    });
    setFlyTarget(marker);
    // Reset after fly
    setTimeout(() => setFlyTarget(null), 1000);
  }, []);

  return (
    <div className="relative w-full h-full" style={{ background: '#1a1f2e' }}>
      <MapContainer
        center={MAP_CENTER}
        zoom={2}
        minZoom={1}
        maxZoom={6}
        crs={L.CRS.Simple}
        maxBounds={[[-100, -100], [MAP_HEIGHT + 100, MAP_WIDTH + 100]]}
        maxBoundsViscosity={0.8}
        zoomControl={false}
        attributionControl={false}
        style={{ width: '100%', height: '100%', background: '#1a1f2e' }}
      >
        <ImageOverlay url={MAP_IMAGE} bounds={MAP_BOUNDS} />

        {filteredMarkers.map(marker => {
          const icon = iconCache[marker.category];
          return (
            <Marker key={marker.id} position={toLatLng(marker.position)} icon={icon}>
              <Popup className="crimson-map-popup">
                <div style={{ minWidth: 180 }}>
                  <strong style={{ color: '#C9A84C', fontSize: '0.8rem', fontFamily: 'Cinzel, serif' }}>
                    {marker.name[lang] || marker.name.en}
                  </strong>
                  <p style={{ color: '#ccc', fontSize: '0.7rem', margin: '4px 0 0', lineHeight: 1.4 }}>
                    {marker.description[lang] || marker.description.en}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}

        <FlyToMarker target={flyTarget} />
        <MapControls onFullscreen={onToggleFullscreen} isFullscreen={fullscreen} />
      </MapContainer>

      <MapSearchBar markers={mapMarkers} onSelect={handleSearchSelect} />
      <MapFilterPanel
        visible={visibleCategories}
        onToggle={toggleCategory}
        markerCounts={markerCounts}
      />

      {/* Leaflet popup theme override */}
      <style>{`
        .crimson-map-popup .leaflet-popup-content-wrapper {
          background: rgba(15, 15, 25, 0.95);
          border: 1px solid rgba(201, 168, 76, 0.3);
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        .crimson-map-popup .leaflet-popup-tip {
          background: rgba(15, 15, 25, 0.95);
          border: 1px solid rgba(201, 168, 76, 0.2);
        }
        .crimson-map-popup .leaflet-popup-close-button {
          color: rgba(255,255,255,0.4);
        }
        .crimson-map-popup .leaflet-popup-close-button:hover {
          color: #C9A84C;
        }
        .leaflet-container {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}
