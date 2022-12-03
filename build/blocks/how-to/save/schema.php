<?php
$SCHEMEJSON = [
    "@context" => "http://schema.org",
    "@type" => "HowTo",
    "name" => str_replace("\'", "'", wp_filter_nohtml_kses($title)),
    "description" => str_replace(
        "\'",
        "'",
        wp_filter_nohtml_kses($introduction)
    ),
];

if (array_unique($totalTime) !== [0]) {
    $SCHEMEJSON["totalTime"] = $ISOTotalTime;
}

if ($videoURL) {
    $SCHEMEJSON["video"] = [
        "@type" => "VideoObject",
        "name" => str_replace("\'", "'", wp_filter_nohtml_kses($videoName)),
        "description" =>
        str_replace("\'", "'", wp_filter_nohtml_kses($videoDescription)) ?:
            __("No description provided"),
        "duration" => generate_iso_duration_code($videoDuration),
        "thumbnailUrl" => esc_url($videoThumbnailURL),
        "contentUrl" => esc_url($videoURL),
        "embedUrl" => esc_url($videoURL),
        "uploadDate" => date("c", $videoUploadDate),
    ];
    if ($clips) {
        $SCHEMEJSON["video"]["hasPart"] = "[" . $clips . "]";
    }
}

if ($cost > 0) {
    $SCHEMEJSON["estimatedCost"] = [
        "@type" => "MonetaryAmount",
        "currency" => str_replace(
            "\'",
            "'",
            wp_filter_nohtml_kses($costCurrency)
        ),
        "value" => wp_filter_nohtml_kses($cost),
    ];
}

$SCHEMEJSON["supply"] = [];
if ($advancedMode && $includeSuppliesList) {
    if (isset($supplies) && count($supplies) > 0) {
        foreach ($supplies as $i => $s) {
            $suppliesScheme = [
                "@type" => "HowToSupply",
                "name" => str_replace(
                    "\'",
                    "'",
                    wp_filter_nohtml_kses($s["name"])
                ),
                "url" => get_permalink() . "#supply" . $i,
            ];
            if ($s["imageURL"]) {
                $suppliesScheme["image"] = $s["imageURL"];
            }

            array_push($SCHEMEJSON["supply"], $suppliesScheme);
        }
    }
}

$SCHEMEJSON["tool"] = [];
if ($advancedMode && $includeToolsList) {
    if (isset($tools) && count($tools) > 0) {
        foreach ($tools as $i => $t) {
            $toolsScheme = [
                "@type" => "HowToTool",
                "name" => str_replace(
                    "\'",
                    "'",
                    wp_filter_nohtml_kses($t["name"])
                ),
                "url" => get_permalink() . "#tool" . $i,
            ];
            if ($s["imageURL"]) {
                $toolsScheme["image"] = $t["imageURL"];
            }

            array_push($SCHEMEJSON["tool"], $toolsScheme);
        }
    }
}

$SCHEMEJSON["step"] = [];
if ($useSections) {
    foreach ($section as $i => $s) {
        $stepsScheme = [
            "@type" => "HowToSection",
            "name" => str_replace(
                "\'",
                "'",
                wp_filter_nohtml_kses($s["sectionName"])
            ),
        ];
        $stepsScheme["itemListElement"] = [];
        foreach ($s["steps"] as $j => $step) {
            $stepScheme = [
                "@type" => "HowToStep",
                "name" => str_replace(
                    "\'",
                    "'",
                    wp_filter_nohtml_kses($step["title"])
                ),
                "url" => get_permalink() . "#" . $step["anchor"],
            ];

            if ($advancedMode) {
                // $stepScheme["url"] = get_permalink() . "#" . $step["anchor"];
                if ($step["hasVideoClip"]) {
                    $stepScheme["video"] = [
                        "@id" => $step["anchor"],
                    ];
                }
            }

            if ($step["stepPic"]["url"]) {
                $stepScheme["image"] = $step["stepPic"]["url"];
            }
            $stepScheme["itemListElement"] = [
                [
                    "@type" => "HowToDirection",
                    "text" => "",
                ],
            ];
            if ($step["title"] !== "") {
                $stepScheme["itemListElement"][0]["text"] =
                    str_replace(
                        "\'",
                        "'",
                        wp_filter_nohtml_kses($step["title"])
                    ) . " ";
            }
            $stepScheme["itemListElement"][0]["text"] .= str_replace(
                "\'",
                "'",
                wp_filter_nohtml_kses($step["direction"])
            );

            if ($step["tip"] !== "") {
                // Belum ada, gak paham maksudnya gimana
            }
            array_push($stepsScheme["itemListElement"], $stepScheme);
        }

        array_push($SCHEMEJSON["step"], $stepsScheme);
    }
} else {
    if (isset($section) && count($section) > 0) {
        foreach ($section[0]["steps"] as $index => $step) {
            $stepScheme = [
                "@type" => "HowToStep",
                "name" => str_replace(
                    "\'",
                    "'",
                    wp_filter_nohtml_kses($step["title"])
                ),
                "url" => get_permalink() . "#" . $step["anchor"],
            ];

            if ($advancedMode) {
                // $stepScheme["url"] = get_permalink() . "#" . $step["anchor"];
                if ($step["hasVideoClip"]) {
                    $stepScheme["video"] = [
                        "@id" => $step["anchor"],
                    ];
                }
            }

            $stepScheme["image"] = $step["stepPic"]["url"];
            $stepScheme["itemListElement"] = [
                [
                    "@type" => "HowToDirection",
                    "text" => "",
                ],
            ];
            if ($step["title"] !== "") {
                $stepScheme["itemListElement"][0]["text"] =
                    str_replace(
                        "\'",
                        "'",
                        wp_filter_nohtml_kses($step["title"])
                    ) . " ";
            }
            $stepScheme["itemListElement"][0]["text"] .= str_replace(
                "\'",
                "'",
                wp_filter_nohtml_kses($step["direction"])
            );

            if ($step["tip"] !== "") {
                // Belum ada, gak paham maksudnya gimana
            }

            array_push($SCHEMEJSON["step"], $stepScheme);
        }
    }
}

$SCHEMEJSON["yield"] = str_replace(
    "\'",
    "'",
    wp_filter_nohtml_kses($howToYield)
);
$SCHEMEJSON["image"] = $finalImageURL;
$SCHEMEJSON["aggregateRating"] = [
    "@type" => "AggregateRating",
    "ratingValue" => str_replace(
        "\'",
        "'",
        wp_filter_nohtml_kses($howToRatingValue)
    ),
    "bestRating" => "5",
    "worstRating" => "1",
    "ratingCount" => str_replace(
        "\'",
        "'",
        wp_filter_nohtml_kses(intval($howToRatingCount))
    ),
];
$SCHEMEJSON = json_encode(
    $SCHEMEJSON,
    JSON_UNESCAPED_UNICODE |
        JSON_PRETTY_PRINT |
        JSON_UNESCAPED_SLASHES |
        JSON_HEX_TAG |
        JSON_HEX_AMP |
        JSON_HEX_APOS |
        JSON_HEX_QUOT
);
$SCHEMEJSON =
    PHP_EOL .
    '<script type="application/ld+json">' .
    PHP_EOL .
    $SCHEMEJSON .
    PHP_EOL .
    "</script>";
?>

<script type="application/ld+json">
    <?= $schemejson ?>
</script>
