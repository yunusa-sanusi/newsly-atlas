/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        openmenu: 'openmenu 0.5s ease-in',
        closemenu: 'closemenu 0.5s ease-in',
      },
      keyframes: {
        openmenu: {
          from: { right: '-307px' },
          to: { right: '0px' },
        },
        closemenu: {
          from: { right: '0px' },
          to: { right: '-307px' },
        },
      },
      textColor: {
        customRed: '#ff5b00',
        darkGrey: '#222222',
        grey: '#7b7b7b',
        lightGrey: '#c4c4c4',
        veryLightGrey: '#f8f8f8',
        white: '#ffffff',
      },
      backgroundColor: {
        customRed: '#ff5b00',
        darkGrey: '#222222',
        grey: '#7b7b7b',
        lightGrey: '#c4c4c4',
        veryLightGrey: '#f8f8f8',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
