/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: '#222222',
        'amali-green': '#42B0A8',
        'amali-steel-blue': '#001A0A',
        'amali-blue': '#00CFE8',
        'amali-grey': '#637381',
        'amali-bg': '#FFFFFF',
        'amali-black': '#1E1E1E',
        'amali-light-green': '#e9f5ef',
        'amali-light-yellow': '#fff8ea',
        'amali-notif-red': '#F24B55',
      },
      gridTemplateRows: {
        layout: 'auto 50px auto 50px auto',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
