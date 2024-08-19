module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#bb86fc',
        secondary: '#333',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1.5s ease-out forwards',
      },
      fontFamily: {
        rounded: ['"Comic Sans MS"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
