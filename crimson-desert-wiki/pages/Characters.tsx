// @ts-nocheck
import { useState, useMemo, useCallback } from 'react';
import { characters, npcs, type Character } from '@/crimson-desert-wiki/data/characters';
import { useApp } from '@/crimson-desert-wiki/context/AppContext';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

const TABS = ['BIOGRAPHY', 'COMBAT', 'ABILITIES', 'RELATIONSHIPS', 'QUOTES'] as const;
type Tab = typeof TABS[number];

const colorMap: Record<string, { bg: string; text: string }> = {
  crimson: { bg: 'radial-gradient(ellipse at center, hsl(var(--crimson-deep)/0.5) 0%, transparent 70%)', text: 'text-crimson-bright' },
  teal: { bg: 'radial-gradient(ellipse at center, hsl(180 40% 15%/0.5) 0%, transparent 70%)', text: 'text-[#4DB6AC]' },
  amber: { bg: 'radial-gradient(ellipse at center, hsl(30 50% 20%/0.5) 0%, transparent 70%)', text: 'text-gold-bright' },
};

const factionColors: Record<string, string> = {
  'Black Bears': 'bg-crimson-deep/80', 'Ours Noirs': 'bg-crimson-deep/80',
  'Merchants Guild': 'bg-gold-dark/80', 'Guilde des Marchands': 'bg-gold-dark/80',
  'Unknown': 'bg-smoke-mid/80',
  'Abysse Beings': 'bg-[#1a1a3a]/80', "Êtres de l'Abysse": 'bg-[#1a1a3a]/80',
  'Greymanes': 'bg-smoke-light/80',
};

const CharactersPage = () => {
  const { selectedCharacterId, setSelectedCharacterId } = useApp();
  const { t, lang } = useI18n();
  const [activeTab, setActiveTab] = useState<Tab>('BIOGRAPHY');
  const [filter, setFilter] = useState<'ALL' | 'PLAYABLE' | 'COMPANION' | 'NPC'>('ALL');
  const [quoteIndex, setQuoteIndex] = useState(0);

  const char = useMemo(() => characters.find(c => c.id === selectedCharacterId) || characters[0], [selectedCharacterId]);
  const theme = colorMap[char.colorTheme] || colorMap.crimson;

  const filtered = useMemo(() => {
    if (filter === 'ALL') return characters;
    return characters.filter(c => c.type === filter);
  }, [filter]);

  const selectChar = useCallback((id: string) => {
    setSelectedCharacterId(id); setActiveTab('BIOGRAPHY'); setQuoteIndex(0);
  }, [setSelectedCharacterId]);

  const tabLabels: Record<Tab, string> = {
    BIOGRAPHY: t('chars.tab.biography'), COMBAT: t('chars.tab.combat'), ABILITIES: t('chars.tab.abilities'),
    RELATIONSHIPS: t('chars.tab.relationships'), QUOTES: t('chars.tab.quotes'),
  };

  const filterLabels = { ALL: t('chars.all'), PLAYABLE: t('chars.playable'), COMPANION: t('chars.companion'), NPC: t('chars.npc') };

  const renderStatBar = (value: number, color: string, label: string) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-ui text-xs tracking-wider text-text-secondary">{label}</span>
        <span className="font-ui text-xs text-text-muted-custom">{value}/10</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className={`h-3 flex-1 rounded-sm transition-all duration-300 ${i < value ? '' : 'stat-block-empty'}`}
            style={i < value ? { background: `linear-gradient(135deg, ${color}88, ${color})`, transitionDelay: `${i * 50}ms` } : {}} />
        ))}
      </div>
    </div>
  );

  const getFaction = (f: string | Record<string, string>) => typeof f === 'string' ? f : f[lang] || f.fr;
  const getRole = (r: string | Record<string, string>) => typeof r === 'string' ? r : r[lang] || r.fr;
  const getLore = (l: string | Record<string, string>) => typeof l === 'string' ? l : l[lang] || l.fr;

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.characters.title[lang]}
        description={seo.characters.desc[lang]}
        path="/characters"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.characters[lang], path: '/characters' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('chars.heroes')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.characters.title[lang]}</h1>

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {/* Roster */}
          <div className="lg:w-[35%] bg-surface/50 border border-border rounded-lg p-3 sm:p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {(['ALL', 'PLAYABLE', 'COMPANION', 'NPC'] as const).map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded-full border transition-all duration-200 focus-gold
                    ${filter === f ? 'bg-crimson-core/50 border-gold-mid text-gold-bright' : 'border-border text-text-muted-custom hover:text-text-secondary'}`}>
                  {filterLabels[f]}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 lg:overflow-x-visible pb-2 lg:pb-0">
              {filtered.map(c => {
                const active = c.id === char.id;
                return (
                  <button key={c.id} onClick={() => selectChar(c.id)}
                    className={`text-left p-3 sm:p-4 rounded-lg border transition-all duration-200 focus-gold
                      ${active ? 'bg-card-bg border-l-2 border-l-crimson-bright border-t-border border-r-border border-b-border' : 'bg-transparent border-border hover:bg-raised/50'}`}>
                    <div className={`relative w-full h-36 sm:h-44 lg:h-40 rounded-md mb-2 overflow-hidden ${
                      c.colorTheme === 'crimson' ? 'bg-gradient-to-br from-crimson-deep to-crimson-core/30' :
                      c.colorTheme === 'teal' ? 'bg-gradient-to-br from-[#0d3b3b] to-[#1a6b6b]/30' :
                      'bg-gradient-to-br from-gold-dark to-gold-muted/30'
                    } flex items-center justify-center`}>
                      {c.image ? (
                        <>
                          <img src={c.image} alt={`${c.name} — Crimson Desert © Pearl Abyss`} className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" decoding="async" width={200} height={176} />
                          <span className="absolute right-1 bottom-1 font-ui text-[0.35rem] sm:text-[0.4rem] tracking-wider text-sand-pale/60 bg-void/50 px-1 py-0.5 rounded pointer-events-none select-none z-10">© Pearl Abyss</span>
                        </>
                      ) : (
                        <span className="text-3xl opacity-30">{c.colorTheme === 'crimson' ? '⚔' : c.colorTheme === 'teal' ? '🏹' : '👊'}</span>
                      )}
                    </div>
                    <div className="font-heading text-xs sm:text-sm text-text-primary truncate">{c.name}</div>
                    <div className="font-ui text-[0.6rem] text-text-muted-custom truncate">{c.role[lang]}</div>
                    {c.playable && (
                      <span className="inline-block mt-1 font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded-full bg-gold-mid/20 text-gold-bright border border-gold-mid/30">
                        {t('chars.playable')}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Showcase */}
          <div className="lg:w-[65%]">
            <div className="relative rounded-lg overflow-hidden mb-6 p-6 sm:p-8 min-h-[180px] sm:min-h-[200px] flex flex-col justify-end" style={{ background: theme.bg }}>
              <div className="absolute inset-0 bg-surface/40" />
              {char.image && (
                <>
                  <img src={char.image} alt={`${char.name} — Crimson Desert © Pearl Abyss`} className="absolute right-0 bottom-0 h-full w-auto max-w-[65%] object-contain object-right opacity-80 pointer-events-none" style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }} loading="lazy" decoding="async" />
                  <span className="absolute right-2 bottom-2 font-ui text-[0.4rem] tracking-wider text-sand-pale/50 pointer-events-none select-none z-10">© Pearl Abyss</span>
                </>
              )}
              <div className="relative z-10">
                <span className="font-ui text-[0.65rem] tracking-wider px-2 py-1 rounded-full bg-card-bg/80 text-text-secondary border border-border">{char.role[lang]}</span>
                <h2 className={`font-display text-2xl sm:text-4xl lg:text-5xl mt-3 ${theme.text}`}>{char.name}</h2>
              </div>
            </div>

            <div className="flex gap-1 overflow-x-auto border-b border-border pb-0 mb-6 scrollbar-thin -mx-1 px-1">
              {TABS.map(tab => (
                <button key={tab} onClick={() => { setActiveTab(tab); if (tab === 'QUOTES') setQuoteIndex(0); }}
                  className={`font-ui text-[0.6rem] sm:text-[0.7rem] tracking-wider px-2 sm:px-4 py-3 whitespace-nowrap transition-all duration-200 relative focus-gold
                    ${activeTab === tab ? 'text-gold-bright' : 'text-text-muted-custom hover:text-text-secondary'}`}>
                  {tabLabels[tab]}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-mid" />}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]" key={`${char.id}-${activeTab}`} style={{ animation: 'fade-in-up 0.3s ease-out' }}>
              {activeTab === 'BIOGRAPHY' && (
                <div>
                  <p className="font-body text-base text-text-primary leading-relaxed mb-6">{char.bio[lang]}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: t('chars.faction'), value: char.faction },
                      { label: t('chars.origin'), value: char.origin[lang] },
                      { label: t('chars.role'), value: char.role[lang] },
                      { label: t('chars.weapon'), value: char.weapon[lang] },
                      { label: t('chars.affiliation'), value: char.affiliation[lang] },
                      { label: t('chars.status'), value: char.status[lang] },
                    ].map(info => (
                      <div key={info.label} className="bg-raised/50 rounded-md p-3">
                        <div className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom">{info.label}</div>
                        <div className="font-heading text-sm text-text-primary mt-1">{info.value}</div>
                      </div>
                    ))}
                  </div>
                  {char.signatureQuote[lang] && (
                    <blockquote className="border-l-[3px] border-gold-mid pl-4 py-3 bg-gold-dark/10 rounded-r-md">
                      <p className="font-lore italic text-lg text-sand-light">"{char.signatureQuote[lang]}"</p>
                    </blockquote>
                  )}
                </div>
              )}

              {activeTab === 'COMBAT' && (
                <div>
                  {(char.strength > 0 || char.speed > 0 || char.magic > 0) && (
                    <>
                      {renderStatBar(char.strength, '#C0392B', t('common.strength'))}
                      {renderStatBar(char.speed, '#C9A84C', t('common.speed'))}
                      {renderStatBar(char.magic, '#4DB6AC', t('common.magic'))}
                    </>
                  )}
                  <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mt-8 mb-4">{t('chars.weapon_mastery')}</h4>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {char.weapons.map(w => (
                      <div key={w.name[lang]} className="flex flex-col items-center gap-1">
                        <div className="w-14 h-14 rounded-full bg-raised/80 border border-border flex items-center justify-center hover:border-gold-mid hover:shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-200">
                          <span className="text-xl opacity-60">⚔</span>
                        </div>
                        <span className="font-ui text-[0.6rem] text-text-secondary">{w.name[lang]}</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }, (_, i) => (<span key={i} className={`text-[0.6rem] ${i < w.mastery ? 'text-gold-bright' : 'text-text-muted-custom'}`}>★</span>))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">{char.combatStyle[lang]}</p>
                  {char.abilities.length > 0 && (
                    <>
                      <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">{t('chars.signature_moves')}</h4>
                      <div className="space-y-2">
                        {char.abilities.slice(0, 3).map(a => (
                          <details key={a.name[lang]} className="group bg-raised/30 rounded-md border border-border overflow-hidden">
                            <summary className="flex items-center justify-between p-3 cursor-pointer font-heading text-sm text-text-primary hover:text-gold-bright transition-colors focus-gold">
                              <span className="flex items-center gap-2">{a.name[lang]}
                                <span className={`font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded ${a.type === 'PHYSICAL' ? 'bg-crimson-core/30 text-crimson-bright' : a.type === 'ELEMENTAL' ? 'bg-gold-dark/30 text-gold-bright' : 'bg-[#1a3b3b]/30 text-[#4DB6AC]'}`}>{t(`type.${a.type}`)}</span>
                              </span>
                              <span className="text-text-muted-custom group-open:rotate-180 transition-transform duration-300">▾</span>
                            </summary>
                            <div className="px-3 pb-3"><p className="font-body text-sm text-text-secondary">{a.description[lang]}</p></div>
                          </details>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'ABILITIES' && (
                <div>
                  {char.abilities.length > 0 ? (
                    <>
                      <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-6">{t('chars.ability_tree')}</h4>
                      <div className="space-y-3">
                        {char.abilities.map(a => (
                          <div key={a.name[lang]} className={`flex items-start gap-3 p-3 rounded-md border transition-all duration-200
                            ${a.level <= 10 ? 'bg-raised/30 border-gold-mid/30' : 'bg-raised/10 border-border opacity-60'} hover:opacity-100 hover:border-gold-mid`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border ${a.level <= 10 ? 'bg-gold-mid/20 border-gold-mid/50' : 'bg-raised/50 border-border'}`}>
                              <span className="font-ui text-xs text-gold-bright">{a.level}</span>
                            </div>
                            <div>
                              <div className="font-heading text-sm text-text-primary">{a.name[lang]}</div>
                              <p className="font-body text-xs text-text-secondary mt-1">{a.description[lang]}</p>
                              <span className={`inline-block mt-1 font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded ${a.type === 'PHYSICAL' ? 'bg-crimson-core/30 text-crimson-bright' : a.type === 'ELEMENTAL' ? 'bg-gold-dark/30 text-gold-bright' : 'bg-[#1a3b3b]/30 text-[#4DB6AC]'}`}>{t(`type.${a.type}`)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="font-body text-sm text-text-muted-custom italic">{lang === 'fr' ? "Les capacités détaillées n'ont pas encore été officiellement confirmées." : lang === 'ko' ? '세부 능력은 아직 공식 확인되지 않았습니다.' : 'Detailed abilities have not yet been officially confirmed.'}</p>
                  )}
                  <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mt-8 mb-4">{t('chars.elemental')}</h4>
                  <div className="flex flex-wrap gap-4">
                    {[{ name: '🔥 FEU', pct: char.colorTheme === 'crimson' ? 70 : 40, color: '#E84A1A' },
                      { name: '❄ GLACE', pct: char.colorTheme === 'teal' ? 75 : 30, color: '#4DB6AC' },
                      { name: '💨 VENT', pct: char.colorTheme === 'amber' ? 50 : 35, color: '#90A4AE' }].map(el => (
                      <div key={el.name} className="flex flex-col items-center gap-2">
                        <div className="relative w-16 h-16">
                          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90" aria-hidden="true">
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--bg-raised))" strokeWidth="3" />
                            <circle cx="18" cy="18" r="15.9" fill="none" stroke={el.color} strokeWidth="3" strokeDasharray={`${el.pct} ${100 - el.pct}`} strokeLinecap="round" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center font-ui text-[0.6rem] text-text-secondary">{el.pct}%</span>
                        </div>
                        <span className="font-ui text-[0.6rem] tracking-wider text-text-secondary">{el.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'RELATIONSHIPS' && (
                <div>
                  {char.relations.length === 0 ? (
                    <p className="font-body text-sm text-text-muted-custom">{t('chars.no_relations')}</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {char.relations.map(r => {
                        const related = characters.find(c => c.id === r.characterId);
                        if (!related) return null;
                        const typeColors: Record<string, string> = { ALLY: 'text-gold-bright bg-gold-dark/30', RIVAL: 'text-crimson-bright bg-crimson-deep/30', MENTOR: 'text-[#4DB6AC] bg-[#1a3b3b]/30', UNKNOWN: 'text-text-muted-custom bg-smoke-mid/30' };
                        return (
                          <button key={r.characterId} onClick={() => selectChar(r.characterId)}
                            className="text-left p-4 rounded-lg bg-raised/30 border border-border hover:border-gold-mid/50 transition-all duration-200 focus-gold">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-10 h-10 rounded-full ${related.colorTheme === 'crimson' ? 'bg-crimson-deep/50' : related.colorTheme === 'teal' ? 'bg-[#0d3b3b]/50' : 'bg-gold-dark/50'} flex items-center justify-center overflow-hidden`}>
                                {related.image ? (
                                  <img src={related.image} alt={related.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                ) : (
                                  <span className="text-sm opacity-40">⚔</span>
                                )}
                              </div>
                              <div>
                                <div className="font-heading text-sm text-text-primary">{related.name}</div>
                                <span className={`font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded ${typeColors[r.type]}`}>{t(`rel.${r.type}`)}</span>
                              </div>
                            </div>
                            <p className="font-body text-xs text-text-secondary">{r.description[lang]}</p>
                            <span className="font-ui text-[0.6rem] text-crimson-bright mt-2 inline-block">{t('chars.view_character')}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'QUOTES' && char.quotes.length > 0 && (
                <div className="relative">
                  <span className="absolute -top-4 -left-2 font-display text-[6rem] text-gold-dark/20 leading-none select-none" aria-hidden="true">"</span>
                  <div className="pl-8">
                    <p className="font-lore italic text-2xl text-sand-light leading-relaxed">"{char.quotes[quoteIndex].text[lang]}"</p>
                    <p className="font-ui text-xs text-text-muted-custom mt-4 tracking-wider">— {char.quotes[quoteIndex].context[lang]}</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <button onClick={() => setQuoteIndex(i => i > 0 ? i - 1 : char.quotes.length - 1)} className="font-ui text-text-secondary hover:text-gold-bright transition-colors focus-gold px-2" aria-label="Previous quote">←</button>
                    <span className="font-ui text-xs text-text-muted-custom">{quoteIndex + 1} / {char.quotes.length}</span>
                    <button onClick={() => setQuoteIndex(i => i < char.quotes.length - 1 ? i + 1 : 0)} className="font-ui text-text-secondary hover:text-gold-bright transition-colors focus-gold px-2" aria-label="Next quote">→</button>
                  </div>
                </div>
              )}
            </div>

            {/* NPCs */}
            <div className="mt-12">
              <GoldDivider variant="section" title={t('chars.denizens')} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                {npcs.map(npc => (
                  <div key={npc.id} className="bg-card-bg border border-border rounded-lg p-4 card-hover">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${factionColors[getFaction(npc.faction)] || 'bg-smoke-mid/80'}`}>
                        {npc.image ? (
                          <img src={npc.image} alt={`${npc.name} PNJ Crimson Desert`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                        ) : (
                          <span className="text-sand-pale text-xs">?</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-heading text-sm text-text-primary">{npc.name}</div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-ui text-[0.55rem] text-text-muted-custom">{getFaction(npc.faction)}</span>
                          <span className="text-text-muted-custom">·</span>
                          <span className="font-ui text-[0.55rem] text-text-muted-custom">{getRole(npc.role)}</span>
                        </div>
                        <p className="font-body text-xs text-text-secondary mt-2">{getLore(npc.lore)}</p>
                        <span className={`inline-block mt-2 font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded ${npc.status === 'DOCUMENTED' ? 'bg-gold-dark/30 text-gold-bright' : 'bg-crimson-deep/30 text-crimson-bright'}`}>
                          {npc.status === 'DOCUMENTED' ? t('chars.documented') : t('chars.unknown')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharactersPage;
