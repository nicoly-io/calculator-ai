import React from 'react';
import { SubjectCard } from './components/SubjectCard';

export const SubjectSelection = ({ onSelect }: any) => {
  const subjects = [
    { t: 'Mathématiques', i: '📐', c: 'bg-blue-600' },
    { t: 'Physique', i: '🧪', c: 'bg-purple-600' },
    { t: 'Français', i: '📚', c: 'bg-red-600' },
    { t: 'Histoire-Géo', i: '🌍', c: 'bg-green-600' }
  ];
  return (
    <div className="p-4 grid grid-cols-2 gap-4 animate-in slide-in-from-bottom duration-500">
      {subjects.map(s => <SubjectCard key={s.t} title={s.t} icon={s.i} color={s.c} onClick={() => onSelect(s.t)} />)}
    </div>
  );
};
