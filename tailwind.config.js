const typography = require('@tailwindcss/typography')

module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: [
      './src/**/*.{ts,tsx,js,jsx,php}',
      './build/**/*.{ts,tsx,js,jsx,php}',
    ],
    important: true,
  },
  content: ['./src/**/*.{ts,tsx,js,jsx,php}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    typography,
  ],
}
