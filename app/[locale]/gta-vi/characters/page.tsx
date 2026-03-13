import { setRequestLocale } from 'next-intl/server';
import GtaCharacters from '@/components/wiki/gta-vi/pages/GtaCharacters';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaCharacters locale={locale} />;
}
