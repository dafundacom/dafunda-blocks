const concurrently = require("concurrently");
const path = require("path");
const { result } = concurrently(
  [
    {
      command:
        "wp-scripts start --webpack-copy-php --webpack-src-dir=src/blocks --output-path=build/blocks --config webpack.config.js --mode development --performance-hints warning --color",
      name: "script",
      env: { APP_ENV: "development" },
    },
    {
      command: "pnpm gulp --watch",
      name: "style",
      env: { APP_ENV: "development" },
    },
  ],
  {
    prefix: "start",
    restartTries: 3,
    cwd: path.resolve(),
  }
);

function success(params) {
  console.log("success");
  // console.log(params);
}
function failure(params) {
  console.log("failure");
  // console.log(params);
}
result.then(success, failure);
