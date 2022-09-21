const path = require('path')
const fs = require('fs')

const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, { mode }) => {
    const is_production = mode === 'production'
    const is_development = !is_production
    if (is_production) {
        require('./.config/utils/regenerate-setup-file.v1')()
        const BUILD_PATH = path.resolve(process.cwd(), 'build')
        if (fs.existsSync(BUILD_PATH)) {
            fs.rmSync(BUILD_PATH, { recursive: true, force: true })
            fs.mkdirSync(BUILD_PATH, { recursive: true, force: true })
        }
    }

    const config = {
        ...defaultConfig,
        module: {
            ...defaultConfig.module,
            rules: [
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack', 'url-loader'],
                },
                ...defaultConfig.module.rules,
            ],
        },
        resolve: {
            symlinks: false,
            extensions: ['js', 'jsx'],
            alias: {
                ...defaultConfig.resolve.alias,
                '@': path.resolve(__dirname, "src/"),
            },
            ...defaultConfig.resolve,
        },
        plugins: [...defaultConfig.plugins],
    }

    if (is_development) {
        config.plugins.push(
            new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 3000,
                proxy: 'http://goblocks.test/',
            }),
        )
    }

    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '**/*.svg',
                    context: process.env.WP_SRC_DIRECTORY,
                },
            ],
        }),
    )

    return config
}
