<?php

class Dafunda_Blocks_Help {
    /**
	 * The ID of this plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * The PATH of this plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var      string    $plugin_name    The PATH of this plugin.
	 */
	private $plugin_path;

	/**
	 * The URL of this plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var      string    $plugin_name    The URL of this plugin.
	 */
	private $plugin_url;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    0.0.1
	 */
	public function __construct() {

		$this->plugin_name = DAFUNDA_BLOCKS_NAME;
		$this->version     = DAFUNDA_BLOCKS_VERSION;
		$this->plugin_path = DAFUNDA_BLOCKS_PATH;
		$this->plugin_url  = DAFUNDA_BLOCKS_URL;

	}
	
	/**
	 * Register the stylesheets for the help page.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_styles( $hook ) {

		global $help_page;

		if ( $hook != $help_page ) {
			return;
		}

		wp_enqueue_style( $this->plugin_name . '-help-css', plugin_dir_url( __FILE__ ) . 'css/dafunda-blocks-help.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the help page.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_scripts( $hook ) {

		global $help_page;

		if ( $hook != $help_page ) {
			return;
		}

		wp_enqueue_script( $this->plugin_name. '-help-js', plugin_dir_url( __FILE__ ) . 'js/dafunda-blocks-help.js', array( 'jquery' ), $this->version, false );

	}
    
    /**
	 * Register Help Page for the admin area.
	 *
	 * @since    0.0.1
	 */
    public function register_help_admin_menu() {
		
		global $help_page;

        $help_page = add_submenu_page(
            'dafunda-blocks',
            'Dafunda Blocks Help',
            'Help',
            'manage_options',
            'dafunda-blocks-help',
            array( $this, 'help_page_cb' )
        );

    }

    /**
	 * Content for Help Page
	 *
	 * @since    0.0.1
	 * @return void
	 */
	public function help_page_cb() {

		require_once $this->plugin_path . 'admin/templates/help/help-page.php';

	}

}