<?php

if (!function_exists("dbe_generate_percentage_bar")) {
    function dbe_generate_percentage_bar($value, $id, $activeColor, $inactiveColor)
    {
        $percentBar = "M 0.5,0.5 L 99.5,0.5";
        return '<div class="review_percentage">
            <svg class="review_percentage_bar" viewBox="0 0 100 1" preserveAspectRatio="none" height="10">
                <path
                    class="review_percentage_bar_trail"
                    d="' .
            $percentBar .
            '" stroke="' .
            $inactiveColor .
            '"stroke-width="1"></path>
                <path
                    class="review_percentage_bar_path"
                    d="' .
            $percentBar .
            '" stroke="' .
            $activeColor .
            '"
                    stroke-width="1" stroke-dashoffset="' .
            (100 - $value) .
            'px"
                ></path>
            </svg>
            <div>' .
            $value .
            '%</div>
    </div>';
    }
}

if (!function_exists("dbe_filter_json_id_string")) {
    function dbe_filter_json_id_string($string)
    {
        return str_replace("\'", "'", wp_filter_nohtml_kses($string));
    }
}

if (!function_exists("dbe_generate_star_display")) {
    function dbe_generate_star_display(
        $value,
        $limit,
        $id,
        $inactiveStarColor,
        $activeStarColor = "#eeee00",
        $starOutlineColor = "#000000",
        $className = "",
        $maskName = "",
        $size = 20
    ) {
        $stars = "";

        $starRoute =
            "m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z";

        foreach (range(0, $limit - 1) as $current) {
            $stars .=
                '<svg xmlns="http://www.w3.org/2000/svg" height="' .
                $size .
                '" width="' .
                $size .
                '" viewBox="0 0 150 150">
			<defs><mask id="' .
                $maskName .
                $id .
                "-" .
                $current .
                '"><rect height="150" width="' .
                ($value - $current > 0
                    ? ($value - $current < 1
                        ? $value - $current
                        : 1)
                    : 0) *
                    150 .
                '" y="0" x="0" fill="#fff"/></mask></defs> <path fill="' .
                $inactiveStarColor .
                '" stroke-width="2.5"
			d="' .
                $starRoute .
                '"
			stroke="' .
                $starOutlineColor .
                '"/><path class="star" id="star' .
                $current .
                '" mask="url(#' .
                $maskName .
                $id .
                "-" .
                $current .
                ')" fill="' .
                $activeStarColor .
                '" strokeWidth="2.5"
			d="' .
                $starRoute .
                '" stroke="' .
                $starOutlineColor .
                '"/>
			</svg>';
        }

        return '<div class="' . $className . '">' . $stars . "</div>";
    }
}

if (!function_exists("dbe_render_review_block")) {
    function dbe_render_review_block($attributes)
    {
        extract($attributes);

        $parsedItems = isset($parts) ? $parts : json_decode($items, true);

        if ($blockID === "") {
            $blockID = $ID;
        }

        $extractedValues = array_map(function ($item) {
            return $item["value"];
        }, $parsedItems);

        $average = round(array_sum($extractedValues) / count($extractedValues), 1);

        $ratings = "";

        foreach ($parsedItems as $key => $item) {
            $ratings .=
                '<div class="review_' .
                ($valueType === "percent" ? "percentage_" : "") .
                'entry"><span>' .
                $item["label"] .
                "</span>" .
                ($valueType === "star"
                    ? dbe_generate_star_display(
                        $item["value"],
                        $starCount,
                        $blockID . "-" . $key,
                        $inactiveStarColor,
                        $activeStarColor,
                        $starOutlineColor,
                        "review_stars",
                        "review_star_filter-"
                    )
                    : dbe_generate_percentage_bar(
                        $item["value"],
                        $blockID . "-" . $key,
                        $activePercentBarColor,
                        $percentBarColor ? "" : "#d9d9d9"
                    )) .
                "</div>";
        }

        $offerCode =
            '"offers":{
        "@type": "' .
            $offerType .
            '",
        "priceCurrency": "' .
            dbe_filter_json_id_string($offerCurrency) .
            '",' .
            ($offerType === "AggregateOffer"
                ? '"lowPrice": "' .
                    $offerLowPrice .
                    '",
                "highPrice": "' .
                    $offerHighPrice .
                    '",
                "offerCount": "' .
                    absint($offerCount) .
                    '"'
                : '"price": "' .
                    $offerPrice .
                    '",
                "url": "' .
                    esc_url($callToActionURL) .
                    '"' .
                    ($offerExpiry > 0
                        ? ', "priceValidUntil": "' .
                            date("Y-m-d", $offerExpiry) .
                            '"'
                        : "")) .
            "}";

        $itemExtras = "";

        switch ($itemType) {
            case "Book":
                $itemExtras =
                '"author": "' .
                dbe_filter_json_id_string($bookAuthorName) .
                '",
                            "isbn": "' .
                dbe_filter_json_id_string($isbn) .
                '",
                            "sameAs": "' .
                esc_url($itemPage) .
                '"';
                break;
            case "Course":
                $itemExtras =
                '"provider": "' . dbe_filter_json_id_string($provider) . '"';
                break;
            case "Event":
                $itemExtras =
                $offerCode .
                ',
            "startDate": "' .
                date("Y-m-d", $eventStartDate) .
                '",' .
                ($eventEndDate > 0
                ? '"endDate": "' . date("Y-m-d", $eventEndDate) . '",'
                : "") .
    '"location":{
                "@type":' .
    ($usePhysicalAddress
    ? '"Place",
                "name": "' .
    dbe_filter_json_id_string($addressName) .
    '",
                "address": "' .
    dbe_filter_json_id_string($address) .
    '"'
    : '"VirtualLocation",
                "url": "' .
    esc_url($eventPage) .
    '"') .
    '},
            "organizer": "' .
    dbe_filter_json_id_string($organizer) .
    '",
            "performer": "' .
    dbe_filter_json_id_string($performer) .
    '"';
                break;
            case "Product":
                $itemExtras =
                '"brand": {
                                "@type": "Brand",
                                "name": "' .
                dbe_filter_json_id_string($brand) .
                '"
                            },
                            "sku": "' .
                dbe_filter_json_id_string($sku) .
                '",
                            "' .
                dbe_filter_json_id_string($identifierType) .
                '": "' .
                dbe_filter_json_id_string($identifier) .
                '",' .
                $offerCode;
                break;
            case "LocalBusiness":
                $itemExtras = isset($cuisines)
                ? '"servesCuisine":' . json_encode($cuisines) . ","
                : "" .
                '"address": "' .
                dbe_filter_json_id_string($address) .
                '",
                            "telephone": "' .
                dbe_filter_json_id_string($telephone) .
                '",
                            "priceRange": "' .
                dbe_filter_json_id_string($priceRange) .
                '",
                            "sameAs": "' .
                esc_url($itemPage) .
                '"';
                break;
            case "Movie":
                $itemExtras = '"sameAs": "' . esc_url($itemPage) . '"';
                break;
            case "Organization":
                $itemExtras =
                (in_array($itemSubsubtype, [ "Dentist", "Hospital", "MedicalClinic", "Pharmacy", "Physician" ])
                ? '"priceRange":"' .
                dbe_filter_json_id_string($priceRange) .
                '",'
                : "") .
    '"address": "' .
    dbe_filter_json_id_string($address) .
    '",
            "telephone": "' .
    dbe_filter_json_id_string($telephone) .
    '"';
                break;
            case "SoftwareApplication":
                $itemExtras =
                '"applicationCategory": "' .
                dbe_filter_json_id_string($appCategory) .
                '",
                            "operatingSystem": "' .
                dbe_filter_json_id_string($operatingSystem) .
                '",' .
                $offerCode;
                break;
            case "MediaObject":
                $itemExtras =
                $itemSubtype === "VideoObject"
                ? '"uploadDate": "' .
                date("Y-m-d", $videoUploadDate) .
                '", 
                    "contentUrl": "' .
                esc_url($videoURL) .
                '"'
                : "";
                break;
            default:
                $itemExtras = "";
                break;
        }

        return '<div class="review_block' .
            (isset($className) ? " " . esc_attr($className) : "") .
            '" id="review_' .
            $blockID .
            '">
        <p class="review_item_name"' .
            ($blockID === "" ? ' style="text-align: ' . $titleAlign . ';"' : "") .
            ">" .
            $itemName .
            '</p><p class="review_author_name"' .
            ($blockID === "" ? ' style="text-align: ' . $authorAlign . ';"' : "") .
            ">" .
            $authorName .
            "</p>" .
            (($enableImage || $enableDescription) &&
            ($imgURL !== "" || $description !== "")
                ? '<div class="review_description_container review_' .
                    $imgPosition .
                    '_image">' .
                    (! $enableImage || $imgURL === ""
                        ? ""
                        : '<img class="review_image" src="' .
                            $imgURL .
                            '" alt = "' .
                            $imgAlt .
                            '">') .
                    (! $enableDescription || $description === ""
                        ? ""
                        : '<div class="review_description">' .
                            $description .
                            "</div>") .
                    "</div>"
                : "") .
            $ratings .
            '<div class="review_summary">' .
            ($useSummary
                ? '<p class="review_summary_title">' . $summaryTitle . "</p>"
                : "") .
            '<div class="review_overall_value">' .
            ($useSummary ? "<p>" . $summaryDescription . "</p>" : "") .
            '<div class="review_average"><span class="review_rating">' .
            $average .
            ($valueType === "percent" ? "%" : "") .
            "</span>" .
            ($valueType === "star"
                ? dbe_generate_star_display(
                    $average,
                    $starCount,
                    $blockID . "-average",
                    $inactiveStarColor,
                    $activeStarColor,
                    $starOutlineColor,
                    "review_average_stars",
                    "review_star_filter-"
                )
                : "") .
            '</div>
        </div>
        <div class="review_cta_panel">' .
            ($enableCTA && $callToActionURL !== ""
                ? '<div class="review_cta_main">
            <a href="' .
                    esc_url($callToActionURL) .
                    '" ' .
                    ($ctaOpenInNewTab ? 'target="_blank" ' : "") .
                    'rel="' .
                    ($ctaNoFollow ? "nofollow " : "") .
                    ($ctaIsSponsored ? "sponsored " : "") .
                    'noopener noreferrer"' .
                    ($blockID === ""
                        ? '  style="color: ' . $callToActionForeColor . ';"'
                        : "") .
                    '>
                <button class="review_cta_btn"' .
                    ($blockID === ""
                        ? ' style="background-color: ' .
                            $callToActionBackColor .
                            "; border-color: " .
                            $callToActionForeColor .
                            "; color: " .
                            $callToActionForeColor .
                            ';"'
                        : "") .
                    ">" .
                    ($callToActionText === "" ? "Click here" : $callToActionText) .
                    "</button></a></div>"
                : "") .
            "</div></div>" .
            ($enableReviewSchema
                ? preg_replace(
                    "/\s+/",
                    " ",
                    '<script type="application/ld+json">{
        "@context": "http://schema.org/",
        "@type": "Review",' .
                        ($useSummary
                            ? '"reviewBody": "' .
                                dbe_filter_json_id_string($summaryDescription) .
                                '",'
                            : "") .
                        '"description": "' .
                        dbe_filter_json_id_string($description) .
                        '",
        "itemReviewed": {
            "@type":"' .
                        ($itemSubsubtype ? $itemSubtype : $itemType) .
                        '",' .
                        ($itemName
                            ? '"name":"' . dbe_filter_json_id_string($itemName) . '",'
                            : "") .
                        ($imgURL
                            ? ($itemSubtype === "VideoObject"
                                    ? '"thumbnailUrl'
                                    : '"image') .
                                '": "' .
                                esc_url($imgURL) .
                                '",'
                            : "") .
                        '"description": "' .
                        dbe_filter_json_id_string($description) .
                        '"' .
                        ($itemExtras === "" ? "" : "," . $itemExtras) .
                        '},
        "reviewRating":{
            "@type": "Rating",
            "ratingValue": "' .
                        ($average % 1 === 0
                            ? $average
                            : number_format($average, 1, ".", "")) .
                        '",
            "bestRating": "' .
                        ($valueType === "star" ? $starCount : "100") .
                        '"
        },
        "author":{
            "@type": "Person",
            "name": "' .
                        dbe_filter_json_id_string($authorName) .
                        '"
        },
        "publisher": "' .
                        dbe_filter_json_id_string($reviewPublisher) .
                        '",
        "datePublished": "' .
                        date("Y-m-d", $publicationDate ?? 0) .
                        '",
        "url": "' .
                        get_permalink() .
                        '"
    }</script>'
                )
                : "") .
            "</div>";
    }
}

echo dbe_render_review_block($attributes);
