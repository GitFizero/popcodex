// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n, tr } from '@/fable-wiki/context/I18nContext';
import { useApp } from '@/fable-wiki/context/AppContext';
import { characters } from '@/fable-wiki/data/characters';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Characters = () => {
  const { t, lang } = useI18n();
  const { selectedCharacterId, setSelectedCharacterId } = useApp();
  const [filter, setFilter] = useState<string>('ALL');
  const [activeTab, setActiveTab] = useState<string>('bio');

  const filters = [
    { key: 'ALL', label: t('chars.all') },
    { key: 'PLAYABLE', label: t('chars.playable') },
    { key: 'COMPANION', label: t('chars.companion') },
    { key: 'NPC', label: t('chars.npc') },
  ];

  const filtered = useMemo(() =>
    filter === 'ALL' ? characters : characters.filter(c => c.type === filter),
    [filter]
  );

  const selected = characters.find(c => c.id === selectedCharacterId) || characters[0];

  const tabs = [
    { key: 'bio', label: t('chars.tab.biography') },
    { key: 'combat', label: t('chars.tab.combat') },
    { key: 'abilities', label: t('chars.tab.abilities') },
    { key: 'relationships', label: t('chars.tab.relationships') },
    { key: 'quotes', label: t('chars.tab.quotes') },
  ];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
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

      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('home.characters.title')} />
        </RevealOnScroll>

        {/* Filter buttons */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-lg font-heading text-xs tracking-[0.15em] border transition-all duration-300
                  ${filter === f.key
                    ? 'bg-emerald-700 border-emerald-500 text-white'
                    : 'border-emerald-900/30 text-gray-400 hover:border-emerald-700/50 hover:text-emerald-400'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Character grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
          {filtered.map((char, i) => (
            <RevealOnScroll key={char.id} stagger={i * 100}>
              <button
                onClick={() => { setSelectedCharacterId(char.id); setActiveTab('bio'); }}
                className={`w-full text-left rounded-lg border p-4 transition-all duration-300 min-h-[160px] flex flex-col justify-end
                  ${selected.id === char.id
                    ? 'border-emerald-500 bg-emerald-900/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                    : 'border-emerald-900/30 hover:border-emerald-700/50 bg-[hsl(150,30%,6%)]'
                  }`}
              >
                <span className="font-body text-[0.55rem] tracking-[0.3em] text-yellow-500">{tr(char.role, lang)}</span>
                <h3 className="font-heading text-lg text-emerald-400 mt-1">{char.name}</h3>
                <p className="font-body text-[0.65rem] text-gray-500 mt-1">{char.faction}</p>
              </button>
            </RevealOnScroll>
          ))}
        </div>

        {/* Selected character detail */}
        <RevealOnScroll>
          <div className="mt-12 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-emerald-900/30" style={{ background: 'linear-gradient(135deg, hsl(150,30%,8%) 0%, hsl(150,30%,3%) 100%)' }}>
              <span className="font-body text-[0.6rem] tracking-[0.3em] text-yellow-500">{tr(selected.role, lang)}</span>
              <h2 className="font-display text-3xl text-emerald-400 mt-1">{selected.name}</h2>
              <p className="font-body text-sm text-gray-400 mt-2 italic">{tr(selected.signatureQuote, lang)}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="text-center">
                  <div className="font-display text-xl text-emerald-400">{selected.strength}</div>
                  <div className="font-body text-[0.6rem] text-gray-500">{t('combat.strength')}</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-xl text-emerald-400">{selected.speed}</div>
                  <div className="font-body text-[0.6rem] text-gray-500">{t('combat.skill')}</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-xl text-emerald-400">{selected.magic}</div>
                  <div className="font-body text-[0.6rem] text-gray-500">{t('combat.will')}</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-emerald-900/30">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 font-heading text-[0.7rem] tracking-[0.1em] whitespace-nowrap transition-colors
                    ${activeTab === tab.key
                      ? 'text-emerald-400 border-b-2 border-emerald-400'
                      : 'text-gray-500 hover:text-emerald-400'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6">
              {activeTab === 'bio' && (
                <div>
                  <p className="font-body text-sm text-gray-300 leading-relaxed whitespace-pre-line">{tr(selected.bio, lang)}</p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <span className="font-body text-[0.6rem] tracking-wider text-gray-500">{lang === 'fr' ? 'ORIGINE' : 'ORIGIN'}</span>
                      <p className="font-body text-sm text-gray-300 mt-1">{tr(selected.origin, lang)}</p>
                    </div>
                    <div>
                      <span className="font-body text-[0.6rem] tracking-wider text-gray-500">{lang === 'fr' ? 'ARME' : 'WEAPON'}</span>
                      <p className="font-body text-sm text-gray-300 mt-1">{tr(selected.weapon, lang)}</p>
                    </div>
                    <div>
                      <span className="font-body text-[0.6rem] tracking-wider text-gray-500">{lang === 'fr' ? 'AFFILIATION' : 'AFFILIATION'}</span>
                      <p className="font-body text-sm text-gray-300 mt-1">{tr(selected.affiliation, lang)}</p>
                    </div>
                    <div>
                      <span className="font-body text-[0.6rem] tracking-wider text-gray-500">{lang === 'fr' ? 'STATUT' : 'STATUS'}</span>
                      <p className="font-body text-sm text-gray-300 mt-1">{tr(selected.status, lang)}</p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'combat' && (
                <div>
                  <p className="font-body text-sm text-gray-300 leading-relaxed">{tr(selected.combatStyle, lang)}</p>
                  {selected.weapons.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-heading text-sm text-emerald-400 tracking-wider mb-3">{lang === 'fr' ? 'ARMES' : 'WEAPONS'}</h4>
                      <div className="space-y-3">
                        {selected.weapons.map((w, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="font-body text-sm text-gray-300">{tr(w.name, lang)}</span>
                            <div className="flex-1 h-1 bg-emerald-900/30 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${w.mastery * 10}%` }} />
                            </div>
                            <span className="font-body text-xs text-gray-500">{w.mastery}/10</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {activeTab === 'abilities' && (
                <div className="space-y-4">
                  {selected.abilities.length === 0 ? (
                    <p className="font-body text-sm text-gray-500 italic">{lang === 'fr' ? 'Aucune capacite documentee.' : 'No documented abilities.'}</p>
                  ) : selected.abilities.map((a, i) => (
                    <div key={i} className="p-4 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,6%)]">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-sm text-emerald-400">{tr(a.name, lang)}</span>
                        <span className="font-body text-[0.55rem] tracking-wider text-yellow-500 px-2 py-0.5 rounded bg-yellow-900/20">{a.type}</span>
                        <span className="font-body text-[0.55rem] text-gray-500">Lv.{a.level}</span>
                      </div>
                      <p className="font-body text-xs text-gray-400 mt-2">{tr(a.description, lang)}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'relationships' && (
                <div className="space-y-3">
                  {selected.relations.length === 0 ? (
                    <p className="font-body text-sm text-gray-500 italic">{lang === 'fr' ? 'Aucune relation documentee.' : 'No documented relationships.'}</p>
                  ) : selected.relations.map((r, i) => {
                    const relChar = characters.find(c => c.id === r.characterId);
                    return (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-emerald-900/30">
                        <span className="font-heading text-sm text-emerald-400">{relChar?.name || r.characterId}</span>
                        <span className="font-body text-[0.55rem] tracking-wider text-yellow-500 px-2 py-0.5 rounded bg-yellow-900/20">{r.type}</span>
                        <span className="font-body text-xs text-gray-400 flex-1">{tr(r.description, lang)}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {activeTab === 'quotes' && (
                <div className="space-y-4">
                  {selected.quotes.length === 0 ? (
                    <p className="font-body text-sm text-gray-500 italic">{lang === 'fr' ? 'Aucune citation documentee.' : 'No documented quotes.'}</p>
                  ) : selected.quotes.map((q, i) => (
                    <div key={i} className="border-l-2 border-emerald-500/40 pl-4">
                      <p className="font-body text-sm text-gray-200 italic">{tr(q.text, lang)}</p>
                      <p className="font-body text-[0.65rem] text-gray-500 mt-1">{tr(q.context, lang)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default Characters;
