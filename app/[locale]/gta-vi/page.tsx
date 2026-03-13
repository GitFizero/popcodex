import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { generateFranchiseMetadata } from '@/lib/seo/metadata';
import { getFranchiseById } from '@/lib/franchise-config';
import GtaHome from '@/components/wiki/gta-vi/pages/GtaHome';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const franchise = getFranchiseById('gta-vi')!;
  return generateFranchiseMetadata(franchise, locale);
}

export default async function GtaViPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GtaHome locale={locale} />;
}
