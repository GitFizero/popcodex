import { setRequestLocale } from 'next-intl/server';
import CrimsonLore from '@/components/wiki/crimson-desert/pages/CrimsonLore';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonLore locale={locale} />;
}
