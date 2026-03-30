import React, { createContext, useContext, useState, useCallback } from 'react';

interface AppState {
  selectedCharacterId: string;
  setSelectedCharacterId: (id: string) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  noirMode: boolean;
  toggleNoirMode: () => void;
}

const AppContext = createContext<AppState | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState('logan');
  const [searchOpen, setSearchOpen] = useState(false);
  const [noirMode, setNoirMode] = useState(false);

  const toggleNoirMode = useCallback(() => {
    setNoirMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('noir-mode');
      } else {
        document.documentElement.classList.remove('noir-mode');
      }
      return next;
    });
  }, []);

  return (
    <AppContext.Provider value={{
      selectedCharacterId, setSelectedCharacterId,
      searchOpen, setSearchOpen,
      noirMode, toggleNoirMode,
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
