<?php
function dbe_review_block_init() {

	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'dbe_review_render_callback',
		)
	);
}
add_action( 'init', 'dbe_review_block_init' );

function dbe_review_render_callback( $attributes, $content, $block_instance ) {
    extract($attributes);
	ob_start();
	require plugin_dir_path( __FILE__ ) . './save/index.php';
	// require plugin_dir_path( __FILE__ ) . './save/schema.php';
	return ob_get_clean();
}
