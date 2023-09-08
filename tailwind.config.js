/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '600px': {
        min: '600px'
      },
      '601px': {
        max: '601px'
      },
      '851px': {
        min: '850px'
      },
      '850px': {
        max: '850px'
      }
    },
    extend: {
      colors: {
        'primary': '#F6F5FD',
        'secondary': '#0992EE',
        'dark': '#1F1F29',
        'gray-highlight': '#969696',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      backgroundColor: {
        'dark-modal': 'rgba(31, 31, 41, .7)'
      },
      fontSize: {
        '12px': '.75rem',
        '15px': '.9375rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '32px': '2rem',
      },
      fontFamily: {
        'lexendRegular': ['lexendRegular', 'sans-serif'],
        'lexendMedium': ['lexendMedium', 'sans-serif'],
        'lexendSemiBold': ['lexendSemiBold', 'sans-serif']
      },
      width: {
        '3rem': '3rem',
        '4rem': '4rem',
        'banner': '35rem'
      },
      height: {
        'banner': '35rem'
      },
      borderRadius: {
        '50%': '50%'
      },
    },
  },
  plugins: [],
}