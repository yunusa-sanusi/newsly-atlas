/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        red: '#ff5b00',
        darkGrey: '#222222',
        grey: '#7b7b7b',
        white: '#ffffff',
      },
      backgroundColor: {
        red: '#ff5b00',
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
