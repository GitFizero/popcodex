import Link from 'next/link';
import { useLocale } from 'next-intl';

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lm-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="lm-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="32" y="32" width="448" height="448" rx="96" fill="#0a0a0f" />
      <rect
        x="32" y="32" width="448" height="448" rx="96"
        fill="none" stroke="url(#lm-g)" strokeWidth="3" opacity="0.4"
      />
      <path
        d="M148 160 L118 256 L148 352"
        fill="none" stroke="url(#lm-g2)" strokeWidth="28"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.6"
      />
      <path
        d="M200 148 L200 364 M200 148 L310 148 Q388 148 388 228 Q388 308 310 308 L200 308"
        fill="none" stroke="url(#lm-g)" strokeWidth="40"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="380" cy="348" r="20" fill="url(#lm-g)" />
    </svg>
  );
}

export default function Logo() {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}`}
      className="group flex items-center gap-2 font-display text-xl sm:text-2xl font-bold tracking-tight no-underline"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <LogoMark />
      <span className="text-[var(--color-text)]">Pop</span>
      <span className="-ml-1.5 text-[var(--color-accent)] transition-colors duration-300 group-hover:brightness-110">
        Codex
      </span>
    </Link>
  );
}
