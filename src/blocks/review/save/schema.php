<?php if ($enableReviewSchema) : ?>
<?php
    $author_id = get_the_author_meta('ID');
    $total_breakdown_percentage = 0;
    foreach ($breakdowns as $key => $breakdown) {
        $total_breakdown_percentage = $total_breakdown_percentage +  floatval($breakdown["value"]);
    }
    $result_total_breakdown_percentage = intval($total_breakdown_percentage / count($breakdowns));
    if ($result_total_breakdown_percentage > 100) {
        $result_total_breakdown_percentage = 100;
    }
    $average = $result_total_breakdown_percentage;

    $offerCode = [
      "@type" => $offerType,
      "priceCurrency" => dbe_filterJsonldString($offerCurrency)
    ];

    if ($offerType === "AggregateOffer") {
        $offerCode["lowPrice"] = $offerLowPrice;
        $offerCode["highPrice"] = $offerHighPrice;
        $offerCode["offerCount"] = absint($offerCount);
    } else {
        $offerCode["price"] = $offerPrice;
        // $offerCode["url"] = esc_url($callToActionURL);
        if ($offerExpiry > 0) {
            $offerCode["priceValidUntil"] = date("Y-m-d", $offerExpiry);
        }
    }

$SCHEMEJSON = [
  "@context" => "http://schema.org",
  "@type" => "Review",
  "description" => dbe_filterJsonldString($description),
  "itemReviewed" => [
    "@type" => $itemSubsubtype ?: $itemSubtype ?: $itemType,
    "name" => $title,
    "description" => dbe_filterJsonldString($description),
    "image" => $background_image,
  ]
];
// if ($useSummary) {
//     $SCHEMEJSON["reviewBody"] = dbe_filterJsonldString($summaryDescription);
// }

if ($background_image) {
    $SCHEMEJSON["itemReviewed"][$itemSubtype === "VideoObject"
    ? '"thumbnailUrl'
    : '"image'] = esc_url($background_image) || "";
}
// $SCHEMEJSON["itemReviewed"]["description"] = dbe_filterJsonldString($description);

switch ($itemType) {
    case 'Book':
        $SCHEMEJSON["itemReviewed"]["author"] =  dbe_filterJsonldString($bookAuthorName);
        $SCHEMEJSON["itemReviewed"]["isbn"] =  dbe_filterJsonldString($isbn);
        // $SCHEMEJSON["itemReviewed"]["sameAs"] =  esc_url($itemPage);
        break;

    case 'Course':
        $SCHEMEJSON["itemReviewed"]["provider"] =  dbe_filterJsonldString($provider);
        break;

    case 'Event':
        $SCHEMEJSON["itemReviewed"]["offers"] =  $offerCode;
        $SCHEMEJSON["itemReviewed"]["startDate"] =  date("Y-m-d", $eventStartDate);
        if ($eventEndDate > 0) {
            $SCHEMEJSON["itemReviewed"]["endDate"] = date("Y-m-d", $eventEndDate);
        }
        if ($usePhysicalAddress) {
            $SCHEMEJSON["itemReviewed"]["location"] = [
            "@type" => "Place",
            "name" => dbe_filterJsonldString($addressName),
            "address" => dbe_filterJsonldString($address),
          ];
        } else {
            $SCHEMEJSON["itemReviewed"]["location"] =  [
            "@type" => "VirtualLocation",
            "url" => "esc_url($eventPage)"
          ];
        }
        $SCHEMEJSON["itemReviewed"]["organizer"] = dbe_filterJsonldString($organizer);
        $SCHEMEJSON["itemReviewed"]["performer"] = dbe_filterJsonldString($performer);
        break;

    case 'Product':
        $SCHEMEJSON["itemReviewed"]["brand"] = [
          "@type" => "Brand",
          "name" => dbe_filterJsonldString($brand),
        ];
        $SCHEMEJSON["itemReviewed"]["sku"] = dbe_filterJsonldString($sku);
        $SCHEMEJSON["itemReviewed"][dbe_filterJsonldString($identifierType)] = dbe_filterJsonldString($identifier);
        // $SCHEMEJSON["itemReviewed"]["offers"] =  $offerCode;
        break;

    case 'LocalBusiness':
        if (isset($cuisines)) {
            $SCHEMEJSON["itemReviewed"]["servesCuisine"] =  json_encode($cuisines);
        } else {
            $SCHEMEJSON["itemReviewed"]["address"] =  dbe_filterJsonldString($address);
            $SCHEMEJSON["itemReviewed"]["telephone"] =  dbe_filterJsonldString($telephone);
            $SCHEMEJSON["itemReviewed"]["priceRange"] =  dbe_filterJsonldString($priceRange);
            // $SCHEMEJSON["itemReviewed"]["sameAs"] =  esc_url($itemPage);
        }
        break;

    case 'Movie':
        // $SCHEMEJSON["itemReviewed"]["sameAs"] =  esc_url($itemPage);
        break;

    case 'Organization':
        if (in_array($itemSubsubtype, [
          "Dentist",
          "Hospital",
          "MedicalClinic",
          "Pharmacy",
          "Physician",
        ])) {
            $SCHEMEJSON["itemReviewed"]["priceRange"] =  dbe_filterJsonldString($priceRange);
        }
        $SCHEMEJSON["itemReviewed"]["address"] =  dbe_filterJsonldString($address);
        $SCHEMEJSON["itemReviewed"]["telephone"] =  dbe_filterJsonldString($telephone);

        break;

    case 'SoftwareApplication':
        $SCHEMEJSON["itemReviewed"]["applicationCategory"] =  dbe_filterJsonldString($appCategory);
        $SCHEMEJSON["itemReviewed"]["operatingSystem"] =  dbe_filterJsonldString($operatingSystem);
        $SCHEMEJSON["itemReviewed"]["offers"] =  $offerCode;
        break;

    case 'MediaObject':
        // if ($itemSubtype === "VideoObject") {
        //     $SCHEMEJSON["itemReviewed"]["uploadDate"] =  date("Y-m-d", $videoUploadDate);
        //     $SCHEMEJSON["itemReviewed"]["contentUrl"] =  esc_url($videoURL);
        // }
        break;


    default:
        # code...
        break;
}

$SCHEMEJSON["reviewRating"] = [
  "@type" => "Rating",
  "ratingValue" => $average,
  "bestRating" => "100",
];
$SCHEMEJSON["author"] = [
  "@type" => "Person",
  "name" => get_the_author_meta('display_name', $author_id),
  "url" => get_author_posts_url($author_id),
  "email" => get_the_author_meta('user_email', $author_id) ?? "",
];
$SCHEMEJSON["publisher"] = dbe_filterJsonldString($reviewPublisher);
$SCHEMEJSON["datePublished"] = date("Y-m-d", $reviewPublicationDate);
$SCHEMEJSON["url"] = get_permalink();

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

<?= $SCHEMEJSON ?>
<?php endif ?>
