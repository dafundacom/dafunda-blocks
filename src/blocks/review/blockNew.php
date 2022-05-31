<?php
function dbe_generatePercentageBar($value, $id, $activeColor, $inactiveColor)
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
    '"
                    stroke-width="1"
                ></path>
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

function dbe_filterJsonldString($string)
{
  return str_replace("\'", "'", wp_filter_nohtml_kses($string));
}

function dbe_render_review_block($attributes)
{
  require_once dirname(dirname(__DIR__)) . "/common.php";

  extract($attributes);
  $parsedItems = isset($parts) ? $parts : json_decode($items, true);

  if ($blockID === "") {
    $blockID = $ID;
  }

  $extractedValues = array_map(function ($item) {
    return $item["value"];
  }, $parsedItems);

  $average = round(array_sum($extractedValues) / count($extractedValues), 1);

  ob_start();
?>

  <div class="review_block <?= isset($className) ? " " . esc_attr($className) : "" ?>" id="review_<?= $blockID ?>">

    <p class="review_item_name" <?= $blockID === "" ? ' style="text-align: ' . $titleAlign . ';"' : "" ?>>
      <?= $itemName ?>
    </p>

    <p class="review_author_name" <?= $blockID === "" ? ' style="text-align: ' . $authorAlign . ';"' : "" ?>>
      <?= $authorName ?>
    </p>

    <?php if (($enableImage || $enableDescription) && ($imgURL !== "" || $description !== "")) : ?>
      <div class="review_description_container review_<?= $imgPosition ?>_image">
        <?php if ($enableImage && $imgURL != "") : ?>
          <img src="<?= $imgURL ?>" alt="<?= $imgAlt ?>" class="review_image">
        <?php endif ?>

        <?php if ($enableDescription && $description != "") : ?>
          <div class="review_description">
            <?= $description ?>
          </div>
        <?php endif ?>
      </div>
    <?php endif ?>

    <?php foreach ($parsedItems as $key => $item) : ?>

      <div class="review_<?= $valueType === "percent" ? "percentage_" : "" ?>entry">
        <span><?= $item["label"] ?></span>
        <?php if ($valueType === "star") : ?>
          <?= dbe_generateStarDisplay(
            $item["value"],
            $starCount,
            $blockID . "-" . $key,
            $inactiveStarColor,
            $activeStarColor,
            $starOutlineColor,
            "review_stars",
            "review_star_filter-"
          ) ?>
        <?php else : ?>
          <?= dbe_generatePercentageBar(
            $item["value"],
            $blockID . "-" . $key,
            $activePercentBarColor,
            $percentBarColor ?: "#d9d9d9"
          ) ?>
        <?php endif ?>
      </div>
    <?php endforeach ?>

    <div class="review_summary">
      <?php if ($useSummary) : ?>
        <p class="review_summary_title">
          <?= $summaryTitle ?>
        </p>
      <?php endif ?>
      <div class="review_overall_value">
        <?php if ($useSummary) : ?>
          <p><?= $summaryDescription ?></p>
        <?php endif ?>

        <div class="review_average">
          <span class="review_rating">
            <?= $average ?> <?= $valueType === "percent" ? "%" : "" ?>
          </span>

          <?php if ($valueType === "star") : ?>
            <?= dbe_generateStarDisplay(
              $average,
              $starCount,
              $blockID . "-average",
              $inactiveStarColor,
              $activeStarColor,
              $starOutlineColor,
              "review_average_stars",
              "review_star_filter-"
            ) ?>
          <?php endif ?>
        </div>
      </div>

      <div class="review_cta_panel">
        <?php if ($enableCTA && $callToActionURL !== "") : ?>
          <div class="review_cta_main">

            <a href="<?= esc_url($callToActionURL) ?>" <?= $ctaOpenInNewTab ? 'target="_blank" ' : "" ?> rel="<?= $ctaNoFollow ? "nofollow " : "" ?><?= $ctaIsSponsored ? "sponsored " : "" ?>noopener noreferrer" <?= $blockID === "" ? 'style="color: ' . $callToActionForeColor . ';"' : "" ?>>
              <button class="review_cta_btn" <?= $blockID === ""
                                                ? ' style="background-color: ' .
                                                $callToActionBackColor .
                                                "; border-color: " .
                                                $callToActionForeColor .
                                                "; color: " .
                                                $callToActionForeColor .
                                                ';"'
                                                : "" ?>>
                <?= $callToActionText === "" ? "Click here" : $callToActionText ?>
              </button>
            </a>
          </div>
        <?php endif ?>
      </div>
    </div>

    <?php if ($enableReviewSchema) : ?>
      <?php
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
        $offerCode["url"] = esc_url($callToActionURL);
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
          "description" => dbe_filterJsonldString($description),
        ]
      ];
      if ($useSummary) {
        $SCHEMEJSON["reviewBody"] = dbe_filterJsonldString($summaryDescription);
      }
      // $SCHEMEJSON["description"] = dbe_filterJsonldString($description);
      // $SCHEMEJSON["itemReviewed"] = [
      //   "@type" => $itemSubsubtype ?: $itemSubtype ?: $itemType
      // ];

      if ($itemName) {
        $SCHEMEJSON["itemReviewed"]["name"] = dbe_filterJsonldString($itemName);
      }
      if ($imgURL) {
        $SCHEMEJSON["itemReviewed"][$itemSubtype === "VideoObject"
          ? '"thumbnailUrl'
          : '"image'] = esc_url($imgURL);
      }
      // $SCHEMEJSON["itemReviewed"]["description"] = dbe_filterJsonldString($description);

      switch ($itemType) {
        case 'Book':
          $SCHEMEJSON["itemReviewed"]["author"] =  dbe_filterJsonldString($bookAuthorName);
          $SCHEMEJSON["itemReviewed"]["isbn"] =  dbe_filterJsonldString($isbn);
          $SCHEMEJSON["itemReviewed"]["sameAs"] =  esc_url($itemPage);
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
          $SCHEMEJSON["itemReviewed"]["offers"] =  $offerCode;
          break;

        case 'LocalBusiness':
          if (isset($cuisines)) {
            $SCHEMEJSON["itemReviewed"]["servesCuisine"] =  json_encode($cuisines);
          } else {
            $SCHEMEJSON["itemReviewed"]["address"] =  dbe_filterJsonldString($address);
            $SCHEMEJSON["itemReviewed"]["telephone"] =  dbe_filterJsonldString($telephone);
            $SCHEMEJSON["itemReviewed"]["priceRange"] =  dbe_filterJsonldString($priceRange);
            $SCHEMEJSON["itemReviewed"]["sameAs"] =  esc_url($itemPage);
          }
          break;

        case 'Movie':
          $SCHEMEJSON["itemReviewed"]["sameAs"] =  esc_url($itemPage);
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
          if ($itemSubtype === "VideoObject") {
            $SCHEMEJSON["itemReviewed"]["uploadDate"] =  date("Y-m-d", $videoUploadDate);
            $SCHEMEJSON["itemReviewed"]["contentUrl"] =  esc_url($videoURL);
          }
          break;


        default:
          # code...
          break;
      }

      $SCHEMEJSON["reviewRating"] = [
        "@type" => "Rating",
        "ratingValue" => $average % 1 === 0 ? $average : number_format($average, 1, ".", ""),
        "bestRating" => $valueType === "star" ? $starCount : "100",
      ];
      $SCHEMEJSON["author"] = [
        "@type" => "Person",
        "name" => dbe_filterJsonldString($authorName)
      ];
      $SCHEMEJSON["publisher"] = dbe_filterJsonldString($reviewPublisher);
      $SCHEMEJSON["datePublished"] = date("Y-m-d", $publicationDate);
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
  </div>
<?php return ob_get_clean();
}

function dbe_register_review_block()
{
  if (function_exists("register_block_type")) {
    require dirname(dirname(__DIR__)) . "/defaults.php";
    register_block_type("dbe/review", [
      "attributes" => $defaultValues["dbe/review"]["attributes"],
      "render_callback" => "dbe_render_review_block",
    ]);
  }
}

add_action("init", "dbe_register_review_block");
