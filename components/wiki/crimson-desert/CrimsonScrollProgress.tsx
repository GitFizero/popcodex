'use client';

import { useState, useEffect, memo } from 'react';

const CrimsonScrollProgress = memo(() => {
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
      <div className="h-full" style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, hsl(0 68% 32%), hsl(42 53% 54%), hsl(14 80% 50%))',
        boxShadow: '0 0 10px hsl(6 64% 46% / 0.35)',
        transition: 'width 50ms linear',
      }} />
    </div>
  );
});

CrimsonScrollProgress.displayName = 'CrimsonScrollProgress';
export default CrimsonScrollProgress;
