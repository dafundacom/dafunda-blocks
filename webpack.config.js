const defaultConfig = require("@wordpress/scripts/config/webpack.config.js");
const path = require("path");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var config = {
  ...defaultConfig,
  devtool: "source-map",
  entry: {
    index: path.resolve(process.cwd(), "src", "blocks.js"),
  },
  plugins: [
    ...defaultConfig.plugins.filter((p) => !(p instanceof CleanWebpackPlugin)),
    new IgnoreEmitPlugin(["blocks.build.asset.php", "blocks.build.js.map"]),
  ],
  output: {
    filename: "blocks.build.js",
  },
  module: {
    ...defaultConfig.module,
    rules: [
      // ...defaultConfig.module.rules,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};

module.exports = (env, argv) => {
  const is_production = argv.mode === "production";
  const is_development = !is_production;
  if (is_production) {
    config.devtool = "source-map";
  }

  return config;
};
