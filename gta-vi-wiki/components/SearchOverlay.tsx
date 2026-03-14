import { useEffect, useCallback, useRef, memo, useState } from 'react';
import { useApp } from '@/gta-vi-wiki/context/AppContext';
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import { characters } from '@/gta-vi-wiki/data/characters';
import { regions } from '@/gta-vi-wiki/data/regions';
import { loreEntries } from '@/gta-vi-wiki/data/lore';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const SearchOverlay = memo(() => {
  const { searchOpen, setSearchOpen } = useApp();
  const { lang, t } = useI18n();
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) { setQuery(''); setSelectedIdx(0); setTimeout(() => inputRef.current?.focus(), 100); }
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(!searchOpen); }
      if (e.key === 'Escape' && searchOpen) setSearchOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [searchOpen, setSearchOpen]);

  const q = query.toLowerCase();
  const charResults = characters.filter(c => c.name.toLowerCase().includes(q) || c.role[lang].toLowerCase().includes(q)).slice(0, 3);
  const regionResults = regions.filter(r => r.name.toLowerCase().includes(q) || r.subtitle[lang].toLowerCase().includes(q)).slice(0, 3);
  const loreResults = loreEntries.filter(l => l.title.toLowerCase().includes(q) || l.excerpt[lang].toLowerCase().includes(q)).slice(0, 5);

  type Result = { type: string; label: string; sub: string; path: string };
  const allResults: Result[] = [
    ...charResults.map(c => ({ type: t('cat.CHARACTER'), label: c.name, sub: c.role[lang], path: '/characters' })),
    ...regionResults.map(r => ({ type: t('cat.LOCATION'), label: r.name, sub: r.subtitle[lang], path: '/world' })),
    ...loreResults.map(l => ({ type: 'LORE', label: l.title, sub: l.excerpt[lang], path: '/lore' })),
  ];

  const goTo = useCallback((path: string) => { navigate(path); setSearchOpen(false); }, [navigate, setSearchOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx(i => Math.min(i + 1, allResults.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIdx(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && allResults[selectedIdx]) { goTo(allResults[selectedIdx].path); }
  };

  if (!searchOpen) return null;

  const categoryColors: Record<string, string> = {
    [t('cat.CHARACTER')]: 'rgba(255, 20, 147, 0.4)',
    [t('cat.LOCATION')]: 'rgba(0, 255, 255, 0.3)',
    LORE: 'rgba(255, 255, 255, 0.15)',
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[15vh]"
      style={{ background: 'rgba(10, 0, 15, 0.95)', backdropFilter: 'blur(10px)' }}
      onClick={() => setSearchOpen(false)}>
      <div className="w-full max-w-2xl mx-4" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-4 pb-4" style={{ borderBottom: '1px solid rgba(255, 20, 147, 0.3)' }}>
          <input ref={inputRef} type="text" value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIdx(0); }}
            onKeyDown={onKeyDown}
            placeholder={t('search.placeholder')}
            className="flex-1 bg-transparent text-2xl font-bold outline-none"
            style={{ color: 'white' }}
            aria-label={t('nav.search')} />
          <button onClick={() => setSearchOpen(false)} style={{ color: 'rgba(255,255,255,0.5)' }} aria-label={t('search.close')}>
            <X size={24} />
          </button>
        </div>
        {query.length > 0 && (
          <div className="mt-6 space-y-2 max-h-[50vh] overflow-y-auto">
            {allResults.length === 0 ? (
              <p className="text-center py-8" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('search.no_results')} "{query}"</p>
            ) : allResults.map((r, i) => (
              <button key={`${r.type}-${r.label}`} onClick={() => goTo(r.path)}
                className="w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all duration-150"
                style={{
                  background: i === selectedIdx ? 'rgba(255, 20, 147, 0.1)' : 'transparent',
                  borderLeft: i === selectedIdx ? '2px solid #FF1493' : '2px solid transparent',
                }}>
                <span className="text-[0.65rem] tracking-wider px-2 py-0.5 rounded" style={{ background: categoryColors[r.type] || 'rgba(255,255,255,0.1)', color: 'white' }}>{r.type}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold" style={{ color: 'white' }}>{r.label}</div>
                  <div className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.5)' }}>{r.sub}</div>
                </div>
              </button>
            ))}
          </div>
        )}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <span className="px-2 py-1 rounded text-[0.65rem]" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>&#8593;&#8595; {t('search.navigate')}</span>
          <span className="px-2 py-1 rounded text-[0.65rem]" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>Enter {t('search.select')}</span>
          <span className="px-2 py-1 rounded text-[0.65rem]" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>Esc {t('search.close')}</span>
        </div>
      </div>
    </div>
  );
});

SearchOverlay.displayName = 'SearchOverlay';
export default SearchOverlay;
