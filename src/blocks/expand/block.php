<?php

function dbe_render_expand_portion_block($attributes, $content){
    extract($attributes);
    return '<div class="expand-portion expand-' . $displayType .
        ($displayType === 'full' ? ' hide' : '').
        (isset($className) ? ' ' . esc_attr($className) : '') . '">' .
        $content.
        '<a class="expand-toggle-button" role="button" aria-expanded="false" aria-controls="'.
            ($parentID === '' ? '' : "expand-full-" . $parentID).'" tabindex="0">' . $clickText . '</a>'
        . '</div>';
}

function dbe_register_expand_portion_block($attributes){
    if ( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
        register_block_type( 'dbe/expand-portion', array(
            'attributes' => $defaultValues['dbe/expand-portion']['attributes'],
			'render_callback' => 'dbe_render_expand_portion_block'));
	}
}

function dbe_render_expand_block($attributes, $content){
    extract($attributes);
    return '<div class="expand '.(isset($className) ? ' ' . esc_attr($className) : '')
    .'" id="expand-'.$blockID.'">'.$content.'</div>';
}

function dbe_register_expand_block($attributes){
    if ( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
        register_block_type( 'dbe/expand', array(
            'attributes' => $defaultValues['dbe/expand']['attributes'],
			'render_callback' => 'dbe_render_expand_block'));
	}
}

function dbe_expand_block_add_frontend_assets() {
    require_once dirname(dirname(__DIR__)) . '/common.php';

    $presentBlocks = dbe_getPresentBlocks();

    foreach( $presentBlocks as $block ){
        if($block['blockName'] === 'dbe/expand' || $block['blockName'] === 'dbe/expand-portion'){
            wp_enqueue_script(
                'dafunda_blocks-expand-block-front-script',
                plugins_url( 'expand/front.build.js', dirname( __FILE__ ) ),
                array( ),
                Dafunda_Blocks_Constants::plugin_version(),
                true
            );
            break;
        }
    }
}

add_action('init', 'dbe_register_expand_block');
add_action('init', 'dbe_register_expand_portion_block');
add_action( 'wp_enqueue_scripts', 'dbe_expand_block_add_frontend_assets' );