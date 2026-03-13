import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { generateFranchiseMetadata } from '@/lib/seo/metadata';
import { getFranchiseById } from '@/lib/franchise-config';
import CrimsonHome from '@/components/wiki/crimson-desert/pages/CrimsonHome';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const franchise = getFranchiseById('crimson-desert')!;
  return generateFranchiseMetadata(franchise, locale);
}

export default async function CrimsonDesertPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrimsonHome locale={locale} />;
}
