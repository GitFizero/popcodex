import { setRequestLocale } from 'next-intl/server';
import GtaAbout from '@/components/wiki/gta-vi/pages/GtaAbout';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaAbout locale={locale} />;
}
