// @ts-nocheck
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <main id="main-content" className="relative z-10 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-display text-6xl text-gold-bright mb-4">404</h1>
        <div className="flex justify-center gap-1 mb-6">
          <div className="w-8 h-1 bg-yellow-500 rounded" />
          <div className="w-8 h-1 bg-yellow-500 rounded" />
          <div className="w-8 h-1 bg-yellow-500 rounded" />
        </div>
        <p className="font-heading text-xl text-text-secondary mb-2">Page not found</p>
        <p className="font-body text-sm text-text-muted-custom mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
