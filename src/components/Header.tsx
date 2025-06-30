import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import { StudentProfile } from '../types';

interface HeaderProps {
  profile: StudentProfile;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <div className="bg-gradient-to-r from-nhcc-navy to-nhcc-maroon text-white py-8 px-6 rounded-xl mb-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <img 
            src="/NHCC Logo White.png" 
            alt="New Hope Christian College" 
            className="h-16 w-auto"
          />
          <div>
            <h1 className="text-3xl font-bold">Application Journey</h1>
            <p className="text-blue-100">Track your progress to New Hope!</p>
          </div>
        </div>
        
        <motion.div 
          className="flex items-center space-x-4"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center bg-white/20 rounded-full p-3 mb-2">
              <Trophy className="text-yellow-300" size={24} />
            </div>
            <p className="text-sm font-semibold">Total Points</p>
            <p className="text-2xl font-bold text-yellow-300">{profile.totalPoints}</p>
          </div>
        </motion.div>
      </div>

      <div className="bg-white/10 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Overall Progress</span>
          <span className="text-sm">
            {profile.completedSteps} of {profile.totalSteps} steps completed
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(profile.completedSteps / profile.totalSteps) * 100}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};