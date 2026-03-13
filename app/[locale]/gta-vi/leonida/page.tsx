import { setRequestLocale } from 'next-intl/server';
import GtaLeonida from '@/components/wiki/gta-vi/pages/GtaLeonida';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaLeonida locale={locale} />;
}
