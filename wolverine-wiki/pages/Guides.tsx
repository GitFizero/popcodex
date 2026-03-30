// @ts-nocheck
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const GuidesPage = () => {
  const { t, lang } = useI18n();

  const guides = [
    { title: { fr: 'Guide du debutant', en: 'Beginner Guide' }, desc: { fr: 'Les bases du combat et de l\'exploration.', en: 'Combat and exploration basics.' }, icon: '📖' },
    { title: { fr: 'Guide des boss', en: 'Boss Guide' }, desc: { fr: 'Strategies pour vaincre chaque boss.', en: 'Strategies to defeat each boss.' }, icon: '💀' },
    { title: { fr: 'Carte du monde', en: 'World Map' }, desc: { fr: 'Tous les lieux et collectibles.', en: 'All locations and collectibles.' }, icon: '🗺' },
    { title: { fr: 'Arbre de competences', en: 'Skill Tree' }, desc: { fr: 'Guide de progression optimale.', en: 'Optimal progression guide.' }, icon: '🌳' },
  ];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.guides.title[lang]}
        description={seo.guides.desc[lang]}
        path="/guides"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.guides[lang], path: '/guides' },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={lang === 'fr' ? 'GUIDES' : 'GUIDES'} /></RevealOnScroll>
        <h1 className="sr-only">{seo.guides.title[lang]}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {guides.map((guide, i) => (
            <RevealOnScroll key={guide.title.en} stagger={i * 100}>
              <div className="bg-surface/50 border border-border rounded-lg p-6 hover:border-yellow-500/30 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{guide.icon}</span>
                  <h3 className="font-heading text-lg text-text-primary">{guide.title[lang]}</h3>
                </div>
                <p className="font-body text-sm text-text-secondary">{guide.desc[lang]}</p>
                <p className="font-ui text-xs text-text-muted-custom mt-3">
                  {lang === 'fr' ? 'Bientot disponible' : 'Coming soon'}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GuidesPage;
