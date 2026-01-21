import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameStore } from '../../store/gameStore';
import { QUIZ_DATABASE } from '../../data/quizData';
import confetti from 'canvas-confetti';

export default function QuizEngine() {
  const { id } = useParams();
  const nav = useNavigate();
  const { addPoints } = useGameStore();
  const [idx, setIdx] = useState(0);
  const questions = QUIZ_DATABASE[id as keyof typeof QUIZ_DATABASE]?.easy || [];
  const q = questions[idx];

  const answer = (i: number) => {
    const ok = i === q.correct;
    addPoints(ok);
    if(ok) confetti({ particleCount: 150, spread: 60 });
    if(idx < questions.length - 1) setIdx(idx + 1);
    else { alert("Félicitations ! Vous avez terminé le niveau."); nav('/games'); }
  };

  return (
    <div className="p-6 flex flex-col h-screen">
      <div className="w-full bg-white/5 h-2 rounded-full mb-12"><div className="bg-blue-600 h-full rounded-full transition-all" style={{width: `${((idx+1)/questions.length)*100}%`}}></div></div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-12 text-white leading-tight tracking-tight">{q.text}</h2>
        <div className="grid gap-4">
            {q.options.map((o, i) => (
                <button key={i} onClick={() => answer(i)} className="p-6 bg-white/5 border-2 border-white/5 rounded-[1.5rem] text-left font-black text-xl hover:border-blue-500 hover:bg-blue-600/10 transition-all">
                {o}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
}