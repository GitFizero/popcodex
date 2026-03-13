'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { characters } from '@/lib/data/gta-vi/characters';
import { characterImages } from '@/lib/data/gta-vi/characterImages';
import { characterSEO, getCharacterBySlug } from '@/lib/data/gta-vi/characterSlugs';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

type Tab = 'bio' | 'stats' | 'relations' | 'citations' | 'dossier';

const BASE = 'https://leonidawiki.com';

const CharacterDetail = ({ locale, slug }: { locale: string; slug: string }) => {
  const { lang, t } = useGtaI18n(locale);
  const [activeTab, setActiveTab] = useState<Tab>('bio');
  const [citationIdx, setCitationIdx] = useState(0);

  const entry = slug ? getCharacterBySlug(slug) : undefined;
  const characterId = entry?.[0];
  const seo = entry?.[1];
  const character = characterId ? characters.find(c => c.id === characterId) : undefined;

  const personJsonLd = character && seo ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: character.name,
    description: seo.description['en'],
    url: `${BASE}/personnages/${seo.slug}`,
    mainEntityOfPage: `${BASE}/personnages/${seo.slug}`,
    ...(characterId && characterImages[characterId] ? { image: characterImages[characterId].portrait } : {}),
  } : undefined;

  const breadcrumbLd = seo ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leonidawiki.com/' },
      { '@type': 'ListItem', position: 2, name: 'Characters', item: 'https://leonidawiki.com/characters' },
      { '@type': 'ListItem', position: 3, name: character?.name || '' },
    ],
  } : undefined;

  useEffect(() => {
    setActiveTab('bio');
    setCitationIdx(0);
  }, [slug]);

  useEffect(() => {
    if (activeTab !== 'citations' || !character) return;
    const id = setInterval(() => {
      setCitationIdx(i => (i + 1) % character.citations.length);
    }, 7000);
    return () => clearInterval(id);
  }, [activeTab, character]);

  if (!character || !seo) return null;

  const tabs: Tab[] = ['bio', 'stats', 'relations', 'citations', 'dossier'];
  const tabLabels: Record<Tab, string> = {
    bio: t('inline.biography'),
    stats: 'STATS',
    relations: t('characters.relations'),
    citations: t('inline.quotes'),
    dossier: 'DOSSIER',
  };

  const relatedCharacters = characters
    .filter(c => c.id !== character.id)
    .filter(c => character.relations.some(r => c.name.includes(r.name.split(' ')[0])))
    .slice(0, 4);

  const linkedCharacters = relatedCharacters.length > 0
    ? relatedCharacters
    : characters.filter(c => c.id !== character.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-bg-void pt-20 pb-32">
      {/* SEO metadata handled by page.tsx */}
      <nav className="max-w-5xl mx-auto px-4 mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 font-rajdhani text-[0.6rem] text-text-muted-vice">
          <li><Link href={`/${locale}/gta-vi`} className="hover:text-text-secondary transition-colors">{t('inline.home')}</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li><Link href={`/${locale}/gta-vi/characters`} className="hover:text-text-secondary transition-colors">{t('inline.characters')}</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-text-secondary">{character.name}</li>
        </ol>
      </nav>

      <div className="max-w-5xl mx-auto px-4">
        <Link href={`/${locale}/gta-vi/characters`} className="inline-flex items-center gap-2 font-rajdhani text-xs text-text-muted-vice hover:text-neon-cyan transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          {t('inline.allCharacters')}
        </Link>

        <RevealOnScroll>
          <div className="relative rounded-xl overflow-hidden mb-8">
            {characterImages[character.id] ? (
              <div className="relative">
                <img
                  src={characterImages[character.id].landscape}
                  alt={`${character.name} - Personnage GTA VI Grand Theft Auto 6`}
                  className="w-full h-56 sm:h-72 md:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-bg-void/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  {character.badge && (
                    <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-neon-gold/15 text-neon-gold mb-2 inline-block">
                      {t('inline.playable')}
                    </span>
                  )}
                  <h1 className={`font-bebas text-4xl sm:text-6xl ${character.neonClass}`}>
                    {character.name.toUpperCase()}
                  </h1>
                  <p className="font-rajdhani text-xs text-text-secondary tracking-wider mt-1">{character.role}</p>
                </div>
              </div>
            ) : (
              <div className={`relative p-8 sm:p-10 bg-gradient-to-br from-bg-card to-bg-raised`}>
                <div className={`absolute inset-0 bg-${character.colorClass}/5`} />
                <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-${character.colorClass}/10 to-transparent`} />
                <div className="relative z-10">
                  {character.badge && (
                    <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-neon-gold/15 text-neon-gold mb-2 inline-block">
                      {t('inline.playable')}
                    </span>
                  )}
                  <h1 className={`font-bebas text-4xl sm:text-6xl ${character.neonClass}`}>
                    {character.name.toUpperCase()}
                  </h1>
                  <p className="font-rajdhani text-xs text-text-secondary tracking-wider mt-1">{character.role}</p>
                </div>
              </div>
            )}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <blockquote className={`font-marker text-sm sm:text-base text-${character.colorClass}/70 text-center mb-10 px-4`}>
            {character.quotePreview}
          </blockquote>
        </RevealOnScroll>

        {character.video && (
          <RevealOnScroll>
            <div className="mb-10">
              <h2 className="font-bebas text-lg text-text-primary mb-3 text-center">
                {t('inline.videoClip')}
              </h2>
              <div className="rounded-xl overflow-hidden border border-border-subtle bg-bg-card">
                <video
                  src={character.video}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full aspect-video object-cover"
                  poster={characterImages[character.id]?.landscape}
                />
              </div>
            </div>
          </RevealOnScroll>
        )}

        <div className="flex gap-1.5 mb-6 overflow-x-auto pb-1">
          {tabs.map(tb => (
            <button
              key={tb}
              onClick={() => setActiveTab(tb)}
              className={`font-rajdhani text-[0.6rem] px-4 py-2 rounded tracking-widest whitespace-nowrap transition-colors ${
                activeTab === tb
                  ? `bg-${character.colorClass}/15 text-${character.colorClass}`
                  : 'bg-bg-card text-text-muted-vice hover:text-text-secondary border border-border-subtle'
              }`}
            >
              {tabLabels[tb]}
            </button>
          ))}
        </div>

        <RevealOnScroll>
          <div className="bg-bg-card rounded-xl p-6 sm:p-8 border border-neon-cyan/5 min-h-[400px]">
            {activeTab === 'bio' && (
              <div>
                <h2 className="font-bebas text-xl text-text-primary mb-4">
                  {t('inline.whoIs').replace('{name}', character.name)}
                </h2>
                {character.bio.map((p, i) => (
                  <p key={i} className="font-dm text-sm text-text-secondary leading-relaxed mb-4">{p}</p>
                ))}
                {character.keyDetail && (
                  <p className="font-marker text-sm text-neon-pink/70 mt-6 mb-8">{character.keyDetail}</p>
                )}
                <h3 className="font-bebas text-lg text-text-primary mb-3">
                  {t('inline.information')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(character.info).map(([k, v]) => (
                    <div key={k} className="bg-bg-raised rounded-lg p-3">
                      <span className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest">{k.toUpperCase()}</span>
                      <p className="font-dm text-xs text-text-primary mt-1">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'stats' && character.stats && (
              <div>
                <h2 className="font-bebas text-xl text-text-primary mb-4">
                  {t('inline.statsOf').replace('{name}', character.name)}
                </h2>
                <div className="space-y-4">
                  {Object.entries(character.stats).map(([key, val]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-1">
                        <span className="font-rajdhani text-xs text-text-secondary tracking-widest">{key.toUpperCase()}</span>
                        <span className={`font-bebas text-sm text-${character.colorClass}`}>{val}/10</span>
                      </div>
                      <div className="stat-bar h-2">
                        <div className={`stat-bar-fill bg-${character.colorClass}`} style={{ width: `${val * 10}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                {character.combatStyle && (
                  <p className="font-rajdhani text-xs text-text-muted-vice tracking-widest mt-6">
                    STYLE: {character.combatStyle}
                  </p>
                )}
              </div>
            )}
            {activeTab === 'stats' && !character.stats && (
              <p className="font-dm text-sm text-text-muted-vice">{t('inline.statsNotAvailable')}</p>
            )}

            {activeTab === 'relations' && (
              <div>
                <h2 className="font-bebas text-xl text-text-primary mb-4">
                  {t('inline.relationsOf').replace('{name}', character.name)}
                </h2>
                <div className="space-y-3">
                  {character.relations.map((r, i) => (
                    <div key={i} className="flex items-center gap-3 bg-bg-raised rounded-lg p-4">
                      <div className={`w-3 h-3 rounded-full bg-${r.color}`} />
                      <div>
                        <span className="font-barlow font-semibold text-sm text-text-primary">{r.name}</span>
                        <span className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest ml-2">{r.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'citations' && (
              <div>
                <h2 className="font-bebas text-xl text-text-primary mb-6">
                  {t('inline.quotesOf').replace('{name}', character.name)}
                </h2>
                <div className="min-h-[120px] flex items-center justify-center">
                  <p className={`font-marker text-base sm:text-lg text-${character.colorClass} text-center transition-opacity duration-500`}>
                    {character.citations[citationIdx]}
                  </p>
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {character.citations.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCitationIdx(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === citationIdx ? `bg-${character.colorClass}` : 'bg-bg-raised'
                      }`}
                    />
                  ))}
                </div>
                <p className="font-rajdhani text-[0.5rem] text-text-muted-vice text-center mt-4 tracking-wider">
                  SOURCE: ROCKSTARGAMES.COM/VI — © ROCKSTAR GAMES
                </p>
              </div>
            )}

            {activeTab === 'dossier' && character.dossier && (
              <div className="dossier-paper p-5 rounded-lg">
                <div className={`dossier-stamp ${character.dossier.stampColor} border-current text-xl`}>
                  {character.dossier.stamp}
                </div>
                <p className="font-courier text-[0.6rem] text-text-muted-vice mb-4 tracking-wider">
                  {character.dossier.header}
                </p>
                <div className="space-y-2 font-courier text-sm text-text-secondary">
                  <p><strong className="text-text-primary">NOM:</strong> {character.dossier.nom}</p>
                  <p><strong className="text-text-primary">STATUT:</strong> {character.dossier.statut}</p>
                  {Object.entries(character.dossier.fields).map(([k, v]) => (
                    <p key={k}><strong className="text-text-primary">{k.toUpperCase()}:</strong> {v}</p>
                  ))}
                  {character.dossier.notes && (
                    <p className="mt-4 text-text-muted-vice italic text-xs">{character.dossier.notes}</p>
                  )}
                </div>
              </div>
            )}
            {activeTab === 'dossier' && !character.dossier && (
              <p className="font-dm text-sm text-text-muted-vice">{t('inline.dossierNotAvailable')}</p>
            )}
          </div>
        </RevealOnScroll>

        <section className="mt-16">
          <h2 className="font-bebas text-2xl text-text-primary mb-6">
            {t('inline.relatedCharacters')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {linkedCharacters.map(c => {
              const cSeo = characterSEO[c.id];
              if (!cSeo) return null;
              return (
                <Link
                  key={c.id}
                  href={`/${locale}/gta-vi/characters/${cSeo.slug}`}
                  className="group bg-bg-card rounded-lg p-4 border border-border-subtle hover:border-neon-cyan/20 transition-all"
                >
                  {c.imageSquare ? (
                    <img
                      src={c.imageSquare}
                      alt={`${c.name} - Personnage GTA VI`}
                      className="w-full aspect-square object-cover rounded-lg mb-3"
                    />
                  ) : (
                    <div className={`w-full aspect-square rounded-lg bg-${c.colorClass}/10 flex items-center justify-center mb-3`}>
                      <span className={`font-bebas text-3xl text-${c.colorClass}`}>{c.name[0]}</span>
                    </div>
                  )}
                  <h3 className={`font-bebas text-sm ${c.neonClass} group-hover:opacity-80 transition-opacity`}>
                    {c.name}
                  </h3>
                  <p className="font-rajdhani text-[0.5rem] text-text-muted-vice">{c.role}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <p className="font-rajdhani text-[0.5rem] text-text-muted-vice text-center mt-12">
          {t('inline.copyrightCharacter')}
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: character.name,
            description: seo.description[lang],
            jobTitle: character.role,
            additionalProperty: [
              { '@type': 'PropertyValue', name: 'Fictional character', value: 'true' },
              { '@type': 'PropertyValue', name: 'First appearance', value: 'Grand Theft Auto VI' },
            ],
            isPartOf: {
              '@type': 'VideoGame',
              name: 'Grand Theft Auto VI',
              publisher: { '@type': 'Organization', name: 'Rockstar Games' },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://leonidawiki.com/personnages/${seo.slug}`,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: t('inline.home'), item: 'https://leonidawiki.com/' },
              { '@type': 'ListItem', position: 2, name: t('inline.characters'), item: 'https://leonidawiki.com/personnages' },
              { '@type': 'ListItem', position: 3, name: character.name, item: `https://leonidawiki.com/personnages/${seo.slug}` },
            ],
          }),
        }}
      />
    </div>
  );
};

export default CharacterDetail;
