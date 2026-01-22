import React from 'react';
import { ChevronRight } from 'lucide-react';

export const StepByStepDetail = ({ calculation, steps }: { calculation: string, steps: string[] }) => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-blue-500/30">
      <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
        <ChevronRight /> Analyse du calcul : {calculation}
      </h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 animate-in slide-in-from-left duration-500" style={{ delay: `${index * 100}ms` }}>
            <div className="bg-blue-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shrink-0">
              {index + 1}
            </div>
            <p className="text-gray-300 italic">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
