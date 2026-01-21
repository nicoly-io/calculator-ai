import { Link, useLocation } from 'react-router-dom';
import { Calculator, Gamepad2, History } from 'lucide-react';

export default function BottomNav() {
  const loc = useLocation();
  const items = [
    { p: '/', i: Calculator, l: 'Calcul' },
    { p: '/games', i: Gamepad2, l: 'Jeux' },
    { p: '/history', i: History, l: 'Historique' }
  ];
  return (
    <nav className="fixed bottom-0 w-full h-16 bg-black/80 backdrop-blur-lg border-t border-white/10 flex justify-around items-center z-50">
      {items.map(m => (
        <Link key={m.p} to={m.p} className={`flex flex-col items-center gap-1 transition-all ${loc.pathname === m.p ? 'text-blue-500 scale-110' : 'text-gray-500'}`}>
          <m.i size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">{m.l}</span>
        </Link>
      ))}
    </nav>
  );
}