// @ts-nocheck
import { Link, useParams } from 'react-router-dom';
import { useI18n, tr } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';
import { blogArticles } from '@/wolverine-wiki/data/blog';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const { t, lang } = useI18n();

  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <main id="main-content" className="relative z-10 min-h-screen pt-20">
        <SEOHead
          title={`Blog Article | Wolverine Wiki`}
          description="Blog article"
          path={`/blog/${slug}`}
          lang={lang}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/blog" className="font-ui text-xs text-yellow-500 hover:text-yellow-400 transition-colors mb-6 inline-block">&larr; {t('blog.backToList')}</Link>
          <RevealOnScroll>
            <div className="text-center py-16">
              <h1 className="font-display text-2xl text-gold-bright mb-4">{lang === 'fr' ? 'Article non trouve' : 'Article not found'}</h1>
              <p className="font-body text-sm text-text-muted-custom">{t('blog.emptyDesc')}</p>
              <Link to="/blog" className="btn-outline mt-6 inline-block">{t('blog.backToList')}</Link>
            </div>
          </RevealOnScroll>
        </div>
      </main>
    );
  }

  const relatedArticles = article.relatedSlugs?.map(s => blogArticles.find(a => a.slug === s)).filter(Boolean) || [];

  const contentHtml = tr(article.content, lang)
    .replace(/## (.+)/g, '<h2 class="font-heading text-xl text-yellow-500 mt-8 mb-4">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary font-semibold">$1</strong>')
    .replace(/\n\n/g, '</p><p class="font-body text-sm leading-relaxed text-text-secondary mb-4">')
    .replace(/^/, '<p class="font-body text-sm leading-relaxed text-text-secondary mb-4">')
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

      <main id="main-content" className="relative z-10 min-h-screen pt-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Link to="/blog" className="font-ui text-xs text-yellow-500 hover:text-yellow-400 transition-colors mb-6 inline-block">
            &larr; {t('blog.backToList')}
          </Link>

          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-ui text-[0.6rem] tracking-wider px-2 py-0.5 rounded bg-yellow-600/15 text-yellow-500">{t(`blog.cat.${article.category.toLowerCase()}`)}</span>
              <span className="font-ui text-[0.6rem] text-text-muted-custom">{article.readingTime} {t('blog.min')}</span>
              <span className="font-ui text-[0.6rem] text-text-muted-custom">{article.publishedAt}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl text-gold-bright tracking-tight mb-6">
              {tr(article.title, lang)}
            </h1>
          </RevealOnScroll>

          <GoldDivider variant="short" />

          <div className="mt-8" dangerouslySetInnerHTML={{ __html: contentHtml }} />

          <GoldDivider variant="short" />

          <div className="flex flex-wrap gap-2 my-8">
            {article.tags.map((tag, i) => (
              <span key={i} className="font-ui text-[0.6rem] px-3 py-1 rounded bg-yellow-600/10 text-yellow-500">{tag[lang] || tag.en}</span>
            ))}
          </div>

          {relatedArticles.length > 0 && (
            <div>
              <h3 className="font-ui text-xs tracking-wider uppercase text-yellow-500 mb-4">{t('lore.related') || 'Related Articles'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map(rel => (
                  <Link key={rel.id} to={`/blog/${rel.slug}`} className="p-4 rounded-lg bg-surface/50 border border-border card-hover transition-all">
                    <h4 className="font-heading text-sm text-text-primary">{tr(rel.title, lang)}</h4>
                    <p className="font-ui text-[0.6rem] text-text-muted-custom mt-1">{rel.readingTime} {t('blog.min')}</p>
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

export default BlogArticlePage;
