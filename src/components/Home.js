import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Home = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: t('interactiveFeature'),
      description: t('interactiveDescription'),
      icon: "🎯",
      color: "from-primary to-secondary"
    },
    {
      title: t('adaptiveFeature'),
      description: t('adaptiveDescription'),
      icon: "🧠",
      color: "from-secondary to-accent"
    },
    {
      title: t('communityFeature'),
      description: t('communityDescription'),
      icon: "👥",
      color: "from-accent to-primary"
    }
  ];

  const stats = [
    { value: '20K+', label: t('activeUsers') },
    { value: '10+', label: t('languagesOffered') },
    { value: '1M+', label: t('lessonsCompleted') },
    { value: '98%', label: t('satisfactionRate') }
  ];

  const testimonials = [
    {
      content: t('testimonial1'),
      author: 'Sarah Johnson',
      role: t('student'),
      avatar: '👩🏻‍🎓'
    },
    {
      content: t('testimonial2'),
      author: 'Michael Chen',
      role: t('professional'),
      avatar: '👨🏻‍💼'
    },
    {
      content: t('testimonial3'),
      author: 'Emma Davis',
      role: t('teacher'),
      avatar: '👩🏻‍🏫'
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-text-primary dark:text-text-primary-dark mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-text-secondary dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/register" className="btn-primary">
                {t('getStarted')}
              </Link>
              <Link to="/about" className="btn-secondary">
                {t('learnMore')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
              {t('whyChooseUs')}
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
              {t('featuresSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card p-6"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary dark:text-text-secondary-dark">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary dark:text-text-secondary-dark">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary dark:text-text-primary-dark text-center mb-16">
            {t('testimonials')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card p-6"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-text-secondary dark:text-text-secondary-dark mb-4">
                  "{testimonial.content}"
                </p>
                <div className="text-text-primary dark:text-text-primary-dark font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-text-secondary dark:text-text-secondary-dark">
                  {testimonial.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <Link to="/register" className="btn-primary">
            {t('joinNow')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;