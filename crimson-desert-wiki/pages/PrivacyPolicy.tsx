// @ts-nocheck
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

const PrivacyPolicy = () => {
  const { t, lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.privacy.title[lang]}
        description={seo.privacy.desc[lang]}
        path="/privacy"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.privacy[lang], path: '/privacy' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('privacy.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.privacy.title[lang]}</h1>

        <RevealOnScroll className="mt-8 space-y-8">
          <section>
            <h2 className="font-heading text-lg text-gold-bright mb-3">{t('privacy.intro.title')}</h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('privacy.intro.text')}</p>
          </section>

          <GoldDivider variant="short" />

          <section>
            <h2 className="font-heading text-lg text-gold-bright mb-3">{t('privacy.data.title')}</h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('privacy.data.text')}</p>
          </section>

          <GoldDivider variant="short" />

          <section>
            <h2 className="font-heading text-lg text-gold-bright mb-3">{t('privacy.cookies.title')}</h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('privacy.cookies.text')}</p>
          </section>

          <GoldDivider variant="short" />

          <section>
            <h2 className="font-heading text-lg text-gold-bright mb-3">{t('privacy.ads.title')}</h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('privacy.ads.text')}</p>
          </section>

          <GoldDivider variant="short" />

          <section>
            <h2 className="font-heading text-lg text-gold-bright mb-3">{t('privacy.rights.title')}</h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('privacy.rights.text')}</p>
          </section>

          <GoldDivider variant="short" />

          <section>
            <h2 className="font-heading text-lg text-gold-bright mb-3">{t('privacy.contact.title')}</h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('privacy.contact.text')}</p>
            <a href="mailto:gaetan@batemark.com" className="inline-block mt-3 font-ui text-sm text-gold-mid hover:text-gold-bright transition-colors focus-gold">gaetan@batemark.com</a>
          </section>

          <GoldDivider variant="short" />

          <p className="font-ui text-[0.6rem] text-text-muted-custom text-center">{t('privacy.updated')}</p>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
