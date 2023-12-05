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
        blueBlack: '#1A1035',
        bunsBorder: 'rgba(255, 255, 255, 0.64)',
        bunsBorder1: 'rgba(255, 255, 255, 0.84)',
        partnersMatt: 'rgba(255, 255, 255, 0.3)',
        crumbsText: '#474747',
        newsBlock: '#E2E1FF',
      },
      backgroundImage: {
        'partners-sm': "url('./src/assets/img/bg_partner_sm.png')",
        'partners-md': "url('./src/assets/img/bg_partner_md.png')",
        'partners-lg': "url('./src/assets/img/bg_partner_lg.png')",
        blue_logo: "url('./src/assets/img/blue_logo.png')",
        svgGradient: 'linear-gradient(135deg, #483BC9 0%, #8A58B7 100%);',
        bunsGradient: 'linear-gradient(114deg, #483BC9 0%, #8A58B7 100%);',
        mainGradient: 'linear-gradient(91deg, #483BC9 1.96%, #8A58B7 100%);',
        mainBanner:
          'linear-gradient(180deg, #483BC9 0%, #9108FC 48.96%, #F0F600 100%);',
        pgGradient: 'linear-gradient(114deg, #483bc9 -0.12%, #8a58b7 99.77%)',
        brGradient:
          'linear-gradient(90deg, #CECCFE 0%, #8957B7 23.44%, #483BC9 47.36%, #8957B7 75.52%, #CECCFE 100%);',
      },
      screens: {
        sm: '576px',

        tablet: `${responsive.tabletMinWidth}px`, // '768px',

        laptop: `${responsive.laptopMinWidth}px`, // '1024px',

        desktop: `${responsive.desktopMinWidth}px`, // '1366px',

        desktopLg: '1720px', // '1720px',
      },
      borderRadius: {
        20: '20px',
      },
    },
  },
  plugins: [],
};
