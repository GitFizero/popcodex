import { setRequestLocale } from 'next-intl/server';
import CrimsonMounts from '@/components/wiki/crimson-desert/pages/CrimsonMounts';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonMounts locale={locale} />;
}
