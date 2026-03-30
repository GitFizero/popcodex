import { memo } from 'react';

interface NeonDividerProps {
  variant?: 'full' | 'short' | 'section';
  title?: string;
  className?: string;
}

const NeonDivider = memo(({ variant = 'full', title, className = '' }: NeonDividerProps) => {
  const width = variant === 'short' ? 'w-3/5 mx-auto' : 'w-full';

  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${width} ${className}`} role="separator">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #FF1493, #00FFFF)', animation: 'draw-line 1s ease-out forwards' }} />
      <div className="flex items-center gap-4">
        <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#FF1493', boxShadow: '0 0 8px #FF1493' }} />
        {variant === 'section' && title ? (
          <span className="font-heading text-sm tracking-[0.2em] uppercase whitespace-nowrap px-2" style={{ color: '#00FFFF', textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}>
            {title}
          </span>
        ) : (
          <div className="w-3 h-3 rotate-45" style={{ background: 'linear-gradient(135deg, #FF1493, #00FFFF)', boxShadow: '0 0 12px #FF1493, 0 0 12px #00FFFF' }} />
        )}
        <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#00FFFF', boxShadow: '0 0 8px #00FFFF' }} />
      </div>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #00FFFF, #FF1493)', animation: 'draw-line 1s ease-out forwards' }} />
    </div>
  );
});

NeonDivider.displayName = 'NeonDivider';
export default NeonDivider;
