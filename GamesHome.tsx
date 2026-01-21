import { useNavigate } from 'react-router-dom';
import { SUBJECTS_CONFIG } from '../../data/quizData';
import { useGameStore } from '../../store/gameStore';
import { Lock, Smartphone, CreditCard, Star, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function GamesHome() {
  const nav = useNavigate();
  const { isPaid, unlockAll, score } = useGameStore();

  const handlePay = (code: string) => {
    window.location.href = `tel:${code.replace(/#/g, '%23')}`;
    if(window.confirm("Paiement effectué ?")) unlockAll();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">Études</h1>
        <div className="bg-blue-600 px-4 py-2 rounded-2xl font-black flex items-center gap-2 shadow-lg shadow-blue-600/30">
          <Star size={18} fill="white"/> {score}
        </div>
      </div>

      <div className="grid gap-4 mb-12">
        {Object.values(SUBJECTS_CONFIG).map((s: any) => {
          const Icon = LucideIcons[s.icon as keyof typeof LucideIcons] || LucideIcons.Book;
          return (
            <button key={s.id} onClick={() => isPaid ? nav(`/games/level/${s.id}`) : null}
              className={`p-6 rounded-[2rem] bg-gradient-to-r ${s.gradient} flex justify-between items-center shadow-2xl transition-all ${!isPaid && 'opacity-40 grayscale'}`}>
              <div className="flex items-center gap-5 text-white">
                <Icon size={32} strokeWidth={2.5} />
                <span className="text-xl font-black uppercase tracking-tight">{s.name}</span>
              </div>
              {!isPaid && <Lock size={20} className="text-white/40"/>}
            </button>
          );
        })}
      </div>

      {!isPaid && (
        <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-center shadow-inner">
          <h2 className="font-black text-2xl mb-2 text-blue-500 italic uppercase">Débloquer (200 FCFA)</h2>
          <p className="text-gray-500 text-sm mb-8 font-medium italic">Accès illimité aux 300+ questions</p>
          <div className="grid grid-cols-1 gap-3">
            <button onClick={() => handlePay('#144#2*1*1*783113787*200#')} className="bg-[#FF7900] p-5 rounded-2xl flex items-center justify-between font-black text-white shadow-lg">
               <span>ORANGE MONEY</span> <Smartphone size={20}/>
            </button>
            <button onClick={() => handlePay('#2171#1*783113787*200#')} className="bg-[#1da1f2] p-5 rounded-2xl flex items-center justify-between font-black text-white shadow-lg">
               <span>WAVE SÉNÉGAL</span> <Smartphone size={20}/>
            </button>
            <button onClick={() => { window.open('https://paypal.me/votre-compte'); unlockAll(); }} className="bg-[#003087] p-5 rounded-2xl flex items-center justify-between font-black text-white shadow-lg">
               <span>PAYPAL</span> <CreditCard size={20}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}