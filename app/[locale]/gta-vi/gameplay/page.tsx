import { setRequestLocale } from 'next-intl/server';
import GtaGameplay from '@/components/wiki/gta-vi/pages/GtaGameplay';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaGameplay locale={locale} />;
}
