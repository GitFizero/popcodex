// @ts-nocheck
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const MountsPage = () => {
  const { t, lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.mounts.title[lang]}
        description={seo.mounts.desc[lang]}
        path="/mounts"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.mounts[lang], path: '/mounts' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('mounts.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.mounts.title[lang]}</h1>

        <RevealOnScroll className="mt-8">
          <div className="bg-surface/50 border border-border rounded-lg p-8">
            <h2 className="font-heading text-lg text-gold-bright mb-3">{t('mounts.taming_title')}</h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('mounts.taming_desc')}</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-8">
          <div className="bg-surface/50 border border-border rounded-lg p-12 text-center">
            <p className="font-body text-sm text-text-muted-custom">{t('mounts.awaiting')}</p>
            <p className="font-ui text-xs text-text-muted-custom mt-4">
              {lang === 'fr' ? "Les vehicules seront documentes a la sortie du jeu." : "Vehicles will be documented at game launch."}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default MountsPage;
