'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const WolverineApp = dynamic(
  () => import('@/wolverine-wiki/App'),
  {
    ssr: false,
    loading: () => (
      <div className="wolverine-wiki" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'hsl(0 0% 3%)' }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.4rem', color: '#EAB308', animation: 'pulse 2s infinite', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Loading...
        </div>
      </div>
    ),
  }
);

export default function WolverinePage() {
  const params = useParams();
  const locale = params?.locale as string || 'fr';

  return (
    <>
      <link rel="stylesheet" href="/wolverine/wiki.css" />
      <link rel="stylesheet" href="/wolverine/overrides.css" />
      <WolverineApp basename={`/${locale}/wolverine`} />
    </>
  );
}
