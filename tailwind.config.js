
import withMT from "@material-tailwind/html/utils/withMT";
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateBorder: {
          // '0%': { transform: 'rotate(0deg)' },
          // '100%': { transform: 'rotate(360deg)' },
          '0%': { borderColor: 'blue' },
          '25%': { borderColor: 'yellow' },
          '50%': { borderColor: 'green' },
          '75%': { borderColor: 'purple' },
          '100%': { borderColor: 'blue' },
        },
      },
      animation: {
        rotateBorder: 'rotateBorder 2s linear infinite',
      },
    },
  },
  plugins: [],
});

