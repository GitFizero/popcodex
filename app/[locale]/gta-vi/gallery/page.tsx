import { setRequestLocale } from 'next-intl/server';
import GtaGallery from '@/components/wiki/gta-vi/pages/GtaGallery';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaGallery locale={locale} />;
}
