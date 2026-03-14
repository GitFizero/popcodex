// @ts-nocheck
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { vehicles, TOTAL_VEHICLES } from '@/gta-vi-wiki/data/vehicles';

const Mounts = () => {
  const { t, lang } = useI18n();

  const vehicleCategories = {
    fr: [
      { name: 'Voitures', count: '80+', desc: 'Muscle cars, supercars, berlines, SUV et plus.' },
      { name: 'Motos', count: '25+', desc: 'Choppers, sportives, dirt bikes et scooters.' },
      { name: 'Bateaux', count: '20+', desc: 'Jet skis, speedboats, yachts et bateaux de peche.' },
      { name: 'Avions', count: '15+', desc: 'Avions legers, jets prives et helicopteres.' },
      { name: 'Speciaux', count: '10+', desc: 'Monster trucks, vehicules blindes et vehicules de police.' },
    ],
    en: [
      { name: 'Cars', count: '80+', desc: 'Muscle cars, supercars, sedans, SUVs and more.' },
      { name: 'Motorcycles', count: '25+', desc: 'Choppers, sport bikes, dirt bikes and scooters.' },
      { name: 'Boats', count: '20+', desc: 'Jet skis, speedboats, yachts and fishing boats.' },
      { name: 'Aircraft', count: '15+', desc: 'Light planes, private jets and helicopters.' },
      { name: 'Special', count: '10+', desc: 'Monster trucks, armored vehicles and police vehicles.' },
    ],
    es: [
      { name: 'Coches', count: '80+', desc: 'Muscle cars, supercoches, sedanes, SUV y mas.' },
      { name: 'Motos', count: '25+', desc: 'Choppers, deportivas, dirt bikes y scooters.' },
      { name: 'Barcos', count: '20+', desc: 'Jet skis, lanchas, yates y barcos de pesca.' },
      { name: 'Aviones', count: '15+', desc: 'Aviones ligeros, jets privados y helicopteros.' },
      { name: 'Especiales', count: '10+', desc: 'Monster trucks, vehiculos blindados y de policia.' },
    ],
  };

  const cats = vehicleCategories[lang] || vehicleCategories.en;

  return (
    <>
      <SEOHead
        title={seo.vehicles.title[lang] || seo.vehicles.title.en}
        description={seo.vehicles.desc[lang] || seo.vehicles.desc.en}
        path="/mounts"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.vehicles[lang], path: '/mounts' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto pb-20">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('nav.vehicles').toUpperCase()}
            </h1>
            <p className="text-center text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {lang === 'fr' ? `${TOTAL_VEHICLES}+ vehicules estimes` : lang === 'es' ? `${TOTAL_VEHICLES}+ vehiculos estimados` : `${TOTAL_VEHICLES}+ estimated vehicles`}
            </p>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {/* Vehicle categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cats.map((cat, i) => (
              <RevealOnScroll key={i} stagger={i * 80}>
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(0, 255, 255, 0.1)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold tracking-wider" style={{ color: '#00FFFF' }}>{cat.name}</h3>
                    <span className="text-lg font-black" style={{ color: '#FF1493' }}>{cat.count}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{cat.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Individual vehicles (if any) */}
          {vehicles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicles.map(v => (
                <div key={v.id} className="p-5 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
                  <h3 className="text-sm font-bold mb-2" style={{ color: 'white' }}>{tr(v.name, lang)}</h3>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(v.description, lang)}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {lang === 'fr' ? 'Les vehicules individuels seront documentes a mesure que des informations seront confirmees.' : lang === 'es' ? 'Los vehiculos individuales se documentaran cuando se confirme la informacion.' : 'Individual vehicles will be documented as information is confirmed.'}
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Mounts;
