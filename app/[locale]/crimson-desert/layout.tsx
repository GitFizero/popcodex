import { setRequestLocale } from 'next-intl/server';

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
    <div className="universe-crimson overlay-vignette" style={{ minHeight: '100vh' }}>
      {children}
    </div>
  );
}
