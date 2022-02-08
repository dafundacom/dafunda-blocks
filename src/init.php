<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( !function_exists( 'get_current_screen' ) ) {
	require_once( ABSPATH . 'wp-admin/includes/screen.php' );
}

/**
 * Check if the current page is the Gutenberg block editor.
 * @return bool
 */
function dbe_check_is_gutenberg_page() {

	// The Gutenberg plugin is on.
    if ( function_exists( 'is_gutenberg_page' ) && is_gutenberg_page() ) { 
        return true;
    }
	
	// Gutenberg page on WordPress 5+.
	$current_screen = get_current_screen();
	if ( $current_screen !== NULL && method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) {
        return true;
	}
	
    return false;

}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */

function dbe_update_css_version($updated){
    static $frontendStyleUpdated = false;
    static $editorStyleUpdated = false;
    if($updated === 'frontend'){
        $frontendStyleUpdated = true;
    }
    else if($updated === 'editor'){
        $editorStyleUpdated = true;
    }

    if($frontendStyleUpdated && $editorStyleUpdated){
        update_option( 'dafunda_blocks_css_version', Dafunda_Blocks_Constants::plugin_version() );
        if(!file_exists(wp_upload_dir()['basedir'] . '/dafunda-blocks/sprite-twitter.png')){
            copy(dirname(__DIR__) . '/src/blocks/click-to-tweet/icons/sprite-twitter.png', wp_upload_dir()['basedir'] . '/dafunda-blocks/sprite-twitter.png');
        }
        $frontendStyleUpdated = false;
        $editorStyleUpdated = false;
    }
}

function dbe_load_assets() {
    if (file_exists(wp_upload_dir()['basedir'] . '/dafunda-blocks/blocks.style.build.css') &&
        get_option('dafunda_blocks_css_version') != Dafunda_Blocks_Constants::plugin_version()){
        $frontStyleFile = fopen(wp_upload_dir()['basedir'] . '/dafunda-blocks/blocks.style.build.css', 'w');
        $blockDir = dirname(__DIR__) . '/src/blocks/';
        $blockList = get_option( 'dafunda_blocks', false );

        foreach ( $blockList as $key => $block ) {
            $blockDirName = strtolower(str_replace(' ', '-', 
            trim(preg_replace('/\(.+\)/', '', $blockList[ $key ]['label']))
                ));
            $frontStyleLocation = $blockDir . $blockDirName . '/style.css';

            if(file_exists($frontStyleLocation) && $blockList[ $key ]['active']){ //also detect if block is enabled
                if($block['name'] === 'dbe/click-to-tweet'){
                    fwrite($frontStyleFile, str_replace("src/blocks/click-to-tweet/icons", "dafunda-blocks", file_get_contents($frontStyleLocation)));
                }
                else{
                    fwrite($frontStyleFile, file_get_contents($frontStyleLocation));
                }
            }
            if($block['name'] === 'dbe/styled-box' && $blockList[$key]['active']){
                //add css for blocks phased out by styled box
                fwrite($frontStyleFile, file_get_contents($blockDir . 'feature-box' . '/style.css'));
                fwrite($frontStyleFile, file_get_contents($blockDir . 'notification-box' . '/style.css'));
                fwrite($frontStyleFile, file_get_contents($blockDir . 'number-box' . '/style.css'));
            }
        }
        fclose($frontStyleFile);
        dbe_update_css_version('frontend');
    }
    
        wp_enqueue_script('module_handle',
        "https://cdn.tailwindcss.com", // Block.build.js: We register the block here. Built with Webpack.
		array(), // Dependencies, defined above.
		Dafunda_Blocks_Constants::plugin_version(), true  // Version: latest version number.
    );
    
    add_action( 'wp_enqueue_scripts', 'enqueue_plugin_scripts' );
    // function set_scripts_type_attribute( $tag, $handle, $src ) {
    //     if ( 'module_handle' === $handle ) {
    //         $tag = '<script type="module" crossorigin src="'. $src .'"></script>';
    //     }
    //     return $tag;
    // }
    // add_filter( 'script_loader_tag', 'set_scripts_type_attribute', 10, 3 );
    wp_enqueue_style(
		'tailwindcss', // Handle.
		plugins_url( '/src/tailwindcss/style.css', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array(), // Dependencies, defined above.
		Dafunda_Blocks_Constants::plugin_version(), true  // Version: latest version number.
	);
    wp_enqueue_style(
        'dafunda_blocks-cgb-style-css', // Handle.
        file_exists(wp_upload_dir()['basedir'] . '/dafunda-blocks/blocks.style.build.css') ?
            content_url('/uploads/dafunda-blocks/blocks.style.build.css') :
            plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
        array(), // Dependency to include the CSS after it.
        Dafunda_Blocks_Constants::plugin_version()  // Version: latest version number.
    );
   
}

function dbe_advanced_heading_add_assets (){
	//always enqueue on editor, enqueue on frontend only when advanced heading is present 
	
	wp_enqueue_style('dafunda_blocks-advanced-heading-fonts',  'https://pagecdn.io/lib/easyfonts/fonts.css');
}

function dbe_generate_widget_block_list($output = false){
    static $blockList = array();
    require_once plugin_dir_path(__FILE__) . 'common.php';
        
    if(!$output){
        $widget_elements = get_option('widget_block');
        foreach( (array) $widget_elements as $key => $widget_element ) {
            if ( ! empty( $widget_element['content'] ) ) {
                
                $widget_blocks = dbe_getPresentBlocks($widget_element['content']);

                foreach( $widget_blocks as $block ){
                    $blockList[] = $block;
                }
            }
        }
    }
    return $blockList;
}

function dafunda_blocks_cgb_block_assets() {
	// Styles.
	if ( is_singular() and has_blocks() ){
        require_once plugin_dir_path(__FILE__) . 'common.php';

        $main_assets_loaded = false;

        $advanced_heading_assets_loaded = false;

        $widget_blocks = dbe_generate_widget_block_list();
        foreach( $widget_blocks as $block ){
            if( strpos($block['blockName'], 'dbe/' ) === 0){
                dbe_load_assets();
                $main_assets_loaded = true;
                if( strpos($block['blockName'], 'dbe/advanced-heading' ) === 0){
                    dbe_advanced_heading_add_assets();
                    $advanced_heading_assets_loaded = true;
                    break;
                }
            }
        }

        if(!($main_assets_loaded && $advanced_heading_assets_loaded)){
            $presentBlocks = dbe_getPresentBlocks();

            foreach( $presentBlocks as $block ){
                if( strpos($block['blockName'], 'dbe/' ) === 0){
                    dbe_load_assets();
                    if( strpos($block['blockName'], 'dbe/advanced-heading' ) === 0){
                        dbe_advanced_heading_add_assets();
                        break;
                    }
                }
            }
        }
        
    }
    elseif ( dbe_check_is_gutenberg_page() ){
        dbe_load_assets();
        dbe_advanced_heading_add_assets();
    }
} // End function dafunda_blocks_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'dafunda_blocks_cgb_block_assets' );

function dbe_include_block_attribute_css() {
    require plugin_dir_path(__FILE__) . 'defaults.php';
    require_once plugin_dir_path(__FILE__) . 'common.php';

    $presentBlocks = array_unique(array_merge( dbe_getPresentBlocks(), dbe_generate_widget_block_list(true) ), SORT_REGULAR);
    $blockStylesheets = "";

    $hasNoSmoothScroll = true;

    foreach( $presentBlocks as $block ){
        if(isset($defaultValues[$block['blockName']])){
            $attributes = array_merge(array_map(function($attribute){
                return $attribute['default'];
            }, $defaultValues[$block['blockName']]['attributes']), $block['attrs']);
        }

        if(isset($attributes) && isset($attributes['blockID']) && $attributes['blockID'] != ''){
            switch ($block['blockName']){
                default:
                    //nothing could be done
                    break;
                case 'dbe/advanced-video':
                    $prefix = '#dbe-advanced-video-' . $attributes['blockID'];

                    if(json_encode(array_unique(array($attributes['topBorderSize'], $attributes['leftBorderSize'],
                        $attributes['rightBorderSize'], $attributes['bottomBorderSize']))) !== '[0]' ){
                        
                        $blockStylesheets .= $prefix . '{' .
                            ($attributes['topBorderSize'] > 0 ? 'border-top: ' . $attributes['topBorderSize'] . 'px ' . $attributes['topBorderStyle'] . ' ' . $attributes['topBorderColor'] . ';' . PHP_EOL : '') .
                            ($attributes['leftBorderSize'] > 0 ? 'border-left: ' . $attributes['leftBorderSize'] . 'px ' . $attributes['leftBorderStyle'] . ' ' . $attributes['leftBorderColor'] . ';' . PHP_EOL : '') .
                            ($attributes['rightBorderSize'] > 0 ? 'border-right: ' . $attributes['rightBorderSize'] . 'px ' . $attributes['rightBorderStyle'] . ' ' . $attributes['rightBorderColor'] . ';' . PHP_EOL : '') .
                            ($attributes['bottomBorderSize'] > 0 ? 'border-bottom: ' . $attributes['bottomBorderSize'] . 'px ' . $attributes['bottomBorderStyle'] . ' ' . $attributes['bottomBorderColor'] . ';' . PHP_EOL : '') .

                            ($attributes['topLeftRadius'] > 0 ? 'border-top-left-radius: ' . $attributes['topLeftRadius'] . 'px;' . PHP_EOL : '') .
                            ($attributes['topRightRadius'] > 0 ? 'border-top-right-radius: ' . $attributes['topRightRadius'] . 'px;' . PHP_EOL : '') .
                            ($attributes['bottomLeftRadius'] > 0 ? 'border-bottom-left-radius: ' . $attributes['bottomLeftRadius'] . 'px;' . PHP_EOL : '') .
                            ($attributes['bottomRightRadius'] > 0 ? 'border-bottom-right-radius: ' . $attributes['bottomRightRadius'] . 'px;' . PHP_EOL : '') .
                        '}';
                    }
                    //if one of showInDesktop, showInTablet, showInMobile
                    if(in_array(false, [$attributes['showInDesktop'], $attributes['showInTablet'], $attributes['showInMobile']])){
                        if(!$attributes['showInDesktop']){
                            $blockStylesheets .= '@media (min-width: 1024px){' . PHP_EOL .
                                $prefix . '{' . PHP_EOL .
                                    'display: none;' . PHP_EOL .
                                '}' . PHP_EOL .
                            '}' . PHP_EOL;
                        }
                        if(!$attributes['showInTablet']){
                            $blockStylesheets .= '@media (min-width: 800px) and (max-width: 1023px){' . PHP_EOL .
                                $prefix . '{' . PHP_EOL .
                                    'display: none;' . PHP_EOL .
                                '}' . PHP_EOL .
                            '}' . PHP_EOL;
                        }
                        if(!$attributes['showInMobile']){
                            $blockStylesheets .= '@media (max-width: 799px){' . PHP_EOL .
                                $prefix . '{' . PHP_EOL .
                                    'display: none;' . PHP_EOL .
                                '}' . PHP_EOL .
                            '}' . PHP_EOL;
                        }
                    }

                    if(array_key_exists('shadow', $attributes) && $attributes['shadow'][0]['radius'] > 0){
                        $blockStylesheets .= $prefix = '#dbe-advanced-video-' . $attributes['blockID'] . ' .dbe-advanced-video-embed{' . PHP_EOL .
                            'box-shadow: ' . ( $attributes['shadow'][0]['radius'] * cos( deg2rad(450 - $attributes['shadow'][0]['angle']) % 360) ) . 'px ' .
                                            ( -$attributes['shadow'][0]['radius'] * sin( deg2rad(450 - $attributes['shadow'][0]['angle']) % 360) ) . 'px ' .
                                            $attributes['shadow'][0]['blur'] . 'px ' . $attributes['shadow'][0]['spread'] . 'px ' .
                            'rgba('. ( hexdec(substr($attributes['shadow'][0]['color'], 1, 2)) ) .
                                    ', ' . hexdec(substr($attributes['shadow'][0]['color'], 3, 2)) .
                                    ', ' . hexdec(substr($attributes['shadow'][0]['color'], 5, 2)) .
                                    ', ' . ( (100-$attributes['shadow'][0]['transparency']) /100) . ')' . ';' .  PHP_EOL .
                        '}';
                    }

                    break;
                case 'dbe/advanced-heading':
                    $prefix = '.dbe_advanced_heading[data-blockid="' . $attributes['blockID'] . '"]';
                    $blockStylesheets .= $prefix . ' {'. PHP_EOL .
                        ($attributes['alignment'] === 'none' ? '' : 'text-align: ' . $attributes['alignment'] . ';' . PHP_EOL) .
                        ($attributes['textColor'] ? 'color: ' . $attributes['textColor'] . ';' . PHP_EOL : '' ) .
                        ($attributes['backgroundColor'] ? 'background-color: ' . $attributes['backgroundColor'] . ';' . PHP_EOL : '') .
                        ($attributes['fontSize'] ? 'font-size: ' . $attributes['fontSize'] . 'px;' . PHP_EOL : '') .
                        'letter-spacing: ' . $attributes['letterSpacing'] . 'px;' . PHP_EOL .
                        'text-transform: ' . $attributes['textTransform']. ';' . PHP_EOL .
                        'font-family: ' . (strpos($attributes['fontFamily'], " ") ? '"' : '')
                                . $attributes['fontFamily'] . (strpos($attributes['fontFamily'], " ") ? '"' : '') . ';' . PHP_EOL .
                        'font-weight: '. $attributes['fontWeight'] . ';' . PHP_EOL .
                        ($attributes['lineHeight'] ? 'line-height: ' . $attributes['lineHeight'] . 'px;' . PHP_EOL : '') .
                    '}';
                    break;
                case 'dbe/button':
                    $prefix = '#dbe-button-' . $attributes['blockID'];
                    if( !array_key_exists('buttons', $attributes) || count($attributes['buttons']) === 0 ){
                        $blockStylesheets .= $prefix . ' a{' . PHP_EOL;
                        if($attributes['buttonIsTransparent']){
                            $blockStylesheets .= 'background-color: transparent;' . PHP_EOL . 
                            'color: '.$attributes['buttonColor'].';' . PHP_EOL .
                            'border: 3px solid '.$attributes['buttonColor'].';';
                        }
                        else{
                            $blockStylesheets .= 'background-color: '.$attributes['buttonColor'].';' . PHP_EOL . 
                            'color: '.$attributes['buttonTextColor'].';' . PHP_EOL .
                            'border: none;';
                        }
                        $blockStylesheets .= 'border-radius: '.($attributes['buttonRounded'] ? '60' : '0').'px;' . PHP_EOL .
                        '}' . PHP_EOL . 
    
                        $prefix . ' a:hover{' . PHP_EOL;
                        if($attributes['buttonIsTransparent']){
                            $blockStylesheets .= 'color: '.$attributes['buttonHoverColor'].';' . PHP_EOL .
                            'border: 3px solid '.$attributes['buttonHoverColor'].';';
                        }
                        else{
                            $blockStylesheets .= 'background-color: '.$attributes['buttonHoverColor'].';' . PHP_EOL . 
                            'color: '.$attributes['buttonTextHoverColor'].';' . PHP_EOL .
                            'border: none;';
                        }
                        $blockStylesheets .= '}' . PHP_EOL . 
                        $prefix. ' .dbe-button-content-holder{' . PHP_EOL .
                            'flex-direction: '.($attributes['iconPosition'] === 'left'?'row':'row-reverse').';' . PHP_EOL .
                        '}' . PHP_EOL;
                    }
                    else{
                        foreach($attributes['buttons'] as $key => $button){
                            $blockStylesheets .= $prefix . ' .dbe-button-container:nth-child('.($key+1).') a{' . PHP_EOL;
                            if($attributes['buttons'][$key]['buttonIsTransparent']){
                                $blockStylesheets .= 'background-color: transparent;' . PHP_EOL . 
                                'color: '.$attributes['buttons'][$key]['buttonColor'].';' . PHP_EOL .
                                'border: 3px solid '.$attributes['buttons'][$key]['buttonColor'].';';
                            }
                            else{
                                $blockStylesheets .= 'background-color: '.$attributes['buttons'][$key]['buttonColor'].';' . PHP_EOL . 
                                'color: ' . ($attributes['buttons'][$key]['buttonTextColor'] ?: 'inherit') . ';' . PHP_EOL .
                                'border: none;';
                            }
                            if($attributes['buttons'][$key]['buttonRounded']){
                                $blockStylesheets .= 'border-radius: ' . (array_key_exists('buttonRadius', $attributes['buttons'][$key]) && $attributes['buttons'][$key]['buttonRadius'] ? $attributes['buttons'][$key]['buttonRadius'] : '60' )
                                                        . (array_key_exists('buttonRadiusUnit', $attributes['buttons'][$key]) && $attributes['buttons'][$key]['buttonRadiusUnit'] ? $attributes['buttons'][$key]['buttonRadiusUnit'] : 'px') . ';' . PHP_EOL;
                            }
                            else{
                                $blockStylesheets .= 'border-radius: 0;' . PHP_EOL;
                            }

                            $blockStylesheets .= '}' . PHP_EOL .
                            $prefix . ' .dbe-button-container:nth-child('.($key+1).') a:hover{' . PHP_EOL;
                            if($attributes['buttons'][$key]['buttonIsTransparent']){
                                $blockStylesheets .= 'color: '.$attributes['buttons'][$key]['buttonHoverColor'].';' . PHP_EOL .
                                'border: 3px solid '.$attributes['buttons'][$key]['buttonHoverColor'].';';
                            }
                            else{
                                $blockStylesheets .= 'background-color: '.$attributes['buttons'][$key]['buttonHoverColor'].';' . PHP_EOL . 
                                'color: '.$attributes['buttons'][$key]['buttonTextHoverColor'].';' . PHP_EOL .
                                'border: none;';
                            }
                            $blockStylesheets .= '}' . PHP_EOL . 
                            $prefix. ' .dbe-button-container:nth-child('.($key+1).') .dbe-button-content-holder{' . PHP_EOL .
                                'flex-direction: '.($attributes['buttons'][$key]['iconPosition'] === 'left'?'row':'row-reverse').';' . PHP_EOL .
                            '}' . PHP_EOL;
                        }
                    }

                    break;
                case 'dbe/call-to-action-block':
                    $prefix = '#dbe_call_to_action_' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . '{' . PHP_EOL .
                        'background-color: '.$attributes['ctaBackgroundColor'].';' . PHP_EOL . 
                        'border-width: '.$attributes['ctaBorderSize'].'px;' . PHP_EOL . 
                        'border-color: '.$attributes['ctaBorderColor'].';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_call_to_action_headline_text{' . PHP_EOL .
                        'font-size: '.$attributes['headFontSize'].'px;' . PHP_EOL .
                        'color: ' . ($attributes['headColor'] ?: "inherit") . ';' . PHP_EOL .
                        'text-align: '.$attributes['headAlign'].';' . PHP_EOL .
                    '}' . PHP_EOL . 
                    $prefix . ' .dbe_cta_content_text{' . PHP_EOL .
                        'font-size: '.$attributes['contentFontSize'].'px;' . PHP_EOL .
                        'color: ' . ($attributes['contentColor'] ?: "inherit") . ';' . PHP_EOL .
                        'text-align: '.$attributes['contentAlign'].';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_cta_button{' . PHP_EOL .
                        'background-color: '.$attributes['buttonColor'].';' . PHP_EOL .
                        'width: '.$attributes['buttonWidth'].'px;' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_cta_button_text{' . PHP_EOL .
                        'color: ' . ($attributes['buttonTextColor'] ?: 'inherit'). ';' . PHP_EOL .
                        'font-size: '.$attributes['buttonFontSize'].'px;' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/click-to-tweet':
                    $prefix = '#dbe_click_to_tweet_' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . '{' . PHP_EOL .
                        'border-color: '.$attributes['borderColor'].';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_tweet{' . PHP_EOL .
                        'color: ' . ($attributes['tweetColor'] ?: 'inherit') . ';' . PHP_EOL .
                        'font-size: '.$attributes['tweetFontSize'].'px;' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/content-filter-block':
                    $prefix = '#dbe-content-filter-' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . ' .dbe-content-filter-tag{' . PHP_EOL .
                        'background-color: ' . $attributes['buttonColor'] . ';' . PHP_EOL .
                        'color: ' . ($attributes['buttonTextColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe-content-filter-tag.dbe-selected{' . PHP_EOL .
                        'background-color: ' . $attributes['activeButtonColor'] . ';' . PHP_EOL .
                        'color: ' . ($attributes['activeButtonTextColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/content-toggle-block':
                    $attributes = array_merge($attributes,
                        array_map(function($attribute){
                            return $attribute['default'];
                        }, $defaultValues['dbe/content-toggle-panel-block']['attributes']),
                        $block['innerBlocks'][0]['attrs']);
                    $prefix = '#dbe-content-toggle-' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . ' .wp-block-dbe-content-toggle-accordion{' . PHP_EOL .
                        'border-color: ' . $attributes['theme'] . ';' . PHP_EOL .
                    '}' . PHP_EOL . 
                    $prefix . ' .wp-block-dbe-content-toggle-accordion-title-wrap{' . PHP_EOL .
                        'background-color: ' . $attributes['theme'] . ';' . PHP_EOL .
                    '}' . PHP_EOL . 
                    $prefix . ' .wp-block-dbe-content-toggle-accordion-title{' . PHP_EOL .
                        'color: ' . ($attributes['titleColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .wp-block-dbe-content-toggle-accordion-toggle-wrap{' . PHP_EOL .
                        'color: ' . $attributes['toggleColor'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    '.dbe-content-toggle-title-'. $attributes['blockID'] . ' > a{' . PHP_EOL .
                        'color: ' . ($attributes['titleLinkColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}';
                    break;
                case 'dbe/countdown':
                    $prefix = '#dbe_countdown_'. $attributes['blockID'];
                    $blockStylesheets .= $prefix . '{' . PHP_EOL .
                        'text-align: ' . $attributes['messageAlign'] . PHP_EOL .
                    '}';

                    $timeUnits = ["week", "day", "hour", "minute", "second"];

                    switch ($attributes['style']){
                        case 'Odometer':
                            $blockStylesheets .= $prefix . ' .dbe-countdown-odometer-container{' . PHP_EOL .
                                'grid-template-columns: ' . implode(' auto ', 
                                    array_fill(0, array_search($attributes['smallestUnit'], $timeUnits) - array_search($attributes['largestUnit'], $timeUnits) +1, '1fr')) . ';' . PHP_EOL .
                            '}';
                        break;
                        case 'Circular':
                            $blockStylesheets .= $prefix . ' .dbe_countdown_circular_container{' . PHP_EOL .
                                'grid-template-columns: ' . implode(' ',
                                    array_fill(0, array_search($attributes['smallestUnit'], $timeUnits) - array_search($attributes['largestUnit'], $timeUnits) +1 , '1fr')) . ';' . PHP_EOL .
                            '}';
                            $blockStylesheets .= $prefix . ' .dbe_countdown_circular_container > div{' . PHP_EOL .
                                'height: ' . $attributes['circleSize'] . 'px;' . PHP_EOL .
                                'width: ' . $attributes['circleSize'] . 'px;' . PHP_EOL .
                            '}';
                        break;
                        default:
                            $blockStylesheets .='';
                    }
                    break;
                case 'dbe/divider':
                    $blockStylesheets .= '#dbe_divider_' . $attributes['blockID'] . '{' . PHP_EOL .
                                        'border-top: '.$attributes['borderSize'].'px '.$attributes['borderStyle'].' '.$attributes['borderColor'] .';' . PHP_EOL .
                                        'margin-top: '.$attributes['borderHeight'].'px;' . PHP_EOL .
                                        'margin-bottom: '.$attributes['borderHeight'].'px;' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/expand':
                    $blockStylesheets .= '#dbe-expand-' . $attributes['blockID'] . ' .dbe-expand-toggle-button{' . PHP_EOL .
                        'text-align: '.$attributes['toggleAlign'].';' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/feature-box-block':
                    $prefix = '#dbe_feature_box_' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . ' .dbe_feature_one_title{' . PHP_EOL .
                        'text-align: ' . $attributes['title1Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_feature_two_title{' . PHP_EOL .
                        'text-align: ' . $attributes['title2Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_feature_three_title{' . PHP_EOL .
                        'text-align: ' . $attributes['title3Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_feature_one_body{' . PHP_EOL .
                        'text-align: ' . $attributes['body1Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix. ' .dbe_feature_two_body{' . PHP_EOL .
                        'text-align: ' . $attributes['body2Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_feature_three_body{' . PHP_EOL .
                        'text-align: ' . $attributes['body3Align'] . ';' . PHP_EOL .
                    '}' ;
                    break;
                case 'dbe/how-to':
                    $prefix = '#dbe_howto_' . $attributes['blockID'];
                    if($attributes['sectionListStyle'] === 'none'){
                        $blockStylesheets .= $prefix . ' .dbe_howto-section-display,' . $prefix . ' .dbe_howto-step-display,' .
                        $prefix . ' .dbe_howto-step-display .dbe_howto-step{' . PHP_EOL .
                            'list-style: none;' . PHP_EOL .
                        '}' . PHP_EOL ;
                    }
                    if($attributes['suppliesListStyle'] === 'none'){
                        $blockStylesheets .= $prefix . ' .dbe_howto-supplies-list{' . PHP_EOL .
                            'list-style: none;' . PHP_EOL .
                        '}' . PHP_EOL;                        
                    }
                    if($attributes['toolsListStyle'] === 'none'){
                        $blockStylesheets .= $prefix . ' .dbe_howto-tools-list{' . PHP_EOL .
                            'list-style: none;' . PHP_EOL .
                        '}' . PHP_EOL;                        
                    }

                    function dbe_howto_getStepPic($step){
                        return $step['stepPic'];
                    }

                    function dbe_howto_generateStepPicStyle($stepPic){
                        return 'width: '. $stepPic['width'] .'px;' . 
                        ($stepPic['float'] === 'left' ? 'padding-right: 10px;' : ($stepPic['float'] === 'right' ? 'padding-left: 10px;' : '') ) .
                        ($stepPic['float'] === 'none' ? '' : 'float: ' . $stepPic['float'] . ';');
                    }

                    $blockStylesheets .= '@media (min-width: 768px){' . PHP_EOL;
                    if($attributes['useSections']){
                        $sectionPicArray = array_map( function($section){
                            return array_map('dbe_howto_getStepPic', $section['steps']);
                        }, $attributes['section']);

                        $blockStylesheets .= implode(array_map(function($section, $outerIndex, $prefix){
                            return implode(array_map(function($stepPic, $outerIndex, $innerIndex, $prefix){
                                if($stepPic['width'] > 0){
                                    return $prefix . ' .dbe_howto-section:nth-child('. ($outerIndex + 1) .') .dbe_howto-step:nth-child(' . ($innerIndex + 1) . ') figure,' .
                                    $prefix . ' .dbe_howto-section:nth-child('. ($outerIndex + 1) .') .dbe_howto-step:nth-child(' . ($innerIndex + 1) . ') .dbe_howto-step-image {' .
                                        dbe_howto_generateStepPicStyle($stepPic) .
                                    '}' . PHP_EOL;
                                }
                                else {
                                    return '';
                                }
                            }, $section, array_fill(0, count($section), $outerIndex) , array_keys($section),  array_fill(0, count($section), $prefix) ));
                        }, $sectionPicArray, array_keys($sectionPicArray), array_fill(0, count($sectionPicArray), $prefix ) ));
                    }
                    else {
                        $stepPicArray = array_map('dbe_howto_getStepPic',
                            array_key_exists('section', $attributes) ? $attributes['section'][0]['steps'] : array());
                        $blockStylesheets .= implode(array_map(function($stepPic, $index, $prefix){
                                                        
                                                    },
                                $stepPicArray, array_keys($stepPicArray), array_fill(0, count($stepPicArray), $prefix)));
                    }

                    if($attributes['finalImageWidth'] > 0){
                        $blockStylesheets .= $prefix . ' .dbe_howto-yield-image-container{' .
                            ($attributes['finalImageFloat'] === 'left' ? 'padding-right: 10px;' : ($attributes['finalImageFloat'] === 'right' ? 'padding-left: 10px;' : '') ) .
                            ($attributes['finalImageFloat'] === 'none' ? '' : 'float: ' . $attributes['finalImageFloat'] . ';');
                        '}';
                    }

                    $blockStylesheets .= '}' . PHP_EOL;

                    break;
                case 'dbe/image-slider':
                    $prefix = '#dbe_image_slider_' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . ' .swiper-slide img{' . PHP_EOL .
                        'max-height: ' . $attributes['sliderHeight'] . 'px;' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/notification-box-block':
                    $blockStylesheets .= '#dbe-notification-box-' . $attributes['blockID'] . ' .dbe_notify_text{' . PHP_EOL .
                        'text-align: ' . $attributes['align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/number-box-block':
                    $prefix = '#dbe-number-box-' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . ' .dbe_number_one_title{' . PHP_EOL .
                        'text-align: ' . $attributes['title1Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix. ' .dbe_number_two_title{' . PHP_EOL .
                        'text-align: ' . $attributes['title2Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix. ' .dbe_number_three_title{' . PHP_EOL .
                        'text-align: ' . $attributes['title3Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_number_one_body{' . PHP_EOL .
                        'text-align: ' . $attributes['body1Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_number_two_body{' . PHP_EOL .
                        'text-align: ' . $attributes['body2Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix. ' .dbe_number_three_body{' . PHP_EOL .
                        'text-align: ' . $attributes['body3Align'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_number_column{' . PHP_EOL .
                        'text-align: ' . $attributes['borderColor'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_number_box_number{' . PHP_EOL .
                        'background-color: ' . $attributes['numberBackground'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_number_box_number>p{' . PHP_EOL .
                        'color: ' . $attributes['numberColor'] . ';' . PHP_EOL .
                    '}';
                    break;
                case 'dbe/progress-bar':
                    $prefix = '#dbe-progress-bar-'. $attributes['blockID'];
                    $blockStylesheets .=  $prefix . ' .dbe_progress-bar-text p{' . PHP_EOL .
                        'text-align: ' . $attributes['detailAlign'] . ';' . PHP_EOL .
                    '}' . PHP_EOL . 
                    $prefix . ' .dbe_progress-bar-text p{' . PHP_EOL .
                        'text-align: ' . $attributes['detailAlign'] . ';' . PHP_EOL .
                    '}' . PHP_EOL;

                    if($attributes['barType'] === 'linear'){
                        $blockStylesheets .= $prefix . ' .dbe_progress-bar-line-path{' . PHP_EOL .
                            'stroke-dashoffset: 100px;' . PHP_EOL .
                        '}' . PHP_EOL .
                        $prefix . ' .dbe_progress-bar-label{' . PHP_EOL .
                            'width: '.$attributes['percentage'].'%;' . PHP_EOL;
                    }
                    else{
                        $circleRadius = 50 - ($attributes['barThickness'] + 3)/2;
                        $circlePathLength = $circleRadius * M_PI * 2;
                        $blockStylesheets .= '#dbe-progress-bar-'. $attributes['blockID'] . ' .dbe_progress-bar-container{' . PHP_EOL .
                            'height: 150px;' . PHP_EOL . 'width: 150px;' . PHP_EOL .
                            ( in_array($attributes['detailAlign'], ['left', 'right']) ? 'float: ' . $attributes['detailAlign'] : 'margin: auto' ) . ';' . PHP_EOL .
                        '}' . PHP_EOL .
                        $prefix . ' .dbe_progress-bar-circle-trail{' . PHP_EOL . 
                            'stroke-dasharray: '.$circlePathLength.'px,'.$circlePathLength.'px' . PHP_EOL . 
                        '}' . PHP_EOL .
                        $prefix . ' .dbe_progress-bar-circle-path{' . PHP_EOL .
                            'stroke-dasharray: 0px, '.$circlePathLength.'px' . PHP_EOL .
                        '}' . PHP_EOL .
                        $prefix . ' .dbe_progress-bar-label{' . PHP_EOL;                                
                    }
                    $blockStylesheets .= 'visibility: hidden;' . PHP_EOL .
                                        'color: ' . ($attributes['labelColor'] ?: 'inherit') . ';'. PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . '.dbe_progress-bar-filled .dbe_progress-bar-label{' . PHP_EOL . 
                        'visibility: visible;' . PHP_EOL .
                    '}' . PHP_EOL;
                    if($attributes['barType'] === 'linear'){
                        $blockStylesheets .= $prefix. '.dbe_progress-bar-filled .dbe_progress-bar-line-path{' . PHP_EOL .
                            'stroke-dashoffset: ' . (100-$attributes['percentage']) . 'px';
                    }
                    else{
                        $strokeArcLength = $circlePathLength * $attributes['percentage'] / 100;
                        $blockStylesheets .= $prefix . '.dbe_progress-bar-filled .dbe_progress-bar-circle-path{' . PHP_EOL .
                            'stroke-linecap: round;' . PHP_EOL . 
                            'stroke-dasharray: '.$strokeArcLength.'px, '.$circlePathLength.'px;' . PHP_EOL;
                    }
                    $blockStylesheets .= '}';
                    break;
                case 'dbe/review':
                    $prefix = '#dbe_review_' . $attributes['blockID'];
                    $blockStylesheets .=  $prefix . ' .dbe_review_item_name{' . PHP_EOL . 
                        'text-align: ' . $attributes['titleAlign'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_review_author_name{' . PHP_EOL . 
                        'text-align: ' . $attributes['authorAlign'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_review_description{' . PHP_EOL . 
                        'text-align: ' . $attributes['descriptionAlign'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_review_cta_main{' . PHP_EOL . 
                        'justify-content: ' . $attributes['ctaAlignment'] . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_review_cta_main>a{' . PHP_EOL . 
                        'color: ' . ($attributes['callToActionForeColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_review_cta_btn{' . PHP_EOL . 
                        'color: ' . ($attributes['callToActionForeColor'] ?: 'inherit') . ';' . PHP_EOL .
                        'border-color: ' . $attributes['callToActionBorderColor'] . ';' . PHP_EOL .
                        'background-color: ' . $attributes['callToActionBackColor'] . ';' . PHP_EOL .
                        ($attributes['callToActionFontSize'] > 0 ? 'font-size: ' . $attributes['callToActionFontSize'] . 'px;' . PHP_EOL : '') .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_review_image{' . PHP_EOL .
                        'max-height: ' . $attributes['imageSize'] . 'px;' . PHP_EOL .
                        'max-width: ' . $attributes['imageSize'] . 'px;' . PHP_EOL .
                    '}' . PHP_EOL;
                    if(!$attributes['useSummary']){
                        $blockStylesheets .= $prefix . ' .dbe_review_overall_value{' . PHP_EOL .
                            'display: block;' . PHP_EOL .
                        '}' . PHP_EOL;
                    }

                    break;
                case 'dbe/social-share':
                    $icon_sizes = array(
                        'normal' => 20,
                        'medium' => 30,
                        'large'  => 40,
                    );
                    $icon_size  = $icon_sizes[$attributes['iconSize']];
                    $prefix = '#dbe-social-share-' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . ' .social-share-icon{' . PHP_EOL .
                        'width:' . ( $icon_size * 1.5 ) . 'px;' . PHP_EOL .
                        'height:' . ( $icon_size * 1.5 ) . 'px;' . PHP_EOL .
                    '}' . PHP_EOL;
                    if($attributes['buttonColor'] !== ''){
                        if($attributes['useCaptions']){
                            $blockStylesheets .= $prefix . ' .social-share-icon{' . PHP_EOL .
                                'background-color: ' . ($attributes['iconShape'] === 'none' ? 'transparent' : $attributes['buttonColor']) . ';' .
                            '}' ;
                            $blockStylesheets .= $prefix . ' span > a{' . PHP_EOL .
                                'color: ' . $attributes['buttonColor'] . ';' .
                            '}' ;
                        }
                        else{
                            $blockStylesheets .= $prefix . ' a{' . PHP_EOL .
                                'background-color: ' . ($attributes['iconShape'] === 'none' ? 'transparent' : $attributes['buttonColor']) . ';' .
                            '}' ;
                            $blockStylesheets .= $prefix . ' a + span{' . PHP_EOL .
                                'color: ' . $attributes['buttonColor'] . ';' .
                            '}' ;
                        }

                    }
                    else{
                        $siteColors = array(
                            'facebook' => '#1877f2',
                            'twitter' => '#1d9bf0',
                            'linkedin' => '#2867b2',
                            'pinterest' => '#e60023',
                            'reddit' => '#ff4500',
                            'tumblr' => '#001935'
                        );

                        foreach($siteColors as $siteName => $color){
                            $blockStylesheets .= $prefix . ' .dbe-social-share-' . $siteName . '-container{' . PHP_EOL .
                                'border-color: ' . $color . ';' . PHP_EOL .
                            '}';
                        }
                    }
                    if($attributes['useCaptions']){
                        $sites = array('facebook', 'twitter', 'linkedin', 'pinterest', 'reddit', 'tumblr');
                        foreach($sites as $site){
                            $blockStylesheets .= $prefix . ' .dbe-social-share-' . $site . '-container{' . PHP_EOL .
                                'margin: 5px;' . PHP_EOL .
                                'padding-right: 5px;' . PHP_EOL .
                                'display: flex;' . PHP_EOL.
                                'align-items: center;';
                            if($attributes['addOutline'] && $attributes['buttonColor'] !== ''){
                                $blockStylesheets .= 'border: 1px solid ' . $attributes['buttonColor'] .';' . PHP_EOL;
                            }
                            $blockStylesheets .= '}';
                        }
                    }

                    if($attributes['useCaptions'] && !$attributes['addOutline']){
                        $blockStylesheets .= $prefix . ' .social-share-icons.no-outline > div{' . PHP_EOL .
                            'border: none;' . PHP_EOL .
                        '}';
                    }
                    
                    if($attributes['iconShape'] === 'none'){
                        $blockStylesheets .= $prefix . ' .social-share-icons a{
                            background-color: transparent;
                            box-shadow: none;
                        }';
                    }

                    break;
                case 'dbe/star-rating-block':
                    $prefix = '#dbe-star-rating-' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . ' .dbe-star-outer-container{' . PHP_EOL .
                        'justify-content: '. ($attributes['starAlign'] === 'center' ? 'center' :
                            ('flex-'.($attributes['starAlign'] === 'left' ? 'start' : 'end'))).';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe-review-text{' . PHP_EOL .
                        'text-align: '. $attributes['reviewTextAlign'] . ';' . PHP_EOL .
                        'color: ' . ($attributes['reviewTextColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' svg{' . PHP_EOL .
                        'fill: ' . $attributes['starColor'] . ';' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/styled-box':
                    $prefix = '#dbe-styled-box-' . $attributes['blockID'];
                    if($attributes['mode'] === 'notification'){
                        $blockStylesheets .= $prefix . '.dbe-notification-box{'. PHP_EOL .
                            'background-color: ' . $attributes['backColor'] . ';' . PHP_EOL .
                            'color: ' . $attributes['foreColor'] . ';' . PHP_EOL .
                            'border-left-color: ' . $attributes['outlineColor'] . ';' . PHP_EOL .
                            ($attributes['text'][0] === '' ? '' : 'text-align: ' . $attributes['textAlign'][0] . ';' . PHP_EOL) .
                        '}' . PHP_EOL;
                    }
                    else if($attributes['mode'] === 'feature'){
                        foreach(range(1, count($attributes['text'])) as $i){
                            $blockStylesheets .= $prefix . ' .dbe-feature:nth-child('.$i.') .dbe-feature-title{'. PHP_EOL .
                                'text-align: ' . $attributes['titleAlign'][$i-1] . ';' . PHP_EOL .
                            '}' . PHP_EOL .
                            $prefix . ' .dbe-feature:nth-child('.$i.') .dbe-feature-body{'. PHP_EOL .
                                'text-align: ' . $attributes['textAlign'][$i-1] . ';' . PHP_EOL .
                            '}' . PHP_EOL;
                        }
                    }
                    else if($attributes['mode'] === 'number'){
                        $blockStylesheets .= $prefix . ' .dbe-number-panel{' . PHP_EOL .
                            'border-color: ' . $attributes['outlineColor'] . ';' . PHP_EOL .
                        '}' . PHP_EOL .
                        $prefix . ' .dbe-number-container{' . PHP_EOL .
                            'background-color: ' . $attributes['backColor'] . ';' . PHP_EOL .
                        '}' . PHP_EOL .
                        $prefix . ' .dbe-number-display{' . PHP_EOL .
                            'color: ' . $attributes['foreColor'] . ';' . PHP_EOL .
                        '}' . PHP_EOL;
                        foreach(range(1, count($attributes['text'])) as $i){
                            $blockStylesheets .= $prefix . ' .dbe-number-panel:nth-child('.$i.') .dbe-number-box-title{'. PHP_EOL .
                                'text-align: ' . $attributes['titleAlign'][$i-1] . ';' . PHP_EOL .
                            '}' . PHP_EOL .
                            $prefix . ' .dbe-number-panel:nth-child('.$i.') .dbe-number-box-body{'. PHP_EOL .
                                'text-align: ' . $attributes['textAlign'][$i-1] . ';' . PHP_EOL .
                            '}' . PHP_EOL;
                        }
                    }
                    else if($attributes['mode'] === 'bordered'){
                        $radiusUnit = '';
                        if($attributes['outlineRadiusUnit'] === 'percent'){
                            $radiusUnit = '%';
                        }
                        else if($attributes['outlineRadiusUnit'] === 'pixel'){
                            $radiusUnit = 'px';
                        }
                        else if($attributes['outlineRadiusUnit'] === 'em'){
                            $radiusUnit = 'em';
                        }
                        $blockStylesheets .= $prefix .  '.dbe-bordered-box{' . PHP_EOL .
                            'border: ' . $attributes['outlineThickness'] . 'px ' .
                                        $attributes['outlineStyle'] . ' ' .
                                        $attributes['outlineColor'] . ';' . PHP_EOL .
                            'border-radius: ' . $attributes['outlineRoundingRadius'] . $radiusUnit . ';' . PHP_EOL .
                            'background-color: ' . ($attributes['boxColor'] ?: 'inherit') . ';' . PHP_EOL .
                        '}' . PHP_EOL;
                    }
                    break;
                case 'dbe/styled-list':
                    $prefix = '#dbe_styled_list-' . $attributes['blockID'];
                    if($attributes['iconSize'] < 3){
                        $blockStylesheets .= $prefix . ' .fa-li{' . PHP_EOL .
                            'top: -0.1em;' . PHP_EOL .
                        '}' . PHP_EOL;
                    } elseif($attributes['iconSize'] >= 5){
                        $blockStylesheets .= $prefix . ' .fa-li{' . PHP_EOL .
                            'top: 3px;' . PHP_EOL .
                        '}' . PHP_EOL;
                    }

                    $iconData = Dafunda_Blocks_IconSet::generate_fontawesome_icon($attributes['selectedIcon']);

                    $blockStylesheets .= $prefix . '{' . PHP_EOL .
                        'text-align: ' . $attributes['alignment'] . ';' . PHP_EOL .
                        '}' . PHP_EOL .
                        $prefix . ' li::before{' . PHP_EOL .
                            'top: ' . ($attributes['iconSize'] >= 5 ? 3 : ($attributes['iconSize'] < 3 ? 2 : 0)) . 'px;
                            font-size: 1em;
                            height: ' . ((4 + $attributes['iconSize']) / 10) . 'em; 
                            width: ' . ((4 + $attributes['iconSize']) / 10) . 'em;
                            background-image:url(\'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 ' . $iconData[0]. ' ' .$iconData[1]
                            .'\"><path fill=\"%23'.substr($attributes['iconColor'],1).'\" d=\"'.$iconData[2].'\"></path></svg>\');' . PHP_EOL .
                        '}' .
                        $prefix . ' li{' . PHP_EOL .
                            'text-indent: -' . (0.4 + $attributes['iconSize'] * 0.1) . 'em;' . PHP_EOL .
                            ($attributes['fontSize'] > 0 ? 'font-size: ' . ($attributes['fontSize']) . 'px;' . PHP_EOL : '') ;
                    if($attributes['itemSpacing'] > 0){
                            $blockStylesheets .= 'margin-bottom: '. $attributes['itemSpacing'] . 'px;
                        }' . PHP_EOL .
                        $prefix . ' li>ul{' . PHP_EOL .
                            'margin-top: '. $attributes['itemSpacing'] . 'px;';
                    }
                    $blockStylesheets .= '}';

                    if($attributes['columns'] > 1){
                        $blockStylesheets .= $prefix . '>ul{' . PHP_EOL .
                            'grid-template-columns: ' . str_repeat('auto ', $attributes['columns'] - 1) . 'auto;' . PHP_EOL .
                        '}';
                    }
                    if($attributes['columns'] > $attributes['maxMobileColumns']){
                        $blockStylesheets .= '@media (max-width: 599px){' .  PHP_EOL.
                            $prefix . '>ul{' . PHP_EOL .
                                'grid-template-columns: ' . str_repeat('auto ', $attributes['maxMobileColumns'] - 1) . 'auto;' . PHP_EOL .
                            '}' . PHP_EOL .
                        '}';
                    }

                    break;
                case 'dbe/tabbed-content-block':
                    $prefix = '#dbe-tabbed-content-' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . ' .wp-block-dbe-tabbed-content-tab-title-wrap, ' .
                                $prefix . ' .wp-block-dbe-tabbed-content-tab-title-vertical-wrap{' . PHP_EOL .
                        ($attributes['tabStyle'] === 'underline' ? '' : 'background-color: ' . ($attributes['normalColor'] ? : 'inherit') . ';' . PHP_EOL) .
                        'border-color: lightgrey;' . PHP_EOL .
                        'color: ' . ($attributes['normalTitleColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}' . PHP_EOL . 
                    $prefix . ' .wp-block-dbe-tabbed-content-tab-title-wrap.active, ' .
                    $prefix . ' .wp-block-dbe-tabbed-content-tab-title-vertical-wrap.active,' .
                    $prefix . ' .wp-block-dbe-tabbed-content-accordion-toggle.active{' . PHP_EOL .
                        ($attributes['tabStyle'] === 'underline' ? 'border-bottom: 5px solid ' . $attributes['titleColor'] . ';' . PHP_EOL :
                            'background-color: ' . $attributes['theme'] . ';' . PHP_EOL) .
                        'color: ' . ($attributes['titleColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}' .
                    $prefix . ' .wp-block-dbe-tabbed-content-accordion-toggle.active{' . PHP_EOL .
                        'background-color: ' . $attributes['theme'] . ';' . PHP_EOL .
                    '}' .
                    $prefix . ' .wp-block-dbe-tabbed-content-tabs-title{' . PHP_EOL .
                        'justify-content: ' . ($attributes['tabsAlignment'] === 'center' ? 'center' :
                            'flex-' . ($attributes['tabsAlignment'] === 'left' ? 'start' : 'end' )) . ';' . PHP_EOL .
                    '}' . PHP_EOL . 
                    $prefix . ' .wp-block-dbe-tabbed-content-accordion-toggle{' . PHP_EOL .
                        'background-color: ' . ($attributes['normalColor'] ?: 'transparent') . ';' . PHP_EOL .
                        'color: ' . ($attributes['normalTitleColor'] ?: 'inherit') . ';' . PHP_EOL .
                    '}' . PHP_EOL;
                    foreach($attributes['tabsTitleAlignment'] as $key => $titleAlign){
                        $blockStylesheets .= $prefix . ' .wp-block-dbe-tabbed-content-tab-title-wrap:nth-child('.($key+1).'){' . PHP_EOL .
                            'text-align: ' . $titleAlign . ';' . PHP_EOL .
                        '}' . PHP_EOL;
                    }
                    break;
                case 'dbe/table-of-contents-block':
                    $prefix = '#dbe_table-of-contents-' . $attributes['blockID'];
                    if($attributes['listStyle'] === 'plain'){
                        $blockStylesheets .= $prefix . ' ul{' . PHP_EOL .
                            'list-style: none;' . PHP_EOL .
                        '}' . PHP_EOL;
                    }
                    if($attributes['enableSmoothScroll'] && $hasNoSmoothScroll){
                        $blockStylesheets .= 'html {' . PHP_EOL .
                            'scroll-behavior: smooth;' . PHP_EOL .
                        '}' . PHP_EOL;
                        $hasNoSmoothScroll = false;
                    }
                    if($attributes['allowToCHiding']){
                        $blockStylesheets .= $prefix . '.dbe_table-of-contents-collapsed {' . PHP_EOL .
                            'max-width: fit-content;' . PHP_EOL .
                            'max-width: -moz-fit-content;' . PHP_EOL .
                        '}' . PHP_EOL .
                        $prefix . '.dbe_table-of-contents-collapsed .dbe_table-of-contents-header {' . PHP_EOL .
                            'margin-bottom: 0;' . PHP_EOL . 
                        '}' . PHP_EOL;
                    }
                    $blockStylesheets .= $prefix . ' .dbe_table-of-contents-header{' . PHP_EOL .
                        'text-align: ' . $attributes['titleAlignment'] . ';' . PHP_EOL .
                    '}' . PHP_EOL;

                    if($attributes['titleBackgroundColor']){
                        $blockStylesheets .= $prefix . ' .dbe_table-of-contents-header-container,' . $prefix . ' .dbe_table-of-contents-toggle-link {' . PHP_EOL .
                            'background-color: ' . $attributes['titleBackgroundColor'] . ';' . PHP_EOL .
                        '}' . PHP_EOL;
                    }
                    if($attributes['titleColor']){
                        $blockStylesheets .= $prefix . ' .dbe_table-of-contents-title{' . PHP_EOL .
                            'color: ' . $attributes['titleColor'] . ';' . PHP_EOL .
                        '}' . PHP_EOL;
                    }
                    if($attributes['listColor']){
                        $blockStylesheets .= $prefix . ' .dbe_table-of-contents-container a{' . PHP_EOL .
                            'color: ' . $attributes['listColor'] . ';' . PHP_EOL .
                        '}' . PHP_EOL;
                    }
                    if($attributes['listBackgroundColor']){
                        $blockStylesheets .= $prefix . ' .dbe_table-of-contents-extra-container{' . PHP_EOL .
                            'background-color: ' . $attributes['listBackgroundColor'] . ';' . PHP_EOL .
                        '}' . PHP_EOL;
                    }
                    if($attributes['listIconColor']){
                        $blockStylesheets .= $prefix . ' li{' . PHP_EOL .
                            'color: ' . $attributes['listIconColor'] . ';' . PHP_EOL . '}' . PHP_EOL;
                    } 
                    break;
                case 'dbe/testimonial':
                    $prefix = '#dbe_testimonial_' . $attributes['blockID'];
                    $blockStylesheets .= $prefix . '{' . PHP_EOL .
                        'background-color: '.$attributes['backgroundColor'].';' . PHP_EOL .
                        'color: ' . ($attributes['textColor'] ?: "inherit") . ';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_testimonial_text{' . PHP_EOL .
                        'font-size: '.$attributes['textSize'].'px;'. PHP_EOL .
                        'text-align: '.$attributes['textAlign'].';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix. ' .dbe_testimonial_author{' . PHP_EOL .
                        'text-align: '.$attributes['authorAlign'].';' . PHP_EOL .
                    '}' . PHP_EOL .
                    $prefix . ' .dbe_testimonial_author_role{' . PHP_EOL .
                        'text-align: '.$attributes['authorRoleAlign'].';' . PHP_EOL .
                    '}' . PHP_EOL;
                    break;
                case 'dbe/post-grid':
                    $prefix = '#dbe_post-grid-block_' . $attributes['blockID'];
                    break;
            }
        }
    }
    $blockStylesheets = preg_replace( '/\s+/', ' ', $blockStylesheets );
    ob_start(); ?>

<style><?php echo($blockStylesheets); ?></style>
    
    <?php
    ob_end_flush();
}
add_action('wp_head', 'dbe_include_block_attribute_css');

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function dafunda_blocks_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'dafunda_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor', 'wp-api'), // Dependencies, defined above.
		Dafunda_Blocks_Constants::plugin_version(), true  // Version: latest version number.
	);
    
   
	wp_enqueue_script(
		'dafunda_blocks-cgb-deactivator-js', // Handle.
		plugins_url( '/dist/deactivator.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		Dafunda_Blocks_Constants::plugin_version(), // Version: latest version number.
		true
	);

    // Styles.
    if (file_exists(wp_upload_dir()['basedir'] . '/dafunda-blocks/blocks.editor.build.css') && 
        get_option('dafunda_blocks_css_version') != Dafunda_Blocks_Constants::plugin_version()){
        $adminStyleFile = fopen(wp_upload_dir()['basedir'] . '/dafunda-blocks/blocks.editor.build.css', 'w');
        $blockDir = dirname(__DIR__) . '/src/blocks/';
        $blockList = get_option( 'dafunda_blocks', false );

        foreach ( $blockList as $key => $block ) {
            $blockDirName = strtolower(str_replace(' ', '-', 
            trim(preg_replace('/\(.+\)/', '', $blockList[ $key ]['label']))
                ));
            $adminStyleLocation = $blockDir . $blockDirName . '/editor.css';

            if(file_exists($adminStyleLocation) && $blockList[ $key ]['active']){ //also detect if block is enabled
                fwrite($adminStyleFile, file_get_contents($adminStyleLocation));
            }
            if($block['name'] === 'dbe/styled-box' && $blockList[$key]['active']){
                //add css for blocks phased out by styled box
                fwrite($adminStyleFile, file_get_contents($blockDir . 'feature-box' . '/editor.css'));
                fwrite($adminStyleFile, file_get_contents($blockDir . 'number-box' . '/editor.css'));
            }
        }
        fclose($adminStyleFile);
        dbe_update_css_version('editor');
    }
    	wp_enqueue_style(
		'dafunda_blocks-cgb-block-editor-css', // Handle.
        file_exists(wp_upload_dir()['basedir'] . '/dafunda-blocks/blocks.editor.build.css') ?
            content_url('/uploads/dafunda-blocks/blocks.editor.build.css') :
            plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		Dafunda_Blocks_Constants::plugin_version() // Version: latest version number
	);
} // End function dafunda_blocks_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'dafunda_blocks_cgb_editor_assets' );


function dbe_register_settings(){
	register_setting('dbe_settings', 'dbe_icon_choices', array(
        'type'         => 'string',
        'show_in_rest' => true,
        'default'      => '' //value should be in json
    ));
}

add_action( 'init', 'dbe_register_settings' );

/**
 * Rank Math ToC Plugins List.
 */
add_filter( 'rank_math/researches/toc_plugins', function( $toc_plugins ) {
	$toc_plugins['dafunda-blocks/dafunda-blocks.php'] = 'Dafunda Blocks';
 	return $toc_plugins;
});

// Click to Tweet Block.
require_once plugin_dir_path( __FILE__ ) . 'blocks/click-to-tweet/block.php';

// Social Share Block.
require_once plugin_dir_path( __FILE__ ) . 'blocks/social-share/block.php';

// Content toggle Block.
require_once plugin_dir_path( __FILE__ ) . 'blocks/content-toggle/block.php';

// Tabbed Content Block.
require_once plugin_dir_path( __FILE__ ) . 'blocks/tabbed-content/block.php';

// Progress Bar Block.
require_once plugin_dir_path( __FILE__ ) . 'blocks/progress-bar/block.php';

// Countdown Block
require_once plugin_dir_path( __FILE__ ) . 'blocks/countdown/block.php';

// Image Slider Block
require_once plugin_dir_path( __FILE__ ) . 'blocks/image-slider/block.php';

// Table of Contents Block
require_once plugin_dir_path( __FILE__ ) . 'blocks/table-of-contents/block.php';

// Button Block
require_once plugin_dir_path( __FILE__ ) . 'blocks/button/block.php';

// Content Filter Block
require_once plugin_dir_path( __FILE__ ) . 'blocks/content-filter/block.php';

// Call to Action Block
require_once plugin_dir_path( __FILE__ ) . 'blocks/call-to-action/block.php';

// Feature Box
require_once plugin_dir_path( __FILE__ ) . 'blocks/feature-box/block.php';

// Notification Box
require_once plugin_dir_path( __FILE__ ) . 'blocks/notification-box/block.php';

// Number Box
require_once plugin_dir_path( __FILE__ ) . 'blocks/number-box/block.php';

// Star Rating
require_once plugin_dir_path( __FILE__ ) . 'blocks/star-rating/block.php';

// Testimonial
require_once plugin_dir_path( __FILE__ ) . 'blocks/testimonial/block.php';

// Review
require_once plugin_dir_path( __FILE__ ) . 'blocks/review/block.php';

// Divider
require_once plugin_dir_path( __FILE__ ) . 'blocks/divider/block.php';

//Post-Grid
require_once plugin_dir_path( __File__ ) . 'blocks/post-grid/block.php';

//Styled Box
require_once plugin_dir_path( __FILE__ ) . 'blocks/styled-box/block.php';

//Expand
require_once plugin_dir_path( __FILE__ ) . 'blocks/expand/block.php';

// Styled List
require_once plugin_dir_path( __FILE__ ) . 'blocks/styled-list/block.php';

// How To
require_once plugin_dir_path( __FILE__ ) . 'blocks/how-to/block.php';

// Advanced Heading
require_once plugin_dir_path( __FILE__ ) . 'blocks/advanced-heading/block.php';

// Advanced Video
require_once plugin_dir_path( __FILE__ ) . 'blocks/advanced-video/block.php';
