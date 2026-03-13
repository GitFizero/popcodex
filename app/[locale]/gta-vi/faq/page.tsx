import { setRequestLocale } from 'next-intl/server';
import GtaFAQ from '@/components/wiki/gta-vi/pages/GtaFAQ';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaFAQ locale={locale} />;
}
