<?php
use DBE\Block\Posts\API;

API::init();

add_action('init', function () {
    register_block_type(
        __DIR__,
        array(
            'render_callback' => function ($attributes, $content, $block_instance) {
                extract($attributes);
                // wp_send_json($attributes);
                ob_start();
                $response = API::get_posts([
                    "post_type" => $attributes["post_type"],
                    "offset" => $attributes["offset"],
                    "page" => $attributes["page"],
                    "posts_per_page" => $attributes["posts_per_page"],
                    "orderby" => $attributes["orderby"],
                    "order" => $attributes["order"],
                ]);
                $posts = $response["posts"];
                require plugin_dir_path(__FILE__) . './save/template.php';
                require plugin_dir_path(__FILE__) . './save/schema.php';
                return ob_get_clean();
            },
        )
    );
});
