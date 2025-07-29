import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t('company'),
      links: [
        { name: t('about'), href: '/about' },
        { name: t('careers'), href: '/careers' },
        { name: t('contact'), href: '/contact' },
      ],
    },
    {
      title: t('resources'),
      links: [
        { name: t('blog'), href: '/blog' },
        { name: t('guides'), href: '/guides' },
        { name: t('help'), href: '/help' },
      ],
    },
    {
      title: t('legal'),
      links: [
        { name: t('privacy'), href: '/privacy' },
        { name: t('terms'), href: '/terms' },
        { name: t('cookies'), href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-surface dark:bg-surface-dark border-t border-border dark:border-border-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 xl:gap-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Learnify
              </span>
            </motion.div>
            <p className="text-text-secondary dark:text-text-secondary-dark max-w-sm">
              {t('footerDescription')}
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-text-primary dark:text-text-primary-dark uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        to={link.href}
                        className="text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border dark:border-border-dark">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-text-secondary dark:text-text-secondary-dark text-sm">
              &copy; {new Date().getFullYear()} Learnify. {t('allRightsReserved')}
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-8 max-w-md mx-auto">
            <h3 className="text-sm font-semibold text-text-primary dark:text-text-primary-dark uppercase tracking-wider mb-4 text-center">
              {t('subscribeNewsletter')}
            </h3>
            <form className="flex">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder={t('enterEmail')}
                className="flex-1 px-4 py-2 rounded-l-lg bg-background dark:bg-background-dark border border-border dark:border-border-dark focus:outline-none focus:border-primary dark:focus:border-primary-dark text-text-primary dark:text-text-primary-dark"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-2 bg-primary dark:bg-primary-dark text-white font-medium rounded-r-lg hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors duration-200 shadow-lg shadow-primary/20 dark:shadow-primary-dark/20"
              >
                {t('subscribe')}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
