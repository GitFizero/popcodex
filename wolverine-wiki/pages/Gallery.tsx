// @ts-nocheck
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const GalleryPage = () => {
  const { t, lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.gallery.title[lang]}
        description={seo.gallery.desc[lang]}
        path="/gallery"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.gallery[lang], path: '/gallery' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={lang === 'fr' ? 'GALERIE' : 'GALLERY'} /></RevealOnScroll>
        <h1 className="sr-only">{seo.gallery.title[lang]}</h1>

        <RevealOnScroll className="mt-8">
          <div className="text-center py-16">
            <p className="font-heading text-lg text-text-muted-custom">
              {lang === 'fr' ? 'Galerie bientot disponible' : 'Gallery coming soon'}
            </p>
            <p className="font-body text-sm text-text-muted-custom mt-2">
              {lang === 'fr' ? "Les screenshots et artworks seront ajoutes a la sortie du jeu." : "Screenshots and artworks will be added at game launch."}
            </p>
          </div>
        </RevealOnScroll>

        {/* Community Section */}
        <RevealOnScroll className="mt-8">
          <GoldDivider variant="section" title={t('gallery.community_title')} />
          <div className="bg-surface/50 border border-border rounded-lg p-8 mt-8 text-center">
            <h3 className="font-heading text-xl text-gold-bright mb-3">{t('gallery.community_coming')}</h3>
            <p className="font-body text-sm text-text-secondary mb-4">{t('gallery.community_desc')}</p>
            <p className="font-ui text-xs tracking-wider text-yellow-500">{t('gallery.community_features')}</p>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default GalleryPage;
