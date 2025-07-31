import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Learnify</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Learnify is a revolutionary language learning platform that combines cutting-edge 
              technology with proven learning methodologies to make language acquisition 
              more effective and enjoyable.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To break down language barriers and foster global communication by making
                  language learning accessible, effective, and enjoyable for everyone.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To create a world where language is no longer a barrier to understanding,
                  connection, and opportunity.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Continuously improving our platform with the latest technology and research.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-gray-600">
                    Making quality language education available to everyone, everywhere.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-600">
                    Building connections between learners and native speakers worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, Learnify emerged from a simple observation: traditional
                language learning methods weren't keeping up with the needs of modern learners.
                Our team of language experts, educators, and technologists came together to
                create a more effective and engaging way to learn languages.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve millions of learners worldwide, offering courses
                in over 25 languages. Our adaptive learning technology, combined with our
                vibrant community of learners and native speakers, creates an immersive
                learning environment that delivers real results.
              </p>
            </div>

            <div className="bg-primary/5 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Join Our Journey</h2>
              <p className="text-gray-600 mb-6">
                Whether you're learning a new language for travel, business, or personal
                growth, Learnify is here to support you every step of the way. Join our
                community of millions of learners and start your learning today.
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Start Learning Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
