<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://github.com/dafundacom/dafunda-blocks/
 * @since    0.0.1
 *
 * @package    Dafunda_Blocks
 * @subpackage Dafunda_Blocks/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Dafunda_Blocks
 * @subpackage Dafunda_Blocks/admin
 */
class Dafunda_Blocks_Admin
{
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
	public function __construct()
	{
		$this->plugin_name = DAFUNDA_BLOCKS_NAME;
		$this->version = DAFUNDA_BLOCKS_VERSION;
		$this->plugin_path = DAFUNDA_BLOCKS_PATH;
		$this->plugin_url = DAFUNDA_BLOCKS_URL;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_styles($hook)
	{
		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Dafunda_Blocks_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Dafunda_Blocks_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		global $menu_page;

		wp_enqueue_style(
			$this->plugin_name,
			plugin_dir_url(__FILE__) . "css/dafunda-blocks-admin.css",
			[],
			$this->version,
			"all"
		);
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_scripts($hook)
	{
		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Dafunda_Blocks_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Dafunda_Blocks_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		global $menu_page;

		if ($hook != $menu_page) {
			return;
		}

		wp_enqueue_script(
			$this->plugin_name,
			plugin_dir_url(__FILE__) . "js/dafunda-blocks-admin.js",
			["jquery"],
			$this->version,
			false
		);
	}

	/**
	 * Register Setting Pages for the admin area.
	 *
	 * @since    0.0.1
	 */
	public function register_admin_menus()
	{
		global $menu_page;

		$menu_page = add_menu_page(
			"Dafunda Blocks Settings",
			"Dafunda Blocks",
			"manage_options",
			"dafunda-blocks-settings",
			[$this, "main_menu_template_cb"],
			plugin_dir_url(__FILE__) . "images/logos/menu-icon.svg"
		);
	}

	/**
	 * Set template for main setting page
	 *
	 * @since    0.0.1
	 * @return void
	 */
	public function main_menu_template_cb()
	{
		require_once $this->plugin_path . "admin/templates/menus/main-menu.php";
	}

	/**
	 * Enable/Disable Block
	 *
	 * @since    0.0.1
	 * @return void
	 */
	public function toggle_block_status()
	{
		check_ajax_referer("toggle_block_status");

		$block_name = sanitize_text_field($_POST["block_name"]);

		$enable = sanitize_text_field($_POST["enable"]);

		if (!$this->block_exists($block_name)) {
			wp_send_json_error([
				"error_message" => "Unknown block name",
			]);
		}

		$uploadDir = dirname(dirname(dirname(__DIR__))) . "/uploads";
		$canMakeCustomFile = is_writable($uploadDir);

		$saved_blocks = get_option("dafunda_blocks", false);
		if ($saved_blocks) {
			if ($canMakeCustomFile) {
				if (!file_exists($uploadDir . "/dafunda-blocks")) {
					mkdir($uploadDir . "/dafunda-blocks");
				}
				$frontStyleFile = fopen(
					$uploadDir . "/dafunda-blocks/blocks.style.build.css",
					"w"
				);
				$adminStyleFile = fopen(
					$uploadDir . "/dafunda-blocks/blocks.editor.build.css",
					"w"
				);
				$blockDir = dirname(__DIR__) . "/src/blocks/";
			}

			foreach ($saved_blocks as $key => $block) {
				if ($block["name"] === $block_name) {
					$saved_blocks[$key]["active"] = $enable === "true";
				}

				if ($canMakeCustomFile) {
					$blockDirName = strtolower(
						str_replace(
							" ",
							"-",
							trim(
								preg_replace(
									"/\(.+\)/",
									"",
									$saved_blocks[$key]["label"]
								)
							)
						)
					);
					$frontStyleLocation =
						$blockDir . $blockDirName . "/style.css";
					$adminStyleLocation =
						$blockDir . $blockDirName . "/editor.css";

					if (
						file_exists($frontStyleLocation) &&
						$saved_blocks[$key]["active"]
					) {
						//also detect if block is enabled
						if ($block["name"] == "dbe/click-to-tweet") {
							fwrite(
								$frontStyleFile,
								str_replace(
									"src/blocks/click-to-tweet/icons",
									"dafunda-blocks",
									file_get_contents($frontStyleLocation)
								)
							);
						} else {
							fwrite(
								$frontStyleFile,
								file_get_contents($frontStyleLocation)
							);
						}
					}
					if (
						file_exists($adminStyleLocation) &&
						$saved_blocks[$key]["active"]
					) {
						fwrite(
							$adminStyleFile,
							file_get_contents($adminStyleLocation)
						);
					}

					if (
						$block["name"] === "dbe/styled-box" &&
						$saved_blocks[$key]["active"]
					) {
						//add css for blocks phased out by styled box
						fwrite(
							$frontStyleFile,
							file_get_contents(
								$blockDir . "feature-box" . "/style.css"
							)
						);
						fwrite(
							$frontStyleFile,
							file_get_contents(
								$blockDir . "notification-box" . "/style.css"
							)
						);
						fwrite(
							$frontStyleFile,
							file_get_contents(
								$blockDir . "number-box" . "/style.css"
							)
						);

						fwrite(
							$adminStyleFile,
							file_get_contents(
								$blockDir . "feature-box" . "/editor.css"
							)
						);
						fwrite(
							$adminStyleFile,
							file_get_contents(
								$blockDir . "number-box" . "/editor.css"
							)
						);
					}
				}
			}

			if ($canMakeCustomFile) {
				fclose($frontStyleFile);
				fclose($adminStyleFile);
				copy(
					dirname(__DIR__) .
						"/src/blocks/click-to-tweet/icons/sprite-twitter.png",
					wp_upload_dir()["basedir"] .
						"/dafunda-blocks/sprite-twitter.png"
				);
			}

			update_option("dafunda_blocks", $saved_blocks);
		} else {
			update_option("dafunda_blocks", $this->blocks());
		}

		wp_send_json_success(get_option("dafunda_blocks", false));
	}

	/**
	 * Insert Blocks Settings as a Js Global variable.
	 *
	 * @since    0.0.1
	 * @return void
	 */
	public function insert_blocks_settings()
	{
		$dafunda_blocks_settings = wp_json_encode(
			get_option("dafunda_blocks", [])
		); ?>

		<script> window.dafunda_blocks=<?php echo $dafunda_blocks_settings; ?> </script>

		<?php
	}

	/**
	 * Execute functions when admin area is loaded.
	 *
	 * @since    0.0.1
	 * @return void
	 */
	public function on_admin_init()
	{
		$this->register_new_blocks();
	}

	/**
	 * Insert Blocks Settings as a Js Global variable.
	 *
	 * @since    0.0.1
	 * @return void
	 */
	public function register_new_blocks()
	{
		$blocks = $this->blocks();

		$registered_blocks = get_option("dafunda_blocks", false);

		$new_blocks = [];

		if ($registered_blocks) {
			foreach ($blocks as $block) {
				if (
					!$this->is_block_registered(
						$block["name"],
						$registered_blocks
					)
				) {
					$new_blocks[] = $block;
				}
			}
			$registered_blocks = array_merge($registered_blocks, $new_blocks);
			update_option("dafunda_blocks", $registered_blocks);
		} else {
			update_option("dafunda_blocks", $blocks);
		}
	}

	/**
	 * Check block exists.
	 *
	 * @since    0.0.1
	 * @param string $name Block Name.
	 * @return bool
	 */
	protected function block_exists($name)
	{
		$blocks = $this->blocks();

		$unknown_block = true;
		foreach ($blocks as $key => $block) {
			if ($block["name"] === $name) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Check block is registered.
	 *
	 * @since    0.0.1
	 * @param string $name Block Name.
	 * @return bool
	 */
	protected function is_block_registered($name, $registered_blocks)
	{
		$blocks = $registered_blocks;

		$unknown_block = true;
		foreach ($blocks as $key => $block) {
			if ($block["name"] === $name) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Get Plugin BLOCKS
	 *
	 * @since    0.0.1
	 * @return array
	 */
	protected static function blocks()
	{
		require_once DAFUNDA_BLOCKS_PATH .
			"includes/class-dafunda-blocks-util.php";

		return Dafunda_Blocks_Util::blocks();
	}
}
