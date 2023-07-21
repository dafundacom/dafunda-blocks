const { stylePlugin } = require("./plugin");
const stylePreset = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,php}",
    "../../src/**/*.{ts,tsx,js,jsx,php}",
  ],
  darkMode: ["class"],
  fontFamily: {
    sans: [
      "-apple-system",
      "BlinkMacSystemFont",
      "segoe ui",
      "helvetica neue",
      "Arial",
      "noto sans",
      "sans-serif",
      "apple color emoji",
      "segoe ui emoji",
      "segoe ui symbol",
      "noto color emoji",
    ],
  },
  plugins: [stylePlugin, require("tailwindcss-animate")],
};

exports.stylePreset = stylePreset;
