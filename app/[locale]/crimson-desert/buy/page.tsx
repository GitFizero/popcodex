import { setRequestLocale } from 'next-intl/server';
import CrimsonBuy from '@/components/wiki/crimson-desert/pages/CrimsonBuy';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonBuy locale={locale} />;
}
