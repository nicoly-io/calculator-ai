
import React from 'react';

interface Props {
  title: string;
  icon: string;
  color: string;
  onClick: () => void;
}

export const SubjectCard: React.FC<Props> = ({ title, icon, color, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`${color} p-6 rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-3 animate-in fade-in zoom-in duration-500`}
    >
      <span className="text-4xl">{icon}</span>
      <h3 className="font-bold text-white text-lg">{title}</h3>
      <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] uppercase font-bold">Jouer</div>
    </div>
  );
};
