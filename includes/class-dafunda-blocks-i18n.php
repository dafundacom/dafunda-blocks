<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://github.com/dafundacom/dafunda-blocks/
 * @since    0.0.1
 *
 * @package    Dafunda_Blocks
 * @subpackage Dafunda_Blocks/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since    0.0.1
 * @package    Dafunda_Blocks
 * @subpackage Dafunda_Blocks/includes
 */
class Dafunda_Blocks_i18n
{
	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    0.0.1
	 */
	public function load_plugin_textdomain()
	{
		load_plugin_textdomain(
			"dafunda-blocks",
			false,
			dirname(dirname(plugin_basename(__FILE__))) . "/languages/"
		);
	}
}
