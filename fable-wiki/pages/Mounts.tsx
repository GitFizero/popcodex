// @ts-nocheck
import { useI18n } from '@/fable-wiki/context/I18nContext';
import { mounts, TOTAL_MOUNTS } from '@/fable-wiki/data/mounts';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Mounts = () => {
  const { t, lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
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

      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('mounts.title')} />
        </RevealOnScroll>

        {/* System info */}
        <RevealOnScroll>
          <div className="mt-8 p-6 rounded-lg border border-emerald-700/30 bg-[hsl(150,30%,5%)]" style={{ boxShadow: '0 0 40px rgba(34,197,94,0.1)' }}>
            <h2 className="font-display text-xl text-emerald-400 mb-3">{t('mounts.taming_title')}</h2>
            <p className="font-body text-sm text-gray-300 leading-relaxed">{t('mounts.taming_desc')}</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="font-body text-[0.6rem] tracking-wider text-gray-500">{t('mounts.total')}</span>
              <span className="font-display text-lg text-emerald-400">{TOTAL_MOUNTS}</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mounts list or placeholder */}
        {mounts.length === 0 ? (
          <RevealOnScroll>
            <div className="mt-12 text-center py-16">
              <div className="w-20 h-20 rounded-full border-2 border-emerald-700/30 flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-600">
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 7 8 12 8 12s8-5 8-12c0-4.42-3.58-8-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-emerald-400 tracking-wider">
                {lang === 'fr' ? 'INFORMATIONS A VENIR' : 'INFORMATION COMING SOON'}
              </h3>
              <p className="font-body text-sm text-gray-500 mt-3 max-w-md mx-auto">
                {lang === 'fr'
                  ? "Les details sur les montures de Fable n'ont pas encore ete officiellement confirmes par Playground Games. Cette section sera mise a jour des que des informations seront disponibles."
                  : "Mount details for Fable have not yet been officially confirmed by Playground Games. This section will be updated as information becomes available."
                }
              </p>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="space-y-3 mt-8">
            {mounts.map((mount, i) => (
              <RevealOnScroll key={mount.id} stagger={i * 50}>
                <div className="p-4 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)]">
                  <h3 className="font-heading text-sm text-emerald-400">{mount.name[lang]}</h3>
                  <p className="font-body text-xs text-gray-400 mt-1">{mount.description[lang]}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Mounts;
