import { setRequestLocale } from 'next-intl/server';
import GtaStory from '@/components/wiki/gta-vi/pages/GtaStory';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaStory locale={locale} />;
}
