import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { generateFranchiseMetadata } from '@/lib/seo/metadata';
import { getFranchiseById } from '@/lib/franchise-config';
import WolverineHome from '@/components/wiki/wolverine/pages/WolverineHome';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const franchise = getFranchiseById('wolverine')!;
  return generateFranchiseMetadata(franchise, locale);
}

export default async function WolverinePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WolverineHome locale={locale} />;
}
