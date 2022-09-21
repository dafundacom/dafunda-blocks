const tailwindcss = require('tailwindcss')
const plugins = [
  tailwindcss('./tailwind.config.js'),
  require('tailwindcss'),
  // require('./tailwind.config.js'),
  require('autoprefixer'),
]
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  )
}
module.exports = {
  plugins,
}
