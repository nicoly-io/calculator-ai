
import React from 'react';
import { Lock, Smartphone, CreditCard } from 'lucide-react';

export const PaymentGate = ({ onPaid }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-yellow-500/20 w-full max-w-md text-center">
        <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="text-yellow-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Espace Jeux Premium</h2>
        <p className="text-gray-400 mb-6">Accédez à tous les quiz pour seulement <span className="text-white font-bold">200 FCFA</span></p>

        <div className="space-y-3">
          {/* Orange Money */}
          <button onClick={() => window.location.href="tel:%23144%232*1*1*783113787*200%23"} 
            className="w-full bg-[#FF6600] py-4 rounded-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all">
            <Smartphone size={20}/> Orange Money
          </button>

          {/* Wave */}
          <button onClick={() => window.location.href="tel:%232171%231*783113787*200%23"} 
            className="w-full bg-[#1da1f2] py-4 rounded-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all">
            <Smartphone size={20}/> Wave
          </button>

          {/* PayPal */}
          <button onClick={() => window.open('https://paypal.me/TON_ID/0.35', '_blank')} 
            className="w-full bg-[#003087] py-4 rounded-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all">
            <CreditCard size={20}/> PayPal
          </button>
        </div>
        
        <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest cursor-pointer hover:text-white" onClick={onPaid}>
          [ Cliquer ici après le paiement ]
        </p>
      </div>
    </div>
  );
};
