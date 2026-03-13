import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { generateFranchiseMetadata } from '@/lib/seo/metadata';
import { getFranchiseById } from '@/lib/franchise-config';
import FableHome from '@/components/wiki/fable/pages/FableHome';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const franchise = getFranchiseById('fable')!;
  return generateFranchiseMetadata(franchise, locale);
}

export default async function FablePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FableHome locale={locale} />;
}
