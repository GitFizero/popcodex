import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      window.scrollTo(0, 0);
      setVisible(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }
  }, [location.pathname]);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 250ms ease-in-out' }}>
      {children}
    </div>
  );
};

export default PageTransition;
