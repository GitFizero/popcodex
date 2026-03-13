import { setRequestLocale } from 'next-intl/server';
import CrimsonQuests from '@/components/wiki/crimson-desert/pages/CrimsonQuests';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonQuests locale={locale} />;
}
