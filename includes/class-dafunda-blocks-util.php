<?php

/**
 * Fired during plugin activation
 *
 * @link       https://github.com/dafundacom/dafunda-blocks/
 * @since    0.0.1
 *
 * @package    dafunda_blocks
 * @subpackage dafunda_blocks/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since    0.0.1
 * @package    dafunda_blocks
 * @subpackage dafunda_blocks/includes
 */
class Dafunda_Blocks_Util
{
	/**
	 * Get all Blocks.
	 *
	 * @since    0.0.1
	 * @return array
	 */
	public static function blocks()
	{
		return [
			[
				"label" => "Advanced Heading",
				"name" => "dbe/advanced-heading",
				"active" => true,
			],
			[
				"label" => "Advanced Video",
				"name" => "dbe/advanced-video",
				"active" => true,
			],
			[
				"label" => "Button",
				"name" => "dbe/button",
				"active" => true,
			],
			[
				"label" => "Call To Action",
				"name" => "dbe/call-to-action-block",
				"active" => true,
			],
			[
				"label" => "Click To Tweet",
				"name" => "dbe/click-to-tweet",
				"active" => true,
			],
			[
				"label" => "Content Filter",
				"name" => "dbe/content-filter-block",
				"active" => true,
			],
			[
				"label" => "Content Toggle",
				"name" => "dbe/content-toggle-block",
				"active" => true,
			],
			[
				"label" => "Countdown",
				"name" => "dbe/countdown",
				"active" => true,
			],
			[
				"label" => "Divider",
				"name" => "dbe/divider",
				"active" => true,
			],
			[
				"label" => "Expand",
				"name" => "dbe/expand",
				"active" => true,
			],
			[
				"label" => "How To",
				"name" => "dbe/how-to",
				"active" => true,
			],
			[
				"label" => "Ranked List",
				"name" => "dbe/ranked-list",
				"active" => true,
			],
			[
				"label" => "Image Slider",
				"name" => "dbe/image-slider",
				"active" => true,
			],
			[
				"label" => "Post Grid",
				"name" => "dbe/post-grid",
				"active" => true,
			],
			[
				"label" => "Progress Bar",
				"name" => "dbe/progress-bar",
				"active" => true,
			],
			[
				"label" => "Review",
				"name" => "dbe/review",
				"active" => true,
			],
			[
				"label" => "Social Share",
				"name" => "dbe/social-share",
				"active" => true,
			],
			[
				"label" => "Star Rating",
				"name" => "dbe/star-rating-block",
				"active" => true,
			],
			[
				"label" => "Styled Box",
				"name" => "dbe/styled-box",
				"active" => true,
			],
			[
				"label" => "Styled List",
				"name" => "dbe/styled-list",
				"active" => true,
			],
			[
				"label" => "Tabbed Content",
				"name" => "dbe/tabbed-content-block",
				"active" => true,
			],
			[
				"label" => "Table of Contents",
				"name" => "dbe/table-of-contents-block",
				"active" => true,
			],
			[
				"label" => "Testimonial",
				"name" => "dbe/testimonial",
				"active" => true,
			],
		];
	}

	public static function create_log_table()
	{
		global $wpdb;
		$prefix = $wpdb->prefix . "dbe";

		$charset_collate = "";
		if (!empty($wpdb->collate)) $charset_collate = "COLLATE `{$wpdb->collate}`";

		$tablename = "{$prefix}_vote_log";
		$sql = "
		CREATE TABLE `{$tablename}` (
			`id` bigint unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
			`post_id` bigint(20) unsigned NOT NULL,
			`dbe_device_id` varchar(250) NOT NULL,
			`block_id` varchar(250) NOT NULL,
			`block_name` varchar(250) NOT NULL,
			`action` varchar(250) NOT NULL,
			FOREIGN KEY (`post_id`) REFERENCES `wp_posts` (`ID`) ON DELETE CASCADE
		) ENGINE=`InnoDB` {$charset_collate};";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		return maybe_create_table($wpdb->prefix . $tablename, $sql);
	}

	public static function get_device_id()
	{
		$dbe_device_id = $_COOKIE['dbe_device_id'] ?? "";
		if (!isset($dbe_device_id) || $dbe_device_id == "") {
			$dbe_device_id = hash("sha256", rand());
			setcookie("dbe_device_id", $dbe_device_id, time() + (20 * 365 * 24 * 60 * 60), "/");
		}
		return $dbe_device_id;
	}

	public static function microtime_float()
	{
			list($msec, $sec) = explode(' ', microtime());
			return (float) $msec + (float) $sec;
	}
}
