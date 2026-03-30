import React from 'react';
import { renderMarkdownContent, extractTOC } from './render-markdown';

interface SSRArticleContentProps {
  title: string;
  content: string;
  coverImage?: string;
  coverAlt?: string;
  author?: string;
  publishedAt?: string;
  readingTime?: number;
  tags?: string[];
  tocLabel?: string;
  category?: string;
  wikiClass: string; // e.g. 'crimson-desert-wiki'
}

/**
 * Server-side rendered article content.
 * Renders full article HTML that Googlebot can index.
 * Hidden when the client SPA mounts.
 */
export default function SSRArticleContent({
  title,
  content,
  coverImage,
  coverAlt,
  author,
  publishedAt,
  readingTime,
  tags,
  tocLabel = 'Table of Contents',
  category,
  wikiClass,
}: SSRArticleContentProps) {
  const toc = extractTOC(content);
  const renderedContent = renderMarkdownContent(content);

  return (
    <div data-wiki-ssr="" className={wikiClass}>
      <main className="relative z-10 pt-24 pb-16 px-4">
        <article className="max-w-3xl mx-auto">
          {/* Category badge */}
          {category && (
            <span className="text-xs tracking-widest uppercase opacity-70">{category}</span>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 leading-tight">{title}</h1>

          {/* Meta */}
          {(author || publishedAt || readingTime) && (
            <div className="flex items-center gap-4 text-xs opacity-60 mb-8">
              {author && <span>{author}</span>}
              {publishedAt && <span>{publishedAt}</span>}
              {readingTime && <span>~{readingTime} min</span>}
            </div>
          )}

          {/* Cover image */}
          {coverImage && (
            <div className="relative rounded-lg overflow-hidden mb-10">
              <img
                src={coverImage}
                alt={coverAlt || title}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Table of Contents */}
          {toc.length > 3 && (
            <nav className="mb-10 p-4 rounded-lg border" aria-label={tocLabel}>
              <h2 className="text-sm font-bold mb-3">{tocLabel}</h2>
              <ul className="space-y-1.5">
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                    <a href={`#${item.id}`} className="text-xs leading-relaxed">
                      {item.level === 3 ? '└ ' : ''}
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Content */}
          <div className="prose max-w-none">
            {renderedContent}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t">
              {tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full border">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
