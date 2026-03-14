'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useParams, useSearchParams } from 'next/navigation';
import { getFranchiseById } from '@/lib/franchise-config';

function LogoInner({ size = 'default' }: { size?: 'default' | 'large' }) {
  const locale = useLocale();
  const params = useParams();
  const searchParams = useSearchParams();
  const wikiMode = searchParams.get('wiki') === 'true';

  if (wikiMode) return null;

  const franchise = params?.franchise ? getFranchiseById(params.franchise as string) : null;
  const accent = franchise?.accentColor || 'var(--color-accent)';
  const secondary = franchise?.theme?.accentSecondary || accent;
  const h = size === 'large' ? 40 : 32;

  return (
    <Link
      href={`/${locale}`}
      className="group flex items-center no-underline"
      aria-label="PopCodex — Accueil"
    >
      <svg
        viewBox="0 0 40 40"
        width={h}
        height={h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
        role="img"
        aria-label="PopCodex logo"
      >
        <g className="transition-transform duration-500 group-hover:rotate-[15deg] origin-[20px_20px]">
          <circle cx="20" cy="20" r="16" stroke={accent} strokeWidth="1.5" opacity="0.25" className="transition-all duration-300" />
          <circle cx="20" cy="20" r="11" stroke={secondary} strokeWidth="1.5" opacity="0.5" className="transition-all duration-300" />
          <circle cx="20" cy="20" r="6" stroke={accent} strokeWidth="2" opacity="0.9" className="transition-all duration-300" />
          <circle cx="20" cy="20" r="2" fill={accent} opacity="1" className="transition-all duration-300" />
          <circle cx="20" cy="6" r="1.5" fill={secondary} opacity="0.7" className="transition-all duration-300" />
        </g>
      </svg>
    </Link>
  );
}

export default function Logo({ size = 'default' }: { size?: 'default' | 'large' }) {
  return (
    <Suspense fallback={null}>
      <LogoInner size={size} />
    </Suspense>
  );
}
