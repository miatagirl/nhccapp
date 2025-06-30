import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Utensils, AlertCircle, Coins } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { t } = useLanguage();
  const [formData, setFormData] = useState<HousingFormData>({
    housingType: '',
    mealPlan: '',
    foodAllergies: '',
    specialCircumstances: '',
    laundryAcknowledged: false
  });

  const [showForm, setShowForm] = useState(false);

  const housingOptions = [
    { value: 'dorm-single', label: t('singleDorm'), description: t('singleDormDesc') },
    { value: 'dorm-double', label: t('doubleDorm'), description: t('doubleDormDesc') },
    { value: 'dorm-suite', label: t('suiteStyle'), description: t('suiteStyleDesc') },
    { value: 'off-campus', label: t('offCampus'), description: t('offCampusDesc') }
  ];

  const mealPlanOptions = [
    { value: 'unlimited', label: t('unlimitedMeal'), description: t('unlimitedMealDesc') },
    { value: '19-meals', label: t('meals19'), description: t('meals19Desc') },
    { value: '14-meals', label: t('meals14'), description: t('meals14Desc') },
    { value: '10-meals', label: t('meals10'), description: t('meals10Desc') },
    { value: 'commuter', label: t('commuterPlan'), description: t('commuterPlanDesc') },
    { value: 'none', label: t('noMealPlan'), description: t('noMealPlanDesc') }
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
            <span className="text-green-700 font-semibold">{t('housingCompleted')}</span>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="text-green-600 hover:text-green-700 text-sm font-medium"
          >
            {t('editPreferences')}
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
        <span>{t('selectHousingOptions')}</span>
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
            {t('housingPreference')}
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
            {t('mealPlanSelectionTitle')}
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
              <h4 className="font-semibold text-blue-900 mb-2">{t('laundryFacilities')}</h4>
              <p className="text-sm text-blue-800 mb-3">
                {t('laundryInfo')}
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
                  {t('laundryAcknowledge')}
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Food Allergies */}
        <div>
          <label className="block text-sm font-semibold text-nhcc-navy mb-2 flex items-center">
            <AlertCircle className="mr-2" size={18} />
            {t('foodAllergies')}
          </label>
          <textarea
            value={formData.foodAllergies}
            onChange={(e) => handleInputChange('foodAllergies', e.target.value)}
            placeholder={t('foodAllergiesPlaceholder')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy resize-none"
            rows={3}
          />
        </div>

        {/* Special Circumstances */}
        <div>
          <label className="block text-sm font-semibold text-nhcc-navy mb-2">
            {t('specialCircumstances')}
          </label>
          <textarea
            value={formData.specialCircumstances}
            onChange={(e) => handleInputChange('specialCircumstances', e.target.value)}
            placeholder={t('specialCircumstancesPlaceholder')}
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
            {t('submitHousingPrefs')}
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(false)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            {t('cancel')}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};