// @ts-nocheck
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const { t, lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={`Blog Article | Wolverine Wiki`}
        description="Blog article"
        path={`/blog/${slug}`}
        lang={lang}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/blog" className="font-ui text-xs text-yellow-500 hover:text-yellow-400 transition-colors mb-6 inline-block">← {t('blog.backToList')}</Link>
        <RevealOnScroll>
          <div className="text-center py-16">
            <h1 className="font-display text-2xl text-gold-bright mb-4">{lang === 'fr' ? 'Article non trouve' : 'Article not found'}</h1>
            <p className="font-body text-sm text-text-muted-custom">{t('blog.emptyDesc')}</p>
            <Link to="/blog" className="btn-outline mt-6 inline-block">{t('blog.backToList')}</Link>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default BlogArticlePage;
