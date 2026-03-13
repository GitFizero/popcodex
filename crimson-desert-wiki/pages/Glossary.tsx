// @ts-nocheck
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { glossaryEntries, type GlossaryEntry } from '@/crimson-desert-wiki/data/glossary';
import type { Lang } from '@/crimson-desert-wiki/context/I18nContext';

type CatFilter = 'ALL' | GlossaryEntry['category'];

const categoryLabels: Record<CatFilter, Record<Lang, string>> = {
  ALL: { fr: 'Tout', en: 'All', es: 'Todo', it: 'Tutto', ko: '전체' },
  CHARACTER: { fr: 'Personnages', en: 'Characters', es: 'Personajes', it: 'Personaggi', ko: '캐릭터' },
  LOCATION: { fr: 'Lieux', en: 'Locations', es: 'Lugares', it: 'Luoghi', ko: '지역' },
  FACTION: { fr: 'Factions', en: 'Factions', es: 'Facciones', it: 'Fazioni', ko: '세력' },
  MECHANIC: { fr: 'Mécaniques', en: 'Mechanics', es: 'Mecánicas', it: 'Meccaniche', ko: '메카닉' },
  CREATURE: { fr: 'Créatures', en: 'Creatures', es: 'Criaturas', it: 'Creature', ko: '크리처' },
  ITEM: { fr: 'Objets', en: 'Items', es: 'Objetos', it: 'Oggetti', ko: '아이템' },
};

const categoryColors: Record<string, string> = {
  CHARACTER: 'text-crimson-bright', LOCATION: 'text-gold-mid', FACTION: 'text-text-secondary',
  MECHANIC: 'text-[#4DB6AC]', CREATURE: 'text-crimson-fire', ITEM: 'text-gold-bright',
};

const pageTitles: Record<Lang, string> = {
  fr: 'Glossaire Crimson Desert | Tous les termes du jeu expliqués',
  en: 'Crimson Desert Glossary | All Game Terms Explained',
  es: 'Glosario Crimson Desert | Todos los términos del juego explicados',
  it: 'Glossario Crimson Desert | Tutti i termini del gioco spiegati',
  ko: 'Crimson Desert 용어집 | 모든 게임 용어 설명',
};

const pageDescs: Record<Lang, string> = {
  fr: 'Glossaire complet de Crimson Desert : personnages, lieux, factions, mécaniques de jeu et créatures. Tous les termes expliqués du jeu Pearl Abyss 2026.',
  en: 'Complete Crimson Desert glossary: characters, locations, factions, game mechanics and creatures. All game terms explained. Pearl Abyss 2026.',
  es: 'Glosario completo de Crimson Desert: personajes, lugares, facciones, mecánicas de juego y criaturas. Todos los términos del juego explicados. Pearl Abyss 2026.',
  it: 'Glossario completo di Crimson Desert: personaggi, luoghi, fazioni, meccaniche di gioco e creature. Tutti i termini del gioco spiegati. Pearl Abyss 2026.',
  ko: '크림슨 디저트 완전 용어집: 캐릭터, 지역, 세력, 게임 메카닉 및 크리처. 모든 게임 용어 설명. Pearl Abyss 2026.',
};

const Glossary = () => {
  const { lang } = useI18n();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<CatFilter>('ALL');

  const filtered = useMemo(() => {
    let entries = [...glossaryEntries];
    if (filter !== 'ALL') entries = entries.filter(e => e.category === filter);
    if (search) {
      const q = search.toLowerCase();
      entries = entries.filter(e => e.term.toLowerCase().includes(q) || tr(e.definition, lang).toLowerCase().includes(q));
    }
    return entries.sort((a, b) => a.term.localeCompare(b.term));
  }, [search, filter, lang]);

  // Generate FAQ items for schema
  const faqItems = useMemo(() =>
    glossaryEntries.slice(0, 10).map(e => ({
      question: lang === 'fr' ? `Qu'est-ce que ${e.term} dans Crimson Desert ?` :
                lang === 'es' ? `¿Qué es ${e.term} en Crimson Desert?` :
                lang === 'it' ? `Cos'è ${e.term} in Crimson Desert?` :
                `What is ${e.term} in Crimson Desert?`,
      answer: tr(e.definition, lang),
    })),
    [lang]
  );

  return (
    <main id="main-content" className="relative z-10 pt-24 pb-16 px-4">
      <SEOHead
        title={pageTitles[lang]}
        description={pageDescs[lang]}
        path="/glossary"
        lang={lang}
        faqItems={faqItems}
        breadcrumbs={[
          { name: lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : 'Home', path: '/' },
          { name: lang === 'fr' ? 'Glossaire' : lang === 'es' ? 'Glosario' : lang === 'it' ? 'Glossario' : 'Glossary', path: '/glossary' },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <GoldDivider variant="section" title={lang === 'fr' ? 'Glossaire' : lang === 'es' ? 'Glosario' : lang === 'it' ? 'Glossario' : 'Glossary'} />
        </RevealOnScroll>
        <h1 className="sr-only">{pageTitles[lang]}</h1>

        <RevealOnScroll>
          <p className="text-center font-body text-text-secondary max-w-2xl mx-auto mt-4 mb-8 text-sm">
            {lang === 'fr' ? 'Tous les termes, personnages, lieux et mécaniques de Crimson Desert expliqués.' :
             lang === 'es' ? 'Todos los términos, personajes, lugares y mecánicas de Crimson Desert explicados.' :
             lang === 'it' ? 'Tutti i termini, personaggi, luoghi e meccaniche di Crimson Desert spiegati.' :
             'All Crimson Desert terms, characters, locations, and mechanics explained.'}
          </p>
        </RevealOnScroll>

        {/* Search + Filters */}
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={lang === 'fr' ? 'Rechercher un terme…' : lang === 'es' ? 'Buscar un término…' : lang === 'it' ? 'Cerca un termine…' : 'Search a term…'}
              className="flex-1 bg-card-bg border border-border rounded-lg px-4 py-2 font-ui text-sm text-text-secondary placeholder:text-text-muted-custom focus:outline-none focus:border-gold-mid/50"
            />
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(categoryLabels) as CatFilter[]).map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-ui text-[0.6rem] tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                    filter === cat
                      ? 'bg-crimson-deep border-gold-mid/60 text-gold-bright'
                      : 'border-border text-text-muted-custom hover:border-gold-mid/30'
                  }`}
                >
                  {categoryLabels[cat][lang]}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Entries */}
        <div className="space-y-3">
          {filtered.map((entry, i) => (
            <RevealOnScroll key={entry.id} stagger={i * 30}>
              <div className="bg-card-bg/50 border border-border rounded-lg p-4 hover:border-gold-mid/30 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-heading text-base text-gold-bright">{entry.term}</h2>
                      <span className={`font-ui text-[0.5rem] tracking-[0.2em] ${categoryColors[entry.category] || 'text-text-muted-custom'}`}>
                        {categoryLabels[entry.category][lang].toUpperCase()}
                      </span>
                    </div>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {tr(entry.definition, lang)}
                    </p>
                  </div>
                  {entry.relatedLink && (
                    <Link
                      to={entry.relatedLink}
                      className="shrink-0 font-ui text-[0.6rem] tracking-wider text-gold-mid hover:text-gold-bright border border-border hover:border-gold-mid/40 px-2.5 py-1 rounded transition-colors mt-1"
                    >
                      →
                    </Link>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-body text-text-muted-custom mt-12 text-sm">
            {lang === 'fr' ? 'Aucun terme trouvé.' : lang === 'es' ? 'No se encontraron términos.' : lang === 'it' ? 'Nessun termine trovato.' : 'No terms found.'}
          </p>
        )}
      </div>
    </main>
  );
};

export default Glossary;
