'use client';

import Link from 'next/link';
import { useCrimsonI18n, tr } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';
import { blogArticles, type BlogCategory } from '@/lib/data/crimson-desert/blog';
import type { Translations } from '@/lib/data/crimson-desert/i18n';

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

const CrimsonBlogArticle = ({ locale, slug }: { locale: string; slug: string }) => {
  const { t, lang } = useCrimsonI18n(locale);
  const prefix = `/${locale}/crimson-desert`;
  const article = blogArticles.find(a => a.slug === slug);

  const relatedArticles = article?.relatedSlugs
    ? blogArticles.filter(a => article.relatedSlugs!.includes(a.slug))
    : [];

  if (!article) {
    return (
      <>
        <CrimsonNavBar locale={locale} />
        <main id="main-content" className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center py-20">
            <div className="font-display text-5xl text-gold-mid/20 mb-6">&#x2620;</div>
            <h1 className="font-display text-2xl text-gold-bright mb-4">Article not found</h1>
            <Link
              href={`${prefix}/blog`}
              className="inline-flex items-center gap-2 font-ui text-xs tracking-wider text-gold-mid hover:text-gold-bright transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {t('blog.backToList')}
            </Link>
          </div>
        </main>
        <CrimsonFooter locale={locale} />
      </>
    );
  }

  const content = tr(article.content, lang);
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  // Support contentSections if present on the article
  const contentSections = (article as any).contentSections as
    | { heading: Translations; body: Translations }[]
    | undefined;

  return (
    <>
      <CrimsonNavBar locale={locale} />
      <main id="main-content" className="relative z-10 min-h-screen">
        {/* Hero with cover image */}
        <section className="relative overflow-hidden">
          {article.coverImage && (
            <div className="relative h-[350px] sm:h-[450px] overflow-hidden">
              <img
                src={article.coverImage}
                alt={`${tr(article.title, lang)} — © Pearl Abyss`}
                className="w-full h-full object-cover opacity-30"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/80 to-surface-elevated/30" />
            </div>
          )}
          <div className={`${article.coverImage ? '-mt-48 relative z-10' : 'pt-24'} px-4 pb-12`}>
            <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                {/* Back link */}
                <Link
                  href={`${prefix}/blog`}
                  className="inline-flex items-center gap-2 font-ui text-xs tracking-wider text-gold-mid hover:text-gold-bright transition-colors mb-8"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  {t('blog.backToList')}
                </Link>

                {/* Category badge */}
                <span className={`inline-block font-ui text-[0.6rem] tracking-[0.3em] px-3 py-1 rounded border ${categoryColors[article.category]} mb-4`}>
                  {t(categoryI18nKeys[article.category])}
                </span>

                {/* Title */}
                <h1 className="font-display text-2xl sm:text-4xl text-gold-bright mb-6 leading-tight" style={{ textShadow: '0 0 40px hsl(var(--gold-glow))' }}>
                  {tr(article.title, lang)}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="font-ui text-[0.65rem] tracking-wider text-text-secondary">
                    {article.publishedAt}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold-mid/40" />
                  <span className="font-ui text-[0.65rem] tracking-wider text-gold-mid/60">
                    {article.readingTime} {t('blog.min')}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold-mid/40" />
                  <span className="font-ui text-[0.65rem] tracking-wider text-text-secondary">
                    {article.author}
                  </span>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 pb-20">
          <GoldDivider variant="short" />

          {/* Excerpt */}
          <RevealOnScroll>
            <p className="font-body text-base text-gold-mid italic leading-relaxed border-l-2 border-gold-mid/30 pl-5 my-8">
              {tr(article.excerpt, lang)}
            </p>
          </RevealOnScroll>

          {/* Content Sections (structured) */}
          {contentSections && contentSections.length > 0 ? (
            <article className="space-y-8">
              {contentSections.map((section, i) => (
                <RevealOnScroll key={i} stagger={i * 60}>
                  <div>
                    <GoldDivider variant="section" className="mt-4" />
                    <h2 className="font-heading text-lg sm:text-xl text-gold-bright mt-4 mb-4" style={{ textShadow: '0 0 20px hsl(var(--gold-glow)/0.3)' }}>
                      {tr(section.heading, lang)}
                    </h2>
                    <div className="font-body text-sm text-text-primary leading-[1.9] whitespace-pre-line">
                      {tr(section.body, lang)}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </article>
          ) : (
            /* Article body (flat content) */
            <article className="space-y-6">
              {paragraphs.map((paragraph, i) => {
                const trimmed = paragraph.trim();
                const isHeading = /^(#{1,3}\s|[A-Z\u00C0-\u024F].{0,80}$)/.test(trimmed) && trimmed.length < 100 && !trimmed.includes('.');

                return (
                  <RevealOnScroll key={i} stagger={i * 40}>
                    {isHeading ? (
                      <>
                        {i > 0 && <GoldDivider variant="section" className="mt-8" />}
                        <h2 className="font-heading text-lg sm:text-xl text-gold-bright mt-4" style={{ textShadow: '0 0 20px hsl(var(--gold-glow)/0.3)' }}>
                          {trimmed.replace(/^#{1,3}\s/, '')}
                        </h2>
                      </>
                    ) : (
                      <p className="font-body text-sm text-text-primary leading-[1.9]">
                        {trimmed}
                      </p>
                    )}
                  </RevealOnScroll>
                );
              })}
            </article>
          )}

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <RevealOnScroll>
              <div className="mt-12 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-ui text-[0.55rem] tracking-wider px-3 py-1 rounded-full border border-border text-text-secondary"
                    >
                      {(tag as any)[lang] || tag.en || tag.fr}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <GoldDivider variant="section" title={t('blog.title')} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {relatedArticles.map((related, i) => (
                  <RevealOnScroll key={related.id} stagger={i * 80}>
                    <Link
                      href={`${prefix}/blog/${related.slug}`}
                      className="group block bg-surface-elevated rounded-lg border border-border p-5 hover:border-gold-mid/40 transition-all duration-300"
                    >
                      <span className={`inline-block font-ui text-[0.5rem] tracking-wider px-2 py-0.5 rounded ${categoryColors[related.category]} mb-2`}>
                        {t(categoryI18nKeys[related.category])}
                      </span>
                      <h3 className="font-heading text-sm text-gold-bright group-hover:drop-shadow-[0_0_10px_hsl(var(--gold-glow))] transition-all line-clamp-2">
                        {tr(related.title, lang)}
                      </h3>
                      <p className="font-body text-xs text-text-secondary mt-2 line-clamp-2">
                        {tr(related.excerpt, lang)}
                      </p>
                      <span className="font-ui text-[0.55rem] tracking-wider text-gold-mid/60 mt-2 inline-block">
                        {related.readingTime} {t('blog.min')}
                      </span>
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

export default CrimsonBlogArticle;
