export interface ApplicationStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
  optional?: boolean;
  points: number;
  requirements?: string[];
}

export interface StudentProfile {
  name: string;
  email: string;
  isInternational: boolean;
  totalPoints: number;
  completedSteps: number;
  totalSteps: number;
}