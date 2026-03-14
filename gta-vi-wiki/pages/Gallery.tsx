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
  category: 'characters' | 'locations' | 'vehicles' | 'activities' | 'nightlife';
  width: number;
  height: number;
}

const GALLERY_IMAGES: GalleryImage[] = [
  // Characters
  { id: 'lucia-portrait', src: '/gta-vi/lucia-portrait.jpg', alt: { fr: 'Lucia Caminos, protagoniste de GTA VI', en: 'Lucia Caminos, GTA VI protagonist', es: 'Lucia Caminos, protagonista de GTA VI' }, category: 'characters', width: 1920, height: 1080 },
  { id: 'jason-portrait', src: '/gta-vi/jason-portrait.jpg', alt: { fr: 'Jason Duval, protagoniste de GTA VI', en: 'Jason Duval, GTA VI protagonist', es: 'Jason Duval, protagonista de GTA VI' }, category: 'characters', width: 1920, height: 1080 },
  { id: 'lucia-jason-duo', src: '/gta-vi/lucia-jason-duo.jpg', alt: { fr: 'Lucia et Jason ensemble dans Vice City', en: 'Lucia and Jason together in Vice City', es: 'Lucia y Jason juntos en Vice City' }, category: 'characters', width: 1920, height: 1080 },

  // Locations
  { id: 'vice-city-skyline', src: '/gta-vi/vice-city-skyline.jpg', alt: { fr: 'Skyline de Vice City au coucher du soleil', en: 'Vice City skyline at sunset', es: 'Horizonte de Vice City al atardecer' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'ocean-beach', src: '/gta-vi/ocean-beach.jpg', alt: { fr: 'Ocean Beach de Vice City, front de mer art deco', en: 'Vice City Ocean Beach, art deco waterfront', es: 'Ocean Beach de Vice City, frente maritimo art deco' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'leonida-keys', src: '/gta-vi/leonida-keys.jpg', alt: { fr: 'Les Leonida Keys, iles tropicales', en: 'Leonida Keys, tropical islands', es: 'Las Leonida Keys, islas tropicales' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'grassrivers', src: '/gta-vi/grassrivers.jpg', alt: { fr: 'Les marecages de Grassrivers, Everglades de Leonida', en: 'Grassrivers swamps, Leonida Everglades', es: 'Los pantanos de Grassrivers, Everglades de Leonida' }, category: 'locations', width: 1920, height: 1080 },
  { id: 'port-gellhorn', src: '/gta-vi/port-gellhorn.jpg', alt: { fr: 'Port Gellhorn, zone industrielle portuaire', en: 'Port Gellhorn, industrial harbor zone', es: 'Port Gellhorn, zona industrial portuaria' }, category: 'locations', width: 1920, height: 1080 },

  // Vehicles
  { id: 'sports-car', src: '/gta-vi/sports-car.jpg', alt: { fr: 'Voiture de sport dans les rues de Vice City', en: 'Sports car in Vice City streets', es: 'Coche deportivo en las calles de Vice City' }, category: 'vehicles', width: 1920, height: 1080 },
  { id: 'speedboat', src: '/gta-vi/speedboat.jpg', alt: { fr: 'Bateau rapide dans la baie de Vice City', en: 'Speedboat in Vice City bay', es: 'Lancha rapida en la bahia de Vice City' }, category: 'vehicles', width: 1920, height: 1080 },
  { id: 'motorcycle', src: '/gta-vi/motorcycle.jpg', alt: { fr: 'Moto sur Ocean Drive', en: 'Motorcycle on Ocean Drive', es: 'Moto en Ocean Drive' }, category: 'vehicles', width: 1920, height: 1080 },

  // Activities
  { id: 'heist-planning', src: '/gta-vi/heist-planning.jpg', alt: { fr: 'Preparation de braquage par Lucia et Jason', en: 'Heist planning by Lucia and Jason', es: 'Planificacion de atraco por Lucia y Jason' }, category: 'activities', width: 1920, height: 1080 },
  { id: 'fishing', src: '/gta-vi/fishing.jpg', alt: { fr: 'Peche en mer dans les Leonida Keys', en: 'Deep sea fishing in Leonida Keys', es: 'Pesca en mar en las Leonida Keys' }, category: 'activities', width: 1920, height: 1080 },
  { id: 'diving', src: '/gta-vi/diving.jpg', alt: { fr: 'Plongee sous-marine pres des Keys', en: 'Scuba diving near the Keys', es: 'Buceo cerca de las Keys' }, category: 'activities', width: 1920, height: 1080 },

  // Nightlife
  { id: 'nightclub', src: '/gta-vi/nightclub.jpg', alt: { fr: 'Club de nuit neon a Vice City', en: 'Neon nightclub in Vice City', es: 'Club nocturno neon en Vice City' }, category: 'nightlife', width: 1920, height: 1080 },
  { id: 'south-beach-night', src: '/gta-vi/south-beach-night.jpg', alt: { fr: 'South Beach la nuit, ambiance neon', en: 'South Beach at night, neon vibes', es: 'South Beach de noche, ambiente neon' }, category: 'nightlife', width: 1920, height: 1080 },
];

const CATEGORIES = [
  { id: 'all', label: { fr: 'Tout', en: 'All', es: 'Todo' } },
  { id: 'characters', label: { fr: 'Personnages', en: 'Characters', es: 'Personajes' } },
  { id: 'locations', label: { fr: 'Lieux', en: 'Locations', es: 'Lugares' } },
  { id: 'vehicles', label: { fr: 'Vehicules', en: 'Vehicles', es: 'Vehiculos' } },
  { id: 'activities', label: { fr: 'Activites', en: 'Activities', es: 'Actividades' } },
  { id: 'nightlife', label: { fr: 'Vie nocturne', en: 'Nightlife', es: 'Vida nocturna' } },
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
                  : 'Explore official GTA VI screenshots: Vice City, characters, vehicles and more.'}
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
