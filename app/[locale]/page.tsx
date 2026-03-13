import { setRequestLocale } from 'next-intl/server';
import { generateBaseMetadata } from '@/lib/seo/metadata';
import { generateWebsiteJsonLd } from '@/lib/seo/jsonld';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UniverseTransition from '@/components/ui/UniverseTransition';
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
      <a href="#main-content" className="skip-nav">Skip to content</a>
      <Header />
      <main id="main-content">
        <UniverseTransition>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <HeroSection />
          <UniverseGrid />
          <RecentArticles />
        </UniverseTransition>
      </main>
      <Footer />
    </>
  );
}
