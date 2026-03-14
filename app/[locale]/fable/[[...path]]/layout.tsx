import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getFranchiseById } from '@/lib/franchise-config';
import { generateWikiMetadata } from '@/lib/seo/metadata';

type Props = {
  params: Promise<{ locale: string; path?: string[] }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, path } = await params;
  const franchise = getFranchiseById('fable')!;
  const wikiPage = path?.[0];
  return generateWikiMetadata('fable', franchise, locale, wikiPage);
}

export default async function FableLayout({ params, children }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
