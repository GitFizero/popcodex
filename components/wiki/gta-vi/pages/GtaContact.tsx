'use client';

import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import { Mail } from 'lucide-react';

const ContactPage = ({ locale }: { locale: string }) => {
  const { t, lang } = useGtaI18n(locale);

  return (
    <div className="min-h-screen pt-16 pb-10">
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-bebas text-3xl sm:text-4xl text-text-primary mb-2 text-center">{t('contact.title')}</h1>
          <p className="font-dm text-xs text-text-secondary text-center mb-8">{t('contact.subtitle')}</p>

          <div className="bg-bg-card rounded-xl p-6 border border-neon-cyan/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-neon-cyan" />
              </div>
              <div>
                <p className="font-rajdhani text-[0.6rem] text-neon-cyan tracking-widest">{t('contact.email')}</p>
                <a href="mailto:gaetan@batemark.com" className="font-dm text-sm text-text-primary hover:text-neon-cyan transition-colors">
                  gaetan@batemark.com
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="font-bebas text-xl text-text-primary mb-2">{t('contact.general')}</h2>
                <p className="font-dm text-xs text-text-secondary leading-relaxed">{t('contact.generalDesc')}</p>
              </div>

              <div>
                <h2 className="font-bebas text-xl text-text-primary mb-2">{t('contact.corrections')}</h2>
                <p className="font-dm text-xs text-text-secondary leading-relaxed">{t('contact.correctionsDesc')}</p>
              </div>

              <div>
                <h2 className="font-bebas text-xl text-text-primary mb-2">{t('contact.copyright')}</h2>
                <p className="font-dm text-xs text-text-secondary leading-relaxed">{t('contact.copyrightDesc')}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-bg-raised rounded-lg border border-neon-pink/10">
            <p className="font-rajdhani text-[0.55rem] text-neon-pink tracking-widest text-center">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
