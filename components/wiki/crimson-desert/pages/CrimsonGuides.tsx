'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import { blogArticles } from '@/lib/data/crimson-desert/blog';

interface GuideSection {
  icon: string;
  titleKey: string;
  tips: string[];
}

const staticGuideSections: GuideSection[] = [
  {
    icon: '\u2694\uFE0F',
    titleKey: 'guides.beginner',
    tips: [
      'guides.beginner.tip1',
      'guides.beginner.tip2',
      'guides.beginner.tip3',
      'guides.beginner.tip4',
    ],
  },
  {
    icon: '\uD83D\uDDE1\uFE0F',
    titleKey: 'guides.combat',
    tips: [
      'guides.combat.tip1',
      'guides.combat.tip2',
      'guides.combat.tip3',
      'guides.combat.tip4',
    ],
  },
  {
    icon: '\uD83C\uDF0D',
    titleKey: 'guides.exploration',
    tips: [
      'guides.exploration.tip1',
      'guides.exploration.tip2',
      'guides.exploration.tip3',
      'guides.exploration.tip4',
    ],
  },
];

const CrimsonGuides = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const prefix = `/${locale}/crimson-desert`;

  /* Filter blog articles to guides only */
  const guideArticles = useMemo(() => {
    return blogArticles.filter(a => a.category === 'GUIDE');
  }, []);

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('guides.title')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('guides.title')}
              </h1>
              <p className="font-body text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
                {t('guides.subtitle')}
              </p>
              <div className="flex justify-center mt-6">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Blog Guide Articles */}
          {guideArticles.length > 0 && (
            <>
              <RevealOnScroll>
                <div className="mb-4">
                  <h2 className="font-heading text-lg tracking-[0.15em] text-gold-bright text-center">
                    {t('guides.articles_title')}
                  </h2>
                  <p className="font-body text-xs text-text-secondary text-center mt-2">
                    {t('guides.articles_desc')}
                  </p>
                </div>
              </RevealOnScroll>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {guideArticles.map((article, i) => (
                  <RevealOnScroll key={article.id} stagger={i * 80}>
                    <Link
                      href={`${prefix}/blog/${article.slug}`}
                      className="group block rounded-lg overflow-hidden border border-border hover:border-gold-mid/40 transition-all duration-300 bg-surface-elevated"
                      style={{ boxShadow: 'var(--shadow-card)' }}
                    >
                      {/* Cover image */}
                      <div className="relative h-[160px] overflow-hidden">
                        <img
                          src={article.coverImage}
                          alt={`${tr(article.title, lang)} — \u00A9 Pearl Abyss`}
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/50 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="font-ui text-[0.5rem] tracking-[0.2em] px-2 py-1 rounded bg-crimson-core/60 border border-crimson-bright/30 text-sand-pale">
                            GUIDE
                          </span>
                        </div>
                      </div>

                      <div className="p-5 -mt-4 relative z-10">
                        <h3 className="font-heading text-sm text-gold-bright group-hover:drop-shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-300 line-clamp-2">
                          {tr(article.title, lang)}
                        </h3>
                        <p className="font-body text-xs text-text-secondary mt-2 line-clamp-3 leading-relaxed">
                          {tr(article.excerpt, lang)}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="font-ui text-[0.55rem] tracking-wider text-text-secondary">
                            {article.readingTime} min
                          </span>
                          <span className="font-ui text-[0.55rem] text-gold-mid group-hover:text-gold-bright transition-colors">
                            {t('guides.read_more')} &rarr;
                          </span>
                        </div>
                      </div>
                    </Link>
                  </RevealOnScroll>
                ))}
              </div>
            </>
          )}

          <GoldDivider variant="section" title={t('guides.quick_tips')} />

          {/* Static Guide Sections */}
          <div className="mt-8 space-y-8">
            {staticGuideSections.map((section, sectionIdx) => (
              <RevealOnScroll key={section.titleKey} stagger={sectionIdx * 100}>
                <div className="bg-surface-elevated rounded-lg border border-border overflow-hidden">
                  {/* Section header */}
                  <div className="px-6 py-4 border-b border-border bg-surface flex items-center gap-3">
                    <span className="text-xl">{section.icon}</span>
                    <h3 className="font-heading text-sm tracking-[0.15em] text-gold-bright">
                      {t(section.titleKey)}
                    </h3>
                  </div>

                  {/* Tips */}
                  <div className="p-6">
                    <ul className="space-y-4">
                      {section.tips.map((tipKey, tipIdx) => (
                        <li key={tipKey} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-dark/40 border border-gold-mid/30 flex items-center justify-center">
                            <span className="font-ui text-[0.55rem] text-gold-bright">
                              {String(tipIdx + 1).padStart(2, '0')}
                            </span>
                          </span>
                          <p className="font-body text-sm text-text-primary leading-[1.8]">
                            {t(tipKey)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Bottom CTA */}
          <RevealOnScroll>
            <div className="mt-16 text-center">
              <div className="inline-block p-8 rounded-lg border border-gold-mid/20 bg-surface-elevated">
                <div className="text-4xl mb-4 opacity-50">&#x1F4D6;</div>
                <p className="font-body text-sm text-text-secondary max-w-md mx-auto leading-relaxed italic">
                  &ldquo;{t('guides.cta_quote')}&rdquo;
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="h-px w-32 bg-gold-mid/30" />
                </div>
                <Link
                  href={`${prefix}/blog`}
                  className="inline-block mt-6 font-ui text-xs tracking-[0.2em] text-gold-mid hover:text-gold-bright transition-colors border-b border-gold-mid/30 hover:border-gold-bright/50 pb-1"
                >
                  {t('guides.view_all_articles')} &rarr;
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonGuides;
