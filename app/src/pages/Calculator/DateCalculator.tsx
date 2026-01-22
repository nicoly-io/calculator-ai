import React, { useState } from 'react';

export const DateCalculator = () => {
  const [d1, setD1] = useState('');
  const [d2, setD2] = useState('');
  const diff = d1 && d2 ? Math.abs(new Date(d2).getTime() - new Date(d1).getTime()) / (1000*3600*24) : 0;

  return (
    <div className="p-6 space-y-4">
      <h3 className="text-white font-bold">Différence entre les dates</h3>
      <input type="date" onChange={e => setD1(e.target.value)} className="w-full bg-[#2a2a2a] p-3 rounded-xl text-white outline-none border border-white/10"/>
      <input type="date" onChange={e => setD2(e.target.value)} className="w-full bg-[#2a2a2a] p-3 rounded-xl text-white outline-none border border-white/10"/>
      <div className="bg-blue-600/20 p-6 rounded-2xl text-center">
        <div className="text-gray-400 text-sm">Différence</div>
        <div className="text-2xl font-bold text-blue-400">{diff} Jours</div>
      </div>
    </div>
  );
};
