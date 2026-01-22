import { useState, useEffect } from 'react';

export const useHistory = () => {
  const [history, setHistory] = useState<any[]>(() => JSON.parse(localStorage.getItem('calc_history') || '[]'));
  const save = (calc: string, res: string, steps: string[]) => {
    const newHist = [{ calc, res, steps, date: new Date() }, ...history].slice(0, 50);
    setHistory(newHist);
    localStorage.setItem('calc_history', JSON.stringify(newHist));
  };
  return { history, save };
};
