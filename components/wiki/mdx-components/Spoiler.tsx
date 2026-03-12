'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Eye, EyeOff } from 'lucide-react';

interface SpoilerProps {
  children: React.ReactNode;
}

export default function Spoiler({ children }: SpoilerProps) {
  const t = useTranslations('article');
  const [visible, setVisible] = useState(false);

  return (
    <div className="my-6 rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden">
      <button
        onClick={() => setVisible(!visible)}
        className="w-full flex items-center gap-2 px-4 py-3 bg-[var(--color-bg-subtle)] text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
      >
        {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        {visible ? t('hideSpoiler') : t('showSpoiler')}
      </button>
      {visible && (
        <div className="p-4 text-sm text-[var(--color-text)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
