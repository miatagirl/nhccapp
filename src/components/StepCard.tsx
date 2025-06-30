import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Star, Globe } from 'lucide-react';
import { ApplicationStep } from '../types';

interface StepCardProps {
  step: ApplicationStep;
  onToggle: (stepId: string) => void;
  index: number;
}

export const StepCard: React.FC<StepCardProps> = ({ step, onToggle, index }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { size: 24, className: "text-white" };
    switch (iconName) {
      case 'application': return <Circle {...iconProps} />;
      case 'fafsa': return <Star {...iconProps} />;
      case 'housing': return <Circle {...iconProps} />;
      case 'i20': return <Globe {...iconProps} />;
      default: return <Circle {...iconProps} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
        step.completed 
          ? 'border-green-400 bg-gradient-to-br from-green-50 to-green-100' 
          : 'border-gray-200 hover:border-nhcc-navy'
      }`}
    >
      {step.optional && (
        <div className="absolute -top-2 -right-2 bg-nhcc-maroon text-white text-xs px-2 py-1 rounded-full font-semibold">
          Optional
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-full ${
            step.completed ? 'bg-green-500' : 'bg-nhcc-navy'
          }`}>
            {step.completed ? <CheckCircle size={24} className="text-white" /> : getIcon(step.icon)}
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-nhcc-maroon text-white px-3 py-1 rounded-full text-sm font-semibold">
              <Star size={16} className="mr-1" />
              {step.points} pts
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-nhcc-navy mb-2">{step.title}</h3>
        <p className="text-gray-600 mb-4">{step.description}</p>

        {step.requirements && (
          <div className="mb-4">
            <h4 className="font-semibold text-nhcc-navy mb-2">Requirements:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {step.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-nhcc-maroon mr-2">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onToggle(step.id)}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
            step.completed
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-nhcc-navy text-white hover:bg-nhcc-dark-navy'
          }`}
        >
          {step.completed ? 'Completed! ✓' : 'Mark as Complete'}
        </motion.button>
      </div>
    </motion.div>
  );
};