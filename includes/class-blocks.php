<?php

namespace DBE;

require_once __DIR__ . '/Block.php';

class Blocks {
    private array $blocks = [];
    private array $patterns = [];

    public function __construct() {}

    public function init() {
            add_action('enqueue_block_assets', array( $this, 'import_assets' ));
            add_action('enqueue_block_editor_assets', array( $this, 'import_editor_assets' ));
    }

    public function import_editor_assets() {
        $asset = include(__DIR__ . '/../build/main.asset.php');

        wp_enqueue_script('spawn-blocks-editor', $this->get_file_url('/../build/main.js'),  $asset['dependencies'], $asset['version']);
        wp_enqueue_style('spawn-blocks-editor', $this->get_file_url('/../build/main.css'), array( 'wp-edit-blocks' ), filemtime(__DIR__ . '/../build/main.css'));

        $this->register_blocks();
    }

    public function import_assets() {
        wp_enqueue_style('spawn-blocks-styles', $this->get_file_url('/../build/style-main.css'), array(), filemtime(__DIR__ . '/../build/style-main.css'));
    }

    private function get_file_url( string $file ) {
        return plugins_url($file, __FILE__);
    }

    // public function add_pattern($name, $title, $categories, $description, $content) {
    //     $pattern = new SpawnPattern($name, $title, $categories, $description, $content);
    //     $this->patterns[] = $pattern;
    // }

    public function add_block( $name ) {
        $block = new Block($name);
        $this->blocks[] = $block;
    }

	public function add_style( $block, $options ) {
		register_block_style($block, $options);
	}

	public function remove_style( $block, $style ) {
		unregister_block_style($block, $style);
	}

    public function register_blocks() {
        foreach ( $this->blocks as $block ) {
            $block->register();
        }

        foreach ( $this->patterns as $pattern ) {
            $pattern->register_pattern();
        }
    }
}
