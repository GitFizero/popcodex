'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      window.scrollTo(0, 0);
      setVisible(false);
      // Force reflow then fade in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }
  }, [pathname]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 250ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
