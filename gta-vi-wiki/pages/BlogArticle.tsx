// @ts-nocheck
import { useParams, Link } from 'react-router-dom';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { blogArticles } from '@/gta-vi-wiki/data/blog';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();

  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <main id="main-content" className="min-h-screen pt-20 px-4 flex items-center justify-center" style={{ background: '#0a000f' }}>
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4" style={{ color: '#FF1493' }}>404</h1>
          <p className="mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Article not found</p>
          <Link to="/blog" style={{ color: '#00FFFF' }}>{t('blog.backToList')}</Link>
        </div>
      </main>
    );
  }

  const relatedArticles = article.relatedSlugs?.map(s => blogArticles.find(a => a.slug === s)).filter(Boolean) || [];

  const contentHtml = tr(article.content, lang)
    .replace(/## (.+)/g, '<h2 class="text-xl font-bold mt-8 mb-4" style="color: #00FFFF;">$1</h2>')
    .replace(/\n\n/g, '</p><p class="text-sm leading-relaxed mb-4" style="color: rgba(255,255,255,0.7);">')
    .replace(/^/, '<p class="text-sm leading-relaxed mb-4" style="color: rgba(255,255,255,0.7);">')
    .concat('</p>');

  return (
    <>
      <SEOHead
        title={tr(article.seoTitle, lang)}
        description={tr(article.seoDescription, lang)}
        path={`/blog/${article.slug}`}
        type="article"
        datePublished={article.publishedAt}
        lang={lang}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: tr(article.title, lang), path: `/blog/${article.slug}` },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <article className="max-w-3xl mx-auto pb-20">
          <Link to="/blog" className="text-sm mb-6 inline-block transition-colors" style={{ color: '#00FFFF' }}>
            {t('blog.backToList')}
          </Link>

          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[0.6rem] tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(255, 20, 147, 0.15)', color: '#FF1493' }}>{t(`blog.cat.${article.category.toLowerCase()}`)}</span>
              <span className="text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>{article.readingTime} {t('blog.min')}</span>
              <span className="text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>{article.publishedAt}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-6" style={{ color: '#FF1493', textShadow: '0 0 20px rgba(255, 20, 147, 0.3)' }}>
              {tr(article.title, lang)}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          <NeonDivider variant="short" className="my-8" />

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, i) => (
              <span key={i} className="text-[0.6rem] px-3 py-1 rounded" style={{ background: 'rgba(0, 255, 255, 0.08)', color: '#00FFFF' }}>{tag[lang] || tag.en}</span>
            ))}
          </div>

          {relatedArticles.length > 0 && (
            <div>
              <h3 className="text-xs tracking-wider uppercase mb-4" style={{ color: '#00FFFF' }}>{t('lore.related')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map(rel => (
                  <Link key={rel.id} to={`/blog/${rel.slug}`} className="p-4 rounded-lg transition-all" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                    <h4 className="text-sm font-bold" style={{ color: 'white' }}>{tr(rel.title, lang)}</h4>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{rel.readingTime} {t('blog.min')}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </>
  );
};

export default BlogArticle;
