import { setRequestLocale } from 'next-intl/server';

export default async function PolitiqueConfidentialite({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <h1
        className="text-3xl font-bold text-[var(--color-text)] mb-8"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
      </h1>
      <div className="prose text-[var(--color-text-secondary)] space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mt-8 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {locale === 'fr' ? 'Collecte de données' : 'Data Collection'}
        </h2>
        <p>
          {locale === 'fr'
            ? 'PopCodex utilise Umami Analytics, une solution d\'analyse respectueuse de la vie privée qui ne collecte aucune donnée personnelle et n\'utilise pas de cookies. Aucune donnée personnelle identifiable n\'est collectée, stockée ou partagée.'
            : 'PopCodex uses Umami Analytics, a privacy-friendly analytics solution that collects no personal data and uses no cookies. No personally identifiable data is collected, stored or shared.'}
        </p>
        <h2 className="text-lg font-semibold text-[var(--color-text)] mt-8 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Cookies
        </h2>
        <p>
          {locale === 'fr'
            ? 'PopCodex n\'utilise pas de cookies de suivi. Le seul stockage local utilisé concerne vos préférences de thème (clair/sombre) et de langue, enregistrées dans le localStorage de votre navigateur.'
            : 'PopCodex does not use tracking cookies. The only local storage used is for your theme (light/dark) and language preferences, stored in your browser\'s localStorage.'}
        </p>
        <h2 className="text-lg font-semibold text-[var(--color-text)] mt-8 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {locale === 'fr' ? 'Contact' : 'Contact'}
        </h2>
        <p>
          {locale === 'fr'
            ? 'Pour toute question relative à la confidentialité, contactez-nous via le site.'
            : 'For any privacy-related questions, contact us through the website.'}
        </p>
      </div>
    </div>
  );
}
