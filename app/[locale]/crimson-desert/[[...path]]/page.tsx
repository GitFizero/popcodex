import { blogArticles } from '@/crimson-desert-wiki/data/blog';
import { characters } from '@/crimson-desert-wiki/data/characters';
import { loreEntries } from '@/crimson-desert-wiki/data/lore';
import { chapters } from '@/crimson-desert-wiki/data/story';
import { seo } from '@/crimson-desert-wiki/lib/seo';
import SSRArticleContent from '@/lib/wiki-ssr/SSRArticleContent';
import SSRSectionContent from '@/lib/wiki-ssr/SSRSectionContent';
import { generateWikiArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/wiki-ssr/metadata';
import CrimsonDesertClient from './CrimsonDesertClient';

const WIKI_CLASS = 'crimson-desert-wiki';
const FRANCHISE_ID = 'crimson-desert';

/** Helper to get localized text with fallback */
function tr(obj: Record<string, string> | undefined, locale: string): string {
  if (!obj) return '';
  return obj[locale] || obj.en || obj.fr || '';
}

const tocLabels: Record<string, string> = {
  fr: 'Sommaire', en: 'Table of Contents', es: 'Índice', it: 'Indice', ko: '목차', pt: 'Sumário',
};

type Props = {
  params: Promise<{ locale: string; path?: string[] }>;
};

export default async function CrimsonDesertPage({ params }: Props) {
  const { locale, path } = await params;
  const section = path?.[0] || '';
  const basename = `/${locale}/${FRANCHISE_ID}`;

  // Determine SSR content based on the route
  let ssrContent: React.ReactNode = null;
  let jsonLdScripts: React.ReactNode = null;

  if (section === 'blog' && path?.[1]) {
    // Blog article page — full SSR content
    const slug = path[1];
    const article = blogArticles.find(a => a.slug === slug);
    if (article) {
      const articleJsonLd = generateWikiArticleJsonLd(
        FRANCHISE_ID, article, locale, 'Crimson Desert Fan Wiki'
      );
      const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: locale === 'fr' ? 'Accueil' : 'Home', path: `/${locale}/${FRANCHISE_ID}` },
        { name: 'Blog', path: `/${locale}/${FRANCHISE_ID}/blog` },
        { name: tr(article.title, locale), path: `/${locale}/${FRANCHISE_ID}/blog/${slug}` },
      ]);

      jsonLdScripts = (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        </>
      );

      ssrContent = (
        <SSRArticleContent
          wikiClass={WIKI_CLASS}
          title={tr(article.title, locale)}
          content={tr(article.content, locale)}
          coverImage={article.coverImage || undefined}
          coverAlt={`${tr(article.title, locale)} — © Pearl Abyss`}
          author={article.author}
          publishedAt={article.publishedAt}
          readingTime={article.readingTime}
          tags={article.tags.map(tag => tr(tag, locale))}
          tocLabel={tocLabels[locale] || tocLabels.en}
          category={article.category}
        />
      );
    }
  } else if (section === 'blog') {
    // Blog listing page — render article list for SEO
    const seoData = seo.blog;
    ssrContent = (
      <SSRSectionContent
        wikiClass={WIKI_CLASS}
        title={tr(seoData.title, locale)}
        description={tr(seoData.desc, locale)}
      >
        <div>
          {blogArticles.map(article => (
            <article key={article.slug} style={{ marginBottom: '2rem' }}>
              <h2>
                <a href={`/${locale}/${FRANCHISE_ID}/blog/${article.slug}`}>
                  {tr(article.title, locale)}
                </a>
              </h2>
              <p>{tr(article.excerpt, locale)}</p>
              <span>{article.publishedAt} · ~{article.readingTime} min</span>
            </article>
          ))}
        </div>
      </SSRSectionContent>
    );
  } else if (section === 'characters') {
    // Characters page — render character list for SEO
    const seoData = seo.characters;
    ssrContent = (
      <SSRSectionContent
        wikiClass={WIKI_CLASS}
        title={tr(seoData.title, locale)}
        description={tr(seoData.desc, locale)}
      >
        <div>
          {characters.map(char => (
            <section key={char.id} style={{ marginBottom: '2rem' }}>
              <h2>{char.name}</h2>
              <p><strong>{tr(char.role, locale)}</strong> — {char.faction}</p>
              <p>{tr(char.bio, locale)}</p>
            </section>
          ))}
        </div>
      </SSRSectionContent>
    );
  } else if (section === 'story') {
    // Story page — render chapters for SEO
    const seoData = seo.story;
    ssrContent = (
      <SSRSectionContent
        wikiClass={WIKI_CLASS}
        title={tr(seoData.title, locale)}
        description={tr(seoData.desc, locale)}
      >
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
    // Lore page — render lore entries for SEO
    const seoData = seo.lore;
    ssrContent = (
      <SSRSectionContent
        wikiClass={WIKI_CLASS}
        title={tr(seoData.title, locale)}
        description={tr(seoData.desc, locale)}
      >
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
  } else if (section && seo[section as keyof typeof seo]) {
    // Generic section pages (world, combat, weapons, glossary, guides, gallery, items, mounts, quests, buy, about, privacy)
    const seoData = seo[section as keyof typeof seo] as { title: Record<string, string>; desc: Record<string, string> };
    if (seoData?.title && seoData?.desc) {
      ssrContent = (
        <SSRSectionContent
          wikiClass={WIKI_CLASS}
          title={tr(seoData.title, locale)}
          description={tr(seoData.desc, locale)}
        />
      );
    }
  } else if (!section) {
    // Index page
    const seoData = seo.index;
    ssrContent = (
      <SSRSectionContent
        wikiClass={WIKI_CLASS}
        title={tr(seoData.title, locale)}
        description={tr(seoData.desc, locale)}
      />
    );
  }

  return (
    <>
      {/* JSON-LD structured data */}
      {jsonLdScripts}

      {/* Server-rendered content for SEO — visible until SPA mounts */}
      {ssrContent}

      {/* Client SPA for full interactivity */}
      <CrimsonDesertClient basename={basename} />
    </>
  );
}
