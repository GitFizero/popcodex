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
  const franchise = getFranchiseById('crimson-desert')!;
  const wikiPage = path?.[0];
  return generateWikiMetadata('crimson-desert', franchise, locale, wikiPage);
}

export default async function CrimsonDesertLayout({ params, children }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
