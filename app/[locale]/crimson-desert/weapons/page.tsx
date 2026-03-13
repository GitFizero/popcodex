import { setRequestLocale } from 'next-intl/server';
import CrimsonWeapons from '@/components/wiki/crimson-desert/pages/CrimsonWeapons';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonWeapons locale={locale} />;
}
