import { setRequestLocale } from 'next-intl/server';
import CrimsonGuides from '@/components/wiki/crimson-desert/pages/CrimsonGuides';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonGuides locale={locale} />;
}
