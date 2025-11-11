/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Use class-based dark mode
  
  theme: {
    extend: {
      // COLORS - Exact mapping from src/helpers/style.ts
      // These will be used with CSS variables for dynamic theming
      colors: {
        // Light theme colors (from lightTheme)
        'light-bg': 'rgb(246, 246, 246)',
        'light-text': '#a1a1aa',
        'light-primary': '#FFFFFF',
        'light-secondary': '#000',
        'light-tertiary': 'rgb(255, 255, 255, 1)',
        'light-quaternary': 'rgb(100, 107, 128)',
        'light-text-sub': 'rgb(82, 82, 91, 1)',
        'light-text-color': 'rgb(82, 82, 91, 1)',
        'light-text-heading': 'rgb(39, 39, 42, 1)',
        'light-border-primary': 'rgb(34, 37, 49)',
        
        // Dark theme colors (from darkTheme)
        'dark-bg': 'rgb(0, 0, 0, 1)',
        'dark-primary': '#18181b',
        'dark-secondary': '#000',
        'dark-tertiary': 'rgb(24, 24, 27, 1)',
        'dark-quaternary': 'rgb(100, 107, 128)',
        'dark-text-color': 'rgb(161, 161, 170, 1)',
        'dark-text-heading': 'rgb(244, 244, 245, 1)',
        'dark-border-primary': 'rgb(34, 37, 49)',
        
        // CSS variable-based colors for dynamic theming
        'bg': 'rgb(var(--color-bg) / <alpha-value>)',
        'text': 'rgb(var(--color-text) / <alpha-value>)',
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--color-tertiary) / <alpha-value>)',
        'quaternary': 'rgb(var(--color-quaternary) / <alpha-value>)',
        'text-sub': 'rgb(var(--color-text-sub) / <alpha-value>)',
        'text-heading': 'rgb(var(--color-text-heading) / <alpha-value>)',
        'border-primary': 'rgb(var(--color-border-primary) / <alpha-value>)',
      },
      
      // FONTS - Exact system font stack from GlobalStyle
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      
      // FONT SIZES - Exact mapping from GlobalStyle
      fontSize: {
        // p tags: 1.7rem = 17px with base 10px
        'body': ['1.7rem', { lineHeight: '2.7rem', fontWeight: '300' }],
        // h1 mobile: 3.5rem = 35px
        'h1-mobile': ['3.5rem', { lineHeight: '4.5rem', letterSpacing: '-0.025em', fontWeight: '700' }],
        // h1 tablet+: 4.5rem = 45px
        'h1-desktop': ['4.5rem', { lineHeight: '6rem', letterSpacing: '-0.025em', fontWeight: '700' }],
      },
      
      // BREAKPOINTS - Exact mapping from src/helpers/device.ts
      screens: {
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'laptop-l': '1440px',
        'desktop': '2560px',
      },
      
      // BORDERS
      borderColor: {
        'border-primary': 'rgb(var(--color-border-primary) / <alpha-value>)',
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'), // For markdown content (articles/projects)
  ],
};
