<?php
namespace GB;

class Helper{
	public static function get_device_id() {
		try {
			if ( isset($_COOKIE['dbe_device_id']) ) {
                $dbe_device_id = sanitize_text_field(wp_unslash($_COOKIE['dbe_device_id'])) ?? "";
            }
		if ( ! isset($dbe_device_id) || $dbe_device_id == "" ) {
				$dbe_device_id = hash("sha256", rand());
				setcookie("dbe_device_id", $dbe_device_id, time() + (20 * 365 * 24 * 60 * 60), "/");
		}
		return $dbe_device_id;
		} catch ( \Throwable $th ) {
			return null;
		}
	}

	public static function microtime_float() {
			list($msec, $sec) = explode(' ', microtime());
			return (float) $msec + (float) $sec;
	}
}
