<?php

/**
 * Plugin Name: Dafunda Blocks
 * Plugin URI: https://github.com/dafundacom/dafunda-blocks
 * Description: Dafunda Custom Blocks
 * Plugin Author: Dafunda Dev Team
 * Author URI: https://dafunda.io
 * Version: 0.0.3-rc-3g
 * Text Domain: dafunda-blocks
 * Domain Path: /languages
 *
 * @package DBE
 */

// Exit if accessed directly.
if (!defined("ABSPATH")) {
	exit();
}

require_once "includes/class-dafunda-blocks-constants.php";

/**
 * Currently plugin version.
 * Start at version 0.0.1 and use SemVer - https://semver.org
 */
define("DAFUNDA_BLOCKS_VERSION", Dafunda_Blocks_Constants::plugin_version());

/**
 * Plugin Name
 */
define("DAFUNDA_BLOCKS_NAME", Dafunda_Blocks_Constants::plugin_name());
/**
 * Plugin Path
 */
define("DAFUNDA_BLOCKS_PATH", Dafunda_Blocks_Constants::plugin_path());
/**
 * Plugin URL
 */
define("DAFUNDA_BLOCKS_URL", Dafunda_Blocks_Constants::plugin_url());
/**
 * Plugin TextDomain
 */
define("DAFUNDA_BLOCKS_TEXT_DOMAIN", Dafunda_Blocks_Constants::text_domain());

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__) . "src/init.php";

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-dafunda-blocks-activator.php
 */
function activate_dafunda_blocks()
{
	require_once plugin_dir_path(__FILE__) .
		"includes/class-dafunda-blocks-activator.php";
	Dafunda_Blocks_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-dafunda-blocks-deactivator.php
 */
function deactivate_dafunda_blocks()
{
	require_once plugin_dir_path(__FILE__) .
		"includes/class-dafunda-blocks-deactivator.php";
	Dafunda_Blocks_Deactivator::deactivate();
}

register_activation_hook(__FILE__, "activate_dafunda_blocks");
register_deactivation_hook(__FILE__, "deactivate_dafunda_blocks");

if (!function_exists("dbe_safe_welcome_redirect")) {
	add_action("admin_init", "dbe_safe_welcome_redirect");

	function dbe_safe_welcome_redirect()
	{
		if (!get_transient("_welcome_redirect_ub")) {
			return;
		}

		delete_transient("_welcome_redirect_ub");

		if (is_network_admin() || isset($_GET["activate-multi"])) {
			return;
		}

		wp_safe_redirect(
			add_query_arg(
				[
					"page" => "dafunda-blocks-help",
				],
				admin_url("admin.php")
			)
		);
	}
}

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . "includes/class-dafunda-blocks.php";

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    0.0.1
 */
function run_dafunda_blocks()
{
	$plugin = new Dafunda_Blocks();
	$plugin->run();
}
run_dafunda_blocks();
