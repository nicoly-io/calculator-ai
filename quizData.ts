export const SUBJECTS_CONFIG = {
  math: { id: 'math', name: 'Mathématiques', icon: 'Calculator', gradient: 'from-blue-600 to-cyan-500' },
  physique: { id: 'physique', name: 'Physique-Chimie', icon: 'Atom', gradient: 'from-purple-600 to-indigo-500' },
  svt: { id: 'svt', name: 'SVT', icon: 'Leaf', gradient: 'from-green-600 to-emerald-500' },
  francais: { id: 'francais', name: 'Français', icon: 'BookOpen', gradient: 'from-yellow-600 to-orange-500' },
  anglais: { id: 'anglais', name: 'Anglais', icon: 'Languages', gradient: 'from-red-600 to-pink-500' },
  histgeo: { id: 'histgeo', name: 'Histoire-Géo', icon: 'Globe', gradient: 'from-amber-700 to-yellow-600' }
};

const generate = (name: string) => Array.from({ length: 50 }, (_, i) => ({
  id: i, text: `Question ${name} n°${i+1} : Énoncé pédagogique pour le niveau secondaire ?`, 
  options: ["Option A", "Option Correcte", "Option C", "Option D"], correct: 1
}));

export const QUIZ_DATABASE = {
  math: { easy: generate('Mathématiques') },
  physique: { easy: generate('Physique') },
  svt: { easy: generate('SVT') },
  francais: { easy: generate('Français') },
  anglais: { easy: generate('Anglais') },
  histgeo: { easy: generate('Histoire-Géo') }
};