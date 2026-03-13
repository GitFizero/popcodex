'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useGtaI18n, type Lang } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

interface FAQItem {
  question: Record<Lang, string>;
  answer: Record<Lang, string>;
  category: string;
}

const faqData: FAQItem[] = [
  // ── Release & Platforms ──
  {
    category: 'release',
    question: {
      fr: 'Quand sort GTA 6 ?',
      en: 'When does GTA 6 come out?',
      es: '¿Cuándo sale GTA 6?',
      it: 'Quando esce GTA 6?',
    },
    answer: {
      fr: 'GTA 6 sort le **19 novembre 2026** sur PlayStation 5 et Xbox Series X|S. Le jeu a été repoussé deux fois : initialement prévu pour l\'automne 2025, puis le 26 mai 2026, et enfin le 19 novembre 2026.',
      en: 'GTA 6 releases on **November 19, 2026** on PlayStation 5 and Xbox Series X|S. The game was delayed twice: originally planned for Fall 2025, then May 26, 2026, and finally November 19, 2026.',
      es: 'GTA 6 sale el **19 de noviembre de 2026** en PlayStation 5 y Xbox Series X|S. El juego fue retrasado dos veces: originalmente para otoño 2025, luego 26 de mayo de 2026, y finalmente 19 de noviembre de 2026.',
      it: 'GTA 6 esce il **19 novembre 2026** su PlayStation 5 e Xbox Series X|S. Il gioco è stato rinviato due volte: inizialmente previsto per l\'autunno 2025, poi il 26 maggio 2026, e infine il 19 novembre 2026.',
    },
  },
  {
    category: 'release',
    question: {
      fr: 'GTA 6 sort-il sur PC ?',
      en: 'Is GTA 6 coming to PC?',
      es: '¿GTA 6 sale en PC?',
      it: 'GTA 6 esce su PC?',
    },
    answer: {
      fr: 'En mars 2026, Rockstar Games n\'a **pas confirmé** de version PC. Le jeu sort exclusivement sur PS5 et Xbox Series X|S. Historiquement, Rockstar sort les versions PC 1 à 2 ans après les consoles (GTA V PC est sorti 18 mois après).',
      en: 'As of March 2026, Rockstar Games has **not confirmed** a PC version. The game launches exclusively on PS5 and Xbox Series X|S. Historically, Rockstar releases PC versions 1-2 years after consoles (GTA V PC came 18 months later).',
      es: 'A marzo de 2026, Rockstar Games **no ha confirmado** una versión para PC. El juego se lanza exclusivamente en PS5 y Xbox Series X|S. Históricamente, Rockstar lanza versiones de PC 1-2 años después de las consolas.',
      it: 'A marzo 2026, Rockstar Games **non ha confermato** una versione PC. Il gioco esce esclusivamente su PS5 e Xbox Series X|S. Storicamente, Rockstar rilascia le versioni PC 1-2 anni dopo le console.',
    },
  },
  {
    category: 'release',
    question: {
      fr: 'Quel est le prix de GTA 6 ?',
      en: 'How much will GTA 6 cost?',
      es: '¿Cuánto costará GTA 6?',
      it: 'Quanto costerà GTA 6?',
    },
    answer: {
      fr: 'Le prix officiel de GTA 6 n\'a **pas encore été annoncé** par Rockstar Games. Les précédents jeux AAA de Rockstar se sont lancés à 69,99 $ / 79,99 €. Des revendeurs comme Instant Gaming proposent déjà des précommandes à prix réduit.',
      en: 'The official price of GTA 6 has **not been announced** by Rockstar Games. Previous AAA Rockstar titles launched at $69.99 / €79.99. Retailers like Instant Gaming already offer discounted pre-orders.',
      es: 'El precio oficial de GTA 6 **no ha sido anunciado** por Rockstar Games. Los anteriores títulos AAA de Rockstar se lanzaron a 69,99 $ / 79,99 €.',
      it: 'Il prezzo ufficiale di GTA 6 **non è stato annunciato** da Rockstar Games. I precedenti titoli AAA di Rockstar sono stati lanciati a 69,99 $ / 79,99 €.',
    },
  },
  {
    category: 'release',
    question: {
      fr: 'Peut-on précommander GTA 6 ?',
      en: 'Can I pre-order GTA 6?',
      es: '¿Puedo reservar GTA 6?',
      it: 'Posso preordinare GTA 6?',
    },
    answer: {
      fr: 'Rockstar Games n\'a pas encore ouvert les précommandes officielles. Cependant, des revendeurs comme Instant Gaming proposent déjà d\'acheter des clés pour PS5, Xbox Series et PC. Consultez notre [page d\'achat](/acheter-gta-6) pour les meilleurs prix.',
      en: 'Rockstar Games has not yet opened official pre-orders. However, retailers like Instant Gaming already offer keys for PS5, Xbox Series, and PC. Check our [buy page](/acheter-gta-6) for the best prices.',
      es: 'Rockstar Games aún no ha abierto las reservas oficiales. Sin embargo, tiendas como Instant Gaming ya ofrecen claves para PS5, Xbox Series y PC. Consulta nuestra [página de compra](/acheter-gta-6).',
      it: 'Rockstar Games non ha ancora aperto i preordini ufficiali. Tuttavia, rivenditori come Instant Gaming offrono già chiavi per PS5, Xbox Series e PC. Consulta la nostra [pagina acquisto](/acheter-gta-6).',
    },
  },
  // ── Characters ──
  {
    category: 'characters',
    question: {
      fr: 'Qui sont les personnages principaux de GTA 6 ?',
      en: 'Who are the main characters in GTA 6?',
      es: '¿Quiénes son los personajes principales de GTA 6?',
      it: 'Chi sono i personaggi principali di GTA 6?',
    },
    answer: {
      fr: 'GTA 6 compte **deux protagonistes jouables** :\n\n1. **Lucia Caminos** — Première protagoniste féminine obligatoire de la franchise. Sortie du Leonida Penitentiary, elle rêve de la belle vie que sa mère imaginait depuis Liberty City.\n\n2. **Jason Duval** — Co-protagoniste, ex-militaire. Il travaille pour Brian Heder dans les Leonida Keys.\n\nLes personnages secondaires confirmés sont : Cal Hampton, Boobie Ike, Dre\'Quan Priest, Real Dimez (Bae-Luxe & Roxy), Raul Bautista et Brian Heder.',
      en: 'GTA 6 features **two playable protagonists**:\n\n1. **Lucia Caminos** — The first mandatory female protagonist in the franchise. Released from Leonida Penitentiary, she dreams of the good life her mother imagined since Liberty City.\n\n2. **Jason Duval** — Co-protagonist, ex-military. He works for Brian Heder in the Leonida Keys.\n\nConfirmed supporting characters: Cal Hampton, Boobie Ike, Dre\'Quan Priest, Real Dimez (Bae-Luxe & Roxy), Raul Bautista, and Brian Heder.',
      es: 'GTA 6 tiene **dos protagonistas jugables**:\n\n1. **Lucia Caminos** — Primera protagonista femenina obligatoria de la franquicia. Liberada del Leonida Penitentiary.\n\n2. **Jason Duval** — Co-protagonista, ex-militar. Trabaja para Brian Heder en los Leonida Keys.\n\nPersonajes secundarios confirmados: Cal Hampton, Boobie Ike, Dre\'Quan Priest, Real Dimez, Raul Bautista y Brian Heder.',
      it: 'GTA 6 ha **due protagonisti giocabili**:\n\n1. **Lucia Caminos** — Prima protagonista femminile obbligatoria del franchise. Uscita dal Leonida Penitentiary.\n\n2. **Jason Duval** — Co-protagonista, ex-militare. Lavora per Brian Heder nei Leonida Keys.\n\nPersonaggi secondari confermati: Cal Hampton, Boobie Ike, Dre\'Quan Priest, Real Dimez, Raul Bautista e Brian Heder.',
    },
  },
  {
    category: 'characters',
    question: {
      fr: 'GTA 6 a-t-il une protagoniste féminine ?',
      en: 'Does GTA 6 have a female protagonist?',
      es: '¿GTA 6 tiene una protagonista femenina?',
      it: 'GTA 6 ha una protagonista femminile?',
    },
    answer: {
      fr: 'Oui. **Lucia Caminos** est la première protagoniste féminine obligatoire de la franchise Grand Theft Auto. C\'est un des deux personnages jouables avec Jason Duval.',
      en: 'Yes. **Lucia Caminos** is the first mandatory female protagonist in the Grand Theft Auto franchise. She is one of two playable characters alongside Jason Duval.',
      es: 'Sí. **Lucia Caminos** es la primera protagonista femenina obligatoria de la franquicia Grand Theft Auto.',
      it: 'Sì. **Lucia Caminos** è la prima protagonista femminile obbligatoria del franchise Grand Theft Auto.',
    },
  },
  // ── Map & Setting ──
  {
    category: 'map',
    question: {
      fr: 'Où se déroule GTA 6 ?',
      en: 'Where does GTA 6 take place?',
      es: '¿Dónde se desarrolla GTA 6?',
      it: 'Dove si svolge GTA 6?',
    },
    answer: {
      fr: 'GTA 6 se déroule dans l\'**état fictif de Leonida**, inspiré de la Floride. La ville principale est **Vice City**, basée sur Miami. Les autres zones confirmées sont : Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia et Mount Kalaga.',
      en: 'GTA 6 takes place in the **fictional State of Leonida**, inspired by Florida. The main city is **Vice City**, based on Miami. Other confirmed zones: Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.',
      es: 'GTA 6 se desarrolla en el **estado ficticio de Leonida**, inspirado en Florida. La ciudad principal es **Vice City**, basada en Miami. Otras zonas confirmadas: Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia y Mount Kalaga.',
      it: 'GTA 6 si svolge nello **stato fittizio di Leonida**, ispirato alla Florida. La città principale è **Vice City**, basata su Miami. Altre zone confermate: Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e Mount Kalaga.',
    },
  },
  {
    category: 'map',
    question: {
      fr: 'La carte de GTA 6 est-elle plus grande que celle de GTA 5 ?',
      en: 'Is the GTA 6 map bigger than GTA 5?',
      es: '¿El mapa de GTA 6 es más grande que el de GTA 5?',
      it: 'La mappa di GTA 6 è più grande di quella di GTA 5?',
    },
    answer: {
      fr: 'Rockstar n\'a pas confirmé les dimensions exactes. L\'analyse des trailers suggère que la carte est **significativement plus grande** que Los Santos dans GTA 5, incluant des zones urbaines, des marais, des îles, des ports, des montagnes et des zones rurales.',
      en: 'Rockstar has not confirmed exact dimensions. Trailer analysis suggests the map is **significantly larger** than GTA V\'s Los Santos, including urban areas, swamps, islands, ports, mountains, and rural backcountry.',
      es: 'Rockstar no ha confirmado las dimensiones exactas. El análisis de los tráilers sugiere que el mapa es **significativamente más grande** que Los Santos de GTA 5.',
      it: 'Rockstar non ha confermato le dimensioni esatte. L\'analisi dei trailer suggerisce che la mappa è **significativamente più grande** di Los Santos di GTA 5.',
    },
  },
  // ── Story ──
  {
    category: 'story',
    question: {
      fr: 'Quelle est l\'histoire de GTA 6 ?',
      en: 'What is the GTA 6 story about?',
      es: '¿De qué trata la historia de GTA 6?',
      it: 'Di cosa parla la storia di GTA 6?',
    },
    answer: {
      fr: 'Synopsis officiel de Rockstar Games : *"Jason et Lucia ont toujours su que les dés étaient pipés contre eux. Mais quand un coup facile tourne mal, ils se retrouvent du côté le plus sombre de l\'endroit le plus ensoleillé d\'Amérique, au cœur d\'une conspiration criminelle qui s\'étend à travers l\'état de Leonida — forcés de se reposer l\'un sur l\'autre plus que jamais s\'ils veulent s\'en sortir vivants."*',
      en: 'Official synopsis from Rockstar Games: *"Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they want to make it out alive."*',
      es: 'Sinopsis oficial de Rockstar Games: *"Jason y Lucia siempre supieron que las cartas estaban en su contra. Pero cuando un golpe fácil sale mal, se encuentran en el lado más oscuro del lugar más soleado de América, en medio de una conspiración criminal que se extiende por el estado de Leonida."*',
      it: 'Sinossi ufficiale di Rockstar Games: *"Jason e Lucia hanno sempre saputo che il mazzo era truccato contro di loro. Ma quando un colpo facile va storto, si ritrovano nel lato più oscuro del posto più soleggiato d\'America, nel mezzo di una cospirazione criminale che si estende per lo stato di Leonida."*',
    },
  },
  // ── Gameplay ──
  {
    category: 'gameplay',
    question: {
      fr: 'Peut-on changer de personnage dans GTA 6 ?',
      en: 'Can you switch characters in GTA 6?',
      es: '¿Se puede cambiar de personaje en GTA 6?',
      it: 'Si può cambiare personaggio in GTA 6?',
    },
    answer: {
      fr: 'Oui, GTA 6 dispose d\'un **système dual protagoniste** permettant de basculer entre Lucia et Jason (similaire au système à 3 personnages de GTA V).',
      en: 'Yes, GTA 6 features a **dual protagonist system** allowing players to switch between Lucia and Jason (similar to GTA V\'s 3-character system).',
      es: 'Sí, GTA 6 tiene un **sistema de doble protagonista** que permite cambiar entre Lucia y Jason.',
      it: 'Sì, GTA 6 ha un **sistema dual protagonista** che permette di passare tra Lucia e Jason.',
    },
  },
  {
    category: 'gameplay',
    question: {
      fr: 'Y aura-t-il des codes de triche dans GTA 6 ?',
      en: 'Will GTA 6 have cheat codes?',
      es: '¿GTA 6 tendrá trucos?',
      it: 'GTA 6 avrà codici trucchi?',
    },
    answer: {
      fr: 'Rockstar Games n\'a pas encore confirmé les codes de triche pour GTA 6. Cependant, **chaque jeu GTA principal** a inclus des cheats. Notre guide sera mis à jour à la sortie : [Guide Cheat Codes GTA 6](/blog/gta-6-codes-triche-cheats-liste-complete).',
      en: 'Rockstar Games has not confirmed cheat codes for GTA 6. However, **every main GTA game** has included cheats. Our guide will be updated at launch: [GTA 6 Cheat Codes Guide](/blog/gta-6-cheat-codes-complete-list-all-cheats).',
      es: 'Rockstar Games no ha confirmado trucos para GTA 6. Sin embargo, **cada juego GTA principal** ha incluido trucos.',
      it: 'Rockstar Games non ha confermato codici trucchi per GTA 6. Tuttavia, **ogni gioco GTA principale** ha incluso trucchi.',
    },
  },
  {
    category: 'gameplay',
    question: {
      fr: 'Y aura-t-il un mode multijoueur / GTA 6 Online ?',
      en: 'Will there be GTA 6 Online / multiplayer?',
      es: '¿Habrá GTA 6 Online / multijugador?',
      it: 'Ci sarà GTA 6 Online / multiplayer?',
    },
    answer: {
      fr: 'Rockstar Games n\'a pas officiellement confirmé les détails du mode multijoueur. Vu le succès massif de GTA Online avec GTA V, un composant multijoueur est **largement attendu**.',
      en: 'Rockstar Games has not officially confirmed multiplayer details. Given GTA Online\'s massive success with GTA V, a multiplayer component is **widely expected**.',
      es: 'Rockstar Games no ha confirmado oficialmente los detalles del multijugador. Dado el éxito masivo de GTA Online, se **espera ampliamente** un componente multijugador.',
      it: 'Rockstar Games non ha confermato ufficialmente i dettagli del multiplayer. Dato il successo massiccio di GTA Online, un componente multiplayer è **ampiamente atteso**.',
    },
  },
  // ── Trailers ──
  {
    category: 'trailers',
    question: {
      fr: 'Combien de trailers GTA 6 existe-t-il ?',
      en: 'How many GTA 6 trailers are there?',
      es: '¿Cuántos tráilers de GTA 6 hay?',
      it: 'Quanti trailer di GTA 6 ci sono?',
    },
    answer: {
      fr: 'Deux trailers officiels :\n\n1. **Trailer 1** (5 décembre 2023) — Musique : "Love Is a Long Road" de Tom Petty\n2. **Trailer 2** (30 janvier 2025) — Musique : "Hot Together" des Pointer Sisters. Record mondial : **475 millions de vues en 24h**.',
      en: 'Two official trailers:\n\n1. **Trailer 1** (December 5, 2023) — Music: "Love Is a Long Road" by Tom Petty\n2. **Trailer 2** (January 30, 2025) — Music: "Hot Together" by Pointer Sisters. World record: **475 million views in 24 hours**.',
      es: 'Dos tráilers oficiales:\n\n1. **Tráiler 1** (5 de diciembre de 2023) — Música: "Love Is a Long Road" de Tom Petty\n2. **Tráiler 2** (30 de enero de 2025) — Música: "Hot Together" de Pointer Sisters. Récord mundial: **475 millones de vistas en 24h**.',
      it: 'Due trailer ufficiali:\n\n1. **Trailer 1** (5 dicembre 2023) — Musica: "Love Is a Long Road" di Tom Petty\n2. **Trailer 2** (30 gennaio 2025) — Musica: "Hot Together" delle Pointer Sisters. Record mondiale: **475 milioni di visualizzazioni in 24 ore**.',
    },
  },
];

const categoryLabels: Record<string, Record<Lang, string>> = {
  release: { fr: '📅 Date de Sortie & Plateformes', en: '📅 Release & Platforms', es: '📅 Lanzamiento y Plataformas', it: '📅 Uscita e Piattaforme' },
  characters: { fr: '👥 Personnages', en: '👥 Characters', es: '👥 Personajes', it: '👥 Personaggi' },
  map: { fr: '🗺️ Carte & Lieux', en: '🗺️ Map & Locations', es: '🗺️ Mapa y Ubicaciones', it: '🗺️ Mappa e Luoghi' },
  story: { fr: '📖 Histoire', en: '📖 Story', es: '📖 Historia', it: '📖 Storia' },
  gameplay: { fr: '🎮 Gameplay', en: '🎮 Gameplay', es: '🎮 Gameplay', it: '🎮 Gameplay' },
  trailers: { fr: '🎬 Trailers', en: '🎬 Trailers', es: '🎬 Tráilers', it: '🎬 Trailer' },
};

const categoryOrder = ['release', 'characters', 'map', 'story', 'gameplay', 'trailers'];

const FAQPage = ({ locale }: { locale: string }) => {
  const { lang, t } = useGtaI18n(locale);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question[lang],
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer[lang].replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
  };

  const renderMarkdown = (text: string) => {
    // Simple bold + link parsing
    return text.split('\n').map((line, i) => {
      if (!line.trim()) return <br key={i} />;
      const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>;
        }
        const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          return <Link key={j} href={`/${locale}/gta-vi${linkMatch[2]}`} className="text-neon-cyan hover:underline">{linkMatch[1]}</Link>;
        }
        return <span key={j}>{part}</span>;
      });
      return <p key={i} className="mb-1">{parts}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-16 pb-20">
      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 mb-6 pt-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 font-rajdhani text-[0.6rem] text-text-muted-vice">
          <li><Link href={`/${locale}/gta-vi`} className="hover:text-text-secondary transition-colors">HOME</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-text-secondary">FAQ</li>
        </ol>
      </nav>

      {/* Header */}
      <RevealOnScroll>
        <section className="text-center mb-12 px-4">
          <h1 className="font-bebas text-4xl sm:text-6xl text-text-primary mb-2">
            FAQ <span className="neon-cyan-text">GTA VI</span>
          </h1>
          <p className="font-barlow font-light text-sm text-text-secondary max-w-xl mx-auto" data-speakable="true">
            {lang === 'fr' && 'Toutes les réponses aux questions les plus fréquentes sur Grand Theft Auto VI.'}
            {lang === 'en' && 'All answers to the most frequently asked questions about Grand Theft Auto VI.'}
            {lang === 'es' && 'Todas las respuestas a las preguntas más frecuentes sobre Grand Theft Auto VI.'}
            {lang === 'it' && 'Tutte le risposte alle domande più frequenti su Grand Theft Auto VI.'}
          </p>
          <p className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest mt-2">
            {t('footer.disclaimer')}
          </p>
        </section>
      </RevealOnScroll>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {categoryOrder.map(cat => {
          const items = faqData.filter(f => f.category === cat);
          if (items.length === 0) return null;
          return (
            <RevealOnScroll key={cat}>
              <section>
                <h2 className="font-bebas text-2xl sm:text-3xl text-text-primary mb-4 border-b border-neon-cyan/15 pb-2">
                  {categoryLabels[cat]?.[lang] || cat}
                </h2>
                <div className="space-y-2">
                  {items.map((item, _) => {
                    const globalIdx = faqData.indexOf(item);
                    const isOpen = openItems.has(globalIdx);
                    return (
                      <div
                        key={globalIdx}
                        className="border border-text-muted-vice/10 rounded-lg overflow-hidden bg-bg-card/30 hover:border-neon-cyan/20 transition-colors"
                      >
                        <button
                          onClick={() => toggle(globalIdx)}
                          className="w-full flex items-center justify-between px-5 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-barlow font-medium text-sm text-text-primary pr-4" data-speakable="true">
                            {item.question[lang]}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-neon-cyan shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-text-muted-vice shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 font-barlow font-light text-sm text-text-secondary leading-relaxed" data-speakable="true">
                            {renderMarkdown(item.answer[lang])}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* CTA */}
      <RevealOnScroll>
        <section className="max-w-4xl mx-auto px-4 mt-16 text-center">
          <div className="border border-neon-gold/20 rounded-xl p-8 bg-bg-card/20">
            <h2 className="font-bebas text-2xl text-neon-gold mb-3">
              {lang === 'fr' ? 'PRÊT À JOUER ?' : lang === 'en' ? 'READY TO PLAY?' : lang === 'es' ? '¿LISTO PARA JUGAR?' : 'PRONTO A GIOCARE?'}
            </h2>
            <p className="font-barlow font-light text-xs text-text-secondary mb-5">
              {lang === 'fr' ? 'Réservez votre copie au meilleur prix.' : lang === 'en' ? 'Get your copy at the best price.' : lang === 'es' ? 'Reserva tu copia al mejor precio.' : 'Prenota la tua copia al miglior prezzo.'}
            </p>
            <Link
              href={`/${locale}/gta-vi/buy`}
              className="inline-block font-rajdhani text-xs tracking-widest px-6 py-3 border border-neon-gold/50 text-neon-gold hover:bg-neon-gold/10 transition-colors rounded"
            >
              {lang === 'fr' ? 'ACHETER GTA 6 →' : lang === 'en' ? 'BUY GTA 6 →' : lang === 'es' ? 'COMPRAR GTA 6 →' : 'ACQUISTA GTA 6 →'}
            </Link>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
};

export default FAQPage;
