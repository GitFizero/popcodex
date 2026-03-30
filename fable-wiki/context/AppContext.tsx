import React, { createContext, useContext, useState, useCallback } from 'react';

interface AppState {
  selectedCharacterId: string;
  setSelectedCharacterId: (id: string) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  storybookMode: boolean;
  toggleStorybookMode: () => void;
}

const AppContext = createContext<AppState | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState('hero');
  const [searchOpen, setSearchOpen] = useState(false);
  const [storybookMode, setStorybookMode] = useState(false);

  const toggleStorybookMode = useCallback(() => {
    setStorybookMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('storybook-mode');
      } else {
        document.documentElement.classList.remove('storybook-mode');
      }
      return next;
    });
  }, []);

  return (
    <AppContext.Provider value={{
      selectedCharacterId, setSelectedCharacterId,
      searchOpen, setSearchOpen,
      storybookMode, toggleStorybookMode,
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
