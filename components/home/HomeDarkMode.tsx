'use client';

import { useEffect } from 'react';

export default function HomeDarkMode() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    return () => {
      // Restore user's preferred theme when leaving homepage
      const stored = localStorage.getItem('theme');
      if (stored) {
        document.documentElement.setAttribute('data-theme', stored === 'dark' ? 'dark' : '');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    };
  }, []);

  return null;
}
