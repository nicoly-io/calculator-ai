import React from 'react';

export const LevelSelection = ({ subject, onSelect }: any) => {
  const levels = [
    { n: 'Débutant', p: '10 pts', d: 'Bases fondamentales', c: 'border-green-500' },
    { n: 'Intermédiaire', p: '50 pts', d: 'Complexité moyenne', c: 'border-yellow-500' },
    { n: 'Expert', p: '100 pts', d: 'Défis avancés', c: 'border-red-500' }
  ];
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-white font-bold text-center">Niveau : {subject}</h2>
      {levels.map(l => (
        <div key={l.n} onClick={() => onSelect(l.n)} className={`p-5 rounded-2xl border-l-8 bg-white/5 cursor-pointer hover:bg-white/10 transition-all ${l.c}`}>
          <div className="flex justify-between items-center"><h3 className="font-bold">{l.n}</h3><span className="text-xs font-bold text-blue-400">{l.p}</span></div>
          <p className="text-sm text-gray-400">{l.d}</p>
        </div>
      ))}
    </div>
  );
};
