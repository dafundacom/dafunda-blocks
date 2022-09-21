module.exports = {
  bracketSpacing: true,
  jsxSingleQuote: true,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  endOfLine: 'auto',
  plugins: [
    require('prettier-plugin-tailwindcss', '@wordpress/prettier-config'),
  ],
}
