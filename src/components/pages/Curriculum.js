import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Curriculum = () => {
  const languages = [
    {
      name: 'English',
      flag: '🇬🇧',
      levels: [
        {
          name: 'Beginner (A1)',
          topics: ['Basic Greetings', 'Numbers', 'Colors', 'Family Members', 'Simple Present Tense'],
          duration: '3-4 months'
        },
        {
          name: 'Elementary (A2)',
          topics: ['Daily Routines', 'Past Tense', 'Future Plans', 'Shopping', 'Weather'],
          duration: '4-5 months'
        },
        {
          name: 'Intermediate (B1)',
          topics: ['Travel', 'Work Life', 'Current Events', 'Culture', 'Complex Grammar'],
          duration: '5-6 months'
        }
      ]
    },
    {
      name: 'Spanish',
      flag: '🇪🇸',
      levels: [
        {
          name: 'Beginner (A1)',
          topics: ['Saludos', 'Números', 'Colores', 'La Familia', 'Presente Simple'],
          duration: '3-4 months'
        },
        {
          name: 'Elementary (A2)',
          topics: ['Rutina Diaria', 'Pasado', 'Planes Futuros', 'Compras', 'El Clima'],
          duration: '4-5 months'
        },
        {
          name: 'Intermediate (B1)',
          topics: ['Viajes', 'Trabajo', 'Actualidad', 'Cultura', 'Gramática Avanzada'],
          duration: '5-6 months'
        }
      ]
    },
    {
      name: 'Mandarin',
      flag: '🇨🇳',
      levels: [
        {
          name: 'Beginner (HSK 1)',
          topics: ['Basic Characters', 'Tones', 'Numbers', 'Greetings', 'Family'],
          duration: '4-5 months'
        },
        {
          name: 'Elementary (HSK 2)',
          topics: ['Daily Life', 'Time', 'Shopping', 'Transportation', 'Weather'],
          duration: '5-6 months'
        },
        {
          name: 'Intermediate (HSK 3)',
          topics: ['Work', 'Education', 'Culture', 'Current Events', 'Advanced Characters'],
          duration: '6-7 months'
        }
      ]
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Language Learning Curriculum</h1>
            <p className="text-xl text-gray-600">
              Comprehensive courses designed for effective language acquisition
            </p>
          </div>

          <div className="space-y-12">
            {languages.map((language) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{language.flag}</span>
                      <h2 className="text-2xl font-bold">{language.name}</h2>
                    </div>
                    <Link
                      to={`/lessons?language=${language.name.toLowerCase()}`}
                      className="px-6 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
                    >
                      Start Learning
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {language.levels.map((level) => (
                      <div
                        key={level.name}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {level.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Duration: {level.duration}
                        </p>
                        <ul className="space-y-2">
                          {level.topics.map((topic) => (
                            <li
                              key={topic}
                              className="text-gray-600 flex items-center"
                            >
                              <span className="mr-2">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose your language and level, and begin your journey to fluency with our
              structured curriculum and interactive lessons.
            </p>
            <Link
              to="/lessons"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore All Lessons
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Curriculum;
