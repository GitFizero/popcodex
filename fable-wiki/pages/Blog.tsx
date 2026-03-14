// @ts-nocheck
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/fable-wiki/context/I18nContext';
import { blogArticles } from '@/fable-wiki/data/blog';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Blog = () => {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<string>('ALL');

  const filters = [
    { key: 'ALL', label: t('blog.all') },
    { key: 'GUIDE', label: t('blog.cat.guide') },
    { key: 'LORE', label: t('blog.cat.lore') },
    { key: 'NEWS', label: t('blog.cat.news') },
    { key: 'ANALYSIS', label: t('blog.cat.analysis') },
  ];

  const filtered = useMemo(() =>
    filter === 'ALL' ? blogArticles : blogArticles.filter(a => a.category === filter),
    [filter]
  );

  const categoryColors: Record<string, string> = {
    GUIDE: 'bg-emerald-700/60',
    LORE: 'bg-purple-700/60',
    NEWS: 'bg-blue-700/60',
    ANALYSIS: 'bg-yellow-700/60',
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
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

      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('blog.title')} />
          <p className="text-center font-body text-sm text-gray-400 mt-2">{t('blog.subtitle')}</p>
        </RevealOnScroll>

        {/* Filters */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-lg font-heading text-xs tracking-[0.15em] border transition-all duration-300
                  ${filter === f.key
                    ? 'bg-emerald-700 border-emerald-500 text-white'
                    : 'border-emerald-900/30 text-gray-400 hover:border-emerald-700/50 hover:text-emerald-400'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filtered.map((article, i) => (
            <RevealOnScroll key={article.slug} stagger={i * 100}>
              <Link to={`/blog/${article.slug}`} className="block group">
                <div className="rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] overflow-hidden hover:border-emerald-700/50 transition-all duration-300 h-full flex flex-col">
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`font-body text-[0.55rem] tracking-[0.25em] px-2 py-0.5 rounded text-gray-200 ${categoryColors[article.category] || 'bg-gray-700/60'}`}>
                        {article.category}
                      </span>
                      <span className="font-body text-[0.6rem] text-gray-600">{article.publishedAt}</span>
                    </div>
                    <h3 className="font-heading text-base text-emerald-400 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300 line-clamp-2">
                      {tr(article.title, lang)}
                    </h3>
                    <p className="font-body text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed flex-1">{tr(article.excerpt, lang)}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-body text-[0.6rem] text-gray-600">~{article.readingTime} min</span>
                      <span className="font-body text-xs text-yellow-500 group-hover:gap-2 transition-all duration-300 inline-flex items-center gap-1">
                        {lang === 'fr' ? 'Lire' : 'Read'} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-body text-sm text-gray-500 text-center py-12">{lang === 'fr' ? 'Aucun article dans cette categorie.' : 'No articles in this category.'}</p>
        )}
      </div>
    </main>
  );
};

export default Blog;
