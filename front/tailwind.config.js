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
      },
      screens: {
        sm: '576px',
        tablet: '768px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1366px',
        // => @media (min-width: 1366px) { ... }

        desktopLg: '1720px',
        // => @media (min-width: 1720px) { ... }
      },
    },
  },
  plugins: [],
};
