'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  const t = useTranslations('site');

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">
        <h2
          className="text-2xl font-bold text-[var(--color-text)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Something went wrong
        </h2>
        <p className="mt-3 text-[var(--color-text-secondary)]">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="mt-6 px-6 py-2.5 rounded-[var(--radius-button)] font-medium text-sm transition-colors"
          style={{
            background: 'var(--color-accent)',
            color: 'white',
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
