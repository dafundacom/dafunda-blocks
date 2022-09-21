const dependency = {
  '@babel/core': '^7.18.10',
  '@babel/preset-env': '^7.18.10',
  '@babel/preset-react': '^7.18.6',
  '@babel/runtime': '^7.18.9',
  '@heroicons/react': '^1.0.6',
  '@svgr/core': '^6.3.1',
  '@svgr/webpack': '^6.3.1',
  '@wordpress/block-editor': '^9.6.0',
  '@wordpress/blocks': '^11.13.0',
  '@wordpress/components': '^19.16.0',
  '@wordpress/data': '^6.14.0',
  '@wordpress/element': '^4.12.0',
  '@wordpress/i18n': '^4.14.0',
  '@wordpress/rich-text': '^5.12.0',
  '@wordpress/scripts': '^23.6.0',
  autoprefixer: '^10.4.8',
  'babel-loader': '^8.2.5',
  concurrently: '^7.3.0',
  'css-loader': '^6.7.1',
  esbuild: '^0.14.54',
  eslint: '^8.21.0',
  'eslint-config-standard': '^17.0.0',
  'eslint-import-resolver-typescript': '^3.4.0',
  'eslint-plugin-import': '^2.26.0',
  'eslint-plugin-n': '^15.2.4',
  'eslint-plugin-node': '^11.1.0',
  'eslint-plugin-promise': '^6.0.0',
  'file-loader': '^6.2.0',
  gulp: '^4.0.2',
  'gulp-autoprefixer': '^8.0.0',
  'gulp-concat': '^2.6.1',
  'gulp-postcss': '^9.0.1',
  'gulp-sass': '^5.1.0',
  'gulp-terser': '^2.1.0',
  'merge-stream': '^2.0.0',
  'node-sass': '^7.0.1',
  postcss: '^8.4.16',
  'postcss-import': '^14.1.0',
  'postcss-loader': '^7.0.1',
  'postcss-scss': '^4.0.4',
  process: '^0.11.10',
  'react-icons': '^4.4.0',
  sass: '^1.54.3',
  'sass-loader': '^13.0.2',
  'svgo-loader': '^3.0.1',
  tailwindcss: '^3.1.8',
  terser: '^5.14.2',
  'terser-webpack-plugin': '^5.3.3',
  'ts-loader': '^9.3.1',
  'ts-node': '^10.9.1',
  'tsconfig-paths-webpack-plugin': '^4.0.0',
  webpack: '^5.74.0',
  'webpack-cli': '^4.10.0',
}

function log_str(array, env_dev = false) {
  let str = 'pnpm i'
  if (env_dev) str += ' -D'
  array.forEach((el) => {
    str += ` "${el}"`
  })
  console.log(str)
}
// log_str(Object.keys(dev), true)
log_str(Object.keys(dependency), true)
