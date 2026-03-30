import React from 'react';

interface SSRSectionContentProps {
  title: string;
  description: string;
  wikiClass: string;
  children?: React.ReactNode;
}

/**
 * Server-side rendered section page content.
 * Provides minimal but indexable content for wiki section pages (Characters, Story, etc.)
 * Hidden when the client SPA mounts.
 */
export default function SSRSectionContent({
  title,
  description,
  wikiClass,
  children,
}: SSRSectionContentProps) {
  return (
    <div data-wiki-ssr="" className={wikiClass}>
      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-base opacity-80 mb-8">{description}</p>
          {children}
        </div>
      </main>
    </div>
  );
}
