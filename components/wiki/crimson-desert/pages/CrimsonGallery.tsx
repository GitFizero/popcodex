'use client';

import { useState, useMemo, useCallback } from 'react';
import { useCrimsonI18n } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'characters' | 'world' | 'combat';
}

const galleryImages: GalleryImage[] = [
  // Characters
  { src: '/images/crimson-desert/char-kliff.jpg', alt: 'Kliff \u2014 \u00A9 Pearl Abyss', category: 'characters' },
  { src: '/images/crimson-desert/char-damiane.jpg', alt: 'Damiane \u2014 \u00A9 Pearl Abyss', category: 'characters' },
  { src: '/images/crimson-desert/char-oongka.jpg', alt: 'Oongka \u2014 \u00A9 Pearl Abyss', category: 'characters' },
  { src: '/images/crimson-desert/char-hexe-marie.jpg', alt: 'Hexe Marie \u2014 \u00A9 Pearl Abyss', category: 'characters' },
  { src: '/images/crimson-desert/char-goblin-king.jpg', alt: 'Goblin King \u2014 \u00A9 Pearl Abyss', category: 'characters' },
  { src: '/images/crimson-desert/characters-group.jpg', alt: 'Characters Group \u2014 \u00A9 Pearl Abyss', category: 'characters' },
  { src: '/images/crimson-desert/kliff-forest.jpg', alt: 'Kliff in the Forest \u2014 \u00A9 Pearl Abyss', category: 'characters' },

  // World
  { src: '/images/crimson-desert/hernand-city.jpg', alt: 'Hernand City \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/hernand-street.jpg', alt: 'Hernand Street \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/hernand-square.jpg', alt: 'Hernand Square \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/pailune-homeland.jpg', alt: 'Pailune Homeland \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/pailune-ruins.jpg', alt: 'Pailune Ruins \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/forest-bridge.jpg', alt: 'Forest Bridge \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/delesyie-castle.jpg', alt: 'Del\u00E9syie Castle \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/cathedral.jpg', alt: 'Cathedral \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/village-church.jpg', alt: 'Village Church \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/pywel-gardens.jpg', alt: 'Pywel Gardens \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/demeniss-tower.jpg', alt: 'D\u00E9m\u00E9niss Tower \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/cliff-fortress.jpg', alt: 'Cliff Fortress \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/mountain-city.jpg', alt: 'Mountain City \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/mountain-castle.jpg', alt: 'Mountain Castle \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/lake-village.jpg', alt: 'Lake Village \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/pywel-panorama.jpg', alt: 'Pywel Panorama \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/env-canyon.jpg', alt: 'Canyon \u2014 \u00A9 Pearl Abyss', category: 'world' },
  { src: '/images/crimson-desert/env-temple.jpg', alt: 'Temple \u2014 \u00A9 Pearl Abyss', category: 'world' },

  // Combat
  { src: '/images/crimson-desert/combat-action.jpg', alt: 'Combat Action \u2014 \u00A9 Pearl Abyss', category: 'combat' },
  { src: '/images/crimson-desert/combat-goblin.jpg', alt: 'Combat Goblin \u2014 \u00A9 Pearl Abyss', category: 'combat' },
];

type GalleryCategory = 'all' | 'characters' | 'world' | 'combat';

const categoryLabels: Record<GalleryCategory, Record<string, string>> = {
  all: { en: 'ALL', fr: 'TOUS', es: 'TODOS', it: 'TUTTI', ko: '\uC804\uCCB4' },
  characters: { en: 'CHARACTERS', fr: 'PERSONNAGES', es: 'PERSONAJES', it: 'PERSONAGGI', ko: '\uCE90\uB9AD\uD130' },
  world: { en: 'WORLD', fr: 'MONDE', es: 'MUNDO', it: 'MONDO', ko: '\uC138\uACC4' },
  combat: { en: 'COMBAT', fr: 'COMBAT', es: 'COMBATE', it: 'COMBATTIMENTO', ko: '\uC804\uD22C' },
};

const CrimsonGallery = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return galleryImages;
    return galleryImages.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  const categoryKeys: GalleryCategory[] = ['all', 'characters', 'world', 'combat'];

  const openLightbox = useCallback((img: GalleryImage, idx: number) => {
    setLightboxImage(img);
    setLightboxIndex(idx);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % filtered.length
      : (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightboxIndex(newIndex);
    setLightboxImage(filtered[newIndex]);
  }, [lightboxIndex, filtered]);

  const counts = useMemo(() => ({
    all: galleryImages.length,
    characters: galleryImages.filter(i => i.category === 'characters').length,
    world: galleryImages.filter(i => i.category === 'world').length,
    combat: galleryImages.filter(i => i.category === 'combat').length,
  }), []);

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('nav.gallery')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/crimson-desert/pywel-panorama.jpg"
              alt="Pywel Panorama \u2014 \u00A9 Pearl Abyss"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
              loading="eager"
              width={1920}
              height={1080}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('nav.gallery')}
              </h1>
              <div className="flex justify-center">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Category filters */}
          <RevealOnScroll>
            <div className="bg-surface-elevated rounded-lg border border-border p-6 mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categoryKeys.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-ui text-xs tracking-wider px-5 py-2.5 rounded-full border transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-gold-mid/20 border-gold-mid/50 text-gold-bright'
                        : 'border-border text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'
                    }`}
                  >
                    {categoryLabels[cat]?.[lang] || categoryLabels[cat]?.en}
                    <span className="ml-2 text-[0.6rem] text-text-secondary">({counts[cat]})</span>
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <GoldDivider variant="section" title={categoryLabels[activeCategory]?.[lang] || categoryLabels[activeCategory]?.en} />

          {/* Gallery Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <RevealOnScroll key={`${img.src}-${activeCategory}`} stagger={i * 60}>
                <button
                  onClick={() => openLightbox(img, i)}
                  className="group relative aspect-[16/10] rounded-lg overflow-hidden border border-border hover:border-gold-mid/40 transition-all duration-300 w-full"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                  aria-label={img.alt}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-ui text-[0.55rem] tracking-wider text-gold-mid/80 px-2 py-0.5 rounded bg-void/60 border border-gold-mid/20">
                      {categoryLabels[img.category]?.[lang] || categoryLabels[img.category]?.en}
                    </span>
                  </div>
                  {/* Expand icon */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-gold-mid/80 text-sm bg-void/60 rounded-full w-7 h-7 flex items-center justify-center border border-gold-mid/20">
                      {'\u26F6'}
                    </span>
                  </div>
                </button>
              </RevealOnScroll>
            ))}
          </div>

          {/* Community Section */}
          <div className="mt-16">
            <GoldDivider variant="section" title={t('gallery.community_title')} />
            <RevealOnScroll>
              <div className="mt-8 bg-surface-elevated rounded-lg border border-border p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-bright)) 0%, transparent 50%)' }} />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-mid/10 border border-gold-mid/20 flex items-center justify-center">
                    <span className="text-2xl text-gold-mid">{'\uD83D\uDCF7'}</span>
                  </div>
                  <h3 className="font-heading text-lg tracking-[0.15em] text-gold-bright mb-3">
                    {t('gallery.community_coming')}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed max-w-lg mx-auto mb-6">
                    {t('gallery.community_desc')}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {t('gallery.community_features').split('\u00B7').map((feature, i) => (
                      <span key={i} className="font-ui text-[0.6rem] tracking-wider px-3 py-1.5 rounded-full border border-gold-mid/20 text-gold-mid/60 bg-gold-mid/5">
                        {feature.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Image credit */}
          <RevealOnScroll>
            <p className="text-center font-ui text-[0.6rem] tracking-wider text-text-muted-custom mt-12">
              {lang === 'fr' ? 'Images : \u00A9 Pearl Abyss \u2014 Fan Kit officiel'
                : lang === 'es' ? 'Im\u00E1genes: \u00A9 Pearl Abyss \u2014 Fan Kit oficial'
                : lang === 'it' ? 'Immagini: \u00A9 Pearl Abyss \u2014 Fan Kit ufficiale'
                : lang === 'ko' ? '\uC774\uBBF8\uC9C0: \u00A9 Pearl Abyss \u2014 \uACF5\uC2DD Fan Kit'
                : 'Images: \u00A9 Pearl Abyss \u2014 Official Fan Kit'}
            </p>
          </RevealOnScroll>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gold-mid hover:text-gold-bright hover:border-gold-mid/50 transition-all"
              aria-label="Close"
            >
              {'\u2715'}
            </button>

            {/* Previous */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-4 sm:left-8 z-50 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gold-mid hover:text-gold-bright hover:border-gold-mid/50 transition-all"
              aria-label="Previous image"
            >
              {'\u2190'}
            </button>

            {/* Image */}
            <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg border border-border"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-void/80 to-transparent rounded-b-lg">
                <span className="font-ui text-[0.65rem] tracking-wider text-gold-mid/80">
                  {lightboxImage.alt}
                </span>
                <span className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom ml-4">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
            </div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-4 sm:right-8 z-50 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gold-mid hover:text-gold-bright hover:border-gold-mid/50 transition-all"
              aria-label="Next image"
            >
              {'\u2192'}
            </button>
          </div>
        )}
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonGallery;
