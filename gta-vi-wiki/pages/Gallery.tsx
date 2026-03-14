// @ts-nocheck
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';

const Gallery = () => {
  const { t, lang } = useI18n();

  const placeholderItems = [
    { label: 'Vice City Skyline', color: '#FF1493' },
    { label: 'Leonida Keys Sunset', color: '#00FFFF' },
    { label: 'Grassrivers Swamps', color: '#2E8B57' },
    { label: 'Port Gellhorn', color: '#708090' },
    { label: 'Ambrosia Refinery', color: '#8B7355' },
    { label: 'Mount Kalaga', color: '#228B22' },
    { label: 'Ocean Beach', color: '#FF1493' },
    { label: 'Lucia & Jason', color: '#00FFFF' },
  ];

  return (
    <>
      <SEOHead
        title={lang === 'fr' ? 'Galerie GTA VI' : lang === 'es' ? 'Galeria GTA VI' : 'GTA VI Gallery'}
        description={lang === 'fr' ? 'Galerie d\'images GTA VI.' : 'GTA VI image gallery.'}
        path="/gallery"
        lang={lang}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-6xl mx-auto pb-20">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {lang === 'fr' ? 'GALERIE' : lang === 'es' ? 'GALERIA' : 'GALLERY'}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {placeholderItems.map((item, i) => (
              <RevealOnScroll key={i} stagger={i * 50}>
                <div className="aspect-video rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}08)`, border: `1px solid ${item.color}22` }}>
                  <span className="text-xs tracking-wider text-center px-4" style={{ color: `${item.color}88` }}>{item.label}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('about.images_credit')}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
