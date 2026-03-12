'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ThemeToggle() {
  const t = useTranslations('accessibility');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next === 'dark' ? 'dark' : '');
    localStorage.setItem('theme', next);
  };

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={t('toggleTheme')}
      className="relative flex items-center justify-center w-9 h-9 rounded-[var(--radius-button)] hover:bg-[var(--color-bg-subtle)] transition-colors"
    >
      {theme === 'light' ? (
        <Sun className="w-[18px] h-[18px] text-[var(--color-text-secondary)]" />
      ) : (
        <Moon className="w-[18px] h-[18px] text-[var(--color-text-secondary)]" />
      )}
    </button>
  );
}
