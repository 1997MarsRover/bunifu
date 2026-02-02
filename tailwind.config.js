/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-green': 'rgb(36, 99, 44)',
        'brand-red': 'rgb(188, 24, 35)',
        'brand-blue': 'rgb(0, 137, 211)',
        'brand-dark': 'rgb(26, 26, 26)',
        'brand-light': 'rgb(250, 250, 250)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
        'nav': '0 2px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
