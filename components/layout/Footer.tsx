'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { getAllFranchiseIds, franchises } from '@/lib/franchise-config';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const allFranchises = getAllFranchiseIds();

  return (
    <footer className="mt-24 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href={`/${locale}`}
              className="inline-block font-display text-xl font-bold tracking-tight no-underline"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--color-text)]">Pop</span>
              <span className="text-[var(--color-accent)]">Codex</span>
            </Link>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)] max-w-xs leading-relaxed">
              {t('disclaimer')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Franchises
            </h3>
            <ul className="space-y-2">
              {allFranchises.map((id) => (
                <li key={id}>
                  <Link
                    href={`/${locale}/${id}`}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors no-underline"
                  >
                    {franchises[id].name[locale] || franchises[id].name.fr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/legal/mentions-legales`}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors no-underline"
                >
                  {t('legal')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/legal/politique-confidentialite`}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors no-underline"
                >
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-border)] text-center">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            &copy; {new Date().getFullYear()} PopCodex. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
