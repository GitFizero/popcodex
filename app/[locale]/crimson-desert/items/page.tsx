import { setRequestLocale } from 'next-intl/server';
import CrimsonItems from '@/components/wiki/crimson-desert/pages/CrimsonItems';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonItems locale={locale} />;
}
