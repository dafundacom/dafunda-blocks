<?php

require_once DAFUNDA_BLOCKS_PATH . "/includes/class-dafunda-blocks-util.php";

/**
 * Fired during plugin activation
 *
 * @link       https://github.com/dafundacom/dafunda-blocks/
 * @since    0.0.1
 *
 * @package    Dafunda_Blocks
 * @subpackage Dafunda_Blocks/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since    0.0.1
 * @package    Dafunda_Blocks
 * @subpackage Dafunda_Blocks/includes
 */
class Dafunda_Blocks_Activator
{
	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    0.0.1
	 */
	public static function activate()
	{
		global $wpdb;

		set_transient("_welcome_redirect_ub", true, 60);

		$blocks = get_option("dafunda_blocks", false);

		if (!$blocks) {
			update_option("dafunda_blocks", Dafunda_Blocks_Util::blocks());
		}

		if (!get_option("dafunda_blocks_css_version")) {
			add_option(
				"dafunda_blocks_css_version",
				Dafunda_Blocks_Constants::plugin_version()
			);
		}

		add_option("DafundaBlocks_installDate", date("Y-m-d h:i:s"));
		add_option("DafundaBlocks_review_notify", "no");

		self::plugin_activate();
	}

	private static function plugin_activate()
	{
		Dafunda_Blocks_Util::create_log_table();
	}
}
