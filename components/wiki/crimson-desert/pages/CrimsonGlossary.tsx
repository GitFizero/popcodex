'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import { glossaryEntries, type GlossaryEntry } from '@/lib/data/crimson-desert/glossary';

type GlossaryCategory = GlossaryEntry['category'];
type FilterCategory = 'ALL' | GlossaryCategory;

const categoryColors: Record<GlossaryCategory, string> = {
  CHARACTER: 'bg-crimson-core/60 border-crimson-bright/30',
  LOCATION: 'bg-gold-dark/60 border-gold-mid/30',
  FACTION: 'bg-smoke-mid/80 border-smoke-light/30',
  MECHANIC: 'bg-crimson-deep/70 border-crimson-deep/30',
  CREATURE: 'bg-crimson-fire/50 border-crimson-fire/30',
  ITEM: 'bg-gold-dark/40 border-gold-dark/30',
};

const categoryIcons: Record<GlossaryCategory, string> = {
  CHARACTER: '\u2694',
  LOCATION: '\u2302',
  FACTION: '\u2655',
  MECHANIC: '\u2699',
  CREATURE: '\u2620',
  ITEM: '\u2726',
};

const CrimsonGlossary = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const prefix = `/${locale}/crimson-desert`;
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categoryLabels: Record<GlossaryCategory, string> = {
    CHARACTER: lang === 'fr' ? 'Personnage' : lang === 'es' ? 'Personaje' : lang === 'it' ? 'Personaggio' : lang === 'ko' ? '캐릭터' : 'Character',
    LOCATION: lang === 'fr' ? 'Lieu' : lang === 'es' ? 'Lugar' : lang === 'it' ? 'Luogo' : lang === 'ko' ? '장소' : 'Location',
    FACTION: lang === 'fr' ? 'Faction' : lang === 'es' ? 'Facción' : lang === 'it' ? 'Fazione' : lang === 'ko' ? '세력' : 'Faction',
    MECHANIC: lang === 'fr' ? 'Mécanique' : lang === 'es' ? 'Mecánica' : lang === 'it' ? 'Meccanica' : lang === 'ko' ? '메카닉' : 'Mechanic',
    CREATURE: lang === 'fr' ? 'Créature' : lang === 'es' ? 'Criatura' : lang === 'it' ? 'Creatura' : lang === 'ko' ? '크리처' : 'Creature',
    ITEM: lang === 'fr' ? 'Objet' : lang === 'es' ? 'Objeto' : lang === 'it' ? 'Oggetto' : lang === 'ko' ? '아이템' : 'Item',
  };

  const categories: { key: FilterCategory; label: string }[] = useMemo(() => [
    { key: 'ALL', label: lang === 'fr' ? 'Tous' : lang === 'es' ? 'Todos' : lang === 'it' ? 'Tutti' : lang === 'ko' ? '전체' : 'All' },
    ...(['CHARACTER', 'LOCATION', 'FACTION', 'MECHANIC', 'CREATURE', 'ITEM'] as GlossaryCategory[]).map(key => ({
      key: key as FilterCategory,
      label: categoryLabels[key],
    })),
  ], [lang]);

  const filtered = useMemo(() => {
    let entries = [...glossaryEntries];

    if (activeCategory !== 'ALL') {
      entries = entries.filter(e => e.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      entries = entries.filter(e =>
        e.term.toLowerCase().includes(q) ||
        tr(e.definition, lang).toLowerCase().includes(q)
      );
    }

    // Sort alphabetically by term
    entries.sort((a, b) => a.term.localeCompare(b.term));

    return entries;
  }, [activeCategory, search, lang]);

  // Group by first letter
  const grouped = useMemo(() => {
    const groups: Record<string, GlossaryEntry[]> = {};
    for (const entry of filtered) {
      const letter = entry.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(entry);
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  // Available letters for quick navigation
  const availableLetters = useMemo(() => {
    return grouped.map(([letter]) => letter);
  }, [grouped]);

  const handleToggle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('nav.db.glossary')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          {/* Decorative scroll ornament */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <span className="font-display text-[18rem] text-gold-mid select-none" aria-hidden="true">&#x1F4DC;</span>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('nav.db.glossary')}
              </h1>
              <p className="font-body text-base text-text-secondary max-w-2xl mx-auto">
                {lang === 'fr'
                  ? 'Tous les termes, personnages, lieux et mécaniques du monde de Pywel.'
                  : lang === 'es'
                  ? 'Todos los términos, personajes, lugares y mecánicas del mundo de Pywel.'
                  : lang === 'it'
                  ? 'Tutti i termini, personaggi, luoghi e meccaniche del mondo di Pywel.'
                  : lang === 'ko'
                  ? '파이웰 세계의 모든 용어, 캐릭터, 장소, 메카닉을 정리했습니다.'
                  : 'All terms, characters, locations, and mechanics from the world of Pywel.'}
              </p>
              <div className="flex justify-center mt-6">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 pb-20">
          {/* Search & Filters */}
          <RevealOnScroll>
            <div className="bg-surface-elevated rounded-lg border border-border p-6 mb-8">
              {/* Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder={lang === 'fr' ? 'Rechercher un terme...' : lang === 'es' ? 'Buscar un término...' : lang === 'it' ? 'Cerca un termine...' : lang === 'ko' ? '용어 검색...' : 'Search terms...'}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 pl-10 font-body text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-gold-mid/50 transition-colors"
                  aria-label={lang === 'fr' ? 'Rechercher' : lang === 'es' ? 'Buscar' : lang === 'it' ? 'Cerca' : lang === 'ko' ? '검색' : 'Search'}
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-mid/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => { setActiveCategory(cat.key); setExpandedId(null); }}
                    className={`font-ui text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-200 ${
                      activeCategory === cat.key
                        ? 'bg-gold-mid/20 border-gold-mid/50 text-gold-bright'
                        : 'border-border text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'
                    }`}
                  >
                    {cat.key !== 'ALL' && (
                      <span className="mr-1.5">{categoryIcons[cat.key as GlossaryCategory]}</span>
                    )}
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Alphabet quick nav */}
          {availableLetters.length > 1 && (
            <RevealOnScroll>
              <div className="flex flex-wrap justify-center gap-1 mb-6">
                {availableLetters.map(letter => (
                  <a
                    key={letter}
                    href={`#glossary-${letter}`}
                    className="w-8 h-8 flex items-center justify-center rounded font-heading text-xs text-gold-mid hover:text-gold-bright hover:bg-gold-mid/10 border border-transparent hover:border-gold-mid/30 transition-all duration-200"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </RevealOnScroll>
          )}

          <GoldDivider variant="short" />

          {/* Results count */}
          <RevealOnScroll>
            <p className="font-ui text-[0.65rem] tracking-wider text-text-secondary text-center mt-6 mb-8">
              {filtered.length} {lang === 'fr' ? 'entrées' : lang === 'es' ? 'entradas' : lang === 'it' ? 'voci' : lang === 'ko' ? '항목' : 'entries'}
            </p>
          </RevealOnScroll>

          {/* Glossary entries */}
          {filtered.length === 0 ? (
            <RevealOnScroll>
              <div className="text-center py-20">
                <div className="font-display text-4xl text-gold-mid/20 mb-4">&#x1F4DC;</div>
                <p className="font-heading text-lg text-gold-mid/50">
                  {lang === 'fr' ? 'Aucun résultat trouvé' : lang === 'es' ? 'No se encontraron resultados' : lang === 'it' ? 'Nessun risultato trovato' : lang === 'ko' ? '결과를 찾을 수 없습니다' : 'No results found'}
                </p>
                <p className="font-body text-sm text-text-secondary mt-2">
                  {lang === 'fr' ? 'Essayez un autre terme ou catégorie.' : lang === 'es' ? 'Intente otro término o categoría.' : lang === 'it' ? 'Prova un altro termine o categoria.' : lang === 'ko' ? '다른 검색어나 카테고리를 사용해 보세요.' : 'Try a different term or category.'}
                </p>
              </div>
            </RevealOnScroll>
          ) : (
            <div className="space-y-10">
              {grouped.map(([letter, entries]) => (
                <div key={letter} id={`glossary-${letter}`}>
                  {/* Letter header */}
                  <RevealOnScroll>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-2xl text-gold-bright" style={{ textShadow: '0 0 20px hsl(var(--gold-glow)/0.3)' }}>
                        {letter}
                      </span>
                      <div className="flex-1 h-px bg-gold-mid/20" />
                      <span className="font-ui text-[0.6rem] tracking-wider text-text-secondary">
                        {entries.length}
                      </span>
                    </div>
                  </RevealOnScroll>

                  {/* Entries */}
                  <div className="space-y-2">
                    {entries.map((entry, i) => {
                      const isExpanded = expandedId === entry.id;
                      return (
                        <RevealOnScroll key={entry.id} stagger={i * 40}>
                          <div
                            className={`rounded-lg border transition-all duration-300 ${
                              isExpanded
                                ? 'bg-surface-elevated border-gold-mid/40 shadow-[0_0_15px_hsl(var(--gold-glow)/0.08)]'
                                : 'bg-surface border-border hover:border-gold-mid/20'
                            }`}
                          >
                            <button
                              onClick={() => handleToggle(entry.id)}
                              className="w-full text-left px-5 py-4 flex items-center gap-4"
                              aria-expanded={isExpanded}
                            >
                              {/* Category icon */}
                              <span className={`flex-shrink-0 w-8 h-8 rounded flex items-center justify-center text-sm border ${categoryColors[entry.category]} text-sand-pale`}>
                                {categoryIcons[entry.category]}
                              </span>

                              {/* Term */}
                              <div className="flex-1 min-w-0">
                                <h3 className={`font-heading text-sm transition-all duration-200 ${
                                  isExpanded ? 'text-gold-bright drop-shadow-[0_0_10px_hsl(var(--gold-glow))]' : 'text-text-primary'
                                }`}>
                                  {entry.term}
                                </h3>
                                {!isExpanded && (
                                  <p className="font-body text-xs text-text-secondary mt-0.5 line-clamp-1">
                                    {tr(entry.definition, lang)}
                                  </p>
                                )}
                              </div>

                              {/* Category badge */}
                              <span className={`hidden sm:inline-block flex-shrink-0 font-ui text-[0.5rem] tracking-[0.2em] px-2 py-0.5 rounded ${categoryColors[entry.category]} text-sand-pale`}>
                                {categoryLabels[entry.category]}
                              </span>

                              {/* Expand indicator */}
                              <svg
                                className={`flex-shrink-0 w-4 h-4 text-gold-mid/50 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            {/* Expanded content */}
                            {isExpanded && (
                              <div className="px-5 pb-5">
                                <div className="h-px bg-border mb-4" />
                                <p className="font-body text-sm text-text-primary leading-[1.8]">
                                  {tr(entry.definition, lang)}
                                </p>
                                {entry.relatedLink && (
                                  <Link
                                    href={`${prefix}${entry.relatedLink}`}
                                    className="inline-flex items-center gap-2 font-ui text-[0.65rem] tracking-wider text-gold-mid hover:text-gold-bright mt-4 transition-colors duration-200"
                                  >
                                    {lang === 'fr' ? 'En savoir plus' : lang === 'es' ? 'Saber más' : lang === 'it' ? 'Scopri di più' : lang === 'ko' ? '더 알아보기' : 'Learn more'}
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                )}
                              </div>
                            )}
                          </div>
                        </RevealOnScroll>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonGlossary;
