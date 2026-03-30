// @ts-nocheck
import { Link, useParams, Navigate } from 'react-router-dom';
import { useI18n, tr } from '@/fable-wiki/context/I18nContext';
import { blogArticles } from '@/fable-wiki/data/blog';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';

const BlogArticle = () => {
  const { slug } = useParams();
  const { lang } = useI18n();

  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const related = article.relatedSlugs
    ?.map(s => blogArticles.find(a => a.slug === s))
    .filter(Boolean) || [];

  const categoryColors: Record<string, string> = {
    GUIDE: 'bg-emerald-700/60',
    LORE: 'bg-purple-700/60',
    NEWS: 'bg-blue-700/60',
    ANALYSIS: 'bg-yellow-700/60',
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={tr(article.seoTitle, lang)}
        description={tr(article.seoDescription, lang)}
        path={`/blog/${article.slug}`}
        type="article"
        datePublished={article.publishedAt}
        lang={lang}
        breadcrumbs={[
          { name: lang === 'fr' ? 'Accueil' : 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: tr(article.title, lang), path: `/blog/${article.slug}` },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          {/* Back link */}
          <Link to="/blog" className="inline-flex items-center gap-1 font-body text-sm text-gray-400 hover:text-emerald-400 transition-colors mb-6">
            ← {lang === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-body text-[0.55rem] tracking-[0.25em] px-2 py-0.5 rounded text-gray-200 ${categoryColors[article.category] || 'bg-gray-700/60'}`}>
                {article.category}
              </span>
              <span className="font-body text-[0.6rem] text-gray-500">{article.publishedAt}</span>
              <span className="font-body text-[0.6rem] text-gray-500">~{article.readingTime} min</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl text-emerald-400 leading-tight">{tr(article.title, lang)}</h1>
            <p className="font-body text-sm text-gray-400 mt-3 leading-relaxed">{tr(article.excerpt, lang)}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag, i) => (
                <span key={i} className="font-body text-[0.55rem] tracking-wider px-2 py-0.5 rounded border border-emerald-900/30 text-gray-500">
                  #{tag[lang]}
                </span>
              ))}
            </div>
          </div>

          <RuneDivider variant="short" />
        </RevealOnScroll>

        {/* Content */}
        <RevealOnScroll>
          <article className="mt-8 prose-fable">
            {tr(article.content, lang).split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="font-heading text-xl text-emerald-400 mt-8 mb-4 tracking-wider">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-body text-sm text-gray-200 font-semibold mt-3">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="font-body text-sm text-gray-300 ml-4 mb-1 list-disc">{line.replace('- ', '')}</li>;
              }
              if (line.match(/^\d+\./)) {
                return <li key={i} className="font-body text-sm text-gray-300 ml-4 mb-1 list-decimal">{line.replace(/^\d+\.\s*/, '')}</li>;
              }
              if (line.trim() === '') return <div key={i} className="h-3" />;
              // Handle inline bold
              const parts = line.split(/(\*\*[^*]+\*\*)/);
              return (
                <p key={i} className="font-body text-sm text-gray-300 leading-relaxed mb-2">
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j} className="text-gray-200">{part.replace(/\*\*/g, '')}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </article>
        </RevealOnScroll>

        {/* Related articles */}
        {related.length > 0 && (
          <RevealOnScroll>
            <div className="mt-12">
              <RuneDivider variant="section" title={lang === 'fr' ? 'ARTICLES LIES' : 'RELATED ARTICLES'} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {related.map(r => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="block group">
                    <div className="p-4 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] hover:border-emerald-700/50 transition-all duration-300">
                      <span className={`font-body text-[0.55rem] tracking-wider px-2 py-0.5 rounded text-gray-200 ${categoryColors[r.category] || 'bg-gray-700/60'}`}>
                        {r.category}
                      </span>
                      <h3 className="font-heading text-sm text-emerald-400 mt-2 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all">
                        {tr(r.title, lang)}
                      </h3>
                      <span className="font-body text-[0.6rem] text-gray-600 mt-1 block">~{r.readingTime} min</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </main>
  );
};

export default BlogArticle;
