import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { locales, Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Critical fonts — homepage display + body */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700&family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Wiki-specific fonts — loaded async to avoid render-blocking */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=IM+Fell+English:ital@0;1&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Permanent+Marker&family=Courier+Prime:wght@400;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=IM+Fell+English:ital@0;1&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Permanent+Marker&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
