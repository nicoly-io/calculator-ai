import React from 'react';
import { useCalculator } from '../../hooks/useCalculator';
import { CalcButton } from './components/CalcButton';
import { Display } from './components/Display';

const ScientificCalc: React.FC = () => {
  const { display, formula, handleInput, calculate, clear } = useCalculator();

  const buttons = [
    { label: 'C', action: clear, color: 'bg-red-500/20 text-red-500' },
    { label: '(', action: () => handleInput('('), color: 'bg-white/5' },
    { label: ')', action: () => handleInput(')'), color: 'bg-white/5' },
    { label: '÷', action: () => handleInput('/'), color: 'bg-blue-500/20 text-blue-500' },
    { label: '7', action: () => handleInput('7') },
    { label: '8', action: () => handleInput('8') },
    { label: '9', action: () => handleInput('9') },
    { label: '×', action: () => handleInput('*'), color: 'bg-blue-500/20 text-blue-500' },
    { label: '4', action: () => handleInput('4') },
    { label: '5', action: () => handleInput('5') },
    { label: '6', action: () => handleInput('6') },
    { label: '-', action: () => handleInput('-'), color: 'bg-blue-500/20 text-blue-500' },
    { label: '1', action: () => handleInput('1') },
    { label: '2', action: () => handleInput('2') },
    { label: '3', action: () => handleInput('3') },
    { label: '+', action: () => handleInput('+'), color: 'bg-blue-500/20 text-blue-500' },
    { label: '0', action: () => handleInput('0'), span: 2 },
    { label: '.', action: () => handleInput('.') },
    { label: '=', action: calculate, color: 'bg-blue-600 text-white' },
  ];

  return (
    <div className="flex flex-col h-full p-4 max-w-lg mx-auto">
      <Display value={display} formula={formula} />
      <div className="grid grid-cols-4 gap-2 mt-4 flex-1">
        {buttons.map((btn, i) => (
          <CalcButton 
            key={i} 
            label={btn.label} 
            onClick={btn.action} 
            color={btn.color} 
            span={btn.span} 
          />
        ))}
      </div>
    </div>
  );
};

export default ScientificCalc;
