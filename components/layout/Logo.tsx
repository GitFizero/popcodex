import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Logo() {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}`}
      className="group flex items-center gap-0 font-display text-xl sm:text-2xl font-bold tracking-tight no-underline"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <span className="text-[var(--color-text)]">Pop</span>
      <span className="text-[var(--color-accent)] transition-colors duration-300 group-hover:brightness-110">
        Codex
      </span>
    </Link>
  );
}
