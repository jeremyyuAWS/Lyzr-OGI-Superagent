/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#2D2D2D',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          dark: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
};