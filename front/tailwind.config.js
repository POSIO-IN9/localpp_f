// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '100px': '100px',
        '80px': '80px',
      },
      colors: {
        'blue-500': '#3b82f6',
      },
      perspective: {
        '1000': '1000px',
      },
      transform: {
        'rotate-x-30': 'rotateX(30deg)',
        'rotate-y-45': 'rotateY(45deg)',
      },
      borderWidth: {
        '100px': '100px',
      },
      // 애니메이션 추가
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
