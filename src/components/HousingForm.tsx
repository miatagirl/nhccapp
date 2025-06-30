import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Utensils, AlertCircle, Coins } from 'lucide-react';

interface HousingFormData {
  housingType: string;
  mealPlan: string;
  foodAllergies: string;
  specialCircumstances: string;
  laundryAcknowledged: boolean;
}

interface HousingFormProps {
  onSubmit: (data: HousingFormData) => void;
  isCompleted: boolean;
}

export const HousingForm: React.FC<HousingFormProps> = ({ onSubmit, isCompleted }) => {
  const [formData, setFormData] = useState<HousingFormData>({
    housingType: '',
    mealPlan: '',
    foodAllergies: '',
    specialCircumstances: '',
    laundryAcknowledged: false
  });

  const [showForm, setShowForm] = useState(false);

  const housingOptions = [
    { value: 'dorm-single', label: 'Single Dorm Room', description: 'Private room in residence hall' },
    { value: 'dorm-double', label: 'Double Dorm Room', description: 'Shared room with one roommate' },
    { value: 'dorm-suite', label: 'Suite Style', description: 'Private room with shared common area' },
    { value: 'off-campus', label: 'Off-Campus Housing', description: 'Living independently off campus' }
  ];

  const mealPlanOptions = [
    { value: 'unlimited', label: 'Unlimited Meal Plan', description: 'Unlimited dining hall access + $200 flex dollars' },
    { value: '19-meals', label: '19 Meals/Week', description: '19 meals per week + $150 flex dollars' },
    { value: '14-meals', label: '14 Meals/Week', description: '14 meals per week + $100 flex dollars' },
    { value: '10-meals', label: '10 Meals/Week', description: '10 meals per week + $75 flex dollars' },
    { value: 'commuter', label: 'Commuter Plan', description: '50 meals per semester + $50 flex dollars' },
    { value: 'none', label: 'No Meal Plan', description: 'Not participating in meal plan' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.housingType && formData.mealPlan && formData.laundryAcknowledged) {
      onSubmit(formData);
      setShowForm(false);
    }
  };

  const handleInputChange = (field: keyof HousingFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isCompleted && !showForm) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="text-green-600" size={20} />
            <span className="text-green-700 font-semibold">Housing Application Completed</span>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="text-green-600 hover:text-green-700 text-sm font-medium"
          >
            Edit Preferences
          </button>
        </div>
      </div>
    );
  }

  if (!showForm) {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowForm(true)}
        className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 bg-nhcc-maroon text-white hover:bg-nhcc-light-maroon mb-3 flex items-center justify-center space-x-2"
      >
        <Home size={18} />
        <span>Select Housing Options</span>
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-gray-50 rounded-lg p-6 mb-4 border border-gray-200"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Housing Type Selection */}
        <div>
          <label className="block text-sm font-semibold text-nhcc-navy mb-3 flex items-center">
            <Home className="mr-2" size={18} />
            Housing Preference
          </label>
          <div className="space-y-3">
            {housingOptions.map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="housingType"
                  value={option.value}
                  checked={formData.housingType === option.value}
                  onChange={(e) => handleInputChange('housingType', e.target.value)}
                  className="mt-1 text-nhcc-navy focus:ring-nhcc-navy"
                  required
                />
                <div>
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Meal Plan Selection */}
        <div>
          <label className="block text-sm font-semibold text-nhcc-navy mb-3 flex items-center">
            <Utensils className="mr-2" size={18} />
            Meal Plan Selection
          </label>
          <div className="space-y-3">
            {mealPlanOptions.map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="mealPlan"
                  value={option.value}
                  checked={formData.mealPlan === option.value}
                  onChange={(e) => handleInputChange('mealPlan', e.target.value)}
                  className="mt-1 text-nhcc-navy focus:ring-nhcc-navy"
                  required
                />
                <div>
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Laundry Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Coins className="text-blue-600 mt-1" size={20} />
            <div className="flex-1">
              <h4 className="font-semibold text-blue-900 mb-2">Laundry Facilities</h4>
              <p className="text-sm text-blue-800 mb-3">
                All residence halls are equipped with coin-operated laundry facilities. Washers and dryers 
                are available on each floor. Current rates are $2.00 per wash cycle and $2.00 per dry cycle. 
                Quarters are required - change machines are available in the lobby of each residence hall.
              </p>
              <label className="flex items-start space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.laundryAcknowledged}
                  onChange={(e) => handleInputChange('laundryAcknowledged', e.target.checked)}
                  className="mt-1 text-nhcc-navy focus:ring-nhcc-navy"
                  required
                />
                <span className="text-sm text-blue-900">
                  I acknowledge the laundry facility information and understand the costs involved.
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Food Allergies */}
        <div>
          <label className="block text-sm font-semibold text-nhcc-navy mb-2 flex items-center">
            <AlertCircle className="mr-2" size={18} />
            Food Allergies & Dietary Restrictions
          </label>
          <textarea
            value={formData.foodAllergies}
            onChange={(e) => handleInputChange('foodAllergies', e.target.value)}
            placeholder="Please list any food allergies, dietary restrictions, or special dietary needs. Our dining services team will work with you to ensure safe meal options."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy resize-none"
            rows={3}
          />
        </div>

        {/* Special Circumstances */}
        <div>
          <label className="block text-sm font-semibold text-nhcc-navy mb-2">
            Special Circumstances or Accommodations
          </label>
          <textarea
            value={formData.specialCircumstances}
            onChange={(e) => handleInputChange('specialCircumstances', e.target.value)}
            placeholder="Please describe any special circumstances, medical needs, accessibility requirements, or other accommodations you may need. This information helps us provide the best possible living experience."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy resize-none"
            rows={3}
          />
        </div>

        {/* Form Actions */}
        <div className="flex space-x-3 pt-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-nhcc-navy text-white py-3 px-4 rounded-lg font-semibold hover:bg-nhcc-dark-navy transition-colors duration-200"
          >
            Submit Housing Preferences
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(false)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};