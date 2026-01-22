import React from 'react';
import { 
  Calculator, ruler, Thermometer, Box, Database, 
  Clock, Zap, Globe, Gauge, History, Gamepad2, Menu
} from 'lucide-react';

const modes = [
  { id: 'sci', name: 'Scientifique', icon: <Calculator size={20}/> },
  { id: 'graph', name: 'Graphique', icon: <Gauge size={20}/> },
  { id: 'prog', name: 'Programmeur', icon: <Database size={20}/> },
  { id: 'date', name: 'Calcul de date', icon: <History size={20}/> },
];

const converters = [
  { id: 'currency', name: 'Devise', icon: <Globe size={18}/> },
  { id: 'length', name: 'Longueur', icon: <ruler size={18}/> },
  { id: 'mass', name: 'Poids et masse', icon: <Box size={18}/> },
  { id: 'temp', name: 'Température', icon: <Thermometer size={18}/> },
  { id: 'time', name: 'Heure', icon: <Clock size={18}/> },
  { id: 'power', name: 'Puissance', icon: <Zap size={18}/> },
];

export const AppSidebar = ({ activeMode, setMode, isOpen, toggle }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1f1f1f] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out border-r border-white/10`}>
      <div className="p-4 flex items-center gap-4 border-b border-white/10">
        <Menu className="cursor-pointer" onClick={toggle} />
        <span className="font-bold text-lg">Gamert Calc AI</span>
      </div>
      
      <div className="overflow-y-auto h-full pb-20">
        <div className="p-4 text-xs font-semibold text-gray-500 uppercase">Calculatrice</div>
        {modes.map(m => (
          <div key={m.id} onClick={() => {setMode(m.id); toggle();}} className={`flex items-center gap-4 px-6 py-3 cursor-pointer hover:bg-white/5 ${activeMode === m.id ? 'bg-blue-600/20 border-l-4 border-blue-500' : ''}`}>
            {m.icon} <span>{m.name}</span>
          </div>
        ))}

        <div className="p-4 text-xs font-semibold text-gray-500 uppercase border-t border-white/5 mt-2">Convertisseur</div>
        {converters.map(c => (
          <div key={c.id} onClick={() => {setMode(c.id); toggle();}} className={`flex items-center gap-4 px-6 py-3 cursor-pointer hover:bg-white/5 ${activeMode === c.id ? 'bg-blue-600/20 border-l-4 border-blue-500' : ''}`}>
            {c.icon} <span className="text-sm">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
