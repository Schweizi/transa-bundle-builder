
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, label: 'Rucksack' },
    { number: 2, label: 'Powerbank' },
    { number: 3, label: 'Trinkflasche' }
  ];

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex items-center justify-between mb-2">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                step.number <= currentStep 
                  ? 'bg-transa-turquoise text-white' 
                  : 'bg-white text-transa-text/50 border-2 border-transa-text/20'
              }`}
            >
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                  step.number < currentStep ? 'bg-transa-turquoise' : 'bg-transa-text/20'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-transa-text/70 mt-2">
        {steps.map((step) => (
          <span 
            key={step.number} 
            className={`${step.number === currentStep ? 'font-semibold text-transa-turquoise' : ''}`}
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
