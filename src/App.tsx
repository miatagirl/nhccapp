import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { StepCard } from './components/StepCard';
import { Achievements } from './components/Achievements';
import { ProgressBar } from './components/ProgressBar';
import { useApplicationData } from './hooks/useApplicationData';
import { Globe, Users } from 'lucide-react';

function App() {
  const [isInternational, setIsInternational] = useState(false);
  const { steps, profile, toggleStep } = useApplicationData(isInternational);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header profile={profile} />
        
        {/* Student Type Toggle */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-nhcc-navy mb-4">Student Type</h2>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsInternational(false)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                !isInternational
                  ? 'bg-nhcc-navy text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Users size={20} />
              <span>Domestic Student</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsInternational(true)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isInternational
                  ? 'bg-nhcc-navy text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Globe size={20} />
              <span>International Student</span>
            </motion.button>
          </div>
        </div>

        <Achievements totalPoints={profile.totalPoints} completedSteps={profile.completedSteps} />

        {/* Application Steps */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-nhcc-navy">Application Steps</h2>
            <div className="text-right">
              <p className="text-sm text-gray-600">Progress</p>
              <p className="text-lg font-semibold text-nhcc-maroon">
                {profile.completedSteps} / {profile.totalSteps} Required Steps
              </p>
            </div>
          </div>
          
          <ProgressBar 
            progress={profile.completedSteps} 
            total={profile.totalSteps} 
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                onToggle={toggleStep}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Completion Message */}
        {profile.completedSteps === profile.totalSteps && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg p-8 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">Congratulations!</h2>
            <p className="text-xl mb-4">
              You've completed all required application steps for New Hope Christian College!
            </p>
            <p className="text-lg">
              Welcome to the Deacon family! We're excited to have you join our community.
            </p>
          </motion.div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p className="mb-2">
            Questions? Contact our Admissions Office at{' '}
            <a href="mailto:admissions@newhope.edu" className="text-nhcc-navy hover:underline">
              admissions@newhope.edu
            </a>
          </p>
          <p>
            Visit us at{' '}
            <a 
              href="https://www.newhope.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-nhcc-maroon hover:underline"
            >
              www.newhope.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;