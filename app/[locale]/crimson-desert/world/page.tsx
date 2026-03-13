import { setRequestLocale } from 'next-intl/server';
import CrimsonWorld from '@/components/wiki/crimson-desert/pages/CrimsonWorld';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonWorld locale={locale} />;
}
