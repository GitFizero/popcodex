'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { getFranchiseById } from '@/lib/franchise-config';

/**
 * PopCodex logo — abstract "portal" mark + wordmark.
 * The accent ring color adapts to the current franchise.
 */
export default function Logo({ size = 'default' }: { size?: 'default' | 'large' }) {
  const locale = useLocale();
  const params = useParams();
  const franchise = params?.franchise ? getFranchiseById(params.franchise as string) : null;
  const accent = franchise?.accentColor || 'var(--color-accent)';
  const secondary = franchise?.theme?.accentSecondary || accent;

  const h = size === 'large' ? 40 : 28;
  const w = Math.round(h * 3.2);

  return (
    <Link
      href={`/${locale}`}
      className="group flex items-center gap-0 no-underline"
      aria-label="PopCodex — Accueil"
    >
      <svg
        viewBox="0 0 128 40"
        width={w}
        height={h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
        role="img"
        aria-label="PopCodex logo"
      >
        {/* Portal mark — concentric rings */}
        <g className="transition-transform duration-500 group-hover:rotate-[15deg] origin-[20px_20px]">
          {/* Outer glow */}
          <circle cx="20" cy="20" r="16" stroke={accent} strokeWidth="1.5" opacity="0.25" className="transition-all duration-300" />
          {/* Middle ring */}
          <circle cx="20" cy="20" r="11" stroke={secondary} strokeWidth="1.5" opacity="0.5" className="transition-all duration-300" />
          {/* Inner ring */}
          <circle cx="20" cy="20" r="6" stroke={accent} strokeWidth="2" opacity="0.9" className="transition-all duration-300" />
          {/* Core dot */}
          <circle cx="20" cy="20" r="2" fill={accent} opacity="1" className="transition-all duration-300" />
          {/* Orbital accent */}
          <circle cx="20" cy="6" r="1.5" fill={secondary} opacity="0.7" className="transition-all duration-300" />
        </g>

        {/* Wordmark */}
        <text
          x="42" y="26"
          fontFamily="'Bricolage Grotesque', system-ui, sans-serif"
          fontWeight="700"
          fontSize="18"
          letterSpacing="-0.02em"
        >
          <tspan fill="currentColor">Pop</tspan>
          <tspan fill={accent} className="transition-all duration-300">Codex</tspan>
        </text>
      </svg>
    </Link>
  );
}
