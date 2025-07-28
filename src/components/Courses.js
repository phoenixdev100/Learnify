import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const languageCourses = [
  {
    id: 'english',
    title: 'English',
    flag: '🇺🇸',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Business', 'Academic'],
    description: 'Learn English with our comprehensive courses designed for all levels.',
    features: ['Native pronunciation', 'Business communication', 'Academic writing', 'IELTS/TOEFL preparation']
  },
  {
    id: 'spanish',
    title: 'Spanish',
    flag: '🇪🇸',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Conversational', 'Cultural'],
    description: 'Master Spanish with authentic materials from Spain and Latin America.',
    features: ['Regional dialects', 'Cultural insights', 'Practical conversations', 'Spanish for travel']
  },
  {
    id: 'french',
    title: 'French',
    flag: '🇫🇷',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Professional', 'Literature'],
    description: 'Explore French language and culture through immersive learning.',
    features: ['Pronunciation focus', 'Cultural studies', 'Literary appreciation', 'DELF/DALF preparation']
  },
  {
    id: 'german',
    title: 'German',
    flag: '🇩🇪',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Technical', 'Professional'],
    description: 'Learn German for academic, professional, or personal growth.',
    features: ['Technical vocabulary', 'Business German', 'Academic preparation', 'Goethe-Institut aligned']
  },
  {
    id: 'japanese',
    title: 'Japanese',
    flag: '🇯🇵',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Business', 'Culture'],
    description: 'Master Japanese language and culture with our structured approach.',
    features: ['Kanji learning', 'Business etiquette', 'Cultural immersion', 'JLPT preparation']
  },
  {
    id: 'mandarin',
    title: 'Mandarin',
    flag: '🇨🇳',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Business', 'HSK Prep'],
    description: 'Learn Mandarin Chinese with our comprehensive HSK-aligned courses.',
    features: ['Character writing', 'Tone mastery', 'HSK preparation', 'Business Chinese']
  },
  {
    id: 'korean',
    title: 'Korean',
    flag: '🇰🇷',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'K-Culture', 'Business'],
    description: 'Explore Korean language and modern culture with our engaging courses.',
    features: ['Hangul mastery', 'K-pop & drama', 'Business Korean', 'TOPIK preparation']
  },
  {
    id: 'italian',
    title: 'Italian',
    flag: '🇮🇹',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Culture', 'Arts'],
    description: 'Experience Italian language, culture, and arts with our immersive courses.',
    features: ['Cultural studies', 'Art & music', 'Culinary Italian', 'Italian for travel']
  },
  {
    id: 'russian',
    title: 'Russian',
    flag: '🇷🇺',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Literature', 'Business'],
    description: 'Learn Russian language with focus on practical communication and cultural understanding.',
    features: ['Cyrillic mastery', 'Literature studies', 'Business Russian', 'TORFL preparation']
  },
  {
    id: 'arabic',
    title: 'Arabic',
    flag: '🇦🇪',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Classical', 'Modern Standard'],
    description: 'Master Modern Standard Arabic and explore the rich Arabic culture.',
    features: ['Script writing', 'Dialect overview', 'Classical Arabic', 'Business Arabic']
  },
  {
    id: 'portuguese',
    title: 'Portuguese',
    flag: '🇵🇹',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Brazilian', 'European'],
    description: 'Learn Portuguese with focus on both European and Brazilian variants.',
    features: ['Regional accents', 'Business Portuguese', 'Cultural immersion', 'CELPE-Bras prep']
  },
  {
    id: 'hindi',
    title: 'Hindi',
    flag: '🇮🇳',
    levels: ['Beginner', 'Intermediate', 'Advanced', 'Cultural', 'Professional'],
    description: 'Learn Hindi language and explore Indian culture through comprehensive courses.',
    features: ['Devanagari script', 'Cultural insights', 'Bollywood & media', 'Business Hindi']
  }
];

const elearningCourses = [
  {
    id: 'udemy',
    title: 'Udemy Courses',
    logo: '📚',
    categories: ['Web Development', 'Data Science', 'Business', 'Design', 'Marketing'],
    description: 'Access thousands of courses from expert instructors worldwide.',
    features: ['Lifetime access', 'Certificate of completion', 'Practice exercises', '30-day money back']
  },
  {
    id: 'coursera',
    title: 'Coursera Programs',
    logo: '🎓',
    categories: ['University courses', 'Professional certificates', 'Specializations', 'Degrees'],
    description: 'Learn from top universities and companies through structured programs.',
    features: ['University partnerships', 'Peer-graded assignments', 'Financial aid', 'Verified certificates']
  },
  {
    id: 'edx',
    title: 'edX Learning',
    logo: '🌟',
    categories: ['Computer Science', 'Business & Management', 'Engineering', 'Humanities'],
    description: 'Take courses from prestigious institutions and earn recognized credentials.',
    features: ['Verified certificates', 'University credit', 'Self-paced learning', 'Expert instruction']
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Learning',
    logo: '💼',
    categories: ['Professional Development', 'Software Skills', 'Creative Tools', 'Business Skills'],
    description: 'Enhance your professional skills with expert-led courses.',
    features: ['Industry experts', 'Professional network integration', 'Skills assessments', 'Personalized learning']
  },
  {
    id: 'skillshare',
    title: 'Skillshare',
    logo: '🎨',
    categories: ['Creative Arts', 'Design', 'Photography', 'Writing', 'Animation'],
    description: 'Learn creative skills from industry professionals and working artists.',
    features: ['Project-based learning', 'Creative community', 'Workshop format', 'Professional tools']
  },
  {
    id: 'pluralsight',
    title: 'Pluralsight',
    logo: '💻',
    categories: ['Software Development', 'IT Ops', 'Data Professional', 'Security', 'Cloud'],
    description: 'Master the latest technology skills with expert-led video courses.',
    features: ['Skill assessments', 'Learning paths', 'Interactive courses', 'Course discussions']
  },
  {
    id: 'masterclass',
    title: 'MasterClass',
    logo: '🎥',
    categories: ['Arts & Entertainment', 'Writing', 'Culinary Arts', 'Business', 'Sports'],
    description: 'Learn from world-renowned instructors in various fields of expertise.',
    features: ['Celebrity instructors', 'High production value', 'Comprehensive workbooks', 'Mobile access']
  },
  {
    id: 'datacamp',
    title: 'DataCamp',
    logo: '📊',
    categories: ['Data Science', 'Programming', 'Machine Learning', 'Statistics', 'Visualization'],
    description: 'Learn data science through interactive courses and real-world projects.',
    features: ['Interactive exercises', 'Real-world projects', 'Career tracks', 'Mobile practice']
  }
];

const CourseCard = ({ course, type }) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 dark:border-gray-700"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-3xl">{type === 'language' ? course.flag : course.logo}</span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {course.title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {course.description}
        </p>
        
        <div className="mb-4 flex-grow">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            {type === 'language' ? t('availableLevels') : t('categories')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {(type === 'language' ? course.levels : course.categories).map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            {t('features')}
          </h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {course.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState('language');
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('availableCourses')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t('coursesSubtitle')}
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-white dark:bg-gray-800">
          <button
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'language'
                ? 'bg-primary text-white dark:text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark'
            }`}
            onClick={() => setActiveTab('language')}
          >
            {t('languageCourses')}
          </button>
          <button
            className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'elearning'
                ? 'bg-primary text-white dark:text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark'
            }`}
            onClick={() => setActiveTab('elearning')}
          >
            {t('elearningPlatforms')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activeTab === 'language'
          ? languageCourses.map((course) => (
              <CourseCard key={course.id} course={course} type="language" />
            ))
          : elearningCourses.map((course) => (
              <CourseCard key={course.id} course={course} type="elearning" />
            ))}
      </div>
    </div>
  );
};

export default Courses;
