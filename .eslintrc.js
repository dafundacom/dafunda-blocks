module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.mjs'],
      rules: {
        'linebreak-style': ['error', 'windows'],
        'no-undef': 'off',
        'no-shadow': 'off',
        semi: 'off',
        camelcase: 'off',
        quotes: 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-type': 'off',
        'react/prop-types': 'off',
        'react/no-array-index-key': 'off',

        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'max-len': "off",
        'no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            // varsIgnorePattern: '^_+$',
            // argsIgnorePattern: '^_+$',
          },
        ],
      },
    },
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    // requireConfigFile: false,
    sourceType: 'module',
  },

  plugins: ['react'],

  rules: {},
}
