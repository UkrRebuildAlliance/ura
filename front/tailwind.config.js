/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...defaultTheme,
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        borderP: '#483BC9',
        blueBlack: '#1A1035',
      },
      backgroundImage: {
        mainGradient: 'linear-gradient(91deg, #483BC9 1.96%, #8A58B7 100%);',
        svgGradient: 'linear-gradient(135deg, #483BC9 0%, #8A58B7 100%);',
        mainBanner:
          'linear-gradient(180deg, #483BC9 0%, #9108FC 48.96%, #F0F600 100%);',
      },
      screens: {
        sm: '576px',
        tablet: '768px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1366px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
