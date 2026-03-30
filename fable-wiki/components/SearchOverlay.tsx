import { useEffect, useCallback, useRef, memo, useState } from 'react';
import { useApp } from '@/fable-wiki/context/AppContext';
import { useI18n } from '@/fable-wiki/context/I18nContext';
import { characters } from '@/fable-wiki/data/characters';
import { regions } from '@/fable-wiki/data/regions';
import { loreEntries } from '@/fable-wiki/data/lore';
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
    ...charResults.map(c => ({ type: lang === 'fr' ? 'PERSONNAGE' : 'CHARACTER', label: c.name, sub: c.role[lang], path: `/characters` })),
    ...regionResults.map(r => ({ type: lang === 'fr' ? 'LIEU' : 'LOCATION', label: r.name, sub: r.subtitle[lang], path: `/world` })),
    ...loreResults.map(l => ({ type: 'LORE', label: l.title, sub: l.excerpt[lang], path: `/lore` })),
  ];

  const goTo = useCallback((path: string) => { navigate(path); setSearchOpen(false); }, [navigate, setSearchOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx(i => Math.min(i + 1, allResults.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIdx(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && allResults[selectedIdx]) { goTo(allResults[selectedIdx].path); }
  };

  if (!searchOpen) return null;

  const categoryColors: Record<string, string> = {
    PERSONNAGE: 'bg-emerald-700/60', CHARACTER: 'bg-emerald-700/60',
    LIEU: 'bg-yellow-700/60', LOCATION: 'bg-yellow-700/60',
    LORE: 'bg-gray-700/60',
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[15vh]"
      style={{ background: 'rgba(3,10,5,0.95)', backdropFilter: 'blur(10px)' }}
      onClick={() => setSearchOpen(false)}>
      <div className="w-full max-w-2xl mx-4 animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-4 border-b border-emerald-500/40 pb-4">
          <input ref={inputRef} type="text" value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIdx(0); }}
            onKeyDown={onKeyDown}
            placeholder={t('search.placeholder')}
            className="flex-1 bg-transparent text-2xl font-heading text-gray-100 placeholder:text-gray-600 outline-none"
            aria-label={t('nav.search')} />
          <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-emerald-400" aria-label={t('search.close')}>
            <X size={24} />
          </button>
        </div>
        {query.length > 0 && (
          <div className="mt-6 space-y-2 max-h-[50vh] overflow-y-auto">
            {allResults.length === 0 ? (
              <p className="font-body text-gray-400 text-center py-8">{t('search.no_results')} "{query}"</p>
            ) : allResults.map((r, i) => (
              <button key={`${r.type}-${r.label}`} onClick={() => goTo(r.path)}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all duration-150
                  ${i === selectedIdx ? 'bg-emerald-900/30 border-l-2 border-emerald-400' : 'hover:bg-emerald-900/20'}`}>
                <span className={`font-body text-[0.65rem] tracking-wider px-2 py-0.5 rounded text-gray-200 ${categoryColors[r.type] || 'bg-gray-700/60'}`}>{r.type}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-heading text-sm text-gray-100">{r.label}</div>
                  <div className="font-body text-xs text-gray-400 truncate">{r.sub}</div>
                </div>
              </button>
            ))}
          </div>
        )}
        <div className="mt-8 flex items-center justify-center gap-6 text-gray-600 font-body text-xs">
          <span className="px-2 py-1 border border-gray-700 rounded text-[0.65rem]">Arrows {t('search.navigate')}</span>
          <span className="px-2 py-1 border border-gray-700 rounded text-[0.65rem]">Enter {t('search.select')}</span>
          <span className="px-2 py-1 border border-gray-700 rounded text-[0.65rem]">Esc {t('search.close')}</span>
        </div>
      </div>
    </div>
  );
});

SearchOverlay.displayName = 'SearchOverlay';
export default SearchOverlay;
