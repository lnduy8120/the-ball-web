/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#137fec',
        secondary: '#64748B',
        background: '#F8FAFC',
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        card: '#FFFFFF',
        win: '#10B981',
        loss: '#EF4444',
        draw: '#64748B',
        pending: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}