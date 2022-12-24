<?php
/**
 * Plugin Name: Dafunda Blocks
 * Plugin URI: https://github.com/dafundacom/dafunda-blocks
 * Description: Dafunda WordPress Block Editor
 * Version: 0.1.0-alpha
 * Author: Dafunda Dev Team
 * Author URI: https://dafunda.io
 * Text Domain: dafunda-blocks
 * Requires at least: 6.0
 * Requires PHP: 7.0
 * WC requires at least: 6.6
 * WC tested up to: 6.7
 *
 * @package dafundacom\DafundaBlocks
 */

declare(strict_types=1);

namespace DBE;

use DBE\Setup;

if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
define( 'DBE_NAME', 'dafunda-blocks' );
define( 'DBE_VERSION', '0.1.0-alpha' );
define( 'DBE_ASSET_VERSION', '0.1.0-alpha-Ce-re' );
define( 'DBE_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'DBE_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'DBE_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'DBE_PLUGIN_FILE', __FILE__ );
define( 'DBE_PREFIX', 'dbe' );

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

