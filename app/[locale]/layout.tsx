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
// Only load 2 critical fonts synchronously (body + display), defer the rest
const CRITICAL_FONTS = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700&family=Instrument+Sans:wght@400;500;600;700&family=Cinzel+Decorative:wght@400;700&display=swap';

// Non-critical fonts: loaded asynchronously after page render
// Deferred fonts: all remaining fonts loaded after initial paint
const DEFERRED_FONTS = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700&family=DM+Sans:wght@400;500;600;700&family=Barlow+Condensed:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=IM+Fell+English:ital@0;1&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+KR:wght@400;500;700&display=swap';

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
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2920984102033876" crossOrigin="anonymous"></script>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Critical fonts - loaded synchronously for initial render */}
        <link href={CRITICAL_FONTS} rel="stylesheet" />
        {/* Non-critical fonts - loaded asynchronously via preload */}
        <link
          rel="preload"
          href={DEFERRED_FONTS}
          as="style"
        />
        <link
          href={DEFERRED_FONTS}
          rel="stylesheet"
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
