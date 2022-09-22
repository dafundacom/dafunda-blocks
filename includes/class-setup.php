<?php
namespace DBE;

use DBE\Activation;
use DBE\Uninstall;

final class Setup {
	private static $instance;
	public static $file_path;

	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Setup ) ) {
			self::$instance = new Setup();
			self::$instance->enqueue_dafunda_block();
			self::$instance->enqueue_dafunda_block_sample();
			self::$instance->enqueue_dafunda_block_asset();

            Activation::init();
            Uninstall::init();
		}
		return self::$instance;
	}

	public function enqueue_dafunda_block_asset() {
		add_action(
			'init',
			function () {

				$prefix = DBE_PREFIX;
				wp_register_style(
					'dbe-block-editor', // Handle.
					plugins_url( "build/$prefix.blocks.editor.build.css", dirname( __FILE__ ) ),
					array( 'wp-edit-blocks' ),
					DBE_ASSET_VERSION
				);
			}
		);

		add_action(
			'init',
			function () {
				// Register Style Front .
				register_block_type(
					'dafundacom/dafunda-blocks',
					array(
						'editor_style'  => 'dbe-block-editor',
					)
				);
			}
		);

        add_action('wp_enqueue_scripts', function () {
				$prefix = DBE_PREFIX;
                wp_enqueue_style('dbe-block-style-front',plugins_url( "/build/$prefix.blocks.style.build.css", dirname( __FILE__ ) ), DBE_ASSET_VERSION, 'all');
            }
        );

		return true;
	}

	public function enqueue_dafunda_block() {
        $folders = $this->get_folders(DBE_PLUGIN_DIR . 'src/blocks');
        foreach ( $folders as $key => $folder ) {
            $path_block = DBE_PLUGIN_DIR . "build/blocks/$folder/block.php";
            if ( file_exists($path_block) ) {
                require $path_block;
            }
        }
	}

	public function enqueue_dafunda_block_sample() {
		$folders = $this->get_folders(DBE_PLUGIN_DIR . 'src/sample-blocks');
        foreach ( $folders as $key => $folder ) {
            $path = DBE_PLUGIN_DIR . "build/sample-blocks/$folder/index.php";
            if ( file_exists($path) ) {
                require $path;
            }
        }
	}

    public function get_folders( $path ) {
        $results = [];
        foreach ( $this->directories_glob( $path ) as $item ) {
         array_push($results, end(explode('/', $item)));
        }

        return $results;
    }

    public function directories_glob( $directory ) {
        $glob = glob( $directory . '/*' );

        if ( $glob === false ) {
            return array();
        }

        return array_filter(
            $glob,
            function( $dir ) {
                return is_dir( $dir );
            }
        );
    }
}
