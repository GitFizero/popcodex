import { blogArticles } from '@/gta-vi-wiki/data/blog';
import { characters } from '@/gta-vi-wiki/data/characters';
import { loreEntries } from '@/gta-vi-wiki/data/lore';
import { chapters } from '@/gta-vi-wiki/data/story';
import { seo } from '@/gta-vi-wiki/lib/seo';
import SSRArticleContent from '@/lib/wiki-ssr/SSRArticleContent';
import SSRSectionContent from '@/lib/wiki-ssr/SSRSectionContent';
import { generateWikiArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/wiki-ssr/metadata';
import GtaViClient from './GtaViClient';

const WIKI_CLASS = 'gta-vi-wiki';
const FRANCHISE_ID = 'gta-vi';

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

export default async function GtaViPage({ params }: Props) {
  const { locale, path } = await params;
  const section = path?.[0] || '';
  const basename = `/${locale}/${FRANCHISE_ID}`;

  let ssrContent: React.ReactNode = null;
  let jsonLdScripts: React.ReactNode = null;

  if (section === 'blog' && path?.[1]) {
    const slug = path[1];
    const article = blogArticles.find(a => a.slug === slug);
    if (article) {
      const articleJsonLd = generateWikiArticleJsonLd(FRANCHISE_ID, article, locale, 'GTA VI Wiki');
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
          coverAlt={`${tr(article.title, locale)} — © Rockstar Games`}
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
    ssrContent = (
      <SSRSectionContent wikiClass={WIKI_CLASS} title={tr(seo.blog.title, locale)} description={tr(seo.blog.desc, locale)}>
        <div>
          {blogArticles.map(article => (
            <article key={article.slug} style={{ marginBottom: '2rem' }}>
              <h2><a href={`/${locale}/${FRANCHISE_ID}/blog/${article.slug}`}>{tr(article.title, locale)}</a></h2>
              <p>{tr(article.excerpt, locale)}</p>
              <span>{article.publishedAt} · ~{article.readingTime} min</span>
            </article>
          ))}
        </div>
      </SSRSectionContent>
    );
  } else if (section === 'characters') {
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
      {jsonLdScripts}
      {ssrContent}
      <GtaViClient basename={basename} />
    </>
  );
}
