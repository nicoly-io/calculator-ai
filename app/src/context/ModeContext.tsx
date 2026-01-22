
import React, { createContext, useContext, useState } from 'react';

const ModeContext = createContext<any>(null);

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeMode, setActiveMode] = useState('sci'); // Mode par défaut
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ModeContext.Provider value={{ activeMode, setActiveMode, isSidebarOpen, setSidebarOpen }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
