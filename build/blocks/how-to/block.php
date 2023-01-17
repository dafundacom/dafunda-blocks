<?php

use DBE\Block\HowTo\API;
use DBE\Activation;

// Check table
// Activation::create_log_table();
API::init();

add_action('init', function() {
    register_block_type(
        __DIR__,
        array(
            'render_callback' => function($attributes, $content, $block_instance){
                extract($attributes);
                ob_start();
                require plugin_dir_path(__FILE__) . './save/index.php';
                // require plugin_dir_path(__FILE__) . './save/schema.php';
                return ob_get_clean();
            },
        )
    );
});
