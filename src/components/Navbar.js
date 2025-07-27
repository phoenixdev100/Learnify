// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';

const Logo = () => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center space-x-2 cursor-pointer"
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
);

const ProfileIcon = () => (
  <svg className="w-6 h-6 text-text-primary dark:text-text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const languageFlags = {
  english: '🇺🇸',
  spanish: '🇪🇸',
  french: '🇫🇷',
  german: '🇩🇪',
  japanese: '🇯🇵'
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-lg shadow-lg' : 'bg-surface dark:bg-surface-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/lessons"
                className={`relative px-3 py-2 text-text-primary dark:text-text-primary-dark font-medium transition-colors duration-200
                  hover:text-primary dark:hover:text-primary-dark group ${
                    location.pathname === '/lessons' ? 'text-primary dark:text-primary-dark' : ''
                  }`}
              >
                {t('lessons')}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-primary-dark transform origin-left transition-transform duration-300 ${
                  location.pathname === '/lessons' ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}></span>
              </Link>
              <Link
                to="/courses"
                className={`relative px-3 py-2 text-text-primary dark:text-text-primary-dark font-medium transition-colors duration-200
                  hover:text-primary dark:hover:text-primary-dark group ${
                    location.pathname === '/courses' ? 'text-primary dark:text-primary-dark' : ''
                  }`}
              >
                {t('courses')}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-primary-dark transform origin-left transition-transform duration-300 ${
                  location.pathname === '/courses' ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}></span>
              </Link>
              <Link
                to="/practice"
                className={`relative px-3 py-2 text-text-primary dark:text-text-primary-dark font-medium transition-colors duration-200
                  hover:text-primary dark:hover:text-primary-dark group ${
                    location.pathname === '/practice' ? 'text-primary dark:text-primary-dark' : ''
                  }`}
              >
                {t('practice')}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-primary-dark transform origin-left transition-transform duration-300 ${
                  location.pathname === '/practice' ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}></span>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-text-primary dark:text-text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-colors duration-200"
              >
                <span className="text-xl">{languageFlags[currentLanguage]}</span>
                <span className="font-medium">{t(currentLanguage)}</span>
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 py-2 w-48 bg-surface dark:bg-surface-dark rounded-xl shadow-xl border border-border dark:border-border-dark"
                  >
                    {Object.keys(languageFlags).map((lang) => (
                      <motion.button
                        key={lang}
                        whileHover={{ x: 6 }}
                        onClick={() => {
                          setCurrentLanguage(lang);
                          setIsOpen(false);
                        }}
                        className={`flex items-center w-full px-4 py-2 text-sm ${
                          currentLanguage === lang 
                            ? 'text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/10' 
                            : 'text-text-primary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary-dark'
                        }`}
                      >
                        <span className="text-xl mr-2">{languageFlags[lang]}</span>
                        {t(lang)}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            {currentUser ? (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-text-primary dark:text-text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-colors duration-200"
                >
                  <ProfileIcon />
                  <span className="font-medium">{currentUser.name}</span>
                  <svg className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 py-2 w-48 bg-surface dark:bg-surface-dark rounded-xl shadow-xl border border-border dark:border-border-dark"
                    >
                      <motion.div
                        whileHover={{ x: 6 }}
                        className="px-4 py-2 text-sm text-text-secondary dark:text-text-secondary-dark border-b border-border dark:border-border-dark"
                      >
                        {currentUser.email}
                      </motion.div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-text-primary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-colors duration-200"
                      >
                        {t('profile')}
                      </Link>
                      <motion.button
                        whileHover={{ x: 6 }}
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors duration-200"
                      >
                        {t('logout')}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-text-primary dark:text-text-primary-dark font-medium hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
                  >
                    {t('login')}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/register"
                    className="px-4 py-2 rounded-lg bg-primary dark:bg-primary-dark text-white font-medium hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors duration-200 shadow-lg shadow-primary/20 dark:shadow-primary-dark/20"
                  >
                    {t('register')}
                  </Link>
                </motion.div>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-text-primary dark:text-text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface dark:bg-surface-dark border-t border-border dark:border-border-dark"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/lessons"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  location.pathname === '/lessons'
                    ? 'text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/10'
                    : 'text-text-primary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10'
                }`}
              >
                {t('lessons')}
              </Link>
              <Link
                to="/courses"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  location.pathname === '/courses'
                    ? 'text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/10'
                    : 'text-text-primary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10'
                }`}
              >
                {t('courses')}
              </Link>
              <Link
                to="/practice"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  location.pathname === '/practice'
                    ? 'text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/10'
                    : 'text-text-primary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10'
                }`}
              >
                {t('practice')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;