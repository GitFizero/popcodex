'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const FableApp = dynamic(
  () => import('@/fable-wiki/App'),
  {
    ssr: false,
    loading: () => (
      <div className="fable-wiki" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'hsl(150 30% 3%)' }}>
        <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.2rem', color: '#22C55E', animation: 'pulse 2s infinite' }}>
          Chargement...
        </div>
      </div>
    ),
  }
);

export default function FablePage() {
  const params = useParams();
  const locale = params?.locale as string || 'fr';

  return (
    <>
      <link rel="stylesheet" href="/fable/wiki.css" />
      <link rel="stylesheet" href="/fable/overrides.css" />
      <FableApp basename={`/${locale}/fable`} />
    </>
  );
}
