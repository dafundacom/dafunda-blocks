const concurrently = require('concurrently')
const path = require('path')
const { result } = concurrently(
  [
    {
      command:
        'wp-scripts build --webpack-copy-php --webpack-src-dir=src/blocks --output-path=build/blocks --node-env production --mode production --performance-hints warning --color',
      name: 'script',
      env: { APP_ENV: 'production' },
    },
    {
      command: 'pnpm gulp build',
      name: 'style',
      env: { APP_ENV: 'production' },
    },
  ],
  {
    prefix: 'build',
    restartTries: 3,
    cwd: path.resolve(),
  },
)
