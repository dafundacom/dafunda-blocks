const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./*.{js,php,jsx}",
    "./src/*.{js,php,jsx}",
    "./src/**/*.{js,php,jsx}",
    "./src/**/**/*.{js,php,jsx}",
    "./src/**/**/**/*.{js,php,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.slate,
      },
    },
  },
  variants: {},
  important: true,
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
