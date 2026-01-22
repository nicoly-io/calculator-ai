import React, { useState } from 'react';

export const ProgrammerScreen = () => {
  const [val, setVal] = useState(0);
  return (
    <div className="p-4 space-y-4">
      <div className="bg-[#1a1a1a] p-6 rounded-2xl text-right">
        <div className="text-blue-500 text-sm font-mono">HEX: {val.toString(16).toUpperCase()}</div>
        <div className="text-white text-3xl font-mono my-2">{val}</div>
        <div className="text-green-500 text-sm font-mono">BIN: {val.toString(2)}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7,8,9,4,5,6,1,2,3,0].map(n => (
          <button key={n} onClick={() => setVal(v => parseInt(`${v}${n}`))} className="bg-white/5 p-4 rounded-xl hover:bg-white/10">{n}</button>
        ))}
        <button onClick={() => setVal(0)} className="bg-red-500/20 text-red-500 p-4 rounded-xl col-span-2">Effacer</button>
      </div>
    </div>
  );
};
