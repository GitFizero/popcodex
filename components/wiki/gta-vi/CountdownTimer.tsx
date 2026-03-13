'use client';

import { useEffect, useState, useRef } from 'react';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';

const target = new Date('2026-11-19T00:00:00').getTime();

interface CountdownTimerProps {
  locale: string;
}

const CountdownTimer = ({ locale }: CountdownTimerProps) => {
  const [now, setNow] = useState(Date.now());
  const { t } = useGtaI18n(locale);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const isVisible = useRef(true);

  useEffect(() => {
    const startTicking = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => setNow(Date.now()), 1000);
    };
    const stopTicking = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stopTicking();
        isVisible.current = false;
      } else {
        setNow(Date.now());
        startTicking();
        isVisible.current = true;
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    startTicking();

    return () => {
      stopTicking();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  const blocks = [
    { value: days, label: t('countdown.days') },
    { value: hours, label: t('countdown.hours') },
    { value: minutes, label: t('countdown.minutes') },
    { value: seconds, label: t('countdown.seconds') },
  ];

  return (
    <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-5">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-2 xs:gap-3 sm:gap-5">
          <div className="flex flex-col items-center min-w-[2.5rem] sm:min-w-[3.5rem]">
            <span className="font-bebas text-2xl xs:text-3xl sm:text-5xl neon-pink-text leading-none">
              {String(b.value).padStart(2, '0')}
            </span>
            <span className="font-rajdhani text-[0.45rem] xs:text-[0.55rem] sm:text-[0.65rem] text-text-secondary tracking-widest mt-1">
              {b.label}
            </span>
          </div>
          {i < 3 && (
            <span className="font-bebas text-lg xs:text-2xl sm:text-4xl neon-cyan-text" style={{ animation: 'pulse-glow 1s ease-in-out infinite' }}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
