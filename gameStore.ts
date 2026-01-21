import { create } from 'zustand';

export const useGameStore = create((set) => ({
  isPaid: false,
  score: 0,
  streak: 0,
  unlockAll: () => set({ isPaid: true }),
  addPoints: (win: boolean) => set((s: any) => ({
    score: win ? s.score + 100 : Math.max(0, s.score - 20),
    streak: win ? s.streak + 1 : 0
  }))
}));