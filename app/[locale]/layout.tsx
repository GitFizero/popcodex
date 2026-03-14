import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { locales, Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UniverseTransition from '@/components/ui/UniverseTransition';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Critical fonts: display + body fonts needed for initial render
const CRITICAL_FONTS = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&family=Instrument+Sans:wght@400;500;600;700&display=swap';

// Non-critical fonts: loaded asynchronously after page render
const DEFERRED_FONTS = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=IM+Fell+English:ital@0;1&family=Rajdhani:wght@400;500;600;700&family=Bricolage+Grotesque:wght@400;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+KR:wght@400;500;700&display=swap';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const messages = (await import(`@/messages/${locale}/common.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#08080f" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Critical fonts - loaded synchronously for initial render */}
        <link href={CRITICAL_FONTS} rel="stylesheet" />
        {/* Non-critical fonts - loaded asynchronously */}
        <link
          href={DEFERRED_FONTS}
          rel="stylesheet"
          media="print"
          // @ts-ignore - onLoad switches media to 'all' after load
          onLoad="this.media='all'"
        />
        <noscript>
          <link href={DEFERRED_FONTS} rel="stylesheet" />
        </noscript>
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main-content" className="skip-nav">
            Skip to content
          </a>
          <Header />
          <main id="main-content">
            <UniverseTransition>
              {children}
            </UniverseTransition>
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
