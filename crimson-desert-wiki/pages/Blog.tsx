// @ts-nocheck
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';
import { blogArticles, type BlogCategory } from '@/crimson-desert-wiki/data/blog';

const CATEGORIES: (BlogCategory | 'ALL')[] = ['ALL', 'GUIDE', 'LORE', 'NEWS', 'ANALYSIS'];

const Blog = () => {
  const { t, lang } = useI18n();
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'ALL'>('ALL');

  const filtered = useMemo(() => {
    if (activeCategory === 'ALL') return blogArticles;
    return blogArticles.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  const categoryLabels: Record<string, string> = {
    ALL: t('blog.all'),
    GUIDE: t('blog.cat.guide'),
    LORE: t('blog.cat.lore'),
    NEWS: t('blog.cat.news'),
    ANALYSIS: t('blog.cat.analysis'),
  };

  const categoryColors: Record<string, string> = {
    GUIDE: 'bg-crimson-core/60',
    LORE: 'bg-gold-dark/60',
    NEWS: 'bg-smoke-mid/80',
    ANALYSIS: 'bg-crimson-deep/70',
  };

  return (
    <main id="main-content" className="relative z-10 pt-24 pb-16 px-4">
      <SEOHead
        title={seo.blog.title[lang]}
        description={seo.blog.desc[lang]}
        path="/blog"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.blog[lang], path: '/blog' },
        ]}
      />

      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <GoldDivider variant="section" title={t('blog.title')} />
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-center font-body text-text-secondary max-w-2xl mx-auto mt-4 mb-8">
            {t('blog.subtitle')}
          </p>
        </RevealOnScroll>

        {/* Category filters */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-ui text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-crimson-deep border-gold-bright text-gold-bright'
                    : 'border-border text-text-secondary hover:border-gold-mid hover:text-gold-mid'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Articles grid */}
        {filtered.length === 0 ? (
          <RevealOnScroll>
            <div className="text-center py-20">
              <p className="font-heading text-xl text-gold-mid mb-2">{t('blog.empty')}</p>
              <p className="font-body text-sm text-text-muted-custom">{t('blog.emptyDesc')}</p>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <RevealOnScroll key={article.id} stagger={i * 100}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="block group"
                  title={tr(article.title, lang)}
                >
                  <div className="relative rounded-lg overflow-hidden h-[360px] flex flex-col card-hover border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                    <div className="relative h-[180px] overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={`${tr(article.title, lang)} — © Pearl Abyss`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
                      <span className={`absolute top-3 left-3 font-ui text-[0.6rem] tracking-wider px-2 py-0.5 rounded text-sand-pale ${categoryColors[article.category]}`}>
                        {categoryLabels[article.category]}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col p-5 bg-card-bg">
                      <h3 className="font-heading text-base text-gold-bright group-hover:drop-shadow-[0_0_20px_hsl(var(--gold-glow))] transition-all duration-300 line-clamp-2">
                        {tr(article.title, lang)}
                      </h3>
                      <p className="font-body text-xs text-text-secondary mt-2 line-clamp-3 flex-1">
                        {tr(article.excerpt, lang)}
                      </p>
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-border">
                        <span className="font-ui text-[0.6rem] text-text-muted-custom">{article.publishedAt}</span>
                        <span className="font-ui text-[0.6rem] text-text-muted-custom">~{article.readingTime} {t('blog.min')}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
