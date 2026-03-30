import { useEffect, useState, useRef } from 'react';
import { useI18n } from '@/fable-wiki/context/I18nContext';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const EasterEggs = () => {
  const { lang } = useI18n();
  const [konamiIdx, setKonamiIdx] = useState(0);
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiIdx] || e.key.toLowerCase() === KONAMI_CODE[konamiIdx]) {
        const nextIdx = konamiIdx + 1;
        if (nextIdx === KONAMI_CODE.length) { setShowSecretModal(true); setKonamiIdx(0); }
        else setKonamiIdx(nextIdx);
      } else { setKonamiIdx(0); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIdx]);

  useEffect(() => {
    const resetIdleTimer = () => {
      if (isIdle) { setIsIdle(false); document.body.classList.remove('idle-mode-active'); }
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => { setIsIdle(true); document.body.classList.add('idle-mode-active'); }, 60000);
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="max-w-md w-full bg-[hsl(150,30%,8%)] border-2 border-emerald-500 rounded-lg p-8 shadow-[0_0_50px_rgba(34,197,94,0.3)] text-center relative overflow-hidden">
            <button onClick={() => setShowSecretModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-emerald-400 text-xl">X</button>
            <h2 className="font-display text-3xl text-emerald-400 mb-4 animate-pulse">ANCIENT LORE UNLOCKED</h2>
            <div className="w-16 h-px bg-emerald-500 mx-auto mb-6"></div>
            <p className="font-body italic text-gray-200 text-lg leading-relaxed">
              {lang === 'fr'
                ? '"Au-dela des pierres de Briar Hill, une verite ancienne attend. L\'Ancien Royaume n\'a jamais vraiment disparu — il sommeille dans chaque heros, attendant d\'etre reveille."'
                : '"Beyond the stones of Briar Hill, an ancient truth awaits. The Old Kingdom never truly vanished — it slumbers within every hero, waiting to be awakened."'}
            </p>
            <div className="mt-8 font-body text-[0.6rem] tracking-[0.2em] text-yellow-400 animate-pulse">
              SEAL OF THE OLD KINGDOM FOUND
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EasterEggs;
