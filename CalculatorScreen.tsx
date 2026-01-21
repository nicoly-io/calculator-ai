import { useState } from 'react';
import { Delete, Equal, RotateCcw } from 'lucide-react';

export default function CalculatorScreen() {
  const [exp, setExp] = useState('');
  const [res, setRes] = useState('0');
  const add = (v: string) => setExp(p => p + v);
  const calc = () => { try { setRes(eval(exp.replace('×','*').replace('÷','/')).toString()); } catch { setRes('Erreur'); } };
  return (
    <div className="p-6 h-[calc(100vh-64px)] flex flex-col">
      <div className="flex-1 flex flex-col justify-end text-right mb-10">
        <div className="text-3xl text-gray-500 font-mono overflow-hidden">{exp || '0'}</div>
        <div className="text-7xl font-black text-white">{res}</div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <button onClick={() => setExp('')} className="btn-calc bg-red-500/20 text-red-500"><RotateCcw/></button>
        <button onClick={() => add('/')} className="btn-calc bg-blue-600">÷</button>
        <button onClick={() => add('*')} className="btn-calc bg-blue-600">×</button>
        <button onClick={() => setExp(exp.slice(0,-1))} className="btn-calc bg-gray-700"><Delete/></button>
        {[7,8,9,4,5,6,1,2,3].map(n => <button key={n} onClick={() => add(n.toString())} className="btn-calc bg-white/5">{n}</button>)}
        <button onClick={() => add('0')} className="btn-calc bg-white/5 col-span-2">0</button>
        <button onClick={() => add('.')} className="btn-calc bg-white/5">.</button>
        <button onClick={calc} className="btn-calc bg-green-600"><Equal/></button>
      </div>
    </div>
  );
}