import { setRequestLocale } from 'next-intl/server';
import GtaCharacterDetail from '@/components/wiki/gta-vi/pages/GtaCharacterDetail';

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <GtaCharacterDetail locale={locale} slug={slug} />;
}
