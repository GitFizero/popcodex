'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCrimsonI18n } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';

interface Platform {
  id: string;
  name: string;
  icon: string;
  available: boolean;
}

interface Edition {
  id: string;
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const platforms: Platform[] = [
  { id: 'ps5', name: 'PlayStation 5', icon: '🎮', available: true },
  { id: 'xbox', name: 'Xbox Series X|S', icon: '🟢', available: true },
  { id: 'pc', name: 'PC (Steam)', icon: '🖥', available: true },
];

const CrimsonBuy = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const prefix = `/${locale}/crimson-desert`;
  const [selectedPlatform, setSelectedPlatform] = useState<string>('ps5');

  const editions: Edition[] = [
    {
      id: 'standard',
      name: lang === 'fr' ? 'Édition Standard' : lang === 'es' ? 'Edición Estándar' : lang === 'it' ? 'Edizione Standard' : lang === 'ko' ? '스탠다드 에디션' : 'Standard Edition',
      price: '$59.99',
      features: [
        lang === 'fr' ? 'Jeu complet' : lang === 'es' ? 'Juego completo' : lang === 'it' ? 'Gioco completo' : lang === 'ko' ? '풀 게임' : 'Full Game',
        lang === 'fr' ? 'Accès au mode histoire' : lang === 'es' ? 'Acceso al modo historia' : lang === 'it' ? 'Accesso alla modalità storia' : lang === 'ko' ? '스토리 모드 접근' : 'Story Mode Access',
      ],
    },
    {
      id: 'deluxe',
      name: lang === 'fr' ? 'Édition Deluxe' : lang === 'es' ? 'Edición Deluxe' : lang === 'it' ? 'Edizione Deluxe' : lang === 'ko' ? '디럭스 에디션' : 'Deluxe Edition',
      price: '$79.99',
      highlighted: true,
      features: [
        lang === 'fr' ? 'Jeu complet' : lang === 'es' ? 'Juego completo' : lang === 'it' ? 'Gioco completo' : lang === 'ko' ? '풀 게임' : 'Full Game',
        lang === 'fr' ? 'Armure exclusive Greymane' : lang === 'es' ? 'Armadura exclusiva Greymane' : lang === 'it' ? 'Armatura esclusiva Greymane' : lang === 'ko' ? '그레이메인 전용 갑옷' : 'Exclusive Greymane Armor Set',
        lang === 'fr' ? 'Monture Destrier de Pywel' : lang === 'es' ? 'Montura Corcel de Pywel' : lang === 'it' ? 'Cavalcatura Destriero di Pywel' : lang === 'ko' ? '파이웰 군마 탈것' : 'Pywel Warhorse Mount',
        lang === 'fr' ? 'Artbook numérique' : lang === 'es' ? 'Artbook digital' : lang === 'it' ? 'Artbook digitale' : lang === 'ko' ? '디지털 아트북' : 'Digital Artbook',
        lang === 'fr' ? 'Bande-son numérique' : lang === 'es' ? 'Banda sonora digital' : lang === 'it' ? 'Colonna sonora digitale' : lang === 'ko' ? '디지털 사운드트랙' : 'Digital Soundtrack',
      ],
    },
    {
      id: 'collectors',
      name: lang === 'fr' ? "Édition Collector" : lang === 'es' ? 'Edición Coleccionista' : lang === 'it' ? "Edizione Collector" : lang === 'ko' ? '컬렉터 에디션' : "Collector's Edition",
      price: '$149.99',
      features: [
        lang === 'fr' ? 'Contenu Édition Deluxe' : lang === 'es' ? 'Contenido Edición Deluxe' : lang === 'it' ? 'Contenuto Edizione Deluxe' : lang === 'ko' ? '디럭스 에디션 포함' : 'All Deluxe Edition Content',
        lang === 'fr' ? 'Figurine Kliff (25 cm)' : lang === 'es' ? 'Figura Kliff (25 cm)' : lang === 'it' ? 'Statuetta Kliff (25 cm)' : lang === 'ko' ? '클리프 피규어 (25cm)' : 'Kliff Statue (25cm)',
        lang === 'fr' ? 'Carte tissu de Pywel' : lang === 'es' ? 'Mapa de tela de Pywel' : lang === 'it' ? 'Mappa in tessuto di Pywel' : lang === 'ko' ? '파이웰 천 지도' : 'Cloth Map of Pywel',
        lang === 'fr' ? 'Steelbook exclusif' : lang === 'es' ? 'Steelbook exclusivo' : lang === 'it' ? 'Steelbook esclusivo' : lang === 'ko' ? '독점 스틸북' : 'Exclusive Steelbook',
        lang === 'fr' ? 'Accès anticipé 3 jours' : lang === 'es' ? 'Acceso anticipado 3 días' : lang === 'it' ? 'Accesso anticipato 3 giorni' : lang === 'ko' ? '3일 얼리 액세스' : '3-Day Early Access',
      ],
    },
  ];

  const storeLinks: { platform: string; label: string; url: string }[] = [
    { platform: 'ps5', label: 'PlayStation Store', url: '#' },
    { platform: 'xbox', label: 'Microsoft Store', url: '#' },
    { platform: 'pc', label: 'Steam', url: '#' },
    { platform: 'pc', label: 'Epic Games Store', url: '#' },
  ];

  const filteredStoreLinks = storeLinks.filter(
    s => s.platform === selectedPlatform
  );

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('nav.buy')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--crimson-deep)/0.2) 0%, transparent 60%)' }} />
          {/* Decorative crossed swords */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
            <span className="font-display text-[20rem] text-gold-mid select-none" aria-hidden="true">&#x2694;</span>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('buy.cta.title')}
              </h1>
              <p className="font-body text-base text-text-secondary max-w-2xl mx-auto">
                {t('buy.cta.desc')}
              </p>
              <div className="flex justify-center mt-6">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          {/* Platform Selection */}
          <RevealOnScroll>
            <GoldDivider variant="section" title={lang === 'fr' ? 'PLATEFORMES' : lang === 'es' ? 'PLATAFORMAS' : lang === 'it' ? 'PIATTAFORME' : lang === 'ko' ? '플랫폼' : 'PLATFORMS'} />
            <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-lg border transition-all duration-300 ${
                    selectedPlatform === platform.id
                      ? 'bg-gold-mid/15 border-gold-mid/50 shadow-[0_0_20px_hsl(var(--gold-glow)/0.15)]'
                      : 'bg-surface border-border hover:border-gold-mid/30'
                  }`}
                >
                  <span className="text-2xl" aria-hidden="true">{platform.icon}</span>
                  <div className="text-left">
                    <span className={`block font-heading text-sm tracking-wider ${
                      selectedPlatform === platform.id ? 'text-gold-bright' : 'text-text-primary'
                    }`}>
                      {platform.name}
                    </span>
                    <span className={`block font-ui text-[0.6rem] tracking-wider ${
                      platform.available ? 'text-green-400' : 'text-text-secondary'
                    }`}>
                      {platform.available
                        ? (lang === 'fr' ? 'Disponible' : lang === 'es' ? 'Disponible' : lang === 'it' ? 'Disponibile' : lang === 'ko' ? '이용 가능' : 'Available')
                        : (lang === 'fr' ? 'Bientôt' : lang === 'es' ? 'Pronto' : lang === 'it' ? 'Presto' : lang === 'ko' ? '출시 예정' : 'Coming Soon')
                      }
                    </span>
                  </div>
                  {selectedPlatform === platform.id && (
                    <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold-bright" />
                  )}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Edition Comparison */}
          <RevealOnScroll>
            <GoldDivider variant="section" title={lang === 'fr' ? 'ÉDITIONS' : lang === 'es' ? 'EDICIONES' : lang === 'it' ? 'EDIZIONI' : lang === 'ko' ? '에디션' : 'EDITIONS'} />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {editions.map((edition, i) => (
              <RevealOnScroll key={edition.id} stagger={i * 120}>
                <div
                  className={`relative rounded-lg border overflow-hidden flex flex-col h-full transition-all duration-300 ${
                    edition.highlighted
                      ? 'border-gold-mid/50 shadow-[0_0_30px_hsl(var(--gold-glow)/0.15)]'
                      : 'border-border hover:border-gold-mid/30'
                  }`}
                  style={{ boxShadow: edition.highlighted ? undefined : 'var(--shadow-card)' }}
                >
                  {/* Highlighted badge */}
                  {edition.highlighted && (
                    <div className="bg-gradient-to-r from-gold-dark to-gold-mid px-4 py-1.5 text-center">
                      <span className="font-ui text-[0.6rem] tracking-[0.3em] text-void font-semibold">
                        {lang === 'fr' ? 'RECOMMANDÉ' : lang === 'es' ? 'RECOMENDADO' : lang === 'it' ? 'CONSIGLIATO' : lang === 'ko' ? '추천' : 'RECOMMENDED'}
                      </span>
                    </div>
                  )}

                  <div className="bg-surface-elevated p-6 flex flex-col flex-1">
                    {/* Edition header */}
                    <div className="text-center mb-6">
                      <h3 className="font-heading text-lg text-gold-bright mb-2">{edition.name}</h3>
                      <div className="font-display text-3xl text-text-primary" style={{ textShadow: edition.highlighted ? '0 0 20px hsl(var(--gold-glow)/0.3)' : 'none' }}>
                        {edition.price}
                      </div>
                    </div>

                    <div className="h-px bg-border mb-6" />

                    {/* Features list */}
                    <ul className="space-y-3 flex-1">
                      {edition.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-gold-mid mt-0.5 flex-shrink-0 font-body text-sm">&#x2726;</span>
                          <span className="font-body text-sm text-text-secondary leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Buy button */}
                    <div className="mt-8">
                      <a
                        href="#"
                        className={`block text-center px-6 py-3 rounded-lg font-heading text-sm tracking-[0.15em] transition-all duration-300 ${
                          edition.highlighted
                            ? 'bg-gradient-to-r from-crimson-deep to-crimson-core text-sand-pale hover:from-crimson-core hover:to-crimson-bright hover:shadow-[0_0_25px_hsl(var(--crimson-glow-strong))]'
                            : 'border border-gold-mid/40 text-gold-mid hover:bg-gold-mid/10 hover:text-gold-bright hover:border-gold-mid/60'
                        }`}
                      >
                        {t('buy.cta.button')}
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Store Links */}
          <RevealOnScroll>
            <div className="mt-16">
              <GoldDivider variant="section" title={lang === 'fr' ? 'BOUTIQUES' : lang === 'es' ? 'TIENDAS' : lang === 'it' ? 'NEGOZI' : lang === 'ko' ? '상점' : 'STORES'} />
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {filteredStoreLinks.map((store, i) => (
                  <a
                    key={`${store.label}-${i}`}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-6 py-4 rounded-lg bg-surface-elevated border border-border hover:border-gold-mid/40 transition-all duration-300"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    <span className="font-heading text-sm text-gold-bright group-hover:drop-shadow-[0_0_10px_hsl(var(--gold-glow))] transition-all">
                      {store.label}
                    </span>
                    <svg className="w-4 h-4 text-gold-mid/60 group-hover:text-gold-bright group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* System Requirements (PC) */}
          {selectedPlatform === 'pc' && (
            <RevealOnScroll>
              <div className="mt-16">
                <GoldDivider variant="section" title={lang === 'fr' ? 'CONFIGURATION REQUISE' : lang === 'es' ? 'REQUISITOS DEL SISTEMA' : lang === 'it' ? 'REQUISITI DI SISTEMA' : lang === 'ko' ? '시스템 요구 사양' : 'SYSTEM REQUIREMENTS'} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {/* Minimum */}
                  <div className="bg-surface-elevated rounded-lg border border-border p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
                    <h4 className="font-heading text-sm tracking-wider text-gold-mid mb-4">
                      {lang === 'fr' ? 'MINIMUM' : lang === 'ko' ? '최소' : 'MINIMUM'}
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { label: 'OS', value: 'Windows 10 (64-bit)' },
                        { label: 'CPU', value: 'Intel i5-8400 / AMD Ryzen 5 2600' },
                        { label: 'RAM', value: '16 GB' },
                        { label: 'GPU', value: 'NVIDIA GTX 1060 6GB / AMD RX 580' },
                        { label: lang === 'fr' ? 'Stockage' : lang === 'es' ? 'Almacenamiento' : lang === 'it' ? 'Spazio' : lang === 'ko' ? '저장 공간' : 'Storage', value: '100 GB SSD' },
                      ].map(spec => (
                        <li key={spec.label} className="flex justify-between items-baseline border-b border-border/50 pb-2">
                          <span className="font-ui text-[0.65rem] tracking-wider text-text-secondary">{spec.label}</span>
                          <span className="font-body text-xs text-text-primary">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended */}
                  <div className="bg-surface-elevated rounded-lg border border-gold-mid/30 p-6" style={{ boxShadow: '0 0 20px hsl(var(--gold-glow)/0.08)' }}>
                    <h4 className="font-heading text-sm tracking-wider text-gold-bright mb-4">
                      {lang === 'fr' ? 'RECOMMANDÉ' : lang === 'es' ? 'RECOMENDADO' : lang === 'it' ? 'CONSIGLIATO' : lang === 'ko' ? '권장' : 'RECOMMENDED'}
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { label: 'OS', value: 'Windows 10/11 (64-bit)' },
                        { label: 'CPU', value: 'Intel i7-10700 / AMD Ryzen 7 3700X' },
                        { label: 'RAM', value: '32 GB' },
                        { label: 'GPU', value: 'NVIDIA RTX 3070 / AMD RX 6800 XT' },
                        { label: lang === 'fr' ? 'Stockage' : lang === 'es' ? 'Almacenamiento' : lang === 'it' ? 'Spazio' : lang === 'ko' ? '저장 공간' : 'Storage', value: '100 GB NVMe SSD' },
                      ].map(spec => (
                        <li key={spec.label} className="flex justify-between items-baseline border-b border-gold-mid/10 pb-2">
                          <span className="font-ui text-[0.65rem] tracking-wider text-gold-mid/80">{spec.label}</span>
                          <span className="font-body text-xs text-gold-bright">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Disclaimer */}
          <RevealOnScroll>
            <div className="mt-16 text-center">
              <div className="inline-block bg-surface rounded-lg border border-border/50 px-6 py-4">
                <p className="font-ui text-[0.6rem] tracking-wider text-text-secondary leading-relaxed max-w-xl">
                  {lang === 'fr'
                    ? 'Ce site est un wiki fan non officiel. Les prix et la disponibilité sont indicatifs. Crimson Desert est une marque de Pearl Abyss. Les liens affiliés peuvent être utilisés.'
                    : lang === 'es'
                    ? 'Este sitio es un wiki de fans no oficial. Los precios y la disponibilidad son indicativos. Crimson Desert es una marca de Pearl Abyss. Se pueden usar enlaces de afiliados.'
                    : lang === 'it'
                    ? 'Questo sito è un wiki fan non ufficiale. I prezzi e la disponibilità sono indicativi. Crimson Desert è un marchio di Pearl Abyss. Possono essere utilizzati link affiliati.'
                    : lang === 'ko'
                    ? '이 사이트는 비공식 팬 위키입니다. 가격 및 출시 정보는 참고용입니다. Crimson Desert는 Pearl Abyss의 상표입니다.'
                    : 'This is an unofficial fan wiki. Prices and availability are indicative. Crimson Desert is a trademark of Pearl Abyss. Affiliate links may be used.'}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonBuy;
