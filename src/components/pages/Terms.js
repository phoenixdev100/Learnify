import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing or using Learnify, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.`
    },
    {
      title: 'User Accounts',
      content: `• You must be at least 13 years old to use this service
        • You are responsible for maintaining the security of your account
        • You are responsible for all activities under your account
        • You must not share your account credentials
        • You must provide accurate and complete information`
    },
    {
      title: 'Subscription and Payments',
      content: `• Some features require a paid subscription
        • Payments are processed securely through our payment providers
        • Subscriptions auto-renew unless cancelled
        • Refunds are provided according to our refund policy
        • Prices may change with notice`
    },
    {
      title: 'User Content',
      content: `• You retain rights to content you create
        • You grant us license to use your content
        • You must not post inappropriate or illegal content
        • We may remove content that violates our policies
        • You are responsible for your content`
    },
    {
      title: 'Intellectual Property',
      content: `• Our content is protected by copyright and other laws
        • You may not copy or distribute our content
        • You may not modify or create derivative works
        • Our trademarks may not be used without permission
        • We respect others' intellectual property rights`
    },
    {
      title: 'Prohibited Activities',
      content: `You agree not to:
        • Violate any laws or regulations
        • Impersonate others or provide false information
        • Interfere with the service's operation
        • Attempt to gain unauthorized access
        • Use the service for commercial purposes without permission`
    },
    {
      title: 'Termination',
      content: `• We may terminate or suspend your account at any time
        • You may terminate your account at any time
        • Termination may result in deletion of your data
        • Some terms survive termination
        • We are not liable for termination`
    },
    {
      title: 'Disclaimer of Warranties',
      content: `• Service is provided "as is"
        • We do not guarantee uninterrupted service
        • We are not responsible for third-party content
        • Results may vary between users
        • We do not guarantee language proficiency`
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">
              Last updated: January 27, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Please read these Terms of Service carefully before using Learnify. These terms govern
              your use of our platform and services.
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
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul className="text-gray-600">
                <li>Email: legal@Learnify.com</li>
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

export default Terms;
