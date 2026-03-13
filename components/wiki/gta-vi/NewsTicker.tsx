'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';

interface NewsTickerProps {
  locale: string;
}

const NewsTicker = ({ locale }: NewsTickerProps) => {
  const [visible, setVisible] = useState(true);
  const { t } = useGtaI18n(locale);
  
  if (!visible) return null;

  const tickerText = t('ticker.text');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-bg-base/95 backdrop-blur-sm border-t border-neon-cyan/10">
      <div className="flex items-center h-7">
        <div className="overflow-hidden flex-1">
          <div className="ticker-animate whitespace-nowrap font-rajdhani font-medium text-[0.65rem] text-neon-cyan tracking-wider">
            {tickerText}{tickerText}
          </div>
        </div>
        <button onClick={() => setVisible(false)} className="px-2 text-text-muted-vice hover:text-text-secondary">
          <X size={12} />
        </button>
      </div>
    </div>
  );
};

export default NewsTicker;
