// @ts-nocheck
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const blogArticles: any[] = [];

const CATEGORIES = ['all', 'guide', 'lore', 'news', 'analysis'] as const;

const BlogPage = () => {
  const { t, lang } = useI18n();
  const [category, setCategory] = useState<string>('all');

  const filtered = category === 'all' ? blogArticles : blogArticles.filter(a => a.category === category);

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('blog.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.blog.title[lang]}</h1>
        <p className="font-body text-sm text-text-secondary text-center mt-4 mb-8">{t('blog.subtitle')}</p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setCategory(cat)}
              className={`font-ui text-[0.65rem] tracking-wider px-3 py-1.5 rounded-full border transition-all
                ${category === cat ? 'bg-yellow-600/30 border-yellow-500 text-yellow-400' : 'border-border text-text-muted-custom hover:text-text-secondary'}`}>
              {cat === 'all' ? t('blog.all') : t(`blog.cat.${cat}`)}
            </button>
          ))}
        </div>

        {/* Articles */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-heading text-lg text-text-muted-custom">{t('blog.empty')}</p>
            <p className="font-body text-sm text-text-muted-custom mt-2">{t('blog.emptyDesc')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((article, i) => (
              <RevealOnScroll key={article.slug} stagger={i * 100}>
                <Link to={`/blog/${article.slug}`} className="block group">
                  <div className="bg-surface/50 border border-border rounded-lg overflow-hidden card-hover">
                    <div className="p-6">
                      <span className="font-ui text-[0.6rem] tracking-wider text-yellow-500">{article.category}</span>
                      <h3 className="font-heading text-lg text-text-primary mt-2 group-hover:text-gold-bright transition-colors">{article.title[lang]}</h3>
                      <p className="font-body text-sm text-text-secondary mt-2 line-clamp-2">{article.excerpt[lang]}</p>
                      <span className="font-ui text-[0.6rem] text-text-muted-custom mt-3 block">~{article.readingTime} {t('blog.min')}</span>
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

export default BlogPage;
