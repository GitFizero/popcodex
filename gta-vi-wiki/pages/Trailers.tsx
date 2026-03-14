// @ts-nocheck
import { useState, useCallback } from 'react';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';

interface TrailerData {
  id: string;
  youtubeId: string;
  title: Record<string, string>;
  description: Record<string, string>;
  date: string;
  duration: string;
}

const trailers: TrailerData[] = [
  {
    id: 'trailer-1',
    youtubeId: 'QdBZY2fkU-0',
    title: {
      fr: 'GTA VI — Trailer 1 Officiel',
      en: 'GTA VI — Official Trailer 1',
      es: 'GTA VI — Tráiler 1 Oficial',
      pt: 'GTA VI — Trailer 1 Oficial',
      it: 'GTA VI — Trailer 1 Ufficiale',
      ko: 'GTA VI — 공식 트레일러 1',
    },
    description: {
      fr: 'Le tout premier trailer de Grand Theft Auto VI, dévoilé par Rockstar Games en décembre 2023. Découvrez Vice City, Lucia et Jason pour la première fois.',
      en: 'The very first trailer for Grand Theft Auto VI, revealed by Rockstar Games in December 2023. Discover Vice City, Lucia, and Jason for the first time.',
      es: 'El primer tráiler de Grand Theft Auto VI, revelado por Rockstar Games en diciembre de 2023. Descubre Vice City, Lucia y Jason por primera vez.',
      pt: 'O primeiro trailer de Grand Theft Auto VI, revelado pela Rockstar Games em dezembro de 2023. Descubra Vice City, Lucia e Jason pela primeira vez.',
      it: 'Il primo trailer di Grand Theft Auto VI, rivelato da Rockstar Games a dicembre 2023. Scopri Vice City, Lucia e Jason per la prima volta.',
      ko: '2023년 12월 Rockstar Games가 공개한 Grand Theft Auto VI 첫 번째 트레일러. 바이스 시티, 루시아, 제이슨을 처음 만나보세요.',
    },
    date: '2023-12-05',
    duration: '1:31',
  },
  {
    id: 'trailer-2',
    youtubeId: 'VQRLujxTm3c',
    title: {
      fr: 'GTA VI — Trailer 2 Officiel',
      en: 'GTA VI — Official Trailer 2',
      es: 'GTA VI — Tráiler 2 Oficial',
      pt: 'GTA VI — Trailer 2 Oficial',
      it: 'GTA VI — Trailer 2 Ufficiale',
      ko: 'GTA VI — 공식 트레일러 2',
    },
    description: {
      fr: 'Le deuxième trailer officiel de GTA VI par Rockstar Games. Plus de gameplay, de personnages et un aperçu approfondi du monde ouvert de Leonida.',
      en: 'The second official GTA VI trailer by Rockstar Games. More gameplay, characters, and an in-depth look at the open world of Leonida.',
      es: 'El segundo tráiler oficial de GTA VI por Rockstar Games. Más gameplay, personajes y una vista detallada del mundo abierto de Leonida.',
      pt: 'O segundo trailer oficial de GTA VI pela Rockstar Games. Mais gameplay, personagens e uma visão aprofundada do mundo aberto de Leonida.',
      it: 'Il secondo trailer ufficiale di GTA VI da Rockstar Games. Più gameplay, personaggi e uno sguardo approfondito al mondo aperto di Leonida.',
      ko: 'Rockstar Games의 두 번째 공식 GTA VI 트레일러. 더 많은 게임플레이, 캐릭터, 그리고 레오니다 오픈 월드 심층 공개.',
    },
    date: '2025-01-31',
    duration: '2:01',
  },
];

const Trailers = () => {
  const { t, lang } = useI18n();
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = useCallback((id: string) => {
    setPlayingId(id);
  }, []);

  return (
    <>
      <SEOHead
        title={seo.trailers?.title[lang] || seo.trailers?.title.en || 'GTA VI Trailers'}
        description={seo.trailers?.desc[lang] || seo.trailers?.desc.en || ''}
        path="/trailers"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.trailers?.[lang] || 'Trailers', path: '/trailers' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('trailers.title')}
            </h1>
            <p className="text-center text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {t('trailers.subtitle')}
            </p>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="space-y-16 pb-20">
            {trailers.map((trailer, index) => (
              <RevealOnScroll key={trailer.id}>
                <article className="rounded-xl overflow-hidden border" style={{ background: 'rgba(20, 0, 30, 0.6)', borderColor: 'rgba(255, 20, 147, 0.15)' }}>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    {playingId === trailer.id ? (
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${trailer.youtubeId}?autoplay=1&rel=0`}
                        title={tr(trailer.title, lang)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <button
                        onClick={() => handlePlay(trailer.id)}
                        className="absolute inset-0 w-full h-full group cursor-pointer"
                        aria-label={`${t('trailers.play')} ${tr(trailer.title, lang)}`}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${trailer.youtubeId}/maxresdefault.jpg`}
                          alt={tr(trailer.title, lang)}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div
                            className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            style={{ background: 'rgba(255, 20, 147, 0.9)', boxShadow: '0 0 40px rgba(255, 20, 147, 0.6)' }}
                          >
                            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[0.6rem] tracking-[0.2em] px-3 py-1 rounded-full" style={{ background: 'rgba(255, 20, 147, 0.15)', color: '#FF1493', border: '1px solid rgba(255, 20, 147, 0.3)' }}>
                        {t('trailers.official')}
                      </span>
                      <span className="text-[0.6rem] tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        {trailer.duration}
                      </span>
                      <span className="text-[0.6rem] tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        {new Date(trailer.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'pt' ? 'pt-BR' : lang === 'it' ? 'it-IT' : lang === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {tr(trailer.title, lang)}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {tr(trailer.description, lang)}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Trailers;
