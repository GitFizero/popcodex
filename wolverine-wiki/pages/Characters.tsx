// @ts-nocheck
import { useState, useMemo, useCallback } from 'react';
import { characters, npcs, type Character } from '@/wolverine-wiki/data/characters';
import { useApp } from '@/wolverine-wiki/context/AppContext';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const TABS = ['BIOGRAPHY', 'COMBAT', 'ABILITIES', 'RELATIONSHIPS', 'QUOTES'] as const;
type Tab = typeof TABS[number];

const CharactersPage = () => {
  const { selectedCharacterId, setSelectedCharacterId } = useApp();
  const { t, lang } = useI18n();
  const [activeTab, setActiveTab] = useState<Tab>('BIOGRAPHY');
  const [filter, setFilter] = useState<'ALL' | 'PLAYABLE' | 'COMPANION' | 'NPC'>('ALL');
  const [quoteIndex, setQuoteIndex] = useState(0);

  const char = useMemo(() => characters.find(c => c.id === selectedCharacterId) || characters[0], [selectedCharacterId]);

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
        <span className="font-ui text-xs text-text-muted-custom">{value}/100</span>
      </div>
      <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${value}%`, background: color }} />
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
                    ${filter === f ? 'bg-yellow-600/30 border-yellow-500 text-gold-bright' : 'border-border text-text-muted-custom hover:text-text-secondary'}`}>
                  {filterLabels[f]}
                </button>
              ))}
            </div>
            <div className="space-y-2 max-h-[60vh] overflow-y-auto scrollbar-thin">
              {filtered.map(c => (
                <button key={c.id} onClick={() => selectChar(c.id)}
                  className={`w-full text-left rounded-md p-3 transition-all duration-200 flex items-center gap-3
                    ${c.id === char.id ? 'bg-raised border-l-2 border-yellow-500' : 'hover:bg-raised/50'}`}>
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-border" style={{ borderColor: c.colorTheme }}>
                    <span className="text-sm">{c.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading text-sm text-text-primary truncate">{c.name}</div>
                    <div className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom">{c.role[lang]}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* NPCs */}
            <GoldDivider variant="short" className="my-4" />
            <h3 className="font-heading text-xs tracking-[0.2em] text-gold-mid mb-3">{t('chars.denizens')}</h3>
            <div className="space-y-2 max-h-[30vh] overflow-y-auto scrollbar-thin">
              {npcs.map(npc => (
                <div key={npc.id} className="rounded-md p-3 bg-raised/30 border border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="font-heading text-sm text-text-primary">{npc.name}</div>
                    <span className={`font-ui text-[0.5rem] tracking-wider px-1.5 py-0.5 rounded ${npc.status === 'DOCUMENTED' ? 'bg-yellow-600/30 text-yellow-400' : 'bg-smoke-mid/50 text-text-muted-custom'}`}>
                      {npc.status === 'DOCUMENTED' ? t('chars.documented') : t('chars.unknown')}
                    </span>
                  </div>
                  <div className="font-ui text-[0.6rem] text-text-muted-custom mt-1">{getRole(npc.role)}</div>
                  <p className="font-body text-xs text-text-secondary mt-1 line-clamp-2">{getLore(npc.lore)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:w-[65%]">
            {/* Character Header */}
            <div className="relative rounded-lg overflow-hidden border border-border p-6 mb-6" style={{ background: `linear-gradient(135deg, rgba(20,20,20,0.95), rgba(30,30,30,0.9))` }}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 rounded-lg bg-gray-800 flex items-center justify-center border-2" style={{ borderColor: char.colorTheme }}>
                  <span className="text-3xl font-display" style={{ color: char.colorTheme }}>{char.name[0]}</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-gold-bright">{char.name}</h2>
                  <p className="font-ui text-xs tracking-[0.2em] mt-1" style={{ color: char.colorTheme }}>{char.role[lang]}</p>
                  <p className="font-lore italic text-sm text-text-secondary mt-3">"{char.signatureQuote[lang]}"</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                    <div><span className="font-ui text-[0.55rem] text-text-muted-custom">{t('chars.faction')}</span><div className="font-heading text-xs text-text-primary mt-0.5">{char.faction}</div></div>
                    <div><span className="font-ui text-[0.55rem] text-text-muted-custom">{t('chars.origin')}</span><div className="font-heading text-xs text-text-primary mt-0.5">{char.origin[lang]}</div></div>
                    <div><span className="font-ui text-[0.55rem] text-text-muted-custom">{t('chars.weapon')}</span><div className="font-heading text-xs text-text-primary mt-0.5">{char.weapon[lang]}</div></div>
                    <div><span className="font-ui text-[0.55rem] text-text-muted-custom">{t('chars.status')}</span><div className="font-heading text-xs text-text-primary mt-0.5">{char.status[lang]}</div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 mb-6">
              {TABS.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`font-ui text-[0.65rem] tracking-wider px-3 py-2 rounded transition-all duration-200
                    ${activeTab === tab ? 'bg-yellow-600/30 text-yellow-400 border border-yellow-500/50' : 'text-text-muted-custom hover:text-text-secondary border border-transparent'}`}>
                  {tabLabels[tab]}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-surface/50 border border-border rounded-lg p-6">
              {activeTab === 'BIOGRAPHY' && (
                <div>
                  <p className="font-body text-sm text-text-secondary leading-relaxed whitespace-pre-line">{char.bio[lang]}</p>
                </div>
              )}

              {activeTab === 'COMBAT' && (
                <div>
                  <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">{char.combatStyle[lang]}</p>
                  <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-4">{t('chars.weapon_mastery')}</h3>
                  {char.weapons.map(w => (
                    <div key={w.name[lang]} className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-ui text-xs text-text-secondary">{w.name[lang]}</span>
                        <span className="font-ui text-xs text-text-muted-custom">{w.mastery}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                        <div className="h-full rounded-full bg-yellow-500 transition-all duration-700" style={{ width: `${w.mastery}%` }} />
                      </div>
                    </div>
                  ))}
                  <div className="mt-6">
                    {renderStatBar(char.strength, '#EAB308', t('common.strength'))}
                    {renderStatBar(char.speed, '#3B82F6', t('common.speed'))}
                    {renderStatBar(char.magic, '#8B5CF6', t('common.magic'))}
                  </div>
                </div>
              )}

              {activeTab === 'ABILITIES' && (
                <div>
                  <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-4">{t('chars.ability_tree')}</h3>
                  <div className="space-y-4">
                    {char.abilities.map(a => (
                      <div key={a.name[lang]} className="bg-raised/30 rounded-md p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded ${a.type === 'MUTANT' ? 'bg-purple-600/40 text-purple-300' : a.type === 'WEAPON' ? 'bg-yellow-600/40 text-yellow-300' : 'bg-red-600/40 text-red-300'}`}>
                            {t(`type.${a.type === 'WEAPON' ? 'PHYSICAL' : a.type === 'MUTANT' ? 'MAGICAL' : 'ELEMENTAL'}`)}
                          </span>
                          <span className="font-heading text-sm text-text-primary">{a.name[lang]}</span>
                          <div className="ml-auto flex gap-1">
                            {Array.from({ length: 3 }, (_, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full ${i < a.level ? 'bg-yellow-500' : 'bg-gray-700'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="font-body text-xs text-text-secondary">{a.description[lang]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'RELATIONSHIPS' && (
                <div>
                  {char.relations.length === 0 ? (
                    <p className="font-body text-sm text-text-muted-custom text-center py-8">{t('chars.no_relations')}</p>
                  ) : (
                    <div className="space-y-4">
                      {char.relations.map(rel => {
                        const related = characters.find(c => c.id === rel.characterId);
                        return (
                          <div key={rel.characterId} className="bg-raised/30 rounded-md p-4 border border-border/50 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border" style={{ borderColor: related?.colorTheme || '#555' }}>
                              <span className="text-sm">{related?.name[0] || '?'}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-heading text-sm text-text-primary">{related?.name || rel.characterId}</span>
                                <span className={`font-ui text-[0.55rem] tracking-wider px-2 py-0.5 rounded ${rel.type === 'ALLY' ? 'bg-green-600/40 text-green-300' : rel.type === 'RIVAL' ? 'bg-red-600/40 text-red-300' : 'bg-blue-600/40 text-blue-300'}`}>
                                  {t(`rel.${rel.type}`)}
                                </span>
                              </div>
                              <p className="font-body text-xs text-text-secondary mt-1">{rel.description[lang]}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'QUOTES' && (
                <div className="space-y-4">
                  {char.quotes.map((q, i) => (
                    <div key={i} className="bg-raised/30 rounded-md p-4 border-l-2 border-yellow-500/50">
                      <p className="font-lore italic text-sm text-text-primary">"{q.text[lang]}"</p>
                      <p className="font-ui text-[0.6rem] text-text-muted-custom mt-2">{q.context[lang]}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharactersPage;
