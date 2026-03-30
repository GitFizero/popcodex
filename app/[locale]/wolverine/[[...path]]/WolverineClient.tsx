'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const WolverineApp = dynamic(
  () => import('@/wolverine-wiki/App'),
  {
    ssr: false,
    loading: () => null,
  }
);

interface WolverineClientProps {
  basename: string;
}

export default function WolverineClient({ basename }: WolverineClientProps) {
  useEffect(() => {
    const ssrElements = document.querySelectorAll('[data-wiki-ssr]');
    ssrElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/wolverine/wiki.css" />
      <link rel="stylesheet" href="/wolverine/overrides.css" />
      <WolverineApp basename={basename} />
    </>
  );
}
