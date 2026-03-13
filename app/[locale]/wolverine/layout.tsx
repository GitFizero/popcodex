import { setRequestLocale } from 'next-intl/server';
import WolverineShell from '@/components/wiki/wolverine/WolverineShell';

export default async function WolverineLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="universe-wolverine" style={{ minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
      <WolverineShell locale={locale}>
        {children}
      </WolverineShell>
    </div>
  );
}
