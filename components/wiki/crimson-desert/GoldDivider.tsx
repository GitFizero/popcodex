'use client';

import { memo } from 'react';

interface GoldDividerProps {
  variant?: 'full' | 'short' | 'section';
  title?: string;
  className?: string;
}

const GoldDivider = memo(({ variant = 'full', title, className = '' }: GoldDividerProps) => {
  const width = variant === 'short' ? 'w-3/5 mx-auto' : 'w-full';

  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${width} ${className}`} role="separator">
      <div className="flex-1 h-px bg-gold-mid/40" style={{ animation: 'draw-line 1s ease-out forwards' }} />
      <div className="flex items-center gap-4">
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-mid" />
        {variant === 'section' && title ? (
          <span className="font-heading text-sm tracking-[0.2em] text-gold-mid uppercase whitespace-nowrap px-2">
            {title}
          </span>
        ) : (
          <div className="w-3 h-3 rotate-45 bg-gold-mid" />
        )}
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-mid" />
      </div>
      <div className="flex-1 h-px bg-gold-mid/40" style={{ animation: 'draw-line 1s ease-out forwards' }} />
    </div>
  );
});

GoldDivider.displayName = 'GoldDivider';
export default GoldDivider;
