'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const GtaViApp = dynamic(
  () => import('@/gta-vi-wiki/App'),
  {
    ssr: false,
    loading: () => (
      <div className="gta-vi-wiki" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'hsl(220 67% 2%)' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#FF1493', animation: 'pulse 2s infinite', letterSpacing: '0.15em' }}>
          LOADING...
        </div>
      </div>
    ),
  }
);

export default function GtaViPage() {
  const params = useParams();
  const locale = params?.locale as string || 'fr';

  return (
    <>
      <link rel="preload" href="/gta-vi/wiki.css" as="style" />
      <link rel="preload" href="/gta-vi/overrides.css" as="style" />
      <link rel="stylesheet" href="/gta-vi/wiki.css" />
      <link rel="stylesheet" href="/gta-vi/overrides.css" />
      <GtaViApp basename={`/${locale}/gta-vi`} />
    </>
  );
}
