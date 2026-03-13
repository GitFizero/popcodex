import { setRequestLocale } from 'next-intl/server';
import CrimsonShell from '@/components/wiki/crimson-desert/CrimsonShell';

export default async function CrimsonDesertLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="universe-crimson" style={{ minHeight: '100vh', fontFamily: "'Crimson Text', serif" }}>
      <CrimsonShell locale={locale}>
        {children}
      </CrimsonShell>
    </div>
  );
}
