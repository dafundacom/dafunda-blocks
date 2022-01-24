<?php

function dbe_generatePercentageBar($value, $id, $activeColor, $inactiveColor ){
    $percentBar = "M 0.5,0.5 L 99.5,0.5";
    return '<div class="dbe_review_percentage">
            <svg class="dbe_review_percentage_bar" viewBox="0 0 100 1" preserveAspectRatio="none" height="10">
                <path
                    class="dbe_review_percentage_bar_trail"
                    d="' . $percentBar . '" stroke="' . $inactiveColor . '"
                    stroke-width="1"
                ></path>
                <path
                    class="dbe_review_percentage_bar_path"
                    d="' . $percentBar . '" stroke="' . $activeColor . '"
                    stroke-width="1" stroke-dashoffset="' . (100 - $value) . 'px"
                ></path>
            </svg>
            <div>' . $value . '%</div>
    </div>';
}

function dbe_filterJsonldString($string){
    return str_replace("\'", "'", wp_filter_nohtml_kses($string));
}

function dbe_render_review_block($attributes){
    require_once dirname(dirname(__DIR__)) . '/common.php';
    
    extract($attributes);
    $parsedItems = isset($parts) ? $parts : json_decode($items, true);

    if($blockID === ''){
        $blockID = $ID;
    }

    $extractedValues = array_map(function($item){
                                    return $item['value'];
                                }, $parsedItems);

    $average = round(array_sum($extractedValues) / count($extractedValues), 1);

    $ratings = '';

    foreach($parsedItems as $key => $item){
        $ratings .= '<div class="dbe_review_' . ($valueType === 'percent' ? 'percentage_' : '') . 'entry"><span>' . $item['label'] . '</span>' .
        ($valueType === 'star' ? dbe_generateStarDisplay($item['value'], $starCount, $blockID . '-' . $key,
                                $inactiveStarColor, $activeStarColor, $starOutlineColor, "dbe_review_stars", "dbe_review_star_filter-")
                                : dbe_generatePercentageBar($item['value'], $blockID . '-' . $key, $activePercentBarColor, $percentBarColor ?: '#d9d9d9')  ) . '</div>';
    }

    $offerCode = '"offers":{
        "@type": "' . $offerType . '",
        "priceCurrency": "' . dbe_filterJsonldString($offerCurrency) . '",' .
            ($offerType === 'AggregateOffer' ? 
                '"lowPrice": "' . $offerLowPrice . '",
                "highPrice": "' . $offerHighPrice . '",
                "offerCount": "' . absint($offerCount) . '"' 
            : '"price": "' . $offerPrice . '",
                "url": "' . esc_url($callToActionURL) . '"' .
                ($offerExpiry > 0 ? (', "priceValidUntil": "' . date("Y-m-d", $offerExpiry) . '"') : '')).
    '}';

    $itemExtras = '';

    switch ($itemType){
        case 'Book':
            $itemExtras = '"author": "'. dbe_filterJsonldString($bookAuthorName) . '",
                            "isbn": "'. dbe_filterJsonldString($isbn) . '",
                            "sameAs": "' . esc_url($itemPage) . '"';
        break;
        case 'Course':
            $itemExtras = '"provider": "' . dbe_filterJsonldString($provider) . '"';
        break;
        case 'Event':
            $itemExtras = $offerCode . ',
            "startDate": "'. date("Y-m-d", $eventStartDate) . '",' .
            ($eventEndDate > 0 ? '"endDate": "'. date("Y-m-d", $eventEndDate) . '",' : '').
            '"location":{
                "@type":'. ($usePhysicalAddress ?
                            '"Place",
                "name": "' . dbe_filterJsonldString($addressName) . '",
                "address": "' . dbe_filterJsonldString($address) . '"' :
                            '"VirtualLocation",
                "url": "' . esc_url($eventPage) . '"').
            '},
            "organizer": "' . dbe_filterJsonldString($organizer) . '",
            "performer": "' . dbe_filterJsonldString($performer) . '"';
        break;
        case 'Product':
            $itemExtras = '"brand": {
                                "@type": "Brand",
                                "name": "' . dbe_filterJsonldString($brand) . '"
                            },
                            "sku": "'. dbe_filterJsonldString($sku) .'",
                            "' . dbe_filterJsonldString($identifierType) . '": "' . dbe_filterJsonldString($identifier) . '",' . $offerCode;
        break;
        case 'LocalBusiness':
            $itemExtras =  isset($cuisines) ? ( '"servesCuisine":' . json_encode($cuisines) . ',') : '' .
                            '"address": "' . dbe_filterJsonldString($address) . '",
                            "telephone": "' . dbe_filterJsonldString($telephone) . '",
                            "priceRange": "' . dbe_filterJsonldString($priceRange) . '",
                            "sameAs": "' . esc_url($itemPage) . '"';
        break;
        case 'Movie':
            $itemExtras = '"sameAs": "' . esc_url($itemPage) . '"';
        break;
        case 'Organization':
            $itemExtras = (in_array($itemSubsubtype, array('Dentist', 'Hospital', 'MedicalClinic', 'Pharmacy', 'Physician')) ? ('"priceRange":"' . dbe_filterJsonldString($priceRange) . '",'): '').
            '"address": "' . dbe_filterJsonldString($address) . '",
            "telephone": "' . dbe_filterJsonldString($telephone) . '"';
        break;
        case 'SoftwareApplication':
            $itemExtras = '"applicationCategory": "' . dbe_filterJsonldString($appCategory) . '",
                            "operatingSystem": "' . dbe_filterJsonldString($operatingSystem) . '",' . $offerCode;
        break;
        case 'MediaObject':
            $itemExtras = $itemSubtype === 'VideoObject' ? 
                    ('"uploadDate": "' . date("Y-m-d", $videoUploadDate) . '", 
                    "contentUrl": "' . esc_url($videoURL) . '"') : '';
        break;
        default:
            $itemExtras = '';
        break;
    }

    return '<div class="dbe_review_block' . (isset($className) ? ' ' . esc_attr($className) : '') .
                '" id="dbe_review_' . $blockID . '">
        <p class="dbe_review_item_name"' . ($blockID === '' ? ' style="text-align: ' . $titleAlign . ';"' : '') . '>' .
            $itemName . '</p><p class="dbe_review_author_name"' .
            ($blockID === '' ? ' style="text-align: ' . $authorAlign . ';"' : '') . '>' . $authorName . '</p>' .
        (($enableImage || $enableDescription) && ($imgURL !== '' || $description !== '') ?
        '<div class="dbe_review_description_container dbe_review_' . $imgPosition . '_image">' .
            (!$enableImage || $imgURL === '' ? '' : '<img class="dbe_review_image" src="' . $imgURL . '" alt = "' . $imgAlt . '">') .
            (!$enableDescription || $description === '' ? '' : '<div class="dbe_review_description">' . $description . '</div>') .
        '</div>' : '').
            $ratings
    .'<div class="dbe_review_summary">' .
        ($useSummary ? '<p class="dbe_review_summary_title">' . $summaryTitle . '</p>' : '') .
        '<div class="dbe_review_overall_value">' .
            ($useSummary ? '<p>' . $summaryDescription . '</p>' : '') .
            '<div class="dbe_review_average"><span class="dbe_review_rating">' . $average . ($valueType === 'percent' ? '%':'') . '</span>' .
            ($valueType === 'star' ? dbe_generateStarDisplay($average, $starCount, $blockID . '-average',
            $inactiveStarColor, $activeStarColor, $starOutlineColor, "dbe_review_average_stars", "dbe_review_star_filter-") : '' ).
            '</div>
        </div>
        <div class="dbe_review_cta_panel">' .
        ($enableCTA && $callToActionURL !== '' ? '<div class="dbe_review_cta_main">
            <a href="' . esc_url($callToActionURL) .
                '" ' . ($ctaOpenInNewTab ? 'target="_blank" ' : '') . 'rel="' . ($ctaNoFollow ? 'nofollow ' : '') . ($ctaIsSponsored ? 'sponsored ': '') . 'noopener noreferrer"' .
                    ($blockID === '' ? '  style="color: ' . $callToActionForeColor . ';"' : '') . '>
                <button class="dbe_review_cta_btn"' . ($blockID === '' ? ' style="background-color: ' . $callToActionBackColor
                . '; border-color: ' . $callToActionForeColor . '; color: ' . $callToActionForeColor . ';"' : '') . '>' .
                    ($callToActionText === '' ? 'Click here' : $callToActionText) . '</button></a></div>' : '') .
                '</div></div>' . ($enableReviewSchema ? preg_replace( '/\s+/', ' ', ('<script type="application/ld+json">{
        "@context": "http://schema.org/",
        "@type": "Review",' .
        ($useSummary ? '"reviewBody": "' . dbe_filterJsonldString($summaryDescription) . '",' : '') .
        '"description": "' . dbe_filterJsonldString($description) . '",
        "itemReviewed": {
            "@type":"' . ($itemSubsubtype ?: $itemSubtype ?: $itemType) . '",' .
            ($itemName ? ('"name":"' . dbe_filterJsonldString($itemName) . '",') : '') .
            ($imgURL ? (($itemSubtype === 'VideoObject' ? '"thumbnailUrl' : '"image') . '": "' . esc_url($imgURL) . '",') : '') .
            '"description": "' . dbe_filterJsonldString($description) .'"'
                . ($itemExtras === '' ? '' : ',' . $itemExtras ) .
        '},
        "reviewRating":{
            "@type": "Rating",
            "ratingValue": "' . ($average % 1 === 0 ? $average : number_format($average, 1, '.', '')) . '",
            "bestRating": "' . ($valueType === 'star' ? $starCount : '100') . '"
        },
        "author":{
            "@type": "Person",
            "name": "'. dbe_filterJsonldString($authorName) .'"
        },
        "publisher": "' . dbe_filterJsonldString($reviewPublisher) . '",
        "datePublished": "' . date("Y-m-d", $publicationDate) . '",
        "url": "' . get_permalink() . '"
    }</script>')) : '')
    . '</div>';
}

function dbe_register_review_block() {
	if( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
		register_block_type( 'dbe/review', array(           
            'attributes' => $defaultValues['dbe/review']['attributes'],
            'render_callback' => 'dbe_render_review_block'));
    }
}

add_action('init', 'dbe_register_review_block');