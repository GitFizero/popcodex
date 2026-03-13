'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, ChevronRight, ArrowRight, List } from 'lucide-react';
import { getArticleBySlug, blogArticles, getArticlePath, type BlogArticle } from '@/lib/data/gta-vi/blogArticles';
import { useGtaI18n, type Lang } from '@/lib/data/gta-vi/i18n';
import { useCallback, useMemo, useState } from 'react';

// FAQ data for guide articles
const articleFaqs: Record<string, Record<Lang, Array<{ q: string; a: string }>>> = {
  'vice-city-map-all-confirmed-locations': {
    fr: [
      { q: 'Combien de zones sont confirmées sur la carte de GTA 6 ?', a: 'Au moins 7 zones majeures ont été confirmées : Vice City (Ocean Beach, Downtown, Little Havana), Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia et Mount Kalaga.' },
      { q: 'La carte de GTA 6 est-elle plus grande que GTA 5 ?', a: 'Oui, selon les analyses des trailers et les informations de Rockstar, la carte de Leonida dans GTA 6 est significativement plus grande que Los Santos dans GTA 5, avec plus de 700 lieux distincts.' },
    ],
    en: [
      { q: 'How many zones are confirmed on the GTA 6 map?', a: 'At least 7 major zones have been confirmed: Vice City (Ocean Beach, Downtown, Little Havana), Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia and Mount Kalaga.' },
      { q: 'Is the GTA 6 map bigger than GTA 5?', a: 'Yes, based on trailer analysis and Rockstar information, the Leonida map in GTA 6 is significantly larger than Los Santos in GTA 5, with over 700 distinct locations.' },
    ],
    es: [
      { q: '¿Cuántas zonas están confirmadas en el mapa de GTA 6?', a: 'Al menos 7 zonas principales: Vice City (Ocean Beach, Downtown, Little Havana), Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia y Mount Kalaga.' },
      { q: '¿Es el mapa de GTA 6 más grande que el de GTA 5?', a: 'Sí, según los análisis de los tráilers, el mapa de Leonida es significativamente más grande que Los Santos, con más de 700 ubicaciones distintas.' },
    ],
    it: [
      { q: 'Quante zone sono confermate nella mappa di GTA 6?', a: 'Almeno 7 zone principali: Vice City (Ocean Beach, Downtown, Little Havana), Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e Mount Kalaga.' },
      { q: 'La mappa di GTA 6 è più grande di GTA 5?', a: 'Sì, secondo le analisi dei trailer, la mappa di Leonida è significativamente più grande di Los Santos, con oltre 700 luoghi distinti.' },
    ],
  },
  'gta-6-all-confirmed-vehicles': {
    fr: [
      { q: 'Combien de véhicules sont confirmés dans GTA 6 ?', a: 'Plus de 200 véhicules ont été identifiés dans les trailers et fuites, incluant voitures, bateaux, avions, motos et véhicules spéciaux.' },
      { q: 'Peut-on conduire des bateaux dans GTA 6 ?', a: 'Oui, de nombreux bateaux sont confirmés dont des speedboats, yachts, jet-skis et bateaux de pêche, particulièrement autour des Leonida Keys.' },
    ],
    en: [
      { q: 'How many vehicles are confirmed in GTA 6?', a: 'Over 200 vehicles have been identified from trailers and leaks, including cars, boats, planes, motorcycles and special vehicles.' },
      { q: 'Can you drive boats in GTA 6?', a: 'Yes, many boats are confirmed including speedboats, yachts, jet-skis and fishing boats, especially around the Leonida Keys.' },
    ],
    es: [
      { q: '¿Cuántos vehículos hay confirmados en GTA 6?', a: 'Más de 200 vehículos identificados en tráilers y filtraciones: coches, barcos, aviones, motos y vehículos especiales.' },
      { q: '¿Se pueden conducir barcos en GTA 6?', a: 'Sí, muchos barcos están confirmados incluyendo lanchas, yates y motos de agua.' },
    ],
    it: [
      { q: 'Quanti veicoli sono confermati in GTA 6?', a: 'Oltre 200 veicoli identificati dai trailer e leak: auto, barche, aerei, moto e veicoli speciali.' },
      { q: 'Si possono guidare barche in GTA 6?', a: 'Sì, molte barche sono confermate tra cui motoscafi, yacht e moto d\'acqua.' },
    ],
  },
  'gta-6-easter-eggs-secrets': {
    fr: [
      { q: 'Combien d\'easter eggs y a-t-il dans GTA 6 ?', a: 'Les trailers révèlent déjà plus de 20 références et secrets. Le jeu complet en contiendra probablement des centaines, comme GTA 5 qui en comptait plus de 200.' },
      { q: 'Y a-t-il des références à Tommy Vercetti dans GTA 6 ?', a: 'Oui, un bâtiment portant le nom "Vercetti" a été repéré dans le trailer 2, un hommage au protagoniste de GTA Vice City (2002).' },
    ],
    en: [
      { q: 'How many easter eggs are there in GTA 6?', a: 'The trailers already reveal over 20 references and secrets. The full game will likely contain hundreds, as GTA 5 had over 200.' },
      { q: 'Are there Tommy Vercetti references in GTA 6?', a: 'Yes, a building bearing the name "Vercetti" was spotted in trailer 2, a tribute to GTA Vice City\'s (2002) protagonist.' },
    ],
    es: [
      { q: '¿Cuántos easter eggs hay en GTA 6?', a: 'Los tráilers ya revelan más de 20 referencias y secretos. El juego completo probablemente contendrá cientos.' },
      { q: '¿Hay referencias a Tommy Vercetti en GTA 6?', a: 'Sí, un edificio con el nombre "Vercetti" fue detectado en el tráiler 2.' },
    ],
    it: [
      { q: 'Quanti easter egg ci sono in GTA 6?', a: 'I trailer rivelano già oltre 20 riferimenti e segreti. Il gioco completo ne conterrà probabilmente centinaia.' },
      { q: 'Ci sono riferimenti a Tommy Vercetti in GTA 6?', a: 'Sì, un edificio con il nome "Vercetti" è stato individuato nel trailer 2.' },
    ],
  },
  'gta-6-cheat-codes': {
    fr: [
      { q: 'Y aura-t-il des codes de triche dans GTA 6 ?', a: 'Bien que non confirmé officiellement, chaque jeu GTA principal a inclus des cheats. Il est quasi certain que GTA 6 en proposera en mode histoire.' },
      { q: 'Les cheats fonctionneront-ils dans GTA Online 2 ?', a: 'Non, comme dans GTA 5, les codes de triche seront très probablement réservés au mode histoire et indisponibles en multijoueur.' },
    ],
    en: [
      { q: 'Will there be cheat codes in GTA 6?', a: 'While not officially confirmed, every main GTA game has included cheats. It\'s almost certain GTA 6 will have them in story mode.' },
      { q: 'Will cheats work in GTA Online 2?', a: 'No, like GTA 5, cheat codes will most likely be restricted to story mode and unavailable in multiplayer.' },
    ],
    es: [
      { q: '¿Habrá códigos de trucos en GTA 6?', a: 'Aunque no confirmado oficialmente, todos los GTA principales han incluido cheats. Es casi seguro que GTA 6 los tendrá.' },
      { q: '¿Funcionarán los trucos en GTA Online 2?', a: 'No, como en GTA 5, los códigos estarán probablemente reservados al modo historia.' },
    ],
    it: [
      { q: 'Ci saranno codici trucchi in GTA 6?', a: 'Anche se non confermato ufficialmente, ogni GTA principale li ha inclusi. È quasi certo che GTA 6 li avrà.' },
      { q: 'I trucchi funzioneranno in GTA Online 2?', a: 'No, come in GTA 5, i codici saranno probabilmente riservati alla modalità storia.' },
    ],
  },
  'gta-6-all-confirmed-weapons': {
    fr: [
      { q: 'Peut-on tirer sous l\'eau dans GTA 6 ?', a: 'Oui, GTA 6 introduit le combat aquatique pour la première fois. Le speargun permet le combat sous-marin et certaines armes fonctionnent en nageant.' },
      { q: 'Y a-t-il des armes de mêlée dans GTA 6 ?', a: 'Oui, la batte de baseball, le couteau et le combat à mains nues amélioré sont confirmés, en lien avec les combats MMA de Lucia.' },
    ],
    en: [
      { q: 'Can you shoot underwater in GTA 6?', a: 'Yes, GTA 6 introduces aquatic combat for the first time. The speargun enables underwater combat and some weapons work while swimming.' },
      { q: 'Are there melee weapons in GTA 6?', a: 'Yes, baseball bat, knife and enhanced fist fighting are confirmed, tied to Lucia\'s MMA cage fights.' },
    ],
    es: [
      { q: '¿Se puede disparar bajo el agua en GTA 6?', a: 'Sí, GTA 6 introduce el combate acuático por primera vez con el arpón y algunas armas funcionan nadando.' },
      { q: '¿Hay armas cuerpo a cuerpo en GTA 6?', a: 'Sí, bate de béisbol, cuchillo y combate mejorado con puños están confirmados.' },
    ],
    it: [
      { q: 'Si può sparare sott\'acqua in GTA 6?', a: 'Sì, GTA 6 introduce il combattimento acquatico per la prima volta con il fucile subacqueo.' },
      { q: 'Ci sono armi corpo a corpo in GTA 6?', a: 'Sì, mazza da baseball, coltello e pugni migliorati sono confermati.' },
    ],
  },
};

const BlogArticlePage = ({ locale, slug }: { locale: string; slug: string }) => {
  const { lang } = useGtaI18n(locale);
  const router = useRouter();
  const [tocOpen, setTocOpen] = useState(false);

  const article = slug ? getArticleBySlug(slug) : undefined;

  const handleContentClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[data-internal-link]') as HTMLAnchorElement | null;
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        router.push(href);
      }
    }
  }, [router]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    const sameCategory = blogArticles.filter(a => a.id !== article.id && a.category === article.category);
    const others = blogArticles.filter(a => a.id !== article.id && a.category !== article.category);
    return [...sameCategory, ...others].slice(0, 3);
  }, [article]);

  // Extract TOC from markdown h2 headings
  const tocItems = useMemo(() => {
    if (!article) return [];
    const headings: Array<{ text: string; id: string }> = [];
    const regex = /^## (.+)$/gm;
    let match;
    while ((match = regex.exec(article.content[lang])) !== null) {
      const text = match[1];
      const id = text.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôùûüÿçñáíóúü]+/gi, '-').replace(/^-|-$/g, '');
      headings.push({ text, id });
    }
    return headings;
  }, [article, lang]);

  if (!article) return null;

  // Build hreflang paths for this article
  const hreflangPaths: Record<Lang, string> = {
    fr: `/blog/${article.slug.fr}`,
    en: `/blog/${article.slug.en}`,
    es: `/blog/${article.slug.es}`,
    it: `/blog/${article.slug.it}`,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://leonidawiki.com/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://leonidawiki.com/blog` },
      { '@type': 'ListItem', position: 3, name: article.title[lang] },
    ],
  };

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[lang],
    description: article.metaDescription[lang],
    image: `https://leonidawiki.com${article.coverImage}`,
    author: { '@type': 'Organization', name: article.author },
    publisher: { '@type': 'Organization', name: 'Leonida Wiki', url: 'https://leonidawiki.com' },
    datePublished: article.publishDate,
    dateModified: article.updatedDate || article.publishDate,
    inLanguage: lang,
    mainEntityOfPage: `https://leonidawiki.com/blog/${article.slug[lang]}`,
  };

  // FAQ schema for guide articles
  const faqs = articleFaqs[article.id]?.[lang];
  const faqLd = faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  const allJsonLd = [articleLd, breadcrumbLd, ...(faqLd ? [faqLd] : [])];

  return (
    <div className="min-h-screen pt-16 pb-20">
      {/* Breadcrumb */}
      <nav className="max-w-3xl mx-auto px-4 pt-6 pb-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 font-rajdhani text-[0.6rem] text-text-muted-vice">
          <li><Link href={`/${locale}/gta-vi`} className="hover:text-text-secondary transition-colors">Home</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li><Link href={`/${locale}/gta-vi/blog`} className="hover:text-text-secondary transition-colors">Blog</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-text-secondary line-clamp-1">{article.title[lang]}</li>
        </ol>
      </nav>

      {/* Cover */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="relative rounded-xl overflow-hidden aspect-[21/9]">
          <img
            src={article.coverImage}
            alt={article.coverAlt[lang]}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-4 mb-10">
        <span className="inline-block font-rajdhani text-[0.55rem] px-2.5 py-0.5 rounded bg-neon-pink/20 text-neon-pink tracking-widest mb-4">
          {article.category.toUpperCase()}
        </span>
        <h1 className="font-bebas text-2xl sm:text-4xl text-text-primary mb-4 leading-tight">
          {article.title[lang]}
        </h1>
        <div className="flex items-center gap-4 font-rajdhani text-[0.6rem] text-text-muted-vice">
          <span>{article.author}</span>
          <span>·</span>
          <span>{article.publishDate}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readingTime} min</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {article.tags[lang].map(tag => (
            <span key={tag} className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded-full border border-neon-cyan/15 text-text-secondary tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Table of Contents */}
      {tocItems.length > 2 && (
        <div className="max-w-3xl mx-auto px-4 mb-8">
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="flex items-center gap-2 font-rajdhani text-[0.6rem] tracking-widest text-neon-cyan hover:text-neon-pink transition-colors"
          >
            <List className="w-4 h-4" />
            {lang === 'fr' ? 'SOMMAIRE' : lang === 'es' ? 'ÍNDICE' : lang === 'it' ? 'SOMMARIO' : 'TABLE OF CONTENTS'}
            <span className="text-text-muted-vice">({tocItems.length})</span>
          </button>
          {tocOpen && (
            <nav className="mt-3 p-4 rounded-lg bg-bg-card border border-neon-cyan/10" aria-label="Table of contents">
              <ol className="space-y-1.5">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-dm text-xs text-text-secondary hover:text-neon-cyan transition-colors flex items-baseline gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      <span className="font-rajdhani text-[0.5rem] text-text-muted-vice">{String(i + 1).padStart(2, '0')}</span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 prose-wiki">
        <div
          className="font-dm text-sm text-text-secondary leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content[lang]) }}
          onClick={handleContentClick}
        />
      </article>

      {/* FAQ Section (visible for guides with FAQs) */}
      {faqs && faqs.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="font-bebas text-xl sm:text-2xl text-text-primary mb-6">
            {lang === 'fr' ? 'Questions fréquentes' : lang === 'es' ? 'Preguntas frecuentes' : lang === 'it' ? 'Domande frequenti' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-bg-card rounded-lg border border-neon-cyan/10 overflow-hidden">
                <summary className="font-barlow font-semibold text-xs text-text-primary p-4 cursor-pointer hover:text-neon-cyan transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-text-muted-vice transition-transform group-open:rotate-90" />
                </summary>
                <p className="font-dm text-xs text-text-secondary px-4 pb-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <h2 className="font-bebas text-xl sm:text-2xl text-text-primary mb-6">
            {lang === 'fr' ? 'Articles similaires' : lang === 'es' ? 'Artículos similares' : lang === 'it' ? 'Articoli simili' : 'Related Articles'}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedArticles.map(related => (
              <Link
                key={related.id}
                href={`/${locale}/gta-vi${getArticlePath(related, lang)}`}
                className="group bg-bg-card rounded-xl overflow-hidden border border-white/5 hover:border-neon-cyan/20 transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={related.coverImage}
                    alt={related.coverAlt[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bebas text-sm text-text-primary mb-1 group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {related.title[lang]}
                  </h3>
                  <span className="font-rajdhani text-[0.5rem] text-neon-cyan flex items-center gap-1 group-hover:gap-2 transition-all">
                    {lang === 'fr' ? 'LIRE' : lang === 'es' ? 'LEER' : lang === 'it' ? 'LEGGI' : 'READ'} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="max-w-3xl mx-auto px-4 mt-12 pt-8 border-t border-neon-pink/10">
        <Link
          href={`/${locale}/gta-vi/blog`}
          className="inline-flex items-center gap-2 font-barlow font-semibold text-xs text-neon-cyan hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Blog
        </Link>
      </div>
    </div>
  );
};

// Markdown renderer with anchor IDs on h2
function renderMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, (_match, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôùûüÿçñáíóúü]+/gi, '-').replace(/^-|-$/g, '');
      return `<h2 id="${id}" class="font-bebas text-xl sm:text-2xl text-text-primary mt-10 mb-4 scroll-mt-20">${text}</h2>`;
    })
    .replace(/^### (.+)$/gm, '<h3 class="font-bebas text-base sm:text-lg neon-cyan-text mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary font-medium">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-text-muted-vice italic">$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-neon-cyan underline underline-offset-2 hover:text-neon-pink transition-colors" data-internal-link>$1</a>')
    .replace(/^---$/gm, '<hr class="border-neon-pink/10 my-8" />')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-text-secondary">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (match) => `<ul class="space-y-1 my-3">${match}</ul>`)
    .replace(/\n\n/g, '</p><p class="text-text-secondary">')
    .replace(/^(?!<[hul]|<hr|<p)(.+)$/gm, '<p class="text-text-secondary">$1</p>');
}

export default BlogArticlePage;