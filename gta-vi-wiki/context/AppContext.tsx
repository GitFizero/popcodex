import React, { createContext, useContext, useState, useCallback } from 'react';

interface AppState {
  selectedCharacterId: string;
  setSelectedCharacterId: (id: string) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  retroMode: boolean;
  toggleRetroMode: () => void;
}

const AppContext = createContext<AppState | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState('lucia');
  const [searchOpen, setSearchOpen] = useState(false);
  const [retroMode, setRetroMode] = useState(false);

  const toggleRetroMode = useCallback(() => {
    setRetroMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('retro-mode');
      } else {
        document.documentElement.classList.remove('retro-mode');
      }
      return next;
    });
  }, []);

  return (
    <AppContext.Provider value={{
      selectedCharacterId, setSelectedCharacterId,
      searchOpen, setSearchOpen,
      retroMode, toggleRetroMode,
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
