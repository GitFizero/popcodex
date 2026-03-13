'use client';

import { useEffect, useState, useRef } from 'react';

// Konami Code sequence: up up down down left right left right B A
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const CrimsonEasterEggs = ({ lang }: { lang: string }) => {
  const [konamiIdx, setKonamiIdx] = useState(0);
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Konami Code handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiIdx] || e.key.toLowerCase() === KONAMI_CODE[konamiIdx]) {
        const nextIdx = konamiIdx + 1;
        if (nextIdx === KONAMI_CODE.length) {
          // Konami code completed
          setShowSecretModal(true);
          setKonamiIdx(0);

          // Add cheater badge to nav using custom event
          window.dispatchEvent(new CustomEvent('cheater-activated'));
        } else {
          setKonamiIdx(nextIdx);
        }
      } else {
        setKonamiIdx(0); // Reset on wrong key
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIdx]);

  // Idle Mode handler (60 seconds)
  useEffect(() => {
    const resetIdleTimer = () => {
      if (isIdle) {
        setIsIdle(false);
        document.body.classList.remove('idle-mode-active');
      }
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
        document.body.classList.add('idle-mode-active');
      }, 60000); // 60 seconds
    };

    resetIdleTimer();

    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('mousedown', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);
    window.addEventListener('scroll', resetIdleTimer);

    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('mousedown', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
      window.removeEventListener('scroll', resetIdleTimer);
      document.body.classList.remove('idle-mode-active');
    };
  }, [isIdle]);

  return (
    <>
      {showSecretModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-void/90 backdrop-blur-sm" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="max-w-md w-full bg-card-bg border-2 border-gold-mid rounded-lg p-8 shadow-[0_0_50px_rgba(201,168,76,0.3)] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
            <button onClick={() => setShowSecretModal(false)} className="absolute top-4 right-4 text-text-muted-custom hover:text-gold-bright focus-gold text-xl">&#x2715;</button>
            <h2 className="font-display text-3xl text-gold-bright mb-4 animate-pulse">LORE UNLOCKED</h2>
            <div className="w-16 h-px bg-gold-mid mx-auto mb-6"></div>
            <p className="font-lore italic text-text-primary text-lg leading-relaxed">
              {lang === 'fr'
                ? "\u00AB Au-del\u00E0 de l\u2019Abysse se trouve une v\u00E9rit\u00E9 que m\u00EAme les Ours Noirs n\u2019ont pas os\u00E9 contempler. Les royaumes parall\u00E8les saignent dans Pywel, et Kliff n\u2019est que l\u2019aiguille qui refermera la d\u00E9chirure. \u00BB"
                : '"Beyond the Abysse lies a truth even the Black Bears dared not behold. The parallel realms bleed into Pywel, and Kliff is but the needle that will close the tear."'}
            </p>
            <div className="mt-8 font-ui text-[0.6rem] tracking-[0.2em] text-crimson-bright animate-pulse">
              SEAL OF THE CREATOR FOUND
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CrimsonEasterEggs;
