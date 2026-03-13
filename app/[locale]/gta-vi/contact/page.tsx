import { setRequestLocale } from 'next-intl/server';
import GtaContact from '@/components/wiki/gta-vi/pages/GtaContact';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaContact locale={locale} />;
}
