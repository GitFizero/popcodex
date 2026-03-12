import Link from 'next/link';

interface CardProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ href, children, className = '' }: CardProps) {
  return (
    <Link
      href={href}
      className={`group block rounded-[var(--radius-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-bg-elevated)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md no-underline ${className}`}
    >
      {children}
    </Link>
  );
}
