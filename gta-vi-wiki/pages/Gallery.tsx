// @ts-nocheck
import { useState, useCallback, useEffect, memo } from 'react';
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';

interface GalleryImage {
  id: string;
  src: string;
  alt: { fr: string; en: string; es?: string };
  category: 'protagonists' | 'characters' | 'locations' | 'map';
  width: number;
  height: number;
}

const GALLERY_IMAGES: GalleryImage[] = [
  // Protagonists — Jason & Lucia
  { id: 'jason-lucia-hero-landscape', src: '/gta-vi/jason-lucia-hero-landscape.jpg', alt: { fr: 'Jason et Lucia, les deux protagonistes de GTA VI', en: 'Jason and Lucia, the two GTA VI protagonists', es: 'Jason y Lucia, los dos protagonistas de GTA VI' }, category: 'protagonists', width: 1920, height: 1080 },
  { id: 'jason-lucia-01-landscape', src: '/gta-vi/jason-lucia-01-landscape.jpg', alt: { fr: 'Jason et Lucia dans Vice City', en: 'Jason and Lucia in Vice City', es: 'Jason y Lucia en Vice City' }, category: 'protagonists', width: 1920, height: 1080 },
  { id: 'jason-lucia-02-landscape', src: '/gta-vi/jason-lucia-02-landscape.jpg', alt: { fr: 'Jason et Lucia — screenshot officiel GTA VI', en: 'Jason and Lucia — official GTA VI screenshot', es: 'Jason y Lucia — captura oficial GTA VI' }, category: 'protagonists', width: 1920, height: 1080 },
  { id: 'jason-lucia-02-logos-landscape', src: '/gta-vi/jason-lucia-02-logos-landscape.jpg', alt: { fr: 'Jason et Lucia avec le logo GTA VI', en: 'Jason and Lucia with GTA VI logo', es: 'Jason y Lucia con el logo GTA VI' }, category: 'protagonists', width: 1920, height: 1080 },
  { id: 'jason-lucia-motel-landscape', src: '/gta-vi/jason-lucia-motel-landscape.jpg', alt: { fr: 'Jason et Lucia devant un motel de Vice City', en: 'Jason and Lucia in front of a Vice City motel', es: 'Jason y Lucia frente a un motel de Vice City' }, category: 'protagonists', width: 1920, height: 1080 },

  // Secondary Characters
  { id: 'boobie-ike-landscape', src: '/gta-vi/boobie-ike-landscape.jpg', alt: { fr: 'Boobie Ike, personnage secondaire de GTA VI', en: 'Boobie Ike, GTA VI secondary character', es: 'Boobie Ike, personaje secundario de GTA VI' }, category: 'characters', width: 1920, height: 1080 },
  { id: 'boobie-ike-portrait', src: '/gta-vi/boobie-ike-portrait.jpg', alt: { fr: 'Portrait de Boobie Ike', en: 'Boobie Ike portrait', es: 'Retrato de Boobie Ike' }, category: 'characters', width: 1080, height: 1350 },
  { id: 'cal-hampton-landscape', src: '/gta-vi/cal-hampton-landscape.jpg', alt: { fr: 'Cal Hampton, personnage de GTA VI', en: 'Cal Hampton, GTA VI character', es: 'Cal Hampton, personaje de GTA VI' }, category: 'characters', width: 1920, height: 1080 },
  { id: 'cal-hampton-portrait', src: '/gta-vi/cal-hampton-portrait.jpg', alt: { fr: 'Portrait de Cal Hampton', en: 'Cal Hampton portrait', es: 'Retrato de Cal Hampton' }, category: 'characters', width: 1080, height: 1350 },
  { id: 'brian-heder-landscape', src: '/gta-vi/brian-heder-landscape.jpg', alt: { fr: 'Brian Heder, personnage de GTA VI', en: 'Brian Heder, GTA VI character', es: 'Brian Heder, personaje de GTA VI' }, category: 'characters', width: 1920, height: 1080 },
  { id: 'brian-heder-portrait', src: '/gta-vi/brian-heder-portrait.jpg', alt: { fr: 'Portrait de Brian Heder', en: 'Brian Heder portrait', es: 'Retrato de Brian Heder' }, category: 'characters', width: 1080, height: 1350 },
  { id: 'drequan-priest-landscape', src: '/gta-vi/drequan-priest-landscape.jpg', alt: { fr: "Dre'Quan Priest, personnage de GTA VI", en: "Dre'Quan Priest, GTA VI character", es: "Dre'Quan Priest, personaje de GTA VI" }, category: 'characters', width: 1920, height: 1080 },
  { id: 'drequan-priest-portrait', src: '/gta-vi/drequan-priest-portrait.jpg', alt: { fr: "Portrait de Dre'Quan Priest", en: "Dre'Quan Priest portrait", es: "Retrato de Dre'Quan Priest" }, category: 'characters', width: 1080, height: 1350 },
  { id: 'raul-bautista-landscape', src: '/gta-vi/raul-bautista-landscape.jpg', alt: { fr: 'Raul Bautista, personnage de GTA VI', en: 'Raul Bautista, GTA VI character', es: 'Raul Bautista, personaje de GTA VI' }, category: 'characters', width: 1920, height: 1080 },
  { id: 'raul-bautista-portrait', src: '/gta-vi/raul-bautista-portrait.jpg', alt: { fr: 'Portrait de Raul Bautista', en: 'Raul Bautista portrait', es: 'Retrato de Raul Bautista' }, category: 'characters', width: 1080, height: 1350 },
  { id: 'real-dimez-landscape', src: '/gta-vi/real-dimez-landscape.jpg', alt: { fr: 'Real Dimez, personnage de GTA VI', en: 'Real Dimez, GTA VI character', es: 'Real Dimez, personaje de GTA VI' }, category: 'characters', width: 1920, height: 1080 },
  { id: 'real-dimez-portrait', src: '/gta-vi/real-dimez-portrait.jpg', alt: { fr: 'Portrait de Real Dimez', en: 'Real Dimez portrait', es: 'Retrato de Real Dimez' }, category: 'characters', width: 1080, height: 1350 },

  // Locations — Leonida regions
  { id: 'vice-city-landscape', src: '/gta-vi/vice-city-postcard-landscape.jpg', alt: { fr: 'Vice City, la metropole neon de Leonida', en: 'Vice City, the neon metropolis of Leonida', es: 'Vice City, la metropolis neon de Leonida' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'leonida-keys-landscape', src: '/gta-vi/leonida-keys-postcard-landscape.jpg', alt: { fr: 'Les Leonida Keys, iles tropicales', en: 'Leonida Keys, tropical islands', es: 'Las Leonida Keys, islas tropicales' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'grassrivers-landscape', src: '/gta-vi/grassrivers-postcard-landscape.jpg', alt: { fr: 'Les Grassrivers, marecages de Leonida', en: 'Grassrivers, Leonida swamplands', es: 'Los Grassrivers, pantanos de Leonida' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'port-gellhorn-landscape', src: '/gta-vi/port-gellhorn-postcard-landscape.jpg', alt: { fr: 'Port Gellhorn, zone industrielle portuaire', en: 'Port Gellhorn, industrial harbor zone', es: 'Port Gellhorn, zona industrial portuaria' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'ambrosia-landscape', src: '/gta-vi/ambrosia-postcard-landscape.jpg', alt: { fr: 'Ambrosia County, campagne rurale de Leonida', en: 'Ambrosia County, rural countryside of Leonida', es: 'Ambrosia County, campo rural de Leonida' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'mount-kalaga-landscape', src: '/gta-vi/mount-kalaga-postcard-landscape.jpg', alt: { fr: 'Mount Kalaga, forets montagneuses de Leonida', en: 'Mount Kalaga, mountainous forests of Leonida', es: 'Mount Kalaga, bosques montanosos de Leonida' }, category: 'locations', width: 1920, height: 1080 },

  // Map
  { id: 'vice-city-map-guide', src: '/gta-vi/gta6-vice-city-map-guide.jpg', alt: { fr: 'Guide de la carte de Vice City — GTA VI', en: 'Vice City map guide — GTA VI', es: 'Guia del mapa de Vice City — GTA VI' }, category: 'map', width: 1920, height: 1080 },
];

const CATEGORIES = [
  { id: 'all', label: { fr: 'Tout', en: 'All', es: 'Todo' } },
  { id: 'protagonists', label: { fr: 'Protagonistes', en: 'Protagonists', es: 'Protagonistas' } },
  { id: 'characters', label: { fr: 'Personnages', en: 'Characters', es: 'Personajes' } },
  { id: 'locations', label: { fr: 'Lieux', en: 'Locations', es: 'Lugares' } },
  { id: 'map', label: { fr: 'Carte', en: 'Map', es: 'Mapa' } },
];

const Lightbox = memo(({ image, onClose, lang }: { image: GalleryImage | null; onClose: () => void; lang: string }) => {
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      style={{ background: 'rgba(0, 0, 0, 0.95)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt[lang] || image.alt.en}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold z-10 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
        style={{ background: 'rgba(255, 20, 147, 0.2)' }}
        aria-label={lang === 'fr' ? 'Fermer' : 'Close'}
      >
        &times;
      </button>
      <figure className="max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.alt[lang] || image.alt.en}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
          style={{ boxShadow: '0 0 40px rgba(255, 20, 147, 0.3)' }}
          width={image.width}
          height={image.height}
        />
        <figcaption className="text-center mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {image.alt[lang] || image.alt.en}
        </figcaption>
      </figure>
    </div>
  );
});
Lightbox.displayName = 'Lightbox';

const Gallery = () => {
  const { t, lang } = useI18n();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const filtered = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const visibleImages = filtered.filter(img => !imageErrors.has(img.id));

  const handleImageError = useCallback((id: string) => {
    setImageErrors(prev => new Set(prev).add(id));
  }, []);

  const openLightbox = useCallback((img: GalleryImage) => setLightboxImage(img), []);
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  const seoTitle = (seo as any).gallery?.title?.[lang] || (lang === 'fr' ? 'Galerie Screenshots GTA VI' : lang === 'es' ? 'Galeria Capturas GTA VI' : 'GTA VI Screenshot Gallery');
  const seoDesc = (seo as any).gallery?.desc?.[lang] || (lang === 'fr' ? 'Galerie complete de screenshots GTA VI.' : 'Complete GTA VI screenshot gallery.');

  const breadcrumbs = [
    { name: (seo as any).breadcrumb?.home?.[lang] || 'Home', path: '/' },
    { name: (seo as any).breadcrumb?.gallery?.[lang] || 'Gallery', path: '/gallery' },
  ];

  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: seoTitle,
    description: seoDesc,
    url: `https://gtaviwiki.com/gallery`,
    numberOfItems: GALLERY_IMAGES.length,
    about: {
      '@type': 'VideoGame',
      name: 'Grand Theft Auto VI',
    },
  };

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        path="/gallery"
        lang={lang}
        breadcrumbs={breadcrumbs}
        jsonLd={imageGallerySchema}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-6xl mx-auto pb-20">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <li><a href="/" style={{ color: 'rgba(255,255,255,0.4)' }}>{breadcrumbs[0].name}</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: '#FF1493' }}>{breadcrumbs[1].name}</li>
            </ol>
          </nav>

          <RevealOnScroll>
            <header className="text-center mb-2">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
                {lang === 'fr' ? 'GALERIE' : lang === 'es' ? 'GALERIA' : 'GALLERY'}
              </h1>
              <p className="text-sm max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {lang === 'fr'
                  ? 'Explorez les screenshots officiels de GTA VI : Vice City, personnages, vehicules et bien plus.'
                  : lang === 'es'
                  ? 'Explora las capturas oficiales de GTA VI: Vice City, personajes, vehiculos y mucho mas.'
                  : 'Explore official GTA VI screenshots: Vice City, characters, locations and more.'}
              </p>
            </header>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {/* Category Filters */}
          <nav aria-label={lang === 'fr' ? 'Filtrer par categorie' : 'Filter by category'} className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-4 py-2 text-xs tracking-wider rounded-full transition-all duration-300"
                  style={{
                    background: isActive ? 'rgba(255, 20, 147, 0.2)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isActive ? '#FF1493' : 'rgba(255,255,255,0.1)'}`,
                    color: isActive ? '#FF1493' : 'rgba(255,255,255,0.5)',
                    boxShadow: isActive ? '0 0 15px rgba(255, 20, 147, 0.2)' : 'none',
                  }}
                  aria-pressed={isActive}
                >
                  {cat.label[lang] || cat.label.en}
                </button>
              );
            })}
          </nav>

          {/* Image Grid */}
          <section aria-label={lang === 'fr' ? 'Images GTA VI' : 'GTA VI Images'}>
            {visibleImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleImages.map((img, i) => (
                  <RevealOnScroll key={img.id} stagger={i * 60}>
                    <figure className="group relative">
                      <button
                        onClick={() => openLightbox(img)}
                        className="block w-full overflow-hidden rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2"
                        style={{ focusVisibleRing: '#FF1493' } as any}
                        aria-label={`${lang === 'fr' ? 'Agrandir' : 'Enlarge'}: ${img.alt[lang] || img.alt.en}`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt[lang] || img.alt.en}
                          width={img.width}
                          height={img.height}
                          loading="lazy"
                          decoding="async"
                          className="w-full aspect-video object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                          style={{ background: 'linear-gradient(135deg, rgba(255, 20, 147, 0.08), rgba(0, 255, 255, 0.04))' }}
                          onError={() => handleImageError(img.id)}
                        />
                        <div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
                        >
                          <span className="p-3 text-xs text-white">{img.alt[lang] || img.alt.en}</span>
                        </div>
                      </button>
                      <figcaption className="sr-only">{img.alt[lang] || img.alt.en}</figcaption>
                    </figure>
                  </RevealOnScroll>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {lang === 'fr' ? 'Les images seront ajoutees prochainement.' : lang === 'es' ? 'Las imagenes se agregaran proximamente.' : 'Images will be added soon.'}
                </p>
              </div>
            )}
          </section>

          {/* Image count */}
          {visibleImages.length > 0 && (
            <p className="text-center mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {visibleImages.length} {lang === 'fr' ? 'images' : lang === 'es' ? 'imagenes' : 'images'}
            </p>
          )}

          <div className="text-center mt-12">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('about.images_credit')}</p>
          </div>
        </div>
      </main>

      <Lightbox image={lightboxImage} onClose={closeLightbox} lang={lang} />
    </>
  );
};

export default Gallery;
