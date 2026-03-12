'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TOC({ content }: { content: string }) {
  const t = useTranslations('article');
  const [activeId, setActiveId] = useState('');

  const headings: TocItem[] = [];
  const regex = /^#{2,3}\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1];
    const id = text.toLowerCase().replace(/[^a-zà-ÿ0-9\s-]/g, '').replace(/\s+/g, '-');
    const level = match[0].startsWith('###') ? 3 : 2;
    headings.push({ id, text, level });
  }

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-4">
      <h3
        className="text-sm font-semibold text-[var(--color-text)] mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {t('toc')}
      </h3>
      <ul className="space-y-1">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block text-sm py-1 transition-colors no-underline ${
                level === 3 ? 'pl-4' : ''
              } ${
                activeId === id
                  ? 'text-[var(--color-accent)] font-medium'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
