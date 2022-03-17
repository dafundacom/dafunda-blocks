<?php

function dbe_render_star_rating_block($attributes){
    require_once dirname(dirname(__DIR__)) . '/common.php';

    extract($attributes);
    
    $stars = dbe_generateStarDisplay($selectedStars, $starCount, $blockID,
    'none', $starColor, $starColor, "", "star_rating_filter-", $starSize);

    if($blockID === ''){
        $stars = preg_replace_callback('/<svg ([^>]+)>/', function($svgAttributes){
            if(preg_match('/fill=\"([^"]+)\"/', $svgAttributes[1], $matches)){
                return '<svg ' . $svgAttributes[1] . ' style="fill:' . $matches[1] . ';">';
            }
            return $svgAttributes[0];
        }, $stars);
    }

    return '<div class="star-rating' . (isset($className) ? ' ' . esc_attr($className) : '') .
            '"' . ($blockID === '' ? '' : ' id="star-rating-' . $blockID . '"') . '>
                <div class="star-outer-container"' .
                    ($blockID === '' ? '  style="justify-content:' . ($starAlign === 'center' ? 'center' :
                    ('flex-' . $starAlign === 'left' ? 'start' : 'end')) . ';"' : '').'>
                    <div class="star-inner-container">'.$stars.'</div>
                </div>'.
                ($reviewText === '' ? '' : '<div class="review-text"' . ($blockID === '' ? ' style="text-align:' . $reviewTextAlign . ';"' : '') . '>' . 
                    $reviewText
                . '</div>') .
            '</div>';
}

function dbe_register_star_rating_block() {
	if( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
		register_block_type( 'dbe/star-rating-block', array(
            'attributes' => $defaultValues['dbe/star-rating-block']['attributes'],
            'render_callback' => 'dbe_render_star_rating_block'));
    }
}

add_action('init', 'dbe_register_star_rating_block');