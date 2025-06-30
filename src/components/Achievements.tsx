import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Target, Zap } from 'lucide-react';

interface AchievementsProps {
  totalPoints: number;
  completedSteps: number;
}

export const Achievements: React.FC<AchievementsProps> = ({ totalPoints, completedSteps }) => {
  const achievements = [
    {
      id: 'first-step',
      title: 'Getting Started',
      description: 'Complete your first application step',
      icon: <Star className="text-yellow-500" size={20} />,
      unlocked: completedSteps >= 1,
      points: 50
    },
    {
      id: 'halfway',
      title: 'Halfway Hero',
      description: 'Complete 50% of your application',
      icon: <Target className="text-blue-500" size={20} />,
      unlocked: completedSteps >= 2,
      points: 100
    },
    {
      id: 'point-collector',
      title: 'Point Collector',
      description: 'Earn 200+ points',
      icon: <Zap className="text-purple-500" size={20} />,
      unlocked: totalPoints >= 200,
      points: 75
    },
    {
      id: 'completion-champion',
      title: 'Completion Champion',
      description: 'Complete all required steps',
      icon: <Award className="text-green-500" size={20} />,
      unlocked: completedSteps >= 3,
      points: 200
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-nhcc-navy mb-4 flex items-center">
        <Award className="mr-2 text-nhcc-maroon" />
        Achievements
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              achievement.unlocked
                ? 'border-green-400 bg-green-50 shadow-md'
                : 'border-gray-200 bg-gray-50 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {achievement.icon}
                <h3 className={`font-semibold ${
                  achievement.unlocked ? 'text-green-700' : 'text-gray-500'
                }`}>
                  {achievement.title}
                </h3>
              </div>
              {achievement.unlocked && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  +{achievement.points}
                </span>
              )}
            </div>
            <p className={`text-sm ${
              achievement.unlocked ? 'text-green-600' : 'text-gray-400'
            }`}>
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};