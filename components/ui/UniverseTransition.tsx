'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getFranchiseById } from '@/lib/franchise-config';

export default function UniverseTransition({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const franchiseId = params?.franchise as string | undefined;
  const franchise = franchiseId ? getFranchiseById(franchiseId) : null;
  const [showPortal, setShowPortal] = useState(false);
  const [portalColor, setPortalColor] = useState<string>('#000');
  const [portalSecondary, setPortalSecondary] = useState<string>('#000');
  const prevFranchise = useRef<string | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const current = franchiseId || null;

    // Apply franchise CSS class to body so Header/Footer also get themed variables
    if (franchise) {
      document.body.classList.remove('universe-gta', 'universe-crimson', 'universe-fable', 'universe-wolverine');
      document.body.classList.add(franchise.theme.cssClass);
    } else {
      document.body.classList.remove('universe-gta', 'universe-crimson', 'universe-fable', 'universe-wolverine');
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevFranchise.current = current;
      return;
    }

    if (prevFranchise.current !== current) {
      const targetFranchise = current ? getFranchiseById(current) : null;
      setPortalColor(targetFranchise?.accentColor || '#000');
      setPortalSecondary(targetFranchise?.theme.accentSecondary || targetFranchise?.accentColor || '#000');
      setShowPortal(true);
      const timer = setTimeout(() => setShowPortal(false), 900);
      prevFranchise.current = current;
      return () => clearTimeout(timer);
    }
  }, [franchiseId, franchise]);

  return (
    <>
      {/* Portal flash overlay */}
      <AnimatePresence>
        {showPortal && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] pointer-events-none"
            style={{ backdropFilter: 'blur(12px)' }}
          >
            {/* Radial color burst */}
            <motion.div
              initial={{ scale: 0, opacity: 0.9 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: '40vmax',
                height: '40vmax',
                background: `radial-gradient(circle, ${portalColor}40 0%, ${portalSecondary}20 40%, transparent 70%)`,
              }}
            />
            {/* Horizontal accent wipe */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute top-1/2 left-0 right-0 h-[3px] origin-left"
              style={{
                background: `linear-gradient(90deg, ${portalColor}, ${portalSecondary})`,
                boxShadow: `0 0 20px ${portalColor}80, 0 0 60px ${portalColor}40`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Universe wrapper — applies franchise CSS class for full visual override */}
      <div
        className={franchise?.theme.cssClass || ''}
        data-franchise={franchiseId || undefined}
      >
        {/* Franchise-specific overlay effects (scanlines, vignette, etc.) */}
        {franchise?.theme.overlayEffect && (
          <div className={franchise.theme.overlayEffect} />
        )}

        <motion.div
          key={franchiseId || 'home'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: showPortal ? 0.2 : 0,
          }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
