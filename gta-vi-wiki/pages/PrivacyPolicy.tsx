// @ts-nocheck
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';

const PrivacyPolicy = () => {
  const { lang } = useI18n();

  const content = {
    fr: {
      title: 'Politique de Confidentialite',
      sections: [
        { heading: 'Introduction', text: "Cette politique de confidentialite decrit comment le Wiki Fan GTA VI collecte, utilise et protege les informations des visiteurs." },
        { heading: 'Donnees collectees', text: "Ce site ne collecte aucune donnee personnelle directement. Nous utilisons des cookies techniques pour le fonctionnement du site (preference de langue, mode d'affichage)." },
        { heading: 'Cookies', text: "Le site utilise des cookies fonctionnels pour stocker vos preferences (langue, mode retro). Aucun cookie publicitaire n'est utilise." },
        { heading: 'Liens externes', text: "Ce site contient des liens vers des sites externes (Rockstar Games, boutiques en ligne). Nous ne sommes pas responsables du contenu ou des pratiques de confidentialite de ces sites." },
        { heading: 'Contact', text: "Pour toute question relative a cette politique, veuillez nous contacter a contact@gtaviwiki.com." },
      ],
    },
    en: {
      title: 'Privacy Policy',
      sections: [
        { heading: 'Introduction', text: 'This privacy policy describes how the GTA VI Fan Wiki collects, uses, and protects visitor information.' },
        { heading: 'Data Collected', text: 'This site does not collect any personal data directly. We use technical cookies for site functionality (language preference, display mode).' },
        { heading: 'Cookies', text: 'The site uses functional cookies to store your preferences (language, retro mode). No advertising cookies are used.' },
        { heading: 'External Links', text: 'This site contains links to external sites (Rockstar Games, online stores). We are not responsible for the content or privacy practices of these sites.' },
        { heading: 'Contact', text: 'For any questions about this policy, please contact us at contact@gtaviwiki.com.' },
      ],
    },
    es: {
      title: 'Politica de Privacidad',
      sections: [
        { heading: 'Introduccion', text: 'Esta politica describe como el Wiki Fan GTA VI recopila y protege la informacion de los visitantes.' },
        { heading: 'Datos recopilados', text: 'Este sitio no recopila datos personales directamente. Usamos cookies tecnicas para el funcionamiento del sitio.' },
        { heading: 'Cookies', text: 'El sitio usa cookies funcionales para almacenar preferencias (idioma, modo retro). No se usan cookies publicitarias.' },
        { heading: 'Enlaces externos', text: 'Este sitio contiene enlaces a sitios externos. No somos responsables del contenido de estos sitios.' },
        { heading: 'Contacto', text: 'Para preguntas sobre esta politica, contactenos en contact@gtaviwiki.com.' },
      ],
    },
  };

  const c = content[lang] || content.en;

  return (
    <>
      <SEOHead
        title={seo.privacy.title[lang] || seo.privacy.title.en}
        description={seo.privacy.desc[lang] || seo.privacy.desc.en}
        path="/privacy"
        noindex
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.privacy[lang], path: '/privacy' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-3xl mx-auto pb-20">
          <RevealOnScroll>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 20px rgba(255, 20, 147, 0.3)' }}>
              {c.title}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="space-y-8">
            {c.sections.map((s, i) => (
              <RevealOnScroll key={i} stagger={i * 80}>
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
                  <h2 className="text-sm font-bold tracking-wider mb-3" style={{ color: '#00FFFF' }}>{s.heading}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
