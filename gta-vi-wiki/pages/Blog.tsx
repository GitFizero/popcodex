// @ts-nocheck
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { blogArticles } from '@/gta-vi-wiki/data/blog';

const Blog = () => {
  const { t, lang } = useI18n();
  const [category, setCategory] = useState<string>('ALL');

  const categories = ['ALL', 'GUIDE', 'LORE', 'NEWS', 'ANALYSIS'];

  const filtered = useMemo(() => {
    if (category === 'ALL') return blogArticles;
    return blogArticles.filter(a => a.category === category);
  }, [category]);

  return (
    <>
      <SEOHead
        title={seo.blog.title[lang] || seo.blog.title.en}
        description={seo.blog.desc[lang] || seo.blog.desc.en}
        path="/blog"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.blog[lang], path: '/blog' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('blog.title')}
            </h1>
            <p className="text-center text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('blog.subtitle')}</p>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-4 py-2 text-xs font-bold tracking-wider rounded transition-all"
                style={{
                  background: category === cat ? 'rgba(255, 20, 147, 0.15)' : 'transparent',
                  border: `1px solid ${category === cat ? '#FF1493' : 'rgba(255,255,255,0.1)'}`,
                  color: category === cat ? '#FF1493' : 'rgba(255,255,255,0.5)',
                }}
              >
                {cat === 'ALL' ? t('blog.all') : t(`blog.cat.${cat.toLowerCase()}`)}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-bold mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('blog.empty')}</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('blog.emptyDesc')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
              {filtered.map(article => (
                <RevealOnScroll key={article.id}>
                  <Link to={`/blog/${article.slug}`} className="block p-6 rounded-lg transition-all duration-300 group" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[0.6rem] tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(255, 20, 147, 0.15)', color: '#FF1493' }}>{t(`blog.cat.${article.category.toLowerCase()}`)}</span>
                      <span className="text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>{article.readingTime} {t('blog.min')}</span>
                    </div>
                    <h2 className="text-lg font-bold mb-2 transition-colors" style={{ color: 'white' }}>{tr(article.title, lang)}</h2>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(article.excerpt, lang)}</p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[0.55rem] px-2 py-0.5 rounded" style={{ background: 'rgba(0, 255, 255, 0.08)', color: '#00FFFF' }}>{tag[lang] || tag.en}</span>
                      ))}
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Blog;
