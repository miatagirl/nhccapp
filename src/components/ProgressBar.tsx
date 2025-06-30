import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  total: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total, className = '' }) => {
  const percentage = (progress / total) * 100;

  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-nhcc-maroon to-nhcc-light-maroon rounded-full flex items-center justify-end pr-2"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {percentage > 20 && (
          <span className="text-white text-xs font-bold">
            {Math.round(percentage)}%
          </span>
        )}
      </motion.div>
    </div>
  );
};