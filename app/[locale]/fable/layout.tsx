import { setRequestLocale } from 'next-intl/server';
import FableShell from '@/components/wiki/fable/FableShell';

export default async function FableLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="universe-fable" style={{ minHeight: '100vh', fontFamily: "'Crimson Text', serif" }}>
      <FableShell locale={locale}>
        {children}
      </FableShell>
    </div>
  );
}
