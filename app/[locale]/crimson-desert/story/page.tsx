import { setRequestLocale } from 'next-intl/server';
import CrimsonStory from '@/components/wiki/crimson-desert/pages/CrimsonStory';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonStory locale={locale} />;
}
