import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/lib/i18n/routing';
import { Locale } from '@/lib/i18n/config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}/common.json`)).default,
  };
});
