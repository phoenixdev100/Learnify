import React from 'react';
import { motion } from 'framer-motion';

const Help = () => {
  const faqs = [
    {
      question: 'How do I get started with Learnify?',
      answer: 'Getting started is easy! Simply sign up for a free account, choose your target language, and take a quick placement test. We\'ll then create a personalized learning path just for you.'
    },
    {
      question: 'What languages are available?',
      answer: 'We currently offer courses in over 25 languages, including Spanish, French, German, Mandarin Chinese, Japanese, Korean, Italian, Portuguese, and many more.'
    },
    {
      question: 'How much time should I spend learning each day?',
      answer: 'We recommend spending at least 15-20 minutes per day for optimal learning. Consistency is more important than long, irregular study sessions.'
    },
    {
      question: 'Is Learnify free to use?',
      answer: 'We offer both free and premium features. You can learn the basics of any language for free, while our premium subscription unlocks additional features like offline access, advanced exercises, and personalized coaching.'
    },
    {
      question: 'Can I switch between different languages?',
      answer: 'Yes! You can learn multiple languages simultaneously or switch between them at any time. Your progress in each language is saved separately.'
    },
    {
      question: 'How does the voice recognition feature work?',
      answer: 'Our advanced voice recognition technology analyzes your pronunciation and provides instant feedback. Simply speak into your device\'s microphone during speaking exercises.'
    }
  ];

  const categories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      path: '/help/getting-started'
    },
    {
      title: 'Account & Settings',
      icon: '⚙️',
      path: '/help/account'
    },
    {
      title: 'Learning Features',
      icon: '📚',
      path: '/help/features'
    },
    {
      title: 'Technical Support',
      icon: '🔧',
      path: '/help/support'
    },
    {
      title: 'Billing & Subscription',
      icon: '💳',
      path: '/help/billing'
    },
    {
      title: 'Community Guidelines',
      icon: '🤝',
      path: '/help/community'
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions or get in touch with our support team
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button className="absolute right-3 top-3 text-gray-400">
                🔍
              </button>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {categories.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <a href={category.path} className="text-primary hover:underline">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still need help?
            </h2>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to assist you
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;
