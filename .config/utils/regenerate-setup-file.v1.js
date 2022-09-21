const ranstr = require('./random-string')
const fs = require('fs')
const path = require('path')

module.exports = function (
  pkg = JSON.parse(
    fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8'),
  ),
) {
  let str = `<?php
/**
 * Plugin Name: ${pkg.title}
 * Plugin URI: ${pkg.homepage}
 * Description: ${pkg.description}
 * Version: ${pkg.version}
 * Author: ${pkg.author.name}
 * Author URI: ${pkg.author.url}
 * Text Domain: ${pkg.name}
 * Requires at least: 6.0
 * Requires PHP: 7.0
 * WC requires at least: 6.6
 * WC tested up to: 6.7
 *
 * @package dafundacom\\DafundaBlocks
 */`

  str += `

declare(strict_types=1);

namespace GB;

use GB\\Setup;

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
define( 'GB_NAME', '${pkg.name}' );
define( 'GB_VERSION', '${pkg.version}' );
define( 'GB_ASSET_VERSION', '${pkg.version}-${ranstr(5)}' );
define( 'GB_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'GB_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'GB_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'GB_PLUGIN_FILE', __FILE__ );
define( 'GB_PREFIX', '${pkg.prefix}' );

if ( function_exists( 'is_multisite' ) && is_multisite() ) {
	add_action(
		'plugins_loaded',
		function () {
			return Setup::instance();
		},
		90
	);
} else {
	Setup::instance();
}

`
  return fs.writeFileSync(path.resolve(process.cwd(), 'setup.php'), str, 'utf8')
}
