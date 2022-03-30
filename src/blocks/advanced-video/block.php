<?php
function dbe_render_advanced_video_block($attributes){
    require_once dirname(dirname(__DIR__)) . '/common.php';
    extract($attributes);

    //enclosing div needed to prevent embedded video from trying to use the full height of the screen
    return '<div id="advanced-video-'.$blockID.'" class="advanced-video-container">' .
    
    (!in_array($videoSource, ['local', 'unknown', 'videopress']) && $thumbnail !== '' ? 
    '<img class="advanced-video-thumbnail" height="'.$height.'" width="'.$width.'" src="' . esc_url($thumbnail) . '">' : ''
            ) .
    '<div class="advanced-video-embed" '.($thumbnail !== '' && !in_array($videoSource, ['local', 'unknown', 'videopress']) ? 'hidden' : '').'>'
    . $videoEmbedCode . '</div></div>';
}

function dbe_register_advanced_video_block() {
	if ( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
		register_block_type( 'dbe/advanced-video', array(
            'attributes' => $defaultValues['dbe/advanced-video']['attributes'],
			'render_callback' => 'dbe_render_advanced_video_block'));
	}
}

function dbe_advanced_video_add_frontend_assets() {
    require_once dirname(dirname(__DIR__)) . '/common.php';

    $presentBlocks = dbe_getPresentBlocks();

    foreach( $presentBlocks as $block ){
        if($block['blockName'] === 'dbe/advanced-video'){
            wp_enqueue_script(
                'dafunda_blocks-advanced-video-front-script',
                plugins_url( 'advanced-video/front.build.js', dirname( __FILE__ ) ),
                array( ),
                Dafunda_Blocks_Constants::plugin_version(),
                true
            );
            break;
        }
    }
}

add_action( 'wp_enqueue_scripts', 'dbe_advanced_video_add_frontend_assets' );

add_action('init', 'dbe_register_advanced_video_block');