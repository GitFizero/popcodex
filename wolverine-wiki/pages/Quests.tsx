// @ts-nocheck
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const QuestsPage = () => {
  const { t, lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.quests.title[lang]}
        description={seo.quests.desc[lang]}
        path="/quests"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.quests[lang], path: '/quests' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('quests.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.quests.title[lang]}</h1>
        <p className="font-body text-sm text-text-secondary text-center mt-4 mb-8">{t('quests.subtitle')}</p>

        <RevealOnScroll className="mt-8">
          <div className="bg-surface/50 border border-border rounded-lg p-12 text-center">
            <p className="font-body text-sm text-text-muted-custom">{t('quests.select')}</p>
            <p className="font-ui text-xs text-text-muted-custom mt-4">
              {lang === 'fr' ? "Les missions seront detaillees a la sortie du jeu." : "Missions will be detailed at game launch."}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default QuestsPage;
