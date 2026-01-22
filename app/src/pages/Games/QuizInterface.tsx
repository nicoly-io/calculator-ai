import React, { useState } from 'react';
import { Trophy, Star, AlertCircle } from 'lucide-react';

export const QuizInterface = ({ subject }: { subject: string }) => {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState(10);

  return (
    <div className="p-4 space-y-6">
      {/* Barre de Progression */}
      <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
        <div className="bg-green-500 h-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="flex justify-between items-center text-white font-bold">
        <span>Score: {score}</span>
        <span className="text-yellow-400 flex items-center gap-1">
          <Star size={18} fill="currentColor"/> Bonus x{streak}
        </span>
      </div>

      {/* Question Card */}
      <div className="bg-[#252525] p-8 rounded-3xl border-b-4 border-black/30 shadow-xl">
        <p className="text-xl text-center mb-8">Quelle est la dérivée de f(x) = x² ?</p>
        <div className="grid gap-3">
          {['2x', 'x', '2', '0'].map((opt) => (
            <button key={opt} className="bg-white/5 hover:bg-blue-600 py-4 rounded-xl transition-all font-semibold">
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Badge alert */}
      {streak >= 3 && (
        <div className="bg-yellow-500/20 text-yellow-500 p-3 rounded-lg flex items-center justify-center gap-2 animate-bounce">
          <Trophy size={18} /> Série de 3 ! Badge "Expert" débloqué !
        </div>
      )}
    </div>
  );
};
