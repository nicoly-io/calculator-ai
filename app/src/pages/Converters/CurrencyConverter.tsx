import React, { useState } from 'react';
import { RefreshCcw } from 'lucide-react';

export const CurrencyConverter = () => {
  const [amt, setAmt] = useState(0);
  const rates = { XOF: 655.95, USD: 1.08, EUR: 1 }; // Exemple
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between"><h2 className="text-xl font-bold">Devises</h2><RefreshCcw size={18} className="text-blue-500"/></div>
      <input type="number" placeholder="Montant en EUR" onChange={e => setAmt(Number(e.target.value))} className="w-full bg-[#2a2a2a] p-4 rounded-xl text-2xl outline-none"/>
      <div className="space-y-2">
        <div className="bg-orange-500/10 p-4 rounded-xl flex justify-between"><span>Sénégal (XOF)</span><span className="font-bold">{(amt * rates.XOF).toFixed(2)} FCFA</span></div>
        <div className="bg-blue-500/10 p-4 rounded-xl flex justify-between"><span>USA (USD)</span><span className="font-bold">{(amt * rates.USD).toFixed(2)} $</span></div>
      </div>
    </div>
  );
};
