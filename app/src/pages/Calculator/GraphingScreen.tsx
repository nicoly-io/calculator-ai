import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: -5, y: 25 }, { x: -2, y: 4 }, { x: 0, y: 0 }, { x: 2, y: 4 }, { x: 5, y: 25 },
];

export const GraphingScreen = () => {
  return (
    <div className="h-[400px] w-full bg-white/5 p-4 rounded-3xl border border-white/10">
      <h3 className="mb-4 text-gray-400 uppercase text-xs font-bold tracking-widest">Aperçu de la fonction : f(x) = x²</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="x" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: 'none' }} />
          <Line type="monotone" dataKey="y" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
