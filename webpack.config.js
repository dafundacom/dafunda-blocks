const path = require("path");
const fs = require("fs");

const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, { mode }) => {
  const is_production = mode === "production";
  const is_development = !is_production;
  if (is_production) {
    // eslint-disable-next-line global-require
    require("./config/utils/regenerate-setup-file.v1")();
    const BUILD_PATH = path.resolve(process.cwd(), "build");
    if (fs.existsSync(BUILD_PATH)) {
      fs.rmSync(BUILD_PATH, { recursive: true, force: true });
      fs.mkdirSync(BUILD_PATH, { recursive: true, force: true });
    }
  }

  const config = {
    ...defaultConfig,
    // entry: {
    //   // "dbe.blocks.editor.build": "./src/scss/editor.scss",
    //   // "dbe.blocks.frontend.build": "./src/scss/frontend.scss",
    //   ...defaultConfig.entry,
    // },
    entry: defaultConfig.entry(),
    module: {
      ...defaultConfig.module,
      rules: [
        ...defaultConfig.module.rules,
        {
          test: /\.svg$/,
          use: ["@svgr/webpack", "url-loader"],
        },
      ],
    },
    resolve: {
      symlinks: false,
      extensions: ["js", "jsx"],
      alias: {
        ...defaultConfig.resolve.alias,
        "@": path.resolve(__dirname, "src/"),
      },
      ...defaultConfig.resolve,
    },
    plugins: [...defaultConfig.plugins],
  };

  
  config.entry["dbe.blocks.editor.build"] = "./src/scss/editor.scss";
  config.entry["dbe.blocks.frontend.build"] = "./src/scss/frontend.scss";
  
  if (is_development) {
    config.plugins.push(
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        proxy: "http://dbe.test/",
      })
    );
  }

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*.svg",
          context: process.env.WP_SRC_DIRECTORY,
        },
      ],
    })
  );

  return config;
};
