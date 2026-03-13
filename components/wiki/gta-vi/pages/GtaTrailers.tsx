'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Play } from 'lucide-react';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

const trailers = [
  {
    id: 'trailer-1',
    titleFr: 'Grand Theft Auto VI — Trailer 1',
    titleEn: 'Grand Theft Auto VI — Trailer 1',
    youtubeId: 'QdBZY2fkU-0',
    descriptionFr: 'Le tout premier trailer officiel de GTA VI, dévoilé par Rockstar Games. Découvrez Leonida, Vice City et les protagonistes Jason et Lucia.',
    descriptionEn: 'The very first official GTA VI trailer, unveiled by Rockstar Games. Discover Leonida, Vice City and protagonists Jason and Lucia.',
    descriptionEs: 'El primer tráiler oficial de GTA VI, revelado por Rockstar Games. Descubre Leonida, Vice City y los protagonistas Jason y Lucia.',
    descriptionIt: 'Il primo trailer ufficiale di GTA VI, svelato da Rockstar Games. Scopri Leonida, Vice City e i protagonisti Jason e Lucia.',
    date: '2023-12-05',
  },
  {
    id: 'trailer-2',
    titleFr: 'Grand Theft Auto VI — Trailer 2',
    titleEn: 'Grand Theft Auto VI — Trailer 2',
    youtubeId: 'VQRLujxTm3c',
    descriptionFr: 'Le second trailer officiel de GTA VI par Rockstar Games. Plongez plus profondément dans l\'univers de Leonida et ses personnages.',
    descriptionEn: 'The second official GTA VI trailer by Rockstar Games. Dive deeper into the world of Leonida and its characters.',
    descriptionEs: 'El segundo tráiler oficial de GTA VI por Rockstar Games. Sumérgete más profundamente en el universo de Leonida y sus personajes.',
    descriptionIt: 'Il secondo trailer ufficiale di GTA VI di Rockstar Games. Immergiti più a fondo nel mondo di Leonida e dei suoi personaggi.',
    date: '2025-01-30',
  },
];

const Trailers = ({ locale }: { locale: string }) => {
  const { lang, t, tr: tx } = useGtaI18n(locale);

  const getDesc = (trailer: typeof trailers[0]) => {
    return tx({
      fr: trailer.descriptionFr,
      en: trailer.descriptionEn,
      es: trailer.descriptionEs,
      it: trailer.descriptionIt,
    });
  };

  return (
    <div className="min-h-screen bg-[hsl(220,67%,2%)] pt-20 pb-32">
      <nav className="max-w-5xl mx-auto px-4 mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 font-rajdhani text-[0.6rem] text-text-muted-vice">
          <li><Link href="/" className="hover:text-text-secondary transition-colors">{t('inline.home')}</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-text-secondary">{t('inline.trailers')}</li>
        </ol>
      </nav>

      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Play className="w-5 h-5 text-neon-pink" />
              <span className="font-rajdhani text-[0.6rem] text-neon-pink tracking-[0.3em]">
                ROCKSTAR GAMES
              </span>
            </div>
            <h1 className="font-bebas text-5xl sm:text-7xl text-text-primary mb-3">
              {t('inline.officialTrailers')}
            </h1>
            <p className="font-dm text-sm text-text-secondary max-w-xl mx-auto">
              {t('inline.trailersDesc')}
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-12">
          {trailers.map((trailer, index) => (
            <RevealOnScroll key={trailer.id}>
              <article className="bg-[hsl(213,33%,13%)] rounded-xl border border-border-subtle overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer.youtubeId}`}
                    title={lang === 'fr' ? trailer.titleFr : trailer.titleEn}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="font-rajdhani text-[0.55rem] text-neon-cyan tracking-widest">
                    {trailer.date}
                  </span>
                  <h2 className="font-bebas text-xl sm:text-3xl text-text-primary mt-1">
                    {lang === 'fr' ? trailer.titleFr : trailer.titleEn}
                  </h2>
                  <p className="font-dm text-xs sm:text-sm text-text-secondary mt-2">
                    {getDesc(trailer)}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <p className="font-rajdhani text-[0.5rem] text-text-muted-vice text-center mt-12">
          {t('inline.copyrightTrailers')}
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'GTA VI Official Trailers',
            itemListElement: trailers.map((t, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'VideoObject',
                name: t.titleEn,
                description: t.descriptionEn,
                uploadDate: t.date,
                embedUrl: `https://www.youtube.com/embed/${t.youtubeId}`,
                thumbnailUrl: `https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg`,
                publisher: { '@type': 'Organization', name: 'Rockstar Games' },
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default Trailers;
