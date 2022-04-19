<?php

/**
 * The file defines global constants for the plugin
 *
 * @link       https://github.com/dafundacom/dafunda-blocks/
 * @since    0.0.1
 *
 * @package    Dafunda_Blocks_Constants
 * @subpackage Dafunda_Blocks/includes
 */

/**
 * The core plugin class.
 *
 * This is used for defining constants which are used throughout plugin.
 *
 * @since    0.0.1
 * @package    Dafunda_Blocks_Constants
 * @subpackage Dafunda_Blocks_Constants/includes
 */
class Dafunda_Blocks_Constants
{
	const PLUGIN_VERSION = "0.0.3";

	const PLUGIN_NAME = "dafunda-blocks";

	/**
	 * Get Plugin version
	 *
	 * @return string
	 */
	public static function plugin_version()
	{
		return self::PLUGIN_VERSION;
	}

	/**
	 * Get Plugin name
	 *
	 * @return string
	 */
	public static function plugin_name()
	{
		return self::PLUGIN_NAME;
	}

	/**
	 * Get Plugin URL
	 *
	 * @return string
	 */
	public static function plugin_path()
	{
		return WP_PLUGIN_DIR . "/" . self::plugin_name() . "/";
	}

	/**
	 * Get Plugin URL
	 *
	 * @return string
	 */
	public static function plugin_url()
	{
		return plugin_dir_url(dirname(__FILE__));
	}

	/**
	 * Get Plugin TEXT DOMAIN
	 *
	 * @return string
	 */
	public static function text_domain()
	{
		return "dafunda-blocks";
	}
}
