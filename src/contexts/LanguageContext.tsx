import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ja' | 'pt' | 'fil';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Complete translations for all site content
const translations = {
  en: {
    // Header
    applicationJourney: 'Application Journey',
    trackProgress: 'Track your progress to New Hope!',
    totalPoints: 'Total Points',
    overallProgress: 'Overall Progress',
    stepsCompleted: 'steps completed',
    
    // Student Type
    studentType: 'Student Type',
    domesticStudent: 'Domestic Student',
    internationalStudent: 'International Student',
    
    // Achievements
    achievements: 'Achievements',
    gettingStarted: 'Getting Started',
    gettingStartedDesc: 'Complete your first application step',
    halfwayHero: 'Halfway Hero',
    halfwayHeroDesc: 'Complete 50% of your application',
    pointCollector: 'Point Collector',
    pointCollectorDesc: 'Earn 200+ points',
    completionChampion: 'Completion Champion',
    completionChampionDesc: 'Complete all required steps',
    
    // Application Steps
    applicationSteps: 'Application Steps',
    progress: 'Progress',
    requiredSteps: 'Required Steps',
    optional: 'Optional',
    requirements: 'Requirements:',
    markComplete: 'Mark as Complete',
    completed: 'Completed! ✓',
    
    // Steps
    submitApplication: 'Submit Application',
    submitApplicationDesc: 'Complete and submit your New Hope Christian College application online.',
    completeFafsa: 'Complete FAFSA',
    completeFafsaDesc: 'File your Free Application for Federal Student Aid to determine financial aid eligibility.',
    housingApplication: 'Housing Application',
    housingApplicationDesc: 'Apply for on-campus housing and select your preferred residence hall.',
    i20FormRequest: 'I-20 Form Request',
    i20FormRequestDesc: 'Request your I-20 form for F-1 student visa application.',
    
    // Application Requirements
    personalInfo: 'Personal information and contact details',
    academicHistory: 'Academic history and transcripts',
    essayStatement: 'Essay or personal statement',
    applicationFee: 'Application fee payment',
    
    // FAFSA Requirements
    socialSecurity: 'Social Security Number',
    taxReturns: 'Tax returns and financial records',
    bankStatements: 'Bank statements and investment records',
    fsaId: 'Federal Student Aid ID (FSA ID)',
    
    // Housing Requirements
    housingForm: 'Housing application form',
    housingDeposit: 'Housing deposit',
    roommatePrefs: 'Roommate preferences',
    mealPlanSelection: 'Meal plan selection',
    
    // I-20 Requirements
    financialProof: 'Proof of financial support',
    bankStatementsSponsors: 'Bank statements or sponsor letter',
    passportCopy: 'Passport copy',
    sevisFee: 'SEVIS fee payment',
    
    // Buttons
    startApplication: 'Start Application',
    completeFafsaBtn: 'Complete FAFSA',
    selectHousingOptions: 'Select Housing Options',
    requestI20Form: 'Request I-20 Form',
    
    // Completion
    congratulations: 'Congratulations!',
    completedAllSteps: 'You\'ve completed all required application steps for New Hope Christian College!',
    welcomeDeacon: 'Welcome to the Deacon family! We\'re excited to have you join our community.',
    
    // Footer
    questionsContact: 'Questions? Contact our Admissions Office at',
    visitUs: 'Visit us at',
    
    // Housing Form
    housingPreference: 'Housing Preference',
    singleDorm: 'Single Dorm Room',
    singleDormDesc: 'Private room in residence hall',
    doubleDorm: 'Double Dorm Room',
    doubleDormDesc: 'Shared room with one roommate',
    suiteStyle: 'Suite Style',
    suiteStyleDesc: 'Private room with shared common area',
    offCampus: 'Off-Campus Housing',
    offCampusDesc: 'Living independently off campus',
    
    mealPlanSelectionTitle: 'Meal Plan Selection',
    unlimitedMeal: 'Unlimited Meal Plan',
    unlimitedMealDesc: 'Unlimited dining hall access + $200 flex dollars',
    meals19: '19 Meals/Week',
    meals19Desc: '19 meals per week + $150 flex dollars',
    meals14: '14 Meals/Week',
    meals14Desc: '14 meals per week + $100 flex dollars',
    meals10: '10 Meals/Week',
    meals10Desc: '10 meals per week + $75 flex dollars',
    commuterPlan: 'Commuter Plan',
    commuterPlanDesc: '50 meals per semester + $50 flex dollars',
    noMealPlan: 'No Meal Plan',
    noMealPlanDesc: 'Not participating in meal plan',
    
    laundryFacilities: 'Laundry Facilities',
    laundryInfo: 'All residence halls are equipped with coin-operated laundry facilities. Washers and dryers are available on each floor. Current rates are $2.00 per wash cycle and $2.00 per dry cycle. Quarters are required - change machines are available in the lobby of each residence hall.',
    laundryAcknowledge: 'I acknowledge the laundry facility information and understand the costs involved.',
    
    foodAllergies: 'Food Allergies & Dietary Restrictions',
    foodAllergiesPlaceholder: 'Please list any food allergies, dietary restrictions, or special dietary needs. Our dining services team will work with you to ensure safe meal options.',
    specialCircumstances: 'Special Circumstances or Accommodations',
    specialCircumstancesPlaceholder: 'Please describe any special circumstances, medical needs, accessibility requirements, or other accommodations you may need. This information helps us provide the best possible living experience.',
    
    submitHousingPrefs: 'Submit Housing Preferences',
    housingCompleted: 'Housing Application Completed',
    editPreferences: 'Edit Preferences',
    cancel: 'Cancel'
  },
  
  ja: {
    // Header
    applicationJourney: '入学申請の道のり',
    trackProgress: 'ニューホープへの進歩を追跡しましょう！',
    totalPoints: '総ポイント',
    overallProgress: '全体の進捗',
    stepsCompleted: 'ステップ完了',
    
    // Student Type
    studentType: '学生タイプ',
    domesticStudent: '国内学生',
    internationalStudent: '留学生',
    
    // Achievements
    achievements: '実績',
    gettingStarted: 'スタート',
    gettingStartedDesc: '最初の申請ステップを完了',
    halfwayHero: 'ハーフウェイヒーロー',
    halfwayHeroDesc: '申請の50%を完了',
    pointCollector: 'ポイントコレクター',
    pointCollectorDesc: '200ポイント以上を獲得',
    completionChampion: '完了チャンピオン',
    completionChampionDesc: '必要なステップをすべて完了',
    
    // Application Steps
    applicationSteps: '申請ステップ',
    progress: '進捗',
    requiredSteps: '必須ステップ',
    optional: 'オプション',
    requirements: '要件：',
    markComplete: '完了としてマーク',
    completed: '完了！ ✓',
    
    // Steps
    submitApplication: '申請書提出',
    submitApplicationDesc: 'ニューホープクリスチャンカレッジの申請書をオンラインで記入・提出してください。',
    completeFafsa: 'FAFSA完了',
    completeFafsaDesc: '連邦学生援助の無料申請書を提出して、経済援助の資格を決定してください。',
    housingApplication: '住居申請',
    housingApplicationDesc: 'キャンパス内住居に申請し、希望する寮を選択してください。',
    i20FormRequest: 'I-20フォーム申請',
    i20FormRequestDesc: 'F-1学生ビザ申請のためのI-20フォームを申請してください。',
    
    // Application Requirements
    personalInfo: '個人情報と連絡先詳細',
    academicHistory: '学歴と成績証明書',
    essayStatement: 'エッセイまたは個人声明',
    applicationFee: '申請料の支払い',
    
    // FAFSA Requirements
    socialSecurity: '社会保障番号',
    taxReturns: '税務申告書と財務記録',
    bankStatements: '銀行残高証明書と投資記録',
    fsaId: '連邦学生援助ID（FSA ID）',
    
    // Housing Requirements
    housingForm: '住居申請フォーム',
    housingDeposit: '住居保証金',
    roommatePrefs: 'ルームメイトの希望',
    mealPlanSelection: 'ミールプランの選択',
    
    // I-20 Requirements
    financialProof: '経済的支援の証明',
    bankStatementsSponsors: '銀行残高証明書またはスポンサーレター',
    passportCopy: 'パスポートのコピー',
    sevisFee: 'SEVIS料金の支払い',
    
    // Buttons
    startApplication: '申請開始',
    completeFafsaBtn: 'FAFSA完了',
    selectHousingOptions: '住居オプション選択',
    requestI20Form: 'I-20フォーム申請',
    
    // Completion
    congratulations: 'おめでとうございます！',
    completedAllSteps: 'ニューホープクリスチャンカレッジの必要な申請ステップをすべて完了しました！',
    welcomeDeacon: 'ディーコンファミリーへようこそ！あなたがコミュニティに参加することを楽しみにしています。',
    
    // Footer
    questionsContact: 'ご質問は入学事務局までお問い合わせください',
    visitUs: 'ウェブサイトをご覧ください',
    
    // Housing Form
    housingPreference: '住居の希望',
    singleDorm: '個室寮',
    singleDormDesc: '学生寮の個室',
    doubleDorm: '相部屋寮',
    doubleDormDesc: 'ルームメイト1人との相部屋',
    suiteStyle: 'スイートスタイル',
    suiteStyleDesc: '共用エリア付きの個室',
    offCampus: 'キャンパス外住居',
    offCampusDesc: 'キャンパス外での独立した生活',
    
    mealPlanSelectionTitle: 'ミールプラン選択',
    unlimitedMeal: '無制限ミールプラン',
    unlimitedMealDesc: '食堂無制限アクセス + $200フレックスドル',
    meals19: '週19食',
    meals19Desc: '週19食 + $150フレックスドル',
    meals14: '週14食',
    meals14Desc: '週14食 + $100フレックスドル',
    meals10: '週10食',
    meals10Desc: '週10食 + $75フレックスドル',
    commuterPlan: '通学生プラン',
    commuterPlanDesc: '学期50食 + $50フレックスドル',
    noMealPlan: 'ミールプランなし',
    noMealPlanDesc: 'ミールプランに参加しない',
    
    laundryFacilities: 'ランドリー施設',
    laundryInfo: 'すべての学生寮にはコイン式ランドリー施設が完備されています。洗濯機と乾燥機は各階で利用できます。現在の料金は洗濯1回$2.00、乾燥1回$2.00です。25セント硬貨が必要です - 両替機は各寮のロビーにあります。',
    laundryAcknowledge: 'ランドリー施設の情報を確認し、関連する費用を理解しました。',
    
    foodAllergies: '食物アレルギーと食事制限',
    foodAllergiesPlaceholder: '食物アレルギー、食事制限、特別な食事のニーズがあればお書きください。食事サービスチームが安全な食事オプションを提供するために協力します。',
    specialCircumstances: '特別な事情や配慮',
    specialCircumstancesPlaceholder: '特別な事情、医療ニーズ、アクセシビリティ要件、その他必要な配慮があればお書きください。この情報は最高の生活体験を提供するのに役立ちます。',
    
    submitHousingPrefs: '住居希望を提出',
    housingCompleted: '住居申請完了',
    editPreferences: '希望を編集',
    cancel: 'キャンセル'
  },
  
  pt: {
    // Header
    applicationJourney: 'Jornada de Inscrição',
    trackProgress: 'Acompanhe seu progresso para New Hope!',
    totalPoints: 'Pontos Totais',
    overallProgress: 'Progresso Geral',
    stepsCompleted: 'etapas concluídas',
    
    // Student Type
    studentType: 'Tipo de Estudante',
    domesticStudent: 'Estudante Nacional',
    internationalStudent: 'Estudante Internacional',
    
    // Achievements
    achievements: 'Conquistas',
    gettingStarted: 'Começando',
    gettingStartedDesc: 'Complete sua primeira etapa de inscrição',
    halfwayHero: 'Herói do Meio Caminho',
    halfwayHeroDesc: 'Complete 50% da sua inscrição',
    pointCollector: 'Coletor de Pontos',
    pointCollectorDesc: 'Ganhe 200+ pontos',
    completionChampion: 'Campeão da Conclusão',
    completionChampionDesc: 'Complete todas as etapas obrigatórias',
    
    // Application Steps
    applicationSteps: 'Etapas da Inscrição',
    progress: 'Progresso',
    requiredSteps: 'Etapas Obrigatórias',
    optional: 'Opcional',
    requirements: 'Requisitos:',
    markComplete: 'Marcar como Concluído',
    completed: 'Concluído! ✓',
    
    // Steps
    submitApplication: 'Enviar Inscrição',
    submitApplicationDesc: 'Complete e envie sua inscrição online para o New Hope Christian College.',
    completeFafsa: 'Completar FAFSA',
    completeFafsaDesc: 'Preencha sua Solicitação Gratuita de Auxílio Federal ao Estudante para determinar elegibilidade para auxílio financeiro.',
    housingApplication: 'Inscrição para Moradia',
    housingApplicationDesc: 'Inscreva-se para moradia no campus e selecione seu dormitório preferido.',
    i20FormRequest: 'Solicitação de Formulário I-20',
    i20FormRequestDesc: 'Solicite seu formulário I-20 para aplicação de visto de estudante F-1.',
    
    // Application Requirements
    personalInfo: 'Informações pessoais e detalhes de contato',
    academicHistory: 'Histórico acadêmico e transcrições',
    essayStatement: 'Ensaio ou declaração pessoal',
    applicationFee: 'Pagamento da taxa de inscrição',
    
    // FAFSA Requirements
    socialSecurity: 'Número do Seguro Social',
    taxReturns: 'Declarações de imposto e registros financeiros',
    bankStatements: 'Extratos bancários e registros de investimento',
    fsaId: 'ID de Auxílio Federal ao Estudante (FSA ID)',
    
    // Housing Requirements
    housingForm: 'Formulário de inscrição para moradia',
    housingDeposit: 'Depósito de moradia',
    roommatePrefs: 'Preferências de colega de quarto',
    mealPlanSelection: 'Seleção de plano de refeições',
    
    // I-20 Requirements
    financialProof: 'Comprovante de apoio financeiro',
    bankStatementsSponsors: 'Extratos bancários ou carta do patrocinador',
    passportCopy: 'Cópia do passaporte',
    sevisFee: 'Pagamento da taxa SEVIS',
    
    // Buttons
    startApplication: 'Iniciar Inscrição',
    completeFafsaBtn: 'Completar FAFSA',
    selectHousingOptions: 'Selecionar Opções de Moradia',
    requestI20Form: 'Solicitar Formulário I-20',
    
    // Completion
    congratulations: 'Parabéns!',
    completedAllSteps: 'Você completou todas as etapas obrigatórias de inscrição para o New Hope Christian College!',
    welcomeDeacon: 'Bem-vindo à família Deacon! Estamos animados para tê-lo em nossa comunidade.',
    
    // Footer
    questionsContact: 'Dúvidas? Entre em contato com nosso Escritório de Admissões em',
    visitUs: 'Visite-nos em',
    
    // Housing Form
    housingPreference: 'Preferência de Moradia',
    singleDorm: 'Quarto Individual no Dormitório',
    singleDormDesc: 'Quarto privado no hall de residência',
    doubleDorm: 'Quarto Duplo no Dormitório',
    doubleDormDesc: 'Quarto compartilhado com um colega',
    suiteStyle: 'Estilo Suíte',
    suiteStyleDesc: 'Quarto privado com área comum compartilhada',
    offCampus: 'Moradia Fora do Campus',
    offCampusDesc: 'Vivendo independentemente fora do campus',
    
    mealPlanSelectionTitle: 'Seleção de Plano de Refeições',
    unlimitedMeal: 'Plano de Refeições Ilimitado',
    unlimitedMealDesc: 'Acesso ilimitado ao refeitório + $200 dólares flex',
    meals19: '19 Refeições/Semana',
    meals19Desc: '19 refeições por semana + $150 dólares flex',
    meals14: '14 Refeições/Semana',
    meals14Desc: '14 refeições por semana + $100 dólares flex',
    meals10: '10 Refeições/Semana',
    meals10Desc: '10 refeições por semana + $75 dólares flex',
    commuterPlan: 'Plano para Estudantes Externos',
    commuterPlanDesc: '50 refeições por semestre + $50 dólares flex',
    noMealPlan: 'Sem Plano de Refeições',
    noMealPlanDesc: 'Não participando do plano de refeições',
    
    laundryFacilities: 'Instalações de Lavanderia',
    laundryInfo: 'Todos os halls de residência estão equipados com instalações de lavanderia operadas por moedas. Máquinas de lavar e secar estão disponíveis em cada andar. As tarifas atuais são $2,00 por ciclo de lavagem e $2,00 por ciclo de secagem. Moedas de 25 centavos são necessárias - máquinas de troco estão disponíveis no lobby de cada hall de residência.',
    laundryAcknowledge: 'Reconheço as informações sobre as instalações de lavanderia e entendo os custos envolvidos.',
    
    foodAllergies: 'Alergias Alimentares e Restrições Dietéticas',
    foodAllergiesPlaceholder: 'Por favor, liste quaisquer alergias alimentares, restrições dietéticas ou necessidades dietéticas especiais. Nossa equipe de serviços de alimentação trabalhará com você para garantir opções de refeições seguras.',
    specialCircumstances: 'Circunstâncias Especiais ou Acomodações',
    specialCircumstancesPlaceholder: 'Por favor, descreva quaisquer circunstâncias especiais, necessidades médicas, requisitos de acessibilidade ou outras acomodações que você possa precisar. Esta informação nos ajuda a fornecer a melhor experiência de vida possível.',
    
    submitHousingPrefs: 'Enviar Preferências de Moradia',
    housingCompleted: 'Inscrição para Moradia Concluída',
    editPreferences: 'Editar Preferências',
    cancel: 'Cancelar'
  },
  
  fil: {
    // Header
    applicationJourney: 'Paglalakbay sa Aplikasyon',
    trackProgress: 'Subaybayan ang inyong progreso sa New Hope!',
    totalPoints: 'Kabuuang Puntos',
    overallProgress: 'Kabuuang Progreso',
    stepsCompleted: 'mga hakbang na natapos',
    
    // Student Type
    studentType: 'Uri ng Estudyante',
    domesticStudent: 'Lokal na Estudyante',
    internationalStudent: 'Internasyonal na Estudyante',
    
    // Achievements
    achievements: 'Mga Tagumpay',
    gettingStarted: 'Pagsisimula',
    gettingStartedDesc: 'Tapusin ang inyong unang hakbang sa aplikasyon',
    halfwayHero: 'Bayani ng Kalahati',
    halfwayHeroDesc: 'Tapusin ang 50% ng inyong aplikasyon',
    pointCollector: 'Tagakolekta ng Puntos',
    pointCollectorDesc: 'Makakuha ng 200+ puntos',
    completionChampion: 'Kampeon ng Pagkakatapos',
    completionChampionDesc: 'Tapusin ang lahat ng kinakailangang hakbang',
    
    // Application Steps
    applicationSteps: 'Mga Hakbang sa Aplikasyon',
    progress: 'Progreso',
    requiredSteps: 'Kinakailangang Hakbang',
    optional: 'Opsyonal',
    requirements: 'Mga Kinakailangan:',
    markComplete: 'Markahan bilang Tapos',
    completed: 'Tapos na! ✓',
    
    // Steps
    submitApplication: 'Ipasa ang Aplikasyon',
    submitApplicationDesc: 'Kumpletuhin at ipasa ang inyong aplikasyon sa New Hope Christian College online.',
    completeFafsa: 'Kumpletuhin ang FAFSA',
    completeFafsaDesc: 'Mag-file ng inyong Free Application for Federal Student Aid upang matukoy ang eligibility para sa financial aid.',
    housingApplication: 'Aplikasyon para sa Tirahan',
    housingApplicationDesc: 'Mag-apply para sa on-campus housing at piliin ang inyong preferred residence hall.',
    i20FormRequest: 'Kahilingan ng I-20 Form',
    i20FormRequestDesc: 'Humingi ng inyong I-20 form para sa F-1 student visa application.',
    
    // Application Requirements
    personalInfo: 'Personal na impormasyon at mga detalye ng kontak',
    academicHistory: 'Academic history at mga transcript',
    essayStatement: 'Essay o personal statement',
    applicationFee: 'Bayad sa application fee',
    
    // FAFSA Requirements
    socialSecurity: 'Social Security Number',
    taxReturns: 'Mga tax return at financial record',
    bankStatements: 'Mga bank statement at investment record',
    fsaId: 'Federal Student Aid ID (FSA ID)',
    
    // Housing Requirements
    housingForm: 'Housing application form',
    housingDeposit: 'Housing deposit',
    roommatePrefs: 'Mga preference sa roommate',
    mealPlanSelection: 'Pagpili ng meal plan',
    
    // I-20 Requirements
    financialProof: 'Patunay ng financial support',
    bankStatementsSponsors: 'Mga bank statement o sponsor letter',
    passportCopy: 'Kopya ng passport',
    sevisFee: 'Bayad sa SEVIS fee',
    
    // Buttons
    startApplication: 'Simulan ang Aplikasyon',
    completeFafsaBtn: 'Kumpletuhin ang FAFSA',
    selectHousingOptions: 'Piliin ang mga Housing Option',
    requestI20Form: 'Humingi ng I-20 Form',
    
    // Completion
    congratulations: 'Binabati kita!',
    completedAllSteps: 'Natapos mo na ang lahat ng kinakailangang hakbang sa aplikasyon para sa New Hope Christian College!',
    welcomeDeacon: 'Maligayang pagdating sa Deacon family! Excited kami na sumali ka sa aming komunidad.',
    
    // Footer
    questionsContact: 'May mga tanong? Makipag-ugnayan sa aming Admissions Office sa',
    visitUs: 'Bisitahin kami sa',
    
    // Housing Form
    housingPreference: 'Preference sa Tirahan',
    singleDorm: 'Single Dorm Room',
    singleDormDesc: 'Private na kwarto sa residence hall',
    doubleDorm: 'Double Dorm Room',
    doubleDormDesc: 'Shared na kwarto na may isang roommate',
    suiteStyle: 'Suite Style',
    suiteStyleDesc: 'Private na kwarto na may shared common area',
    offCampus: 'Off-Campus Housing',
    offCampusDesc: 'Nakatira nang independent sa labas ng campus',
    
    mealPlanSelectionTitle: 'Pagpili ng Meal Plan',
    unlimitedMeal: 'Unlimited Meal Plan',
    unlimitedMealDesc: 'Unlimited dining hall access + $200 flex dollars',
    meals19: '19 Meals/Week',
    meals19Desc: '19 meals bawat linggo + $150 flex dollars',
    meals14: '14 Meals/Week',
    meals14Desc: '14 meals bawat linggo + $100 flex dollars',
    meals10: '10 Meals/Week',
    meals10Desc: '10 meals bawat linggo + $75 flex dollars',
    commuterPlan: 'Commuter Plan',
    commuterPlanDesc: '50 meals bawat semester + $50 flex dollars',
    noMealPlan: 'Walang Meal Plan',
    noMealPlanDesc: 'Hindi kasali sa meal plan',
    
    laundryFacilities: 'Mga Pasilidad ng Labahan',
    laundryInfo: 'Ang lahat ng residence hall ay may coin-operated laundry facilities. May mga washing machine at dryer sa bawat palapag. Ang kasalukuyang presyo ay $2.00 bawat wash cycle at $2.00 bawat dry cycle. Kailangan ng mga quarter - may mga change machine sa lobby ng bawat residence hall.',
    laundryAcknowledge: 'Kinikilala ko ang impormasyon tungkol sa laundry facility at nauunawaan ko ang mga gastos na kasama.',
    
    foodAllergies: 'Mga Food Allergy at Dietary Restriction',
    foodAllergiesPlaceholder: 'Pakikilala ang mga food allergy, dietary restriction, o special dietary need. Ang aming dining services team ay makikipagtulungan sa inyo upang masiguro ang mga safe meal option.',
    specialCircumstances: 'Mga Special Circumstance o Accommodation',
    specialCircumstancesPlaceholder: 'Pakilarawan ang mga special circumstance, medical need, accessibility requirement, o iba pang accommodation na maaaring kailangan ninyo. Ang impormasyong ito ay tumutulong sa amin na magbigay ng pinakamahusay na living experience.',
    
    submitHousingPrefs: 'Ipasa ang mga Housing Preference',
    housingCompleted: 'Natapos na ang Housing Application',
    editPreferences: 'I-edit ang mga Preference',
    cancel: 'Kanselahin'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};