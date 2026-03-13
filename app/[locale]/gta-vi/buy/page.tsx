import { setRequestLocale } from 'next-intl/server';
import GtaBuy from '@/components/wiki/gta-vi/pages/GtaBuy';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaBuy locale={locale} />;
}
