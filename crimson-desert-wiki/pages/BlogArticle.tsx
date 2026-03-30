// @ts-nocheck
import { useMemo, Fragment } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useI18n, tr } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { blogArticles } from '@/crimson-desert-wiki/data/blog';

/** Parse simple markdown links [text](/url) into React elements */
const parseInlineLinks = (text: string) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const isExternal = href.startsWith('http');
    parts.push(
      isExternal ? (
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-mid hover:text-gold-bright underline underline-offset-2 transition-colors"
        >
          {label}
        </a>
      ) : (
        <Link
          key={match.index}
          to={href}
          className="text-gold-mid hover:text-gold-bright underline underline-offset-2 transition-colors"
        >
          {label}
        </Link>
      )
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
};

/** Generate a slug-like ID from heading text */
const headingToId = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôùûüÿçñ]+/gi, '-').replace(/^-|-$/g, '');

/** Extract Table of Contents from content paragraphs */
const extractTOC = (paragraphs: string[]) =>
  paragraphs
    .filter(p => p.startsWith('## ') || p.startsWith('### '))
    .map(p => {
      const level = p.startsWith('### ') ? 3 : 2;
      const text = p.replace(/^#{2,3}\s/, '');
      return { level, text, id: headingToId(text) };
    });

/** Generate FAQ items from GUIDE articles (extract Q/A from ## headings with ? in them) */
const extractFaqFromGuide = (paragraphs: string[]) => {
  const faq: { question: string; answer: string }[] = [];
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    if ((p.startsWith('## ') || p.startsWith('### ')) && p.includes('?')) {
      const question = p.replace(/^#{2,3}\s/, '');
      // Collect next non-heading paragraph as answer
      const nextP = paragraphs[i + 1];
      if (nextP && !nextP.startsWith('## ') && !nextP.startsWith('### ')) {
        faq.push({ question, answer: nextP.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').slice(0, 300) });
      }
    }
  }
  return faq;
};

const tocLabel: Record<string, string> = {
  fr: 'Sommaire', en: 'Table of Contents', es: 'Índice', it: 'Indice',
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();

  const article = useMemo(() => blogArticles.find(a => a.slug === slug), [slug]);

  const relatedArticles = useMemo(() => {
    if (!article?.relatedSlugs?.length) return [];
    return article.relatedSlugs
      .map(s => blogArticles.find(a => a.slug === s))
      .filter(Boolean) as typeof blogArticles;
  }, [article]);

  const categoryLabels: Record<string, string> = {
    GUIDE: t('blog.cat.guide'),
    LORE: t('blog.cat.lore'),
    NEWS: t('blog.cat.news'),
    ANALYSIS: t('blog.cat.analysis'),
  };

  const contentParagraphs = useMemo(
    () => (article ? tr(article.content, lang).split('\n\n') : []),
    [article, lang]
  );

  const toc = useMemo(() => extractTOC(contentParagraphs), [contentParagraphs]);

  const faqItems = useMemo(() => {
    if (!article || article.category !== 'GUIDE') return undefined;
    const items = extractFaqFromGuide(contentParagraphs);
    return items.length > 0 ? items : undefined;
  }, [article, contentParagraphs]);

  if (!article) return <Navigate to="/blog" replace />;

  return (
    <main id="main-content" className="relative z-10 pt-24 pb-16 px-4">
      <SEOHead
        title={tr(article.seoTitle, lang)}
        description={tr(article.seoDescription, lang)}
        path={`/blog/${article.slug}`}
        lang={lang}
        type="article"
        datePublished={article.publishedAt}
        dateModified={article.publishedAt}
        faqItems={faqItems}
        breadcrumbs={[
          { name: lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: tr(article.title, lang), path: `/blog/${article.slug}` },
        ]}
      />

      <article className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <RevealOnScroll>
          <nav className="flex items-center gap-2 font-ui text-xs text-text-muted-custom mb-6">
            <Link to="/" className="hover:text-gold-mid transition-colors">{t('nav.home')}</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gold-mid transition-colors">{t('nav.blog')}</Link>
            <span>/</span>
            <span className="text-text-secondary truncate max-w-[200px]">{tr(article.title, lang)}</span>
          </nav>
        </RevealOnScroll>

        {/* Header */}
        <RevealOnScroll>
          <div className="mb-8">
            <span className="font-ui text-[0.65rem] tracking-[0.3em] text-crimson-bright">
              {categoryLabels[article.category]}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl text-gold-bright mt-2 leading-tight">
              {tr(article.title, lang)}
            </h1>
            <div className="flex items-center gap-4 mt-4 font-ui text-xs text-text-muted-custom">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.publishedAt}</span>
              <span>·</span>
              <span>~{article.readingTime} {t('blog.min')}</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Cover */}
        <RevealOnScroll>
          <div className="relative rounded-lg overflow-hidden mb-10">
            <img
              src={article.coverImage}
              alt={`${tr(article.title, lang)} — © Pearl Abyss`}
              className="w-full h-[300px] sm:h-[400px] object-cover"
              loading="eager"
              decoding="async"
            />
            <span className="absolute right-2 bottom-2 font-ui text-[0.4rem] tracking-wider text-sand-pale/60 bg-void/50 px-1 py-0.5 rounded">
              © Pearl Abyss
            </span>
          </div>
        </RevealOnScroll>

        {/* Table of Contents */}
        {toc.length > 3 && (
          <RevealOnScroll>
            <nav className="mb-10 p-4 rounded-lg border border-border bg-card-bg/50" aria-label={tocLabel[lang]}>
              <h2 className="font-heading text-sm text-gold-bright mb-3">{tocLabel[lang]}</h2>
              <ul className="space-y-1.5">
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                    <a
                      href={`#${item.id}`}
                      className="font-ui text-xs text-text-secondary hover:text-gold-mid transition-colors leading-relaxed"
                    >
                      {item.level === 3 ? '└ ' : ''}
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </RevealOnScroll>
        )}

        {/* Content */}
        <div className="prose-custom">
          {contentParagraphs.map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              const text = paragraph.replace('## ', '');
              return (
                <RevealOnScroll key={i}>
                  <h2 id={headingToId(text)} className="font-heading text-xl text-gold-bright mt-10 mb-4 scroll-mt-24">
                    {text}
                  </h2>
                </RevealOnScroll>
              );
            }
            if (paragraph.startsWith('### ')) {
              const text = paragraph.replace('### ', '');
              return (
                <RevealOnScroll key={i}>
                  <h3 id={headingToId(text)} className="font-heading text-lg text-gold-mid mt-8 mb-3 scroll-mt-24">
                    {text}
                  </h3>
                </RevealOnScroll>
              );
            }
            return (
              <RevealOnScroll key={i}>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
                  {parseInlineLinks(paragraph)}
                </p>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Tags */}
        <RevealOnScroll>
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
            {article.tags.map((tag, i) => (
              <span key={i} className="font-ui text-[0.6rem] tracking-wider px-3 py-1 rounded-full border border-border text-text-muted-custom">
                {tr(tag, lang)}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <RevealOnScroll>
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="font-heading text-lg text-gold-bright mb-6">
                {lang === 'fr' ? 'Articles recommandés' : lang === 'es' ? 'Artículos recomendados' : lang === 'it' ? 'Articoli consigliati' : 'Recommended Articles'}
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group block rounded-lg border border-border overflow-hidden hover:border-gold-mid/40 transition-colors"
                  >
                    <img
                      src={related.coverImage}
                      alt={tr(related.title, lang)}
                      className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="p-3">
                      <span className="font-ui text-[0.55rem] tracking-[0.2em] text-crimson-bright">
                        {categoryLabels[related.category]}
                      </span>
                      <h3 className="font-heading text-sm text-gold-mid mt-1 line-clamp-2 group-hover:text-gold-bright transition-colors">
                        {tr(related.title, lang)}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Back */}
        <RevealOnScroll>
          <div className="mt-10">
            <Link to="/blog" className="btn-outline text-sm">
              ← {t('blog.backToList')}
            </Link>
          </div>
        </RevealOnScroll>
      </article>
    </main>
  );
};

export default BlogArticle;
