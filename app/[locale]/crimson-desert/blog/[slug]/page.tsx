import { setRequestLocale } from 'next-intl/server';
import CrimsonBlogArticle from '@/components/wiki/crimson-desert/pages/CrimsonBlogArticle';

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <CrimsonBlogArticle locale={locale} slug={slug} />;
}
