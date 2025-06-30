import { useState, useEffect } from 'react';
import { ApplicationStep, StudentProfile } from '../types';

export const useApplicationData = (isInternational: boolean = false) => {
  const [steps, setSteps] = useState<ApplicationStep[]>([]);
  const [profile, setProfile] = useState<StudentProfile>({
    name: 'Future Deacon',
    email: '',
    isInternational,
    totalPoints: 0,
    completedSteps: 0,
    totalSteps: 0
  });

  useEffect(() => {
    const baseSteps: ApplicationStep[] = [
      {
        id: 'application',
        title: 'Submit Application',
        description: 'Complete and submit your New Hope Christian College application online.',
        icon: 'application',
        completed: false,
        points: 100,
        requirements: [
          'Personal information and contact details',
          'Academic history and transcripts',
          'Essay or personal statement',
          'Application fee payment'
        ]
      },
      {
        id: 'fafsa',
        title: 'Complete FAFSA',
        description: 'File your Free Application for Federal Student Aid to determine financial aid eligibility.',
        icon: 'fafsa',
        completed: false,
        points: 75,
        requirements: [
          'Social Security Number',
          'Tax returns and financial records',
          'Bank statements and investment records',
          'Federal Student Aid ID (FSA ID)'
        ]
      },
      {
        id: 'housing',
        title: 'Housing Application',
        description: 'Apply for on-campus housing and select your preferred residence hall.',
        icon: 'housing',
        completed: false,
        points: 50,
        requirements: [
          'Housing application form',
          'Housing deposit',
          'Roommate preferences',
          'Meal plan selection'
        ]
      }
    ];

    if (isInternational) {
      baseSteps.push({
        id: 'i20',
        title: 'I-20 Form Request',
        description: 'Request your I-20 form for F-1 student visa application.',
        icon: 'i20',
        completed: false,
        optional: true,
        points: 75,
        requirements: [
          'Proof of financial support',
          'Bank statements or sponsor letter',
          'Passport copy',
          'SEVIS fee payment'
        ]
      });
    }

    setSteps(baseSteps);
    setProfile(prev => ({
      ...prev,
      totalSteps: baseSteps.filter(step => !step.optional).length
    }));
  }, [isInternational]);

  const toggleStep = (stepId: string) => {
    setSteps(prevSteps => {
      const updatedSteps = prevSteps.map(step => {
        if (step.id === stepId) {
          return { ...step, completed: !step.completed };
        }
        return step;
      });

      // Update profile based on completed steps
      const completedSteps = updatedSteps.filter(step => step.completed && !step.optional).length;
      const totalPoints = updatedSteps
        .filter(step => step.completed)
        .reduce((sum, step) => sum + step.points, 0);

      setProfile(prev => ({
        ...prev,
        completedSteps,
        totalPoints
      }));

      return updatedSteps;
    });
  };

  return { steps, profile, toggleStep };
};