// @ts-nocheck
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const PrivacyPolicy = () => {
  const { t, lang } = useI18n();

  const sections = [
    { title: t('privacy.intro.title'), text: t('privacy.intro.text') },
    { title: t('privacy.data.title'), text: t('privacy.data.text') },
    { title: t('privacy.cookies.title'), text: t('privacy.cookies.text') },
    { title: t('privacy.rights.title'), text: t('privacy.rights.text') },
  ];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.privacy.title[lang]}
        description={seo.privacy.desc[lang]}
        path="/privacy"
        lang={lang}
        noindex
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.privacy[lang], path: '/privacy' },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('privacy.title')} />
        </RevealOnScroll>

        <div className="space-y-8 mt-8">
          {sections.map((section, i) => (
            <RevealOnScroll key={i} stagger={i * 100}>
              <div className="p-6 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)]">
                <h2 className="font-heading text-lg text-emerald-400 tracking-wider mb-3">{section.title}</h2>
                <p className="font-body text-sm text-gray-300 leading-relaxed">{section.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="mt-8 text-center">
            <p className="font-body text-[0.65rem] text-gray-600">
              {lang === 'fr' ? 'Derniere mise a jour : Mars 2026' : 'Last updated: March 2026'}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
