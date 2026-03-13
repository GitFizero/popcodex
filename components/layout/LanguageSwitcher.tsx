'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Globe, Loader2 } from 'lucide-react';
import { locales, localeNames, localeFlags, Locale } from '@/lib/i18n/config';

export default function LanguageSwitcher() {
  const t = useTranslations('accessibility');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    setOpen(false);
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={t('selectLanguage')}
        aria-expanded={open}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[var(--radius-button)] hover:bg-[var(--color-bg-subtle)] transition-colors text-sm font-medium text-[var(--color-text-secondary)]"
      >
        {isPending ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : (
          <Globe className="w-3.5 h-3.5" />
        )}
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-lg overflow-hidden z-50">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[var(--color-bg-subtle)] ${
                l === locale ? 'text-[var(--color-accent)] font-medium' : 'text-[var(--color-text)]'
              }`}
            >
              <span>{localeFlags[l]}</span>
              <span>{localeNames[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
