import { characters } from '@/wolverine-wiki/data/characters';
import { loreEntries } from '@/wolverine-wiki/data/lore';
import { chapters } from '@/wolverine-wiki/data/story';
import { seo } from '@/wolverine-wiki/lib/seo';
import SSRSectionContent from '@/lib/wiki-ssr/SSRSectionContent';
import WolverineClient from './WolverineClient';

const WIKI_CLASS = 'wolverine-wiki';
const FRANCHISE_ID = 'wolverine';

function tr(obj: Record<string, string> | undefined, locale: string): string {
  if (!obj) return '';
  return obj[locale] || obj.en || obj.fr || '';
}

type Props = {
  params: Promise<{ locale: string; path?: string[] }>;
};

export default async function WolverinePage({ params }: Props) {
  const { locale, path } = await params;
  const section = path?.[0] || '';
  const basename = `/${locale}/${FRANCHISE_ID}`;

  let ssrContent: React.ReactNode = null;

  if (section === 'characters') {
    ssrContent = (
      <SSRSectionContent wikiClass={WIKI_CLASS} title={tr(seo.characters.title, locale)} description={tr(seo.characters.desc, locale)}>
        <div>
          {characters.map(char => (
            <section key={char.id} style={{ marginBottom: '2rem' }}>
              <h2>{char.name}</h2>
              <p><strong>{tr(char.role, locale)}</strong></p>
              <p>{tr(char.bio, locale)}</p>
            </section>
          ))}
        </div>
      </SSRSectionContent>
    );
  } else if (section === 'story') {
    ssrContent = (
      <SSRSectionContent wikiClass={WIKI_CLASS} title={tr(seo.story.title, locale)} description={tr(seo.story.desc, locale)}>
        <div>
          {chapters.map(ch => (
            <section key={ch.id} style={{ marginBottom: '2rem' }}>
              <h2>{ch.numeral}. {tr(ch.title, locale)}</h2>
              <p>{tr(ch.synopsis, locale)}</p>
            </section>
          ))}
        </div>
      </SSRSectionContent>
    );
  } else if (section === 'lore') {
    ssrContent = (
      <SSRSectionContent wikiClass={WIKI_CLASS} title={tr(seo.lore.title, locale)} description={tr(seo.lore.desc, locale)}>
        <div>
          {loreEntries.map(entry => (
            <section key={entry.id} style={{ marginBottom: '2rem' }}>
              <h2>{entry.title}</h2>
              <p>{tr(entry.excerpt, locale)}</p>
            </section>
          ))}
        </div>
      </SSRSectionContent>
    );
  } else if (section && (seo as any)[section]) {
    const seoData = (seo as any)[section] as { title?: Record<string, string>; desc?: Record<string, string> };
    if (seoData?.title && seoData?.desc) {
      ssrContent = (
        <SSRSectionContent wikiClass={WIKI_CLASS} title={tr(seoData.title, locale)} description={tr(seoData.desc, locale)} />
      );
    }
  } else if (!section) {
    ssrContent = (
      <SSRSectionContent wikiClass={WIKI_CLASS} title={tr(seo.index.title, locale)} description={tr(seo.index.desc, locale)} />
    );
  }

  return (
    <>
      {ssrContent}
      <WolverineClient basename={basename} />
    </>
  );
}
