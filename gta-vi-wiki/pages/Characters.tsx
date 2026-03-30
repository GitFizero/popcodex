// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import { useApp } from '@/gta-vi-wiki/context/AppContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { characters, npcs } from '@/gta-vi-wiki/data/characters';

const Characters = () => {
  const { t, lang } = useI18n();
  const { selectedCharacterId, setSelectedCharacterId } = useApp();
  const [filter, setFilter] = useState<'ALL' | 'PLAYABLE' | 'COMPANION' | 'NPC'>('ALL');
  const [activeTab, setActiveTab] = useState<'biography' | 'combat' | 'abilities' | 'relationships' | 'quotes'>('biography');

  const selected = characters.find(c => c.id === selectedCharacterId) || characters[0];

  const tabs = [
    { key: 'biography', label: t('chars.tab.biography') },
    { key: 'combat', label: t('chars.tab.combat') },
    { key: 'abilities', label: t('chars.tab.abilities') },
    { key: 'relationships', label: t('chars.tab.relationships') },
    { key: 'quotes', label: t('chars.tab.quotes') },
  ];

  const filters = [
    { key: 'ALL', label: t('chars.all') },
    { key: 'PLAYABLE', label: t('chars.playable') },
    { key: 'COMPANION', label: t('chars.companion') },
    { key: 'NPC', label: t('chars.npc') },
  ];

  return (
    <>
      <SEOHead
        title={seo.characters.title[lang] || seo.characters.title.en}
        description={seo.characters.desc[lang] || seo.characters.desc.en}
        path="/characters"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.characters[lang], path: '/characters' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('chars.heroes')}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {/* Character selector */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {characters.map(c => (
              <button
                key={c.id}
                onClick={() => { setSelectedCharacterId(c.id); setActiveTab('biography'); }}
                className="px-6 py-3 rounded-lg font-bold text-sm tracking-wider transition-all duration-300"
                style={{
                  background: selected.id === c.id ? (c.colorTheme === 'pink' ? 'rgba(255, 20, 147, 0.2)' : 'rgba(0, 255, 255, 0.2)') : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${selected.id === c.id ? (c.colorTheme === 'pink' ? '#FF1493' : '#00FFFF') : 'rgba(255,255,255,0.1)'}`,
                  color: selected.id === c.id ? (c.colorTheme === 'pink' ? '#FF1493' : '#00FFFF') : 'rgba(255,255,255,0.6)',
                }}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Selected character detail */}
          {selected && (
            <div className="rounded-xl p-8 mb-16" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${selected.colorTheme === 'pink' ? 'rgba(255, 20, 147, 0.2)' : 'rgba(0, 255, 255, 0.2)'}` }}>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="w-full aspect-square rounded-lg flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${selected.colorTheme === 'pink' ? 'rgba(255, 20, 147, 0.15)' : 'rgba(0, 255, 255, 0.15)'}, transparent)` }}>
                    <span className="text-8xl font-black" style={{ color: selected.colorTheme === 'pink' ? 'rgba(255, 20, 147, 0.3)' : 'rgba(0, 255, 255, 0.3)' }}>{selected.name[0]}</span>
                  </div>
                  <h2 className="text-2xl font-black mb-1" style={{ color: selected.colorTheme === 'pink' ? '#FF1493' : '#00FFFF' }}>{selected.name}</h2>
                  <p className="text-xs tracking-wider uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(selected.role, lang)}</p>
                  <p className="text-sm italic mb-4" style={{ color: selected.colorTheme === 'pink' ? '#FF1493' : '#00FFFF' }}>"{tr(selected.signatureQuote, lang)}"</p>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between"><span style={{ color: 'rgba(255,255,255,0.4)' }}>{t('chars.origin')}</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>{tr(selected.origin, lang)}</span></div>
                    <div className="flex justify-between"><span style={{ color: 'rgba(255,255,255,0.4)' }}>{t('chars.weapon')}</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>{tr(selected.weapon, lang)}</span></div>
                    <div className="flex justify-between"><span style={{ color: 'rgba(255,255,255,0.4)' }}>{t('chars.affiliation')}</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>{tr(selected.affiliation, lang)}</span></div>
                    <div className="flex justify-between"><span style={{ color: 'rgba(255,255,255,0.4)' }}>{t('chars.status')}</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>{tr(selected.status, lang)}</span></div>
                  </div>

                  {/* Stats bars */}
                  <div className="mt-6 space-y-3">
                    {[
                      { label: t('common.strength'), value: selected.strength },
                      { label: t('common.speed'), value: selected.speed },
                      { label: t('common.magic'), value: selected.magic },
                    ].map(stat => (
                      <div key={stat.label}>
                        <div className="flex justify-between text-[0.65rem] mb-1"><span style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</span><span style={{ color: '#FF1493' }}>{stat.value}/10</span></div>
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <div className="h-full rounded-full transition-all duration-700" style={{ width: `${stat.value * 10}%`, background: 'linear-gradient(90deg, #FF1493, #00FFFF)' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-2/3">
                  {/* Tabs */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tabs.map(tab => (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as any)}
                        className="px-4 py-2 text-xs font-bold tracking-wider rounded transition-all"
                        style={{
                          background: activeTab === tab.key ? 'rgba(255, 20, 147, 0.15)' : 'transparent',
                          border: `1px solid ${activeTab === tab.key ? '#FF1493' : 'rgba(255,255,255,0.1)'}`,
                          color: activeTab === tab.key ? '#FF1493' : 'rgba(255,255,255,0.5)',
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab content */}
                  <div className="min-h-[300px]">
                    {activeTab === 'biography' && (
                      <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        {tr(selected.bio, lang)}
                      </div>
                    )}
                    {activeTab === 'combat' && (
                      <div>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>{tr(selected.combatStyle, lang)}</p>
                        <h4 className="text-xs tracking-wider uppercase mb-3" style={{ color: '#00FFFF' }}>{t('chars.weapon_mastery')}</h4>
                        <div className="space-y-3">
                          {selected.weapons.map(w => (
                            <div key={tr(w.name, lang)}>
                              <div className="flex justify-between text-xs mb-1"><span style={{ color: 'rgba(255,255,255,0.6)' }}>{tr(w.name, lang)}</span><span style={{ color: '#FF1493' }}>{w.mastery}/5</span></div>
                              <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <div className="h-full rounded-full" style={{ width: `${w.mastery * 20}%`, background: '#FF1493' }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeTab === 'abilities' && (
                      <div>
                        {selected.abilities.length === 0 ? (
                          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('chars.documented')} — {t('common.loading')}</p>
                        ) : (
                          <div className="grid gap-4">
                            {selected.abilities.map(a => (
                              <div key={tr(a.name, lang)} className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                                <h5 className="text-sm font-bold mb-1" style={{ color: '#FF1493' }}>{tr(a.name, lang)}</h5>
                                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{tr(a.description, lang)}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {activeTab === 'relationships' && (
                      <div className="space-y-4">
                        {selected.relations.length === 0 ? (
                          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('chars.no_relations')}</p>
                        ) : selected.relations.map(rel => {
                          const relChar = characters.find(c => c.id === rel.characterId) || npcs.find(n => n.id === rel.characterId);
                          return (
                            <div key={rel.characterId} className="p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-bold" style={{ color: 'white' }}>{relChar?.name || rel.characterId}</span>
                                <span className="text-[0.6rem] tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(0, 255, 255, 0.15)', color: '#00FFFF' }}>{t(`rel.${rel.type}`)}</span>
                              </div>
                              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(rel.description, lang)}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {activeTab === 'quotes' && (
                      <div className="space-y-6">
                        {selected.quotes.map((q, i) => (
                          <div key={i} className="pl-4" style={{ borderLeft: '2px solid #FF1493' }}>
                            <p className="text-sm italic mb-1" style={{ color: 'rgba(255,255,255,0.8)' }}>"{tr(q.text, lang)}"</p>
                            <p className="text-[0.65rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>-- {tr(q.context, lang)}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <NeonDivider variant="section" title={t('chars.denizens')} />

          {/* NPCs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {npcs.map(npc => (
              <RevealOnScroll key={npc.id}>
                <div className="p-5 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                  <h3 className="text-sm font-bold mb-1" style={{ color: 'white' }}>{npc.name}</h3>
                  <p className="text-[0.65rem] tracking-wider uppercase mb-2" style={{ color: '#00FFFF' }}>{tr(npc.role, lang)}</p>
                  <p className="text-[0.65rem] mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{tr(npc.faction, lang)}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(npc.lore, lang)}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Characters;
