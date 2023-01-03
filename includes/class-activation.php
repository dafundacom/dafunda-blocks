<?php
namespace DBE;

use DBE\Setup;

class Activation
{
    public static function init()
    {
        register_activation_hook(DBE_PLUGIN_DIR . "/setup.php", function () {
            // wp_die("Message");
            self::create_log_table();
        });
    }

    public static function create_log_table()
    {
        global $wpdb;
        // $prefix = $wpdb->prefix . DBE_PREFIX;
        $prefix = DBE_PREFIX;

        $charset_collate = "";
        if (! empty($wpdb->collate)) {
            $charset_collate = "COLLATE `{$wpdb->collate}`";
        }

        $tablename = "{$wpdb->prefix}{$prefix}_vote_log";
        // if ($wpdb->get_var("SHOW TABLES LIKE '$tablename'") != null) {
        //     return true;
        // }

        $sql = "
		CREATE TABLE if not exists `{$tablename}` (
			`id` bigint unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
			`post_id` bigint(20) unsigned NOT NULL,
			`dbe_device_id` varchar(250) NOT NULL,
			`block_id` varchar(250) NOT NULL,
			`block_name` varchar(250) NOT NULL,
			`action` varchar(250) NOT NULL,
			FOREIGN KEY (`post_id`) REFERENCES `{$wpdb->prefix}posts` (`ID`) ON DELETE CASCADE
		) ENGINE=`InnoDB` {$charset_collate};";

        // require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        // return maybe_create_table($wpdb->prefix . $tablename, $sql);
        $wpdb->get_var($sql);
        // require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        // dbDelta($sql);

        return true;
    }
}
