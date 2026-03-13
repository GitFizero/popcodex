import { setRequestLocale } from 'next-intl/server';
import GtaBlog from '@/components/wiki/gta-vi/pages/GtaBlog';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaBlog locale={locale} />;
}
