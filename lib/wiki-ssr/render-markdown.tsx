import React, { Fragment } from 'react';

/**
 * Parse inline markdown (bold, italic, links) into React elements.
 * Used for server-side rendering of wiki article content.
 */
function parseInline(text: string): React.ReactNode {
  // Match: **bold**, *italic*, [text](url)
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)]+)\))/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      // **bold**
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[3]) {
      // *italic*
      parts.push(<em key={match.index}>{match[3]}</em>);
    } else if (match[4] && match[5]) {
      // [text](url)
      const isExternal = match[5].startsWith('http');
      parts.push(
        <a
          key={match.index}
          href={match[5]}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {match[4]}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 0 ? text : parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}

/** Generate a slug-like ID from heading text */
function headingToId(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôùûüÿçñ]+/gi, '-').replace(/^-|-$/g, '');
}

/**
 * Server-side markdown-to-HTML renderer for wiki content.
 * Supports: ## headings, ### headings, paragraphs, **bold**, *italic*, [links](url), - list items
 */
export function renderMarkdownContent(content: string): React.ReactNode {
  if (!content) return null;
  const paragraphs = content.split('\n\n');

  return paragraphs.map((paragraph, i) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith('### ')) {
      const text = trimmed.replace('### ', '');
      return (
        <h3 key={i} id={headingToId(text)} style={{ scrollMarginTop: '6rem' }}>
          {text}
        </h3>
      );
    }
    if (trimmed.startsWith('## ')) {
      const text = trimmed.replace('## ', '');
      return (
        <h2 key={i} id={headingToId(text)} style={{ scrollMarginTop: '6rem' }}>
          {text}
        </h2>
      );
    }

    // List items (lines starting with -)
    const lines = trimmed.split('\n');
    if (lines.every(l => l.startsWith('- '))) {
      return (
        <ul key={i}>
          {lines.map((line, j) => (
            <li key={j}>{parseInline(line.slice(2))}</li>
          ))}
        </ul>
      );
    }

    return <p key={i}>{parseInline(trimmed)}</p>;
  });
}

/**
 * Extract text-only Table of Contents from markdown content.
 */
export function extractTOC(content: string): { level: number; text: string; id: string }[] {
  if (!content) return [];
  return content
    .split('\n\n')
    .filter(p => p.startsWith('## ') || p.startsWith('### '))
    .map(p => {
      const level = p.startsWith('### ') ? 3 : 2;
      const text = p.replace(/^#{2,3}\s/, '');
      return { level, text, id: headingToId(text) };
    });
}
