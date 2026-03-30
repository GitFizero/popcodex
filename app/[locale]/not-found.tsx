import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">
        <h2
          className="text-6xl font-bold text-[var(--color-accent)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          404
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text)]">
          Page not found
        </p>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-2.5 rounded-[var(--radius-button)] font-medium text-sm transition-colors no-underline"
          style={{
            background: 'var(--color-accent)',
            color: 'white',
          }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
