'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const CrimsonDesertApp = dynamic(
  () => import('@/crimson-desert-wiki/App'),
  {
    ssr: false,
    loading: () => null, // SSR content is already visible
  }
);

interface CrimsonDesertClientProps {
  basename: string;
}

export default function CrimsonDesertClient({ basename }: CrimsonDesertClientProps) {
  useEffect(() => {
    // Hide SSR content once the SPA has mounted
    const ssrElements = document.querySelectorAll('[data-wiki-ssr]');
    ssrElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/crimson-desert/pywelwiki.css" />
      <link rel="stylesheet" href="/crimson-desert/overrides.css" />
      <CrimsonDesertApp basename={basename} />
    </>
  );
}
