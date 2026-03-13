'use client';

import { useState, useEffect, memo } from 'react';

interface WikiScrollProgressProps {
  /** CSS gradient for the progress bar */
  gradient: string;
  /** CSS box-shadow for glow effect */
  glow?: string;
}

const WikiScrollProgress = memo(({ gradient, glow }: WikiScrollProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[1001]" aria-hidden="true">
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: gradient,
          boxShadow: glow,
          transition: 'width 50ms linear',
        }}
      />
    </div>
  );
});

WikiScrollProgress.displayName = 'WikiScrollProgress';
export default WikiScrollProgress;
