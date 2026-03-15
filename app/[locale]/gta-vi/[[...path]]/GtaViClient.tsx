'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const GtaViApp = dynamic(
  () => import('@/gta-vi-wiki/App'),
  {
    ssr: false,
    loading: () => null,
  }
);

interface GtaViClientProps {
  basename: string;
}

export default function GtaViClient({ basename }: GtaViClientProps) {
  useEffect(() => {
    const ssrElements = document.querySelectorAll('[data-wiki-ssr]');
    ssrElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
  }, []);

  return (
    <>
      <link rel="preload" href="/gta-vi/wiki.css" as="style" />
      <link rel="preload" href="/gta-vi/overrides.css" as="style" />
      <link rel="stylesheet" href="/gta-vi/wiki.css" />
      <link rel="stylesheet" href="/gta-vi/overrides.css" />
      <GtaViApp basename={basename} />
    </>
  );
}
