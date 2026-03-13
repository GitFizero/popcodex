'use client';

import { useEffect, useRef, useState, memo } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

const RevealOnScroll = memo(({ children, stagger = 0, className = '', direction = 'up' }: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: 'translateY(40px)',
    left: 'translateX(-60px)',
    right: 'translateX(60px)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${stagger}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${stagger}ms`,
      }}
    >
      {children}
    </div>
  );
});

RevealOnScroll.displayName = 'RevealOnScroll';
export default RevealOnScroll;
