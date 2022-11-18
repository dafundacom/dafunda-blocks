const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx,php}"],
  important: true,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [typography],
};
