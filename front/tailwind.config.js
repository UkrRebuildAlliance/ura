/** @type {import('tailwindcss').Config} */

const { responsive } = require('./src/constants');
const defaultTheme = require('tailwindcss/defaultConfig');

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...defaultTheme,
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        title: '24px',
        titleTab: '30px',
        titleDesk: '52px',
      },
      colors: {
        borderP: '#483BC9',
      },
      backgroundImage: {
        mainGradient: 'linear-gradient(91deg, #483BC9 1.96%, #8A58B7 100%);',
        svgGradient: 'linear-gradient(135deg, #483BC9 0%, #8A58B7 100%);',
      },
      screens: {
        tablet: `${responsive.tabletMinWidth}px`, // '768px',
        // => @media (min-width: 640px) { ... }

        laptop: `${responsive.laptopMinWidth}px`, // '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: `${responsive.desktopMinWidth}px`, // '1366px',
        // => @media (min-width: 1280px) { ... }
      },
      borderRadius: {
        20: '20px',
      },
    },
  },
  plugins: [],
};
