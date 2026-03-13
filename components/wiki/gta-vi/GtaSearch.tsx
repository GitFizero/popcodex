'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { characters } from '@/lib/data/gta-vi/characters';
import { locations } from '@/lib/data/gta-vi/locations';

interface Props {
  open: boolean;
  onClose: () => void;
  locale: string;
}

const GtaSearch = ({ open, onClose, locale }: Props) => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const prefix = `/${locale}/gta-vi`;

  const searchItems = useMemo(() => [
    ...characters.map(c => ({ label: c.name, type: 'CHARACTER', path: `${prefix}/characters?id=${c.id}`, color: c.neonClass })),
    ...locations.map(l => ({ label: l.name, type: 'LOCATION', path: `${prefix}/map`, color: l.neonClass })),
    { label: 'Story', type: 'STORY', path: `${prefix}/story`, color: 'neon-pink-text' },
    { label: 'Gameplay', type: 'GAMEPLAY', path: `${prefix}/gameplay`, color: 'neon-cyan-text' },
    { label: 'Only Raw Records', type: 'LORE', path: `${prefix}/leonida`, color: 'neon-gold-text' },
  ], [prefix]);

  useEffect(() => {
    if (open) setQuery('');
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); onClose(); }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const filtered = useMemo(() => {
    if (!query) return searchItems;
    const q = query.toLowerCase();
    return searchItems.filter(i => i.label.toLowerCase().includes(q) || i.type.toLowerCase().includes(q));
  }, [query, searchItems]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] bg-bg-void/97 flex flex-col items-center pt-[20vh]" onClick={onClose}>
      <div className="w-full max-w-2xl px-4" onClick={e => e.stopPropagation()}>
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted-vice" size={20} />
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full bg-bg-card border border-neon-cyan/20 rounded-lg pl-12 pr-12 py-4 font-bebas text-2xl text-foreground placeholder:text-text-muted-vice focus:outline-none focus:border-neon-pink/50"
            style={{ borderImage: 'linear-gradient(90deg, hsl(var(--neon-pink)), hsl(var(--neon-cyan))) 1' }}
          />
          <button onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted-vice hover:text-text-secondary">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-1 max-h-[50vh] overflow-y-auto">
          {filtered.map(item => (
            <button
              key={item.label}
              onClick={() => { router.push(item.path); onClose(); }}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-bg-card transition-colors text-left group"
            >
              <span className={`font-rajdhani text-[0.65rem] tracking-widest px-2 py-0.5 rounded bg-bg-raised ${item.color}`}>
                {item.type}
              </span>
              <span className="font-barlow font-semibold text-text-primary group-hover:text-neon-cyan transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {!query && (
          <div className="mt-6 flex flex-wrap gap-2">
            {['Lucia', 'Jason', 'Vice City', 'Only Raw Records', 'Raul Bautista'].map(s => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="font-rajdhani text-xs px-3 py-1 rounded-full border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/40 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GtaSearch;
