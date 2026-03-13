import { setRequestLocale } from 'next-intl/server';
import GtaBlogArticle from '@/components/wiki/gta-vi/pages/GtaBlogArticle';

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <GtaBlogArticle locale={locale} slug={slug} />;
}
