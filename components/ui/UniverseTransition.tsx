'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getFranchiseById } from '@/lib/franchise-config';

export default function UniverseTransition({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const franchiseId = params?.franchise as string | undefined;
  const franchise = franchiseId ? getFranchiseById(franchiseId) : null;
  const [showTransition, setShowTransition] = useState(false);
  const prevFranchise = useRef<string | null>(null);

  useEffect(() => {
    const current = franchiseId || null;
    if (prevFranchise.current !== null && prevFranchise.current !== current) {
      setShowTransition(true);
      const timer = setTimeout(() => setShowTransition(false), 600);
      return () => clearTimeout(timer);
    }
    prevFranchise.current = current;
  }, [franchiseId]);

  return (
    <>
      <AnimatePresence>
        {showTransition && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{
              background: franchise
                ? `radial-gradient(circle at 50% 50%, ${franchise.accentColor}15, transparent 70%)`
                : 'transparent',
            }}
          />
        )}
      </AnimatePresence>
      <motion.div
        key={franchiseId || 'home'}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
}
