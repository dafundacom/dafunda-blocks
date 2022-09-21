<?php
namespace GB;

use GB\Setup;

class Activation {

    public static function init()
    {
        register_activation_hook(GB_PLUGIN_DIR . "/setup.php", function(){
            // wp_die("Message");
            self::create_log_table();
        });
    }

    public static function create_log_table() {
		global $wpdb;
		$prefix = $wpdb->prefix . GB_PREFIX;

		$charset_collate = "";
		if ( ! empty($wpdb->collate)) $charset_collate = "COLLATE `{$wpdb->collate}`";

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
}
