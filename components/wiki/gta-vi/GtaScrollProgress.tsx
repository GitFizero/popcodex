'use client';

import { useEffect, useState } from 'react';

const GtaScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[1001]">
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, hsl(var(--neon-pink)), hsl(var(--neon-yellow)), hsl(var(--neon-cyan)))',
          boxShadow: '0 0 12px hsl(var(--neon-pink) / 0.5)',
        }}
      />
    </div>
  );
};

export default GtaScrollProgress;
