'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { characterSEO } from '@/lib/data/gta-vi/characterSlugs';
import { characters, type Character } from '@/lib/data/gta-vi/characters';
import { characterImages } from '@/lib/data/gta-vi/characterImages';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

type Tab = 'bio' | 'stats' | 'relations' | 'citations' | 'dossier';

const CharacterPage = ({ locale }: { locale: string }) => {
  const [selectedId, setSelectedId] = useState('lucia');
  const [activeTab, setActiveTab] = useState<Tab>('bio');
  const [filter, setFilter] = useState<'all' | 'protagonist' | 'secondary'>('all');
  const [citationIdx, setCitationIdx] = useState(0);
  const { t, lang } = useGtaI18n(locale);

  const selected = characters.find(c => c.id === selectedId) || characters[0];

  useEffect(() => {
    setActiveTab('bio');
    setCitationIdx(0);
  }, [selectedId]);

  useEffect(() => {
    if (activeTab !== 'citations') return;
    const id = setInterval(() => {
      setCitationIdx(i => (i + 1) % selected.citations.length);
    }, 7000);
    return () => clearInterval(id);
  }, [activeTab, selected]);

  const filtered = filter === 'all'
    ? characters
    : characters.filter(c => filter === 'protagonist' ? c.type === 'protagonist' : c.type === 'secondary');

  const tabs: Tab[] = ['bio', 'stats', 'relations', 'citations', 'dossier'];
  const tabLabels: Record<Tab, string> = {
    bio: t('characters.bio'),
    stats: t('characters.stats'),
    relations: t('characters.relations'),
    citations: t('characters.citations'),
    dossier: t('characters.dossier'),
  };

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-6 pt-4">
            <h1 className="font-bebas text-3xl sm:text-5xl text-text-primary mb-1">{t('characters.title')}</h1>
            <p className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest">
              {t('footer.disclaimer')}
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* ═══ LEFT PANEL — ROSTER ═══ */}
          <div className="lg:w-1/4 shrink-0">
            <div className="flex gap-1.5 mb-3">
              {(['all', 'protagonist', 'secondary'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`font-rajdhani text-[0.55rem] px-2 py-1 rounded tracking-widest transition-colors ${
                    filter === f ? 'bg-neon-pink/20 text-neon-pink' : 'bg-[hsl(214,36%,10%)] text-text-muted-vice hover:text-text-secondary'
                  }`}
                >
                  {f === 'all' ? t('characters.all') : f === 'protagonist' ? t('characters.protagonists') : t('characters.secondary')}
                </button>
              ))}
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide">
              {filtered.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    selectedId === c.id
                      ? `bg-[hsl(213,33%,13%)] border border-${c.colorClass}/30`
                      : 'bg-[hsl(214,40%,7%)] border border-transparent'
                  }`}
                >
                  {characterImages[c.id] ? (
                    <img src={characterImages[c.id].square} alt={c.name} className={`w-8 h-8 rounded-full object-cover border-2 border-${c.colorClass}/30 shrink-0`} />
                  ) : (
                    <div className={`w-8 h-8 rounded-full bg-${c.colorClass}/10 flex items-center justify-center shrink-0`}>
                      <span className={`font-bebas text-xs text-${c.colorClass}`}>{c.name[0]}</span>
                    </div>
                  )}
                  <span className={`font-bebas text-xs whitespace-nowrap ${selectedId === c.id ? c.neonClass : 'text-text-primary'}`}>{c.name}</span>
                </button>
              ))}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden lg:block space-y-1.5 max-h-[65vh] overflow-y-auto pr-1">
              {filtered.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition-all ${
                    selectedId === c.id
                      ? `bg-[hsl(213,33%,13%)] border border-${c.colorClass}/30`
                      : 'bg-[hsl(214,40%,7%)] hover:bg-[hsl(214,36%,10%)] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {characterImages[c.id] ? (
                      <img src={characterImages[c.id].square} alt={c.name} className={`w-10 h-10 rounded-full object-cover border-2 border-${c.colorClass}/30 shrink-0`} />
                    ) : (
                      <div className={`w-10 h-10 rounded-full bg-${c.colorClass}/10 flex items-center justify-center shrink-0`}>
                        <span className={`font-bebas text-sm text-${c.colorClass}`}>{c.name[0]}</span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className={`font-bebas text-xs ${selectedId === c.id ? c.neonClass : 'text-text-primary'}`}>{c.name}</h3>
                      <p className="font-rajdhani text-[0.5rem] text-text-muted-vice truncate">{c.role}</p>
                    </div>
                    {c.badge && (
                      <span className="font-rajdhani text-[0.45rem] px-1 py-0.5 rounded bg-neon-gold/15 text-neon-gold ml-auto shrink-0">
                        {t('characters.playable')}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ═══ CENTER + RIGHT — SHOWCASE ═══ */}
          <div className="flex-1">
            {/* Portrait header */}
            <div className={`relative rounded-xl overflow-hidden mb-4`}>
              {characterImages[selected.id] ? (
                <div className="relative">
                  <img 
                    src={characterImages[selected.id].landscape} 
                    alt={selected.name}
                    className="w-full h-48 sm:h-64 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className={`font-bebas text-3xl sm:text-5xl ${selected.neonClass}`}>{selected.name.toUpperCase()}</h2>
                    <p className="font-rajdhani text-[0.6rem] text-text-secondary tracking-wider">{selected.role}</p>
                  </div>
                </div>
              ) : (
                <div className={`relative p-6 bg-gradient-to-br from-bg-card to-bg-raised`}>
                  <div className={`absolute inset-0 bg-${selected.colorClass}/5`} />
                  <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-${selected.colorClass}/10 to-transparent`} />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-${selected.colorClass}/10 border border-${selected.colorClass}/20 flex items-center justify-center shrink-0`}>
                      <span className={`font-bebas text-2xl text-${selected.colorClass}`}>{selected.name.split(' ').map(w => w[0]).join('')}</span>
                    </div>
                    <div>
                      <h2 className={`font-bebas text-2xl sm:text-4xl ${selected.neonClass}`}>{selected.name.toUpperCase()}</h2>
                      <p className="font-rajdhani text-[0.6rem] text-text-secondary tracking-wider">{selected.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mb-4 overflow-x-auto">
              {tabs.map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`font-rajdhani text-[0.6rem] px-3 py-1.5 rounded tracking-widest whitespace-nowrap transition-colors ${
                    activeTab === t
                      ? `bg-${selected.colorClass}/15 text-${selected.colorClass}`
                      : 'bg-[hsl(214,36%,10%)] text-text-muted-vice hover:text-text-secondary'
                  }`}
                >
                  {tabLabels[t]}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-[hsl(213,33%,13%)] rounded-xl p-5 sm:p-6 border border-neon-cyan/5 min-h-[350px]">
              {activeTab === 'bio' && (
                <div>
                  {selected.bio.map((p, i) => (
                    <p key={i} className="font-dm text-xs text-text-secondary leading-relaxed mb-3">{p}</p>
                  ))}
                  {selected.keyDetail && (
                    <p className="font-marker text-xs text-neon-pink/70 mt-4">{selected.keyDetail}</p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                    {Object.entries(selected.info).map(([k, v]) => (
                      <div key={k} className="bg-[hsl(214,36%,10%)] rounded-lg p-2.5">
                        <span className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest">{k.toUpperCase()}</span>
                        <p className="font-dm text-xs text-text-primary mt-0.5">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'stats' && selected.stats && (
                <div>
                  <div className="space-y-3">
                    {Object.entries(selected.stats).map(([key, val]) => (
                      <div key={key}>
                        <div className="flex justify-between mb-1">
                          <span className="font-rajdhani text-[0.6rem] text-text-secondary tracking-widest">{key.toUpperCase()}</span>
                          <span className={`font-bebas text-xs text-${selected.colorClass}`}>{val}/10</span>
                        </div>
                        <div className="stat-bar h-1.5">
                          <div className={`stat-bar-fill bg-${selected.colorClass}`} style={{ width: `${val * 10}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {selected.combatStyle && (
                    <p className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest mt-5">
                      STYLE: {selected.combatStyle}
                    </p>
                  )}
                </div>
              )}
              {activeTab === 'stats' && !selected.stats && (
                <p className="font-dm text-xs text-text-muted-vice">{t('inline.statsNotAvailable')}</p>
              )}
              {activeTab === 'relations' && (
                <div className="space-y-2">
                  {selected.relations.map((r, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[hsl(214,36%,10%)] rounded-lg p-3">
                      <div className={`w-2 h-2 rounded-full bg-${r.color}`} />
                      <div>
                        <span className="font-barlow font-semibold text-xs text-text-primary">{r.name}</span>
                        <span className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest ml-2">{r.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'citations' && (
                <div>
                  <div className="min-h-[100px] flex items-center justify-center">
                    <p className={`font-marker text-sm sm:text-base text-${selected.colorClass} text-center transition-opacity duration-500`}>
                      {selected.citations[citationIdx]}
                    </p>
                  </div>
                  <div className="flex justify-center gap-1.5 mt-4">
                    {selected.citations.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCitationIdx(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          i === citationIdx ? `bg-${selected.colorClass}` : 'bg-[hsl(214,36%,10%)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'dossier' && selected.dossier && (
                <div className="dossier-paper p-4 rounded-lg">
                  <div className={`dossier-stamp ${selected.dossier.stampColor} border-current text-xl`}>
                    {selected.dossier.stamp}
                  </div>
                  <p className="font-courier text-[0.55rem] text-text-muted-vice mb-3 tracking-wider">
                    {selected.dossier.header}
                  </p>
                  <div className="space-y-1.5 font-courier text-xs text-text-secondary">
                    <p><strong className="text-text-primary">NOM:</strong> {selected.dossier.nom}</p>
                    <p><strong className="text-text-primary">STATUT:</strong> {selected.dossier.statut}</p>
                    {Object.entries(selected.dossier.fields).map(([k, v]) => (
                      <p key={k}><strong className="text-text-primary">{k.toUpperCase()}:</strong> {v}</p>
                    ))}
                    {selected.dossier.notes && (
                      <p className="mt-3 text-text-muted-vice italic text-[0.6rem]">{selected.dossier.notes}</p>
                    )}
                  </div>
                </div>
              )}
              {activeTab === 'dossier' && !selected.dossier && (
                <p className="font-dm text-xs text-text-muted-vice">{t('inline.dossierNotAvailable')}</p>
              )}
            </div>
            {/* Link to full character page */}
            {characterSEO[selected.id] && (
              <Link
                href={`/${locale}/gta-vi/characters/${characterSEO[selected.id].slug}`}
                className="mt-4 inline-flex items-center gap-2 font-rajdhani text-xs tracking-wider text-neon-cyan hover:text-neon-pink transition-colors"
              >
                {t('inline.viewFullPage').replace('{name}', selected.name.toUpperCase())} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
