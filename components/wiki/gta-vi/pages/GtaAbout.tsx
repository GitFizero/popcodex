'use client';

import { useGtaI18n } from '@/lib/data/gta-vi/i18n';

const AboutPage = ({ locale }: { locale: string }) => {
  const { t } = useGtaI18n(locale);

  return (
    <div className="min-h-screen pt-16 pb-10">
      {/* Legal Disclaimer */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[hsl(213,33%,13%)] rounded-xl p-6 border border-destructive/20 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="font-bebas text-2xl sm:text-3xl text-destructive mb-4 text-center">{t('about.legal')}</h1>
              
              <div className="font-dm text-xs text-text-secondary leading-relaxed space-y-3">
                <p>
                  {t('inline.thisIsAn')} <strong className="text-text-primary">{t('about.unofficial')}</strong> {t('inline.dedicatedTo')}
                </p>
                <p>{t('inline.allNamesProperty')}</p>
                <p>
                  {t('inline.thisIsNot')} <strong className="text-text-primary">{t('about.notaffiliated')}</strong> {t('inline.inAnyWay')}
                </p>
              </div>

              <div className="mt-6 p-3 bg-[hsl(214,36%,10%)] rounded-lg border border-neon-pink/10">
                <p className="font-rajdhani text-[0.55rem] text-neon-pink tracking-widest text-center">
                  {t('footer.disclaimer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the project */}
      <section className="py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bebas text-2xl text-text-primary mb-4">{t('about.title')}</h2>
          <p className="font-dm text-xs text-text-secondary leading-relaxed mb-6">
            {t('inline.aboutProject')}
          </p>

          <h3 className="font-bebas text-xl text-text-primary mt-8 mb-3">{t('about.sources')}</h3>
          <div className="space-y-1.5">
            {[
              { label: t('inline.officialSite'), url: 'rockstargames.com/VI' },
              { label: 'Trailer 1', url: t('inline.dec2023') },
              { label: 'Trailer 2', url: t('inline.may2025') },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-2 bg-[hsl(213,33%,13%)] rounded-lg p-2.5">
                <span className="font-rajdhani text-[0.55rem] text-neon-cyan tracking-widest">{s.label.toUpperCase()}</span>
                <span className="font-dm text-[0.6rem] text-text-muted-vice">{s.url}</span>
              </div>
            ))}
          </div>

          <h3 className="font-bebas text-xl text-text-primary mt-8 mb-3">{t('about.badges')}</h3>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-neon-green/20 text-neon-green tracking-widest">{t('lore.official')}</span>
              <span className="font-dm text-xs text-text-secondary">{t('inline.officialSources')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-neon-yellow/20 text-neon-yellow tracking-widest">{t('lore.trailer')}</span>
              <span className="font-dm text-xs text-text-secondary">{t('inline.trailerElements')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-destructive/20 text-destructive tracking-widest">{t('lore.speculative')}</span>
              <span className="font-dm text-xs text-text-secondary">{t('inline.communityTheories')}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
