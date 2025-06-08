/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#6366F1'
        },
        secondary: {
          DEFAULT: '#0EA5E9',
          dark: '#38BDF8'
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#FBBF24'
        },
        background: {
          DEFAULT: '#F3F4F6',
          dark: '#111827'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1F2937'
        },
        text: {
          primary: {
            DEFAULT: '#111827',
            dark: '#F9FAFB'
          },
          secondary: {
            DEFAULT: '#4B5563',
            dark: '#9CA3AF'
          }
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#374151'
        }
      }
    },
  },
  plugins: [],
}
