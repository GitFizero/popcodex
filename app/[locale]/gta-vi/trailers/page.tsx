import { setRequestLocale } from 'next-intl/server';
import GtaTrailers from '@/components/wiki/gta-vi/pages/GtaTrailers';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaTrailers locale={locale} />;
}
