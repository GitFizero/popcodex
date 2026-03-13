import { setRequestLocale } from 'next-intl/server';
import CrimsonGallery from '@/components/wiki/crimson-desert/pages/CrimsonGallery';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonGallery locale={locale} />;
}
