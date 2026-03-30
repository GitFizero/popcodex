import React, { createContext, useContext, useState, useCallback } from 'react';

interface AppState {
  selectedCharacterId: string;
  setSelectedCharacterId: (id: string) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  parchmentMode: boolean;
  toggleParchmentMode: () => void;
}

const AppContext = createContext<AppState | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState('kliff');
  const [searchOpen, setSearchOpen] = useState(false);
  const [parchmentMode, setParchmentMode] = useState(false);

  const toggleParchmentMode = useCallback(() => {
    setParchmentMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('parchment-mode');
      } else {
        document.documentElement.classList.remove('parchment-mode');
      }
      return next;
    });
  }, []);

  return (
    <AppContext.Provider value={{
      selectedCharacterId, setSelectedCharacterId,
      searchOpen, setSearchOpen,
      parchmentMode, toggleParchmentMode,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
