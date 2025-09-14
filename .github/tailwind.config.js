/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      colors: {
        primary: '#2563eb',
        accent: '#1e293b'
      }
    }
  },
  plugins: []
};
