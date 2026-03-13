'use client';

import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import '@/crimson-desert-wiki/crimson-desert-wiki.css';

const CrimsonDesertApp = dynamic(
  () => import('@/crimson-desert-wiki/App'),
  {
    ssr: false,
    loading: () => (
      <div className="crimson-desert-wiki" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'hsl(10 50% 1.4%)' }}>
        <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '1.2rem', color: 'hsl(42 53% 54%)', animation: 'pulse 2s infinite' }}>
          Chargement...
        </div>
      </div>
    ),
  }
);

export default function CrimsonDesertPage() {
  const params = useParams();
  const locale = params?.locale as string || 'fr';

  return <CrimsonDesertApp basename={`/${locale}/crimson-desert`} />;
}
