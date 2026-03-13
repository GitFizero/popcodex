'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';

// Hero images
const heroLandscape = '/images/gta-vi/jason-lucia-hero-landscape.jpg';
const heroPortrait = '/images/gta-vi/jason-lucia-hero-portrait.jpg';
const heroSquare = '/images/gta-vi/jason-lucia-hero-square.jpg';

// Gallery images
const jasonLucia02Landscape = '/images/gta-vi/jason-lucia-02-landscape.jpg';
const jasonLucia02Portrait = '/images/gta-vi/jason-lucia-02-portrait.jpg';
const jasonLucia02Square = '/images/gta-vi/jason-lucia-02-square.jpg';
const jasonLucia02LogosLandscape = '/images/gta-vi/jason-lucia-02-logos-landscape.jpg';
const jasonLucia02LogosPortrait = '/images/gta-vi/jason-lucia-02-logos-portrait.jpg';
const jasonLucia02LogosSquare = '/images/gta-vi/jason-lucia-02-logos-square.jpg';
const jasonLuciaMotelLandscape = '/images/gta-vi/jason-lucia-motel-landscape.jpg';
const jasonLuciaMotelPortrait = '/images/gta-vi/jason-lucia-motel-portrait.jpg';
const jasonLuciaMotelSquare = '/images/gta-vi/jason-lucia-motel-square.jpg';

// Gallery - Jason & Lucia 01
const jasonLucia01Landscape = '/images/gta-vi/jason-lucia-01-landscape.jpg';
const jasonLucia01Portrait = '/images/gta-vi/jason-lucia-01-portrait.jpg';
const jasonLucia01Square = '/images/gta-vi/jason-lucia-01-square.jpg';

// Character images
const raulPortrait = '/images/gta-vi/raul-bautista-portrait.jpg';
const raulLandscape = '/images/gta-vi/raul-bautista-landscape.jpg';
const realDimezPortrait = '/images/gta-vi/real-dimez-portrait.jpg';
const realDimezLandscape = '/images/gta-vi/real-dimez-landscape.jpg';
const boobiePortrait = '/images/gta-vi/boobie-ike-portrait.jpg';
const boobieLandscape = '/images/gta-vi/boobie-ike-landscape.jpg';
const calPortrait = '/images/gta-vi/cal-hampton-portrait.jpg';
const calLandscape = '/images/gta-vi/cal-hampton-landscape.jpg';
const brianPortrait = '/images/gta-vi/brian-heder-portrait.jpg';
const brianLandscape = '/images/gta-vi/brian-heder-landscape.jpg';
const drequanPortrait = '/images/gta-vi/drequan-priest-portrait.jpg';
const drequanLandscape = '/images/gta-vi/drequan-priest-landscape.jpg';

// Artwork / Postcards
const viceCityPostcardLandscape = '/images/gta-vi/vice-city-postcard-landscape.jpg';
const viceCityPostcardPortrait = '/images/gta-vi/vice-city-postcard-portrait.jpg';
const viceCityPostcardSquare = '/images/gta-vi/vice-city-postcard-square.jpg';
const ambrosiaPostcardLandscape = '/images/gta-vi/ambrosia-postcard-landscape.jpg';
const ambrosiaPostcardPortrait = '/images/gta-vi/ambrosia-postcard-portrait.jpg';
const ambrosiaPostcardSquare = '/images/gta-vi/ambrosia-postcard-square.jpg';
const grassriversPostcardLandscape = '/images/gta-vi/grassrivers-postcard-landscape.jpg';
const grassriversPostcardPortrait = '/images/gta-vi/grassrivers-postcard-portrait.jpg';
const grassriversPostcardSquare = '/images/gta-vi/grassrivers-postcard-square.jpg';
const leonidaKeysPostcardLandscape = '/images/gta-vi/leonida-keys-postcard-landscape.jpg';
const leonidaKeysPostcardPortrait = '/images/gta-vi/leonida-keys-postcard-portrait.jpg';
const leonidaKeysPostcardSquare = '/images/gta-vi/leonida-keys-postcard-square.jpg';
const mountKalagaPostcardLandscape = '/images/gta-vi/mount-kalaga-postcard-landscape.jpg';
const mountKalagaPostcardPortrait = '/images/gta-vi/mount-kalaga-postcard-portrait.jpg';
const mountKalagaPostcardSquare = '/images/gta-vi/mount-kalaga-postcard-square.jpg';
const portGellhornPostcardLandscape = '/images/gta-vi/port-gellhorn-postcard-landscape.jpg';
const portGellhornPostcardPortrait = '/images/gta-vi/port-gellhorn-postcard-portrait.jpg';
const portGellhornPostcardSquare = '/images/gta-vi/port-gellhorn-postcard-square.jpg';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  titleEn: string;
  category: 'protagonist' | 'character' | 'artwork';
  aspect: 'landscape' | 'portrait' | 'square';
}

const galleryImages: GalleryImage[] = [
  // Protagonists - Hero Art
  { id: 'hero-1', src: heroLandscape, title: 'Jason & Lucia - Art Officiel', titleEn: 'Jason & Lucia - Official Art', category: 'protagonist', aspect: 'landscape' },
  { id: 'hero-2', src: heroPortrait, title: 'Jason & Lucia - Portrait', titleEn: 'Jason & Lucia - Portrait', category: 'protagonist', aspect: 'portrait' },
  { id: 'hero-3', src: heroSquare, title: 'Jason & Lucia - Carré', titleEn: 'Jason & Lucia - Square', category: 'protagonist', aspect: 'square' },

  // Protagonists - Action Art
  { id: 'action-1', src: jasonLucia02LogosLandscape, title: 'Jason & Lucia - Docks (Logos)', titleEn: 'Jason & Lucia - Docks (Logos)', category: 'protagonist', aspect: 'landscape' },
  { id: 'action-2', src: jasonLucia02LogosPortrait, title: 'Jason & Lucia - Combat (Logos)', titleEn: 'Jason & Lucia - Combat (Logos)', category: 'protagonist', aspect: 'portrait' },
  { id: 'action-3', src: jasonLucia02LogosSquare, title: 'Jason & Lucia - Action (Logos)', titleEn: 'Jason & Lucia - Action (Logos)', category: 'protagonist', aspect: 'square' },
  { id: 'action-4', src: jasonLucia02Landscape, title: 'Jason & Lucia - Action', titleEn: 'Jason & Lucia - Action', category: 'protagonist', aspect: 'landscape' },
  { id: 'action-5', src: jasonLucia02Portrait, title: 'Jason & Lucia - Combat', titleEn: 'Jason & Lucia - Combat', category: 'protagonist', aspect: 'portrait' },
  { id: 'action-6', src: jasonLucia02Square, title: 'Jason & Lucia - Docks', titleEn: 'Jason & Lucia - Docks', category: 'protagonist', aspect: 'square' },

  // Protagonists - Motel
  { id: 'motel-1', src: jasonLuciaMotelLandscape, title: 'Jason & Lucia - Motel', titleEn: 'Jason & Lucia - Motel', category: 'protagonist', aspect: 'landscape' },
  { id: 'motel-2', src: jasonLuciaMotelPortrait, title: 'Jason & Lucia - Motel (Portrait)', titleEn: 'Jason & Lucia - Motel (Portrait)', category: 'protagonist', aspect: 'portrait' },
  { id: 'motel-3', src: jasonLuciaMotelSquare, title: 'Jason & Lucia - Motel (Carré)', titleEn: 'Jason & Lucia - Motel (Square)', category: 'protagonist', aspect: 'square' },

  // Protagonists - Car Art
  { id: 'car-1', src: jasonLucia01Landscape, title: 'Jason & Lucia - Voiture', titleEn: 'Jason & Lucia - Car', category: 'protagonist', aspect: 'landscape' },
  { id: 'car-2', src: jasonLucia01Portrait, title: 'Jason & Lucia - Voiture (Portrait)', titleEn: 'Jason & Lucia - Car (Portrait)', category: 'protagonist', aspect: 'portrait' },
  { id: 'car-3', src: jasonLucia01Square, title: 'Jason & Lucia - Voiture (Carré)', titleEn: 'Jason & Lucia - Car (Square)', category: 'protagonist', aspect: 'square' },

  // Characters
  { id: 'raul-1', src: raulPortrait, title: 'Raul Bautista - Portrait', titleEn: 'Raul Bautista - Portrait', category: 'character', aspect: 'portrait' },
  { id: 'raul-2', src: raulLandscape, title: 'Raul Bautista - Paysage', titleEn: 'Raul Bautista - Landscape', category: 'character', aspect: 'landscape' },
  { id: 'dimez-1', src: realDimezPortrait, title: 'Real Dimez - Portrait', titleEn: 'Real Dimez - Portrait', category: 'character', aspect: 'portrait' },
  { id: 'dimez-2', src: realDimezLandscape, title: 'Real Dimez - Vice City', titleEn: 'Real Dimez - Vice City', category: 'character', aspect: 'landscape' },
  { id: 'boobie-1', src: boobiePortrait, title: 'Boobie Ike - Portrait', titleEn: 'Boobie Ike - Portrait', category: 'character', aspect: 'portrait' },
  { id: 'boobie-2', src: boobieLandscape, title: 'Boobie Ike - Paysage', titleEn: 'Boobie Ike - Landscape', category: 'character', aspect: 'landscape' },
  { id: 'cal-1', src: calPortrait, title: 'Cal Hampton - Portrait', titleEn: 'Cal Hampton - Portrait', category: 'character', aspect: 'portrait' },
  { id: 'cal-2', src: calLandscape, title: 'Cal Hampton - Paysage', titleEn: 'Cal Hampton - Landscape', category: 'character', aspect: 'landscape' },
  { id: 'brian-1', src: brianPortrait, title: 'Brian Heder - Portrait', titleEn: 'Brian Heder - Portrait', category: 'character', aspect: 'portrait' },
  { id: 'brian-2', src: brianLandscape, title: 'Brian Heder - Paysage', titleEn: 'Brian Heder - Landscape', category: 'character', aspect: 'landscape' },
  { id: 'drequan-1', src: drequanPortrait, title: "Dre'Quan Priest - Portrait", titleEn: "Dre'Quan Priest - Portrait", category: 'character', aspect: 'portrait' },
  { id: 'drequan-2', src: drequanLandscape, title: "Dre'Quan Priest - Paysage", titleEn: "Dre'Quan Priest - Landscape", category: 'character', aspect: 'landscape' },

  // Artworks / Postcards
  { id: 'vc-postcard-1', src: viceCityPostcardLandscape, title: 'Vice City - Carte Postale', titleEn: 'Vice City - Postcard', category: 'artwork', aspect: 'landscape' },
  { id: 'vc-postcard-2', src: viceCityPostcardPortrait, title: 'Vice City - Carte Postale (Portrait)', titleEn: 'Vice City - Postcard (Portrait)', category: 'artwork', aspect: 'portrait' },
  { id: 'vc-postcard-3', src: viceCityPostcardSquare, title: 'Vice City - Carte Postale (Carré)', titleEn: 'Vice City - Postcard (Square)', category: 'artwork', aspect: 'square' },
  { id: 'ambrosia-1', src: ambrosiaPostcardLandscape, title: 'Ambrosia - Carte Postale', titleEn: 'Ambrosia - Postcard', category: 'artwork', aspect: 'landscape' },
  { id: 'ambrosia-2', src: ambrosiaPostcardPortrait, title: 'Ambrosia - Carte Postale (Portrait)', titleEn: 'Ambrosia - Postcard (Portrait)', category: 'artwork', aspect: 'portrait' },
  { id: 'ambrosia-3', src: ambrosiaPostcardSquare, title: 'Ambrosia - Carte Postale (Carré)', titleEn: 'Ambrosia - Postcard (Square)', category: 'artwork', aspect: 'square' },
  { id: 'grassrivers-1', src: grassriversPostcardLandscape, title: 'Grassrivers - Carte Postale', titleEn: 'Grassrivers - Postcard', category: 'artwork', aspect: 'landscape' },
  { id: 'grassrivers-2', src: grassriversPostcardPortrait, title: 'Grassrivers - Carte Postale (Portrait)', titleEn: 'Grassrivers - Postcard (Portrait)', category: 'artwork', aspect: 'portrait' },
  { id: 'grassrivers-3', src: grassriversPostcardSquare, title: 'Grassrivers - Carte Postale (Carré)', titleEn: 'Grassrivers - Postcard (Square)', category: 'artwork', aspect: 'square' },
  { id: 'keys-postcard-1', src: leonidaKeysPostcardLandscape, title: 'Leonida Keys - Carte Postale', titleEn: 'Leonida Keys - Postcard', category: 'artwork', aspect: 'landscape' },
  { id: 'keys-postcard-2', src: leonidaKeysPostcardPortrait, title: 'Leonida Keys - Carte Postale (Portrait)', titleEn: 'Leonida Keys - Postcard (Portrait)', category: 'artwork', aspect: 'portrait' },
  { id: 'keys-postcard-3', src: leonidaKeysPostcardSquare, title: 'Leonida Keys - Carte Postale (Carré)', titleEn: 'Leonida Keys - Postcard (Square)', category: 'artwork', aspect: 'square' },
  { id: 'kalaga-postcard-1', src: mountKalagaPostcardLandscape, title: 'Mount Kalaga - Carte Postale', titleEn: 'Mount Kalaga - Postcard', category: 'artwork', aspect: 'landscape' },
  { id: 'kalaga-postcard-2', src: mountKalagaPostcardPortrait, title: 'Mount Kalaga - Carte Postale (Portrait)', titleEn: 'Mount Kalaga - Postcard (Portrait)', category: 'artwork', aspect: 'portrait' },
  { id: 'kalaga-postcard-3', src: mountKalagaPostcardSquare, title: 'Mount Kalaga - Carte Postale (Carré)', titleEn: 'Mount Kalaga - Postcard (Square)', category: 'artwork', aspect: 'square' },
  { id: 'gellhorn-postcard-1', src: portGellhornPostcardLandscape, title: 'Port Gellhorn - Carte Postale', titleEn: 'Port Gellhorn - Postcard', category: 'artwork', aspect: 'landscape' },
  { id: 'gellhorn-postcard-2', src: portGellhornPostcardPortrait, title: 'Port Gellhorn - Carte Postale (Portrait)', titleEn: 'Port Gellhorn - Postcard (Portrait)', category: 'artwork', aspect: 'portrait' },
  { id: 'gellhorn-postcard-3', src: portGellhornPostcardSquare, title: 'Port Gellhorn - Carte Postale (Carré)', titleEn: 'Port Gellhorn - Postcard (Square)', category: 'artwork', aspect: 'square' },
];

const Gallery = ({ locale }: { locale: string }) => {
  const { t, lang } = useGtaI18n(locale);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<'all' | 'protagonist' | 'character' | 'artwork'>('all');

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  const currentIndex = selectedImage
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  const filters = [
    { key: 'all', label: t('inline.filterAll') },
    { key: 'protagonist', label: t('inline.filterProtagonists') },
    { key: 'character', label: t('inline.filterCharacters') },
    { key: 'artwork', label: t('inline.filterScenery') },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,67%,2%)] pt-20 pb-32">
      {/* Header */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-rajdhani text-xs tracking-[0.3em] text-neon-cyan mb-4">
            {t('inline.officialContent')}
          </p>
          <h1 className="font-bebas text-5xl md:text-7xl text-text-primary mb-4">
            {t('inline.gallery')}
          </h1>
          <p className="font-dm text-text-secondary max-w-2xl mx-auto">
            {t('inline.galleryDesc')}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key as typeof filter)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-rajdhani text-xs sm:text-sm tracking-wider transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-neon-pink text-white shadow-neon-pink'
                    : 'bg-[hsl(213,33%,13%)] text-text-secondary hover:bg-[hsl(213,33%,13%)]-hover hover:text-text-primary border border-border-subtle'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                  image.aspect === 'landscape' ? 'sm:col-span-2 aspect-video' :
                  image.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={image.src}
                  alt={lang === 'fr' ? image.title : image.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,67%,2%)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-neon-pink/20 backdrop-blur-sm flex items-center justify-center border border-neon-pink/50">
                    <ZoomIn className="w-6 h-6 text-neon-pink" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-barlow font-semibold text-white text-sm">
                    {lang === 'fr' ? image.title : image.titleEn}
                  </p>
                  <p className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest mt-0.5">© ROCKSTAR GAMES</p>
                </div>
                {/* Always-visible credit */}
                <div className="absolute top-2 right-2 font-rajdhani text-[0.45rem] px-1.5 py-0.5 rounded bg-[hsl(220,67%,2%,0.6)] backdrop-blur-sm text-text-muted-vice tracking-widest pointer-events-none">
                  © ROCKSTAR GAMES
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[hsl(220,67%,2%,0.95)] backdrop-blur-xl flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[hsl(213,33%,13%)]/80 backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-white hover:bg-neon-pink/20 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-2 sm:left-4 md:left-8 bottom-16 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[hsl(213,33%,13%)]/80 backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-white hover:bg-neon-cyan/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            className="absolute right-2 sm:right-4 md:right-8 bottom-16 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[hsl(213,33%,13%)]/80 backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-white hover:bg-neon-cyan/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-6xl max-h-[80vh] sm:max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={lang === 'fr' ? selectedImage.title : selectedImage.titleEn}
              className="max-w-full max-h-[75vh] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 bg-gradient-to-t from-[hsl(220,67%,2%)] to-transparent">
              <p className="font-barlow font-semibold text-white text-sm sm:text-lg text-center">
                {lang === 'fr' ? selectedImage.title : selectedImage.titleEn}
              </p>
              <p className="font-rajdhani text-[0.5rem] sm:text-xs text-text-muted-vice text-center mt-0.5">© Rockstar Games / Take-Two Interactive</p>
              <p className="font-rajdhani text-[0.6rem] sm:text-xs text-text-muted text-center mt-1">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <section className="px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-rajdhani text-xs text-text-muted">
            {t('inline.copyrightFull')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
