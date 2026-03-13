'use client';

import { useState, useMemo } from 'react';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import { characters, npcs } from '@/lib/data/crimson-desert/characters';
import type { Character } from '@/lib/data/crimson-desert/characters';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';

type FilterType = 'ALL' | 'PLAYABLE' | 'COMPANION' | 'NPC';
type DetailTab = 'biography' | 'combat' | 'abilities' | 'relationships' | 'quotes';

export default function CrimsonCharacters({ locale }: { locale: string }) {
  const { t, lang } = useCrimsonI18n(locale);
  const [filter, setFilter] = useState<FilterType>('ALL');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [detailTab, setDetailTab] = useState<DetailTab>('biography');

  const allCharacters = useMemo(() => {
    const npcChars = npcs.map(n => ({
      ...n,
      type: 'NPC' as const,
      playable: false,
      colorTheme: '#666',
      bio: n.lore,
      signatureQuote: { fr: '', en: '' },
      strength: 0, speed: 0, magic: 0,
      weapons: [],
      combatStyle: { fr: '', en: '' },
      abilities: [],
      quotes: [],
      relations: [],
      loreEntries: [],
      origin: { fr: '', en: '' },
      weapon: { fr: '', en: '' },
      faction: typeof n.faction === 'string' ? n.faction : (n.faction as Record<string, string>).en || '',
      affiliation: typeof n.faction === 'string' ? { fr: n.faction, en: n.faction } : n.faction,
      status: { fr: n.status, en: n.status },
    }));
    return [...characters, ...npcChars] as Character[];
  }, []);

  const filteredCharacters = useMemo(() => {
    if (filter === 'ALL') return allCharacters;
    return allCharacters.filter(c => c.type === filter);
  }, [allCharacters, filter]);

  const filterButtons: { key: FilterType; labelKey: string }[] = [
    { key: 'ALL', labelKey: 'chars.all' },
    { key: 'PLAYABLE', labelKey: 'chars.playable' },
    { key: 'COMPANION', labelKey: 'chars.companion' },
    { key: 'NPC', labelKey: 'chars.npc' },
  ];

  const detailTabs: { key: DetailTab; labelKey: string }[] = [
    { key: 'biography', labelKey: 'chars.tab.biography' },
    { key: 'combat', labelKey: 'chars.tab.combat' },
    { key: 'abilities', labelKey: 'chars.tab.abilities' },
    { key: 'relationships', labelKey: 'chars.tab.relationships' },
    { key: 'quotes', labelKey: 'chars.tab.quotes' },
  ];

  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <CrimsonNavBar locale={locale} />

      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-surface to-surface" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <RevealOnScroll>
            <h1 className="font-display text-4xl md:text-6xl text-gold-bright mb-4">{t('chars.heroes')}</h1>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">{t('chars.denizens')}</p>
          </RevealOnScroll>
        </div>
      </section>

      <GoldDivider />

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {filterButtons.map(fb => (
            <button key={fb.key} onClick={() => setFilter(fb.key)}
              className={`font-ui px-6 py-2 rounded border transition-all duration-300 ${filter === fb.key ? 'bg-gold-bright/20 border-gold-mid text-gold-bright' : 'bg-surface-elevated border-border text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'}`}>
              {t(fb.labelKey)}
            </button>
          ))}
        </div>
        <p className="text-center font-body text-text-secondary text-sm">{filteredCharacters.length} {t('chars.documented')}</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCharacters.map(char => (
            <RevealOnScroll key={char.id}>
              <button onClick={() => { setSelectedCharacter(char); setDetailTab('biography'); }} className="w-full text-left group">
                <div className="relative bg-surface-elevated border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-gold-mid/30 hover:shadow-lg hover:shadow-gold-bright/5 hover:-translate-y-1">
                  <div className="relative h-56 overflow-hidden bg-black/30">
                    {char.image ? (
                      <img src={char.image} alt={char.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-gold-mid/20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 px-2 py-1 text-xs font-ui rounded bg-black/70 border border-gold-mid/30 text-gold-mid">
                      {t(`chars.${char.type.toLowerCase()}`)}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: char.colorTheme || '#c8a45a' }} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg text-gold-bright mb-1">{char.name}</h3>
                    <p className="font-body text-sm text-text-secondary mb-2">{tr(char.role, lang)}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs text-gold-mid/70">{char.faction}</span>
                      <span className="font-ui text-xs text-gold-mid opacity-0 group-hover:opacity-100 transition-opacity">{t('chars.view_character')}</span>
                    </div>
                  </div>
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {selectedCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCharacter(null)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-elevated border border-gold-mid/30 rounded-lg shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedCharacter(null)} className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 border border-gold-mid/30 text-gold-mid hover:bg-black/70 transition-colors">&times;</button>

            <div className="relative">
              <div className="h-48 overflow-hidden bg-black/40">
                {selectedCharacter.image ? (
                  <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-full h-full object-cover opacity-50" />
                ) : (
                  <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${selectedCharacter.colorTheme || '#1a1a2e'}33, transparent)` }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="font-display text-3xl text-gold-bright mb-1">{selectedCharacter.name}</h2>
                <p className="font-body text-lg text-text-secondary">{tr(selectedCharacter.role, lang)}</p>
              </div>
            </div>

            <div className="px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-border">
              {[
                { key: 'chars.faction', value: selectedCharacter.faction },
                { key: 'chars.origin', value: tr(selectedCharacter.origin, lang) },
                { key: 'chars.affiliation', value: typeof selectedCharacter.affiliation === 'string' ? selectedCharacter.affiliation : tr(selectedCharacter.affiliation, lang) },
                { key: 'chars.status', value: tr(selectedCharacter.status, lang) },
              ].map(stat => (
                <div key={stat.key}>
                  <span className="font-ui text-xs text-gold-mid/70 uppercase">{t(stat.key)}</span>
                  <p className="font-body text-sm text-text-primary">{stat.value || t('chars.unknown')}</p>
                </div>
              ))}
            </div>

            <div className="flex border-b border-border overflow-x-auto">
              {detailTabs.map(tab => (
                <button key={tab.key} onClick={() => setDetailTab(tab.key)}
                  className={`font-ui text-sm px-5 py-3 whitespace-nowrap transition-colors border-b-2 ${detailTab === tab.key ? 'border-gold-bright text-gold-bright' : 'border-transparent text-text-secondary hover:text-gold-mid'}`}>
                  {t(tab.labelKey)}
                </button>
              ))}
            </div>

            <div className="p-6">
              {detailTab === 'biography' && (
                <p className="font-body text-text-secondary leading-relaxed">{tr(selectedCharacter.bio, lang)}</p>
              )}
              {detailTab === 'combat' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-heading text-lg text-gold-mid mb-3">{t('chars.weapon')}</h4>
                    <p className="font-body text-text-secondary mb-2">{tr(selectedCharacter.weapon, lang)}</p>
                    <p className="font-body text-text-secondary leading-relaxed">{tr(selectedCharacter.combatStyle, lang)}</p>
                  </div>
                  {selectedCharacter.weapons && selectedCharacter.weapons.length > 0 && (
                    <div>
                      <h4 className="font-heading text-lg text-gold-mid mb-3">{t('chars.weapon_mastery')}</h4>
                      <div className="space-y-3">
                        {selectedCharacter.weapons.map((weapon, idx) => (
                          <div key={idx} className="bg-surface rounded-lg p-4 border border-border">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-ui text-sm text-text-primary">{tr(weapon.name, lang)}</span>
                              <span className="font-ui text-xs text-gold-mid">{weapon.mastery}/10</span>
                            </div>
                            <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-gradient-to-r from-gold-mid to-gold-bright transition-all duration-700" style={{ width: `${(weapon.mastery / 10) * 100}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {detailTab === 'abilities' && (
                <div className="grid grid-cols-3 gap-6 text-center">
                  {(['strength', 'speed', 'magic'] as const).map(stat => (
                    <div key={stat} className="bg-surface rounded-lg p-4 border border-border">
                      <p className="font-ui text-sm text-gold-mid">{t(`common.${stat}`)}</p>
                    </div>
                  ))}
                </div>
              )}
              {(detailTab === 'relationships' || detailTab === 'quotes') && (
                <div className="text-center py-8">
                  <p className="font-body text-text-secondary italic">{t('chars.unknown')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <CrimsonFooter locale={locale} />
    </div>
  );
}
