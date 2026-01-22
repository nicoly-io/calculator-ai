import React from 'react';
import { AppSidebar } from '../Navigation/AppSidebar';
import { useMode } from '../../context/ModeContext';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen, setSidebarOpen, activeMode, setActiveMode } = useMode();
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <AppSidebar activeMode={activeMode} setMode={setActiveMode} isOpen={isSidebarOpen} toggle={() => setSidebarOpen(!isSidebarOpen)} />
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>{children}</main>
    </div>
  );
};
