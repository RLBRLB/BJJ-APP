/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0c10',
          900: '#0f1219',
          800: '#161b26',
          700: '#1e2533',
          600: '#2a3344',
        },
        accent: {
          DEFAULT: '#e0413b',
          soft: '#f0625c',
          dark: '#b22d28',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
