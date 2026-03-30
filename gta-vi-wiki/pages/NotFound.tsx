// @ts-nocheck
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';

const NotFound = () => {
  const location = useLocation();
  const { lang } = useI18n();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: '#0a000f' }}>
      <div className="text-center px-4">
        <h1 className="text-8xl font-black mb-4" style={{ color: '#FF1493', textShadow: '0 0 40px rgba(255, 20, 147, 0.5)' }}>404</h1>
        <p className="text-xl mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {lang === 'fr' ? 'Page non trouvee' : lang === 'es' ? 'Pagina no encontrada' : 'Page not found'}
        </p>
        <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {lang === 'fr' ? "Cette page n'existe pas dans l'etat de Leonida." : lang === 'es' ? 'Esta pagina no existe en el estado de Leonida.' : "This page doesn't exist in the state of Leonida."}
        </p>
        <Link to="/" className="inline-block px-8 py-3 text-sm font-bold tracking-wider rounded transition-all" style={{ background: 'linear-gradient(135deg, #FF1493, #cc1177)', color: 'white', boxShadow: '0 0 20px rgba(255, 20, 147, 0.4)' }}>
          {lang === 'fr' ? 'RETOUR A VICE CITY' : lang === 'es' ? 'VOLVER A VICE CITY' : 'BACK TO VICE CITY'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
