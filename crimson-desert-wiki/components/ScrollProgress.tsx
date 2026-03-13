import { useState, useEffect, memo } from 'react';

const ScrollProgress = memo(() => {
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
    <div className="fixed top-0 left-0 w-full h-[3px] z-[1001]" aria-hidden="true" style={{ willChange: 'contents' }}>
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, hsl(var(--crimson-core)), hsl(var(--gold-mid)), hsl(var(--crimson-fire)))',
          boxShadow: '0 0 10px hsl(var(--crimson-glow))',
          transition: 'width 50ms linear',
          willChange: 'width',
        }}
      />
    </div>
  );
});

ScrollProgress.displayName = 'ScrollProgress';
export default ScrollProgress;
