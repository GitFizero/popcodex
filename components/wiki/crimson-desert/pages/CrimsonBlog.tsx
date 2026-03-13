'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import { blogArticles, type BlogCategory } from '@/lib/data/crimson-desert/blog';

type FilterCategory = 'ALL' | BlogCategory;

const categoryColors: Record<BlogCategory, string> = {
  GUIDE: 'bg-crimson-core/60 border-crimson-bright/30 text-sand-pale',
  LORE: 'bg-gold-dark/60 border-gold-mid/30 text-sand-pale',
  NEWS: 'bg-smoke-mid/80 border-smoke-light/30 text-sand-pale',
  ANALYSIS: 'bg-crimson-deep/70 border-crimson-deep/30 text-sand-pale',
};

const categoryI18nKeys: Record<BlogCategory, string> = {
  GUIDE: 'blog.cat.guide',
  LORE: 'blog.cat.lore',
  NEWS: 'blog.cat.news',
  ANALYSIS: 'blog.cat.analysis',
};

const CrimsonBlog = ({ locale }: { locale: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const prefix = `/${locale}/crimson-desert`;
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');

  const categories: { key: FilterCategory; label: string }[] = useMemo(() => [
    { key: 'ALL', label: t('blog.all') },
    { key: 'GUIDE', label: t('blog.cat.guide') },
    { key: 'LORE', label: t('blog.cat.lore') },
    { key: 'NEWS', label: t('blog.cat.news') },
    { key: 'ANALYSIS', label: t('blog.cat.analysis') },
  ], [t]);

  const filtered = useMemo(() => {
    if (activeCategory === 'ALL') return blogArticles;
    return blogArticles.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  const featured = useMemo(() => {
    return filtered.find(a => a.coverImage) || filtered[0];
  }, [filtered]);

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden" aria-label={t('blog.title')}>
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--gold-dark)/0.15) 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="font-ui text-xs tracking-[0.4em] text-gold-muted mb-4">CRIMSON DESERT</p>
              <h1 className="font-display text-3xl sm:text-5xl text-gold-bright mb-4" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                {t('blog.title')}
              </h1>
              <p className="font-body text-base text-text-secondary max-w-2xl mx-auto">
                {t('blog.subtitle')}
              </p>
              <div className="flex justify-center mt-6">
                <div className="h-px w-48 bg-gold-mid/60" />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Category Tabs */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`font-ui text-xs tracking-wider px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    activeCategory === cat.key
                      ? 'bg-gold-mid/20 border-gold-mid/50 text-gold-bright'
                      : 'border-border text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <GoldDivider variant="short" />

          {/* Articles Grid */}
          {filtered.length === 0 ? (
            <RevealOnScroll>
              <div className="text-center py-20">
                <div className="font-display text-4xl text-gold-mid/20 mb-4">&#x2620;</div>
                <p className="font-heading text-xl text-gold-mid/50 mb-2">{t('blog.empty')}</p>
                <p className="font-body text-sm text-text-secondary">{t('blog.emptyDesc')}</p>
              </div>
            </RevealOnScroll>
          ) : (
            <div className="mt-8 space-y-8">
              {/* Featured Article */}
              {featured && (
                <RevealOnScroll>
                  <Link
                    href={`${prefix}/blog/${featured.slug}`}
                    className="group block relative rounded-lg overflow-hidden border border-border hover:border-gold-mid/40 transition-all duration-300"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    {featured.coverImage && (
                      <div className="relative h-[320px] sm:h-[400px] overflow-hidden">
                        <img
                          src={featured.coverImage}
                          alt={`${tr(featured.title, lang)} — © Pearl Abyss`}
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/70 to-transparent" />
                      </div>
                    )}
                    <div className={`p-8 ${featured.coverImage ? '-mt-32 relative z-10' : 'bg-surface-elevated'}`}>
                      <span className={`inline-block font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border ${categoryColors[featured.category]} mb-3`}>
                        {t(categoryI18nKeys[featured.category])}
                      </span>
                      <h2 className="font-heading text-xl sm:text-2xl text-gold-bright group-hover:drop-shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-300 mb-3">
                        {tr(featured.title, lang)}
                      </h2>
                      <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-2 max-w-3xl">
                        {tr(featured.excerpt, lang)}
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <span className="font-ui text-[0.6rem] tracking-wider text-text-secondary">{featured.publishedAt}</span>
                        <span className="w-1 h-1 rounded-full bg-gold-mid/40" />
                        <span className="font-ui text-[0.6rem] tracking-wider text-gold-mid/60">{featured.readingTime} {t('blog.min')}</span>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              )}

              {/* Remaining Articles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered
                  .filter(a => a !== featured)
                  .map((article, i) => (
                    <RevealOnScroll key={article.id} stagger={i * 80}>
                      <Link
                        href={`${prefix}/blog/${article.slug}`}
                        className="group block relative rounded-lg overflow-hidden border border-border hover:border-gold-mid/40 transition-all duration-300 h-full"
                        style={{ boxShadow: 'var(--shadow-card)' }}
                      >
                        {article.coverImage && (
                          <div className="relative h-[180px] overflow-hidden">
                            <img
                              src={article.coverImage}
                              alt={`${tr(article.title, lang)} — © Pearl Abyss`}
                              className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/50 to-transparent" />
                          </div>
                        )}
                        <div className={`p-5 ${article.coverImage ? '-mt-8 relative z-10' : 'bg-surface-elevated'}`}>
                          <span className={`inline-block font-ui text-[0.55rem] tracking-[0.2em] px-2 py-0.5 rounded ${categoryColors[article.category]} mb-2`}>
                            {t(categoryI18nKeys[article.category])}
                          </span>
                          <h3 className="font-heading text-sm text-gold-bright group-hover:drop-shadow-[0_0_15px_hsl(var(--gold-glow))] transition-all duration-300 mb-2 line-clamp-2">
                            {tr(article.title, lang)}
                          </h3>
                          <p className="font-body text-xs text-text-secondary leading-relaxed line-clamp-2">
                            {tr(article.excerpt, lang)}
                          </p>
                          <div className="mt-3 flex justify-between items-center">
                            <span className="font-ui text-[0.55rem] text-text-secondary">{article.publishedAt}</span>
                            <span className="font-ui text-[0.55rem] text-gold-mid/60">{article.readingTime} {t('blog.min')}</span>
                          </div>
                        </div>
                      </Link>
                    </RevealOnScroll>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <CrimsonFooter locale={locale} />
    </>
  );
};

export default CrimsonBlog;
