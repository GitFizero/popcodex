import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getFranchiseById, getAllFranchiseIds } from '@/lib/franchise-config';
import { generateFranchiseMetadata } from '@/lib/seo/metadata';
import { generateVideoGameJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo/jsonld';
import FranchiseHub from '@/components/wiki/FranchiseHub';
import { locales } from '@/lib/i18n/config';

export async function generateStaticParams() {
  const params: { locale: string; franchise: string }[] = [];
  for (const locale of locales) {
    for (const id of getAllFranchiseIds()) {
      params.push({ locale, franchise: id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; franchise: string }> }) {
  const { locale, franchise: franchiseId } = await params;
  const franchise = getFranchiseById(franchiseId);
  if (!franchise) return {};
  return generateFranchiseMetadata(franchise, locale);
}

export default async function FranchisePage({ params }: { params: Promise<{ locale: string; franchise: string }> }) {
  const { locale, franchise: franchiseId } = await params;
  setRequestLocale(locale);

  const franchise = getFranchiseById(franchiseId);
  if (!franchise) notFound();

  const videoGameJsonLd = generateVideoGameJsonLd(franchise, locale);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'PopCodex', url: `/${locale}` },
    { name: franchise.name[locale] || franchise.name.fr, url: `/${locale}/${franchise.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FranchiseHub franchise={franchise} />
    </>
  );
}
