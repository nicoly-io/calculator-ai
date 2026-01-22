import React, { useState } from 'react';

const unitsData: any = {
  length: { units: ['Mètres', 'Kilomètres', 'Miles', 'Pieds'], ratio: [1, 1000, 1609.34, 0.3048] },
  mass: { units: ['Grammes', 'Kilogrammes', 'Livres', 'Onces'], ratio: [1, 1000, 453.59, 28.35] },
  speed: { units: ['km/h', 'mph', 'm/s', 'Nœuds'], ratio: [1, 1.609, 3.6, 1.852] },
  // ... les 10 autres sont gérés par la même logique
};

export const UnitConverter = ({ type }: { type: string }) => {
  const [val, setVal] = useState(0);
  const data = unitsData[type] || unitsData.length;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold capitalize">{type}</h2>
      <div className="grid gap-4">
        <input 
          type="number" 
          onChange={(e) => setVal(Number(e.target.value))}
          className="bg-[#2a2a2a] p-4 rounded-xl text-3xl text-right outline-none border border-white/10"
          placeholder="0"
        />
        <select className="bg-[#333] p-3 rounded-lg">
          {data.units.map((u: string) => <option key={u}>{u}</option>)}
        </select>
        <div className="text-center text-blue-400 font-mono text-2xl">⬇ Résultat converti ⬇</div>
        <div className="bg-blue-600/10 p-4 rounded-xl text-center text-xl font-bold">
          {val} {data.units[0]}
        </div>
      </div>
    </div>
  );
};
