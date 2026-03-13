'use client';

import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { blogArticles, getArticlePath } from '@/lib/data/gta-vi/blogArticles';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

const categoryLabels: Record<string, Record<string, string>> = {
  guide: { fr: 'GUIDE', en: 'GUIDE', es: 'GUÍA', it: 'GUIDA' },
  news: { fr: 'ACTUALITÉ', en: 'NEWS', es: 'NOTICIAS', it: 'NOTIZIE' },
  analysis: { fr: 'ANALYSE', en: 'ANALYSIS', es: 'ANÁLISIS', it: 'ANALISI' },
};

const Blog = ({ locale }: { locale: string }) => {
  const { lang, t } = useGtaI18n(locale);
  const articles = blogArticles;
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="min-h-screen pt-16 pb-20">
      {/* Header */}
      <section className="py-12 px-4 text-center border-b border-neon-pink/10">
        <div className="max-w-2xl mx-auto">
          <p className="font-rajdhani text-[0.55rem] tracking-[0.4em] text-neon-cyan mb-3">LEONIDA WIKI</p>
          <h1 className="font-bebas text-4xl sm:text-6xl text-text-primary mb-2">BLOG</h1>
          <p className="font-barlow font-light italic text-xs text-text-secondary">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <RevealOnScroll>
          <section className="max-w-5xl mx-auto px-4 py-12">
            <Link
              href={`/${locale}/gta-vi${getArticlePath(featured, lang)}`}
              className="group block relative rounded-2xl overflow-hidden border border-white/5 hover:border-neon-pink/20 transition-all"
            >
              <div className="relative aspect-[21/9] sm:aspect-[2.5/1]">
                <img
                  src={featured.coverImage}
                  alt={featured.coverAlt[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <span className="inline-block font-rajdhani text-[0.55rem] px-2.5 py-0.5 rounded bg-neon-pink/20 text-neon-pink tracking-widest mb-3">
                  {categoryLabels[featured.category]?.[lang] || featured.category.toUpperCase()}
                </span>
                <h2 className="font-bebas text-xl sm:text-3xl text-text-primary mb-2 group-hover:text-neon-pink transition-colors">
                  {featured.title[lang]}
                </h2>
                <p className="font-dm text-xs sm:text-sm text-text-secondary line-clamp-2 max-w-2xl mb-3">
                  {featured.excerpt[lang]}
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-rajdhani text-[0.5rem] text-text-muted-vice flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featured.readingTime} min
                  </span>
                  <span className="font-rajdhani text-[0.5rem] text-text-muted-vice">{featured.publishDate}</span>
                </div>
              </div>
            </Link>
          </section>
        </RevealOnScroll>
      )}

      {/* Article Grid */}
      {rest.length > 0 && (
        <RevealOnScroll>
          <section className="max-w-5xl mx-auto px-4 pb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map(article => (
                <Link
                  key={article.id}
                  href={`/${locale}/gta-vi${getArticlePath(article, lang)}`}
                  className="group bg-bg-card rounded-xl overflow-hidden border border-white/5 hover:border-neon-cyan/20 transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9]">
                    <img
                      src={article.coverImage}
                      alt={article.coverAlt[lang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-black/60 text-neon-cyan tracking-widest">
                        {categoryLabels[article.category]?.[lang] || article.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bebas text-sm sm:text-base text-text-primary mb-1 group-hover:text-neon-cyan transition-colors line-clamp-2">
                      {article.title[lang]}
                    </h3>
                    <p className="font-dm text-[0.6rem] text-text-secondary line-clamp-2 mb-3">
                      {article.excerpt[lang]}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-rajdhani text-[0.5rem] text-text-muted-vice flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readingTime} min
                      </span>
                      <span className="font-rajdhani text-[0.5rem] text-neon-cyan flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t('blog.read')} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      )}

      {/* Empty state when only featured */}
      {rest.length === 0 && articles.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
          <p className="font-rajdhani text-xs text-text-muted-vice tracking-widest">
            {t('blog.morecoming')}
          </p>
        </section>
      )}
    </div>
  );
};

export default Blog;
