'use client';

import { useEffect, useCallback, useRef, memo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCrimsonI18n } from '@/lib/data/crimson-desert/i18n';
import { characters } from '@/lib/data/crimson-desert/characters';
import { regions } from '@/lib/data/crimson-desert/regions';
import { loreEntries } from '@/lib/data/crimson-desert/lore';
import { X } from 'lucide-react';

interface CrimsonSearchProps {
  locale: string;
  open: boolean;
  onClose: () => void;
}

const CrimsonSearch = memo(({ locale, open, onClose }: CrimsonSearchProps) => {
  const { lang, t } = useCrimsonI18n(locale);
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const prefix = `/${locale}/crimson-desert`;

  useEffect(() => {
    if (open) { setQuery(''); setSelectedIdx(0); setTimeout(() => inputRef.current?.focus(), 100); }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); if (open) onClose(); else { /* parent handles open */ } }
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  const q = query.toLowerCase();
  const charResults = characters.filter(c => c.name.toLowerCase().includes(q) || c.role[lang].toLowerCase().includes(q)).slice(0, 3);
  const regionResults = regions.filter(r => r.name.toLowerCase().includes(q) || r.subtitle[lang].toLowerCase().includes(q)).slice(0, 3);
  const loreResults = loreEntries.filter(l => l.title.toLowerCase().includes(q) || l.excerpt[lang].toLowerCase().includes(q)).slice(0, 5);

  type Result = { type: string; label: string; sub: string; path: string };
  const allResults: Result[] = [
    ...charResults.map(c => ({ type: lang === 'fr' ? 'PERSONNAGE' : 'CHARACTER', label: c.name, sub: c.role[lang], path: `${prefix}/characters` })),
    ...regionResults.map(r => ({ type: lang === 'fr' ? 'LIEU' : 'LOCATION', label: r.name, sub: r.subtitle[lang], path: `${prefix}/world` })),
    ...loreResults.map(l => ({ type: 'LORE', label: l.title, sub: l.excerpt[lang], path: `${prefix}/lore` })),
  ];

  const goTo = useCallback((path: string) => { router.push(path); onClose(); }, [router, onClose]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx(i => Math.min(i + 1, allResults.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIdx(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && allResults[selectedIdx]) { goTo(allResults[selectedIdx].path); }
  };

  if (!open) return null;

  const categoryColors: Record<string, string> = {
    PERSONNAGE: 'bg-crimson-core/60', CHARACTER: 'bg-crimson-core/60',
    LIEU: 'bg-gold-dark/60', LOCATION: 'bg-gold-dark/60',
    LORE: 'bg-smoke-mid/60',
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[15vh]"
      style={{ background: 'rgba(6,4,3,0.95)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}>
      <div className="w-full max-w-2xl mx-4 animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-4 border-b border-gold-mid/40 pb-4">
          <input ref={inputRef} type="text" value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIdx(0); }}
            onKeyDown={onKeyDown}
            placeholder={t('search.placeholder')}
            className="flex-1 bg-transparent text-2xl font-heading text-text-primary placeholder:text-text-muted-custom outline-none"
            aria-label={t('nav.search')} />
          <button onClick={onClose} className="text-text-secondary hover:text-gold-bright focus-gold" aria-label={t('search.close')}>
            <X size={24} />
          </button>
        </div>
        {query.length > 0 && (
          <div className="mt-6 space-y-2 max-h-[50vh] overflow-y-auto scrollbar-thin">
            {allResults.length === 0 ? (
              <p className="font-body text-text-secondary text-center py-8">{t('search.no_results')} &quot;{query}&quot;</p>
            ) : allResults.map((r, i) => (
              <button key={`${r.type}-${r.label}`} onClick={() => goTo(r.path)}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all duration-150
                  ${i === selectedIdx ? 'bg-raised border-l-2 border-gold-mid' : 'hover:bg-raised/50'}`}>
                <span className={`font-ui text-[0.65rem] tracking-wider px-2 py-0.5 rounded text-sand-pale ${categoryColors[r.type] || 'bg-smoke-mid/60'}`}>{r.type}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-heading text-sm text-text-primary">{r.label}</div>
                  <div className="font-body text-xs text-text-secondary truncate">{r.sub}</div>
                </div>
              </button>
            ))}
          </div>
        )}
        <div className="mt-8 flex items-center justify-center gap-6 text-text-muted-custom font-ui text-xs">
          <span className="px-2 py-1 border border-smoke-mid rounded text-[0.65rem]">{'\u2191\u2193'} {t('search.navigate')}</span>
          <span className="px-2 py-1 border border-smoke-mid rounded text-[0.65rem]">Enter {t('search.select')}</span>
          <span className="px-2 py-1 border border-smoke-mid rounded text-[0.65rem]">Esc {t('search.close')}</span>
        </div>
      </div>
    </div>
  );
});

CrimsonSearch.displayName = 'CrimsonSearch';
export default CrimsonSearch;
