import { setRequestLocale } from 'next-intl/server';
import GtaViceCity from '@/components/wiki/gta-vi/pages/GtaViceCity';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaViceCity locale={locale} />;
}
