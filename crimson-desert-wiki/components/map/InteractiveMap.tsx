// @ts-nocheck
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import { mapMarkers, markerCategories, type MarkerCategory, type MapMarker } from '@/crimson-desert-wiki/data/mapMarkers';

// ── Map image dimensions — correct aspect ratio for 2500×2168 image ──
const IMG_W = 2500;
const IMG_H = 2168;
const MAP_HEIGHT = 1000;
const MAP_WIDTH = Math.round((IMG_W / IMG_H) * MAP_HEIGHT); // ≈ 1153
const MAP_BOUNDS: L.LatLngBoundsExpression = [[0, 0], [MAP_HEIGHT, MAP_WIDTH]];
const MAP_CENTER: L.LatLngExpression = [MAP_HEIGHT / 2, MAP_WIDTH / 2];
const MAP_IMAGE = '/pywel-map.webp';

// Convert percentage-based position [y%, x%] to CRS.Simple coordinates
function toLatLng(pos: [number, number]): L.LatLngExpression {
  return [MAP_HEIGHT - (pos[0] / 100) * MAP_HEIGHT, (pos[1] / 100) * MAP_WIDTH];
}

// ── SVG marker pin icons (MapGenie-style) ──
const MARKER_SVGS: Record<MarkerCategory, string> = {
  cities: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><path d="M10.5 8v3h1v-1.5h1V11h1V8h-1v1.5h-1V8z" fill="COLOR" opacity="0.8"/>`,
  fast_travel: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><polygon points="12,6 13.5,9.5 10.5,9.5" fill="COLOR" opacity="0.8"/>`,
  bosses: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><path d="M12 6.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM11 8.2h.8v-.8h.4v.8h.8v.4h-.8v.8h-.4v-.8H11z" fill="COLOR" opacity="0.8"/>`,
  quests: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><text x="12" y="11.5" text-anchor="middle" font-size="6" font-weight="bold" fill="COLOR" opacity="0.8">!</text>`,
  resources: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><path d="M12 6l-2.5 3h1.5v3h2v-3h1.5z" fill="COLOR" opacity="0.8"/>`,
  mounts: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><path d="M10 10.5c0-1.5 1-2.5 2-3 1 .5 2 1.5 2 3h-1l-.5-1h-1l-.5 1z" fill="COLOR" opacity="0.8"/>`,
  secrets: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><text x="12" y="11.5" text-anchor="middle" font-size="6" font-weight="bold" fill="COLOR" opacity="0.8">?</text>`,
  vendors: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><path d="M10 7.5h4v1h-4zm-.5 1.5h5l-.5 3h-4z" fill="COLOR" opacity="0.8"/>`,
  collectibles: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><path d="M12 6.5l1 2h2l-1.5 1.5.5 2-2-1-2 1 .5-2L9 8.5h2z" fill="COLOR" opacity="0.8"/>`,
  skills: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="COLOR"/><circle cx="12" cy="9" r="3.5" fill="#fff" opacity="0.9"/><path d="M12 6l.8 2h2l-1.5 1.2.5 2L12 10l-1.8 1.2.5-2L9.2 8h2z" fill="COLOR" opacity="0.8"/>`,
};

function createPinIcon(category: MarkerCategory, color: string, size: number = 32): L.DivIcon {
  const svg = MARKER_SVGS[category].replace(/COLOR/g, color);
  return L.divIcon({
    className: 'mapgenie-pin',
    iconSize: [size, size * 1.2],
    iconAnchor: [size / 2, size * 1.2],
    popupAnchor: [0, -size * 1.1],
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size * 1.2}" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5));transition:transform 0.15s;cursor:pointer">${svg}</svg>`,
  });
}

/* ──── Left Sidebar (MapGenie-style) ──── */
function MapSidebar({
  visible,
  onToggle,
  markerCounts,
  markers,
  onSelectMarker,
  collapsed,
  onToggleCollapse,
}: {
  visible: Set<MarkerCategory>;
  onToggle: (id: MarkerCategory) => void;
  markerCounts: Record<string, number>;
  markers: MapMarker[];
  onSelectMarker: (m: MapMarker) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
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
      if (allVisible) {
        if (visible.has(c.id)) onToggle(c.id);
      } else {
        if (!visible.has(c.id)) onToggle(c.id);
      }
    });
  };

  if (collapsed) {
    return (
      <button
        onClick={onToggleCollapse}
        className="absolute top-3 left-3 z-[1000] w-10 h-10 rounded-lg bg-[#1e2233]/95 backdrop-blur border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-colors"
        title={lang === 'fr' ? 'Ouvrir les filtres' : 'Open filters'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    );
  }

  return (
    <div className="absolute top-0 left-0 bottom-0 z-[1000] w-64 flex flex-col bg-[#1e2233]/95 backdrop-blur-md border-r border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/10">
        <span className="text-[0.65rem] font-semibold tracking-wider text-[#C9A84C] uppercase">
          {lang === 'fr' ? 'Carte de Pywel' : 'Pywel Map'}
        </span>
        <button
          onClick={onToggleCollapse}
          className="w-6 h-6 rounded flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>

      {/* Search */}
      <div ref={searchRef} className="px-3 py-2 border-b border-white/5 relative">
        <div className="relative">
          <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/30" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setSearchOpen(true); }}
            onFocus={() => setSearchOpen(true)}
            placeholder={lang === 'fr' ? 'Rechercher...' : 'Search...'}
            className="w-full pl-8 pr-3 py-1.5 rounded text-xs bg-white/5 border border-white/10 text-white/90 placeholder:text-white/30 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
          />
        </div>
        {searchOpen && results.length > 0 && (
          <div className="absolute left-3 right-3 mt-1 rounded-lg bg-[#161929] border border-white/10 max-h-60 overflow-y-auto shadow-xl">
            {results.map(m => {
              const cat = markerCategories.find(c => c.id === m.category);
              return (
                <button
                  key={m.id}
                  onClick={() => { onSelectMarker(m); setQuery(''); setSearchOpen(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-white/5 transition-colors"
                >
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: cat?.color }}
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-white/90 block truncate">{m.name[lang] || m.name.en}</span>
                    <span className="text-[0.6rem] text-white/35 block truncate">{cat?.label[lang] || cat?.label.en}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Show All / Hide All */}
      <div className="px-3 py-1.5 border-b border-white/5 flex gap-2">
        <button
          onClick={toggleAll}
          className="text-[0.6rem] tracking-wider text-white/40 hover:text-[#C9A84C] transition-colors"
        >
          {allVisible
            ? (lang === 'fr' ? 'Tout masquer' : 'Hide all')
            : (lang === 'fr' ? 'Tout afficher' : 'Show all')}
        </button>
      </div>

      {/* Category List */}
      <div className="flex-1 overflow-y-auto px-1.5 py-1 custom-scrollbar">
        {markerCategories.map(cat => {
          const active = visible.has(cat.id);
          const count = markerCounts[cat.id] || 0;
          return (
            <button
              key={cat.id}
              onClick={() => onToggle(cat.id)}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left transition-all duration-150 group ${
                active ? 'bg-white/[0.07]' : 'hover:bg-white/[0.03]'
              }`}
            >
              {/* Checkbox */}
              <span
                className="w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all duration-150"
                style={{
                  borderColor: active ? cat.color : 'rgba(255,255,255,0.15)',
                  background: active ? cat.color : 'transparent',
                }}
              >
                {active && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                )}
              </span>
              {/* Icon pin preview */}
              <svg width="16" height="19" viewBox="0 0 24 24" className="flex-shrink-0" style={{ opacity: active ? 1 : 0.35 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={cat.color}/>
                <circle cx="12" cy="9" r="3" fill="#fff" opacity="0.9"/>
              </svg>
              {/* Label */}
              <span className={`flex-1 text-xs truncate transition-colors ${active ? 'text-white/90' : 'text-white/35 group-hover:text-white/50'}`}>
                {cat.label[lang] || cat.label.en}
              </span>
              {/* Count */}
              <span className={`text-[0.6rem] tabular-nums transition-colors ${active ? 'text-white/40' : 'text-white/15'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-3 py-2 border-t border-white/5 text-center">
        <span className="text-[0.5rem] text-white/20 tracking-wider">
          {mapMarkers.length} {lang === 'fr' ? 'marqueurs' : 'markers'} — PopCodex
        </span>
      </div>
    </div>
  );
}

/* ──── Map Controls (zoom, reset, fullscreen) ──── */
function MapControls({ onFullscreen, isFullscreen }: { onFullscreen: () => void; isFullscreen: boolean }) {
  const map = useMap();
  const { lang } = useI18n();

  return (
    <div className="absolute bottom-4 right-3 z-[1000] flex flex-col gap-1">
      {[
        { label: '+', action: () => map.zoomIn(), title: 'Zoom in' },
        { label: '−', action: () => map.zoomOut(), title: 'Zoom out' },
      ].map((btn, i) => (
        <button
          key={i}
          onClick={btn.action}
          title={btn.title}
          className="w-8 h-8 rounded-md bg-[#1e2233]/90 backdrop-blur border border-white/10 text-white/80 hover:text-white hover:bg-[#1e2233] flex items-center justify-center text-base font-medium transition-all"
        >
          {btn.label}
        </button>
      ))}
      <div className="h-1" />
      <button
        onClick={() => map.fitBounds(MAP_BOUNDS, { padding: [20, 20] })}
        title={lang === 'fr' ? 'Réinitialiser' : 'Reset view'}
        className="w-8 h-8 rounded-md bg-[#1e2233]/90 backdrop-blur border border-white/10 text-white/80 hover:text-white hover:bg-[#1e2233] flex items-center justify-center transition-all"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
      </button>
      <button
        onClick={onFullscreen}
        title={isFullscreen ? (lang === 'fr' ? 'Quitter plein écran' : 'Exit fullscreen') : (lang === 'fr' ? 'Plein écran' : 'Fullscreen')}
        className="w-8 h-8 rounded-md bg-[#1e2233]/90 backdrop-blur border border-white/10 text-white/80 hover:text-white hover:bg-[#1e2233] flex items-center justify-center transition-all"
      >
        {isFullscreen ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        )}
      </button>
    </div>
  );
}

/* ──── Coordinates display ──── */
function CoordsDisplay() {
  const [pos, setPos] = useState<{ lat: number; lng: number } | null>(null);
  useMapEvents({
    mousemove(e) {
      setPos(e.latlng);
    },
  });
  if (!pos) return null;
  const yPct = Math.round((1 - pos.lat / MAP_HEIGHT) * 100);
  const xPct = Math.round((pos.lng / MAP_WIDTH) * 100);
  if (yPct < 0 || yPct > 100 || xPct < 0 || xPct > 100) return null;
  return (
    <div className="absolute bottom-4 left-3 z-[1000] px-2 py-1 rounded bg-[#1e2233]/80 backdrop-blur border border-white/10">
      <span className="text-[0.55rem] text-white/40 font-mono tabular-nums">{yPct}, {xPct}</span>
    </div>
  );
}

/* ──── Fly-to handler ──── */
function FlyToMarker({ target }: { target: MapMarker | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo(toLatLng(target.position), 5, { duration: 0.6 });
    }
  }, [target, map]);
  return null;
}

/* ──── Zoom-aware marker resizer ──── */
function ZoomHandler({ onZoom }: { onZoom: (z: number) => void }) {
  const map = useMap();
  useMapEvents({
    zoomend() {
      onZoom(map.getZoom());
    },
  });
  useEffect(() => {
    onZoom(map.getZoom());
  }, [map, onZoom]);
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(2);

  // Filter state
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

  // Zoom-dependent icon size
  const getMarkerSize = useCallback((zoom: number) => {
    if (zoom <= 1) return 18;
    if (zoom <= 2) return 22;
    if (zoom <= 3) return 26;
    if (zoom <= 4) return 30;
    return 34;
  }, []);

  // Icon cache per zoom level
  const iconCache = useMemo(() => {
    const size = getMarkerSize(currentZoom);
    const cache: Record<string, L.DivIcon> = {};
    markerCategories.forEach(cat => {
      cache[cat.id] = createPinIcon(cat.id, cat.color, size);
    });
    return cache;
  }, [currentZoom, getMarkerSize]);

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

  const handleZoom = useCallback((z: number) => {
    setCurrentZoom(z);
  }, []);

  return (
    <div className="relative w-full h-full" style={{ background: '#141622' }}>
      <MapContainer
        center={MAP_CENTER}
        zoom={2}
        minZoom={1}
        maxZoom={7}
        crs={L.CRS.Simple}
        maxBounds={[[-50, -50], [MAP_HEIGHT + 50, MAP_WIDTH + 50]]}
        maxBoundsViscosity={0.9}
        zoomControl={false}
        attributionControl={false}
        zoomSnap={0.5}
        zoomDelta={0.5}
        wheelPxPerZoomLevel={120}
        style={{ width: '100%', height: '100%', background: '#141622' }}
      >
        <ImageOverlay
          url={MAP_IMAGE}
          bounds={MAP_BOUNDS}
          className="map-image-overlay"
        />

        {filteredMarkers.map(marker => {
          const icon = iconCache[marker.category];
          const cat = markerCategories.find(c => c.id === marker.category);
          return (
            <Marker key={marker.id} position={toLatLng(marker.position)} icon={icon}>
              <Popup className="mapgenie-popup" maxWidth={280} minWidth={200}>
                <div className="popup-inner">
                  <div className="popup-header" style={{ borderLeftColor: cat?.color }}>
                    <span className="popup-category" style={{ color: cat?.color }}>
                      {cat?.label[lang] || cat?.label.en}
                    </span>
                    <h3 className="popup-title">
                      {marker.name[lang] || marker.name.en}
                    </h3>
                  </div>
                  <p className="popup-desc">
                    {marker.description[lang] || marker.description.en}
                  </p>
                  {marker.regionId && (
                    <div className="popup-region">
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
        <MapControls onFullscreen={onToggleFullscreen} isFullscreen={fullscreen} />
        <CoordsDisplay />
      </MapContainer>

      {/* Left Sidebar */}
      <MapSidebar
        visible={visibleCategories}
        onToggle={toggleCategory}
        markerCounts={markerCounts}
        markers={mapMarkers}
        onSelectMarker={handleSearchSelect}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(c => !c)}
      />

      {/* Styles */}
      <style>{`
        .map-image-overlay {
          image-rendering: high-quality;
          image-rendering: -webkit-optimize-contrast;
        }
        .mapgenie-pin {
          background: none !important;
          border: none !important;
        }
        .mapgenie-pin svg:hover {
          transform: scale(1.2) translateY(-2px);
        }
        .mapgenie-popup .leaflet-popup-content-wrapper {
          background: #1a1d2e;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          padding: 0;
        }
        .mapgenie-popup .leaflet-popup-content {
          margin: 0;
          width: auto !important;
        }
        .mapgenie-popup .leaflet-popup-tip {
          background: #1a1d2e;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }
        .mapgenie-popup .leaflet-popup-close-button {
          color: rgba(255,255,255,0.3) !important;
          font-size: 18px !important;
          top: 8px !important;
          right: 8px !important;
          width: 20px !important;
          height: 20px !important;
        }
        .mapgenie-popup .leaflet-popup-close-button:hover {
          color: #C9A84C !important;
        }
        .popup-inner {
          padding: 14px 16px;
        }
        .popup-header {
          border-left: 3px solid;
          padding-left: 10px;
          margin-bottom: 8px;
        }
        .popup-category {
          font-size: 0.6rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          opacity: 0.8;
        }
        .popup-title {
          color: #fff;
          font-family: 'Cinzel', serif;
          font-size: 0.85rem;
          font-weight: 600;
          margin: 2px 0 0;
          line-height: 1.3;
        }
        .popup-desc {
          color: rgba(255,255,255,0.55);
          font-size: 0.72rem;
          line-height: 1.5;
          margin: 0;
        }
        .popup-region {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.3);
          font-size: 0.6rem;
          text-transform: capitalize;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
        .leaflet-container {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}
