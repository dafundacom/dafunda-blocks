<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://github.com/dafundacom/dafunda-blocks/
 * @since    0.0.1
 *
 * @package    Dafunda_Blocks
 * @subpackage Dafunda_Blocks/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since    0.0.1
 * @package    Dafunda_Blocks
 * @subpackage Dafunda_Blocks/includes
 * @author     Imtiaz Rayhan <imtiazrayhan@gmail.com>
 */
class Dafunda_Blocks_Deactivator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    0.0.1
	 */
	public static function deactivate() {

		delete_option( 'dafunda_blocks' );

		if(file_exists(wp_upload_dir()['basedir'] . '/dafunda-blocks')){
			unlink(wp_upload_dir()['basedir'] . '/dafunda-blocks/blocks.editor.build.css');
			unlink(wp_upload_dir()['basedir'] . '/dafunda-blocks/blocks.style.build.css');
			unlink(wp_upload_dir()['basedir'] . '/dafunda-blocks/sprite-twitter.png');
			rmdir(wp_upload_dir()['basedir'] . '/dafunda-blocks');
		}

		delete_option('dafunda_blocks_css_version');
		delete_transient( '_welcome_redirect_ub' );
		delete_option( 'DafundaBlocks_installDate', date( 'Y-m-d h:i:s' ) );

		//undefine variables here
		delete_option('dbe_icon_choices');
		unregister_setting('dbe_settings', 'dbe_icon_choices');
	}
	
}
