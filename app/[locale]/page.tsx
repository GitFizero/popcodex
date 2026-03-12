import { setRequestLocale } from 'next-intl/server';
import { generateBaseMetadata } from '@/lib/seo/metadata';
import { generateWebsiteJsonLd } from '@/lib/seo/jsonld';
import HeroSection from '@/components/home/HeroSection';
import UniverseGrid from '@/components/home/UniverseGrid';
import RecentArticles from '@/components/home/RecentArticles';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateBaseMetadata(locale);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = generateWebsiteJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <UniverseGrid />
      <RecentArticles />
    </>
  );
}
