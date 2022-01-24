<?php

/**
 * Enqueue frontend script for content toggle block
 *
 * @return void
 */
function dbe_content_toggle_add_frontend_assets() {
    require_once dirname(dirname(__DIR__)) . '/common.php';

    $presentBlocks = dbe_getPresentBlocks();

    $firstInstanceDetected = false;

    foreach( $presentBlocks as $block ){
        if($block['blockName'] === 'dbe/content-toggle' || $block['blockName'] === 'dbe/content-toggle-panel'
            || $block['blockName'] === 'dbe/content-toggle-block' || $block['blockName'] === 'dbe/content-toggle-panel-block'){
            if(!$firstInstanceDetected){
                wp_enqueue_script(
                    'dafunda_blocks-content-toggle-front-script',
                    plugins_url( 'content-toggle/front.build.js', dirname( __FILE__ ) ),
                    array( ),
                    Dafunda_Blocks_Constants::plugin_version(),
                    true
                );
                $firstInstanceDetected = true;
            }

            if( is_singular() && isset($block['attrs']['hasFAQSchema'])) {
                add_action('wp_footer', 'dbe_merge_faqpages', 80);
                break;
            }
        }
    }
}

if ( !class_exists( 'simple_html_dom_node' ) ) {
    require dirname( dirname( __DIR__ ) ) . '/simple_html_dom.php';
}

function dbe_render_content_toggle_block($attributes, $content){
    extract($attributes);

    return '<div class="wp-block-dbe-content-toggle' . (isset($className) ? ' ' . esc_attr($className) : '')
                . '" ' . ($blockID === '' ? '' : 'id="dbe-content-toggle-' . $blockID . '"') .
                ($preventCollapse ? ' data-preventcollapse="true"' : '') .
                ($showOnlyOne ? ' data-showonlyone="true"': '') . 'data-mobilecollapse="' . json_encode($collapsedOnMobile) . '" data-desktopcollapse="' . json_encode($collapsed) . '">'
                    . $content . '</div>';
}

function dbe_render_content_toggle_panel_block($attributes, $content){
    $classNamePrefix = 'wp-block-dbe-content-toggle';
    extract($attributes);
    $border_class = $border ? "" : "no-border ";
    $icons = json_decode(file_get_contents(__DIR__ . '/icons/icons.json'));
    $icon_class = $icons->$toggleIcon;

    return '<div id="' . $toggleID .'" class="' . $border_class . $classNamePrefix.'-accordion' . (isset($className) ? ' ' . esc_attr($className) : '') . '"'
                . ($parentID === '' ? ' style="border-color: ' . $theme . ';"' : '') . '">
                <div class="' . $classNamePrefix . '-accordion-title-wrap"'
                    . ($parentID === '' ? ' style="background-color: ' . $theme . ';"' : '') . ($preventCollapse ? ' aria-disabled="true"' : '')
                    .' aria-expanded="' . (json_encode(!$collapsed)) . '" aria-controls="dbe-content-toggle-panel-' . $index . '-' . $parentID . '" tabindex="0">
                    <' . $titleTag . ' class="' . $classNamePrefix . '-accordion-title dbe-content-toggle-title-' . $parentID . '"'
                    . ($parentID === '' ? ' style="color:' . $titleColor . ';"' : '') . '>' . $panelTitle . '</' . $titleTag . '>' .
                    ($toggleIcon === 'none' ? '' : '<div class="' . $classNamePrefix . '-accordion-toggle-wrap ' . esc_attr($toggleLocation) .
                    '"><span class="' . $classNamePrefix . '-accordion-state-indicator ' . $icon_class  .
                    ( $collapsed ? '' : ' open' ) . '"></span>
                    </div>').
                '</div><div role="region" class="' . $classNamePrefix . '-accordion-content-wrap'.
                        ($collapsed ? ' dbe-hide' : '') . '" id="dbe-content-toggle-panel-' . $index. '-' . $parentID . '">' . $content
                . '</div></div>' ;
}

function dbe_register_content_toggle_panel_block() {
	if ( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
		register_block_type( 'dbe/content-toggle-panel-block', array(
            'attributes' => $defaultValues['dbe/content-toggle-panel-block']['attributes'],
			'render_callback' => 'dbe_render_content_toggle_panel_block'));
	}
}

function dbe_register_content_toggle_block() {
	if ( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
        register_block_type( 'dbe/content-toggle-block',
            array('attributes' => $defaultValues['dbe/content-toggle-block']['attributes'],
             'render_callback' => 'dbe_render_content_toggle_block'));
	}
}

add_action('init', 'dbe_register_content_toggle_block');

add_action('init', 'dbe_register_content_toggle_panel_block');

add_action( 'wp_enqueue_scripts', 'dbe_content_toggle_add_frontend_assets' );

add_filter( 'render_block', 'dbe_content_toggle_filter', 10, 3);

function dbe_faq_questions($qna = array()){
    static $parsed_qna = array();

    if(!isset($qna)){
        $parsed_qna = array();
    }

    if(empty($qna)){
        return $parsed_qna;
    }
    else{
        $current_qna = array() ;

        $current = array_map( function($item){ return json_encode($item); }, $parsed_qna );
        $newItems = array_map( function($item){ return json_encode($item); }, $qna );

        foreach($newItems as $index => $item){
            if( !in_array($item, $current) ){
                array_push($current_qna, $qna[$index]);
            }
        }
        $parsed_qna = array_merge($parsed_qna, $current_qna);
        return true;
    }
}

function dbe_content_toggle_filter( $block_content, $block ) {

    if( "dbe/content-toggle-block" !== $block['blockName'] ) {
        return $block_content;
    }

    $output = $block_content;

    if(isset($block['attrs']['hasFAQSchema'])){
        $parsedBlockContent = str_get_html(preg_replace('/^<div class="wp-block-dbe-content-toggle(?: [^>]*)?" id="dbe-content-toggle-.*?">/',
        '<div class="toggleroot">', $block_content));

        $panel = $parsedBlockContent->find('.toggleroot>.wp-block-dbe-content-toggle-accordion>.wp-block-dbe-content-toggle-accordion-content-wrap');

        foreach($panel as $elem){
            //look for possible nested content toggles and remove existing ones
            foreach($elem->find('.wp-block-dbe-content-toggle') as $nestedToggle){
                $nestedToggle->outertext='';
            }
            foreach($elem->find('script[type="application/ld+json"]') as $nestedToggle){
                $nestedToggle->outertext='';
            }
        }

        $panel = array_map(function($elem){
            return $elem->innertext;
        }, $panel);

        $questions = array();

        foreach($block['innerBlocks'] as $key => $togglePanel){
            if(isset($panel[$key])){
                $answer = preg_replace_callback('/<([a-z1-6]+)[^>]*?>[^<]*?<\/(\1)>/i', function($matches){
                    return (in_array($matches[1], ['script', 'svg', 'iframe', 'applet', 'map',
                        'audio', 'button', 'table', 'datalist', 'form', 'frameset',
                        'select', 'optgroup', 'picture', 'style', 'video']) ? '' : $matches[0]);
                }, $panel[$key]);

                $answer = preg_replace_callback('/<\/?([a-z1-6]+).*?\/?>/i', function($matches){
                    if(in_array($matches[1], ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'br', 'ol',
                                        'ul', 'li', 'p', 'div', 'b', 'strong', 'i', 'em', 'u', 'del'])){
                        return $matches[0];
                    }
                    else{
                        $replacement = '';
                        if ($matches[1] === 'ins'){
                            $replacement = 'u';
                        }
                        elseif ($matches[1] === 'big') {
                            $replacement = 'strong';
                        }
                        elseif ($matches[1] === 'q'){
                            $replacement = 'p';
                        }
                        elseif ($matches[1] === 'dir'){
                            $replacement = 'ul';
                        }
                        elseif ($matches[1] === 'address' || $matches[1] === 'cite'){
                            $replacement = 'em';
                        }
                        elseif (in_array($matches[1], ['article', 'aside', 'blockquote', 'details', 'dialog', 'figure',
                                                'figcaption', 'footer', 'header', 'nav', 'pre', 'section', 'textarea'])){
                            $replacement = 'div';
                        }

                        return ($replacement === '' ? '' : str_replace($matches[1], $replacement, $matches[0]));
                    }
                }, $answer);

                while(preg_match_all('/<([a-z1-6]+)[^>]*?><\/(\1)>/i', $answer) > 0){ //remove empty tags and tags that only contain empty tags
                    $answer = preg_replace('/<([a-z1-6]+)[^>]*?><\/(\1)>/i', '', $answer);
                }

                //check all attributes

                $answer = preg_replace_callback('/<[a-z1-6]+( (?:(?:aria|data)-[^\t\n\f \/>"\'=]+|[a-z]+)=[\'"][\s\S]+?[\'"])>/i',
                    function($matches){
                        $attributeList = preg_replace_callback('/ ([\S]+)=([\'"])([\s\S]*?)(\2)/', function($matches){
                            return $matches[1] === 'href' ? (" href='" . $matches[3] . "'"): '';
                        }, $matches[1]);
                        return str_replace($matches[1], $attributeList, $matches[0]);
                }, $answer);

                if($answer !== "" && array_key_exists('panelTitle', $togglePanel['attrs']) && $togglePanel['attrs']['panelTitle'] !== ''){ //blank answers and questions are invalid
                    
                    array_push($questions, array(
                        '@type' => 'Question',
                        'name' => wp_filter_nohtml_kses($togglePanel['attrs']['panelTitle']),
                        'acceptedAnswer' => array(
                            '@type' => 'Answer',
                            'text' => trim(str_replace('"', '\"', $answer))
                        ) ) );
                }
            }
        }
        dbe_faq_questions($questions);
    }

  return $output;
}

function dbe_merge_faqpages(){
    ?><?php echo '<script type="application/ld+json">{
            "@context":"http://schema.org/",
            "@type":"FAQPage",
            "mainEntity": ' . json_encode(dbe_faq_questions(), JSON_UNESCAPED_SLASHES) . '}</script>';  ?>
<?php
}