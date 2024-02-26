/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pointColor: '#436850',
        darkColor: '#3C3633',
        lightBackColor: '#EEEDEB',
        darkBackColor: '#242424',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
