'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumb, { BreadcrumbItem } from '@/components/ui/Breadcrumb';
import Infobox from '@/components/ui/Infobox';
import TOC from '@/components/ui/TOC';
import Badge from '@/components/ui/Badge';
import { ArticleData } from '@/lib/articles';
import { FranchiseConfig } from '@/lib/franchise-config';

interface ArticleLayoutProps {
  article: ArticleData;
  franchise: FranchiseConfig;
  categorySlug: string;
  categoryLabel: string;
  breadcrumbs: BreadcrumbItem[];
  prevArticle?: { slug: string; title: string; href: string } | null;
  nextArticle?: { slug: string; title: string; href: string } | null;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function renderMarkdown(content: string): string {
  // First, escape all HTML in the raw content to prevent XSS
  let html = escapeHtml(content);
  // Headings (now safe since content is escaped)
  html = html.replace(/^### (.+)$/gm, (_, text) => {
    const id = text.toLowerCase().replace(/[^a-zà-ÿ0-9\s-]/g, '').replace(/\s+/g, '-');
    return `<h3 id="${id}" class="text-lg font-semibold mt-8 mb-3" style="font-family: var(--font-display)">${text}</h3>`;
  });
  html = html.replace(/^## (.+)$/gm, (_, text) => {
    const id = text.toLowerCase().replace(/[^a-zà-ÿ0-9\s-]/g, '').replace(/\s+/g, '-');
    return `<h2 id="${id}" class="text-xl font-bold mt-10 mb-4" style="font-family: var(--font-display)">${text}</h2>`;
  });
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Lists
  html = html.replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-[var(--color-text)] mb-1">$1</li>');
  // Wrap consecutive <li> in <ul>
  html = html.replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="my-4 space-y-1">$1</ul>');
  // Paragraphs
  html = html.replace(/^(?!<[hul])((?!<).+)$/gm, '<p class="mb-4 text-[var(--color-text)] leading-relaxed">$1</p>');
  // Clean up empty paragraphs
  html = html.replace(/<p[^>]*>\s*<\/p>/g, '');
  return html;
}

export default function ArticleLayout({
  article,
  franchise,
  categorySlug,
  categoryLabel,
  breadcrumbs,
  prevArticle,
  nextArticle,
}: ArticleLayoutProps) {
  const locale = useLocale();
  const t = useTranslations('article');
  const tFranchise = useTranslations('franchise');
  const title = article.title[locale] || article.title.fr;
  const content = article.content[locale] || article.content.fr;
  const excerpt = article.excerpt[locale] || article.excerpt.fr;
  const updatedDate = new Date(article.updatedAt).toLocaleDateString(
    locale === 'en' ? 'en-US' : locale, { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <Breadcrumb items={breadcrumbs} />

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge color={franchise.accentColor}>{categoryLabel}</Badge>
        {article.tags?.slice(0, 3).map(tag => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <h1
        className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)]"
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
      >
        {title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-secondary)]">
        <span className="flex items-center gap-1.5">
          <User className="w-4 h-4" />
          {t('author', { name: article.author })}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          {t('updated')} {updatedDate}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {t('readTime', { minutes: article.readTime })}
        </span>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <article className="flex-1 min-w-0">
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 border-l-4 pl-4" style={{ borderColor: franchise.accentColor }}>
            {excerpt}
          </p>
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
          />

          {/* Prev/Next navigation */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevArticle ? (
              <Link
                href={prevArticle.href}
                className="flex items-center gap-3 p-4 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors no-underline group"
              >
                <ArrowLeft className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)]" />
                <div>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{tFranchise('prev')}</span>
                  <p className="text-sm font-medium text-[var(--color-text)]">{prevArticle.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextArticle && (
              <Link
                href={nextArticle.href}
                className="flex items-center justify-end gap-3 p-4 rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors no-underline group text-right"
              >
                <div>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{tFranchise('next')}</span>
                  <p className="text-sm font-medium text-[var(--color-text)]">{nextArticle.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)]" />
              </Link>
            )}
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-[var(--color-text-tertiary)] italic">
            {tFranchise('disclaimer')}
          </p>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
          <div className="lg:sticky lg:top-24">
            {article.infobox && (
              <Infobox title={title} data={article.infobox} accentColor={franchise.accentColor} />
            )}
            <div className="mt-6">
              <TOC content={content} />
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
