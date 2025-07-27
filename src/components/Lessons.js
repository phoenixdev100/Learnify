import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const initialLessons = [
  {
    id: 1,
    title: 'Basic Greetings',
    language: 'English',
    level: 'Beginner',
    duration: '15 min',
    progress: 0,
    content: [
      { type: 'text', content: 'Hello - A basic greeting' },
      { type: 'text', content: 'Hi - An informal greeting' },
      { type: 'text', content: 'Good morning - A morning greeting' },
    ]
  },
  {
    id: 2,
    title: 'Family Members',
    language: 'Spanish',
    level: 'Beginner',
    duration: '20 min',
    progress: 0,
    content: [
      { type: 'text', content: 'Madre - Mother' },
      { type: 'text', content: 'Padre - Father' },
      { type: 'text', content: 'Hermano/Hermana - Brother/Sister' },
    ]
  },
  {
    id: 3,
    title: 'Numbers 1-10',
    language: 'Mandarin',
    level: 'Beginner',
    duration: '25 min',
    progress: 0,
    content: [
      { type: 'text', content: '一 (yī) - One' },
      { type: 'text', content: '二 (èr) - Two' },
      { type: 'text', content: '三 (sān) - Three' },
    ]
  },
];

const LessonCard = ({ lesson, onStart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onStart}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{lesson.title}</h3>
          <p className="text-gray-600 mt-1">{lesson.language}</p>
        </div>
        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
          {lesson.level}
        </span>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{lesson.duration}</span>
          <span>{lesson.progress}% Complete</span>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${lesson.progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <motion.button
        className="btn-primary w-full mt-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {lesson.progress === 0 ? 'Start Lesson' : 'Continue Lesson'}
      </motion.button>
    </motion.div>
  );
};

const LessonContent = ({ lesson, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleNext = () => {
    if (currentStep < lesson.content.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{lesson.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="mb-8">
          <div className="text-lg mb-4">
            {lesson.content[currentStep].content}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / lesson.content.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            className="btn-secondary"
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="btn-primary"
          >
            {currentStep === lesson.content.length - 1 ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Lessons = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lessons, setLessons] = useState(initialLessons);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const navigate = useNavigate();

  const filteredLessons = lessons.filter(lesson => {
    if (filter !== 'all' && lesson.language.toLowerCase() !== filter.toLowerCase()) {
      return false;
    }
    if (searchQuery && !lesson.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const handleLessonComplete = () => {
    setLessons(prevLessons =>
      prevLessons.map(lesson =>
        lesson.id === activeLessonId
          ? { ...lesson, progress: 100 }
          : lesson
      )
    );
    setActiveLessonId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Available Lessons</h1>
          <p className="mt-2 text-gray-600">Start your language learning journey today</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <select
            className="rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Languages</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="mandarin">Mandarin</option>
          </select>
          <input
            type="text"
            placeholder="Search lessons..."
            className="rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onStart={() => setActiveLessonId(lesson.id)}
          />
        ))}
      </div>

      {activeLessonId && (
        <LessonContent
          lesson={lessons.find(l => l.id === activeLessonId)}
          onClose={() => setActiveLessonId(null)}
          onComplete={handleLessonComplete}
        />
      )}
    </div>
  );
};

export default Lessons;
