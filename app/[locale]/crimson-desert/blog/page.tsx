import { setRequestLocale } from 'next-intl/server';
import CrimsonBlog from '@/components/wiki/crimson-desert/pages/CrimsonBlog';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonBlog locale={locale} />;
}
