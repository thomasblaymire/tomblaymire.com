/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      fontSize: {
        body: ['1.7rem', { lineHeight: '2.7rem', fontWeight: '300' }],
        'h1-mobile': [
          '3.5rem',
          { lineHeight: '4.5rem', letterSpacing: '-0.025em', fontWeight: '700' },
        ],
        'h1-desktop': [
          '4.5rem',
          { lineHeight: '6rem', letterSpacing: '-0.025em', fontWeight: '700' },
        ],
      },

      screens: {
        tablet: '768px',
        laptop: '1024px',
        'laptop-l': '1440px',
      },
    },
  },
};
