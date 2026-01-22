import React, { useState } from 'react';
import { useHistory } from '../../hooks/useHistory';
import { generateSteps } from '../../utils/mathSteps';

const ScientificCalc: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const { save } = useHistory();

  const handleCalculate = () => {
    try {
      const result = eval(display).toString(); // Note: utiliser une librairie mathématique en prod
      const steps = generateSteps(display);
      save(display, result, steps);
      setDisplay(result);
    } catch {
      setDisplay('Erreur');
    }
  };

  return (
    <div className="h-full flex flex-col p-4 space-y-4">
      <div className="bg-[#1a1a1a] p-8 rounded-3xl text-right text-5xl font-light overflow-hidden border border-white/5">
        {display}
      </div>
      
      <div className="grid grid-cols-4 gap-2 flex-1">
        {['sin', 'cos', 'tan', 'C', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => btn === '=' ? handleCalculate() : btn === 'C' ? setDisplay('0') : setDisplay(display === '0' ? btn : display + btn)}
            className={`rounded-2xl text-xl font-medium transition-all active:scale-95 ${
              btn === '=' ? 'bg-blue-600 text-white' : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScientificCalc;
