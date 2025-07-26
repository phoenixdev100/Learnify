import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('progress');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    level: 'Advanced Learner',
    joinDate: 'January 2025',
    totalXP: '2,500',
    avatar: '👤',
    email: 'john.doe@example.com',
    bio: 'Passionate language learner and world traveler',
    nativeLanguage: 'English',
    learningGoal: 'Professional Development',
  });

  const learningStats = {
    streak: 15,
    hoursLearned: 45,
    lessonsCompleted: 120,
    wordsLearned: 750,
    accuracy: 92,
    dailyGoal: 30,
    minutesToday: 25,
  };

  const languages = [
    { 
      name: 'English', 
      level: 'Advanced', 
      progress: 85, 
      flag: '🇬🇧',
      recentActivity: [
        { type: 'lesson', name: 'Business English', score: 95, date: '2 hours ago' },
        { type: 'practice', name: 'Phrasal Verbs', score: 88, date: '1 day ago' },
      ]
    },
    { 
      name: 'Spanish', 
      level: 'Intermediate', 
      progress: 65, 
      flag: '🇪🇸',
      recentActivity: [
        { type: 'lesson', name: 'Past Tense', score: 82, date: '3 days ago' },
        { type: 'practice', name: 'Common Phrases', score: 78, date: '5 days ago' },
      ]
    },
    { 
      name: 'Mandarin', 
      level: 'Beginner', 
      progress: 25, 
      flag: '🇨🇳',
      recentActivity: [
        { type: 'lesson', name: 'Basic Characters', score: 70, date: '1 week ago' },
        { type: 'practice', name: 'Numbers', score: 85, date: '1 week ago' },
      ]
    }
  ];

  const achievements = [
    { name: 'Polyglot in Training', icon: '🌟', description: 'Started learning 3 languages', date: '2 weeks ago' },
    { name: 'Perfect Streak', icon: '🔥', description: '15 days learning streak', date: '1 day ago' },
    { name: 'Vocabulary Master', icon: '📚', description: 'Learned 750 words', date: '3 days ago' },
    { name: 'Grammar Guru', icon: '✍️', description: '90%+ accuracy in grammar exercises', date: '1 week ago' },
    { name: 'Early Bird', icon: '🌅', description: 'Completed 5 lessons before 9 AM', date: '5 days ago' },
    { name: 'Weekend Warrior', icon: '⚔️', description: 'Practiced for 4 hours on weekend', date: '2 days ago' },
  ];

  const upcomingGoals = [
    { name: 'Complete Spanish Course', progress: 65, target: 'End of February' },
    { name: 'Learn 1000 Words', progress: 75, target: 'Next Month' },
    { name: '30-Day Streak', progress: 50, target: '15 Days Left' },
  ];

  const renderProgressBar = (progress, color = 'primary') => (
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`h-full bg-${color}`}
      />
    </div>
  );

  const tabs = [
    { id: 'progress', label: 'Progress', icon: '📊' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'goals', label: 'Goals', icon: '🎯' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-6xl bg-white/10 p-6 rounded-full backdrop-blur-sm relative group cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                {typeof userInfo.avatar === 'string' && userInfo.avatar.startsWith('data:image') ? (
                  <img
                    src={userInfo.avatar}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-6xl">{userInfo.avatar}</span>
                )}
                <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm">Edit Profile</span>
                </div>
              </motion.div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold">{userInfo.name}</h1>
                <p className="text-white/80">{userInfo.level}</p>
                <p className="text-white/60">Member since {userInfo.joinDate}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-3xl font-bold">{userInfo.totalXP} XP</div>
              <div className="flex items-center mt-2">
                <span className="text-2xl mr-2">🔥</span>
                <span className="text-xl">{learningStats.streak} Day Streak</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                ✏️ Edit Profile
              </motion.button>
            </div>
          </div>
          
          {/* Bio Section */}
          <div className="mt-6 max-w-2xl">
            <p className="text-white/90">{userInfo.bio}</p>
            <div className="flex gap-4 mt-4">
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-white/60">Native: </span>
                <span className="text-white">{userInfo.nativeLanguage}</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-white/60">Goal: </span>
                <span className="text-white">{userInfo.learningGoal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Hours Learned', value: learningStats.hoursLearned, icon: '⏱️' },
            { label: 'Lessons Completed', value: learningStats.lessonsCompleted, icon: '📚' },
            { label: 'Words Learned', value: learningStats.wordsLearned, icon: '📝' },
            { label: 'Accuracy', value: `${learningStats.accuracy}%`, icon: '🎯' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-xl shadow-sm"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Daily Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Today's Progress</h3>
            <div className="text-sm text-gray-600">
              {learningStats.minutesToday} / {learningStats.dailyGoal} minutes
            </div>
          </div>
          {renderProgressBar((learningStats.minutesToday / learningStats.dailyGoal) * 100)}
        </div>

        {/* Tabs Navigation */}
        <div className="flex space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{language.flag}</span>
                      <div>
                        <h3 className="font-semibold">{language.name}</h3>
                        <p className="text-sm text-gray-600">{language.level}</p>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-primary">{language.progress}%</div>
                  </div>
                  {renderProgressBar(language.progress)}
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Recent Activity</h4>
                    {language.recentActivity.map((activity, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2">
                        <div>
                          <div className="font-medium">{activity.name}</div>
                          <div className="text-sm text-gray-600">{activity.date}</div>
                        </div>
                        <div className="text-primary font-medium">{activity.score}%</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h3 className="font-semibold mb-2">{achievement.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                  <p className="text-xs text-gray-500">{achievement.date}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Goals Tab */}
          {activeTab === 'goals' && (
            <div className="space-y-6">
              {upcomingGoals.map((goal, index) => (
                <motion.div
                  key={goal.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-semibold">{goal.name}</h3>
                      <p className="text-sm text-gray-600">Target: {goal.target}</p>
                    </div>
                    <div className="text-xl font-bold text-primary">{goal.progress}%</div>
                  </div>
                  {renderProgressBar(goal.progress)}
                </motion.div>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white rounded-xl font-medium"
                onClick={() => {/* Add new goal logic */}}
              >
                + Add New Goal
              </motion.button>
            </div>
          )}
        </div>
      </div>
      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditing && (
          <EditProfile
            userInfo={userInfo}
            onSave={(updatedInfo) => {
              setUserInfo(updatedInfo);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
