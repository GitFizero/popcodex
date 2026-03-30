'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const FableApp = dynamic(
  () => import('@/fable-wiki/App'),
  {
    ssr: false,
    loading: () => null,
  }
);

interface FableClientProps {
  basename: string;
}

export default function FableClient({ basename }: FableClientProps) {
  useEffect(() => {
    const ssrElements = document.querySelectorAll('[data-wiki-ssr]');
    ssrElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/fable/wiki.css" />
      <link rel="stylesheet" href="/fable/overrides.css" />
      <FableApp basename={basename} />
    </>
  );
}
