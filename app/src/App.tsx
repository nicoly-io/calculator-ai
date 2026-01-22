import React from 'react';
import { useMode } from './context/ModeContext';
import { AppSidebar } from './components/Navigation/AppSidebar';
import ScientificCalc from './pages/Calculator/ScientificCalc';
import { GraphingScreen } from './pages/Calculator/GraphingScreen';
import { ProgrammerScreen } from './pages/Calculator/ProgrammerScreen';
import { DateCalculator } from './pages/Calculator/DateCalculator';
import { UnitConverter } from './pages/Converters/UnitConverter';
import { CurrencyConverter } from './pages/Converters/CurrencyConverter';
import GamesHome from './pages/Games/GamesHome';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const { activeMode, setActiveMode, isSidebarOpen, setSidebarOpen } = useMode();

  // Fonction de routage interne pour changer de mode
  const renderContent = () => {
    switch (activeMode) {
      case 'sci': return <ScientificCalc />;
      case 'graph': return <GraphingScreen />;
      case 'prog': return <ProgrammerScreen />;
      case 'date': return <DateCalculator />;
      case 'currency': return <CurrencyConverter />;
      case 'games': return <GamesHome />;
      default: return <UnitConverter type={activeMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex overflow-hidden">
      {/* Barre latérale (Sidebar) */}
      <AppSidebar 
        activeMode={activeMode} 
        setMode={setActiveMode} 
        isOpen={isSidebarOpen} 
        toggle={() => setSidebarOpen(!isSidebarOpen)} 
      />
      
      {/* Contenu Principal */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="p-4 flex items-center gap-4 bg-[#1a1a1a] border-b border-white/5 shadow-md">
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="p-2 hover:bg-white/10 rounded-xl transition-all active:scale-90"
          >
            <Menu size={24} />
          </button>
          <h1 className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Gamert Calc AI
          </h1>
        </header>
        
        <main className="flex-1 overflow-y-auto page-transition bg-[#121212]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
