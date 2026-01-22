import React, { useState } from 'react';
import { PaymentGate } from './PaymentGate';
import { SubjectSelection } from './SubjectSelection';
import { LevelSelection } from './LevelSelection';
import { QuizInterface } from './QuizInterface';

const GamesHome: React.FC = () => {
  const [hasPaid, setHasPaid] = useState(false);
  const [step, setStep] = useState('subjects'); // subjects, levels, quiz
  const [selectedSubject, setSelectedSubject] = useState('');

  if (!hasPaid) {
    return <PaymentGate onPaid={() => setHasPaid(true)} />;
  }

  return (
    <div className="h-full bg-[#121212] animate-slide-up">
      {step === 'subjects' && (
        <SubjectSelection onSelect={(s: string) => { setSelectedSubject(s); setStep('levels'); }} />
      )}
      {step === 'levels' && (
        <LevelSelection subject={selectedSubject} onSelect={() => setStep('quiz')} />
      )}
      {step === 'quiz' && (
        <QuizInterface subject={selectedSubject} />
      )}
    </div>
  );
};

export default GamesHome;
