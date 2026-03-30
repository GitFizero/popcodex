// @ts-nocheck
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import { mounts, TOTAL_MOUNTS } from '@/crimson-desert-wiki/data/mounts';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

const MountsPage = () => {
  const { lang, t } = useI18n();
  const known = mounts.filter(m => m.known);
  const unknown = TOTAL_MOUNTS - known.length;

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('mounts.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.mounts.title[lang]}</h1>

        {/* Taming system explanation */}
        <RevealOnScroll>
          <div className="mt-8 p-6 rounded-lg bg-surface/50 border border-border max-w-3xl mx-auto text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
            <span className="text-4xl mb-4 block">🐴</span>
            <h2 className="font-heading text-lg text-gold-bright">{t('mounts.taming_title')}</h2>
            <p className="font-body text-sm text-text-secondary mt-3 leading-relaxed max-w-xl mx-auto">{t('mounts.taming_desc')}</p>
            <div className="flex justify-center gap-6 mt-6">
              <div className="text-center">
                <div className="font-display text-2xl text-gold-bright">{TOTAL_MOUNTS}</div>
                <div className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom">{t('mounts.total')}</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl text-gold-mid">{known.length}</div>
                <div className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom">{t('mounts.documented')}</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl text-text-muted-custom">{unknown}</div>
                <div className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom">{t('mounts.unknown')}</div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mount list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {mounts.map((mount, i) => (
            <RevealOnScroll key={mount.id} stagger={i * 100}>
              <div className={`rounded-lg border p-5 transition-all duration-200 ${
                mount.known ? 'bg-surface/50 border-border hover:border-gold-mid/30' : 'bg-surface/20 border-border/50 opacity-60'}`}
                style={{ boxShadow: mount.known ? 'var(--shadow-card)' : 'none' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{mount.known ? '🐴' : '❓'}</span>
                  <div>
                    <h3 className="font-heading text-sm text-text-primary">{mount.name[lang]}</h3>
                    {mount.staminaRequired && (
                      <span className="font-ui text-[0.55rem] tracking-wider text-gold-mid">
                        Stamina: {mount.staminaRequired}
                      </span>
                    )}
                  </div>
                </div>
                <p className="font-body text-xs text-text-secondary leading-relaxed">{mount.description[lang]}</p>
                {mount.known && (
                  <div className="mt-3 flex items-center gap-4">
                    {mount.speed && (
                      <div className="flex items-center gap-1">
                        <span className="font-ui text-[0.55rem] text-text-muted-custom">{t('mounts.speed')}:</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 10 }, (_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-sm ${i < mount.speed! ? 'bg-gold-mid' : 'bg-raised'}`} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="mt-3 p-2 bg-raised/20 rounded text-center">
                  <span className="font-ui text-[0.55rem] tracking-wider text-text-muted-custom">📍 {mount.location[lang]}</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}

          {/* Placeholder for remaining unknown mounts */}
          {Array.from({ length: Math.max(0, unknown - mounts.filter(m => !m.known).length) }, (_, i) => (
            <RevealOnScroll key={`unknown-${i}`} stagger={(mounts.length + i) * 100}>
              <div className="rounded-lg border border-border/30 p-5 bg-surface/10 opacity-40 flex flex-col items-center justify-center min-h-[160px]">
                <span className="text-3xl mb-2">❓</span>
                <span className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom">{t('mounts.awaiting')}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MountsPage;
