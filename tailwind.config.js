/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        gradient: {
          100: '#5857B5',
          200: '#F62974',
          300: '#F67941',
        },
        pink: '#F62974',
        white: '#FFFFFF',
        black: '#000000',
        grey: '#737373',
        darkGrey: '#1E1E1E'
      },
      fontSize: {
        '2xl': ['35px', { lineHeight: '0.9' }],
        '3xl': ['48px', { lineHeight: '0.9' }],
        '5xl': ['50px', { lineHeight: '0.9' }],
        '6xl': ['75px', { lineHeight: '0.9' }],
        '8xl': ['80px', { lineHeight: '0.85' }],
      },
    },
  },
  plugins: [],
};
