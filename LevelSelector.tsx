import { useNavigate, useParams } from 'react-router-dom';
import { SUBJECTS_CONFIG } from '../../data/quizData';

export default function LevelSelector() {
  const { subjectId } = useParams();
  const nav = useNavigate();
  const sub = SUBJECTS_CONFIG[subjectId as keyof typeof SUBJECTS_CONFIG];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-black mb-10 text-center uppercase tracking-tighter italic">{sub?.name}</h2>
      <div className="grid gap-6">
        <button onClick={() => nav(`/games/play/${subjectId}`)} className="bg-green-600 p-8 rounded-[2rem] text-2xl font-black shadow-xl">FACILE</button>
        <button className="bg-yellow-600/30 text-yellow-500 border-2 border-yellow-600 p-8 rounded-[2rem] text-2xl font-black opacity-50">MOYEN (Prochainement)</button>
        <button className="bg-red-600/30 text-red-500 border-2 border-red-600 p-8 rounded-[2rem] text-2xl font-black opacity-50">DIFFICILE (Prochainement)</button>
      </div>
    </div>
  );
}