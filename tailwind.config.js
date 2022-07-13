/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    debugScreens: { position: ['top', 'left'] },
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
      },
      neutral: {
        main: 'hsl(217, 54%, 11%)',
        card: 'hsl(216, 50%, 16%)',
        line: 'hsl(215, 32%, 27%)',
      },
      white: 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
