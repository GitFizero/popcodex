import { setRequestLocale } from 'next-intl/server';
import CrimsonGlossary from '@/components/wiki/crimson-desert/pages/CrimsonGlossary';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonGlossary locale={locale} />;
}
