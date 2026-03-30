import { memo } from 'react';

interface RuneDividerProps {
  variant?: 'full' | 'short' | 'section';
  title?: string;
  className?: string;
}

const RuneDivider = memo(({ variant = 'full', title, className = '' }: RuneDividerProps) => {
  const width = variant === 'short' ? 'w-3/5 mx-auto' : 'w-full';

  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${width} ${className}`} role="separator">
      <div className="flex-1 h-px bg-emerald-mid/40" style={{ animation: 'draw-line 1s ease-out forwards' }} />
      <div className="flex items-center gap-4">
        {/* Celtic knot / fairy tale ornament */}
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-emerald-mid opacity-80">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="currentColor" />
        </svg>
        {variant === 'section' && title ? (
          <span className="font-heading text-sm tracking-[0.2em] text-emerald-mid uppercase whitespace-nowrap px-2">
            {title}
          </span>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold-mid opacity-80">
            <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M8 0L9 5.5L14.5 4L10.5 8L14.5 12L9 10.5L8 16L7 10.5L1.5 12L5.5 8L1.5 4L7 5.5Z" fill="currentColor" opacity="0.6" />
          </svg>
        )}
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-emerald-mid opacity-80">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="currentColor" />
        </svg>
      </div>
      <div className="flex-1 h-px bg-emerald-mid/40" style={{ animation: 'draw-line 1s ease-out forwards' }} />
    </div>
  );
});

RuneDivider.displayName = 'RuneDivider';
export default RuneDivider;
