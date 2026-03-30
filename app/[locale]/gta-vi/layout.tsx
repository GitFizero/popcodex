import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/lib/i18n/config';

export default async function GtaViLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  // The GTA VI wiki is a self-contained SPA with its own NavBar and Footer
  return <>{children}</>;
}
