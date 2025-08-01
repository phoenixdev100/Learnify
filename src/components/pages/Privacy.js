import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:
        • Personal information (name, email address, etc.)
        • Account credentials
        • Learning preferences and progress data
        • Communication data when you contact us
        • Payment information when you subscribe`
    },
    {
      title: 'How We Use Your Information',
      content: `We use the collected information to:
        • Provide and improve our services
        • Personalize your learning experience
        • Process your transactions
        • Send you updates and communications
        • Analyze and enhance our platform's performance`
    },
    {
      title: 'Information Sharing',
      content: `We do not sell your personal information. We may share your information with:
        • Service providers who assist in our operations
        • Partners who help provide learning content
        • Legal authorities when required by law
        • Other users (only if you choose to share)`
    },
    {
      title: 'Data Security',
      content: `We implement appropriate security measures to protect your information:
        • Encryption of sensitive data
        • Regular security assessments
        • Access controls and authentication
        • Secure data storage and transmission`
    },
    {
      title: 'Your Rights',
      content: `You have the right to:
        • Access your personal information
        • Correct inaccurate data
        • Request deletion of your data
        • Opt-out of marketing communications
        • Export your data`
    },
    {
      title: 'Cookies and Tracking',
      content: `We use cookies and similar technologies to:
        • Remember your preferences
        • Analyze usage patterns
        • Improve our services
        • Provide personalized content
        You can control cookie settings in your browser.`
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: January 27, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              At Learnify, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our platform.
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us About Privacy
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="text-gray-600">
                <li>Email: privacy@Learnify.com</li>
                <li>Address: 123 Language Street, Learning City, CA 94043</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
