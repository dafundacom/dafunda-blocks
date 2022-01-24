<?php

/**
 * Enqueue frontend script for table fo contents block
 *
 * @return void
 */

function dbe_render_content_filter_entry_block($attributes, $content){
    extract($attributes);
    
    return '<div class="dbe-content-filter-panel'.(isset($className) ? ' ' . esc_attr($className) : '').
        ($initiallyShow ? '' : ' dbe-hide').'" data-selectedFilters="'.json_encode($selectedFilters).
        '">'.$content.'</div>';
}

function dbe_register_content_filter_entry_block(){
    if ( function_exists( 'register_block_type' ) ) {
        register_block_type( 'dbe/content-filter-entry-block', array(
            'attributes' => array(
                /*COMMENTED OUT TO PREVENT PHP ERRORS
                'availableFilters' => array(
                    'type' => 'array',
                    'default' => array()//get list of filters from parent block
                ),*/
                /*'selectedFilters' => array(
                    'type' => 'array',
                    'default' => array()
                ),*/
                'buttonColor' => array(
                    'type' => 'string',
                    'default' => '#aaaaaa'
                ),
                'buttonTextColor' => array(
                    'type' => 'string',
                    'default' => '#000000'
                ),
                'initiallyShow' => array(
                    'type' => 'boolean',
                    'default' => true
                )
            ),
                'render_callback' => 'dbe_render_content_filter_entry_block'));
        }
}

function dbe_render_content_filter_block($attributes, $content){
    extract($attributes);

    if(!isset($filterArray)){
        $filterArray = array();
    }

    $newFilterArray = json_decode(json_encode($filterArray), true);

    $filterList = '';

    foreach((array)$newFilterArray as $key1 => $filterGroup){
        $filterList .= '<div class="dbe-content-filter-category"
        data-canUseMultiple="' . json_encode($filterGroup['canUseMultiple']) . '">
        <div class="dbe-content-filter-category-name">' . $filterGroup['category'] . '</div>';

        foreach($filterGroup['filters'] as $key2 => $tag){
            $filterList .= '<div data-tagIsSelected="false" data-categoryNumber="' . $key1 . '"
            data-filterNumber="' . $key2 . '" ' . ($blockID === '' ? 'data-normalColor="' . $buttonColor . '" data-normalTextColor="' . $buttonTextColor .
            '" data-activeColor="' . $activeButtonColor . '" data-activeTextColor="' . $activeButtonTextColor .
            '"style="background-color: ' . $buttonColor.'; color: ' . $buttonTextColor . '"' : '') . ' class="dbe-content-filter-tag">' .
            $tag.'</div>';
        }
        $filterList .= '</div>';
    }

$currentSelection = array_map(function($category){
                        return ($category['canUseMultiple'] ?
                                array_fill(0, count($category['filters']), false) :
                                -1);
                    }, (array)$filterArray);

return '<div class="wp-block-dbe-content-filter'.(isset($className) ? ' ' . esc_attr($className) : '').
        '"'. ($blockID === '' ? : ' id="dbe-content-filter-' . $blockID . '"') .
        ' data-currentSelection="'.json_encode($currentSelection).
        '" data-initiallyShowAll="'.json_encode($initiallyShowAll).
        '" data-matchingOption="'.$matchingOption.'">'. 
    $filterList . $content . '</div>';
}

function dbe_register_content_filter_block(){
    if ( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
        register_block_type( 'dbe/content-filter-block', array(
            'attributes' => $defaultValues['dbe/content-filter-block']['attributes'],
                'render_callback' => 'dbe_render_content_filter_block'));
        
    }

}

function dbe_content_filter_add_frontend_assets() {
    require_once dirname(dirname(__DIR__)) . '/common.php';

    $presentBlocks = dbe_getPresentBlocks();

    foreach( $presentBlocks as $block ){
        if($block['blockName'] === 'dbe/content-filter' || $block['blockName'] === 'dbe/content-filter-block'){
            wp_enqueue_script(
                'dafunda_blocks-content-filter-front-script',
                plugins_url( 'content-filter/front.build.js', dirname( __FILE__ ) ),
                array( ),
                Dafunda_Blocks_Constants::plugin_version(),
                true
            );
            break;
        }
    }
}

add_action( 'wp_enqueue_scripts', 'dbe_content_filter_add_frontend_assets' );
add_action('init', 'dbe_register_content_filter_entry_block');
add_action('init', 'dbe_register_content_filter_block');