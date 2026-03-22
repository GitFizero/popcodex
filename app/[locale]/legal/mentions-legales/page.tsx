import { setRequestLocale } from 'next-intl/server';

export default async function MentionsLegales({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <h1
        className="text-3xl font-bold text-[var(--color-text)] mb-8"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {locale === 'fr' ? 'Mentions légales' : 'Legal Notice'}
      </h1>
      <div className="prose text-[var(--color-text-secondary)] space-y-4 text-sm leading-relaxed">
        <p>
          PopCodex est un site web communautaire et non officiel dédié à la pop culture.
          Les marques, noms de produits et logos mentionnés sur ce site sont la propriété
          de leurs détenteurs respectifs.
        </p>
        <h2 className="text-lg font-semibold text-[var(--color-text)] mt-8 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {locale === 'fr' ? 'Éditeur du site' : 'Website Publisher'}
        </h2>
        <p>PopCodex — www.popcodex.com</p>
        <h2 className="text-lg font-semibold text-[var(--color-text)] mt-8 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {locale === 'fr' ? 'Hébergement' : 'Hosting'}
        </h2>
        <p>Vercel Inc. — vercel.com</p>
        <h2 className="text-lg font-semibold text-[var(--color-text)] mt-8 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {locale === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}
        </h2>
        <p>
          Tout le contenu rédactionnel de PopCodex est original. Les captures d&apos;écran,
          logos et marques appartiennent à leurs propriétaires respectifs et sont utilisés
          à des fins informatives uniquement.
        </p>
        <p>
          Grand Theft Auto VI est une marque de Rockstar Games / Take-Two Interactive.
          Fable est une marque de Xbox Game Studios.
          Marvel&apos;s Wolverine est une marque de Sony Interactive Entertainment / Marvel.
        </p>
      </div>
    </div>
  );
}
