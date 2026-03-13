'use client';

import { useMemo } from 'react';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import { mounts, TOTAL_MOUNTS, type Mount } from '@/lib/data/crimson-desert/mounts';

const CrimsonMounts = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);

  const documented = useMemo(() => mounts.filter(m => m.known).length, []);
  const unknown = TOTAL_MOUNTS - documented;

  /* Placeholder mount silhouettes for the empty grid */
  const placeholderSlots = useMemo(() => {
    const slots = [];
    for (let i = 0; i < 8; i++) {
      slots.push(i);
    }
    return slots;
  }, []);

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('mounts.title')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('mounts.title')}
              </h1>
              <p className="font-body text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
                {t('nav.db.mounts')}
              </p>
              <div className="flex justify-center mt-6">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Stats Row */}
          <RevealOnScroll>
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { label: t('mounts.total'), value: TOTAL_MOUNTS },
                { label: t('mounts.documented'), value: documented },
                { label: t('mounts.unknown'), value: unknown },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface-elevated rounded-lg border border-border p-6 text-center"
                >
                  <p className="font-display text-2xl sm:text-3xl text-gold-bright" style={{ textShadow: '0 0 20px hsl(var(--gold-glow)/0.3)' }}>
                    {stat.value}
                  </p>
                  <p className="font-ui text-[0.6rem] tracking-[0.3em] text-text-secondary mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Taming System */}
          <RevealOnScroll>
            <div className="bg-surface-elevated rounded-lg border border-gold-mid/30 p-8 mb-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(ellipse at top right, hsl(var(--gold-bright)) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">&#x1F40E;</span>
                  <h2 className="font-heading text-lg tracking-[0.15em] text-gold-bright">
                    {t('mounts.taming_title')}
                  </h2>
                </div>
                <p className="font-body text-sm text-text-primary leading-[1.8]">
                  {t('mounts.taming_desc')}
                </p>

                {/* Taming visual */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-surface rounded-lg border border-border p-4 text-center">
                    <div className="text-3xl mb-2 opacity-60">&#x1F3AF;</div>
                    <p className="font-ui text-[0.6rem] tracking-[0.2em] text-gold-mid mb-1">STEP I</p>
                    <p className="font-body text-xs text-text-secondary leading-relaxed italic">
                      Approach the wild beast with caution. Move slowly through the wilderness until the creature is within reach.
                    </p>
                  </div>
                  <div className="bg-surface rounded-lg border border-border p-4 text-center">
                    <div className="text-3xl mb-2 opacity-60">&#x1F4AA;</div>
                    <p className="font-ui text-[0.6rem] tracking-[0.2em] text-gold-mid mb-1">STEP II</p>
                    <p className="font-body text-xs text-text-secondary leading-relaxed italic">
                      Expend stamina to wrestle and calm the mount. Rarer beasts demand greater reserves of endurance.
                    </p>
                  </div>
                  <div className="bg-surface rounded-lg border border-border p-4 text-center">
                    <div className="text-3xl mb-2 opacity-60">&#x1F3C7;</div>
                    <p className="font-ui text-[0.6rem] tracking-[0.2em] text-gold-mid mb-1">STEP III</p>
                    <p className="font-body text-xs text-text-secondary leading-relaxed italic">
                      Once tamed, the mount becomes a loyal companion for traversal across the vast lands of Pywel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <GoldDivider variant="section" title={t('nav.db.mounts')} />

          {/* Mount Grid */}
          {mounts.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {mounts.map((mount, i) => (
                <RevealOnScroll key={mount.id} stagger={i * 60}>
                  <div className="bg-surface-elevated rounded-lg border border-border p-6 hover:border-gold-mid/40 transition-all duration-300">
                    <div className="text-3xl mb-3 opacity-60">&#x1F40E;</div>
                    <h3 className="font-heading text-sm text-gold-bright mb-2">
                      {tr(mount.name, lang)}
                    </h3>
                    <p className="font-body text-xs text-text-secondary leading-relaxed mb-3">
                      {tr(mount.description, lang)}
                    </p>
                    {mount.speed !== null && (
                      <div className="flex items-center gap-2">
                        <span className="font-ui text-[0.55rem] tracking-wider text-text-secondary">
                          {t('mounts.speed')}
                        </span>
                        <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${(mount.speed / 10) * 100}%`,
                              background: 'linear-gradient(90deg, hsl(var(--gold-dark)), hsl(var(--gold-bright)))',
                            }}
                          />
                        </div>
                        <span className="font-ui text-[0.55rem] text-gold-mid">{mount.speed}/10</span>
                      </div>
                    )}
                    {!mount.known && (
                      <p className="font-ui text-[0.5rem] tracking-[0.2em] text-gold-muted mt-3 italic">
                        {t('mounts.awaiting')}
                      </p>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            /* Empty state — awaiting official data */
            <RevealOnScroll>
              <div className="mt-12 text-center py-24">
                <div className="inline-block p-8 rounded-lg border border-gold-mid/20 bg-surface-elevated max-w-xl">
                  <div className="text-5xl mb-6 opacity-40">&#x1F40E;</div>
                  <h2 className="font-display text-xl sm:text-2xl text-gold-mid mb-4" style={{ textShadow: '0 0 20px hsl(var(--gold-glow)/0.3)' }}>
                    The Stablemaster&apos;s Ledger Awaits
                  </h2>
                  <p className="font-body text-sm text-text-secondary max-w-md mx-auto leading-relaxed italic">
                    &ldquo;The beasts of Pywel roam free across highland and vale, yet none have been chronicled
                    in these pages. When the stables open their gates, every steed, war-mount, and
                    exotic creature shall be catalogued herein.&rdquo;
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="h-px w-32 bg-gold-mid/30" />
                  </div>
                  <p className="font-ui text-[0.6rem] tracking-[0.3em] text-gold-muted mt-4">
                    AWAITING PEARL ABYSS OFFICIAL DATA
                  </p>

                  {/* Placeholder grid */}
                  <div className="mt-10 grid grid-cols-4 gap-3">
                    {placeholderSlots.map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg border border-border bg-surface flex items-center justify-center opacity-30"
                      >
                        <span className="text-2xl">&#x2753;</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonMounts;
