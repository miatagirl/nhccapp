import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, DollarSign, Calendar, Languages } from 'lucide-react';

interface I20FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  countryOfBirth: string;
  countryOfCitizenship: string;
  passportNumber: string;
  passportExpiration: string;
  
  // Contact Information
  mailingAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  email: string;
  phone: string;
  
  // Academic Information
  programOfStudy: string;
  degreeLevel: string;
  expectedStartDate: string;
  expectedGraduation: string;
  
  // Financial Information
  financialSponsor: string;
  sponsorRelationship: string;
  estimatedAnnualExpenses: string;
  bankStatementAmount: string;
  
  // Supporting Documents
  hasPassportCopy: boolean;
  hasBankStatements: boolean;
  hasSponsorLetter: boolean;
  hasTranscripts: boolean;
}

interface I20FormProps {
  onSubmit: (data: I20FormData) => void;
  isCompleted: boolean;
}

export const I20Form: React.FC<I20FormProps> = ({ onSubmit, isCompleted }) => {
  const [language, setLanguage] = useState<'en' | 'ja'>('en');
  const [formData, setFormData] = useState<I20FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    countryOfBirth: '',
    countryOfCitizenship: '',
    passportNumber: '',
    passportExpiration: '',
    mailingAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    email: '',
    phone: '',
    programOfStudy: '',
    degreeLevel: '',
    expectedStartDate: '',
    expectedGraduation: '',
    financialSponsor: '',
    sponsorRelationship: '',
    estimatedAnnualExpenses: '',
    bankStatementAmount: '',
    hasPassportCopy: false,
    hasBankStatements: false,
    hasSponsorLetter: false,
    hasTranscripts: false
  });

  const [showForm, setShowForm] = useState(false);

  // Translation object
  const translations = {
    en: {
      title: 'I-20 Form Request',
      personalInfo: 'Personal Information',
      contactInfo: 'Contact Information',
      academicInfo: 'Academic Information',
      financialInfo: 'Financial Information',
      supportingDocs: 'Supporting Documents',
      firstName: 'First Name (as shown on passport)',
      lastName: 'Last Name (as shown on passport)',
      dateOfBirth: 'Date of Birth',
      countryOfBirth: 'Country of Birth',
      countryOfCitizenship: 'Country of Citizenship',
      passportNumber: 'Passport Number',
      passportExpiration: 'Passport Expiration Date',
      mailingAddress: 'Mailing Address',
      city: 'City',
      state: 'State/Province',
      postalCode: 'Postal Code',
      country: 'Country',
      email: 'Email Address',
      phone: 'Phone Number',
      programOfStudy: 'Program of Study',
      degreeLevel: 'Degree Level',
      expectedStartDate: 'Expected Start Date',
      expectedGraduation: 'Expected Graduation Date',
      financialSponsor: 'Financial Sponsor Name',
      sponsorRelationship: 'Relationship to Sponsor',
      estimatedAnnualExpenses: 'Estimated Annual Expenses (USD)',
      bankStatementAmount: 'Bank Statement Amount (USD)',
      hasPassportCopy: 'I have a copy of my passport',
      hasBankStatements: 'I have bank statements (last 3 months)',
      hasSponsorLetter: 'I have a sponsor letter (if applicable)',
      hasTranscripts: 'I have official transcripts',
      submit: 'Submit I-20 Request',
      cancel: 'Cancel',
      completed: 'I-20 Request Submitted',
      edit: 'Edit Request',
      requestForm: 'Request I-20 Form',
      degreeOptions: {
        bachelor: 'Bachelor\'s Degree',
        master: 'Master\'s Degree',
        doctoral: 'Doctoral Degree',
        certificate: 'Certificate Program'
      },
      sponsorOptions: {
        self: 'Self-funded',
        parents: 'Parents/Family',
        government: 'Government Scholarship',
        employer: 'Employer',
        other: 'Other'
      }
    },
    ja: {
      title: 'I-20フォーム申請',
      personalInfo: '個人情報',
      contactInfo: '連絡先情報',
      academicInfo: '学術情報',
      financialInfo: '財政情報',
      supportingDocs: '必要書類',
      firstName: '名（パスポート記載通り）',
      lastName: '姓（パスポート記載通り）',
      dateOfBirth: '生年月日',
      countryOfBirth: '出生国',
      countryOfCitizenship: '国籍',
      passportNumber: 'パスポート番号',
      passportExpiration: 'パスポート有効期限',
      mailingAddress: '郵送先住所',
      city: '市区町村',
      state: '都道府県',
      postalCode: '郵便番号',
      country: '国',
      email: 'メールアドレス',
      phone: '電話番号',
      programOfStudy: '専攻分野',
      degreeLevel: '学位レベル',
      expectedStartDate: '入学予定日',
      expectedGraduation: '卒業予定日',
      financialSponsor: '財政支援者名',
      sponsorRelationship: '支援者との関係',
      estimatedAnnualExpenses: '年間予想費用（米ドル）',
      bankStatementAmount: '銀行残高証明額（米ドル）',
      hasPassportCopy: 'パスポートのコピーを持っています',
      hasBankStatements: '銀行残高証明書を持っています（過去3ヶ月分）',
      hasSponsorLetter: '支援者からの手紙を持っています（該当する場合）',
      hasTranscripts: '公式成績証明書を持っています',
      submit: 'I-20申請を送信',
      cancel: 'キャンセル',
      completed: 'I-20申請が送信されました',
      edit: '申請を編集',
      requestForm: 'I-20フォームを申請',
      degreeOptions: {
        bachelor: '学士号',
        master: '修士号',
        doctoral: '博士号',
        certificate: '証明書プログラム'
      },
      sponsorOptions: {
        self: '自己資金',
        parents: '両親・家族',
        government: '政府奨学金',
        employer: '雇用主',
        other: 'その他'
      }
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setShowForm(false);
  };

  const handleInputChange = (field: keyof I20FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isCompleted && !showForm) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="text-green-600" size={20} />
            <span className="text-green-700 font-semibold">{t.completed}</span>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="text-green-600 hover:text-green-700 text-sm font-medium"
          >
            {t.edit}
          </button>
        </div>
      </div>
    );
  }

  if (!showForm) {
    return (
      <div className="space-y-3">
        {/* Language Toggle */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Languages size={16} className="text-gray-600" />
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'en' 
                ? 'bg-nhcc-navy text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('ja')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'ja' 
                ? 'bg-nhcc-navy text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            日本語
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowForm(true)}
          className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 bg-nhcc-maroon text-white hover:bg-nhcc-light-maroon flex items-center justify-center space-x-2"
        >
          <Globe size={18} />
          <span>{t.requestForm}</span>
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-gray-50 rounded-lg p-6 mb-4 border border-gray-200"
    >
      {/* Language Toggle */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-nhcc-navy">{t.title}</h3>
        <div className="flex items-center space-x-2">
          <Languages size={16} className="text-gray-600" />
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'en' 
                ? 'bg-nhcc-navy text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('ja')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'ja' 
                ? 'bg-nhcc-navy text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            日本語
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div>
          <h4 className="text-md font-semibold text-nhcc-navy mb-4 flex items-center">
            <FileText className="mr-2" size={18} />
            {t.personalInfo}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.firstName}
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.lastName}
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.dateOfBirth}
              </label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.countryOfBirth}
              </label>
              <input
                type="text"
                value={formData.countryOfBirth}
                onChange={(e) => handleInputChange('countryOfBirth', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.countryOfCitizenship}
              </label>
              <input
                type="text"
                value={formData.countryOfCitizenship}
                onChange={(e) => handleInputChange('countryOfCitizenship', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.passportNumber}
              </label>
              <input
                type="text"
                value={formData.passportNumber}
                onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.passportExpiration}
              </label>
              <input
                type="date"
                value={formData.passportExpiration}
                onChange={(e) => handleInputChange('passportExpiration', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-md font-semibold text-nhcc-navy mb-4">
            {t.contactInfo}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.mailingAddress}
              </label>
              <input
                type="text"
                value={formData.mailingAddress}
                onChange={(e) => handleInputChange('mailingAddress', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.city}
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.state}
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.postalCode}
              </label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.country}
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.email}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div>
          <h4 className="text-md font-semibold text-nhcc-navy mb-4 flex items-center">
            <Calendar className="mr-2" size={18} />
            {t.academicInfo}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.programOfStudy}
              </label>
              <input
                type="text"
                value={formData.programOfStudy}
                onChange={(e) => handleInputChange('programOfStudy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.degreeLevel}
              </label>
              <select
                value={formData.degreeLevel}
                onChange={(e) => handleInputChange('degreeLevel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              >
                <option value="">Select degree level</option>
                <option value="bachelor">{t.degreeOptions.bachelor}</option>
                <option value="master">{t.degreeOptions.master}</option>
                <option value="doctoral">{t.degreeOptions.doctoral}</option>
                <option value="certificate">{t.degreeOptions.certificate}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.expectedStartDate}
              </label>
              <input
                type="date"
                value={formData.expectedStartDate}
                onChange={(e) => handleInputChange('expectedStartDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.expectedGraduation}
              </label>
              <input
                type="date"
                value={formData.expectedGraduation}
                onChange={(e) => handleInputChange('expectedGraduation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
          </div>
        </div>

        {/* Financial Information */}
        <div>
          <h4 className="text-md font-semibold text-nhcc-navy mb-4 flex items-center">
            <DollarSign className="mr-2" size={18} />
            {t.financialInfo}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.financialSponsor}
              </label>
              <select
                value={formData.financialSponsor}
                onChange={(e) => handleInputChange('financialSponsor', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              >
                <option value="">Select sponsor type</option>
                <option value="self">{t.sponsorOptions.self}</option>
                <option value="parents">{t.sponsorOptions.parents}</option>
                <option value="government">{t.sponsorOptions.government}</option>
                <option value="employer">{t.sponsorOptions.employer}</option>
                <option value="other">{t.sponsorOptions.other}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.sponsorRelationship}
              </label>
              <input
                type="text"
                value={formData.sponsorRelationship}
                onChange={(e) => handleInputChange('sponsorRelationship', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.estimatedAnnualExpenses}
              </label>
              <input
                type="number"
                value={formData.estimatedAnnualExpenses}
                onChange={(e) => handleInputChange('estimatedAnnualExpenses', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.bankStatementAmount}
              </label>
              <input
                type="number"
                value={formData.bankStatementAmount}
                onChange={(e) => handleInputChange('bankStatementAmount', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nhcc-navy focus:border-nhcc-navy"
                required
              />
            </div>
          </div>
        </div>

        {/* Supporting Documents */}
        <div>
          <h4 className="text-md font-semibold text-nhcc-navy mb-4">
            {t.supportingDocs}
          </h4>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasPassportCopy}
                onChange={(e) => handleInputChange('hasPassportCopy', e.target.checked)}
                className="text-nhcc-navy focus:ring-nhcc-navy"
                required
              />
              <span className="text-sm text-gray-700">{t.hasPassportCopy}</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasBankStatements}
                onChange={(e) => handleInputChange('hasBankStatements', e.target.checked)}
                className="text-nhcc-navy focus:ring-nhcc-navy"
                required
              />
              <span className="text-sm text-gray-700">{t.hasBankStatements}</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasSponsorLetter}
                onChange={(e) => handleInputChange('hasSponsorLetter', e.target.checked)}
                className="text-nhcc-navy focus:ring-nhcc-navy"
              />
              <span className="text-sm text-gray-700">{t.hasSponsorLetter}</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasTranscripts}
                onChange={(e) => handleInputChange('hasTranscripts', e.target.checked)}
                className="text-nhcc-navy focus:ring-nhcc-navy"
                required
              />
              <span className="text-sm text-gray-700">{t.hasTranscripts}</span>
            </label>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex space-x-3 pt-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-nhcc-navy text-white py-3 px-4 rounded-lg font-semibold hover:bg-nhcc-dark-navy transition-colors duration-200"
          >
            {t.submit}
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(false)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            {t.cancel}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};