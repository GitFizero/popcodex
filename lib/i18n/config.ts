export const locales = ['fr', 'en', 'es', 'pt', 'it', 'ko', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  pt: 'Português',
  it: 'Italiano',
  ko: '한국어',
  de: 'Deutsch',
};

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸',
  pt: '🇧🇷',
  it: '🇮🇹',
  ko: '🇰🇷',
  de: '🇩🇪',
};
